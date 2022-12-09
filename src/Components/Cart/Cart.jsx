import React, {useEffect, useReducer, useState} from 'react';
import "./Cart.css";
import ps5 from "../../icons/sony_ps5.png";

import itemsApi from './CartFakeApi.json';
var data = require("./CartFakeApi.json");
function Cart() {
    const [items, setItems] = useState({
        cartItems:[],
        GrandTotal:0 }
    );

    function reducer(state, action) {
        switch (action.type) {
            case 'add':
                return [...state,action]
            case 'decrement':
                return {count: state.count - 1};
            default:
                throw new Error();
        }
    }


    const [jsonState,updateJsonState]=useState({});
    useEffect(() => {
        setItems({...items,cartItems: data.cartItems,GrandTotal: data.GrandTotal});
        updateJsonState(JSON.stringify(itemsApi))
        console.log(jsonState);
    }, []);

    const[state,dispatch]=useReducer(reducer,items)

    return (
        <div className='cart'>
            <div className="cart-title">
                <h1>Woo hoo! Lets complete your order,shall we ? </h1>
            </div>
            <div className="cart-top-option">
                <span className="c-t-o-text">CONTINUE SHOPPING</span>
                <button className="c-t-o-button btn">Check Out</button>
            </div>

            <div className="cart-items">
                {
                    state.cartItems.map((item, index) => (
                        <div className="d-flex justify-content-between" key={item.id}>
                            {
                                <>
                                    <div className="p-2 bd-highlight">
                                        <div className="cart-product-img">
                                            <img src={item.product.imageUrl} className={"c-p-img"} alt=""/>
                                        </div>
                                        <p className='cart-product-name'
                                           onClick={() => alert(item.id)}
                                        >{item.product.name}</p>
                                        <p className='cart-product-color'>colour: {item.product.color}</p>
                                        <p className='cart-product-remove'>Remove</p>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <p className={"c-p-plus"}>+</p>
                                        <input className={"c-p-input"} placeholder={item.quantity}/>
                                        <p className={"c-p-minus"}
                                        onClick={()=>{

                                        }}
                                        >-</p>
                                    </div>
                                    <div className="p-2 bd-highlight">${item.product.price} USD</div>
                                    <hr className={"cart-product-line"}/>
                                </>
                            }
                        </div>
                    ))
                }
            </div>
            <div className="cart-bottom">
                <div>
                    <span className="c-t-o-text">Grand Total:::: </span>
                    <span className="c-t-o-text">{"> "+items.GrandTotal}</span>
                    <button className="c-t-o-button btn">Check Out</button>
                </div>
            </div>
        </div>
    )
}

export default Cart