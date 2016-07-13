const vendorMarket = (state = [], action) => {
	switch(action.type) {
		case 'GET_VENDORMARKET':
			return action.vendorMarket
		default:
			return state;
	}
}

export default vendorMarket;