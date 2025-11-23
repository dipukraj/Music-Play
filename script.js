const songs = [
    {
        title: "Ishq Samundar Kaante",
        file: "music/Ishq Samundar Kaante 128 Kbps.mp3",
        cover: "image/ishq samunder.jpg"
    },
    {
        title: "Mere Naina Sawan Bhadon",
        file: "music/Mere Naina Sawan Bhadon Male Mehbooba 128 Kbps.mp3",
        cover: "image/mere naina sawan bhadon.jpg"
    },
    {
        title: "Pal Pal Dil Ke Paas",
        file: "music/Pal Pal Dil Ke Paas(KoshalWorld.Com).mp3",
        cover: "image/pal pal dil ke pass.jpg"
    },
    {
        title: "Rab Na Kare Vaada Raha",
        file: "music/Rab Na Kare Vaada Raha... I Promise 128 Kbps.mp3",
        cover: "image/rab na kare vaada.jpg"
    },
    {
        title: "Saanson Ko Zid",
        file: "music/Saanson Ko Zid 128 Kbps.mp3",
        cover: "image/saanso ki zid.jpg"
    }
];

let index = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("song-title");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");

function loadSong(i) {
    audio.src = songs[i].file;
    title.textContent = songs[i].title;
    cover.src = songs[i].cover;
}

loadSong(index);

playBtn.onclick = () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸️";
    } else {
        audio.pause();
        playBtn.textContent = "▶️";
    }
};

nextBtn.onclick = () => {
    index = (index + 1) % songs.length;
    loadSong(index);
    audio.play();
    playBtn.textContent = "⏸️";
};

prevBtn.onclick = () => {
    index = (index - 1 + songs.length) % songs.length;
    loadSong(index);
    audio.play();
    playBtn.textContent = "⏸️";
};

audio.ontimeupdate = () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
};

progress.oninput = () => {
    audio.currentTime = (progress.value * audio.duration) / 100;
};
