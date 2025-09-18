import {createSlice} from '@reduxjs/toolkit'

type UserState = {
    isLoggedIn: boolean,
    email: string | null,
    token: string | null,
    name: string | null,
    picture: string | null,
    bio: string | null,
    role: string | null,
    _id: string | null,
}


const initialState: UserState = {
    isLoggedIn: false,
    email: null,
    token: null,
    name: null,
    picture: null,
    bio: null,
    role: null,
    _id: null,
}

type RootState = {
    user: UserState
  }


const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loggedIn: (state, action) => {
            state.isLoggedIn = true;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.name = action.payload.name;
            state.picture = action.payload.picture;
            state.bio = action.payload.bio;
            state.role = action.payload.role;
            state._id = action.payload._id;
        },
        loggedOut: (state) => {
            state.isLoggedIn = false;
            state.email = null;
            state.token = null;
            state.name = null
            state.picture = null;
            state.bio = null;
            state.role = null;
            state._id = null;
        }
    },
})


export const { loggedIn, loggedOut } = authSlice.actions

export const selectIsLoggedin = (state: RootState) => state.user.isLoggedIn
export const selectRole = (state: RootState) => state.user.role
export const selectEmail = (state: RootState) => state.user.email
export const selectToken = (state: RootState) => state.user.token
export const selectPicture = (state: RootState) => state.user.picture


export const authReducer = authSlice.reducer