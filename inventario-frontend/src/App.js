import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App = () => {
    const [products, setProducts] = useState([]);
    const [editingProductId, setEditingProductId] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios.get('http://localhost:8080/api/products')
            .then(response => {
                setProducts(response.data);
            });
    };

    const handleEdit = (id) => {
        setEditingProductId(id);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/products/${id}`)
            .then(() => {
                fetchProducts();
            });
    };

    const handleFormSubmit = async (product) => {
        if (editingProductId) {
            // Actualiza el producto existente
            await axios.put(`http://localhost:8080/api/products/${editingProductId}`, product);
        } else {
            // Agrega un nuevo producto
            await axios.post('http://localhost:8080/api/products', product);
        }
        fetchProducts(); // Refresca la lista de productos
        setEditingProductId(null); // Resetea el ID de edición
    };

    return (
        <div>
            <h1>Gestión de Inventario</h1>
            <ProductForm productId={editingProductId} onFormSubmit={handleFormSubmit} />
            <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default App;
