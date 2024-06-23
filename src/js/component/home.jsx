import React, { useState } from "react";

import ItemList from "./itemList";

const Home = () => {

const [itemList, setItemList] = useState("")
const [list, setList] = useState([])

function addListItem(e) {

	if (e.key == "Enter" && e.target.value !== "") {
		setList([...list, itemList]) 
		console.log(list);
		
		e.target.value = ""
	}
	
}

function deletItemList(elementToDelete) {
const newList = list.filter((item) => item !== elementToDelete)
setList(newList)
}

	return (
		<div className="text-center container">
			<div className="card">
				<div className="card-header">
					<h1 className="fs-1 opacity-25">Todos</h1>
				</div>
				<input onChange={(event) => setItemList(event.target.value)} onKeyDown={(e) => addListItem(e)} placeholder="Nueva Tarea"></input>
				<ul className="list-group list-group-flush">
					<ItemList delete={deletItemList} list={list}/>
				</ul>
			</div>
		</div>
	);
};

export default Home;
