import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
		</Routes>
	)
}

export default App
