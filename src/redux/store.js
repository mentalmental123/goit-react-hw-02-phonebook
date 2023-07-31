import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

const enhancer = devToolsEnhancer();

export const store = configureStore({ reducer: rootReducer });
