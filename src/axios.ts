import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CardInfo, FieldValues } from "./types/types";

    
export const addProducts = createAsyncThunk('addProd', async () => {
    try {
        return await axios.get<CardInfo[]>('http://localhost:4444/').then(res => res.data)
    }catch (e) {
        console.error(e);
    }
})
export const authLogin = createAsyncThunk('authLogin', async ({email, password}: FieldValues) => {
    try {
        const {data} = await axios.post<FieldValues>('http://localhost:4444/auth/login', {
            email,
            password
        })
        return data
    }catch (e) {
        console.error(e);
    }
})
export const authRegister = createAsyncThunk('authRegister', async ({email, password, confirmPassword}: FieldValues) => {
    try {
        const {data} = await axios.post<FieldValues>('http://localhost:4444/auth/register', {
            email,
            password,
            confirmPassword
        })
        return data
    }catch (e) {
        console.error(e);
    }
})
