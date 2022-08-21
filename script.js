// variable creations and fetching html elements using DOM

let button = document.querySelector('.btn');
const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const box3 = document.getElementById('box-3');
const box4 = document.getElementById('box-4');
const heading = document.getElementById('head');
const container = document.getElementById('container');
const para = document.getElementById('para');

// colors selection

let colorsContainer = ['#A62349', '#D07000', '#C55300', '#96E5D1', '#FFC090', '#7FB77E', '#F94892', '#FFF38C', '#FF7F3F', '#F0E161', '#2A0944', '#3FA796', '#FEC260', '#A10035', '#F65A83', '#FF87B2', '#FF1E00', '#E8F9FD', '#59CE8F', '#000000', '#CFE8A9', '#FFFDE3', '#E64848', '#C21010', '#554994', '#F675A8', '#F0EABE', '#21E1E1', '#3B9AE1', '#3120E0', '#820000', '#B9005B', '#FF7C7C', '#FEE0C0', '#293462', '#1CD6CE', '#42032C', '#D36B00', '#E6D2AA', '#F1EFDC', '#277BC0', '#FFB200', '#FFF4CF', '#AC4425', '#224B0C', '#C1D5A4', '#F0F2B6', '#FFF5E1', '#FFD39A', '#319DA0', '#781C68', '#F94892', '#FF7F3F', '#FBDF07', '#89CFFD', '#C0B236', '#D9CB50', '#F0E161', '#FFF38C', '#A62349', '#7FB77E', '#B1D7B4',  '#F7F6DC', '#FFC090', '#96E5D1', '#C55300',  '#D07000', '#A62349', '#F39189', '#BB8082', '#6E7582', '#046582', '#F5E8C7', '#DEBA9D', '#9E7777', '#6F4C5B', '#303841', '#3A4750', '#D72323', '#EEEEEE', '#BC6FF1', '#892CDC', '#52057B', '#E1F2FB', '#F1F9F9', '#F3DFE3', '#E9B2BC', '#838383', '#142850', '#27496D', '#F85F73', '#004A7C', '#753422', '#00909E', '#FBE8D3', '#005691', '#E8E8E8', '#DAE1E7', '#928A97', '#797A7E', '#BBBFCA', '#495464', '#283C63', '#D8D3CD'];

let colorsBoxYellow = ['#A62349', '#D07000', '#C55300', '#96E5D1', '#FFC090', '#7FB77E', '#F94892', '#FFF38C', '#FF7F3F', '#F0E161', '#2A0944', '#3FA796', '#FEC260', '#A10035', '#F65A83', '#FF87B2', '#FF1E00', '#E8F9FD', '#59CE8F', '#000000', '#CFE8A9', '#FFFDE3', '#E64848', '#C21010', '#554994', '#F675A8', '#F0EABE', '#21E1E1', '#3B9AE1', '#3120E0', '#820000', '#B9005B', '#FF7C7C', '#FEE0C0', '#293462', '#1CD6CE', '#42032C', '#D36B00', '#E6D2AA', '#F1EFDC', '#277BC0', '#FFB200', '#FFF4CF', '#AC4425', '#224B0C', '#C1D5A4', '#F0F2B6', '#FFF5E1', '#FFD39A', '#319DA0', '#781C68', '#F94892', '#FF7F3F', '#FBDF07', '#89CFFD', '#C0B236', '#D9CB50', '#F0E161', '#FFF38C', '#A62349', '#7FB77E', '#B1D7B4',  '#F7F6DC', '#FFC090', '#96E5D1', '#C55300',  '#D07000', '#A62349', '#F39189', '#BB8082', '#6E7582', '#046582', '#F5E8C7', '#DEBA9D', '#9E7777', '#6F4C5B', '#303841', '#3A4750', '#D72323', '#EEEEEE', '#BC6FF1', '#892CDC', '#52057B', '#E1F2FB', '#F1F9F9', '#F3DFE3', '#E9B2BC', '#838383', '#142850', '#27496D', '#F85F73', '#004A7C', '#753422', '#00909E', '#FBE8D3', '#005691', '#E8E8E8', '#DAE1E7', '#928A97', '#797A7E', '#BBBFCA', '#495464', '#283C63', '#D8D3CD'];

