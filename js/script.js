const r1 = document.querySelector('#r1')
const offsetX = document.querySelector('#offsetX')
const offsetY = document.querySelector('#offsetY')
const blur = document.querySelector('#blur')
const spread = document.querySelector('#spread')
const  color = document.querySelector('#color')
const box = document.querySelector('.box')
const out = document.querySelector('.out')
const inset = document.querySelector('#inset')
const outset = document.querySelector('#outset')



//r1.onchange = generateBoxShadow
r1.oninput = generateBoxShadow
offsetX.oninput = generateBoxShadow
offsetY.oninput = generateBoxShadow
blur.oninput = generateBoxShadow
spread.oninput = generateBoxShadow
color.oninput = generateBoxShadow
inset.oninput = generateBoxShadow
outset.oninput = generateBoxShadow


function generateBoxShadow() {
    box.style.borderRadius = r1.value + '%'
    box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} inset`
    out.innerHTML = `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} </br>`
    out.innerHTML += `-webkit-box-shadow ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} </br>`
    out.innerHTML += `-moz-box-shadow ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value}`

    if (inset.checked) {
return box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} inset`
    }
return box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} `
}


//Создали функцию для color box
function colorBoxResult () {
    box.style.backgroundColor = colorBoxResult.value

}













