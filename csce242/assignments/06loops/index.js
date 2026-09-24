const road = document.getElementById("road");
const colors = ["red", "white", "blue", "pink", "yellow", "purple", "black"];
const lanes = [road.clientHeight*0.25 - 17.5, road.clientHeight*0.75 - 17.5];
const addCar = (color, x, y) => {
    let car = document.createElement("div");
    car.classList.add("car")
    let glass = document.createElement("div");
    glass.classList.add("glass");
    let body = document.createElement("div");
    body.classList.add("body");

    body.style.backgroundColor = color;

    car.append(glass);
    car.append(body);

    car.style.right = x + "px";
    car.style.top = y + "px";

    road.append(car);
}

for(let i = 0; i < 7; i++) {
    addCar(colors[Math.trunc(Math.random()*colors.length)], Math.random()*(road.clientWidth - 55), lanes[Math.trunc(Math.random()*lanes.length)]);
}



