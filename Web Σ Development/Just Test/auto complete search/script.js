const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grape",
    "Lemon",
    "Mango",
    "Orange",
    "Peach",
    "Pineapple",
    "Strawberry",
    "Watermelon"
];

const inputField = document.getElementById("autocomplete-input");
const resultsList = document.getElementById("autocomplete-results");

inputField.addEventListener("input", function() {
    const inputText = inputField.value.toLowerCase();
    const filteredData = data.filter(item => item.toLowerCase().includes(inputText));

    // Clear previous results
    resultsList.innerHTML = "";

    // Display matching suggestions
    filteredData.forEach(item => {
        const suggestion = document.createElement("li");
        suggestion.textContent = item;
        suggestion.addEventListener("click", function() {
            inputField.value = item;
            resultsList.style.display = "none";
        });
        resultsList.appendChild(suggestion);
    });

    // Show or hide results list
    if (filteredData.length > 0) {
        resultsList.style.display = "block";
    } else {
        resultsList.style.display = "none";
    }
});

// Close results when clicking outside the input field
document.addEventListener("click", function(event) {
    if (event.target !== inputField && event.target !== resultsList) {
        resultsList.style.display = "none";
    }
});
