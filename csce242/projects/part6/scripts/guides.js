const displayGuides = async() => {
    const guideList = document.getElementById("guide-list");
    guideList.innerHTML = "Loading guides...";

    try {
        const response = await fetch(
            "https://costell-j.github.io/csce242/projects/part6/guides.json"
        );

        if (!response.ok) {
            throw new Error("Could not load guides");
        }

        const guides = await response.json();
        guideList.innerHTML = "";

        for (const guide of guides) {
            const guideCard = document.createElement("div");
            guideCard.classList.add("guide", guide.color);
            guideCard.id = `guide-${guide._id}`;
            guideList.append(guideCard);

            const image = document.createElement("img");
            image.src = guide.img_name;
            image.alt = "";
            image.classList.add("logo-img");
            guideCard.append(image);

            const category = document.createElement("h2");
            category.classList.add("mini-head");
            category.textContent = guide.category;
            guideCard.append(category);

            const title = document.createElement("h3");
            title.textContent = guide.title;
            guideCard.append(title);

            const readTime = document.createElement("p");
            readTime.textContent = guide.read_time;
            guideCard.append(readTime);

            const description = document.createElement("p");
            description.textContent = guide.description;
            guideCard.append(description);
        }
    } catch (error) {
        guideList.innerHTML = "Sorry, we couldn't load the guides.";
    }
}

displayGuides();