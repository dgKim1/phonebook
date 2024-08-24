let initialState = {
   contactList: []
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
  default:
    return {...state};
}
}

export default reducer;
