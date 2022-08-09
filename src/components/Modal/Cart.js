import React from 'react'

import Modal from './Modal'
import styles from './Cart.module.css'

const Cart = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <div className={styles.total}>
                <span>
                    Turn on the <span style={{color: '#FF2625'}}>VPN</span> If no data is displayed to you!
                </span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>
                    OK
                </button>
            </div>
        </Modal>
    )
}

export default Cart