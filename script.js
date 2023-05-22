$(document).ready(function() {
    $("#openFormBtn").click(function() {
      console.log("reg clicked")
        $("#registrationForm").toggleClass("hidden");
        if(!$("#downloadRaceMapBtn").hasClass("hidden")) {
            $("#downloadRaceMapBtn").toggleClass("hidden");
        }
        if(!$("#Rules").hasClass("hidden")) {
            $("#Rules").toggleClass("hidden");
        }
        
    });

    $("#openRaceMapBtn").click(function() {
      console.log("dl race clicked")
        $("#downloadRaceMapBtn").toggleClass("hidden");
        if(!$("#registrationForm").hasClass("hidden")) {
            $("#registrationForm").toggleClass("hidden");
        }
        if(!$("#Rules").hasClass("hidden")) {
            $("#Rules").toggleClass("hidden");
        }
        
    });

    $("#openRulesBtn").click(function() {
      console.log(" rules clicked")
        $("#Rules").toggleClass("hidden");
        if(!$("#registrationForm").hasClass("hidden")) {
            $("#registrationForm").toggleClass("hidden");
            console.log("hid class due to reg")
        }
        if(!$("#downloadRaceMapBtn").hasClass("hidden")) {
            $("#downloadRaceMapBtn").toggleClass("hidden");
            console.log("hid class due to race")

        }
        
    });

    $("<style>").text(`
    .lds-dual-ring {
        display: inline-block;
        width: 48px;
        height: 48px;
    }
    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 4px solid white;
        border-color: white transparent white transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`).appendTo("head");
});

const showPopupButton = document.getElementById('show-popup'); 
const closePopupButton = document.getElementById('close-popup'); 
const popup = document.getElementById('popup');

showPopupButton.addEventListener('click', () => {
  event.preventDefault();
  popup.classList.remove('hidden');
});

closePopupButton.addEventListener('click', () => {
  popup.classList.add('hidden');
});


const showPopupButton1 = document.getElementById('show-popup1');
const closePopupButton1 = document.getElementById('close-popup1');
const popup1 = document.getElementById('popup1');

showPopupButton1.addEventListener('click', () => {
  event.preventDefault();
  popup1.classList.remove('hidden');
});

closePopupButton1.addEventListener('click', () => {
  popup1.classList.add('hidden');
});


const showPopupButton2 = document.getElementById('show-popup2');
const closePopupButton2 = document.getElementById('close-popup2');
const popup2 = document.getElementById('popup2');

showPopupButton2.addEventListener('click', () => {
  event.preventDefault();
  popup2.classList.remove('hidden');
});

closePopupButton2.addEventListener('click', () => {
  popup2.classList.add('hidden');
});


const showPopupButton3 = document.getElementById('show-popup3');
const closePopupButton3 = document.getElementById('close-popup3');
const popup3 = document.getElementById('popup3');

showPopupButton3.addEventListener('click', () => {
  event.preventDefault();
  popup3.classList.remove('hidden');
});

closePopupButton3.addEventListener('click', () => {
  popup3.classList.add('hidden');
});


const showPopupButton4 = document.getElementById('show-popup4');
const closePopupButton4 = document.getElementById('close-popup4');
const popup4 = document.getElementById('popup4');

showPopupButton4.addEventListener('click', () => {
  event.preventDefault();
  popup4.classList.remove('hidden');
});

closePopupButton4.addEventListener('click', () => {
  popup4.classList.add('hidden');
});


const showPopupButton5 = document.getElementById('show-popup5');
const closePopupButton5 = document.getElementById('close-popup5');
const popup5 = document.getElementById('popup5');

showPopupButton5.addEventListener('click', () => {
  event.preventDefault();
  popup5.classList.remove('hidden');
});

closePopupButton5.addEventListener('click', () => {
  popup5.classList.add('hidden');
});

const showPopupButton6 = document.getElementById('show-popup6');
const closePopupButton6 = document.getElementById('close-popup6');
const popup6 = document.getElementById('popup6');

showPopupButton6.addEventListener('click', () => {
  event.preventDefault();
  popup6.classList.remove('hidden');
});

closePopupButton6.addEventListener('click', () => {
  popup6.classList.add('hidden');
});

const showPopupButton7 = document.getElementById('show-popup7');
const closePopupButton7 = document.getElementById('close-popup7');
const popup7 = document.getElementById('popup7');

showPopupButton7.addEventListener('click', () => {
  event.preventDefault();
  popup7.classList.remove('hidden');
});

closePopupButton7.addEventListener('click', () => {
  popup7.classList.add('hidden');
});

const showPopupButton8 = document.getElementById('show-popup8');
const closePopupButton8 = document.getElementById('close-popup8');
const popup8 = document.getElementById('popup8');

showPopupButton8.addEventListener('click', () => {
  event.preventDefault();
  popup8.classList.remove('hidden');
});

