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
    {
        title: "Abhi Aaya Nahi Hai Jo",
        file: "90s music/Abhi Aaya Nahi Hai Jo.mp3",
        cover: "90s image/Abhi Aaya Nahi Hai Jo.jpg",
        category: "90s"
    },
    {
        title: " Dil Deewane Ka Dola Dildar Ke Liye",
        file: "90s music/Dil Deewane Ka Dola Dildar Ke Liye.mp3",
        cover: "90s image/Dil Deewane Ka Dola Dildar Ke Liye.jpg",
        category: "90s"
    },
    {
        title: " Do Lafzo Mein",
        file: "90s music/Do Lafzo Mein.mp3",
        cover: "90s image/Do Lafzo Mein.jpg",
        category: "90s"
    },
    {
        title: " Ganga Jaisa Man Tera",
        file: "90s music/Ganga Jaisa Man Tera.mp3",
        cover: "90s image/Ganga Jaisa Man Tera.jpg",
        category: "90s"
    },
    {
        title: " Har Kisike Dil Mein Ek Ladki Ka Khayal Rehta Hai",
        file: "90s music/Har Kisike Dil Mein Ek Ladki Ka Khayal Rehta Hai Song.mp3",
        cover: "90s image/Har Kisike Dil Mein Ek Ladki Ka Khayal Rehta Hai Song.jpg",
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
    {
        title: " Noor Hi Noor",
        file: "new music/Noor Hi Noor.mp3",
        cover: "new image/Noor Hi Noor.jpg",
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
    {
        title: " Hum Khush Hue",
        file: "old music/Hum Khush Hue.mp3",
        cover: "old image/Hum Khush Hue.jpg",
        category: "old"
    },
    {
        title: " Jis Din Teri Meri Baat Nahin Hoti",
        file: "old music/Jis Din Teri Meri Baat Nahin Hoti.mp3",
        cover: "old image/Jis Din Teri Meri Baat Nahin Hoti.jpg",
        category: "old"
    },
    {
        title: " Kab Ban Jayega Tere Kabil Mera Dil",
        file: "old music/Kab Ban Jayega Tere Kabil Mera Dil.mp3",
        cover: "old image/Kab Ban Jayega Tere Kabil Mera Dil.jpg",
        category: "old"
    },
    {
        title: "  Maheroo Maheroo",
        file: "old music/Maheroo Maheroo.mp3",
        cover: "old image/Maheroo Maheroo.jpg",
        category: "old"
    },
    {
        title: " Main Ishq Ushka",
        file: "old music/Main Ishq Uska.mp3",
        cover: "old image/Main Ishq Uska.jpg",
        category: "old"
    },
    {
        title: " Rab Na Kare Ke Ye Zindagi",
        file: "old music/Rab Na Kare Ke Ye Zindagi Kabhi Kisi Ko Daga De.mp3",
        cover: "old image/Rab Na Kare Ke Ye Zindagi Kabhi Kisi Ko Daga De.webp",
        category: "old"
    },
    {
        title: " Tera Chehra",
        file: "old music/Tera Chehra.mp3",
        cover: "old image/Tera Chehra.jpg",
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
    },
    {
        title: " Ek Toh Kum Zindagani",
        file: "romantic music/Ek Toh Kum Zindagani.mp3",
        cover: "romantic image/Ek Toh Kum Zindagani.jpg",
        category: "romantic"
    },
    {
        title: " Khuda  Bhi",
        file: "romantic music/Khuda Bhi.mp3",
        cover: "romantic image/Khuda Bhi.jpg",
        category: "romantic"
    },
    {
        title: " Raanjhan",
        file: "romantic music/Raanjhan.mp3",
        cover: "romantic image/Raanjhan.jpg",
        category: "romantic"
    },
    // Sad Songs
    {
        title: "Ae Dil Hai Mushkil",
        file: "music/Ae Dil Hai Mushkil.mp3",
        cover: "image/Ae Dil Hai Mushkil.jpg",
        category: "sad"
    },
    {
        title: "Channa Mereya",
        file: "music/Channa Mereya.mp3",
        cover: "image/Channa Mereya.jpg",
        category: "sad"
    },
    {
        title: "Tum Se Hi",
        file: "music/Tum Se Hi Jab.mp3",
        cover: "image/Tum Se Hi.jpg",
        category: "sad"
    },
    {
        title: "Kabira",
        file: "music/Kabira Yeh.mp3",
        cover: "image/Kabira.jpg",
        category: "sad"
    },
    {
        title: "Agar Tum Saath Ho",
        file: "music/Agar Tum Saath Ho.mp3",
        cover: "image/Agar Tum Saath Ho.jpg",
        category: "sad"
    },
    {
        title: " Zaroori Tha",
        file: "sad music/Zaroori tha.mp3",
        cover: "sad image/Zaroori tha.jpg",
        category: "sad"
    },

    // Bhojpuri Songs
    {
        title: "Lollipop Lagelu",
        file: "bhojpurimusic/Lallipop Lagelu.mp3",
        cover: "bhojpuriimage/Lollipop Lagelu.webp",
        category: "bhojpuri"
    },
    {
        title: "Aaho Raja",
        file: "bhojpurimusic/Aaho Raja.mp3",
        cover: "bhojpuriimage/Aaho Raja.jpg",
        category: "bhojpuri"
    },
    {
        title: "Anchre se Bandhal Dil Bandhale Rahe Da",
        file: "bhojpurimusic/Anchre se Bandhal Dil Bandhale Rahe Da.mp3",
        cover: "bhojpuriimage/Anchre Se Bandhal Dil Bandhale Rahe Da.JPG",
        category: "bhojpuri"
    },
    {
        title: "Baithal Rahi Kela Ke Tham Pe",
        file: "bhojpurimusic/Baithal Rahi Kera Ke Tham Pe.mp3",
        cover: "bhojpuriimage/kela Ke tham pe.jpg",
        category: "bhojpuri"
    },
    {
        title: "Balamuwa Ke Ballam",
        file: "bhojpurimusic/Balamuwa Ke Ballam.mp3",
        cover: "bhojpuriimage/Balamuwa Ke Ballam.jpg",
        category: "bhojpuri"
    },
    {
        title: "Chhalakata Hamro Jawaniya",
        file: "bhojpurimusic/Chhalakata Hamro Jawaniya.mp3",
        cover: "bhojpuriimage/Hamro Jawaniya.webp",
        category: "bhojpuri"
    },
    {
        title: "Dilwa Le Gaile Raja Bottle Me Bhar Ke",
        file: "bhojpurimusic/Dilwa Le Gaile Raja Bottle Me Bhar Ke.mp3",
        cover: "bhojpuriimage/Dilwa Le Gaile Raja.jpg",
        category: "bhojpuri"
    },
    {
        title: "Dilwa Le Ja Rumaal Me",
        file: "bhojpurimusic/Dilwa Le Ja Rumaal Me.mp3",
        cover: "bhojpuriimage/Dilwa Le Ja Rumaal Me.jpg",
        category: "bhojpuri"
    },
    {
        title: "Gulab Jaisan Khilal Badu",
        file: "bhojpurimusic/Gulab Jaisan Khilal Badu.mp3",
        cover: "bhojpuriimage/Gulab Jaisan Khilal Badu.webp",
        category: "bhojpuri"
    },
    {
        title: "Makaiya Me Raja Ji",
        file: "bhojpurimusic/Makaiya Me Raja Ji.mp3",
        cover: "bhojpuriimage/Makaiya Me Raja Ji.jpg",
        category: "bhojpuri"
    },
    {
        title: "Marad Ha Matha Ke Darad",
        file: "bhojpurimusic/Marad Ha Matha Ke Darad.mp3",
        cover: "bhojpuriimage/Marad Matha Ke Darad.jpg",
        category: "bhojpuri"
    },
    {
        title: "Maroon Color Sadiya",
        file: "bhojpurimusic/Maroon Color Sadiya.mp3",
        cover: "bhojpuriimage/Maroon Color Sadiya.jpg",
        category: "bhojpuri"
    },
    {
        title: "Milan Aasman Me",
        file: "bhojpurimusic/Milan Aasman Me.mp3",
        cover: "bhojpuriimage/Milan Aasman Me Hoi.jpg",
        category: "bhojpuri"
    },
    {
        title: "Milbau Chori Tohra Se Gori",
        file: "bhojpurimusic/Milbau Chori Tohra Se Gori.mp3",
        cover: "bhojpuriimage/Milbau Chori Tohra Se Gori.jpg",
        category: "bhojpuri"
    },
    {
        title: "Saiyan Seva Kare",
        file: "bhojpurimusic/Saiyan Seva Kare.mp3",
        cover: "bhojpuriimage/Saiyan Seva Kare.jpg",
        category: "bhojpuri"
    },
    {
        title: "Shila Hau Ka Chand",
        file: "bhojpurimusic/Shila Hau Ka Chand.mp3",
        cover: "bhojpuriimage/Shila Hau Ka.jpg",
        category: "bhojpuri"
    },
    {
        title: "Tharmamiter",
        file: "bhojpurimusic/Tharmamiter.mp3",
        cover: "bhojpuriimage/Tharmamiter.jpg",
        category: "bhojpuri"
    },
    // Bhakti Songs
    {
        title: "Hanuman Chalisa",
        file: "bhakti music/Hanuman Chalisa.mp3",
        cover: "bhakti image/Hanuman Chalisa.webp",
        category: "bhakti"
    },
    {
        title: "Jai Ganesh Deva",
        file: "bhakti music/Jai Ganesh Deva.mp3",
        cover: "bhakti image/Jai Ganesh Deva.jpg",
        category: "bhakti"
    },
    {
        title: "Om Jai Jagdish Hare",
        file: "bhakti music/Om Jai Jagdish Hare.mp3",
        cover: "bhakti image/Om Jai Jagdish Hare.jpg",
        category: "bhakti"
    },
    {
        title: "Shree Ram Chandra Kripalu",
        file: "bhakti music/Shree Ram Chandra Kripalu.mp3",
        cover: "bhakti image/Shree Ram Chandra Kripalu.jpg",
        category: "bhakti"
    },
    {
        title: "Jai Ambe Gauri",
        file: "bhakti music/Jai Ambe Gauri.mp3",
        cover: "bhakti image/Jai Ambe Gauri.jpg",
        category: "bhakti"
    },
    {
        title: "Achyutam Keshavam",
        file: "bhakti music/Achyutam Keshavam.mp3",
        cover: "bhakti image/Achyutam Keshavam.webp",
        category: "bhakti"
    },
    // Mahadev Songs
    {
        title: "Om Namah Shivaya",
        file: "mahadev music/Om Namah Shivaya.mp3",
        cover: "mahadev image/Om Namah Shivaya.webp",
        category: "mahadev"
    },
    {
        title: "Shiv Tandav Stotram",
        file: "mahadev music/Shiva Tandava Stotram.mp3",
        cover: "mahadev image/Shiv Tandav Stotram.jpg",
        category: "mahadev"
    },
    {
        title: "Bhole Baba",
        file: "mahadev music/Bhole Baba.mp3",
        cover: "mahadev image/Bhole Baba.jpg",
        category: "mahadev"
    },
    {
        title: "Mere Bhole Baba",
        file: "mahadev music/Mere Bhole Baba.mp3",
        cover: "mahadev image/Mere Bhole Baba.jpg",
        category: "mahadev"
    },
    {
        title: "Shiv Shambhu",
        file: "mahadev music/Shiv Shambhu.mp3",
        cover: "mahadev image/Shiv Shambhu.webp",
        category: "mahadev"
    },
    {
        title: " Har Har Shambhu",
        file: "mahadev music/Har Har Shambhu.mp3",
        cover: "mahadev image/Har Har Shambhu.webp",
        category: "mahadev"
    },
    {
        title: "Mahakal Mahadev",
        file: "mahadev music/Mahakaal Mahadev.mp3",
        cover: "mahadev image/Mahakal Mahadev.webp",
        category: "mahadev"
    },
     
    // Krishna Songs
    {
        title: "Radhe Radhe Barsane Wali Radhe",
        file: "krishna music/Radhe Radhe Barsane Wali Radhe.mp3",
        cover: "krishna image/Radhe Radhe Barsane Wali Radhe.webp",
        category: "krishna"
    },
    {
        title: "Om Namo Bhagavate Vasudevaya",
        file: "krishna music/Om Namo Bhagavate Vasudevaya.mp3",
        cover: "krishna image/Om Namo Bhagavate Vasudevaya.jpg",
        category: "krishna"
    },
    {
        title: "Adharam Madhuram",
        file: "krishna music/Adharam Madhuram.mp3",
        cover: "krishna image/Adharam Madhuram.webp",
        category: "krishna"
    },
    {
        title: "Jai Radha Madhav",
        file: "krishna music/Jai Radha Madhav.mp3",
        cover: "krishna image/Jai Radha Madhav.webp",
        category: "krishna"
    },
    {
        title: "Radha Gori Gori",
        file: "krishna music/Radha Gori Gori.mp3",
        cover: "krishna image/Radha Gori Gori.jpg",
        category: "krishna"
    },
    {
        title: "Krishnaya Vasudevaya",
        file: "krishna music/Krishnaya Vasudevaya.mp3",
        cover: "krishna image/Krishnaya Vasudevaya.webp",
        category: "krishna"
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

    // Update song counter
    updateSongCounter();

    // When metadata is loaded, update the duration
    audio.onloadedmetadata = function () {
        durationEl.textContent = formatTime(audio.duration);
    };
}

// Update song counter display
function updateSongCounter() {
    const songCountEl = document.getElementById('song-count');
    if (songCountEl && currentPlaylist.length > 0) {
        songCountEl.textContent = `(${index + 1}/${currentPlaylist.length})`;
    }
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
        'romantic': 'Romantic Songs',
        'sad': 'Sad Songs',
        'bhojpuri': 'Bhojpuri Songs',
        'bhakti': 'Bhakti Songs',
        'mahadev': 'Mahadev Songs',
        'krishna': 'Krishna Songs'
    };

    // You can add a toast notification here if needed
    console.log(`Switched to: ${categoryNames[category]} (${currentPlaylist.length} songs)`);
}

// Initialize with all songs
filterSongsByCategory('all');
