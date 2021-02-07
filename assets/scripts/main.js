//volume change related
var audioElem = document.getElementById('horn-sound');
var textLevelElem = document.getElementById('volume-number');
var volImgElem = document.getElementById('volume-image');
var rangeLevelElem = document.getElementById('volume-slider');

textLevelElem.addEventListener('input', adjustText);
rangeLevelElem.addEventListener('input', adjustScroll);

function adjustText(){
    rangeLevelElem.value = textLevelElem.value;
    audioElem.volume = textLevelElem.value / 100;
    adjustVolPic();
}
function adjustScroll(){
    textLevelElem.value = rangeLevelElem.valueAsNumber;
    audioElem.volume = rangeLevelElem.value / 100;
    adjustVolPic();
}
function adjustVolPic(){
    if(textLevelElem.value == 0){
        volImgElem.src = "./assets/media/icons/volume-level-0.svg";
        volImgElem.alt = "Muted";
    }
    else if(textLevelElem.value < 34){
        volImgElem.src = "./assets/media/icons/volume-level-1.svg";
        volImgElem.alt = "Low Volume";
    }
    else if(textLevelElem.value < 67){
        volImgElem.src = "./assets/media/icons/volume-level-2.svg";
        volImgElem.alt = "Medium Volume";
    }
    else{
        volImgElem.src = "./assets/media/icons/volume-level-3.svg";
        volImgElem.alt = "Max Volume";
    }
}

//audio type
var typeImgElem = document.getElementById('sound-image');
var airHornElem = document.getElementById('radio-air-horn');
var carHornElem = document.getElementById('radio-car-horn');
var partyHornElem = document.getElementById('radio-party-horn');

airHornElem.addEventListener('input', setAir);
carHornElem.addEventListener('input', setCar);
partyHornElem.addEventListener('input', setParty);

function setAir(){
    audioElem.src = "./assets/media/audio/air-horn.mp3";
    typeImgElem.src = "./assets/media/images/air-horn.svg";
    typeImgElem.alt = "Air Horn";
}
function setCar(){
    audioElem.src = "./assets/media/audio/car-horn.mp3";
    typeImgElem.src = "./assets/media/images/car.svg";
    typeImgElem.alt = "Car Horn";
}
function setParty(){
    audioElem.src = "./assets/media/audio/party-horn.mp3";
    typeImgElem.src = "./assets/media/images/party-horn.svg";
    typeImgElem.alt = "Party Horn";
}


//button for horn sound
var playButtonElem = document.getElementById('honk-btn');
playButtonElem.addEventListener("click", playSound);
playButtonElem.type = 'button';

function playSound() {
    if(audioElem.volume > 0){
        audioElem.play();
    }
}





