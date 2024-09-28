import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Precio: ${product.price}</p>
                    <p>{product.available ? 'Disponible' : 'No Disponible'}</p>
                    <button onClick={() => onEdit(product.id)}>Editar</button>
                    <button onClick={() => onDelete(product.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
