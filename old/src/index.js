let num = ""
let result = ""
let lastOperator = ""
//
function workInput(input) {
	const [valueIsANumber, isShorterThan10, isNotFirstZero] = [
		Number(input) < 10,
		num.length < 10,
		!(input == 0 && num === ""),
	]

	const render = thisValue =>
		(document.querySelector(".screen").innerText = thisValue)

	if (valueIsANumber && isShorterThan10) {
		if (isNotFirstZero) {
			num += input
			render(num)
		}
	}
	switch (input) {
		case "←":
			num = num.substring(0, num.length - 1)
			num.length == 0 ? render("0") : render(num)
			break
		case "C":
			num = ""
			result = ""
			lastOperator = ""
			render("0")
			break
		case "+":
			execute(lastOperator)
			lastOperator = "+"
			num = ""
			break
		case "−":
			execute(lastOperator)
			lastOperator = "−"
			num = ""
			break
		case "×":
			execute(lastOperator)
			lastOperator = "×"
			num = ""
			break
		case "÷":
			execute(lastOperator)
			lastOperator = "÷"
			num = ""
			break
		case "=":
			execute(lastOperator)
	}

	function execute(operator) {
		switch (operator) {
			case "+":
				result = String(Number(result) + Number(num))
				result.length < 12 ? render(result) : render("Max Limit Error")
				break
			case "−":
				result = String(Number(result) - Number(num))
				result.length < 12 ? render(result) : render("Max Limit Error")
				break
			case "×":
				result = String(Number(result) * Number(num))
				result.length < 12 ? render(result) : render("Max Limit Error")
				break
			case "÷":
				result = String(Number(result) / Number(num)).substring(0, 12)
				render(result)
				console.log(result, num)
				break
			default:
				result = num
				break
		}
	}
}

function getInput() {
	document
		.querySelector(".calc-buttons")
		.addEventListener("click", e => workInput(e.target.innerText))
}
getInput()
