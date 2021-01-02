import * as React from "react";
import * as ReactDOM from "react-dom";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import store from "./redux/store";

const RootComponent: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById("root"));
