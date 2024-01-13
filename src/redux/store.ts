// ** import configureStore
import { configureStore } from "@reduxjs/toolkit";

// ** import the sliceReducers:
import counterReducer from "./features/countSlice";
import logger from "redux-logger";
import { CustomLogger } from "./middleware/customLogger";

// create store by calling the configure store function
// this function gets an object as parameter which have a reducer object.
// reducer object contain the sliceReducer with sliceName:

export const store = configureStore({
   reducer: {
      counter: counterReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(CustomLogger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// ** configure a store.
// ** provide the store with application.
