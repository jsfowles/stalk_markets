const markets = (state = [], action) => {
	switch(action.type) {
		case 'GET_MARKETS':
			return action.markets
		default:
			return state;
	}
}

export default markets;