import { Middleware } from "@reduxjs/toolkit";

export const CustomLogger: Middleware = (state) => (next) => (action) => {
   console.log(" current state", state.getState());
   console.log(" action", action);
   next(action);
   console.log("new State", state.getState());
};
