import { Fragment } from "react";
import Routes from "./routers/app.routes";
import { StatusBar } from "expo-status-bar";

const Main = () => {
  return (
    <Fragment>
      <Routes />
      <StatusBar style="auto" />
    </Fragment>
  );
};

export default Main;
