export default class modalEnter {
	constructor(){
		
		var body = document.querySelector("body");
		var btn = document.querySelector("#closeModal")
			
			
		body.classList.toggle("modal__shown");
				
		function hideModal() {
			body.classList.toggle("modal__shown");
			body.classList.toggle("modal__hidden");
		}
			
		btn.addEventListener("click", hideModal);

	}
}