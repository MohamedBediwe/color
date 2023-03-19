const btn = document.getElementById("btn");
const text = document.querySelector(".text .value");
const div = document.querySelector(".bg-color");

btn.addEventListener("click", () => {
	let randomValues = `rgb(${Math.floor(Math.random() * 256)}, 
		${Math.floor(Math.random() * 256)}
	, ${Math.floor(Math.random() * 256)})`;
	text.textContent = randomValues;
	div.style.backgroundColor = randomValues;
});
