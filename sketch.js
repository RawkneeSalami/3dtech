// RONNIE SAINI
// BUILT OFF OF SCOTT KILDALL'S CODE
var adventureManager;

var playerSprite;
var playerAnimation;

var clickablesManager;   
var clickables;           

// Allocate Adventure Manager with states table and interaction tables
function preload() {
  clickablesManager = new ClickableManager('data/clickableLayout.csv');
  adventureManager = new AdventureManager('data/adventureStates.csv', 'data/interactionTable.csv', 'data/clickableLayout.csv');
}

// Setup the adventure manager
function setup() {
  createCanvas(1280, 720);

  // setup the clickables = this will allocate the array
  clickables = clickablesManager.setup();

  // this is optional but will manage turning visibility of buttons on/off
  // based on the state name in the clickableLayout
  adventureManager.setClickableManager(clickablesManager);

  // This will load the images, go through state and interation tables, etc
  adventureManager.setup();




  // call OUR function to setup additional information about the p5.clickables
  // that are not in the array 
  setupClickables(); 

  fs = fullscreen();
}

function draw() {

  adventureManager.draw();


  if( adventureManager.getStateName() === "Splash" ||
      adventureManager.getStateName() === "Instructions" ||
      adventureManager.getStateName() === "Characters" ) {
    ;
  }
  else {

  }
  
  // draw the p5.clickables, in front of the mazes but behind the sprites 
  clickablesManager.draw();
}

// pass to adventure manager, this do the draw / undraw events
function keyPressed() {
  // toggle fullscreen mode
  if( key === 'f') {
    fs = fullscreen();
    fullscreen(!fs);
    return;
  }

  // dispatch all keys to adventure manager
  adventureManager.keyPressed(key); 
}

function mouseReleased() {
  // dispatch all mouse events to adventure manager
  adventureManager.mouseReleased();
}



//-------------- CLICKABLE CODE  ---------------//

function setupClickables() {
  // All clickables to have same effects
  for( let i = 0; i < clickables.length; i++ ) {
    clickables[i].onHover = clickableButtonHover;
    clickables[i].onOutside = clickableButtonOnOutside;    
  }

  // we do specific callbacks for each clickable

  //I had to add dummy clickables to make the program buttons work
  //or else the screens would not iterate. It was possible to leave all the rest of the code in and 
  //the colution was the add 11-14 in the code with their respective functions
  clickables[0].onPress = clickableButtonPressed;
  clickables[1].onPress = clGoomazonPays;
  clickables[2].onPress = clCityPays;
  clickables[3].onPress = clRaiseTaxes;
  clickables[4].onPress = clCityPays;
  clickables[5].onPress = clRaiseTaxes;
  clickables[6].onPress = clBuildRival;
  clickables[7].onPress = clIgnoreThem;
  clickables[8].onPress = clCutArts;
  clickables[9].onPress = clCutTransportation;
  clickables[10].onPress = clCutCityWages;
  clickables[11].onPress = clCutParks;
  clickables[12].onPress = clCutParks1;
  clickables[13].onPress = clCutParks2;
  clickables[14].onPress = clCutParks3;


}

// tint when mouse is over
clickableButtonHover = function () {
  this.color = "#fcb438";
  this.noTint = false;
  this.tint = "#FF0000";
}

// color a light gray if off
clickableButtonOnOutside = function () {

  this.color = "#ffffff";
}

clickableButtonPressed = function() {
  adventureManager.clickablePressed(this.name);
} 

//-- specific button callbacks: these will add or subtrack anger, then
//-- pass the clickable pressed to the adventure manager, which changes the
//-- state. A more elegant solution would be to use a table for all of these values
clGoomazonPays = function() {

    adventureManager.clickablePressed(this.name);
}

clCityPays = function() {

  adventureManager.clickablePressed(this.name);
}

clRaiseTaxes = function() {

  adventureManager.clickablePressed(this.name);
}

clBuildRival = function() {

  adventureManager.clickablePressed(this.name);
}

clIgnoreThem = function() {

  adventureManager.clickablePressed(this.name);
}

clCutArts = function() {

  adventureManager.clickablePressed(this.name);
}

clCutTransportation = function() {

  adventureManager.clickablePressed(this.name);
}

clCutCityWages = function() {

  adventureManager.clickablePressed(this.name);
}

clCutParks = function() {

  adventureManager.clickablePressed(this.name);
}
clCutParks1 = function() {

  adventureManager.clickablePressed(this.name);
}
clCutParks2 = function() {

  adventureManager.clickablePressed(this.name);
}
clCutParks3 = function() {

  adventureManager.clickablePressed(this.name);
}

//-------------- SUBCLASSES / YOUR DRAW CODE CAN GO HERE ---------------//

// Instructions screen has a backgrounnd image, loaded from the adventureStates table
// It is sublcassed from PNGRoom, which means all the loading, unloading and drawing of that
// class can be used. We call super() to call the super class's function as needed
class ScenarioRoom extends PNGRoom {
  // Constructor gets calle with the new keyword, when upon constructor for the adventure manager in preload()
  constructor() {
    super();    // call super-class constructor to initialize variables in PNGRoom
  }
    draw() {
      // this calls PNGRoom.draw()
      super.draw();    
    }
}

