const arrow = document.getElementById("arrow");
const exerciseOne = document.getElementById("exercise-one");
const exerciseTwo = document.getElementById("exercise-two");
const title = document.getElementById("title");
const eOneDesc = document.getElementById("e-one-desc");
const missedClasses = document.getElementById("missed-classes");
const amountLost = document.getElementById("amt-lost");
const countdown = document.getElementById("countdown");
const response = document.getElementById("response");

arrow.onclick = (e) => {
    e.target.classList.toggle("rotate");
    document.querySelector("nav").classList.toggle("hide-small");
}


exerciseOne.onclick = (e) => {
    title.innerHTML = "Missing Class Point Deductions";
    eOneDesc.classList.remove("hidden");
    eOneDesc.innerHTML = "How many days do you intend to miss?";
    missedClasses.classList.remove("hidden");
    amountLost.classList.remove("hidden");
    countdown.classList.add("hidden");

}

missedClasses.onkeyup = (e) => {
    const daysMissing = e.target.value;
    let percent = (daysMissing / 25) * 7;
    amountLost.innerHTML = `You will lose ${percent.toFixed(2)}% for skipping ${daysMissing} days.`;
    if(daysMissing <= 4) {
        response.innerHTML = "Ok, I guess that's not a lot";
    }
    else if(daysMissing <= 8) {
        response.innerHTML = "Woah, you're missing a lot of valuable information";
    }
    else if(daysMissing <= 16) {
        response.innerHTML = "Are you Spider-Man or something? What're you doing?";
    } else if (daysMissing <= 25){
        response.innerHTML = "Why take the class? Might as well drop it";
    } else {
        response.innerHTML = "How?? There aren't even that many classes";
    }

}

exerciseTwo.onclick = (e) => {
    title.innerHTML = "End of Semester Counter";
    response.innerHTML = "";
    eOneDesc.classList.add("hidden");
    missedClasses.classList.add("hidden");
    amountLost.classList.add("hidden");
    countdown.classList.remove("hidden");
    const lastDay = new Date("Dec 4, 2026 23:59:59").getTime();
    const today = new Date().getTime();
    const daysLeft = Math.floor((lastDay - today)/(1000 * 60 * 60 * 24));
    countdown.innerHTML = `You have ${daysLeft} days left in the semester`;
    if(daysLeft < 0) {
        response.innerHTML = "A little late man, the last day has passed";
    }
    else if(daysLeft === 0) {
        response.innerHTML = "It's the last day!";
    }
    else if(daysLeft <= 29) {
        response.innerHTML = "You got less than a month to go!"
    }
    else if(daysLeft <= 50) {
        response.innerHTML = "We're getting a little close. If you haven't locked in yet, I suggest you do it now";
    }
    else if (daysLeft <= 75) {
        response.innerHTML = "Still a little early to check, but not terribly early";
    } else {
        response.innerHTML = "Are you impatient or what? Come back later";
    }


}
