import React, { useEffect } from "react";
import HeaderContent from "./HeaderContent";
import styles from '../../styles/content/Content.module.css'
import ContenCardBlock from "./CardContainers/ContenCardBlock";
import store, { RootState } from "../../redux/store";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CartModal from "../header/CartModal";

const Content = () => {

    const {addProdToCart} = useAppSelector<RootState>(store.getState)
    const dispatch = useAppDispatch()

    const {products, isLoading, cartOpen} = addProdToCart


    return (
        <div className={styles.content}>
            {cartOpen && (
                <CartModal />
            )}
            <HeaderContent />
            <ContenCardBlock title={'Холодные закуски'} />
            <ContenCardBlock title={'Горячие закуски'} />
            <ContenCardBlock title={'Мясные блюда'} />
        </div>
    )
}

export default Content