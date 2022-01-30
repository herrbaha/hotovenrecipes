import React from 'react'


const Recipes = ({title, calorie, images, ingredients}) => {
    return (
        <div className="recipe">
            <h1>{title}</h1>
            <img className="image" src={images} alt="Recipe Foto" />
            <ul>
                {ingredients.map((item)=>(
                     <li>{item.text}</li>
                ))}
            </ul>
            <p>Cal: {calorie}</p>
         
        </div>
    )
}

export default Recipes;
