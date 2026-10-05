document.getElementById("hamburger").onclick = (e) => {
    document.getElementById("drop-down").classList.toggle("hidden");
}

class FAQ {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }

    getQuestion() {
        return this.question;
    }

    getAnswer() {
        return this.answer;
    }
}

const faqQuestion = document.getElementById("faq-question");
const faqAnswer = document.getElementById("faq-answer");
const faqTitle = document.getElementById("faq-title");
const backArrow = document.getElementById("back-arrow");
const frontArrow = document.getElementById("front-arrow");
let currentFAQ = 0;
const faqs = [];

faqs.push(new FAQ(
    "How should I prepare for a doctor's appointment?", 
    "Bring a list of your medications, questions, symptoms, and any important health information you want to discuss."
));

faqs.push(new FAQ(
    "What should I know before starting a new medication?", 
    "Learn what the medication is for, how to take it, possible side effects, and whether it interacts with other medications."
));

faqs.push(new FAQ(
    "When should I consider seeing a healthcare provider?", 
    "Consider contacting a provider when symptoms are persistent, worsening, concerning, or interfering with your everyday activities."
));

faqs.push(new FAQ(
    "How do I know what type of healthcare provider I need?", 
    "Start by considering your health concern. Primary care providers handle many general needs, while specialists focus on particular areas of health."
));

faqs.push(new FAQ(
    "What questions should I ask about a health condition?", 
    "Ask about common symptoms, possible causes, treatment options, what you can do at home, and when you should seek additional care."
));

const displayFAQ = () => {
    faqTitle.textContent = `FAQs (${currentFAQ + 1} of ${faqs.length})`
    faqQuestion.textContent = faqs[currentFAQ].getQuestion();
    faqAnswer.textContent = faqs[currentFAQ].getAnswer();
}

backArrow.onclick = (e) => {
    if(currentFAQ === 0) {
        currentFAQ = faqs.length - 1;
    } else {
        currentFAQ--;
    }
    displayFAQ();
}
frontArrow.onclick = (e) => {
    if(currentFAQ === (faqs.length - 1)) {
        currentFAQ = 0;
    } else {
        currentFAQ++;
    }
    displayFAQ();
}

displayFAQ();
