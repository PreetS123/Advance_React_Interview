import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserFormData {
    name: string;
    email: string;
  }
interface FormState {
  submittedData: UserFormData[];
}

const initialState: FormState = {
  submittedData: [],
};

export const formSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    addSubmission: (state, action: PayloadAction<UserFormData>) => {
      state.submittedData.push(action.payload);
    },
  },
});

export const { addSubmission } = formSlice.actions;
export default formSlice.reducer;
