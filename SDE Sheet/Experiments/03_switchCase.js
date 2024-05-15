let x = 1, y = 1;

switch (x){
    case 1:
        console.log("x is 1")
        switch (y){
            case 1:
                console.log("y is 1")
                break
            default:
                console.log("y is not 1")
        }
        break
    case 2:
        console.log("x is 2")
        console.log("y is", y)
        break
    default:
        console.log("x is neither 1 or 2")
}

//Breaks <-antonym-> Fall-throughs

//Individual cases can be wrapped in curly brackets & made into blocks
/*  for eg -> case 1: {
    console.log("WRAPPED");
    break;
    }                       */