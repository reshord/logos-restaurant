import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import store, { RootState } from "../../redux/store";
import style from '../../styles/header/cartModal.module.css'
import closeModal from '../../images/header-image/closeModal.png'
import cartEmpty from '../../images/header-image/cartEmpty.png'
import { cartModal } from "../../redux/slices/products";

const CartModal = () => {
    const dispatch = useAppDispatch()

    const closeCartModal = () => {
        dispatch(cartModal(false))
        
    }

    return (
        <div className={style.cartModalBody}>
            <div className={style.cartModal}>
                    <img onClick={() => closeCartModal()} className={style.cartClose} src={closeModal} alt="" />
                    <div className={style.cartEmpty}>
                        <img className={style.cartImg} src={cartEmpty} alt="" />
                        <span>КОРЗИНА ПУСТАЯ</span>
                        <button className={style.cartBtn}>Посмотреть меню</button>
                    </div>
            </div>  
        </div>
    )
}

export default CartModal