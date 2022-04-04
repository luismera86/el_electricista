import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import Header from './components/Header/Header'

function App() {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<ItemListContainer saludo='Bienvendios a la tienda online de El Electrisista' />
				<ItemDetailContainer />
			</div>
		</BrowserRouter>
	)
}

export default App
