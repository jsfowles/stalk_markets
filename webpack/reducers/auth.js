const auth = (state = [], action) => {
	switch(action.type) {
		case 'LOGIN':
			return {
				isAuthenticated: true,
				id: action.id,
				apiKey: action.apiKey
			}
		case 'LOGOUT':
			return {
				isAuthenticated: false,
				id: null,
				apiKey: null
			}
		default:
			return state;
	}
}

export default auth;