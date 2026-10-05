class Vacation {
    constructor(title, type, description, thingsToDo, pic, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.pic = pic;
        this.mapSrc = mapSrc;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("vacation");
        section.classList.add("project-card");

        section.append(this.vacationTitle());
        section.append(this.vacationType());
        section.append(this.vacationImage());

        section.onclick = () => {
            this.showModal();
        };

        return section;
    }

    vacationTitle() {
        const h3 = document.createElement("h3");
        h3.textContent = this.title;
        return h3;
    }

    vacationType() {
        const p = document.createElement("p");
        p.textContent = `${this.type} Vacation`;
        return p;
    }

    vacationImage() {
        const img = document.createElement("img");
        img.src = `images/${this.pic}`;
        img.alt = `Picture of ${this.title}`;
        return img;
    }

    showModal() {
        const modal = document.getElementById("vacation-modal");
    
        document.getElementById("modal-title").textContent = this.title;
        document.getElementById("modal-type").textContent =
            `${this.type} Vacation`;
    
        document.getElementById("modal-description").textContent =
            this.description;
    
        document.getElementById("modal-things").textContent =
            `Things to do: ${this.thingsToDo}`;
    
        document.getElementById("modal-map").src =
            `images/${this.mapSrc}`;
    
        modal.classList.remove("hidden");
    }

}

const vacations = [];

vacations.push(new Vacation(
    "Great Smokey Mountains",
    "Mountain",
    "A scenic mountain region known for misty ridges, forests, and abundant wildlife.",
    "Hiking, scenic drives, waterfalls, wildlife viewing",
    "img-gsmountains.png",
    "map-gsmountains.png"
));

vacations.push(new Vacation(
    "Aspen",
    "Mountain",
    "A famous Colorado mountain town known for skiing, alpine scenery, and upscale downtown areas",
    "Skiing, snowboarding, hiking, shopping",
    "img-aspen.png",
    "map-aspen.png"
));

vacations.push(new Vacation(
    "Jackson",
    "Mountain",
    "A western mountain town surrounded by dramatic peaks and close to major national parks.",
    "Hiking, skiing, wildlife tours, sightseeing",
    "img-jackson.png",
    "map-jackson.png"
));

vacations.push(new Vacation(
    "Lake Placid",
    "Mountain",
    "A peaceful Adirondack mountain town known for lakes, winter sports, and Olympic history.",
    "Kayaking, hiking, skiing, Olympic sites",
    "img-placid.png",
    "map-placid.png"
));

vacations.push(new Vacation(
    "Siesta Beach",
    "Beach",
    "A Florida beach famous for soft white quartz sand and calm Gulf waters.",
    "Swimming, sunbathing, volleyball, sunset watching",
    "img-siesta.png",
    "map-siesta.png"
));

vacations.push(new Vacation(
    "Sandy Hook",
    "Beach",
    "A coastal recreation area in New Jersey with beaches, trails, and views of the Atlantic Ocean.",
    "Swimming, biking, fishing, sightseeing",
    "img-sandy.png",
    "map-sandy.png"
));

vacations.push(new Vacation(
    "Kennebunkport",
    "Beach",
    "A charming Maine coastal town known for beaches, seafood, and classic New England scenery.",
    "Beach walks, boating, shopping, seafood dining",
    "img-kenne.png",
    "map-kenne.png"
));

vacations.push(new Vacation(
    "Punalu'u Black Sand Beach",
    "Beach",
    "A striking Hawaiian beach known for its dark volcanic sand and sea turtle sightings.",
    "Beach walking, photography, turtle watching, sightseeing",
    "img-punaluu.png",
    "map-punaluu.png"
));


const vacationsDiv = document.getElementById("vacation-gallery");

vacations.forEach((vacation) => {
    vacationsDiv.append(vacation.item);
});

document.getElementById("close-modal").onclick = () => {
    document.getElementById("vacation-modal").classList.add("hidden");
};
