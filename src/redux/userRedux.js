import { createSlice } from '@reduxjs/toolkit';

const userRedux = createSlice({
    name: 'user',
    initialState: {
        currentUser: {},
        // isFetching: false,
        // error:false
    },
    reducers: {
        loginStart: (state) => {
            // state.isFetching = true
        },
        loginSuccess: (state, action) => {
            // state.isFetching = false;
            state.currentUser = action.payload;
        },registerSuccess: (state, action) => {
            // state.isFetching = true;
            state.currentUser = action.payload;
        },
        logoutSuccess: (state) => {
            state.currentUser = {};

        }
    }
});

export const { loginStart, loginSuccess,loginFailure,registerSuccess,logoutSuccess} = userRedux.actions;
export default userRedux.reducer;




