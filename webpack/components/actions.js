export const getMarkets = () => {
  return(dispatch => {
		$.ajax({
			url:'/api/markets',
			type: 'GET',
		}).done( markets => {
			let obj = { type: 'GET_MARKETS', markets }
			dispatch(obj);
		}).fail( response => {
			Materialize.toast('Cannot get markets', 4000);
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
			Materialize.toast('Cannot find vendor market', 4000);
		});
	})
}