import { applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import { configureStore } from "@reduxjs/toolkit";
const composeEnhancers = compose;
// const composeEnhancers = compose;

const store = configureStore({
    reducer: reducers,
    devTools: composeEnhancers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export { store };
