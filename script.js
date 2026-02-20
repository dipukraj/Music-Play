const songs = [
    {
        title: "Humko Humise Chura Lo Mohabbatein",
        file: "music/Humko Humise Chura Lo Mohabbatein.mp3",
        cover: "image/Humko Humise Chura Lo Mohabbatein.jpg",
        category: "90s"
    },
    {
        title: "Diwana Hai Ye Man Chori Chori Chupke Chupke",
        file: "90S music/Diwana Hai Ye Man Chori Chori Chupke Chupke.mp3",
        cover: "90S image/Diwana Hai Ye Man Chori Chori Chupke Chupke.jpg",
        category: "90s"
    },
    {
        title: "Meri Tarah Tum Bhi Kabhi",
        file: "music/Meri Tarah Tum Bhi.mp3",
        cover: "image/Meri Tarah Tum Bhi.jpg",
        category: "90s"
    },
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
    {
        title: " Koi Jaye To Le Aaye",
        file: "80s music/koi jaye to le aye.mp3",
        cover: "80s image/koi jaye to le aye.jpg",
        category: "80s"
    },
    {
        title: "Kaun Disha Mein Leke Chala",
        file: "80s music/Kaun Disha Mein Leke Chala.mp3",
        cover: "80s image/Kaun Disha Mein Leke Chala.jpg",
        category: "80s"
    },
    {
        title: "Pritam Ka Kuch Dosh Nahi Hai",
        file: "80s music/Pritam Ka Kuch Dosh Nahi Hai.mp3",
        cover: "80s image/Pritam Ka Kuch Dosh Nahi Hai.jpg",
        category: "80s"
    },
    {
        title: "Tera Mera Pyar Amar",
        file: "80s music/Tera Mera Pyar Amar.mp3",
        cover: "80s image/Tera Mera Pyar Amar.jpg",
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
    {
        title: "Na Kajre Ki Dhar",
        file: "90s music/Na Kajre Ki Dhar.mp3",
        cover: "90s image/Na Kajre Ki Dhar.jpg",
        category: "90s"
    },
    {
        title: "Na Kajre Ki Dhar",
        file: "90s music/Na Kajre Ki Dhar.mp3",
        cover: "90s image/Na Kajre Ki Dhar.jpg",
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
    {
        title: "  Khuda Aur Mohabbat",
        file: "new music/Khuda Aur Mohabbat.mp3",
        cover: "new image/Khuda Aur Mohabbat.jpg",
        category: "new"
    },
    {
        title: "   Oonchi Oonchi Deewarein",
        file: "new music/Oonchi Oonchi Deewarein.mp3",
        cover: "new image/Oonchi Oonchi Deewarein.jpg",
        category: "new"
    },
    {
        title: " Tere Hawaale",
        file: "new music/Tere Hawaale.mp3",
        cover: "new image/Tere Hawaale.jpg",
        category: "new"
    },
    {
        title: "  Tera Chehra",
        file: "new music/Tera Chehra.mp3",
        cover: "new image/Tera Chehra.jpg",
        category: "new"
    },
    {
        title: "  Deewaniyat",
        file: "new music/DEEWANIYAT.mp3",
        cover: "new image/DEEWANIYAT.jpg",
        category: "new"
    },
    {
        title: " Chahun Main Ya Naa",
        file: "new music/Chahun Main Ya Naa.mp3",
        cover: "new image/Chahun Main Ya Naa.jpg",
        category: "new"
    },
    {
        title: " Saiyaara",
        file: "new music/Saiyaara.mp3",
        cover: "new image/Saiyaara.jpg",
        category: "new"
    },
    {
        title: " Aawaara Angaara",
        file: "new music/Aawaara Angaara.mp3",
        cover: "new image/Aawaara Angaara.jpg",
        category: "new"
    },
    {
        title: " Bol Kaffara Kya Hoga",
        file: "new music/Bol Kaffara Kya Hoga.mp3",
        cover: "new image/Bol Kaffara Kya Hoga.jpg",
        category: "new"
    },
    {
        title: " Deewani Mastani",
        file: "new music/Deewani Mastani.mp3",
        cover: "new image/Deewani Mastani.jpg",
        category: "new"
    },
    {
        title: "Aayi Nai",
        file: "new music/Aayi Nai.mp3",
        cover: "new image/Aayi Nai.jpg",
        category: "new"
    },
    {
        title: "Bijuria Sunny Sanskari Ki Tulsi Kumari",
        file: "new music/Bijuria Sunny Sanskari Ki Tulsi Kumari.mp3",
        cover: "new image/Bijuria Sunny Sanskari Ki Tulsi Kumari.jpg",
        category: "new"
    },
    {
        title: "Mare Mehboob",
        file: "new music/Mere Mehboob.mp3",
        cover: "new image/Mere Mehboob.jpg",
        category: "new"
    },
    {
        title: "Nasha",
        file: "new music/Nasha.mp3",
        cover: "new image/Nasha.jpg",
        category: "new"
    },
    {
        title: "Pardesiya Param Sundari",
        file: "new music/Pardesiya Param.mp3",
        cover: "new image/Pardesiya Param.jpg",
        category: "new"
    },
    {
        title: "Laal Pari",
        file: "new music/Laal Pari.mp3",
        cover: "new image/Laal Pari.jpg",
        category: "new"
    },
    {
        title: "Gehra Hua Dhurandhar",
        file: "new music/Gehra Hua Dhurandhar.mp3",
        cover: "new image/Gehra Hua Dhurandhar.jpg",
        category: "new"
    },
    {
        title: "Ishq Jalakar Dhurandhar",
        file: "new music/Ishq Jalakar Dhurandhar.mp3",
        cover: "new image/Ishq Jalakar Dhurandhar.jpg",
        category: "new"
    },
    {
        title: "Lutt Le Gaya Dhurandhar",
        file: "new music/Lutt Le Gaya Dhurandhar.mp3",
        cover: "new image/Lutt Le Gaya Dhurandhaar.jpg",
        category: "new"
    },
    {
        title: "Shararat Dhurandhar",
        file: "new music/Shararat dhurandhar.mp3",
        cover: "new image/Shararat dhurandhar.jpg",
        category: "new"
    },
    {
        title: "Dil Lauta Do Jubin Nautiyal",
        file: "new music/Dil Lauta Do Jubin Nautiyal.mp3",
        cover: "new image/Dil Lauta Do Jubin Nautiyal.jpg",
        category: "new"
    },
    {
        title: "Mera Hua Ek Deewane Ki Deewaniyat",
        file: "new music/Mera Hua Ek Deewane Ki Deewaniyat.mp3",
        cover: "new image/Mera Hua Ek Deewane Ki Deewaniyat.jpg",
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
    {
        title: "  Vaaste",
        file: "old music/Vaaste.mp3",
        cover: "old image/Vaaste.jpg",
        category: "old"
    },
    {
        title: " O Re Piya",
        file: "old music/O Re Piya.mp3",
        cover: "old image/O Re Piya.jpg",
        category: "old"
    },
    {
        title: " Maine Pyar Kar Liya",
        file: "old music/Maine Pyar Kar Liya.mp3",
        cover: "old image/Maine Pyar Kar Liya.webp",
        category: "old"
    },
    {
        title: "  Dil To Pagal Hai",
        file: "old music/Dil To Pagal Hai.mp3",
        cover: "old image/Dil To Pagal Hai.jpg",
        category: "old"
    },
    {
        title: " Ho Gaya Hai Tujhko To Pyar Sajna",
        file: "old music/Ho Gaya Hai Tujhko.mp3",
        cover: "old image/Ho Gaya Hai Tujhko.jpg",
        category: "old"
    },
    {
        title: " Qayamat Qayamat",
        file: "old music/Qayamat Qayamat.mp3",
        cover: "old image/Qayamat Qayamat.jpg",
        category: "old"
    },
    {
        title: "  Meri Jawani Kisko Milegi",
        file: "old music/Meri Jawani Kisko Milegi.mp3",
        cover: "old image/Meri Jawani Kisko Milegi.jpg",
        category: "old"
    },
    {
        title: " Teri Jawani Badi Mast Mast Hai",
        file: "old music/Teri jawani badi mast mast hai.mp3",
        cover: "old image/Teri jawani badi mast mast hai.jpg",
        category: "old"
    },
    {
        title: " Diwanon Se Poochho",
        file: "old music/Diwanon Se Poochho.mp3",
        cover: "old image/Diwanon Se Poochho.webp",
        category: "old"
    },
    {
        title: "Jab Hum Jawan Honge Betaab",
        file: "old music/Jab Hum Jawan Honge Betaab.mp3",
        cover: "old image/Jab Hum Jawan Honge Betaab.jpg",
        category: "old"
    },
    {
        title: "Likhe Jo Khat Tujhe",
        file: "old music/Likhe Jo Khat Tujhe.mp3",
        cover: "old image/Likhe Jo Khat Tujhe.jpg",
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
    {
        title: " Teri Meri Prem Kahani",
        file: "romantic music/Teri Meri Prem Kahani.mp3",
        cover: "romantic image/Teri Meri Prem Kahani.jpg",
        category: "romantic"
    },
    {
        title: "  Tere Bina",
        file: "romantic music/Tere Bina.mp3",
        cover: "romantic image/Tere Bina.jpg",
        category: "romantic"
    },
    {
        title: " Ram Chahe Leela Chahe Ram",
        file: "romantic music/Ram Chahe Leela.mp3",
        cover: "romantic image/Ram Chahe Leela.jpg",
        category: "romantic"
    },
    {
        title: " Pyar Dilon Ka Mela Hai",
        file: "romantic music/Pyar Dilon Ka Mela Hai.mp3",
        cover: "romantic image/Pyar Dilon Ka Mela Hai.jpg",
        category: "romantic"
    },
    {
        title: "Jug Jug Jeeve",
        file: "romantic music/Jug Jug Jeeve.mp3",
        cover: "romantic image/Jug Jug Jeeve.jpg",
        category: "romantic"
    },
    {
        title: " Mere Sapnon Ka Woh Raja",
        file: "romantic music/Mere Sapnon Ka Woh Raja.mp3",
        cover: "romantic image/Mere Sapnon Ka Woh Raja.jpg",
        category: "romantic"
    },
    {
        title: " Hum Tumko Nigahon Mein",
        file: "romantic music/Hum Tumko Nigahon Mein.mp3",
        cover: "romantic image/Hum Tumko Nigahon Mein.webp",
        category: "romantic"
    },
    {
        title: " Teri Chunnariya",
        file: "romantic music/Teri Chunnariya.mp3",
        cover: "romantic image/Teri Chunnariya.jpg",
        category: "romantic"
    },
    {
        title: "Hookah Bar Khiladi 786",
        file: "romantic music/Hookah Bar Khiladi 786.mp3",
        cover: "romantic image/Hookah Bar Khiladi 786.jpg",
        category: "romantic"
    },
    {
        title: " Saturday Saturday Humpty Sharma Ki Dulhania",
        file: "romantic music/Saturday Saturday Humpty Sharma Ki Dulhania.mp3",
        cover: "romantic image/Saturday Saturday Humpty Sharma Ki Dulhania.jpg",
        category: "romantic"
    },
    {
        title: "Tamma Tamma Again Badrinath Ki Dulhania",
        file: "romantic music/Tamma Tamma Again Badrinath Ki Dulhania.mp3",
        cover: "romantic image/Tamma Tamma Again Badrinath Ki Dulhania.jpg",
        category: "romantic"
    },
    {
        title: "Afghan Jalebi Ya Baba Phantom",
        file: "romantic music/Afghan Jalebi Ya Baba Phantom.mp3",
        cover: "romantic image/Afghan Jalebi Ya Baba Phantom.jpg",
        category: "romantic"
    },
    {
        title: " Bom Diggy Diggy Sonu Ke Titu Ki Sweety",
        file: "romantic music/Bom Diggy Diggy Sonu Ke Titu Ki Sweety.mp3",
        cover: "romantic image/Bom Diggy Diggy Sonu Ke Titu Ki Sweety.jpg",
        category: "romantic"
    },
    {
        title: " Dilbar Satyameva Jayate",
        file: "romantic music/Dilbar Satyameva Jayate.mp3",
        cover: "romantic image/Dilbar Satyameva Jayate.jpg",
        category: "romantic"
    },
    {
        title: " Gali Gali Mein Phirta Hai",
        file: "romantic music/Gali Gali.mp3",
        cover: "romantic image/Gali Gali.jpg",
        category: "romantic"
    },
    {
        title: " Cheez Badi Machine",
        file: "romantic music/Cheez Badi Machine.mp3",
        cover: "romantic image/Cheez Badi Machine.jpg",
        category: "romantic"
    },
    {
        title: " Radha Student Of The Year",
        file: "romantic music/Radha Student Of The Year.mp3",
        cover: "romantic image/Radha Student Of The Year.jpg",
        category: "romantic"
    },
    {
        title: "Mujhse Shaadi Karogi Dulhan Hum Le Jayenge",
        file: "romantic music/Mujhse Shaadi Karogi Dulhan Hum Le Jayenge.mp3",
        cover: "romantic image/Mujhse Shaadi Karogi Dulhan Hum Le Jayenge.jpg",
        category: "romantic"
    },
    {
        title: "Dulhan Hum Le Jayenge",
        file: "romantic music/Dulhan Hum Le Jayenge.mp3",
        cover: "romantic image/Dulhan Hum Le Jayenge.jpg",
        category: "romantic"
    },
    {
        title: "Ek Ladki Chahiye Khas Khas",
        file: "romantic music/Ek Ladki Chahiye Khas Khas.mp3",
        cover: "romantic image/Ek Ladki Chahiye Khas Khas.jpg",
        category: "romantic"
    },
    {
        title: "Har Dil Jo Pyar Karega",
        file: "romantic music/Har Dil Jo Pyar Karega.mp3",
        cover: "romantic image/Har Dil Jo Pyar Karega.jpg",
        category: "romantic"
    },
    {
        title: "Tumse Milke Dil Ka",
        file: "romantic music/Tumse Milke Dil Ka.mp3",
        cover: "romantic image/Tumse Milke Dil Ka.jpg",
        category: "romantic"
    },
    {
        title: "Odhani Odh Ke Nachu",
        file: "romantic music/Odhani Odh Ke Nachu.mp3",
        cover: "romantic image/Odhani Odh Ke Nachu.jpg",
        category: "romantic"
    },
    {
        title: "Sajan Tumse Pyar",
        file: "romantic music/Sajan Tumse Pyar.mp3",
        cover: "romantic image/Sajan Tumse Pyar.webp",
        category: "romantic"
    },
    {
        title: "Mujhse Mohabbat Ka Izhaar Karta",
        file: "romantic music/Mujhse Mohabbat Ka Izhaar Karta.mp3",
        cover: "romantic image/Mujhse Mohabbat Ka Izhaar Karta.jpg",
        category: "romantic"
    },
    {
        title: " Lal Dupatta",
        file: "romantic music/Lal Dupatta.mp3",
        cover: "romantic image/Lal Dupatta.jpg",
        category: "romantic"
    },
    {
        title: "Chhoti Chhoti Raatein",
        file: "romantic music/Chhoti Chhoti Raatein.mp3",
        cover: "romantic image/Chhoti Chhoti Raatein.jpg",
        category: "romantic"
    },
    {
        title: "Dil Na Diya",
        file: "romantic music/Dil Na Diya.mp3",
        cover: "romantic image/Dil Na Diya.jpg",
        category: "romantic"
    },
    {
        title: "Mera Man Kun Tum Chahe",
        file: "romantic music/Mera Man Kun Tum Chahe.mp3",
        cover: "romantic image/Mera Man Kun Tum Chahe.jpg",
        category: "romantic"
    },
    {
        title: "Main Yahaan Hoon",
        file: "romantic music/Main Yahaan Hoon.mp3",
        cover: "romantic image/Main Yahaan Hoon.jpg",
        category: "romantic"
    },
    {
        title: "Chunnari Chunnari",
        file: "romantic music/Chunnari Chunnari.mp3",
        cover: "romantic image/Chunnari Chunnari.jpg",
        category: "romantic"
    },
    {
        title: "Jaanam Samjha Karo",
        file: "romantic music/Jaanam Samjha Karo.mp3",
        cover: "romantic image/Jaanam Samjha Karo.jpg",
        category: "romantic"
    },
    {
        title: "Ladki Badi Anjani Hai",
        file: "romantic music/Ladki Badi Anjani Hai.mp3",
        cover: "romantic image/Ladki Badi Anjani Hai.jpg",
        category: "romantic"
    },
    {
        title: "Aye Meri Natkhati College Ki Ladkiyon",
        file: "romantic music/Aye Meri Natkhati College Ki Ladkiyon.mp3",
        cover: "romantic image/Aye Meri Natkhati College Ki Ladkiyon.jpg",
        category: "romantic"
    },
    {
        title: "Saat Samundar Paar Main Tere",
        file: "romantic music/Saat Samundar Paar Main Tere.mp3",
        cover: "romantic image/Saat Samundar Paar Main Tere.jpg",
        category: "romantic"
    },
    {
        title: "Mohabbat Dil Ka Sakoon Hai Aitbaar",
        file: "romantic music/Mohabbat Dil Ka Sakoon Hai Aitbaar.mp3",
        cover: "romantic image/Mohabbat Dil Ka Sakoon Hai Aitbaar.jpg",
        category: "romantic"
    },
    {
        title: "Daiya Daiya Daiya Re Dil Ka Rishta",
        file: "romantic music/Daiya Daiya Daiya Re Dil Ka Rishta.mp3",
        cover: "romantic image/Daiya Daiya Daiya Re Dil Ka Rishta.jpg",
        category: "romantic"
    },
    {
        title: "Mohabbat Ki Nahi Jati",
        file: "romantic music/Mohabbat Ki Nahi Jati.mp3",
        cover: "romantic image/Mohabbat Ki Nahi Jati.jpg",
        category: "romantic"
    },
    {
        title: "Tere Pyar Mein Main Marjawan",
        file: "romantic music/Tere Pyar Mein Main Marjawan.mp3",
        cover: "romantic image/Tere Pyar Mein Main Marjawan.jpg",
        category: "romantic"
    },
    {
        title: "Kaho Naa Pyar Hai",
        file: "romantic music/Kaho Naa Pyar Hai.mp3",
        cover: "romantic image/Kaho Naa Pyaar Hai.jpg",
        category: "romantic"
    },
    {
        title: "Aaj Unse Milne Hai Prem Ratan Dhan Payo",
        file: "romantic music/Aaj Unse Milna Hai Prem Ratan Dhan Payo.mp3",
        cover: "romantic image/Aaj Unse Milna Hai Prem Ratan Dhan Payo.jpg",
        category: "romantic"
    },
    {
        title: "Chand Chhupa Badal Mein Hum Dil De Chuke Sanam",
        file: "romantic music/Chand Chhupa Badal Mein Hum Dil De Chuke Sanam.mp3",
        cover: "romantic image/Chand Chhupa Badal Mein Hum Dil De Chuke Sanam.jpg",
        category: "romantic"
    },
    {
        title: "Gore Gore Mukhde Pe Kala Kala Chasma Suhaag",
        file: "romantic music/Gore Gore Mukhde Pe Kala Kala Chasma Suhaag.mp3",
        cover: "romantic image/Gore Gore Mukhde Pe Kala Kala Chasma Suhaag.jpg",
        category: "romantic"
    },
    {
        title: "Tinku Jiya Yamla Pagla Deewana",
        file: "romantic music/Tinku Jiya Yamla Pagla Deewana.mp3",
        cover: "romantic image/Tinku Jiya Yamla Pagla Deewana.jpg",
        category: "romantic"
    },
    {
        title: "Tinku Jiya Yamla Pagla Deewana",
        file: "romantic music/Tinku Jiya Yamla Pagla Deewana.mp3",
        cover: "romantic image/Tinku Jiya Yamla Pagla Deewana.jpg",
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
    {
        title: "  Yeh Jisma Hai Toh Kya",
        file: "sad music/Yeh Jism.mp3",
        cover: "sad image/Yeh Jism.jpg",
        category: "sad"
    },
    {
        title: "  Lo Maan Liya",
        file: "sad music/LO MAAN LIYA.mp3",
        cover: "sad image/LO MAAN LIYA.jpg",
        category: "sad"
    },
    {
        title: "  Baatein Ye Kabhi Na",
        file: "sad music/Baatein Ye Kabhi Na.mp3",
        cover: "sad image/Baatein Ye Kabhi Na.jpg",
        category: "sad"
    },
    {
        title: "  Tere Ishq Mein Pagal",
        file: "sad music/Tere Ishq Mein Pagal.mp3",
        cover: "sad image/Tere Ishq Mein Pagal.jpg",
        category: "sad"
    },
    {
        title: " Khali Dil Nahi Jaan Bhi",
        file: "sad music/Khali Dil Nahin Jaan Bhi.mp3",
        cover: "sad image/Khali Dil Nahi Jaan Bhi.jpg",
        category: "sad"
    },
    {
        title: " Bewajah",
        file: "sad music/Bewajah.mp3",
        cover: "sad image/Bewajah.jpg",
        category: "sad"
    },
    {
        title: " Humnava Mere",
        file: "sad music/Humnava Mere.mp3",
        cover: "sad image/Humnava Mere.jpg",
        category: "sad"
    },
    {
        title: " Humnava Mere",
        file: "sad music/Humnava Mere.mp3",
        cover: "sad image/Humnava Mere.jpg",
        category: "sad"
    },
    {
        title: "O Dil Tod Ke Hansti Ho Mera Bewafa Sanam",
        file: "sad music/O Dil Tod Ke Hansti Ho Mera Bewafa Sanam.mp3",
        cover: "sad image/O Dil Tod Ke Hansti Ho Mera Bewafa Sanam.jpg",
        category: "sad"
    },
    {
        title: "Tujhse Bichhad Kar Zinda Hain",
        file: "sad music/Tujhse Bichhad Kar Zinda Hain.mp3",
        cover: "sad image/Tujhse Bichhad Kar Zinda Hain.jpg",
        category: "sad"
    },
    {
        title: "Dil Phir Bhi Tumhe Dete Hain Kya Yaad Karoge",
        file: "sad music/Dil Phir Bhi Tumhe Dete Hain Kya Yaad Karoge.mp3",
        cover: "sad image/Dil Phir Bhi Tumhe Dete Hain Kya Yaad Karoge.jpg",
        category: "sad"
    },
    {
        title: "Barsaat Ke Mausam Mein Naajayaz",
        file: "sad music/Barsaat Ke Mausam Mein Naajayaz.mp3",
        cover: "sad image/Barsaat Ke Mausam Mein Naajayaz.jpg",
        category: "sad"
    },
    {
        title: "Teri Yaad yaad yaad Bewafaa",
        file: "sad music/Teri Yaad yaad yaad Bewafaa.mp3",
        cover: "sad image/Teri Yaad yaad yaad Bewafaa.jpg",
        category: "sad"
    },
    {
        title: "Chaaha Hai Tujhko Maan",
        file: "sad music/Chaaha Hai Tujhko Maan.mp3",
        cover: "sad image/Chaaha Hai Tujhko Maan.jpg",
        category: "sad"
    },
    {
        title: "Zindagi Ki Na Toote Ladi Kranti",
        file: "sad music/Zindagi Ki Na Toote Ladi Kranti.mp3",
        cover: "sad image/Zindagi Ki Na Toote Ladi Kranti.jpg",
        category: "sad"
    },
    {
        title: "Bhooli Bisri Ek Kahani Nagina",
        file: "sad music/Bhooli Bisri Ek Kahani Nagina.mp3",
        cover: "sad image/Bhooli Bisri Ek Kahani Nagina.jpg",
        category: "sad"
    },
    {
        title: "Hamari Adhuri Kahani",
        file: "sad music/Hamari Adhuri Kahani.mp3",
        cover: "sad image/Hamari Adhuri Kahani.webp",
        category: "sad"
    },
    {
        title: "Tu Befafa Hai Jo Main Jaan Jata Tujhse Bhi Dil Na Lagata",
        file: "sad music/Tu Bewafa Hai Jo Main Jaan Jata Tujhse Kabhi Bhi Dil Na Lagata.mp3",
        cover: "sad image/Tu Bewafa Hai Jo Main Jaan Jata Tujhse Kabhi Bhi Dil Na Lagata.jpg",
        category: "sad"
    },
    {
        title: "Mat Ro Mere Dil Aayee Milan Ki Raat",
        file: "sad music/Mat Ro Mere Dil Aayee Milan Ki Raat.mp3",
        cover: "sad image/Mat Ro Mere Dil Aayee Milan Ki Raat.jpg",
        category: "sad"
    },
    {
        title: "Kasam Se Kasam Se",
        file: "sad music/Kasam Se Kasam Se.mp3",
        cover: "sad image/Kasam Se Kasam Se.webp",
        category: "sad"
    },
    {
        title: "Kasam Se Kasam Se Aayee Milan Ki Raat",
        file: "sad music/Kasam Se Kasam Se Aayee Milan Ki Raat.mp3",
        cover: "sad image/Kasam Se Kasam Se Aayee Milan Ki Raat.jpg",
        category: "sad"
    },
    {
        title: "Tu Pyar Hai Kisi Aur Ka Dil Hai Ke Manta Nahin",
        file: "sad music/Tu Pyar Hai Kisi Aur Ka Dil Hai Ke Manta Nahin.mp3",
        cover: "sad image/Tu Pyar Hai Kisi Aur Ka Dil Hai Ke Manta Nahin.jpg",
        category: "sad"
    },
    {
        title: "Kyo Kisi Ko Tere",
        file: "sad music/Kyo Kisi Ko Tere Naam.mp3",
        cover: "sad image/Kyo Kisi Ko Tere Naam.jpg",
        category: "sad"
    },
    {
        title: "Tadap Tadap Ke",
        file: "sad music/Tadap Tadap Ke.mp3",
        cover: "sad image/Tadap Tadap Ke.jpg",
        category: "sad"
    },
    {
        title: "Aur Iss Dil Mein Kya Rakha Hai",
        file: "sad music/Aur Iss Dil Mein Kya Rakha Hai.mp3",
        cover: "sad image/Aur Iss Dil Mein Kya Rakha Hai.jpg",
        category: "sad"
    },
    {
        title: "Achchha Sila Diya Toone Mere Pyar Ka Bewafa Sanam",
        file: "sad music/Achchha Sila Diya Toone Mere Pyar Ka Bewafa Sanam.mp3",
        cover: "sad image/Achchha Sila Diya Toone Mere Pyar Ka Bewafa Sanam.jpg",
        category: "sad"
    },
    {
        title: "Pyar Jhutha Sahi Duniya Ko Dikhane Aaja",
        file: "sad music/Pyar Jhutha Sahi Duniya Ko Dikhane Aaja.mp3",
        cover: "sad image/Pyar Jhutha Sahi Duniya Ko Dikhane Aaja.jpg",
        category: "sad"
    },
    {
        title: "Dil Ki Jo Maanu To Jag Rooth Jaye",
        file: "sad music/Dil Ki Jo Maanu To Jag Rooth Jaye.mp3",
        cover: "sad image/Dil Ki Jo Maanu To Jag Rooth Jaye.jpg",
        category: "sad"
    },
    {
        title: "Har Kadam Par Koyi Katil Hai",
        file: "sad music/Har Kadam Par Koi Katil Hai.mp3",
        cover: "sad image/Har Kadam Par Koyi Katil Hai.jpg",
        category: "sad"
    },
    {
        title: "O Priya Priya Dil",
        file: "sad music/O Priya Priya Dil.mp3",
        cover: "sad image/O Priya Priya Dil.jpg",
        category: "sad"
    },
    {
        title: "Shishe Ki Umar Prem Pratigyaa",
        file: "sad music/Shishe Ki Umar Prem Pratigyaa.mp3",
        cover: "sad image/Shishe Ki Umar Prem Pratigyaa.jpg",
        category: "sad"
    },
    {
        title: "Zindagi Ki Talash Mein Saathi",
        file: "sad music/Zindagi Ki Talash Mein Saathi.mp3",
        cover: "sad image/Zindagi Ki Talash Mein Saathi.jpg",
        category: "sad"
    },
    {
        title: "Salame Ishq Meri Jaan Muqaddar Ka Sikandar",
        file: "sad music/Salame Ishq Meri Jaan Muqaddar Ka Sikandar.mp3",
        cover: "sad image/Salame Ishq Meri Jaan Muqaddar Ka Sikandar.jpg",
        category: "sad"
    },
    {
        title: "Mujhe Naulakha Manga De Re O Saiya Deewane",
        file: "sad music/Mujhe Naulakha Manga De Re O Saiya Deewane.mp3",
        cover: "sad image/Mujhe Naulakha Manga De Re O Saiya Deewane.jpg",
        category: "sad"
    },
    {
        title: "Ek Radha Ek Meera",
        file: "sad music/Ek Radha Ek Meera.mp3",
        cover: "sad image/Ek Radha Ek Meera.jpg",
        category: "sad"
    },
    {
        title: "To Chaloon Border",
        file: "sad music/To Chaloon Border.mp3",
        cover: "sad image/To Chaloon Border.jpg",
        category: "sad"
    },
    {
        title: "Der Na Ho Jaye Kahin Bikhre Moti",
        file: "sad music/Der Na Ho Jaye Kahin Bikhre Moti.mp3",
        cover: "sad image/Der Na Ho Jaye Kahin Bikhre Moti.jpg",
        category: "sad"
    },
    {
        title: "Nayak Nahi Khalnayak Hoon Main",
        file: "sad music/Nayak Nahi Khalnayak Hoon Main.mp3",
        cover: "sad image/Nayak Nahi Khalnayak Hoon Main.jpg",
        category: "sad"
    },
    {
        title: "Shaam Hai Dhuaan Dhuaan",
        file: "sad music/Shaam Hai Dhuaan Dhuaan.mp3",
        cover: "sad image/Shaam Hai Dhuaan Dhuaan.jpg",
        category: "sad"
    },
    {
        title: "Tu Naa Jaa Mere Badshah",
        file: "sad music/Tu Naa Jaa Mere Badshah.mp3",
        cover: "sad image/Tu Naa Jaa Mere Badshah.webp",
        category: "sad"
    },
    {
        title: "Ramta Jogi Taal",
        file: "sad music/Ramta Jogi Taal.mp3",
        cover: "sad image/Ramta Jogi Taal.jpg",
        category: "sad"
    },
    {
        title: "Laga Laga Re",
        file: "sad music/Laga Laga Re.mp3",
        cover: "sad image/Laga Laga Re.jpg",
        category: "sad"
    },
    {
        title: "Chaahton Ki Duniya Mein Dekh Aisa Hota Hai Kya Yehi Pyaar Hai",
        file: "sad music/Chaahton Ki Duniya Mein Dekh Aisa Hota Hai Kya Yehi Pyaar Hai.mp3",
        cover: "sad image/Chaahton Ki Duniya Mein Dekh Aisa Hota Hai Kya Yehi Pyaar Hai.jpg",
        category: "sad"
    },
    {
        title: "Ishq Na Karna Ishq Na Karna",
        file: "sad music/Ishq Na Karna Ishq Na Karna.mp3",
        cover: "sad image/Ishq Na Karna Ishq Na Karna.jpg",
        category: "sad"
    },
    {
        title: "Yara O Yara Devi",
        file: "sad music/Yara O Yara.mp3",
        cover: "sad image/Yara O Yara.jpg",
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
    {
        title: "Apne Lover Ko Dhokha Do",
        file: "bhojpurimusic/Apne Lover Ko Dhokha Do.mp3",
        cover: "bhojpuriimage/Apne Labhar Ko Dhokha Do.jpg",
        category: "bhojpuri"
    },
    {
        title: "Heroine",
        file: "bhojpurimusic/Heroine.mp3",
        cover: "bhojpuriimage/Heroine.jpg",
        category: "bhojpuri"
    },
    {
        title: "Kamar Me Pareshani Ba",
        file: "bhojpurimusic/Kamar Me Pareshani Ba.mp3",
        cover: "bhojpuriimage/Kamar Me Pareshani Ba.jpg",
        category: "bhojpuri"
    },
    {
        title: "Kamariya Dole Dole",
        file: "bhojpurimusic/Kamariya Dole Dole.mp3",
        cover: "bhojpuriimage/Kamariya Dole Dole.webp",
        category: "bhojpuri"
    },
    {
        title: "Pagli Dekhave Agarbatti",
        file: "bhojpurimusic/Pagli Dekhave Agarbatti.mp3",
        cover: "bhojpuriimage/Pagli Dekhave Agarbatti.webp",
        category: "bhojpuri"
    },
    {
        title: "Piyar Farak Wali",
        file: "bhojpurimusic/Piyar Farak Wali.mp3",
        cover: "bhojpuriimage/Piyar Farak Wali.jpg",
        category: "bhojpuri"
    },
    {
        title: "Raate Diya Butake",
        file: "bhojpurimusic/Raate Diya Butake.mp3",
        cover: "bhojpuriimage/Rate Diya Butake.jpg",
        category: "bhojpuri"
    },
    {
        title: "Tut Jai Palang Raja Ji",
        file: "bhojpurimusic/Tut Jai Palang Raja Ji.mp3",
        cover: "bhojpuriimage/Tut Jai Palang Raja Ji.webp",
        category: "bhojpuri"
    },
    {
        title: "Kamar Kare Lach Lach",
        file: "bhojpurimusic/Kamar Kare Lach Lach Lach.mp3",
        cover: "bhojpuriimage/Kamar Kare Lach Lach.webp",
        category: "bhojpuri"
    },
    {
        title: "Rajaji Ke Dilwa",
        file: "bhojpurimusic/Raja Ji Ke Dilwa.mp3",
        cover: "bhojpuriimage/Rajaji Ke Dilwa.jpg",
        category: "bhojpuri"
    },
    {
        title: "Nach Re Patarki Nagin Jaisan",
        file: "bhojpurimusic/Naach Re Patarki.mp3",
        cover: "bhojpuriimage/Nach Re Patarki Nagin Jaisan.jpg",
        category: "bhojpuri"
    },
    {
        title: "Hari Hari Odhani",
        file: "bhojpurimusic/Hari Hari Odhani.mp3",
        cover: "bhojpuriimage/Hari Hari Odhani.jpg",
        category: "bhojpuri"
    },
    {
        title: "Chadhal Jawani Rasgulla",
        file: "bhojpurimusic/Chadhal Jawani Rasgulla.mp3",
        cover: "bhojpuriimage/Chadhal Jawani Rasgulla.jpg",
        category: "bhojpuri"
    },
    {
        title: "Nathuniya Pe Goli Maare",
        file: "bhojpurimusic/Nathuniya Pe Goli Maare.mp3",
        cover: "bhojpuriimage/Nathuniya Pe Goli Maare.jpg",
        category: "bhojpuri"
    },
    {
        title: "Bullet Pa Jija",
        file: "bhojpurimusic/Bullet Pa Jija.mp3",
        cover: "bhojpuriimage/Bullet Pa Jija.jpg",
        category: "bhojpuri"
    },
    {
        title: "Lal Ghaghra",
        file: "bhojpurimusic/Laal Ghaghra.mp3",
        cover: "bhojpuriimage/Lal Ghaghra.jpg",
        category: "bhojpuri"
    },
    {
        title: "Maaja Milela Na Pura",
        file: "bhojpurimusic/Maaja Milela Na Pura.mp3",
        cover: "bhojpuriimage/Maaja Milela Na Pura.jpg",
        category: "bhojpuri"
    },
    {
        title: "Nimbu Kharbuja Bhail",
        file: "bhojpurimusic/Nimbu Kharbuja Bhail.mp3",
        cover: "bhojpuriimage/Nimbu Kharbuja Bhail.jpg",
        category: "bhojpuri"
    },
    {
        title: "Sent Gamkauwa",
        file: "bhojpurimusic/Sent Gamkauwa.mp3",
        cover: "bhojpuriimage/Sent Gamkauwa.webp",
        category: "bhojpuri"
    },
    {
        title: "Sorry Sorry",
        file: "bhojpurimusic/Sorry Sorry.mp3",
        cover: "bhojpuriimage/Sorry Sorry.jpg",
        category: "bhojpuri"
    },
    {
        title: "Nathuniya",
        file: "bhojpurimusic/Nathuniya.mp3",
        cover: "bhojpuriimage/Nathuniya.jpg",
        category: "bhojpuri"
    },
    {
        title: "Sadiya",
        file: "bhojpurimusic/Sadiya.mp3",
        cover: "bhojpuriimage/Sadiya.jpg",
        category: "bhojpuri"
    },
    {
        title: "Laundiya London Se Layenge",
        file: "bhojpurimusic/Laundiya London Se Layenge.mp3",
        cover: "bhojpuriimage/Laundiya London Se Layenge.jpg",
        category: "bhojpuri"
    },
    {
        title: "Bam Lagatara",
        file: "bhojpurimusic/Bam Lagatara.mp3",
        cover: "bhojpuriimage/Bam Lagatara.jpg",
        category: "bhojpuri"
    },
    {
        title: "Kamariya Gole Gole Dole",
        file: "bhojpurimusic/Kamariya Gole Gole Dole.mp3",
        cover: "bhojpuriimage/Kamariya Gole Gole Dole.jpg",
        category: "bhojpuri"
    },
    {
        title: "Chapra Ke Boss",
        file: "bhojpurimusic/Chapra Ke Boss.mp3",
        cover: "bhojpuriimage/Chapra Ke Boss.webp",
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
        title: "Aigiri Nandini",
        file: "bhakti music/Aigiri Nandini.mp3",
        cover: "bhakti image/Aigiri Nandini.webp",
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
const songList = document.getElementById("song-list");
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

function loadSong(i, autoPlay = false) {
    if (currentPlaylist.length === 0) return;

    // Smooth fade-out before switching
    cover.style.opacity = '0';
    title.style.opacity = '0';

    setTimeout(() => {
        audio.src = currentPlaylist[i].file;
        title.textContent = currentPlaylist[i].title;

        // Fade in when cover image loads (cached images bhi sahi chalenge)
        cover.onload = function () {
            cover.style.opacity = '1';
        };
        cover.src = currentPlaylist[i].cover;
        if (cover.complete) cover.style.opacity = '1';
        title.style.opacity = '1';

        // Reset time display when loading a new song
        currentTimeEl.textContent = '0:00';
        durationEl.textContent = '0:00';

        // Update song counter
        updateSongCounter();

        // When metadata is loaded, update the duration
        audio.onloadedmetadata = function () {
            durationEl.textContent = formatTime(audio.duration);
        };

        // Auto play after song loads (for mobile compatibility)
        if (autoPlay) {
            // Remove any previous handlers
            audio.oncanplay = null;
            audio.onloadeddata = null;
            audio.oncanplaythrough = null;
            
            // Try multiple events for better mobile compatibility
            const tryPlay = () => {
                if (audio.readyState >= 2) { // HAVE_CURRENT_DATA or higher
                    const playPromise = audio.play();
                    if (playPromise !== undefined) {
                        playPromise
                            .then(() => {
                                // Successfully started playing
                                playBtn.textContent = "⏸️";
                            })
                            .catch(error => {
                                // Auto-play was prevented (mobile restriction)
                                // This is okay - user can manually play
                                console.log('Auto-play prevented (mobile):', error);
                            });
                    }
                }
            };

            // Try when enough data is loaded
            audio.oncanplay = tryPlay;
            audio.onloadeddata = tryPlay;
            audio.oncanplaythrough = tryPlay;
            
            // Also try after delays as fallback (for slow connections)
            setTimeout(tryPlay, 100);
            setTimeout(tryPlay, 300);
            setTimeout(tryPlay, 500);
        }
    }, 100);
}

// Update song counter display
function updateSongCounter() {
    // Update hidden playlist counter
    const songCountEl = document.getElementById('song-count');
    if (songCountEl && currentPlaylist.length > 0) {
        songCountEl.textContent = `(${index + 1}/${currentPlaylist.length})`;
    }
    
    // Update visible counter in now-playing section
    const songCounter = document.getElementById('song-counter');
    if (songCounter && currentPlaylist.length > 0) {
        songCounter.textContent = `${index + 1} / ${currentPlaylist.length}`;
    } else if (songCounter) {
        songCounter.textContent = `0 / 0`;
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
    renderPlaylist();
}

// Playlist ko UI mein dikhane ke liye
function renderPlaylist() {
    if (!songList) return;
    songList.innerHTML = '';
    currentPlaylist.forEach((song, i) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        if (i === index) {
            li.classList.add('active');
        }
        li.addEventListener('click', () => {
            index = i;
            loadSong(index, true); // auto play when clicked
            playBtn.textContent = '⏸️';
            document.querySelectorAll('#song-list li').forEach(item => item.classList.remove('active'));
            li.classList.add('active');
            updateSongCardStates();
        });
        songList.appendChild(li);
    });
    updateSongCounter();
}

// Function to play the next song
function playNextSong() {
    if (currentPlaylist.length === 0) return;
    index = (index + 1) % currentPlaylist.length;
    loadSong(index, true); // true = auto play after load
    playBtn.textContent = "⏸️";
    // Update song card states
    updateSongCardStates();
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
    // Update song card states
    updateSongCardStates();
};

nextBtn.onclick = () => {
    if (currentPlaylist.length === 0) return;
    index = (index + 1) % currentPlaylist.length;
    loadSong(index, true); // true = auto play
    playBtn.textContent = "⏸️";
    // Update song card states
    updateSongCardStates();
};

prevBtn.onclick = () => {
    if (currentPlaylist.length === 0) return;
    index = (index - 1 + currentPlaylist.length) % currentPlaylist.length;
    loadSong(index, true); // true = auto play
    playBtn.textContent = "⏸️";
    // Update song card states
    updateSongCardStates();
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
    website: 'https://dipukraj.me',
    linkedin: 'https://www.linkedin.com/in/dipukraj',
    github: 'https://github.com/dipukraj',
    twitter: 'https://www.twitter.com/@DipuKRaj',
    instagram: 'https://www.instagram.com/r.p.dipu'
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
        
        // Show song grid instead of filtering
        showSongGrid(category);
        
        // Also update the current playlist for normal playback
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
        'krishna': 'Krishna Songs',
        'other': 'Other Songs'
    };

    // You can add a toast notification here if needed
    console.log(`Switched to: ${categoryNames[category]} (${currentPlaylist.length} songs)`);
}

// Song Grid Functionality
const songGridContainer = document.getElementById('song-grid-container');
const songGrid = document.getElementById('song-grid');
const gridTitle = document.getElementById('grid-title');
const closeGridBtn = document.getElementById('close-grid');

// Show song grid for category
function showSongGrid(category) {
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
        'krishna': 'Krishna Songs',
        'other': 'Other Songs'
    };

    // Filter songs for the selected category
    let filteredSongs;
    if (category === 'all') {
        filteredSongs = songs;
    } else {
        filteredSongs = songs.filter(song => song.category === category);
    }

    // Update grid title
    gridTitle.textContent = `${categoryNames[category]} (${filteredSongs.length} songs)`;

    // Clear existing grid
    songGrid.innerHTML = '';

    // Create song cards
    filteredSongs.forEach((song, songIndex) => {
        const card = document.createElement('div');
        card.className = 'song-card';
        if (audio.src.endsWith(song.file) && !audio.paused) {
            card.classList.add('playing');
        }

        card.innerHTML = `
            <div class="play-indicator">▶</div>
            <img src="${song.cover}" alt="${song.title}" class="song-card-cover" onerror="this.src='image/image cover.jpg'">
            <h4 class="song-card-title">${song.title}</h4>
        `;

        // Add click event to play song
        card.addEventListener('click', () => {
            // Find the index of this song in the current playlist
            const playlistIndex = currentPlaylist.findIndex(s => s.file === song.file);
            if (playlistIndex !== -1) {
                index = playlistIndex;
                loadSong(index, true); // auto play when clicked
                playBtn.textContent = "⏸️";

                // Update active states
                updateSongCardStates();
                updateSongListStates();
            }
        });

        songGrid.appendChild(card);
    });

    // Show the grid
    songGridContainer.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Update song card active states
function updateSongCardStates() {
    const cards = document.querySelectorAll('.song-card');
    cards.forEach(card => {
        card.classList.remove('playing', 'active');
        const cardCover = card.querySelector('.song-card-cover');
        if (cardCover && audio.src.endsWith(cardCover.src.split('/').pop()) && !audio.paused) {
            card.classList.add('playing');
        }
    });
}

// Close song grid
function closeSongGrid() {
    songGridContainer.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
}

// Event listeners for grid
closeGridBtn.addEventListener('click', closeSongGrid);

// Close grid when clicking outside (on the background)
songGridContainer.addEventListener('click', (e) => {
    if (e.target === songGridContainer) {
        closeSongGrid();
    }
});

// Close grid with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && songGridContainer.classList.contains('show')) {
        closeSongGrid();
    }
});

// Update song list states function
function updateSongListStates() {
    const songListItems = document.querySelectorAll('#song-list li');
    songListItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

// Add Punjabi songs to the 'other' category
songs.push(
    {
        title: " With You - AP Dhillon",
        file: "other music/With You.mp3",
        cover: "other image/With You.jpg",
        category: "other"
    },
    {
        title: " Arash Feat - Helena",
        file: "other music/Arash feat.mp3",
        cover: "other image/Arash feat.jpg",
        category: "other"
    },
    {
        title: " Dharia Sugar",
        file: "other music/Dharia Sugar.mp3",
        cover: "other image/Dharia Sugar.jpg",
        category: "other"
    },
    {
        title: " Don Omar - Danza Kuduro",
        file: "other music/Don Omar.mp3",
        cover: "other image/Don Omar.webp",
        category: "other"
    },
    {
        title: " Ellie Goulding - Love Me Like You Do",
        file: "other music/Ellie Goulding.mp3",
        cover: "other image/Ellie Goulding.jpg",
        category: "other"
    },
    {
        title: " Jenifer Lopez - On The Floor",
        file: "other music/Jenifer Lopez Feat.mp3",
        cover: "other image/Jenifer Lopez Feat.jpg",
        category: "other"
    },
    {
        title: " Serhat Durmus Hislerim - Rain Over Me",
        file: "other music/Serhat Durmus Hislerim.mp3",
        cover: "other image/Serhat Durmus Hislerim.jpg",
        category: "other"
    },
    {
        title: " Panido Barsa De",
        file: "other music/Panido Barsa De.mp3",
        cover: "other image/Panido Barsa De.webp",
        category: "other"
    },
    {
        title: " Laung Laachi",
        file: "other music/Laung Laachi.mp3",
        cover: "other image/Laung Laachi.webp",
        category: "other"
    }
);

// Initialize with all songs
filterSongsByCategory('all');

// Search functionality
const searchInput = document.getElementById('search-input');

// Function to filter songs based on search input
function filterSongsBySearch(query) {
    if (!query.trim()) {
        // If search is empty, show all songs in current category
        filterSongsByCategory(currentCategory);
        renderPlaylist();
        return;
    }
    
    const searchTerm = query.toLowerCase().trim();
    const searchTerms = searchTerm.split(/\s+/).filter(t => t.length > 0);
    
    const filteredSongs = songs.filter(song => {
        const title = song.title.toLowerCase();
        // Koi bhi word match ho to song aa jaye (OR logic) - 2,4 word ya partial bhi chalega
        return searchTerms.some(term => title.includes(term));
    });
    
    // Update the current playlist with search results
    currentPlaylist = filteredSongs;
    
    // If no songs match the search, show a message
    if (filteredSongs.length === 0) {
        songList.innerHTML = '<li class="no-results">No songs found. Try a different search term.</li>';
        updateSongCounter();
        return;
    }
    
    // Update the song list
    songList.innerHTML = '';
    filteredSongs.forEach((song, i) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        if (i === index && audio.src.endsWith(song.file)) {
            li.classList.add('active');
        }
        li.addEventListener('click', () => {
            index = i;
            loadSong(index, true); // auto play when clicked
            playBtn.textContent = '⏸️';
            document.querySelectorAll('#song-list li').forEach(item => item.classList.remove('active'));
            li.classList.add('active');
        });
        songList.appendChild(li);
    });
    
    updateSongCounter();
}

// Add event listener for search input
searchInput.addEventListener('input', (e) => {
    filterSongsBySearch(e.target.value);
});

// Add event listener for Enter key to play the first search result
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && currentPlaylist.length > 0) {
        index = 0;
        loadSong(index, true); // auto play when Enter pressed
        playBtn.textContent = '⏸️';
        // Update active state in the list
        document.querySelectorAll('#song-list li').forEach((item, i) => {
            if (i === 0) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
});
