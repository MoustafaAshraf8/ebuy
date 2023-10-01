import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  registered: false,
  person_id: 0,
  person_name: "name",
  person_email: "email",
  person_phone: "",
  person_address: "",
  accessToken: "",
};

export const userSlice = createSlice({
  name: "userReducer",

  initialState: {
    value: initialStateValue,
  },
  reducers: {
    signIn: (state, action) => {
      console.log("++++++++++++++++++");

      // state.value.registered = action.payload.registered;
      // state.value.person_id = action.payload.person_id;
      // state.value.person_name = action.payload.person_name;
      // state.value.person_email = action.payload.person_email;
      // state.value.person_phone = action.payload.person_phone;
      // state.value.person_address = action.payload.person_address;
      // state.value.accessToken = action.payload.accessToken;

      state.value = action.payload;
      console.log(state.value);

      console.log("++++++++++++++++++");
    },

    signOut: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
