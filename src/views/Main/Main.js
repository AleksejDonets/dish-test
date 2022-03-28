import React,{ useState, useEffect }from "react";
import Dish from '../../components/Dish/Dish.js';
import Button from '../../components/Button/Button.js';
import { recipeModel } from '../../models/recipe.model.js';

const getLocalRecipes = () => {
	const array =  JSON.parse(localStorage.getItem('recipes'));
	if(array !== 'undefined')
		localStorage.setItem('recipes', JSON.stringify(array));
	return array ? array : []
}
const Main = () => {

	const [dish, setDish]  = useState(null);
	const [statusRecipe, setSatusRecipe] = useState(true);
	const [favorites, setFavorites] = useState(getLocalRecipes());

	const getRecipe = () => {
		recipeModel.getRecipe()
		.then(response => {
			setDish(response)
			setSatusRecipe(false);
		})
	};

	const setRecipeStorage = () => {
		localStorage.setItem('recipes', JSON.stringify(favorites))
	};

	useEffect(() => {
		if (!statusRecipe) {
			return;
		}
		getRecipe();
	}, [statusRecipe]);

	useEffect(() => {
		setRecipeStorage();
	},[favorites]);



	function selectFavorites (item) {
		const itemsArr = new Set(favorites);
		itemsArr.add(item);

		setFavorites(() => [...Array.from(itemsArr)]);
	}

	return (
		<div className="container mx-auto flex flex-col justify-center p-7 sm:w-3/5 md:w-2/5 md:p-0">
			{
				dish ? (
					<>
						<Dish  dishObj={dish.meals[0]} setFavRecipe={selectFavorites}/>
						<div className="btns-block text-white grid grid-cols-2 gap-4 my-10">
							<Button 
								text="Skip" 
								onClick={()=>setSatusRecipe(true)}
							/>
							<Button
								text="Like"
								onClick={() => selectFavorites(dish.meals[0])}

							/>
						</div>
					</>
				) : (
					"Loading..."
				)
			}
		</div>
	)
}

export default Main