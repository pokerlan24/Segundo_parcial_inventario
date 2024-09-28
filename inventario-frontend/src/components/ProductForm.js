import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductForm = ({ productId, onFormSubmit }) => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        available: true,
    });

    useEffect(() => {
        if (productId) {
            axios.get(`http://localhost:8080/api/products/${productId}`)
                .then(response => {
                    setProduct(response.data);
                });
        } else {
            setProduct({ name: '', description: '', price: '', available: true });
        }
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(product);
        setProduct({ name: '', description: '', price: '', available: true }); // Resetea el formulario
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nombre del producto"
                value={product.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="description"
                placeholder="Descripción"
                value={product.description}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="price"
                placeholder="Precio"
                value={product.price}
                onChange={handleChange}
                required
            />
            <label>
                Disponible:
                <input
                    type="checkbox"
                    name="available"
                    checked={product.available}
                    onChange={(e) => setProduct({ ...product, available: e.target.checked })}
                />
            </label>
            <button type="submit">Guardar Producto</button>
        </form>
    );
};

export default ProductForm;
