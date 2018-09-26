'use strict';

// Initialize DOM variables
var maxClicks = 5;
var imgElements = [];
var imgElement0 = document.getElementById('bus-item0');
var imgElement1 = document.getElementById('bus-item1');
var imgElement2 = document.getElementById('bus-item2');

imgElements.push(imgElement0);
imgElements.push(imgElement1);
imgElements.push(imgElement2);



//////////////////////////////////////////////////////////////////////////////////


// Develop constructor function
// build out list of items upon construction
// develop push / pop list
function Item(pathName, itemName) {
  this.pathName = pathName;
  this.itemName = itemName;
  this.numVotes = 0;
  this.numViews = 0;


  Item.allItems.push(this);
}

Item.prototype.justDisplayedSwitch = function(){

};

Item.allItems = [];
Item.lastDisplayed = [];


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


// generate random images

function randomDisplayGenerator() {
  var rand0 = Math.floor(Math.random() * Item.allItems.length);
  var rand1 = Math.floor(Math.random() * Item.allItems.length);
  var rand2 = Math.floor(Math.random() * Item.allItems.length);

  while(rand0 === rand1 || rand0 === rand2 || rand1 === rand2 ||
        Item.lastDisplayed.includes(rand0) || Item.lastDisplayed.includes(rand1) ||
        Item.lastDisplayed.includes(rand2)){
    rand0 = Math.floor(Math.random() * Item.allItems.length);
    rand1 = Math.floor(Math.random() * Item.allItems.length);
    rand2 = Math.floor(Math.random() * Item.allItems.length);
  }
  // images without duplicates will be set after the loop

  // set image sources and alt text. hang these in html
  imgElement0.src = Item.allItems[rand0].pathName;
  imgElement0.alt = Item.allItems[rand0].itemName;
  Item.allItems[rand0].numViews++;

  imgElement1.src = Item.allItems[rand1].pathName;
  imgElement1.alt = Item.allItems[rand1].itemName;
  Item.allItems[rand1].numViews++;

  imgElement2.src = Item.allItems[rand2].pathName;
  imgElement2.alt = Item.allItems[rand2].itemName;
  Item.allItems[rand2].numViews++;

  // throw these in just displayed for now (may need to move this)
  Item.lastDisplayed[0] = rand0;
  Item.lastDisplayed[1] = rand1;
  Item.lastDisplayed[2] = rand2;
}

randomDisplayGenerator();

function clickHandler(event) {


  // target specific event that was clicked
  var clickedImageName = event.target.alt;
  for(var i = 0; i < Item.allItems.length; i++){
    if(clickedImageName === Item.allItems[i].itemName){
      Item.allItems[i].numVotes++;
      maxClicks--;
      console.log('num votes for ' + Item.allItems[i].itemName + ' is ' + Item.allItems[i].numVotes);
    }
  }

  randomDisplayGenerator();

}


imgElement0.addEventListener('click', clickHandler);
imgElement1.addEventListener('click', clickHandler);
imgElement2.addEventListener('click', clickHandler);



// turn off clicks after 25 trials
// display user data: num votes and num appearances
// ... for each item

// css display images side by side by side
// will want to ensure that imgs are less than a third of the page.
// (need to manipulate the DOM in order to display our item.)




















//////////////////////////////////////////////////////////////////////////////////

//   var selectedItem = Item.allItems[Math.floor(Math.random() * Item.allItems.length)];
//   Item.display.push(selectedItem);
//   Item.allItems.isDisplayed = true;

//   var displayCount = 0;
//   while(displayCount < 3){
//     var selectedItem = Item.allItems[Math.floor(Math.random() * (Item.allItems.length-displayCount))];
//     if(selectedItem.isDisplayed === false){
//       selectedItem.isDisplayed = true;
//       imgElements[displayCount].src = selectedItem.pathName;
//       imgElements[displayCount].alt = selectedItem.itemName;
//       Item.display.push(selectedItem);
//       displayCount++;
//     }
//   }

//   for(var i = 0; i < Item.display.length; i++){
//     Item.display[i].isDisplayed = false;
//     Item.display[i].justDisplayed = true;
//   }
//   // console.log(Item.display);
// }



// function randomItem() {
//   // items will already be in the display queue
//   // increase num votes of first item
//   numClicks++;
//   console.log('click counts = ', numClicks);
//   Item.display[0].numVotes++;
//   console.log('Num Votes of ' + Item.display[0].itemName + ' is ' + Item.display[0].numVotes);

//   // increase num views of each item
//   for(var i = 0; i < Item.display.length; i++){
//     Item.display[i].numViews++;
//     Item.display[i].justDisplayed = true;
//     console.log('Num Views of ' + Item.display[i].itemName + ' is ' + Item.display[i].numViews);
//   }

//   Item.display = [];


//   // generate new set of items to look through
//   var displayCount = 0;
//   while(displayCount < 3){ // running into a problem here, infinite loop.
//     var selectedItem = Item.allItems[Math.floor(Math.random() * (Item.allItems.length-displayCount))];
//     if(selectedItem.isDisplayed === false){} //&& selectedItem.justDisplayed === false){
//       selectedItem.isDisplayed = true;
//       selectedItem.justDisplayed = true;
//       imgElements[displayCount].src = selectedItem.pathName;
//       imgElements[displayCount].alt = selectedItem.itemName;
//       Item.display.push(selectedItem); // or replace at specific indices.
//       displayCount++;
//     }
//   }

//   Item.display = [];

// }

// function randomDisplayGenerator() {
//     var selectedItem = Item.allItems[Math.floor(Math.random() * (Item.allItems.length))];
//     Item.display.push(selectedItem);
//     imgElements[0].src = selectedItem.pathName;
//     imgElements[0].alt = selectedItem.itemName;
//     var displayCount = 1;
//     while(displayCount < 3){
//       console.log('we made it inside the while loop');
//       selectedItem = Item.allItems[Math.floor(Math.random() * (Item.allItems.length))];
//       for(var j = 0; j < Item.display.length; j++){
//         console.log('we made it inside the for loop');
//         if(selectedItem.itemName === Item.display[j].itemName){
//           break;
//         } else if(selectedItem.itemName !== Item.display[j].itemName && j === Item.display.length-1){
//           Item.display.push(selectedItem);
//           imgElements[j+1].src = selectedItem.pathName;
//           imgElements[j+1].alt = selectedItem.itemName;
//           displayCount++;
//           console.log('we made it inside the last else if block');
//           console.log('display count is ', displayCount);
//         }
//       }

//     }
//     console.log(Item.display);
//   }
