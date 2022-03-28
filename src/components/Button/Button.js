import React from "react";

const Button = ({text, onClick}) => {
	return (
		<button
			className="button rounded-md bg-green-500 p-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2  text-sm h-9 sm:mt-0 sm:ml-3 sm:w-auto  md:text-base"
			onClick={onClick}
		>
			{text}
		</button>
	)
}

export default Button