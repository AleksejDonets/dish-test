import React,{ useState, useEffect, useContext }from "react";
import Dish from "../../components/Dish/Dish";
import Modal from "../../components/Modal/Modal";
import { ContextModal } from '../../App.js';
const Favorites = () => {

	const [favoritesItems, setFavorites] = useState([]);
	const [loaded, setLoaded] = useState(false);

	const [modalNew, setModalNew] = useContext(ContextModal);


	function getFavorites() {
		const array = JSON.parse(localStorage.getItem('recipes'));
		setFavorites(() => [...array]);
	
		localStorage.setItem('recipes', JSON.stringify(array))
	};
	const setNewFav = (title, recipeText) => {
		const recipe = {
			idMeal:  Math.floor(Math.random() * 9999),
			strMeal: title,
			strInstructions: recipeText,
			strMealThumb: 'http://via.placeholder.com/640x360'
		}
		const arrayRecipes = JSON.parse(localStorage.getItem('recipes'));
		arrayRecipes.push(recipe);
		localStorage.setItem('recipes', JSON.stringify(arrayRecipes))
	}
	useEffect(
		() => {
			if(loaded) return ;
			getFavorites();
			setLoaded(true);
		},
		[favoritesItems]
	);

	return (

		<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 p-10  gap-28 mb-16">
			{
				favoritesItems ? (favoritesItems.map(item => (
					<Dish 
						dishObj={item}
						key={item.idMeal}
					/>
				))):(
					<div>
						<h3>Not found</h3>
					</div>
				)
			}
			<Modal active={modalNew} closeModal={setModalNew} submitRecipe={setNewFav}/>

			
		</div>
	)
}

export default Favorites