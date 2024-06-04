import React from 'react';

function CartWidget() {
    const cartItems = 5;

    return (
        <div>
            <i className="cart-icon">🛒</i>
            <span>{cartItems}</span>
        </div>
    );
}

export default CartWidget;