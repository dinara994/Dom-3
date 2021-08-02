const r1 = document.querySelector('#r1')
const offsetX = document.querySelector('#offsetX')
const offsetY = document.querySelector('#offsetY')
const blur = document.querySelector('#blur')
const spread = document.querySelector('#spread')
const color = document.querySelector('#color')
const box = document.querySelector('.box')
const out = document.querySelector('.out')
const inset = document.querySelector('#inset')
const outset = document.querySelector('#outset')
const colorBox = document.querySelector('#colorBox')
const background = document.querySelector('#background')
const generate = document.querySelector('.generate')
const valueP = document.querySelector('.valueP')
const valuePx1 = document.querySelector('.valuePx1')
const valuePx2 = document.querySelector('.valuePx2')
const valuePx3 = document.querySelector('.valuePx3')
const valuePx4 = document.querySelector('.valuePx4')

//r1.onchange = generateBoxShadow
r1.oninput = generateBoxShadow
offsetX.oninput = generateBoxShadow
offsetY.oninput = generateBoxShadow
blur.oninput = generateBoxShadow
spread.oninput = generateBoxShadow
color.oninput = generateBoxShadow
inset.oninput = generateBoxShadow
outset.oninput = generateBoxShadow
colorBox.oninput = generateBoxShadow
background.oninput = generateBoxShadow
generate.oninput = generateBoxShadow
valueP.oninput = generateBoxShadow
valuePx1.oninput = generateBoxShadow
valuePx2.oninput = generateBoxShadow
valuePx3.oninput = generateBoxShadow
valuePx4.oninput = generateBoxShadow

function generateBoxShadow() {
    box.style.borderRadius = r1.value + '%'
    generate.style.backgroundColor = background.value

    box.style.backgroundColor = colorBox.value
    box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} inset`
    out.innerHTML = `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value};</br>`
    out.innerHTML += `-webkit-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value}</br>`
    out.innerHTML += `-moz-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value}`
    valueP.innerHTML = r1.value + '%'
    valuePx1.innerHTML = `${offsetX.value}px`
    valuePx2.innerHTML = `${offsetY.value}px`
    valuePx3.innerHTML = `${blur.value}px`
    valuePx4.innerHTML = `${spread.value}px`


    if (inset.checked) {
        return box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} inset`
    }
    return box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} `

}
generateBoxShadow()











