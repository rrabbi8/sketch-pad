let color = "black";

document.addEventListener(`DOMContentLoaded`, function () {
	createBoard(16);

	let btn_popup = document.querySelector(`#popup`);
	btn_popup.addEventListener("click", function () {
		let size = getSize();
		createBoard(size);
	});
	console.log(`Hi`);
});

function createBoard(size) {
	let board = document.querySelector(`.board`);
	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	let numDivs = size * size;

	for (let i = 0; i < numDivs; i++) {
		let box = document.createElement(`div`);
		box.classList = `box`;
		box.addEventListener("mouseover", colorBox);
		board.insertAdjacentElement(`beforeend`, box);
	}
}

function getSize() {
	let input = prompt(`What will be the size of the board: `);
	let message = document.querySelector(`#message`);
	if (input == "") {
		message.innerHTML = "Please provide a number";
	} else if (input < 0 || input > 100) {
		message.innerHTML = "Please provide a number between 1 and 100";
	} else {
		message.innerHTML = "Start Sketching!";
		return input;
	}
}

function setColor(colorChoice) {
	color = colorChoice;
}

function colorBox() {
	if (color === "random") {
		this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
	} else {
		this.style.backgroundColor = "black";
	}
}

function resetBoard() {
	let divs = document.querySelectorAll(".box");
	divs.forEach((div) => (div.style.backgroundColor = `white`));
}
