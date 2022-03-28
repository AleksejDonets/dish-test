import React from "react"
import { Link, useMatch, useResolvedPath} from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
	let resolved = useResolvedPath(to);
	let match = useMatch({ path: resolved.pathname, end: true });
	let classString = match ? 'block p-3 text-sm md:text-base  hover:text-lime-400 text-lime-400' : 'block p-3 text-sm md:text-base hover:text-lime-400'
	return (
		<Link to={to} 
		className={classString}
		> 
			{children}
		</Link>
	)
}

export default CustomLink