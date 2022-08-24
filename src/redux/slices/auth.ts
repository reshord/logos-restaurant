import { createSlice } from "@reduxjs/toolkit";

type AuthType = {
    isAuth: boolean
}

const initialState: AuthType = {
    isAuth: false
}

const Auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        
    }
})

export default Auth.reducer