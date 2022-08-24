import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardInfo } from "../../types/types";
import {orderProd} from '../../types/types'

type initialStateType = {
    products: CardInfo[]
    isLoading: boolean
    cartOpen: boolean
    prodInCart: boolean
    prodId: null
    message: null | string
}
type prodChange = {
    payload: {
        id: number
        totalCount: number
    }
}

const initialState: initialStateType = {
    products: [],
    isLoading: true,
    cartOpen: false,
    prodInCart: false,
    prodId: null,
    message: null
}

const addProdToCart = createSlice({
    name: 'addProdToCart',
    initialState,
    reducers: {
        /* Add prod */
        pushArr: (state, action: PayloadAction<CardInfo | orderProd>) => {
                const prodInCart = state.products.find(el => el.id === action.payload.id)
                if(!prodInCart) {
                    state.products.push(action.payload)
                }   
                else {
                    prodInCart.count = prodInCart.count + 1
                }

        },
        /* Delete prod */
        deleteProdCart: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(el => action.payload !== el.id)
            state.prodInCart = false
        },
        /* Delete prod */
        cartModal: (state, action) => {
            state.cartOpen = action.payload
        },
        /* Check Prod */
        productInCart: (state, action) => {
            if(state.products.filter(el => el.id === action.payload)) {
                state.prodInCart = true
                state.prodId = action.payload
            }
        },
        // addProducts: (state, action: prodChange) => {
        //     if(state.products.length > 0) {
        //         state.products.map(el => {
        //             if(action.payload.id === el.id) {
        //                 el.price = action.payload.totalPrice
        //             }
        //         })  
        //     }
        // },
        updatePriceProd: (state, action) => {
            state.products.map(el => {
                if(action.payload.id === el.id) {
                    el.count = action.payload.totalCount
                }
            })
        }
    }
})

export const {pushArr, deleteProdCart, cartModal, productInCart, updatePriceProd} = addProdToCart.actions

export default addProdToCart.reducer