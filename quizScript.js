//adult number
const adultsNumberElement = document.getElementById("adults-number");

let adultsNumber = 0;

function plusAdult() {
	adultsNumber++;
	adultsNumberElement.textContent = adultsNumber;
}

function minusAdult() {
	if (adultsNumber > 0) {
		adultsNumber--;
		adultsNumberElement.textContent = adultsNumber;
	}
}

//child number
const childrenNumberElement = document.getElementById("children-number");

let childrenNumber = 0;

function plusChildren() {
	childrenNumber++;
	childrenNumberElement.textContent = childrenNumber;
}

function minusChildren() {
	if (childrenNumber > 0) {
		childrenNumber--;
		childrenNumberElement.textContent = childrenNumber;
	}
}

//infant number
const infantsNumberElement = document.getElementById("infants-number");

let infantsNumber = 0;

function plusInfants() {
	infantsNumber++;
	infantsNumberElement.textContent = infantsNumber;
}

function minusInfants() {
	if (infantsNumber > 0) {
		infantsNumber--;
		infantsNumberElement.textContent = infantsNumber;
	}
}