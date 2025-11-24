const songs = [
    {
        title: "Ishq Samundar Kaante",
        file: "music/Ishq Samundar Kaante 128 Kbps.mp3",
        cover: "image/ishq samunder.jpg",
        category: "90s"
    },
    {
        title: "Mere Naina Sawan Bhadon",
        file: "music/Mere Naina Sawan Bhadon Male Mehbooba 128 Kbps.mp3",
        cover: "image/mere naina sawan bhadon.jpg",
        category: "romantic"
    },
    {
        title: "Pal Pal Dil Ke Paas",
        file: "music/Pal Pal Dil Ke Paas(KoshalWorld.Com).mp3",
        cover: "image/pal pal dil ke pass.jpg",
        category: "old"
    },
    {
        title: "Rab Na Kare Vaada Raha",
        file: "music/Rab Na Kare Vaada Raha... I Promise 128 Kbps.mp3",
        cover: "image/rab na kare vaada.jpg",
        category: "romantic"
    },
    {
        title: "Saanson Ko Zid",
        file: "music/Saanson Ko Zid 128 Kbps.mp3",
        cover: "image/saanso ki zid.jpg",
        category: "new"
    },
    // 80s Dasak Songs
     
     
    {
        title: "Tere Mere Beech Mein",
        file: "music/Tere Mere Beech Mein.mp3",
        cover: "image/tere mere beech me.jpg",
        category: "80s"
    },
    // 90s Dasak Songs
    {
        title: "Dil Hai Ki Manta Nahin",
        file: "music/Dil Hai Ki Manta Nahin.mp3",
        cover: "image/dil hai ki manta nahin.jpg",
        category: "90s"
    },
    {
        title: "Pehla Nasha",
        file: "music/Pehla Nasha.mp3",
        cover: "image/pahla nasha.jpg",
        category: "90s"
    },
    {
        title: "Tujhe Dekha To",
        file: "music/Tujhe Dekha To.mp3",
        cover: "image/Tujhe Dekha To.jpg",
        category: "90s"
    },
    // New Songs
    {
        title: "Kesariya",
        file: "music/kesariya.mp3",
        cover: "image/kesariya.jpg",
        category: "new"
    },
    {
        title: "Apna Bana Le",
        file: "music/Apna Bana Le.mp3",
        cover: "image/apna bana le.jpg",
        category: "new"
    },
    {
        title: "Raataan Lambiyan",
        file: "music/Raataan Lambiyan.mp3",
        cover: "image/Raataan Lambiyan.jpg",
        category: "new"
    },
    {
        title: "Mann Meri Jaan",
        file: "music/Mann Meri Jaan.mp3",
        cover: "image/Mann Meri Jaan.jpg",
        category: "new"
    },
    // Old Songs
    {
        title: "Lag Jaa Gale",
        file: "music/Lag Jaa Gale.mp3",
        cover: "image/Lag Jaa Gale se phir.jpg",
        category: "old"
    },
    {
        title: "Pyar Deewana Hota Hai",
        file: "music/Pyar Deewana Hota Hai.mp3",
        cover: "image/Pyar Deewana Hota Hai.jpg",
        category: "old"
    },
    {
        title: "Chura Liya Hai Tumne",
        file: "music/Chura Liya Hai Tumne.mp3",
        cover: "image/Chura Liya Hai Tumne.jpg",
        category: "old"
    },
    {
        title: "Kya Hua Tera Wada",
        file: "music/Kya Hua Tera Wada.mp3",
        cover: "image/Kya Hua Tera Wada.jpg",
        category: "old"
    },
    // Romantic Songs
    {
        title: "Tum Hi Ho",
        file: "music/Tum Hi Ho.mp3",
        cover: "image/tum hi ho2.jpg",
        category: "romantic"
    },
    {
        title: "Jeene Laga Hoon",
        file: "music/Jeene Laga Hoon.mp3",
        cover: "image/Jeene Laga Hoon.jpg",
        category: "romantic"
    },
    {
        title: "Tera Hone Laga Hoon",
        file: "music/Tera Hone Laga Hoon.mp3",
        cover: "image/Tera Hone Laga Hoon.jpg",
        category: "romantic"
    },
    {
        title: "Pani Da Rang",
        file: "music/Pani Da Rang.mp3",
        cover: "image/Pani Da Rang.jpg",
        category: "romantic"
    },
    {
        title: "Raabta",
        file: "music/Raabta.mp3",
        cover: "image/Raabta.jpg",
        category: "romantic"
    }
];

let index = 0;
let currentPlaylist = songs; // Current filtered playlist
let currentCategory = 'all';

const audio = document.getElementById("audio");
const title = document.getElementById("song-title");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

