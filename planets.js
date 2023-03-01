class planet{
    name; 
    inner; 
    diameter; 
    color;   

    //Instead of the class name JS uses the constructor keyword, otherwise same idea as Java
    constructor(name, inner, diameter, color){
        this.name = name; 
        this.inner = inner; 
        this.diameter = diameter; 
        this.color = color; 
    }
}

let planetsArray = [new planet("Mercury", true, 3031.9, "#696969"), 
    new planet("Venus", true, 7520.8, "#b89165"), 
    new planet("Earth", true, 7917.5, "#5a5b86"),
    new planet("Mars", true, 4212.3, "#df8c4e"),
    new planet("Jupiter", false, 86881, "#f6a049"),
    new planet("Saturn", false, 72367, "#dcd3a1"),
    new planet("Uranus", false, 31518, "#b4d9df"),
    new planet("Neptune", false, 30599, "#456eff")
    ]; 

    //loop to get print names of all the planets on the console
    for (let i = 0; i < planetsArray.length; i++) {
        console.log(planetsArray[i].name);
      }

    //function (method) that takes in tha array of planets as a parameter and returns the avg diameter 
    function averageDiameter(planetsArray) {
        let sum = 0;
        for (let i = 0; i < planetsArray.length; i++) {
          sum += planetsArray[i].diameter;
        }
        const average = sum / planetsArray.length;
        return average;
      }
      //call the function to log the result to the console
      console.log ("Average Diameter: " + averageDiameter(planetsArray));

      let index = 0;
   
      
    