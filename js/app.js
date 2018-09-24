'use strict';

// Initialize DOM variables
var numClicks = 0;
var imgElement1 = document.getElementById('bus-item1');
var imgElement2 = document.getElementById('bus-item2');
var imgElement3 = document.getElementById('bus-item3');


//////////////////////////////////////////////////////////////////////////////////


// Develop constructor function
// build out list of items upon construction
// develop push / pop list
function Item(pathName, itemName) {
  this.pathName = pathName;
  this.itemName = itemName;
  this.numClicks = 0;
  this.numViews = 0;

  Item.allItems.push(this);
}

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
new Item('img/dog.jpg', 'dog');
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

var randNums = [];
function randomItemGenerator() {
  // need to add items to display array
  var randCount = 0;
  var numDisplayed = 3;
  randNums.push(Math.floor(Math.random() * Item.allItems.length));
  for(var i = 0; i < numDisplayed-1; i++){
    // generate random number
    // check to see if it matches any in the array
    // if it does, repeat generation of random number (i--)
    var randNumber = (Math.floor(Math.random() * Item.allItems.length));
    for(var j = 0; j < randNums.length; j++){
      if(randNumber === randNums[j]){
        randCount++;
      }
    }
    if(randCount === 0){
      randNums.push(randNumber);
    } else {
      i--;
    }
  }
}


function randomItem1() {
  // want to generate three unique random numbers according to the
  // size of the array and the numbers generated previously.
  // get a for loop going here to handle repeating nature of code.

  var randNum1 = Math.floor(Math.random() * Item.allItems.length);
  var randNum2 = Math.floor(Math.random() * Item.allItems.length-1);
  var randNum3 = Math.floor(Math.random() * Item.allItems.length-2);
  imgElement1.scr = Item.allItems[randNum1].pathName;
  imgElement2.scr = Item.allItems[randNum2].pathName;
  imgElement3.scr = Item.allItems[randNum3].pathName;



  numClicks++;

}


imgElement1.addEventListener('click', randomItem1);
imgElement2.addEventListener('click', randomItem2);
imgElement3.addEventListener('click', randomItem3);



// turn off clicks after 25 trials
// display user data: num votes and num appearances
// ... for each item

// css display images side by side by side
// will want to ensure that imgs are less than a third of the page.
// (need to manipulate the DOM in order to display our item.)



