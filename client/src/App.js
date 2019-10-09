import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import TopNav from "./layout/top-nav";
import SideNav from "./layout/side-nav";
import Footer from "./layout/footer";
import DynamicEdit from "./components/test/dynamic-edit";
import test from "./components/test/test";
import Home from "./layout/home";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <TopNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            render={() => (
              <div className="d-flex align-items-stretch">
                <SideNav />
                <div className="page-holder w-100 d-flex flex-wrap">
                  <div className="container-fluid px-xl-5">
                  <div className="container-fluid px-xl-5">
                    <Route exact path="/test" component={test} />
                    <Route exact path="/form" component={DynamicEdit} />
                  </div>
                </div>
                </div>
                </div>
            )}
          />
        </Switch>
      </div>
      <Footer />
          
    </Provider>
  );
}

export default App;
