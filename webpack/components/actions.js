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

export const getVendorMarket = () => {
  return(dispatch => {
		$.ajax({
			url:'/api/join_tables',
			type: 'GET',
		}).done( vendorMarket => {
			let obj = { type: 'GET_VENDORMARKET', vendorMarket }
			dispatch(obj);
		}).fail( response => {
			console.log(response);
		});
	})
}