let colorsBoxBlue = ['#A62349', '#D07000', '#C55300', '#96E5D1', '#FFC090', '#7FB77E', '#F94892', '#FFF38C', '#FF7F3F', '#F0E161', '#2A0944', '#3FA796', '#FEC260', '#A10035', '#F65A83', '#FF87B2', '#FF1E00', '#E8F9FD', '#59CE8F', '#000000', '#CFE8A9', '#FFFDE3', '#E64848', '#C21010', '#554994', '#F675A8', '#F0EABE', '#21E1E1', '#3B9AE1', '#3120E0', '#820000', '#B9005B', '#FF7C7C', '#FEE0C0', '#293462', '#1CD6CE', '#42032C', '#D36B00', '#E6D2AA', '#F1EFDC', '#277BC0', '#FFB200', '#FFF4CF', '#AC4425', '#224B0C', '#C1D5A4', '#F0F2B6', '#FFF5E1', '#FFD39A', '#319DA0', '#781C68', '#F94892', '#FF7F3F', '#FBDF07', '#89CFFD', '#C0B236', '#D9CB50', '#F0E161', '#FFF38C', '#A62349', '#7FB77E', '#B1D7B4',  '#F7F6DC', '#FFC090', '#96E5D1', '#C55300',  '#D07000', '#A62349', '#F39189', '#BB8082', '#6E7582', '#046582', '#F5E8C7', '#DEBA9D', '#9E7777', '#6F4C5B', '#303841', '#3A4750', '#D72323', '#EEEEEE', '#BC6FF1', '#892CDC', '#52057B', '#E1F2FB', '#F1F9F9', '#F3DFE3', '#E9B2BC', '#838383', '#142850', '#27496D', '#F85F73', '#004A7C', '#753422', '#00909E', '#FBE8D3', '#005691', '#E8E8E8', '#DAE1E7', '#928A97', '#797A7E', '#BBBFCA', '#495464', '#283C63', '#D8D3CD'];

let colorsBoxPurple = ['#A62349', '#D07000', '#C55300', '#96E5D1', '#FFC090', '#7FB77E', '#F94892', '#FFF38C', '#FF7F3F', '#F0E161', '#2A0944', '#3FA796', '#FEC260', '#A10035', '#F65A83', '#FF87B2', '#FF1E00', '#E8F9FD', '#59CE8F', '#000000', '#CFE8A9', '#FFFDE3', '#E64848', '#C21010', '#554994', '#F675A8', '#F0EABE', '#21E1E1', '#3B9AE1', '#3120E0', '#820000', '#B9005B', '#FF7C7C', '#FEE0C0', '#293462', '#1CD6CE', '#42032C', '#D36B00', '#E6D2AA', '#F1EFDC', '#277BC0', '#FFB200', '#FFF4CF', '#AC4425', '#224B0C', '#C1D5A4', '#F0F2B6', '#FFF5E1', '#FFD39A', '#319DA0', '#781C68', '#F94892', '#FF7F3F', '#FBDF07', '#89CFFD', '#C0B236', '#D9CB50', '#F0E161', '#FFF38C', '#A62349', '#7FB77E', '#B1D7B4',  '#F7F6DC', '#FFC090', '#96E5D1', '#C55300',  '#D07000', '#A62349', '#F39189', '#BB8082', '#6E7582', '#046582', '#F5E8C7', '#DEBA9D', '#9E7777', '#6F4C5B', '#303841', '#3A4750', '#D72323', '#EEEEEE', '#BC6FF1', '#892CDC', '#52057B', '#E1F2FB', '#F1F9F9', '#F3DFE3', '#E9B2BC', '#838383', '#142850', '#27496D', '#F85F73', '#004A7C', '#753422', '#00909E', '#FBE8D3', '#005691', '#E8E8E8', '#DAE1E7', '#928A97', '#797A7E', '#BBBFCA', '#495464', '#283C63', '#D8D3CD'];

