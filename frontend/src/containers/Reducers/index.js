import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import quiz from "./quiz";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    quiz: quiz

});