// Playlist dropdown elements
const playlistToggle = document.getElementById("playlist-toggle");
const playlistDropdown = document.getElementById("playlist-dropdown");
const dropdownItems = document.querySelectorAll(".dropdown-item");

// Format time in seconds to MM:SS format
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Update the time display
function updateTimeDisplay() {
    currentTimeEl.textContent = formatTime(audio.currentTime);
    if (audio.duration) {
        durationEl.textContent = formatTime(audio.duration);
    }
}

function loadSong(i) {
    if (currentPlaylist.length === 0) return;

    audio.src = currentPlaylist[i].file;
    title.textContent = currentPlaylist[i].title;
    cover.src = currentPlaylist[i].cover;

    // Reset time display when loading a new song
    currentTimeEl.textContent = '0:00';
    durationEl.textContent = '0:00';

    // When metadata is loaded, update the duration
    audio.onloadedmetadata = function () {
        durationEl.textContent = formatTime(audio.duration);
    };
}

// Filter songs by category
function filterSongsByCategory(category) {
    if (category === 'all') {
        currentPlaylist = songs;
    } else {
        currentPlaylist = songs.filter(song => song.category === category);
    }

    // Reset index and load first song of filtered playlist
    index = 0;
    if (currentPlaylist.length > 0) {
        loadSong(index);
    }

    // Update active category in dropdown
    dropdownItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.category === category) {
            item.classList.add('active');
        }
    });

    currentCategory = category;
}

// Function to play the next song
function playNextSong() {
    if (currentPlaylist.length === 0) return;
    index = (index + 1) % currentPlaylist.length;
    loadSong(index);
    audio.play();
    playBtn.textContent = "⏸️";
}

// Play the next song when the current one ends
audio.addEventListener('ended', playNextSong);

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
    if (currentPlaylist.length === 0) return;
    index = (index + 1) % currentPlaylist.length;
    loadSong(index);
    audio.play();
    playBtn.textContent = "⏸️";
};

prevBtn.onclick = () => {
    if (currentPlaylist.length === 0) return;
    index = (index - 1 + currentPlaylist.length) % currentPlaylist.length;
    loadSong(index);
    audio.play();
    playBtn.textContent = "⏸️";
};

audio.ontimeupdate = () => {
    if (audio.duration) {
        progress.value = (audio.currentTime / audio.duration) * 100;
        updateTimeDisplay();
    }
};

progress.oninput = () => {
    if (audio.duration) {
        audio.currentTime = (progress.value * audio.duration) / 100;
        updateTimeDisplay();
    }
};

// Social Media Links
const socialLinks = {
    website: 'https://your-website.com',
    linkedin: 'https://linkedin.com/in/your-profile',
    github: 'https://github.com/your-username',
    twitter: 'https://twitter.com/your-handle',
    instagram: 'https://instagram.com/your-username'
};

// Add click event listeners to social media icons
Object.keys(socialLinks).forEach(platform => {
    const element = document.getElementById(platform);
    if (element) {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(socialLinks[platform], '_blank');
        });
    }
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved user preference, if any, on load of the website
const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeButton(currentTheme);

// Toggle theme when button is clicked
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Set the new theme
    document.documentElement.setAttribute('data-theme', newTheme);

    // Save the theme preference
    localStorage.setItem('theme', newTheme);

    // Update the button icon
    updateThemeButton(newTheme);
});

// Function to update the theme toggle button icon
function updateThemeButton(theme) {
    if (theme === 'dark') {
        themeToggle.textContent = '☀️';
        themeToggle.setAttribute('title', 'Switch to Light Mode');
    } else {
        themeToggle.textContent = '🌙';
        themeToggle.setAttribute('title', 'Switch to Dark Mode');
    }
}

// Playlist Dropdown Functionality
playlistToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    playlistDropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!playlistDropdown.contains(e.target) && !playlistToggle.contains(e.target)) {
        playlistDropdown.classList.remove('show');
    }
});

// Handle category selection
dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        const category = item.dataset.category;
        filterSongsByCategory(category);
        playlistDropdown.classList.remove('show');

        // Show notification
        showCategoryNotification(category);
    });
});

// Show category change notification
function showCategoryNotification(category) {
    const categoryNames = {
        'all': 'All Songs',
        '80s': '80s Dasak',
        '90s': '90s Dasak',
        'new': 'New Songs',
        'old': 'Old Songs',
        'romantic': 'Romantic Songs'
    };

    // You can add a toast notification here if needed
    console.log(`Switched to: ${categoryNames[category]} (${currentPlaylist.length} songs)`);
}

// Initialize with all songs
filterSongsByCategory('all');
