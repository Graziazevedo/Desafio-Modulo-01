const input = "cApS";


if ((input.slice(0, 1) === input.slice(0, 1).toLowerCase() && input.slice(1) === input.slice(1).toUpperCase())) {
    console.log(input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase())
} else if (input === input.toUpperCase()) {
    console.log(input.toLowerCase());
} else {
    (console.log(input));
}
