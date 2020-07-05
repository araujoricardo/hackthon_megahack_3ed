import React from "react";
import Router from "../containers/Router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../containers/Reducers";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../style/theme";
import { AppWrapper, MobileWrapper } from "./style";

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f,
];

const store = createStore(generateReducers(history), compose(...middlewares));

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppWrapper>
          <Router history={history} />
        </AppWrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
