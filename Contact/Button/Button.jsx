import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    console.log('styles object:', styles);
    const{isOutline, icon, text}= props
    return (
        <button className={isOutline ? styles.outline_btn : styles.btnn_dark}>
        {icon}
        {text}
        </button>
        
    )
}

export default Button
