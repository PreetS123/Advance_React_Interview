import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterType {
  value: number;
}

const initialState: counterType = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.value + 1;
    },
    decrementCounter: (state) => {
      state.value - 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount, incrementCounter, decrementCounter } =
  counterSlice.actions;
export default counterSlice.reducer;
