document.addEventListener('keydown', function(event){

    playSounds(event.key);
});


function playSounds(character) {

  if(character=='d') {
    var song1 = new Audio('sounds/crash.mp3');
    song1.play();
  }
  else if(character=='v') {
    var song2 = new Audio('sounds/kick-bass.mp3');
    song2.play();
  }
  else if(character=='s') {
    var song3 = new Audio('sounds/snare.mp3');
    song3.play();
  }
  else if(character=='p') {
    var song4 = new Audio('sounds/tom-1.mp3');
    song4.play();
  }
  else if(character=='r') {
    var song5 = new Audio('sounds/tom-2.mp3');
    song5.play();
  }
  else if(character=='t') {
    var song6 = new Audio('sounds/tom-3 (3).mp3');
    song6.play();
  }
  else {
    var song7 = new Audio('sounds/tom-4 (3).mp3');
    song7.play();
  }

}
