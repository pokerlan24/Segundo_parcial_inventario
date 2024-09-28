import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = ({ onProductAdded }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProduct = { name, description, price: parseFloat(price), available };
        await axios.post('http://localhost:8080/api/products', newProduct);
        onProductAdded();
        setName('');
        setDescription('');
        setPrice('');
        setAvailable(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="number" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <label>
                Disponible:
                <input type="checkbox" checked={available} onChange={() => setAvailable(!available)} />
            </label>
            <button type="submit">Agregar Producto</button>
        </form>
    );
};

export default AddProduct;
