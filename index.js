//GLOBAL VARIABLES
var navigation = {
    x: -2,
    y: 4,
    z: 7,
    speed: "raaaaid"
  };

  var ship = {
    powerOn: false,
    modules: [],
    antenna: {
      active: false
    }
  };

  var radio = {
    range: {
      low: 88,
      high: 108,
    },
    frequency: 0,
    message: "Bugs are cool.",
    beacon: false
  };

// day one
const powerOn = () => {
    
    ship.powerOn = true;
}
//day 2
const countModules= () => {
	return availableModules.length;
}

//day 3
const countEssential = () => {
    return availableModules.filter(modules=> modules.essential).length;
}

//day 4
const loadModule = (index) => {

}