let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function ft() {
    count += 1
    countEl.textContent = count
}

function increment() {
    count += 2
    countEl.textContent = count
}

function three() {
    count += 3
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
