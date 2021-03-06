import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContext from './context/CartContext'

function App() {
	return (
		<BrowserRouter>
			<CartContext>
				<div>
					<NavBar />
					<Routes>
						<Route
							path='/'
							element={
								<ItemListContainer saludo='Bienvenidos a la tienda online de El Electrisista' />
							}
						/>
						<Route
							path='/category/:name'
							element={
								<ItemListContainer saludo='Bienvenidos a la tienda online de El Electrisista' />
							}
						/>
						<Route path='/producto/:id' element={<ItemDetailContainer />} />
						<Route path='/cart' element={<Cart />} />
					</Routes>
				</div>
			</CartContext>
		</BrowserRouter>
	)
}

export default App
