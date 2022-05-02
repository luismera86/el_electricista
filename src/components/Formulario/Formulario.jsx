import React, { useState } from 'react'

const Formulario = ({finalizarCompra, setShowFormn}) => {
    const [user, setUser] = useState({
		name: '',
		email: '',
	})

    const handledSubmit = (e) => {
        e.preventDefault()
        finalizarCompra(user)
        setShowFormn(false)
    }

    const handleChangeInput = (target) => {
        setUser({...user, [target.name]: target.value})
    }

  return (
    <div>
        <form
        onChange={({target}) => {handleChangeInput(target)}}
        onSubmit={handledSubmit}
        >
            <label>Nombre y Apellido</label>
            <input name='name' value={user.name} type="text" />
            <label>Email</label>
            <input name='email' value={user.email} type="mail" />
            <button type='submit'>Finalizar Compra</button> 
        </form>    
    </div>
  )
}

export default Formulario