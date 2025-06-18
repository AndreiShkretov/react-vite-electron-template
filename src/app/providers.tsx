import React from "react";
import { Provider } from "react-redux";
import { store } from "@shared/api/store";

export const withStore = (component: () => React.ReactNode) => () =>
  <Provider store={store}>{component()}</Provider>;
