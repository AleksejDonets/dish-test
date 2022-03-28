import {createContext, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './views/Main/Main.js';
import Favorites from './views/Favorites/Favorites.js';
import CustomLink from './components/CustomLink/CustomLink.js';

export const ContextModal = createContext(false);

function App() {
	const [modalNew, setModalNew] = useState(false);
  
	return (
		<div className="App grid ">
			<ContextModal.Provider value={[modalNew, setModalNew]}>
				<Header>
					<CustomLink to="/" > Random dish</CustomLink>
					<CustomLink to="/favorites"> Favorites</CustomLink>
				</Header>
			
			
				<Routes>
				  <Route path="/" element={<Main/>}/>
				  <Route path="/favorites" element={<Favorites/>}/>
				</Routes>
			</ContextModal.Provider>
			
		</div>
	);
}

export default App;
