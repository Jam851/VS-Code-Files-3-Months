//Links Objects Together

//Rules
const warRules = {
    Master: "Fight the Holy Grail War with a Master",
    CommandSpells: "Absolute obedience for three Command Spell activations",
    interval: "No pattern observed"
}


//Classes
const Rider = {
    advantage: "Significant travel speed due to ride of choice",
    disadvantage: "Nothing special other than that"
}
const Archer = {
    advantage: "Strong long range attacks",
    disadvantage: "unless Gilgamesh, bad at close range"
}


//Servants
const servant1 = {
    name: "Iskandar",
    noblePhantasm: "Ionioi Hetairoi: Army of the King",
    placeOfOrigin: "Greece",
    ride: "Bull(x2) Chariot"
}
const servant2 = {
    name: "Gilgamesh",
    noblePhantasm: "Enuma Elish",
    placeOfOrigin: "Mesopotamia/Uruk",
    weapon: "Gates of Babylon / Ea"
}


Object.setPrototypeOf(Rider, warRules)
Object.setPrototypeOf(Archer, warRules)
Object.setPrototypeOf(servant1, Rider)
Object.setPrototypeOf(servant2, Archer)

console.log(servant2.advantage)