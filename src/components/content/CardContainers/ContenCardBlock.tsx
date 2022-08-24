import React, { useRef, useState, useEffect } from "react";
import styles from '../../../styles/content/Content.module.css'
import Card from '../CardContainers/Card'
import {motion} from 'framer-motion'
import { useAppSelector } from "../../../redux/hooks";
import store, { RootState } from "../../../redux/store";
import { Link } from "react-router-dom";
import CardLoader from '../../content/CardContainers/CardLoader'

type ColdCardType = {
    title: string
}

const ContenCardBlock: React.FC<ColdCardType> = ({title}) => {

    const [width, setWidth] = useState<undefined | number>()
    const {addProdToCart, allProducts} = useAppSelector<RootState>(store.getState)
    const {products, isLoading} = addProdToCart 
    console.log(isLoading);
    
    
    

    const carousel = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setWidth(carousel.current?.offsetWidth)
    }, []);
    
    return (
        <motion.div className={styles.ContentCardBlock}>
            <div className={styles.contentTitle}>
                <span>{title}</span>
            </div>
            <motion.div ref={carousel} 
                        drag="x" 
                        dragConstraints={{right: 0, left: -1299}} 
                        className={styles.contentCards}>
                {isLoading 
                ? allProducts.products.map(el => <Card key={el.id} {...el} />) 
                : Array(10).fill(<Card id={0} image={""} title={""} count={0} description={""} weight={""} price={0} />).map(el => <CardLoader />)}
            </motion.div>
        </motion.div>
    )
}

export default ContenCardBlock