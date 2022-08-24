import React, { useState } from "react";
import Location from '../../images/header-image/Location.png'
import Calling from '../../images/header-image/Calling.png'
import Search from '../../images/header-image/Search.png'
import styles from '../../styles/header/header.module.css'
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import store, { RootState } from "../../redux/store";
import { cartModal } from "../../redux/slices/products";
import Profile from '../../images/header-image/Profile.png'
import '../../styles/media.css'
import cartMedia from '../../images/cards/Buy.png'

const Header = () => {

    const dispatch = useAppDispatch()
    const {addProdToCart, auth} = useAppSelector<RootState>(store.getState)

    const {products, isLoading, cartOpen} = addProdToCart
    const {isAuth} = auth

    const cartEmpty = () => {
        dispatch(cartModal(true))
    }

    return (
        <div className={styles.header}>
            <div className={styles.menu}>menu</div>
            <div className="logo">
                <Link to={'/'} className={styles.logoName}>LOGOS</Link>
            </div>
            <div className={styles.cartMedia}>
                <img className={styles.cartMediaImg} src={cartMedia} alt="" />
                <span>корзина</span>
            </div>
            <div className="search">
                <img className={styles.deliveryAddressLocation} src={Location}></img>
                <input className={styles.deliveryAddress} placeholder="Введите адрес доставки" type="text" />
                <img className={styles.search} src={Search} alt="" />
            </div>
            <div className={styles.contacts}>
                <div className={styles.contactsImage}>
                    <img src={Calling} alt="" />
                </div>
                <div className={styles.contactsNumber}>
                    <span>Контакты: </span> <br />
                    <b>+7 (917) 510-57-59</b>
                </div>
            </div>
            {products.length > 0 
            ? (
                <>
                <div className={styles.auth}>
                    <img className={styles.authImg} src={Profile} alt="" />
                    <span>{isAuth ? 'Войти' : 'Регистрация'}</span>
                </div>
                <Link to={'/cart'}>
                <div className={styles.cart}>
                    <b>Корзина</b>
                    <span className={styles.cartCounter}>{products.length}</span>
                </div>
            </Link>
            </>
            ) 
            : (
                <div onClick={() => cartEmpty()} className={styles.cart}>
                    <b>Корзина</b>
                    <span className={styles.cartCounter}>{products.length}</span>
                </div>
            )}
            
        </div>
    )
}

export default Header