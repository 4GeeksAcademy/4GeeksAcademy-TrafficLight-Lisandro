import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [color1, setColor1] = useState(true)
	const [color2, setColor2] = useState(true)
	const [Color3, setColor3] = useState(true)
	//Este es el estado inicial
	//En este caso declaramos 3 estados, ya que hay 3 botones con 3 colores diferentes.

	//Despues pones la funcion que queres que se haga cuando haces click. Se puede poner despues del onClick, 
	//pero es mejor que quede aca arriba asi se ve mas comodo. Es como que se usa abajo, pero se escribe arriba.
	function cambiarColor1() {
		setColor1(false)
		setColor2(true)
		setColor3(true)

	}

	function cambiarColor2() {
		setColor1(true)
		setColor2(false)
		setColor3(true)
	}

	function cambiarColor3() {
		setColor1(true)
		setColor2(true)
		setColor3(false)
	}

	
	const ContainerSemaforo = (props) =>{
		const {children, ...rest}=props
		return <div 
		className="bg-secondary d-flex flex-column justify-content-center"
		{...rest}>		
		{children}
		</div>
	}
//Children se refiere a los 3 colores.
	
	
	const LightButton = (props) =>{
		const { bgButton,background,onClick,containerStyle}=props
		return <div 
		style={{
			background:'black',
			width:100,
			height:100, 
			alignSelf:'center',
			padding:10,
			...containerStyle,

		}} 
		>
			<div
			style={{
				background:background,
				width:80,
				height:80,
				borderRadius:25}}>
		<button 
		className={"btn " } 
		style={{
			background:bgButton,
			height:'100%',
			width:'100%',
			borderRadius:50,
		}}
		onClick={onClick} 
		type="button"/>
		</div>
		</div> 
	}

	return (
		<ContainerSemaforo>
			<div
		style={{
			width:10,
			height:100,
			background: '#000',
			alignSelf:'center'
		}}/>
			<LightButton 
			bgButton='red' 
			background={color1?'black':'white'}
			containerStyle={{
				borderTopLeftRadius:15,
				borderTopRightRadius:15}} 
			onClick={cambiarColor1}/>
			<LightButton bgButton='yellow' background={color2?'black':'white'} onClick={cambiarColor2}/>
			<LightButton 
			bgButton='green' 
			background={Color3?'black':'white'} 
			containerStyle={{
				borderBottomLeftRadius:15,
				borderBottomRightRadius:15}} 
				onClick={cambiarColor3}/>
	
		</ContainerSemaforo>
	);
}


export default Home;
