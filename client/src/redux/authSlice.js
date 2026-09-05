// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//    user: null,
//    token: null,
//    isLoggedIn: false,
// }

// const authSlice = createSlice({

//     name: "auth",
//     initialState,

//     reducers: {
//        setUser: (state, action)  => {
//           state.user = action.payload?.user || null
//           state.token = action.payload?.token || null
//           state.isLoggedIn = !!action.payload?.token;
//        },

//        logoutUser: (state) => {
//           state.user = null;
//           state.token = null;
//           state.isLoggedIn = false
//        }
//     }
// })

// export const { setUser, logoutUser } = authSlice.actions
// export default authSlice.reducer


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      if(action.payload.token) {
          action.token = action.payload.token;
      }
      // state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;