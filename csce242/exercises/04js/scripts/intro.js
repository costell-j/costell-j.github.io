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