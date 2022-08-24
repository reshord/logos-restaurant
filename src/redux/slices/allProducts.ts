import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardInfo } from "../../types/types";

type initialStateProducts = {
    products: Array<CardInfo>
}

const initialState: initialStateProducts = {
    products: [
        {id: 1, image: 'https://i.ibb.co/kBYBQRS/gus.png', title: 'Гусь', count: 1, description: 'Фаршированный яблоками', weight: '225', price: 7900},
        {id: 2, image: 'https://i.ibb.co/NN09QJB/Ytka.png', title: 'Утка', count: 1, description: 'Фаршированная рисом, кураго и айвой', weight: '225', price: 220},
        {id: 3, image: 'https://i.ibb.co/Lh6MXRS/Yagnenok.png', title: 'Ягненок', count: 1, description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', weight: '225', price: 520},
        {id: 4, image: 'https://i.ibb.co/2Kxn7vk/Indeyka.png', title: 'Индейка', count: 1, description: 'Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком', weight: '225', price: 1620},
        {id: 5, image: 'https://i.ibb.co/2Kxn7vk/Indeyka.png', title: 'Индейка', count: 1, description: 'Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком', weight: '225', price: 1620},
        {id: 6, image: 'https://i.ibb.co/2Kxn7vk/Indeyka.png', title: 'Индейка', count: 1, description: 'Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком', weight: '225', price: 1620},
        {id: 7, image: 'https://i.ibb.co/2Kxn7vk/Indeyka.png', title: 'Индейка', count: 1, description: 'Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком', weight: '225', price: 1620},
        {id: 8, image: 'https://i.ibb.co/2Kxn7vk/Indeyka.png', title: 'Индейка', count: 1, description: 'Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком', weight: '225', price: 1620},
        {id: 9, image: 'https://i.ibb.co/2Kxn7vk/Indeyka.png', title: 'Индейка', count: 1, description: 'Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком', weight: '225', price: 1620},
    ]
}

const allProducts = createSlice({
    name: 'allProducts',
    initialState,
    reducers: {

    }
})

export default allProducts.reducer