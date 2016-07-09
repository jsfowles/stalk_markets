const vendors = (state = [], action) => {
	switch(action.type) {
		case 'GET_VENDORS':
			return action.vendors
		default:
			return state;
	}
}

export default vendors;
