/*** Weekly Planner ***/

/*
    Some practice on using forms with the DOM
*/

let nextId = 0; // each entry gets a new id
function getId() {
    nextId += 1;
    return nextId;
}

class Entry {
    constructor(day, category, activity) {
        this.id = getId();
        this.day = day;
        this.category = category;
        this.activity = activity;
    }
}

let colors = {
    cooking: "#c04e3a",
    exercise: "#e4823c",
    family: "#ebbb37",
    me: "#41cfbc",
    housework: "#95ce40",
    projects: "#49b9d4",
    errands: "#458add",
    social: "#765add",
    travel: "#53dd98",
    work: "#a954e6",
    other: "#999999"
}

// Event listener for page load
window.addEventListener("load", function() {
    console.log('Page loaded.');
    init();
});

// DOM code for page elements
function init() {

    let entries = []; // to hold Entry-class objects

    // Create objects for specific form elements
    let day = document.getElementById("day");
    let category = document.getElementById("category");
    let activity = document.getElementById("activity");
    let create = document.getElementById("create");
    let newEntry = document.getElementById("new-entry");
    let form = document.getElementById("form");

    function addNewEntry() {
        // Store data
        let newEntry = new Entry(day.value, category.value, activity.value);
        entries.push(newEntry);
        // Display on page
        let dayList = document.getElementById(newEntry.day + "-list");
        if (dayList.innerHTML === "") {
            dayList.innerHTML += `
                <div class="day-header">${newEntry.day[0].toUpperCase() + newEntry.day.slice(1)}</div>
            `
        }
        dayList.innerHTML += `
            <p class="entry"><span class="dot" id="dot${newEntry.id}">${newEntry.category}</span> ${newEntry.activity}</p>
        `
        document.getElementById("dot" + newEntry.id).style.backgroundColor = colors[newEntry.category];
    }

    function clearForm() {
        day.value = "";
        category.value = "";
        activity.value = "";
    }

    // Non-form click events
    document.addEventListener("click", function(event) {

        if (event.target.id === "go-to-form") {
            create.style.visibility = "hidden";
            newEntry.style.visibility = "visible";
            event.preventDefault(); // ensure this is the only button registering for the click
        }

        if (event.target.id === "cancel") {
            create.style.visibility = "visible";
            newEntry.style.visibility = "hidden";
            event.preventDefault(); // ensure this is the only button registering for the click
        }

        if (event.target.id === "submit") {
             // Validate no empty inputs
            if (day.value === "" || category.value === "" || activity.value === "") {
                alert("All fields required to create a new entry.")
                console.log("not all fields are valid");  
            } else {
                addNewEntry();
                clearForm();
                create.style.visibility = "visible";
                newEntry.style.visibility = "hidden";
            }
            event.preventDefault(); // prevent page from reloading
        }

    });

}