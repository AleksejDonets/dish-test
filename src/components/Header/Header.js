import React, {useContext } from "react";
import Button from '../Button/Button.js';
import { useLocation } from 'react-router-dom';
import { ContextModal } from '../../App.js';


const Header = ({children}) => {
	const [modalNew, setModalNew] = useContext(ContextModal);
	let location = useLocation();
	const stringClass = location.pathname === '/favorites' ? 'grid grid-cols-[50%_auto] md:grid-cols-3 bg-green-800 p-5 text-white mb-10'  : 'grid grid-cols-1 md:grid-cols-3 bg-green-800 p-5 text-white mb-10';
;
	return (
			<header className={stringClass}>
				<div className="logo-container hidden md:block"></div>
				<div className="nav-tabs flex justify-center align-center">
					{children}
				</div>
				<div className="fav-btn flex justify-center align-center h-14 md:w-auto md:h-6">
					{
						location.pathname === '/favorites' ? (
							<Button text="Add custom dish" onClick={() => setModalNew(true)}/>
						) : (
							<div></div>
						)
					}
					
				</div>
			</header>
	)
}
export default Header