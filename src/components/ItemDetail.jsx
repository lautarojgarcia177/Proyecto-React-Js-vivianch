import './ItemDetail.css';
export const ItemDetail = (props) => {
    return (
        <div className="card-details">
            <div className="details">
                <div className="big-img">
                    <img src={props.imgUrl} alt="" />
                </div>
                <div className="box">
                    <div className="row">
                        <h2>{props.title}</h2>
                        <spam>$ {props.price}</spam>
                        <p>{props.description}</p>
                        <button className="cart">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

<div>
{item.filter((product=>product[0]{
return(
 <ItemDetail
 key={product[0].id}
 title={product[0].title} 
 price= {product[0].price}
 imgUrl= {product[0].imgUrl}
 description={product[0].description}
 />
)
}))};
</div>