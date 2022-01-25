import React from 'react'


const Tarifler = ({baslik, kalori, images, icindekiler}) => {
    return (
        <div className="recipe">
            <h1>{baslik}</h1>
            <img className="image" src={images} alt="Tarif Foto" />
            <ul>
                {icindekiler.map((item)=>(
                     <li>{item.text}</li>
                ))}
            </ul>
            <p>Cal: {kalori}</p>
         
        </div>
    )
}

export default Tarifler;
