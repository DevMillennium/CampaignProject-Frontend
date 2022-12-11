import React from "react";
const Card=(props)=>{
    console.log(props);
    return ( 
        <>
            {props.products.map((product)=>
                <div className="card" style={{width:"15rem", margin:"4%",display:"inline-block",position:"inherit"}}>
                <img className="card-img-top" src={product.image} />
                <div className="card-body">
                    <p className="card-text">{product.brand}</p>
                    <p className="card-text">{product.overview}</p>
                    <p className="card-text">{product.price}</p>
                </div>
            </div>
            )}
            
            
        </>
    );
}
export default Card;