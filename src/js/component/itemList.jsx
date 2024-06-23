import React from "react";



const ItemList = (props) => {
	return (
        props.list.map((item, index) => {
            return (
                <li className="todo-salida list-group-item d-flex justify-content-between">
                    <span>{item}</span>
                    <button className="boton-delete btn text-white" onClick={() => props.delete(item)}><i className="fa-solid fa-trash"></i> </button>
                </li>
            )
        })
	);
};

export default ItemList;
