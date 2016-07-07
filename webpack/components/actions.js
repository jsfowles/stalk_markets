export const getMarkets = () => {
  return(dispatch => {
		$.ajax({
			url:'/api/markets',
			type: 'GET',
		}).done( markets => {
			let obj = { type: 'GET_MARKETS', markets }
			dispatch(obj);
		}).fail( response => {
			console.log(response);
		});
	})
}