import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
    const categories = ['Poke-Balls', 'Potions', 'Accessories'];

    return (
        <nav>
            <h1>Poke-Store</h1>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <a href="#">{category}</a>
                    </li>
                ))}
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar;
