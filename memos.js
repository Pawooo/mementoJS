// Scribbles pertaining to all things JS React from a guy who tries to shake things up

// Arrow functions
// This won't work because it's not named
function(x,y) {
    return x + y;
}

// This will work because it's named
function add (x,y) {
    return x + y;
}

// Same logic extrapolated here
const add = function(x,y) {
    return x + y;
}

// These are the same
const add = (x, y) => {
    return x + y; 
}

// For one argument parenthesis is optional
const square = x => {
    return x * x;
}

// Implicit return taken to extreme
// IT ONLY WORKS IF IT DOES ONLY ONE THING (THAT INCLUDES VARIABLE ASSIGNMENTS)
const add = (a, b) => a + b;

//APIs are about getting parts of data, not HTML and such
// Chaining filters to an API (ampersand &)

URL?sort=desc&color=blue

// The fetch way
fetch(api-URL)
    .then((res) => {
        console.log("RESOLVED", res)
        return res.json();
    })
    .catch((e) => {
        console.log("ERROR", e)
    })

// Axios
const getStarWarsPerson = async () => {
    const res = await axios.get("https://swapi.dev/api/people/1")
}