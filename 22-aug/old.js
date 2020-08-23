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
	}
}

class QuotationsStore {
	
	

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
		throw new Error("Method not implemented.");
	}

    /**
	 * Returns a list of quotations for the given product, sorted by decreasing or ascending order of the spread.
	 * @param a product
	 * @param a boolean indicating whether the returned list will be in decreasing (true) or ascending (false) order of the spread
	 * @return a List<{@link Quotation}> object
	 */
	getSpreadsListByProduct(product, decreasing) {
		throw new Error("Method not implemented.");
	}
}



module.exports = {
	Quotation,
	QuotationsStore,
}