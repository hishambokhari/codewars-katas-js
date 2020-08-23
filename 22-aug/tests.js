const { QuotationsStore, Quotation } = require("../src/QuotationsStore")
const assert = require('assert');

describe("test_When_NoSaveQuotations", function () {


  //unit
  it("test_When_NoSaveQuotationsBySpreadAndProduct", function(){
    const quotationStore = new QuotationsStore();
    const extractQuotations = quotationStore.getSpreadsListByProduct("EUR/USD", true);
    const extractQuotations2 = quotationStore.getSpreadsListByProduct("EUR/USD", false);
    
    assert.equal(extractQuotations.length, 0);
    assert.equal(extractQuotations2.length, 0);
  })

  it("test_When_NoSaveQuotationsByProduct", function(){
    const quotationStore = new QuotationsStore();
    try {
      const extractQuotations = quotationStore.getLastReceivedQuotationByProduct("EUR/USD");        
    } catch (e){
      assert.equal(e.message, "QuotationNotFound");
    }
  })

  it("test_ReturnLastQuotation_When_TwoDifferentQuotationAreReceived", function () {
    const quotationStore = new QuotationsStore();
    const quotation1 = new Quotation("EUR/USD", 1000, 99, 100);
    const quotation2 = new Quotation("EUR/USD", 1001, 69, 72);
    //when
    quotationStore.storeQuotation(quotation1);
    quotationStore.storeQuotation(quotation2);

    //then
    const extractQuotations = quotationStore.getLastReceivedQuotationByProduct("EUR/USD");
    assert.equal(extractQuotations.timestamp, 1001);
  })

  it("test_QuotationsBySpreadAndProduct_When_Increasing", function () {
    const quotationStore = new QuotationsStore();
    //given
    const quotation1 = new Quotation("EUR/JPY", 1000, 70, 72);
    const quotation2 = new Quotation("EUR/JPY", 1001, 73, 76);
    //when
    quotationStore.storeQuotation(quotation1);
    quotationStore.storeQuotation(quotation2);

    //then 

    const quotations = quotationStore.getSpreadsListByProduct("EUR/JPY", false);
    assert.equal(quotations.length, 2);
    const expectedQuotation1 = quotations[0]
    assert.equal(expectedQuotation1.bidPrice, 70);
    assert.equal(expectedQuotation1.askPrice, 72);
    assert.equal(expectedQuotation1.timestamp, 1000);

    const expectedQuotation2 = quotations[1];
    assert.equal(expectedQuotation2.bidPrice, 73);
    assert.equal(expectedQuotation2.askPrice, 76);
    assert.equal(expectedQuotation2.timestamp, 1001);
  })

  it("test_QuotationsBySpreadAndProduct_When_Decreasing", function () {
    const quotationStore = new QuotationsStore();

    //given
    const quotation1 = new Quotation("EUR/JPY", 1000, 70, 72);
    const quotation2 = new Quotation("EUR/JPY", 1001, 73, 76);

    //when
    quotationStore.storeQuotation(quotation1);
    quotationStore.storeQuotation(quotation2);

    //then
    const quotations = quotationStore.getSpreadsListByProduct("EUR/JPY", true);
    assert.equal(quotations.length, 2);
    const expectedQuotation1 = quotations[0];
    assert.equal(expectedQuotation1.bidPrice, 73);
    assert.equal(expectedQuotation1.askPrice, 76);
    assert.equal(expectedQuotation1.timestamp, 1001);

    const expectedQuotation2 = quotations[1];
    assert.equal(expectedQuotation2.bidPrice, 70);
    assert.equal(expectedQuotation2.askPrice, 72);
    assert.equal(expectedQuotation2.timestamp, 1000);
  })

})