function delayedGreeting() {
    setTimeout(() => {
        alert("Hello, world! from task1-1");
        document.getElementById("task1-1").style.textDecoration = "line-through";
    }, 5000);
}

function delayedGreeting2(message, delay) {
    setTimeout(() => {
        alert(message);
        document.getElementById("task1-2").style.textDecoration = "line-through";
    }, delay);
}

document.getElementById("task1").addEventListener("click", function(){
    document.getElementById("task1-1").style.textDecoration = "none";
    document.getElementById("task1-2").style.textDecoration = "none";
    delayedGreeting();
    delayedGreeting2("Hello, world! from task1-2", 10000);
});
