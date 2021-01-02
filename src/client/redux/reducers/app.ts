import * as appActionCreators from "../actionCreators/app";

interface AppState {
  welcome: string;
}
const initialState: AppState = {
  welcome: "Welcome, this is the PERN Boilerplate",
};

const appReducer = (state: AppState = initialState, action: any) => {
  switch (action.type) {
    case appActionCreators.CREATE_APP:
      return state;
  }
  return state;
};

export default appReducer;
