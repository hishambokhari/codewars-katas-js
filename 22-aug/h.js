class Quotation {
	constructor(
		product,
		timestamp,
		bidPrice,
		askPrice
	) { 
		this.product = product;
		this.timestamp = timestamp;
		this.askPrice = askPrice;
		this.bidPrice = bidPrice;
		this.spread = askPrice - bidPrice;
	}
}

class QuotationsStore {

  constructor(){
		this.quotations = [];
  }
  
	/** 
	* Register a new {@link Quotation} in the store.
	* @param quotation
	* */
	storeQuotation(quotation) {
		this.quotations.push(quotation);
	}

    /**
	 * Returns the quotation with the greater timestamp ever received for the given
	 * product. If multiple quotations are stored with the same timestamp, the most recently received one
	 * is considered the last.
	 * @param a product
	 * @return a Quotation
	 * @throws QuotationNotFound if no quotation is found.
	 */
	getLastReceivedQuotationByProduct(product) {

		let filteredQuotations = this.quotations.filter((quotation) => {
			return quotation.product === product;
		});

		if(filteredQuotations.length === 0){
			throw new Error("QuotationNotFound");
		}

		let sortedQuotations = filteredQuotations.sort((a,b) => {return b.timestamp - a.timestamp});
		return sortedQuotations[0];
	
	}

    /**
	 * Returns a list of quotations for the given product, sorted by decreasing or ascending order of the spread.
	 * @param a product
	 * @param a boolean indicating whether the returned list will be in decreasing (true) or ascending (false) order of the spread
	 * @return a List<{@link Quotation}> object
	 */

	getSpreadsListByProduct(product, decreasing) {
		// true = decreasing;
		// false = increasing;

		let filteredQuotations = this.quotations.filter((quotation) => {
			return quotation.product === product;
		});

		let sortedQuotations;
		
		if(decreasing){sortedQuotations = filteredQuotations.sort((a,b) => {return b.spread - a.spread});}
		else if(!decreasing){sortedQuotations = filteredQuotations.sort((a,b) => {return a.spread - b.spread});}


		return sortedQuotations
  }
  
}


const quotationStore = new QuotationsStore();
//given
const quotation1 = new Quotation("EUR/USD", 1000, 70, 74);
const quotation2 = new Quotation("EUR/USD", 1001, 73, 74);
const quotation3 = new Quotation("EUR/USD", 1003, 73, 77);

//when
quotationStore.storeQuotation(quotation1);
quotationStore.storeQuotation(quotation2);
quotationStore.storeQuotation(quotation3);

	quotation3.askPrice=73;
    const extractQuotations = quotationStore.getLastReceivedQuotationByProduct("EUR/USD", false);
    const extractQuotations2 = quotationStore.getSpreadsListByProduct("EUR/USD", false);
    console.log(extractQuotations);