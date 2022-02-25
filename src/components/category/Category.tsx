import React from "react";
import "./category.scss";

type Props = {
    name: string
}

const Category = ({name}: Props) => {

    // Gestion de la couleur selon le nom de la catégorie
    let categoryClass = name;
    if (name === "men's clothing") {
        categoryClass = "men";
    }

    return (
        <span className={`category ${categoryClass}`}>{name}</span>
    )
}

export default Category;