'use strict';

// Initialize DOM variables
var maxClicks = 25;
var imgElement0 = document.getElementById('bus-item0');
var imgElement1 = document.getElementById('bus-item1');
var imgElement2 = document.getElementById('bus-item2');




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

function generateResults(){
  var ul = document.getElementById('results-list');
  for(var i = 0; i < Item.allItems.length; i++){
    var li = document.createElement('li');
    var resultsText = Item.allItems[i].itemName + ' was viewed ' + Item.allItems[i].numViews + 
          ' times and voted on ' + Item.allItems[i].numVotes + ' times.';
    var liText = document.createTextNode(resultsText);
    li.appendChild(liText);
    ul.appendChild(li);
  }
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
  if(maxClicks < 1){
    generateResults();
  }

}


imgElement0.addEventListener('click', clickHandler);
imgElement1.addEventListener('click', clickHandler);
imgElement2.addEventListener('click', clickHandler);



