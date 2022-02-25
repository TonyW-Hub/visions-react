import React, { FunctionComponent, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Product from '../../models/product';
import Category from '../category/Category';

import "./product-list.scss";

const ProductList: FunctionComponent = () => {

    // Gère les différents états de la récupération et de l'affichage des produits
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);

    // Permet la navigation dans l'app
    const navigate = useNavigate();

    // Récupère les données via l'API, pour permettre l'affichage des produits
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=7')
                .then(res => res.json())
                .then((result) => {
                  setIsLoaded(true);

                  let newProducts: Product[] = [];
                  
                  // Boucle sur tout les produits récupéré à partir des données de l'API
                  for (const product of result) {
                    const newProduct = new Product(product.id, product.title, product.price, product.category, product.description, product.image)
                    newProducts.push(newProduct);
                  }
                  
                  setProducts(newProducts);
                },
                (error) => {
                  setIsLoaded(true);
                  setError(error);
                }
            )
    }, []);

    // Gestion de l'affichage de la page suite à la réponse de l'API
    if (error) {
        return <div>Erreur : {error}</div>;
      } else if (!isLoaded) {
        return <div className='loader'></div>;
      } else {
        return (
          <div className='table'>
            <h1>Product Management</h1>
            <div className='thead'>
              <p className='productName'>Product Name</p>
              <div className='productCategory'>
                <p>Category</p>
                <p className='arrow'></p>
              </div>
              <p className='productPrice'>Price</p>
              <p className='productPrice VAT'>Price<small>(including VAT)</small></p>
            </div>
            {/* Créer un nouveau tableau pour chaque produit récupéré depuis l'API
              Gestion de l'affichage pour chaque élement du tableau */}
            { products.map(product => (
                <div className='items' key={product.id} onClick={() => navigate("/product/"+product.id)}>
                  <p className='items-title'>
                  {product.title}
                  </p>
                  <p className='items-category'>
                    {product.category === "men's clothing"}
                    <Category name={product.category} />
                  </p>
                  <p className='items-price'>
                    {product.price + '€'}
                  </p>
                  <p className='items-priceVAT'>
                    {product.getVAT() + '€'}
                  </p>
                </div>
                ))}
          </div>
        );
      }
}

export default ProductList;