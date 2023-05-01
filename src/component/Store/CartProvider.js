import React, { useState } from "react";

import CartContext from "./Cart-Context";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    const addItemHandler = (item) => {
        const itemIndex = items.findIndex((i) => {
            return i.id === item.id;
        });
        const prevItem = items[itemIndex];
        let updatedItem, updatedItems;
        if (prevItem) {
            updatedItem = {
                ...prevItem,
                amount: +prevItem.amount + +item.amount,
            };
            console.log(prevItem.amount);

            setTotalCost(
                cartContext.totalAmount +
                    (updatedItem.amount - prevItem.amount) * item.price
            );

            updatedItems = [...items];
            updatedItems[itemIndex] = updatedItem;
            setItems(updatedItems);
            return;
        } else {
            setItems([...items, item]);
            setTotalCost(cartContext.totalAmount + item.amount * item.price);
        }
    };

    const removeItemHandler = (id) => {
        const itemIndex = items.findIndex((item) => {
            return item.id === id;
        });

        let selectedItem = items[itemIndex];
        setTotalCost(cartContext.totalAmount - selectedItem.price);
        let updatedItem, updatedItems;
        if (selectedItem.amount > 1) {
            updatedItem = {
                ...selectedItem,
                amount: +selectedItem.amount - 1,
            };
            updatedItems = [...items];
            updatedItems[itemIndex] = updatedItem;
            setItems(updatedItems);
            return;
        } else {
            updatedItems = items.filter((item) => {
                return item.id !== id;
            });
            setItems(updatedItems);
        }
    };

    const cartContext = {
        items: items,
        totalAmount: totalCost,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;