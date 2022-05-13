import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'

const Formulario = ({ finalizarCompra, setUser }) => {
	const [nombre, setNombre] = useState('')
	const [email, setEmail] = useState('')

	useEffect(() => {
		setUser({
			nombre: nombre,
			email: email,
		})
	}, [nombre, email])

	const handledSubmit = e => {
		e.preventDefault()
		//Validación del formulario
		if([nombre, email].includes('')){
			swal('Todos los campos son obligatorios')
		}else{
			finalizarCompra()
		}
	}

	return (
		<div className=' container'>
			<h2>Completa tus datos para finalizar la compra</h2>
			<form onSubmit={handledSubmit} className='container d-flex flex-column'>
				<label htmlFor='nombre'>Nombre y Apellido</label>
				<input
					id='nombre'
					name='name'
					value={nombre}
					type='text'
					className=' form-control w-50 mt-2 mb-2'
					placeholder='Ingrese su Nombre y Apellido'
					onChange={e => {
						setNombre(e.target.value)
					}}
				/>
				<label htmlFor='mail'>Email</label>
				<input
					id='mail'
					name='email'
					value={email}
					type='mail'
					className=' form-control w-50 mt-2 mb-2'
					placeholder='Ingrese su e-mail'
					onChange={e => {
						setEmail(e.target.value)
					}}
				/>
				<button type='submit' className=' btn btn-primary w-25 mt-2'>
					Finalizar Compra
				</button>
			</form>
		</div>
	)
}

export default Formulario
