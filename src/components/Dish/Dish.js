import React from "react";

const Dish = ({dishObj}) => {
	return (

		<div className="dish-container">
	
			{
				dishObj.strMealThumb ? (
					<img src={dishObj.strMealThumb} alt="" className="w-3/5 mx-auto my-2"/>
				) : (
					<img src="http://via.placeholder.com/640x360" alt=""  className="w-3/5 mx-auto my-2"/>
				)
			}
			<div className="name font-bold text-lg">
				{dishObj.strMeal}
			</div>
			{
				dishObj.strSource? (
					<div className="addition-info font-semibold text-stone-700 hover:underline my-2">
						<a href={dishObj.strSource} target="_blank" rel="noreferrer">Link to the original recipe</a>
					</div>
				): <></>
				
			}
			
			<div className="short-recipe overflow-hidden line-clamp-6 max-h-40">
				<p>
					{dishObj.strInstructions}
				</p>
			</div>
		</div>
		
	)
}

export default Dish;