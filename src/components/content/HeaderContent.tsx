import React, { useState } from "react";
import styles from '../../styles/content/HeaderContent.module.css'
import {motion} from 'framer-motion'

const filtersProd: Array<string> = [
    'Холодные закуски',
    'Горячие закуски',
    'Мясные закуски',
    'Супы',
    'Рыбные блюда',
    'Гриль меню',
    'Фирменные блюда',
    'Напитки'
]

const HeaderContent = () => {

    const [activeFilter, setActiveFilter] = useState<number>(0)

    return (
        <motion.div drag="x" className={styles.headerContent}>
            {filtersProd.map((el, index: number) => <motion.span  onClick={() => setActiveFilter(index)} key={index} 
                                                    className={activeFilter === index 
                                                            ? styles.filterActive 
                                                            : styles.filter}>{el}</motion.span>)}
        </motion.div>
    )
}

export default HeaderContent