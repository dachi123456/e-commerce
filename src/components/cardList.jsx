import React from "react";
import img1 from '../images/image 9.png'
import img2 from '../images/image 9 (1).png'
import img3 from '../images/image 9 (2).png'
import img4 from '../images/image 9 (3).png'
import img5 from '../images/image 9 (4).png'
import img6 from '../images/image 9 (5).png'
import './cardList.css'
import Card from "./card";

const CardData = [
    {img:img1, name:'Cristal (pink carnations with mix flowers)', price:125, id:1},
    {img:img2, name:'Cristal (pink carnations with mix flowers)', price:125, id:2},
    {img:img3, name:'Cristal (pink carnations with mix flowers)', price:125, id:3},
    {img:img4, name:'Cristal (pink carnations with mix flowers)', price:125, id:4},
    {img:img5, name:'Cristal (pink carnations with mix flowers)', price:125, id:5},
    {img:img6, name:'Cristal (pink carnations with mix flowers)', price:125, id:6},
];

const CardList = () => {
    
    return (
        <div className="card-list-container">
            {CardData.map((card) => (
                <Card img={card.img} name={card.name} price={card.price} key={card.id} />
            ))}
        </div>
    );
};

export default CardList;
