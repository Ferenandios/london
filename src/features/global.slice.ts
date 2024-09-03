import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "../types/types";

const initialState: IState = {
  email: "",
  password: "",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const { setEmail, setPassword } = globalSlice.actions;
