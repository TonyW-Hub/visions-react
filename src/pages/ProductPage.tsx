import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Product from "../models/product";
import Category from "../components/category/Category";
import './product-page.scss';
import BottomNavbar from "../components/bottom-navbar/BottomNavbar";

type Props = {}

const ProductPage = (props: Props) => {
  // Récupère l'id du produit dans l'objet passer dans la route
    const { id } = useParams();

    // Permet la navigation dans l'app
    const navigate = useNavigate();

    // Gère les différents états de la récupération et de l'affichage des produits
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState<Product | null>(null);

    // Récupère les données via l'API, pour permettre l'affichage du produit
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + id)
                .then(res => res.json())
                .then((result) => {
                    setIsLoaded(true);
                    // Créer un nouveau produit à partir des données de l'API et de l'id récupéré dans les Params
                    setProduct(new Product(result.id, result.title, result.price, result.category, result.description, result.image));                           
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
      return <div className="loader"></div>;
    } else if (!product) {
        return <div>Erreur de chargement du produit</div>;
    } else {
      return (
          <div className="mainContainer">
              <div className="containerCard">
                <p className="titleCard">{product.title}</p>
                <div className="imgContainer">
                    <img src={product.image} alt={product.title} className="imgCard" />
                </div>
                <p className="descCard">{product.description}</p>
                <p className="categoryCard"><Category name={product.category} /></p>
                <div className="priceContainer">
                  <p className="priceCard">{product.getVAT() + '€'}</p>
                </div>
                <button className="btnCard" onClick={() => navigate("/")}>Retour</button>
              </div>
              <BottomNavbar />
          </div>
        );
    }
}


export default ProductPage;