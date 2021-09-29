const joke = document.getElementById('joke');
const reload = document.querySelector('.fa-redo-alt');

window.addEventListener('load', () => {
    document.body.style.backgroundColor = randColor(arr);
    fetchJoke();
})

reload.addEventListener('click', () => {
    fetchJoke();
});

const fetchJoke = () => {
    fetch("https://icanhazdadjoke.com/slack")
    .then(response => response.json())
    .then(data => {
        const jokeData = data.attachments[0].text;
        const jokeFallback = data.attachments[0].fallback;
        joke.innerHTML = jokeData ? jokeData : jokeFallback;
    })
}

const arr = ["#fb8500", "#023047", "#e63946", "#06d6a0", "#ffd166", "#84a59d", "#a1c181", "#bb9457"];
const randColor = (arr) => {
    return arr[Math.floor(Math.random() * 8)];
}

