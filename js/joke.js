function tellJoke() {
    // console.log("Why don't scientists trust atoms? Because they make up everything!");
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
        .then(res => res.json())
        .then(json => alert(json.joke))
        .catch(error => error)
}
document.getElementById("task2").addEventListener('click', function () {
    const jokeInterval = setInterval(function () {
        tellJoke();
    }, 2000);
    setTimeout(() => {
        clearInterval(jokeInterval);
        jokeInterval;
        // after 10 seconds stop telling  jokes
        alert("Enough joke for today. Now learn JS have fun that way.");
        document.getElementById("task2-1").style.textDecoration = "line-through";
    }, 10000);
})