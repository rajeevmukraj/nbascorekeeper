let asaveEl = document.getElementById("asave-el")
let acountEl = document.getElementById("acount-el")
let acount = 0

function aft() {
    acount += 1
    acountEl.textContent = acount
}

function aincrement() {
    acount += 2
    acountEl.textContent = acount
}

function athree() {
    acount += 3
    acountEl.textContent = acount
}

function asave() {
    let countStr = acount + " - "
    asaveEl.textContent += countStr
    acountEl.textContent = 0
    count = 0
}
