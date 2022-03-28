import React, {useState} from "react";
import Button from "../Button/Button";

const Modal = ({active, closeModal, submitRecipe }) => {
	const [title, setTitle] = useState('');
	const [recipe, setRecipe] = useState('');

	const classString = active ? 'fixed z-10 inset-0 overflow-y-auto' : 'hidden fixed z-10 inset-0 overflow-y-auto';
	const handleSubmit = (e) => {
		e.preventDefault();
		submitRecipe(title, recipe);
		closeModal(false);
	}
	return ( 
		<div onClick={()=>closeModal(false)} className={classString} aria-labelledby="modal-title" role="dialog" aria-modal="true">
			<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

				<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

				<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


				<div onClick={e => e.stopPropagation()} className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
					<form onSubmit={(e)=> handleSubmit(e)} className="w-full">
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div className="flex-col sm:flex sm:items-start ">
								<div className="title">
									<span className="font-semibold">Add custom dish</span>
								</div>
								<div className="form flex-col sm:flex w-full">
									<input type="text" placeholder="Enter dish title" value={title} onChange={(event) => setTitle(event.target.value)} required className="border-2 my-7 h-10 p-2 focus:border-amber-300 focus:border-2 focus-visible:outline-transparent w-full"/>
									<textarea value={recipe} onChange={(event) => setRecipe(event.target.value)} placeholder="Enter dish description" required  rows="10" className="w-full border-2 p-3 resize-none focus:border-amber-300 focus:border-2 focus-visible:outline-transparent "></textarea>
								</div>
							</div>
						</div>
						<div className="justify-center px-4 py-4 sm:px-6 sm:flex text-white">
							<Button
								text="Add custom dish"
							/>
						</div>
					</form>
					
				</div>
			</div>
		</div>
	)
}

export default Modal;
