//Show a button
document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello World";
    e.target.innerHTML = "done!";
}

//styles the link when its clicked
document.getElementById("link").onclick = (e) => {
    console.log("hi");
    e.preventDefault(); // dont go to link's destination
    e.target.classList.add("cool-link");
}

//when button clicked make ball bounce
document.getElementById("btn-bounce").onclick = (e) => {
    console.log("salutations");
    document.getElementById("ball").classList.toggle("bouncing-ball");
}

document.getElementById("txt-num-days").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-plant-msg");
    const plantImage = document.getElementById("plant-img");
    plantImage.classList.remove("hidden");
    if(numDays <= 2) {
        pMessage.innerHTML = `Let your plant rest, its only been ${numDays} days.`;
        plantImage.src="https://dummyimage.com/150x150/07d607/fff&text=Happy+plant";
    }
    else if(numDays <= 5) {
        pMessage.innerHTML = `Time to water, its been ${numDays} days`;
    }
    else if( numDays <= 7) {
        pMessage.innerHTML = `Oh no! Your plant is wilting, it's been ${numDays} days`;
    } else {
        pMessage.innerHTML = "RIP my plant they got hit by a bazooka";
    }
}


//counting 
let countInterval;
let count = 0;
const pCount = document.getElementById("p-count");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnStop = document.getElementById("btn-stop");
btnPause.disabled = true;
btnStop.disabled = true;


btnStart.onclick = () => {
    countInterval = setInterval(() => {
        pCount.innerHTML = ++count;
    },500);
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnStop.disabled = false;
}

btnPause.onclick = () => {
    console.log("Pause clicked");
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = false;
}

btnStop.onclick = () => {
    console.log("Stop clicked");
    count = 0;
    pCount.innerHTML = "";
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = true;
}

//date display
setInterval(() => {
    const pDisplay = document.getElementById("date-display");
    const today = new Date();
    const seconds = today.getSeconds();
    pDisplay.innerHTML = seconds;

},1000);