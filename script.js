//to win [r1c1,r1c2,r1c3],[r2c1,r2c2,r2c3],[r3c1,r3c2,r3c3]
//       [r1c1,r2c1,r3c1],[r1c2,r2c2,r3c2],[r1c3,r2c3,r3c3]
//       [r1c1,r2c2,r3c3],[r3c1,r2c2,r1c3],
let grumpy = 'https://a.wattpad.com/useravatar/GrumpyKittyCat1212.128.403917.jpg';
let doge = 'https://78.media.tumblr.com/avatar_8882900ce8af_128.pnj';
let player = grumpy;
counter = 9;
let gridboard = [null,null,null,null,null,null,null,null,null];

let positions = document.getElementsByTagName('td');

for (let i = 0; i < positions.length; i++){
  positions[i].addEventListener('click', positionClicked);
}

function positionClicked(){
  counter--;
  this.innerHTML= '<img src='+player +'>';
  this.removeEventListener('click', positionClicked)
  let index = this.getAttribute('data-key');
  gridboard[index] = true;
  checkGrid();
}
//[012,345,678,036,147,258,048,246]
function checkGrid(){ //check three in a row
  if(counter ==0){ //draw}

    if(gridboard[0] == true && gridboard[1] == true && gridboard[3] == true){
      console.log('p 012 - vertical')
    }
    else if (gridboard[3] == true && gridboard[4] == true && gridboard[5] == true){
      console.log('p 345 - vertical')
    }
    else if (gridboard[6] == true && gridboard[7] == true && gridboard[8] == true){
      console.log('p 678 - vertical')
    }
    else if (gridboard[0] == true && gridboard[3] == true && gridboard[6] == true){
      console.log('p 036 - horizontal')
    }
    else if (gridboard[1] == true && gridboard[4] == true && gridboard[7] == true){
      console.log('p 147 - horizontal')
    }
    else if (gridboard[2] == true && gridboard[5] == true && gridboard[8] == true){
      console.log('p 258 - horizontal')
    }
    else if (gridboard[0] == true && gridboard[4] == true && gridboard[8] == true){
      console.log('p 048 - diagonal')
    }
    else if (gridboard[2] == true && gridboard[4] == true && gridboard[6] == true){
      console.log('p 246 - diagonal')
    }

    else if(gridboard[0] == false && gridboard[1] == false && gridboard[3] == false){
      console.log('012 - vertical')
    }
    else if (gridboard[3] == false && gridboard[4] == false && gridboard[5] == false){
      console.log('345 - vertical')
    }
    else if (gridboard[6] == false && gridboard[7] == false && gridboard[8] == false){
      console.log('678 - vertical')
    }
    else if (gridboard[0] == false && gridboard[3] == false && gridboard[6] == false){
      console.log('036 - horizontal')
    }
    else if (gridboard[1] == false && gridboard[4] == false && gridboard[7] == false){
      console.log('147 - horizontal')
    }
    else if (gridboard[2] == false && gridboard[5] == false && gridboard[8] == false){
      console.log('258 - horizontal')
    }
    else if (gridboard[0] == false && gridboard[4] == false && gridboard[8] == false){
      console.log('048 - diagonal')
    }
    else if (gridboard[2] == false && gridboard[4] == false && gridboard[6] == false){
      console.log('246 - diagonal')
    }
}

function botPick(){
  counter--;
  

}
