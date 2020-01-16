import { userdata } from "../Actions/User";

// starting with no data
const initState = {
  userdata: null
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    // tells the store that the user data is successfully retreived
    // and no longer in the process of fetching another one on user request.
    case userdata.LOAD_USER_DATA_SUCCESS:
      return {
        ...state,
        userdata: action.data
      };

    default:
      return state;
  }
};
