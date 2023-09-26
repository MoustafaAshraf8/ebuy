import { createSlice } from "@reduxjs/toolkit";

const x = {
  registered: false,
  person_id: 0,
  person_name: "",
  person_email: "",
  person_phone: "",
  person_address: "",
  accessToken: "",
};

export const userSlice = createSlice({
  name: "userReducer",

  initialState: {
    value: x,
  },
  reducers: {
    signIn: (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
    },

    signOut: (state) => {
      state.value = x;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
