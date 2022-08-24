import React, {ReactNode, useEffect, useState} from "react";
import styles from '../../styles/cart/cart.module.css'
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import HeaderContent from "../content/HeaderContent";
import { useAppSelector } from "../../redux/hooks";
import store, { RootState } from "../../redux/store";
import CartProd from "./CartProd";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import Arrow from '../../images/header-image/Arrow.png'
import AddToOrder from "./AddToOrder";


const Cart: React.FC = () => {

    const {addProdToCart} = useAppSelector<RootState>(store.getState)
    const {products, isLoading} = addProdToCart
    const navigate = useNavigate()

    const summProd = products.reduce((acc, cur) => {
        return acc + cur.price * cur.count
    }, 0)


    useEffect(() => {
        if(products.length < 1) {
            
             navigate('/')
        }

    }, [products]);


    return (
        <div className={styles.cartPage}>
            <Header />
            <HeaderContent />
                <div className={styles.cart}>
                    <div className={styles.cartHeader}>
                        <img className={styles.headerArrow} src={Arrow} alt="" />
                        <Link to={'/'}>к выбору блюда</Link>
                    </div>
                    <div className={styles.cartTitle}>
                        <p>КОРЗИНА</p> 
                        <span>{products.length > 0 
                        ? `(в корзине ${products.length} товар(-а))`
                        : '(корзина пуста)' }</span>
                    </div>
                    <div className="cart-products">
                        {products.map(el => <CartProd key={el.id} {...el}/>)}
                    </div>
                    <div className="cart-footer">
                        <div className={styles.cartFooterTitle}>
                            ДОБАВИТЬ К ЗАКАЗУ
                        </div>
                        <div className={styles.AddToOrder}>
                            {products.map(el => <AddToOrder key={el.id} {...el}/>)}
                        </div>
                    </div>
                </div>

                <div className={styles.cartProdSumm}>
                    <div className={styles.summ}>
                        <span>Итого: {summProd} ₽</span>
                        {summProd > 600 
                        ? <p>Доставка бесплатная</p> 
                        : <p>До бесплатной доставки не хватает: {600 - summProd} ₽</p>}
                        <p>Минимальная сумма заказа 500 ₽</p>
                    </div>
                    <div className={styles.order}>
                        <button className={styles.orderBtn}>Оформить заказ</button>
                    </div>
                </div>
            <Footer />

        </div>
    )
}

export default Cart