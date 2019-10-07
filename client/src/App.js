import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import TopNav from "./layout/top-nav";
import SideNav from "./layout/side-nav";
import Footer from "./layout/footer";

import Test from "./components/test/test";
import DynamicEdit from "./components/test/dynamic-edit";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <TopNav />
        <div className="d-flex align-items-stretch">
          <SideNav />
          <div className="page-holder w-100 d-flex flex-wrap">
            <div className="container-fluid px-xl-5">
              <Switch>
                <Route exact path="/test" component={Test} />
                <Route exact path="/form" component={DynamicEdit} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
