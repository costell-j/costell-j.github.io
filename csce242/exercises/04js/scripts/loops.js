//First Loop
document.getElementById("btn-loop").onclick = (e) => {
    const loopResult = document.getElementById("loop-result");
    
    for(let i = 0; i < 11; i++) {
       let p = document.createElement("p");
       p.innerHTML = i;
       loopResult.append(p);
    }
}

//Loop with range
document.getElementById("btn-range-loop").onclick = (e) => {
    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);
    const errorStart = document.getElementById("error-start");
    errorStart.classList.add("hidden");
    const errorEnd = document.getElementById("error-end");
    errorEnd.classList.add("hidden");
    const ul = document.getElementById("range-list");
    

    if(startNum < 0 || startNum > 5) {
        errorStart.innerHTML= "* Invalid";
        errorStart.classList.remove("hidden");
        return;
    }

    if(endNum < 10 || endNum > 20 || endNum < startNum) {
        errorEnd.innerHTML= "* Invalid";
        errorEnd.classList.remove("hidden");
        return;
    }

    ul.innerHTML = "";

    for(let i = startNum; i < (endNum + 1); i++) {
        const li = document.createElement("li");
        li.innerHTML = i;
        ul.appendChild(li);
    }
}

//fist array example
document.getElementById("btn-show-toys").onclick = (e) => {
    const toys = ["doll", "skateboard", "mini car", "board game", "nuclear weapon"];
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";

    /*for(let i = 0; i < toys.length; i++) {
        const p = document.createElement("p");
        p.innerHTML = toys(i);
        toyList.append(p);
    }*/

    toys.forEach((toy) => {
        const p = document.createElement("p").innerHTML;
        p.innerHTML = toy;
        toyList.append(p);
    })
}

//show a table of toy prices
document.getElementById("btn-show-toys-prices").onclick = (e) => {
    const div = document.getElementById("toy-info");
    div.innerHTML = "";

    const toyMap = [];
    toyMap["doll"] = 129.99;
    toyMap["skateboard"] = 200.00;
    toyMap["mini car"] = 20.00;
    toyMap["board game"] = 15.00;
    toyMap["nuclear weapon"] = 0.52; //on the black market

    const table = document.createElement("table");
    div.append(table);
    let tr = document.createElement("tr");
    table.append(tr);
    let th = document.createElement("th");
    tr.append(th);
    th.innerHTML = "Name";
    th = document.createElement("th");
    tr.append(th);
    th.innerHTML = "Price";

    for(let toy in toyMap) {
        table.append(createTR(toy, "$" + toyMap[toy]));
    }
};

const createTD = (data) => {
    const td = document.createElement("td");
    td.innerHTML = data;
    return td;
};

const createElement = (data, type) => {
    const elem = document.createElement(type);
    elem.innerHTML = data;
    return elem;
}

const createTR = (data1, data2) => {
    const tr = document.createElement("tr");
    tr.append(createElement(data1, "td"));
    tr.append(createElement(data2, "td"));
    return tr;
};