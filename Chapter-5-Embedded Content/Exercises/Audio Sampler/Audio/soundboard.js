/* gathers the audios in one container */
const audios = document.querySelectorAll('audio');

/* all buttons */
const buttonsContainer = document.getElementById('buttons');

/* the audios that will be used in this */
const audioFiles = [
    "ah-ha",
    "back-of-the-net",
    "bangoutoforder",
    "dan",
    "emailoftheevening",
    "hellopartridge",
    "iateascotchegg",
    "imconfused"
];

/* a working button for each file sound */
audioFiles.forEach(fileName => {
    const button = document.createElement('button');
    button.textContent = fileName.replace(/-/g, ' ');
    button.classList.add('btn');
    button.addEventListener('click', () => {
        const audio = document.getElementById(fileName);
        audio.currentTime = 0;
        audio.play();
    });
    buttonsContainer.appendChild(button);
});
