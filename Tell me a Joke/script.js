let d = document.body.querySelector("#joke");
let jokeArr = [
    "What do kids play when their mom is using the phone? Bored games.",
    "What do you call an ant who fights crime? A vigilANTe!",
    "Why are snails slow? Because they’re carrying a house on their back",
    "What’s the smartest insect? A spelling bee!",
    "What does a storm cloud wear under his raincoat? Thunderwear."
];
let nextJoke = () => {
    let next_index=0;
    do {
        next_index = Math.floor(Math.random() * 5);
        console.log(next_index);
    }
    while (jokeArr[next_index] == d.innerHTML.trim());
    d.innerHTML = jokeArr[next_index];
}