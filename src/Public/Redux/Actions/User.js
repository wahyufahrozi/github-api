export const userdata = {
  LOAD_USER_DATA: "LOAD_USER_DATA",
  LOAD_USER_DATA_SUCCESS: "LOAD_USER_DATA_SUCCESS"
};

export const actions = {
  loadUserData: name => ({
    type: userdata.LOAD_USER_DATA,
    name
  }),
  loadUserDataSuccess: data => ({
    type: userdata.LOAD_USER_DATA_SUCCESS,
    data
  })
};
