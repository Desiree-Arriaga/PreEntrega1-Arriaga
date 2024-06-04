import React from 'react';

function ItemListContainer({ greeting }) {
    return (
        <div style={{ padding: '20px' }}>
            <h2>{greeting}</h2>
        </div>
    );
}

export default ItemListContainer;
