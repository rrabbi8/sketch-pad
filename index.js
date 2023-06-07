let color = "black";
let click = false;

document.addEventListener(`DOMContentLoaded`, function () {
	createBoard(16);

	document.querySelector(`body`).addEventListener("click", function (e) {
		if (e.target.tagName != "BUTTON") {
			click = !click;
			let draw = document.querySelector(`#draw`);
			if (click) {
				draw.innerHTML = "Start drawing";
			} else {
				draw.innerHTML = "Draw disabled";
			}
		}
	});
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
		box.classList.add("box");
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
	if (click) {
		if (color === "random") {
			this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
		} else {
			this.style.backgroundColor = "black";
		}
	}
}

function resetBoard() {
	let divs = document.querySelectorAll(".box");
	divs.forEach((div) => (div.style.backgroundColor = `white`));
}
