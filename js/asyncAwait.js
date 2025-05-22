async function fetchJokes(params) {
    try {
        const res = await fetch ("https://v2.jokeapi.dev/joke/Programming?type=single");
        const data = await res.json();
        alert(data.joke);
    }
    catch (error) {
        console.log("Error:", error);
    }
}
document.getElementById("task3").addEventListener("click", function(){
    fetchJokes();
    document.getElementById("task3-1").style.textDecoration = "line-through"
});