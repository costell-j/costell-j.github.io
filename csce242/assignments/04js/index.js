
const responses = document.getElementById("responses");

document.getElementById("speech").onclick = () => {
    document.getElementById("bubble-body").classList.remove("hidden");
    document.getElementById("bubble-tail").classList.remove("hidden");
};

document.getElementById("drinks").onchange = (e) => {
    const drink = e.target.value;

    if (drink === "coffee") {
        responses.innerHTML = "Coffee: Good Choice!";
    }
    else if (drink === "orange-juice") {
        responses.innerHTML = "Orange Juice: Nice Choice!";
    }
    else if (drink === "apple-juice") {
        responses.innerHTML = "Apple Juice: Great Choice!";
    }
    else if (drink === "milk") {
        responses.innerHTML = "Milk: Good Choice!";
    }
    else if (drink === "water") {
        responses.innerHTML = "Water: Very Healthy!";
    }
};

document.getElementById("potato").onclick = () => {
    document.getElementById("sticker").classList.remove("hidden");
};