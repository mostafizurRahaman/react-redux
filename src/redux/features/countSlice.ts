// ** import createSlice:
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// ** define the initialState type :
type TInitialState = { count: number };

// ** define the initialState :
const initialState: TInitialState = { count: 0 };

// ** create slice :
export const counterSlice = createSlice({
   name: "counter",
   initialState,
   reducers: {
      increment: (state) => {
         state.count += 1;
      },
      decrement: (state) => {
         state.count -= 1;
      },
      incrementByValue: (state, action: PayloadAction<{ value: number }>) => {
         state.count = state.count + action.payload.value;
      },
   },
});

export const { decrement, increment, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