let colorsBoxGreen = ['#A62349', '#D07000', '#C55300', '#96E5D1', '#FFC090', '#7FB77E', '#F94892', '#FFF38C', '#FF7F3F', '#F0E161', '#2A0944', '#3FA796', '#FEC260', '#A10035', '#F65A83', '#FF87B2', '#FF1E00', '#E8F9FD', '#59CE8F', '#000000', '#CFE8A9', '#FFFDE3', '#E64848', '#C21010', '#554994', '#F675A8', '#F0EABE', '#21E1E1', '#3B9AE1', '#3120E0', '#820000', '#B9005B', '#FF7C7C', '#FEE0C0', '#293462', '#1CD6CE', '#42032C', '#D36B00', '#E6D2AA', '#F1EFDC', '#277BC0', '#FFB200', '#FFF4CF', '#AC4425', '#224B0C', '#C1D5A4', '#F0F2B6', '#FFF5E1', '#FFD39A', '#319DA0', '#781C68', '#F94892', '#FF7F3F', '#FBDF07', '#89CFFD', '#C0B236', '#D9CB50', '#F0E161', '#FFF38C', '#A62349', '#7FB77E', '#B1D7B4',  '#F7F6DC', '#FFC090', '#96E5D1', '#C55300',  '#D07000', '#A62349', '#F39189', '#BB8082', '#6E7582', '#046582', '#F5E8C7', '#DEBA9D', '#9E7777', '#6F4C5B', '#303841', '#3A4750', '#D72323', '#EEEEEE', '#BC6FF1', '#892CDC', '#52057B', '#E1F2FB', '#F1F9F9', '#F3DFE3', '#E9B2BC', '#838383', '#142850', '#27496D', '#F85F73', '#004A7C', '#753422', '#00909E', '#FBE8D3', '#005691', '#E8E8E8', '#DAE1E7', '#928A97', '#797A7E', '#BBBFCA', '#495464', '#283C63', '#D8D3CD'];


// Mouse move
container.addEventListener('mousemove', runEvent);

//  Event handler

function runEvent(e){

  console.log(`EVENT TYPE: ${e.type}`)

  para.textContent= `mX: ${e.offsetX} mY: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 50)`;
  
 }

// random color generator function

button.addEventListener('click', function(){
  // random colors
  let randomColorsContainer = colorsContainer[Math.floor(Math.random() * colorsContainer.length)];

  let randomColorsBoxYellow       = colorsBoxYellow[Math.floor(Math.random() * colorsBoxYellow.length)];
  
  let randomColorsBoxBlue         = colorsBoxBlue[Math.floor(Math.random() * colorsBoxBlue.length)];
  
  let randomColorsBoxPurple       = colorsBoxPurple[Math.floor(Math.random() * colorsBoxPurple.length)];
  
  let randomColorsBoxGreen        = colorsBoxGreen[Math.floor(Math.random() * colorsBoxGreen.length)];

  container.style.background = randomColorsContainer ;
  box1.style.background = randomColorsBoxYellow ;
  box2.style.background = randomColorsBoxGreen  ;
  box3.style.background = randomColorsBoxBlue ;
  box4.style.background = randomColorsBoxPurple ;

 
  
})

// Sounds

let Sounds = ['sound1', 'sound2', 'sound3', 'sound4', 'sound5', 'sound6',  'sound7'];

function randomSound(){
  let index = Math.floor(Math.random() * 1000) % Sounds.length;

  let id = Sounds[index];
  let audioElement = document.getElementById(id);
  audioElement.play();
}

// add event

button.addEventListener('click', randomSound);