closePopupButton8.addEventListener('click', () => {
  popup8.classList.add('hidden');
});


const slide = [
    "https://cdn.discordapp.com/attachments/1022229564761587834/1110212067685830767/oasis.png",
    "https://cdn.discordapp.com/attachments/1022229564761587834/1110212068377890846/obscure.png",
    "https://cdn.discordapp.com/attachments/1022229564761587834/1110212069363548242/grass.png",
    "https://cdn.discordapp.com/attachments/1022229564761587834/1110212069766205640/colline.png",
    "https://cdn.discordapp.com/attachments/1022229564761587834/1110212070177243136/moon.png",
    "https://cdn.discordapp.com/attachments/1022229564761587834/1110212070567317544/climb.png",
    "https://cdn.discordapp.com/attachments/1022229564761587834/1110212070986743839/aerial.png",
    "https://cdn.discordapp.com/attachments/1022229564761587834/1110212071456510084/crete.png",
    "https://cdn.discordapp.com/attachments/1022229564761587834/1110212072215687318/port.png"

];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

setInterval("ChangeSlide(1)", 4000);


//popup pour les images à créer

const showPopupImage = document.getElementById('show-popup-image');
const closePopupImage = document.getElementById('close-popup-image');
const popupImage = document.getElementById('popupImage');

showPopupImage.addEventListener('click', () => {
  event.preventDefault();
  popupImage.classList.remove('hidden');
});

closePopupImage.addEventListener('click', () => {
  popupImage.classList.add('hidden');
});


const showPopupImage1 = document.getElementById('show-popup-image1');
const closePopupImage1 = document.getElementById('close-popup-image1');
const popupImage1 = document.getElementById('popupImage1');

showPopupImage1.addEventListener('click', () => {
  event.preventDefault();
  popupImage1.classList.remove('hidden');
  console.log("image1 clicked")
});

closePopupImage1.addEventListener('click', () => {
  popupImage1.classList.add('hidden');
});

const showPopupImage2 = document.getElementById('show-popup-image2');
const closePopupImage2 = document.getElementById('close-popup-image2');
const popupImage2 = document.getElementById('popupImage2');

showPopupImage2.addEventListener('click', () => {
  event.preventDefault();
  popupImage2.classList.remove('hidden');
});

closePopupImage2.addEventListener('click', () => {
  popupImage2.classList.add('hidden');
});

const showPopupImage3 = document.getElementById('show-popup-image3');
const closePopupImage3 = document.getElementById('close-popup-image3');
const popupImage3 = document.getElementById('popupImage3');

showPopupImage3.addEventListener('click', () => {
  event.preventDefault();
  popupImage3.classList.remove('hidden');
});

closePopupImage3.addEventListener('click', () => {
  popupImage3.classList.add('hidden');
});

const showPopupImage4 = document.getElementById('show-popup-image4');
const closePopupImage4 = document.getElementById('close-popup-image4');
const popupImage4 = document.getElementById('popupImage4');

showPopupImage4.addEventListener('click', () => {
  event.preventDefault();
  popupImage4.classList.remove('hidden');
});

closePopupImage4.addEventListener('click', () => {
  popupImage4.classList.add('hidden');
});


const showPopupImage5 = document.getElementById('show-popup-image5');
const closePopupImage5 = document.getElementById('close-popup-image5');
const popupImage5 = document.getElementById('popupImage5');

showPopupImage5.addEventListener('click', () => {
  event.preventDefault();
  popupImage5.classList.remove('hidden');
});

closePopupImage5.addEventListener('click', () => {
  popupImage5.classList.add('hidden');
});


const showPopupImage6 = document.getElementById('show-popup-image6');
const closePopupImage6 = document.getElementById('close-popup-image6');
const popupImage6 = document.getElementById('popupImage6');

showPopupImage6.addEventListener('click', () => {
  event.preventDefault();
  popupImage6.classList.remove('hidden');
});

closePopupImage6.addEventListener('click', () => {
  popupImage6.classList.add('hidden');
});


const showPopupImage7 = document.getElementById('show-popup-image7');
const closePopupImage7 = document.getElementById('close-popup-image7');
const popupImage7 = document.getElementById('popupImage7');

showPopupImage7.addEventListener('click', () => {
  event.preventDefault();
  popupImage7.classList.remove('hidden');
});

closePopupImage7.addEventListener('click', () => {
  popupImage7.classList.add('hidden');
});


const showPopupImage8 = document.getElementById('show-popup-image8');
const closePopupImage8 = document.getElementById('close-popup-image8');
const popupImage8 = document.getElementById('popupImage8');

showPopupImage8.addEventListener('click', () => {
  event.preventDefault();
  popupImage8.classList.remove('hidden');
});

closePopupImage8.addEventListener('click', () => {
  popupImage8.classList.add('hidden');
});