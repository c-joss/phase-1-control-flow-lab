function scuberGreetingForFeet(someValue){
  let greeting = "";
  if (someValue <= 400){
    greeting = ("This one is on me!");
} else if (someValue > 400 && someValue < 2000){
    greeting = ("That will be twenty bucks.");
} else if (someValue > 2000 && someValue < 2500){
    greeting = ("I will gladly take your thirty bucks.");
} else if (someValue > 2500){
    greeting = ("No can do.");
}
return greeting;
}

function ternaryCheckCity(city){
  let service = (city === "NYC") ? "Ok, sounds good." : "No go.";
  return service;
}

function switchOnCharmFromTip(charm){
  let greeting = "";
  switch (charm) {
    case "generous":
      greeting = "Thank you so much.";
      break;
    case "not as generous":
      greeting = "Thank you.";
      break;
    case "thanks for everything":
      greeting = "Bye.";
      break; 
  }
  return greeting;
}