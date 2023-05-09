const container = document.querySelector('.container')
const btnContainer = document.querySelector('.buttons')
const btnBlack = document.createElement('button')
const btnRGB = document.createElement('button')
const btnReset = document.createElement('button')

const createDiv = (size) => {
    container.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`

    for (let i = 0; i < (size * size); i++) {
        const div = document.createElement('div')
        container.appendChild(div).classList.add('box')


    }
}

const black = () => {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach((box) => {
            box.addEventListener('mouseover', () => {
                box.style.background = 'black'
            })
        })
}

const gridSize = () => {
    const size = prompt('How big of a canvas do you want?', '')
    promptNum = Number(size)
    createDiv(size)
    if (size > 100){
        alert('Canvas is to big')
    }
}


const blackBTN = () => {
    
    btnBlack.textContent = 'Black'
    btnBlack.addEventListener('mousedown', () => {
        btnBlack.style.backgroundColor = 'black'
        btnBlack.style.color = 'white'
    })
    btnBlack.addEventListener('mouseup' , () => {
        btnBlack.style.backgroundColor = 'white'
        btnBlack.style.color = 'black'
    })
    btnBlack.addEventListener('click',black)

    btnContainer.appendChild(btnBlack).classList.add('btn')
}



const rainbowBTN = () => {
    const boxs = container.querySelectorAll('.box')
    btnRGB.textContent = 'Rainbow'
    btnRGB.addEventListener('mousedown', () => {
        btnRGB.style.backgroundColor = 'black'
        btnRGB.style.color = 'white'
    })
    btnRGB.addEventListener('mouseup' , () => {
        btnRGB.style.backgroundColor = 'white'
        btnRGB.style.color = 'black'
    })
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



const resetBTN = () => {
    const boxs = container.querySelectorAll('.box')
    btnReset.textContent = 'Reset'
    btnReset.addEventListener('mousedown', () => {
        btnReset.style.backgroundColor = 'black'
        btnReset.style.color = 'white'
    })
    btnReset.addEventListener('mouseup' , () => {
        btnReset.style.backgroundColor = 'white'
        btnReset.style.color = 'black'
    })
    btnReset.addEventListener('click', () => {
        gridSize()
        boxs.forEach(box => {
            box.style.background = ''
        })
        
        
    })
    btnContainer.appendChild(btnReset).classList.add('btn')
}

createDiv(16,16)
blackBTN()
rainbowBTN()
resetBTN()
