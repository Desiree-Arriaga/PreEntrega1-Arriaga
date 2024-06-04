import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="Welcome to our store!" />
        </div>
    );
}

export default App;