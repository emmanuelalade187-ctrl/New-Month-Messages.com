const message = `
Happy New Month to you,

this month will bring you peace and joy,
 you shall be blessed with sound health, 
 favor will locate you and difficult path be made smooth before IJN.
Have a wonderful Month ❤️
`;

const typingText = document.getElementById("typing-text");

let index = 0;
let typingSpeed = 45;


/* =========================
   TYPE THE MESSAGE
========================= */

function typeMessage() {

    if (index < message.length) {

        typingText.textContent += message.charAt(index);

        index++;

        setTimeout(typeMessage, typingSpeed);

    }

}


/* =========================
   RESTART MESSAGE
========================= */

function restartMessage() {

    typingText.textContent = "";

    index = 0;

    typeMessage();

}


/* =========================
   START WHEN PAGE LOADS
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        typeMessage();

    }, 1500);

});