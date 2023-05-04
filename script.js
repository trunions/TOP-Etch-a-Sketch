const container = document.querySelector('.container')
const btnContainer = document.querySelector('.buttons')
const btnBlack = document.createElement('button')
const btnRGB = document.createElement('button')
const btnReset = document.createElement('button')


const createDiv = (col, rows) => {
    for (let i = 0; i < (col * rows); i++) {
        const div = document.createElement('div')
        container.style.gridTemplate = `repeat(${col}, 1fr) / repeat(${rows}, 1fr)`
        container.appendChild(div).classList.add('box')


    }
}
createDiv(16,16)
const gridSize = () => {
    const size = prompt('How big of a canvas do you want?', '')
    promptNum = Number(size)
    createDiv(size,size)
}


const blackColor = () => {
    const boxs = container.querySelectorAll('.box')
    btnBlack.textContent = 'Black'
    btnBlack.addEventListener('click', () => {
        boxs.forEach((box) => {
            box.addEventListener('mouseover', () => {
                box.style.background = 'black'
            })
        })
    })

    btnContainer.appendChild(btnBlack).classList.add('btn')
}

blackColor()

const rainbowColor = () => {
    const boxs = container.querySelectorAll('.box')
    btnRGB.textContent = 'Rainbow'
    btnRGB.addEventListener('click', () => {
        boxs.forEach((box) => {
            box.addEventListener('mouseover', () => {
                const randomNum = Math.floor(Math.random() * 16777215).toString(16)
                box.style.backgroundColor = `#${randomNum}`
            })
        })
    })

    btnContainer.appendChild(btnRGB).classList.add('btn')
}

rainbowColor()

const resetBTN = () => {
    const boxs = container.querySelectorAll('.box')
    btnReset.textContent = 'Reset'
    btnReset.addEventListener('click', () => {
        boxs.forEach(box => box.style.background = '')
        
    })
    btnContainer.appendChild(btnReset).classList.add('btn')
}

resetBTN()
