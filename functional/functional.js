"use strict"

const calculator = (acc, cur, operator) => ({
	append: v => calculator(acc, (cur = Number(cur + String(v)))),
	set: (x, y) => calculator((acc = x), (cur = y)),
	render: isOperator =>
		(document.querySelector(".screen").innerText = isOperator ? acc : cur),
	finish: () =>
		calculator(operator(cur, acc)).render(true, (acc = 0), (cur = 0)),
	doMath: f =>
		calculator(
			(acc = operator ? operator(cur, acc) : cur),
			(cur = 0),
			(operator = f)
		),
})

const operators = {
	"+": (x, y) => y + x,
	"−": (x, y) => y - x,
	"×": (x, y) => y * x,
	"÷": (x, y) => y / x,
}

const screen = calculator(0, 0)

const workInput = input =>
	input.length > 1
		? ""
		: input === "C"
		? screen.set(0, 0).render()
		: input === "="
		? screen.finish()
		: input.match(/\d/g)
		? screen.append(input).render()
		: input in operators
		? screen.doMath(operators[input]).render(true)
		: ""

document
	.querySelector(".calc-buttons")
	.addEventListener("click", e => workInput(e.target.innerText))
