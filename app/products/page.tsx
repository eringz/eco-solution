"use client";

import React, { useState, useEffect } from "react";

interface Product {
    _id: string,
    name: string,
    price: number,
    description: string,
    imageUrl: string,
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('/api/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);
        }
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <img src={product.imageUrl} alt={product.name} width={100} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products