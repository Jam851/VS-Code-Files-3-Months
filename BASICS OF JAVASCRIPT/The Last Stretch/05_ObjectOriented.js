function Cars(name, fuel, speed){
    this.name = name
    this.fuel = fuel
    this.speed = speed
}

const car1 = new Cars("Mercedes", "Diesel", "220MPH")
const car2 = new Cars("Honda", "Petrol", "150MPH")

console.log(car1)
console.log(car2)

//instanceof
console.log(car1 instanceof (Object && Cars))