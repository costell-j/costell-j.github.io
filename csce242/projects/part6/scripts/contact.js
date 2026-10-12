// Open and close the contact modal
document.getElementById("contact-open").onclick = (e) => {
    e.preventDefault();
    document.getElementById("contact-modal").showModal();
}

document.getElementById("contact-close").onclick = (e) => {
    document.getElementById("contact-modal").close();
}

// Send the contact form
document.getElementById("contact-form").onsubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "9dc0391e-0642-44c1-9a88-1d370ce0c260");

    const result = document.getElementById("result");
    const submitButton = e.target.querySelector("button");

    submitButton.disabled = true;
    result.innerHTML = "Sending...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok && data.success) {
            result.innerHTML = "Message sent! Thank you for contacting Pulse.";
            e.target.reset();
        } else {
            result.textContent = "Error: " + data.message;
        }
    } catch (error) {
        result.innerHTML = "Sorry, we couldn't send your message.";
    } finally {
        submitButton.disabled = false;

        setTimeout(() => {
            result.innerHTML = "";
        }, 3000);
    }
}