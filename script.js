const qna = [
{num: 1, que: "hablar", true: "to speak", false1: "to eat", false2: "to live"},
    {num: 2, que: "comer", true: "to eat", false1: "to drink", false2: "to run"},
    {num: 3, que: "beber", true: "to drink", false1: "to eat", false2: "to cook"},
    {num: 4, que: "vivir", true: "to live", false1: "to work", false2: "to study"},
    {num: 5, que: "trabajar", true: "to work", false1: "to study", false2: "to learn"},
    {num: 6, que: "estudiar", true: "to study", false1: "to work", false2: "to teach"},
    {num: 7, que: "aprender", true: "to learn", false1: "to teach", false2: "to study"},
    {num: 8, que: "enseñar", true: "to teach", false1: "to learn", false2: "to study"},
    {num: 9, que: "entender", true: "to understand", false1: "to know", false2: "to think"},
    {num: 10, que: "saber", true: "to know", false1: "to think", false2: "to believe"},

    // ESSENTIAL IRREGULAR VERBS
    {num: 11, que: "ser", true: "to be", false1: "to have", false2: "to do"},
    {num: 12, que: "estar", true: "to be", false1: "to have", false2: "to do"},
    {num: 13, que: "tener", true: "to have", false1: "to be", false2: "to do"},
    {num: 14, que: "hacer", true: "to do", false1: "to make", false2: "to have"},
    {num: 15, que: "ir", true: "to go", false1: "to come", false2: "to leave"},
    {num: 16, que: "venir", true: "to come", false1: "to go", false2: "to arrive"},
    {num: 17, que: "ver", true: "to see", false1: "to look", false2: "to watch"},
    {num: 18, que: "decir", true: "to say", false1: "to tell", false2: "to speak"},
    {num: 19, que: "poder", true: "can", false1: "should", false2: "must"},
    {num: 20, que: "querer", true: "to want", false1: "to need", false2: "to like"},

    // COMMON NOUNS - Everyday Objects
    {num: 21, que: "casa", true: "house", false1: "home", false2: "apartment"},
    {num: 22, que: "comida", true: "food", false1: "meal", false2: "dinner"},
    {num: 23, que: "agua", true: "water", false1: "drink", false2: "liquid"},
    {num: 24, que: "tiempo", true: "time", false1: "weather", false2: "hour"},
    {num: 25, que: "día", true: "day", false1: "date", false2: "today"},
    {num: 26, que: "noche", true: "night", false1: "evening", false2: "dark"},
    {num: 27, que: "persona", true: "person", false1: "people", false2: "human"},
    {num: 28, que: "lugar", true: "place", false1: "space", false2: "location"},
    {num: 29, que: "cosa", true: "thing", false1: "object", false2: "item"},
    {num: 30, que: "problema", true: "problem", false1: "question", false2: "issue"},

    // BASIC ADJECTIVES - Essential Descriptions
    {num: 31, que: "bueno", true: "good", false1: "bad", false2: "nice"},
    {num: 32, que: "malo", true: "bad", false1: "good", false2: "wrong"},
    {num: 33, que: "grande", true: "big", false1: "small", false2: "large"},
    {num: 34, que: "pequeño", true: "small", false1: "big", false2: "little"},
    {num: 35, que: "nuevo", true: "new", false1: "old", false2: "young"},
    {num: 36, que: "viejo", true: "old", false1: "new", false2: "ancient"},
    {num: 37, que: "fácil", true: "easy", false1: "difficult", false2: "simple"},
    {num: 38, que: "difícil", true: "difficult", false1: "easy", false2: "hard"},
    {num: 39, que: "importante", true: "important", false1: "necessary", false2: "essential"},
    {num: 40, que: "necesario", true: "necessary", false1: "important", false2: "essential"},

    // PREPOSITIONS - Common Usage
    {num: 41, que: "en", true: "in", false1: "on", false2: "at"},
    {num: 42, que: "sobre", true: "on", false1: "in", false2: "at"},
    {num: 43, que: "con", true: "with", false1: "without", false2: "for"},
    {num: 44, que: "sin", true: "without", false1: "with", false2: "for"},
    {num: 45, que: "para", true: "for", false1: "to", false2: "from"},
    {num: 46, que: "por", true: "for", false1: "by", false2: "through"},
    {num: 47, que: "de", true: "of", false1: "from", false2: "by"},
    {num: 48, que: "a", true: "to", false1: "at", false2: "in"},

    // QUESTION WORDS - Essential for Communication
    {num: 49, que: "qué", true: "what", false1: "which", false2: "that"},
    {num: 50, que: "quién", true: "who", false1: "whom", false2: "whose"},
    {num: 51, que: "dónde", true: "where", false1: "when", false2: "how"},
    {num: 52, que: "cuándo", true: "when", false1: "where", false2: "how"},
    {num: 53, que: "cómo", true: "how", false1: "what", false2: "why"},
    {num: 54, que: "por qué", true: "why", false1: "because", false2: "how"},
    {num: 55, que: "cuánto", true: "how much", false1: "how many", false2: "how often"},

    // COMMON PHRASES - Everyday Expressions
    {num: 56, que: "Hola", true: "Hello", false1: "Goodbye", false2: "Thanks"},
    {num: 57, que: "Adiós", true: "Goodbye", false1: "Hello", false2: "See you"},
    {num: 58, que: "Por favor", true: "Please", false1: "Thank you", false2: "You're welcome"},
    {num: 59, que: "Gracias", true: "Thank you", false1: "Please", false2: "Sorry"},
    {num: 60, que: "De nada", true: "You're welcome", false1: "Thank you", false2: "Please"},
    {num: 61, que: "Lo siento", true: "I'm sorry", false1: "Excuse me", false2: "Thank you"},
    {num: 62, que: "Perdón", true: "Excuse me", false1: "I'm sorry", false2: "Thank you"},

    // TIME EXPRESSIONS - Essential for Daily Life
    {num: 63, que: "hoy", true: "today", false1: "tomorrow", false2: "yesterday"},
    {num: 64, que: "mañana", true: "tomorrow", false1: "today", false2: "yesterday"},
    {num: 65, que: "ayer", true: "yesterday", false1: "today", false2: "tomorrow"},
    {num: 66, que: "ahora", true: "now", false1: "later", false2: "soon"},
    {num: 67, que: "después", true: "later", false1: "now", false2: "soon"},
    {num: 68, que: "siempre", true: "always", false1: "never", false2: "sometimes"},
    {num: 69, que: "nunca", true: "never", false1: "always", false2: "sometimes"},

    // NUMBERS 1-10 - Foundation for Counting
    {num: 70, que: "uno", true: "one", false1: "first", false2: "once"},
    {num: 71, que: "dos", true: "two", false1: "second", false2: "twice"},
    {num: 72, que: "tres", true: "three", false1: "third", false2: "triple"},
    {num: 73, que: "cuatro", true: "four", false1: "fourth", false2: "quarter"},
    {num: 74, que: "cinco", true: "five", false1: "fifth", false2: "fifty"},
    {num: 75, que: "seis", true: "six", false1: "sixth", false2: "sixty"},
    {num: 76, que: "siete", true: "seven", false1: "seventh", false2: "seventy"},
    {num: 77, que: "ocho", true: "eight", false1: "eighth", false2: "eighty"},
    {num: 78, que: "nueve", true: "nine", false1: "ninth", false2: "ninety"},
    {num: 79, que: "diez", true: "ten", false1: "tenth", false2: "teen"},

    // FAMILY MEMBERS - Basic Relationships
    {num: 80, que: "madre", true: "mother", false1: "father", false2: "parent"},
    {num: 81, que: "padre", true: "father", false1: "mother", false2: "parent"},
    {num: 82, que: "hermano", true: "brother", false1: "sister", false2: "cousin"},
    {num: 83, que: "hermana", true: "sister", false1: "brother", false2: "cousin"},
    {num: 84, que: "hijo", true: "son", false1: "daughter", false2: "child"},
    {num: 85, que: "hija", true: "daughter", false1: "son", false2: "child"},

    // COLORS - Basic Visual Vocabulary
    {num: 86, que: "rojo", true: "red", false1: "blue", false2: "green"},
    {num: 87, que: "azul", true: "blue", false1: "red", false2: "green"},
    {num: 88, que: "verde", true: "green", false1: "blue", false2: "yellow"},
    {num: 89, que: "amarillo", true: "yellow", false1: "orange", false2: "green"},
    {num: 90, que: "blanco", true: "white", false1: "black", false2: "gray"},
    {num: 91, que: "negro", true: "black", false1: "white", false2: "gray"},

    // FOOD AND DRINK - Daily Necessities
    {num: 92, que: "pan", true: "bread", false1: "food", false2: "meal"},
    {num: 93, que: "arroz", true: "rice", false1: "beans", false2: "pasta"},
    {num: 94, que: "carne", true: "meat", false1: "chicken", false2: "fish"},
    {num: 95, que: "pollo", true: "chicken", false1: "meat", false2: "fish"},
    {num: 96, que: "pescado", true: "fish", false1: "meat", false2: "chicken"},
    {num: 97, que: "fruta", true: "fruit", false1: "vegetable", false2: "food"},
    {num: 98, que: "verdura", true: "vegetable", false1: "fruit", false2: "salad"},

    // COMMON PLACES - Locations
    {num: 99, que: "escuela", true: "school", false1: "university", false2: "college"},
    {num: 100, que: "trabajo", true: "work", false1: "job", false2: "office"},
    
    {num: 1, que: "hablar", true: "to speak", false1: "to eat", false2: "to live"},
    {num: 2, que: "comer", true: "to eat", false1: "to drink", false2: "to run"},
    {num: 3, que: "beber", true: "to drink", false1: "to eat", false2: "to cook"},
    {num: 4, que: "vivir", true: "to live", false1: "to work", false2: "to study"},
    {num: 5, que: "trabajar", true: "to work", false1: "to study", false2: "to learn"},
    {num: 6, que: "estudiar", true: "to study", false1: "to work", false2: "to teach"},
    {num: 7, que: "aprender", true: "to learn", false1: "to teach", false2: "to study"},
    {num: 8, que: "enseñar", true: "to teach", false1: "to learn", false2: "to study"},
    {num: 9, que: "entender", true: "to understand", false1: "to know", false2: "to think"},
    {num: 10, que: "saber", true: "to know", false1: "to think", false2: "to believe"},

    // ESSENTIAL IRREGULAR VERBS
    {num: 11, que: "ser", true: "to be", false1: "to have", false2: "to do"},
    {num: 12, que: "estar", true: "to be", false1: "to have", false2: "to do"},
    {num: 13, que: "tener", true: "to have", false1: "to be", false2: "to do"},
    {num: 14, que: "hacer", true: "to do", false1: "to make", false2: "to have"},
    {num: 15, que: "ir", true: "to go", false1: "to come", false2: "to leave"},
    {num: 16, que: "venir", true: "to come", false1: "to go", false2: "to arrive"},
    {num: 17, que: "ver", true: "to see", false1: "to look", false2: "to watch"},
    {num: 18, que: "decir", true: "to say", false1: "to tell", false2: "to speak"},
    {num: 19, que: "poder", true: "can", false1: "should", false2: "must"},
    {num: 20, que: "querer", true: "to want", false1: "to need", false2: "to like"},

    // COMMON NOUNS - Everyday Objects
    {num: 21, que: "casa", true: "house", false1: "home", false2: "apartment"},
    {num: 22, que: "comida", true: "food", false1: "meal", false2: "dinner"},
    {num: 23, que: "agua", true: "water", false1: "drink", false2: "liquid"},
    {num: 24, que: "tiempo", true: "time", false1: "weather", false2: "hour"},
    {num: 25, que: "día", true: "day", false1: "date", false2: "today"},
    {num: 26, que: "noche", true: "night", false1: "evening", false2: "dark"},
    {num: 27, que: "persona", true: "person", false1: "people", false2: "human"},
    {num: 28, que: "lugar", true: "place", false1: "space", false2: "location"},
    {num: 29, que: "cosa", true: "thing", false1: "object", false2: "item"},
    {num: 30, que: "problema", true: "problem", false1: "question", false2: "issue"},

    // BASIC ADJECTIVES - Essential Descriptions
    {num: 31, que: "bueno", true: "good", false1: "bad", false2: "nice"},
    {num: 32, que: "malo", true: "bad", false1: "good", false2: "wrong"},
    {num: 33, que: "grande", true: "big", false1: "small", false2: "large"},
    {num: 34, que: "pequeño", true: "small", false1: "big", false2: "little"},
    {num: 35, que: "nuevo", true: "new", false1: "old", false2: "young"},
    {num: 36, que: "viejo", true: "old", false1: "new", false2: "ancient"},
    {num: 37, que: "fácil", true: "easy", false1: "difficult", false2: "simple"},
    {num: 38, que: "difícil", true: "difficult", false1: "easy", false2: "hard"},
    {num: 39, que: "importante", true: "important", false1: "necessary", false2: "essential"},
    {num: 40, que: "necesario", true: "necessary", false1: "important", false2: "essential"},

    // PREPOSITIONS - Common Usage
    {num: 41, que: "en", true: "in", false1: "on", false2: "at"},
    {num: 42, que: "sobre", true: "on", false1: "in", false2: "at"},
    {num: 43, que: "con", true: "with", false1: "without", false2: "for"},
    {num: 44, que: "sin", true: "without", false1: "with", false2: "for"},
    {num: 45, que: "para", true: "for", false1: "to", false2: "from"},
    {num: 46, que: "por", true: "for", false1: "by", false2: "through"},
    {num: 47, que: "de", true: "of", false1: "from", false2: "by"},
    {num: 48, que: "a", true: "to", false1: "at", false2: "in"},

    // QUESTION WORDS - Essential for Communication
    {num: 49, que: "qué", true: "what", false1: "which", false2: "that"},
    {num: 50, que: "quién", true: "who", false1: "whom", false2: "whose"},
    {num: 51, que: "dónde", true: "where", false1: "when", false2: "how"},
    {num: 52, que: "cuándo", true: "when", false1: "where", false2: "how"},
    {num: 53, que: "cómo", true: "how", false1: "what", false2: "why"},
    {num: 54, que: "por qué", true: "why", false1: "because", false2: "how"},
    {num: 55, que: "cuánto", true: "how much", false1: "how many", false2: "how often"},

    // COMMON PHRASES - Everyday Expressions
    {num: 56, que: "Hola", true: "Hello", false1: "Goodbye", false2: "Thanks"},
    {num: 57, que: "Adiós", true: "Goodbye", false1: "Hello", false2: "See you"},
    {num: 58, que: "Por favor", true: "Please", false1: "Thank you", false2: "You're welcome"},
    {num: 59, que: "Gracias", true: "Thank you", false1: "Please", false2: "Sorry"},
    {num: 60, que: "De nada", true: "You're welcome", false1: "Thank you", false2: "Please"},
    {num: 61, que: "Lo siento", true: "I'm sorry", false1: "Excuse me", false2: "Thank you"},
    {num: 62, que: "Perdón", true: "Excuse me", false1: "I'm sorry", false2: "Thank you"},

    // TIME EXPRESSIONS - Essential for Daily Life
    {num: 63, que: "hoy", true: "today", false1: "tomorrow", false2: "yesterday"},
    {num: 64, que: "mañana", true: "tomorrow", false1: "today", false2: "yesterday"},
    {num: 65, que: "ayer", true: "yesterday", false1: "today", false2: "tomorrow"},
    {num: 66, que: "ahora", true: "now", false1: "later", false2: "soon"},
    {num: 67, que: "después", true: "later", false1: "now", false2: "soon"},
    {num: 68, que: "siempre", true: "always", false1: "never", false2: "sometimes"},
    {num: 69, que: "nunca", true: "never", false1: "always", false2: "sometimes"},

    // NUMBERS 1-10 - Foundation for Counting
    {num: 70, que: "uno", true: "one", false1: "first", false2: "once"},
    {num: 71, que: "dos", true: "two", false1: "second", false2: "twice"},
    {num: 72, que: "tres", true: "three", false1: "third", false2: "triple"},
    {num: 73, que: "cuatro", true: "four", false1: "fourth", false2: "quarter"},
    {num: 74, que: "cinco", true: "five", false1: "fifth", false2: "fifty"},
    {num: 75, que: "seis", true: "six", false1: "sixth", false2: "sixty"},
    {num: 76, que: "siete", true: "seven", false1: "seventh", false2: "seventy"},
    {num: 77, que: "ocho", true: "eight", false1: "eighth", false2: "eighty"},
    {num: 78, que: "nueve", true: "nine", false1: "ninth", false2: "ninety"},
    {num: 79, que: "diez", true: "ten", false1: "tenth", false2: "teen"},

    // FAMILY MEMBERS - Basic Relationships
    {num: 80, que: "madre", true: "mother", false1: "father", false2: "parent"},
    {num: 81, que: "padre", true: "father", false1: "mother", false2: "parent"},
    {num: 82, que: "hermano", true: "brother", false1: "sister", false2: "cousin"},
    {num: 83, que: "hermana", true: "sister", false1: "brother", false2: "cousin"},
    {num: 84, que: "hijo", true: "son", false1: "daughter", false2: "child"},
    {num: 85, que: "hija", true: "daughter", false1: "son", false2: "child"},

    // COLORS - Basic Visual Vocabulary
    {num: 86, que: "rojo", true: "red", false1: "blue", false2: "green"},
    {num: 87, que: "azul", true: "blue", false1: "red", false2: "green"},
    {num: 88, que: "verde", true: "green", false1: "blue", false2: "yellow"},
    {num: 89, que: "amarillo", true: "yellow", false1: "orange", false2: "green"},
    {num: 90, que: "blanco", true: "white", false1: "black", false2: "gray"},
    {num: 91, que: "negro", true: "black", false1: "white", false2: "gray"},

    // FOOD AND DRINK - Daily Necessities
    {num: 92, que: "pan", true: "bread", false1: "food", false2: "meal"},
    {num: 93, que: "arroz", true: "rice", false1: "beans", false2: "pasta"},
    {num: 94, que: "carne", true: "meat", false1: "chicken", false2: "fish"},
    {num: 95, que: "pollo", true: "chicken", false1: "meat", false2: "fish"},
    {num: 96, que: "pescado", true: "fish", false1: "meat", false2: "chicken"},
    {num: 97, que: "fruta", true: "fruit", false1: "vegetable", false2: "food"},
    {num: 98, que: "verdura", true: "vegetable", false1: "fruit", false2: "salad"},

    // COMMON PLACES - Locations
    {num: 99, que: "escuela", true: "school", false1: "university", false2: "college"},
    {num: 100, que: "trabajo", true: "work", false1: "job", false2: "office"}
];
/* 

*/
let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    setQ(currentQuestionIndex);
    setupEventListeners();
});

