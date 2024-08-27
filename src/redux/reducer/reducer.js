let initialState = {
   contactList: [],
   keyword: ""
};

function reducer(state=initialState,action){
  const {type,payload} = action
  switch(type){
    case "add_contact":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNum: payload.phoneNum
          }
        ]
      }
      case "SEARCH_BY_USERNAME":
        return { ...state, keyword: payload.keyword };
      default:
        return { ...state };
}
}

export default reducer;
