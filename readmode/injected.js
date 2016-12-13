'use strict'

const BODY = document.getElementsByTagName('body')[0]
const DIVS = document.getElementsByTagName('div')
const SECTIONS = document.getElementsByTagName('section')
const PS = document.getElementsByTagName('p')
let elements = []

for (let i = 0 ; i < DIVS.length; i++) {
    elements.push(DIVS[i])
}

for (let i = 0 ; i < SECTIONS.length; i++) {
    elements.push(SECTIONS[i])
}

for (let i = 0 ; i < PS.length; i++) {
    elements.push(PS[i])
}

const rmStyle = `
	background-color:#1e1e1e; 
	color:#e3e3e3;
	font-size:14px;

	width: 80%;
	margin:0 auto;
`

const elementStyle = `
    background-color:#2c2c2c; 
	color:#e9e9e9;
`

function toggleReadMode() {
	BODY.setAttribute('style', rmStyle)
	elements.forEach( element => {
	    element.setAttribute('style', elementStyle)
	})
}

toggleReadMode()