var canvas = document.getElementById("canvas");
var canvasReference = canvas.getContext("2d");

var car1Object = "";
var car2Object = "";

var car1Image = "car1.png";
var car2Image = "rover.png";

var car1Width = 70;
var car2Width = 70;

var car1Height = 40;
var car2Height = 40;

var car1XCoordinate = 14;
var car2XCoordinate = 14;

var car1YCoordinate = 14;
var car2YCoordinate = 70;

function add() {
    car1Object = new Image();
    car2Object = new Image();
    
    car1Object.onload = uploadCar1Image;
    car2Object.onload = uploadCar2Image;
    
    car1Object.src = car1Image;
    car2Object.src = car2Image;
}

function uploadCar1Image() {
    canvasReference.drawImage(car1Object, car1XCoordinate, car1YCoordinate, car1Width, car1Height);
}

function uploadCar2Image() {
    canvasReference.drawImage(car2Object, car2XCoordinate, car2YCoordinate, car2Width, car2Height);
}

window.addEventListener("keydown", keydown);

function keydown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == "38") {
        car1Forward();
        console.log("forwardKey1");
    }

    if(keyPressed == "40") {
        car1Down();
        console.log("downKey1");
    }

    if(keyPressed == "37") {
        car1Left();
        console.log("leftKey1");
    }

    if(keyPressed == "39") {
        car1Right();
        console.log("rightKey1");
    }

    if(keyPressed == "87") {
        car2Forward();
        console.log("forwardKey2");
    }

    if(keyPressed == "83") {
        car2Down();
        console.log("downKey2");
    }

    if(keyPressed == "65") {
        car2Left();
        console.log("leftKey2");
    }

    if(keyPressed == "68") {
        car2Right();
        console.log("rightKey2");
    }

    if(car1XCoordinate > 600) {
        console.log("Car1 Won The Race");
        document.getElementById("gameStatus").innerHTML = "Car1 Won The Race";
    }

    if(car2XCoordinate > 600) {
        console.log("Car2 Won The Race");
        document.getElementById("gameStatus").innerHTM = "Car2 Won The Race";
    }
}

function car1Forward() {
    if(car1YCoordinate >= 0) {
        car1YCoordinate = car1YCoordinate - 10;
        console.log("Car1XCoordinate = "+car1XCoordinate+", Car1YCoordinate = "+car1YCoordinate);
        uploadCar1Image();
        uploadCar2Image();
    }
}

function car1Down() {
    if(car1YCoordinate <= 500) {
        car1YCoordinate = car1YCoordinate + 10;
        console.log("Car1XCoordinate = "+car1XCoordinate+", Car1YCoodinate = "+car1YCoordinate);
        uploadCar1Image();
        uploadCar2Image();
    }
}

function car1Left() {
    if(car1XCoordinate >= 0) {
        car1XCoordinate = car1XCoordinate - 10;
        console.log("Car1XCoordinate = "+car1XCoordinate+", Car1YCoordinate = "+car1YCoordinate);
        uploadCar1Image();
        uploadCar2Image();
    }
}

function car1Right() {
    if(car1XCoordinate <= 500) {
        car1XCoordinate = car1XCoordinate + 10;
        console.log("Car1XCoordinate = "+car1XCoordinate+", Car1YCoordinate = "+car1YCoordinate);
        uploadCar1Image();
        uploadCar2Image();
    }
}

function car2Forward() {
    if(car2YCoordinate >= 0) {
        car2YCoordinate = car2YCoordinate - 10;
        console.log("Car2XCoordinate = "+car2XCoordinate+", Car2YCoordinate = "+car2YCoordinate);
        uploadCar1Image();
        uploadCar2Image();
    }
}

function car2Down() {
    if(car2YCoordinate <= 500) {
        car2YCoordinate = car2YCoordinate + 10;
        console.log("Car2XCoordinate"+car2XCoordinate+", Car2YCoordinate = "+car2YCoordinate);
        uploadCar1Image();
        uploadCar2Image();
    }
}

function car2Left() {
    if(car2XCoordinate >= 0) {
        car2XCoordinate = car2XCoordinate - 10;
        console.log("Car2XCoordinate = "+car2XCoordinate+", Car2YCoordinate = "+car2YCoordinate);
        uploadCar1Image();
        uploadCar2Image();
    }
}

function car2Right() {
    if(car2XCoordinate <= 500) {
        car2XCoordinate = car2XCoordinate + 10;
        console.log("Car2XCoordinate = "+car2XCoordinate+", Car2YCoordinate = "+car2YCoordinate);
        uploadCar1Image();
        uploadCar2Image();
    }
}