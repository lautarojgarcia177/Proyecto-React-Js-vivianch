import React, {useState, useEffect} from "react";
import {ItemList} from './ItemList';
import './ItemList.css';
export const Item = ()=>{
    const [item, setItem]= useState([

    {
        id: 1,
        title: 'Aros Seb',
        price: 15000,
        imgUrl: "https://cdn-sa-ec.yottaa.net/609426b74f1bbfff95ac5a83/es.pandora.net/v~4b.12/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwe5b208c2/images/productimages/main/286317C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5&yocs=9_e_",
    },
    {
        id: 2,
        title: 'Aros Snitch',
        price: 18000,
        imgUrl: "https://cdn-sa-ec.yottaa.net/609426b74f1bbfff95ac5a83/es.pandora.net/v~4b.12/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwaec65f9e/images/productimages/main/260025C00_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5&yocs=9_e_",
    },    
    {
        id: 3,
        title: 'Pulsera Reflexions',
        price: 21000,
        imgUrl: "https://cdn-sa-ec.yottaa.net/609426b74f1bbfff95ac5a83/es.pandora.net/v~4b.12/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwec757318/images/productimages/main/568666C00_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5&yocs=9_e_",
    },    
    {
        id: 4,
        title: 'Pulsera Blue',
        price: 25000,
        imgUrl: "https://cdn-sa-ec.yottaa.net/609426b74f1bbfff95ac5a83/es.pandora.net/v~4b.12/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw7d909d79/images/productimages/main/590039C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5&yocs=9_e_",
    },  
    {
        id: 5,
        title: 'Anillo Infinite Wars',
        price: 27000,
        imgUrl: "https://cdn-sa-ec.yottaa.net/609426b74f1bbfff95ac5a83/es.pandora.net/v~4b.12/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw1df3afd7/images/productimages/main/160779C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5&yocs=9_e_",
    },
    {
        id: 6,
        title: 'Anillo Nan',
        price: 35000,
        imgUrl: "https://cdn-sa-ec.yottaa.net/609426b74f1bbfff95ac5a83/es.pandora.net/v~4b.12/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw4e59c7a1/images/productimages/main/169057C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5&yocs=9_e_",
    },
]);

return(
    
        <div className="grid">
            {item.map((items)=>{
                return(
                    <ItemList
                    key={items.id}
                    title={items.title} 
                    price= {items.price}
                    imgUrl= {items.imgUrl}
                    />
                )
            })}
        </div>
)}