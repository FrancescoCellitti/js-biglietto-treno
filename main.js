const km = Number(prompt("inserire numero di km"))
const età = Number(prompt("inserire età del passeggero"))
let prezzo = km * 0.21

if (età < 18) {
    prezzo = (km * 0.21) * 0.8
} else if (età >= 65) {
    prezzo = (km * 0.21) * 0.6
} else {
    prezzo = km * 0.21

}
const prezzoFinale = prezzo.toFixed(2)
console.log(prezzoFinale)


