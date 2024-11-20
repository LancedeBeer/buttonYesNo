// Selecting elements
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const yesForm = document.getElementById('yesForm');
const noForm = document.getElementById('noForm');

// Event listeners for buttons
yesButton.addEventListener('click', () => {
    yesForm.classList.remove('hidden');
    noForm.classList.add('hidden');
});

noButton.addEventListener('click', () => {
    noForm.classList.remove('hidden');
    yesForm.classList.add('hidden');
});

// Handling form submissions
document.getElementById('songForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const song = event.target.song.value;
    const artist = event.target.artist.value;
    alert(`Thank you, ${name}! You submitted:\nSong: ${song}\nArtist: ${artist}`);
    event.target.reset();
    yesForm.classList.add('hidden');
});

document.getElementById('noNameForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const noName = event.target.noName.value;
    alert(`Thank you, ${noName}, for your response!`);
    event.target.reset();
    noForm.classList.add('hidden');
});
