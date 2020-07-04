import React from 'react';
import Router from '../Router';
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../components/Reducers";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import {MuiThemeProvider,createGenerateClassName,jssPreset,CssBaseline} from "@material-ui/core";
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import theme from "../style/theme";

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: document.getElementById("jss-insertion-point")
});

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

function App() {
  return (
    <Provider store={store}>
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
        <CssBaseline />
          <Router history={history} />
        </MuiThemeProvider>
      </JssProvider>    
    </Provider>
  );
};

export default App;
