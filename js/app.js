'use strict';

// Initialize DOM variables
var numClicks = 0;
var imgElements = [];
var imgElement1 = document.getElementById('bus-item1');
var imgElement2 = document.getElementById('bus-item2');
var imgElement3 = document.getElementById('bus-item3');

imgElements.push(imgElement1);
imgElements.push(imgElement2);
imgElements.push(imgElement3);



//////////////////////////////////////////////////////////////////////////////////


// Develop constructor function
// build out list of items upon construction
// develop push / pop list
function Item(pathName, itemName) {
  this.pathName = pathName;
  this.itemName = itemName;
  this.numVotes = 0;
  this.numViews = 0;
  this.isDisplayed = false;
  this.justDisplayed = false;

  this.hold = 0;
  if(this.justDisplayed === true && this.hold <= 1){
    this.hold++;
  } else {
    this.justDisplayed = false;
  }

  Item.allItems.push(this);
}

Item.prototype.justDisplayedSwitch = function(){

};

Item.allItems = [];
Item.display = [];
Item.noDisplay = [];


//////////////////////////////////////////////////////////////////////////////////


// instantiate items and throw them on the master list
new Item('img/bag.jpg', 'bag');
new Item('img/banana.jpg', 'banana');
new Item('img/bathroom.jpg', 'bathroom');
new Item('img/boots.jpg', 'boots');
new Item('img/breakfast.jpg', 'breakfast');
new Item('img/bubblegum.jpg', 'bubblegum');
new Item('img/chair.jpg', 'chair');
new Item('img/cthulhu.jpg', 'cthulhu');
new Item('img/dog-duck.jpg', 'dog');
new Item('img/dragon.jpg', 'dragon');
new Item('img/pen.jpg', 'pen');
new Item('img/pet-sweep.jpg', 'pet-sweep');
new Item('img/scissors.jpg', 'scissors');
new Item('img/shark.jpg', 'shark');
new Item('img/sweep.png', 'sweep');
new Item('img/tauntaun.jpg', 'tauntaun');
new Item('img/unicorn.jpg', 'unicorn');
new Item('img/usb.gif', 'usb');
new Item('img/water-can.jpg', 'water-can');
new Item('img/wine-glass.jpg', 'wine-glass');



//////////////////////////////////////////////////////////////////////////////////


// Receive and handle clicks
// Want to track votes and appearances
// clicks will change which objects appear
// clicks will push objects to different arrays
// generates a random number
// (Imgs shouldn't display duplicates
// Imgs shouldn't repeat from previous window
// imgs shouldn't duplicate in current window)

function randomDisplayGenerator() {
//   var selectedItem = Item.allItems[Math.floor(Math.random() * Item.allItems.length)];
//   Item.display.push(selectedItem);
//   Item.allItems.isDisplayed = true;

  var displayCount = 0;
  while(displayCount < 3){
    var selectedItem = Item.allItems[Math.floor(Math.random() * (Item.allItems.length-displayCount))];
    if(selectedItem.isDisplayed === false){
      selectedItem.isDisplayed = true;
      imgElements[displayCount].src = selectedItem.pathName;
      imgElements[displayCount].alt = selectedItem.itemName;
      Item.display.push(selectedItem);
      displayCount++;
    }
  }

  for(var i = 0; i < Item.display.length; i++){
    Item.display[i].isDisplayed = false;
    Item.display[i].justDisplayed = true;
  }
  // console.log(Item.display);
}



function randomItem() {
  // items will already be in the display queue
  // increase num votes of first item
  numClicks++;
  console.log('click counts = ', numClicks);
  Item.display[0].numVotes++;
  console.log('Num Votes of ' + Item.display[0].itemName + ' is ' + Item.display[0].numVotes);

  // increase num views of each item
  for(var i = 0; i < Item.display.length; i++){
    Item.display[i].numViews++;
    Item.display[i].justDisplayed = true;
    Item.display[i].isDisplayed = false;
    console.log('Num Views of ' + Item.display[i].itemName + ' is ' + Item.display[i].numViews);
  }

  Item.display = [];


  // generate new set of items to look through
  var displayCount = 0;
  while(displayCount < 3){
    var selectedItem = Item.allItems[Math.floor(Math.random() * (Item.allItems.length-displayCount))];
    if(selectedItem.isDisplayed === false && selectedItem.justDisplayed === false){
      selectedItem.isDisplayed = true;
      selectedItem.justDisplayed = true;
      imgElements[displayCount].src = selectedItem.pathName;
      imgElements[displayCount].alt = selectedItem.itemName;
      Item.display.push(selectedItem);
      displayCount++;
    }
  }

}

randomDisplayGenerator();


imgElement1.addEventListener('click', randomItem);
imgElement2.addEventListener('click', randomItem);
imgElement3.addEventListener('click', randomItem);



// turn off clicks after 25 trials
// display user data: num votes and num appearances
// ... for each item

// css display images side by side by side
// will want to ensure that imgs are less than a third of the page.
// (need to manipulate the DOM in order to display our item.)