shuffleArray(qna);

function setQ(index) {
    const currentQ = qna[index];
    document.getElementById("question").innerHTML = currentQ.que;
    
    const answers = [currentQ.true, currentQ.false1, currentQ.false2];
    shuffleArray(answers);
    
    document.getElementById("button1").innerHTML = answers[0];
    document.getElementById("button2").innerHTML = answers[1];
    document.getElementById("button3").innerHTML = answers[2];
    
    // Store correct answer for checking
    document.getElementById("button1").dataset.correct = answers[0] === currentQ.true;
    document.getElementById("button2").dataset.correct = answers[1] === currentQ.true;
    document.getElementById("button3").dataset.correct = answers[2] === currentQ.true;
}

function setupEventListeners() {
    document.getElementById("button1").addEventListener("click", function() {
        checkAnswer(this);
    });
    document.getElementById("button2").addEventListener("click", function() {
        checkAnswer(this);
    });
    document.getElementById("button3").addEventListener("click", function() {
        checkAnswer(this);
    });
}

function checkAnswer(button) {
    const isCorrect = button.dataset.correct === "true";
    const buttonbox = document.getElementById("workbox");

    if (isCorrect) {
        workbox.style.backgroundColor = "green";
        // Move to next question after delay
        setTimeout(function() {
            currentQuestionIndex++;
            if (currentQuestionIndex < qna.length) {
                setQ(currentQuestionIndex);
                buttonbox.style.backgroundColor = ""; // Reset color
            } else {
                document.getElementById("question").innerHTML = "Quiz Complete! 🎉";
                buttonbox.innerHTML = "<p>Yo amo tu <3</p>";
            }
        }, 1000); // Added missing delay parameter
    } else {
        buttonbox.style.backgroundColor = "red";
        // Reset color after short delay
        setTimeout(function() {
            buttonbox.style.backgroundColor = "";
        }, 1000);
    }
}

// Helper function to shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;


}


