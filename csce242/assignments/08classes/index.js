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
    
        document.getElementById("modal-map").src = this.mapSrc;
    
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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1661486.8093832722!2d-84.8504260747577!3d35.576135197074734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885e986b88fb1815%3A0x3c926fc1a7752461!2sGreat%20Smoky%20Mountains%20National%20Park!5e0!3m2!1sen!2sus!4v1791248677419!5m2!1sen!2sus"
));

vacations.push(new Vacation(
    "Aspen",
    "Mountain",
    "A famous Colorado mountain town known for skiing, alpine scenery, and upscale downtown areas",
    "Skiing, snowboarding, hiking, shopping",
    "img-aspen.png",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49486.98889181846!2d-106.87040526804982!3d39.17615733400799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8740395d36b0e9a1%3A0xd5dc814ad2a86497!2sAspen%20Mountain!5e0!3m2!1sen!2sus!4v1791248765947!5m2!1sen!2sus"
));

vacations.push(new Vacation(
    "Jackson",
    "Mountain",
    "A western mountain town surrounded by dramatic peaks and close to major national parks.",
    "Hiking, skiing, wildlife tours, sightseeing",
    "img-jackson.png",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92650.86007554247!2d-110.8579552874155!3d43.47438739169652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53531a58fccf7f4b%3A0x3d1c01cbb13a835c!2sJackson%2C%20WY!5e0!3m2!1sen!2sus!4v1791248887110!5m2!1sen!2sus"
));

vacations.push(new Vacation(
    "Lake Placid",
    "Mountain",
    "A peaceful Adirondack mountain town known for lakes, winter sports, and Olympic history.",
    "Kayaking, hiking, skiing, Olympic sites",
    "img-placid.png",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45699.77960883181!2d-74.02699936769469!3d44.28453054164959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccae263be62315b%3A0x282ca3e6dd25d3c2!2sLake%20Placid%2C%20NY%2012946!5e0!3m2!1sen!2sus!4v1791248943450!5m2!1sen!2sus"
));

vacations.push(new Vacation(
    "Siesta Beach",
    "Beach",
    "A Florida beach famous for soft white quartz sand and calm Gulf waters.",
    "Swimming, sunbathing, volleyball, sunset watching",
    "img-siesta.png",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56746.569613022664!2d-82.59366771193538!3d27.261171967558578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c341f060b6fb8d%3A0x687e071cf6688da3!2sSiesta%20Beach!5e0!3m2!1sen!2sus!4v1791249002770!5m2!1sen!2sus"
));

vacations.push(new Vacation(
    "Sandy Hook",
    "Beach",
    "A coastal recreation area in New Jersey with beaches, trails, and views of the Atlantic Ocean.",
    "Swimming, biking, fishing, sightseeing",
    "img-sandy.png",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97172.16932570846!2d-74.07965495997!3d40.439184703688504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2386f37a1d223%3A0xd33906009e4520b6!2sSandy%20Hook!5e0!3m2!1sen!2sus!4v1791249058499!5m2!1sen!2sus"
));

vacations.push(new Vacation(
    "Kennebunkport",
    "Beach",
    "A charming Maine coastal town known for beaches, seafood, and classic New England scenery.",
    "Beach walks, boating, shopping, seafood dining",
    "img-kenne.png",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185618.00685378694!2d-70.58432754858143!3d43.37114071441972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb2a93de32d83e9%3A0xbc87d64e62c73f1f!2sKennebunkport%2C%20ME!5e0!3m2!1sen!2sus!4v1791249102960!5m2!1sen!2sus"
));

vacations.push(new Vacation(
    "Punalu'u Black Sand Beach",
    "Beach",
    "A striking Hawaiian beach known for its dark volcanic sand and sea turtle sightings.",
    "Beach walking, photography, turtle watching, sightseeing",
    "img-punaluu.png",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7538.734148696744!2d-155.51003640494505!3d19.13540281438311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x795142edc6ddbcf5%3A0x736dbac0bc597c76!2sPunalu%CA%BBu%20Beach!5e0!3m2!1sen!2sus!4v1791249172549!5m2!1sen!2sus"
));


const vacationsDiv = document.getElementById("vacation-gallery");

vacations.forEach((vacation) => {
    vacationsDiv.append(vacation.item);
});

document.getElementById("close-modal").onclick = () => {
    document.getElementById("vacation-modal").classList.add("hidden");
};
