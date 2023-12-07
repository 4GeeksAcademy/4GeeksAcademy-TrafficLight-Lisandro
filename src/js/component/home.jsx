import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [color1, setColor1] = useState("btn-danger")
	const [color2, setColor2] = useState("btn-warning")
	const [Color3, setColor3] = useState("btn-success")
	//Este es el estado inicial
	//En este caso declaramos 3 estados, ya que hay 3 botones con 3 colores diferentes.

	//Despues pones la funcion que queres que se haga cuando haces click. Se puede poner despues del onClick, 
	//pero es mejor que quede aca arriba asi se ve mas comodo. Es como que se usa abajo, pero se escribe arriba.
	function cambiarColor1() {
		if (color1 === "btn-danger") {
			setColor1("btn-primary")
		}
	}

	function cambiarColor2() {
		if (color2 === "btn-warning") {
			setColor2("btn-primary")
		}
	}

	function cambiarColor3() {
		if (Color3 === "btn-success") {
			setColor3("btn-primary")
		}
	}

	//Aca debajo en el Return empieza lo que es la parte del HTML, seria la estructura de lo que queres mostrar y el diseño.

	//Se hace una concatenacion, despues del boton, pones el estado con el que queres que empiece, 
	//que lo declaramos arriba, al principio, en los espacios de memoria, con Color1, Color2 y Color3.

	return (
		<div className="trafficLight bg-black">
			<div className="botonRojo">
			<button className={"btn " + color1} onClick={cambiarColor1} type="button"></button>
			</div>

			<div className="botonAmarillo">	
			<button className={"btn " + color2} onClick={cambiarColor2} type="button"></button>
			</div>

			<div className="botonVerde">	
			<button className={"btn " + Color3} onClick={cambiarColor3} type="button"></button>
			</div>			
		</div>
	);
}


export default Home;
