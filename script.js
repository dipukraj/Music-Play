const songs = [
    {
        title: "Chand Taron Main Nazar Aaye Chehra Tera",
        file: "music/Chand Taron Main Nazar Aaye.mp3",
        cover: "image/Chand Taron Main Nazar Aaye Chehra Tera.webp",
        category: "90s"
    },
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
    {
        title: "Apni To Jaise Taise",
        file: "80s music/Apni To Jaise Taise.mp3",
        cover: "80s image/Apni To Jaise Taise.jpg",
        category: "80s"
    },
    {
        title: "Bachna Ae Hasinon Lo Main Aa Gaya",
        file: "80s music/Bachna Ae Hasinon Lo Main Aa Gaya.mp3",
        cover: "80s image/Bachna Ae Hasinon Lo Main Aa Gaya.jpg",
        category: "80s"
    },
    {
        title: "Aanewala Pal Janewala Hai",
        file: "80s music/Aanewala Pal Janewala Hai.mp3",
        cover: "80s image/Aanewala Pal Janewala Hai.jpg",
        category: "80s"
    },
    {
        title: "Dream Girl",
        file: "80s music/Dream Girl.mp3",
        cover: "80s image/Dream Girl.jpg",
        category: "80s"
    },
    {
        title: "Haal Kya Hai Dilon Ka",
        file: "80s music/Haal Kya Hai Dilon Ka.mp3",
        cover: "80s image/Haal Kya Hai Dilon Ka.jpg",
        category: "80s"
    },
    {
        title: "Jab Haal E Dil Tumse Kahne Ko",
        file: "80s music/Jab Haal E Dil Tumse Kehne Ko.mp3",
        cover: "80s image/Jab Haal E Dil Tumse Kehne Ko.webp",
        category: "80s"
    },
    {
        title: "Khaike Paan Banaras Wala",
        file: "80s music/Khaike Paan Banaras Wala.mp3",
        cover: "80s image/Khaike Paan Banaras Wala1.webp",
        category: "80s"
    },
    {
        title: "Khaike Paan Banaras Wala2",
        file: "80s music/Khaike Paan Banaras Wala1.mp3",
        cover: "80s image/Khaike Paan Banaras Wala1.webp",
        category: "80s"
    },
    {
        title: "Kya Hua Tera Wada",
        file: "80s music/Kya Hua Tera Wada.mp3",
        cover: "80s image/Kya Hua Tera Wada.jpg",
        category: "80s"
    },
    {
        title: "Kya Khoob Lagti Ho",
        file: "80s music/Kya Khoob Lagti Ho.mp3",
        cover: "80s image/Kya Khoob Lagti Ho.jpg",
        category: "80s"
    },
    {
        title: "Mere Mehboob Quayamat Hogi",
        file: "80s music/Mere Mehboob Qayamat Hogi.mp3",
        cover: "80s image/Mere Mehboob Qayamat Hogi.webp",
        category: "80s"
    },
    {
        title: "Mere Samnewali Khidki Mein",
        file: "80s music/Mere Samnewali Khidki Mein.mp3",
        cover: "80s image/Mere Samnewali Khidki Mein.jpg",
        category: "80s"
    },
    {
        title: "Mere Sapne Ki Rani Kab Aayegi",
        file: "80s music/Mere Sapne Ki Rani Kab Aayegi.mp3",
        cover: "80s image/Mere Sapne Ki Rani Kab Aayegi.jpg",
        category: "80s"
    },
    {
        title: "Musafir Hoon Yaron",
        file: "80s music/Musafir Hoon Yaron.mp3",
        cover: "80s image/Musafir Hoon Yaron.jpg",
        category: "80s"
    },
    {
        title: "O Mere Dil Ke Chain",
        file: "80s music/O Mere Dil Ke Chain.mp3",
        cover: "80s image/O Mere Dil Ke Chain.jpg",
        category: "80s"
    },
    {
        title: "O Saathi Re",
        file: "80s music/O Saathi Re.mp3",
        cover: "80s image/O Saathi Re.jpg",
        category: "80s"
    },
    {
        title: "Roop Tera Mastana",
        file: "80s music/Roop Tera Mastana.mp3",
        cover: "80s image/Roop Tera Mastana.jpg",
        category: "80s"
    },
    {
        title: "Yeh Sham Mastani",
        file: "80s music/Yeh Sham Mastani.mp3",
        cover: "80s image/Yeh Sham Mastani.webp",
        category: "80s"
    },
    {
        title: "Aaj Phir Jeene Ki Tamanna Hai",
        file: "80s music/Aaj Phir Jeene Ki Tamanna Hai.mp3",
        cover: "80s image/Aaj Phir Jeene Ki Tamanna Hai.jpg",
        category: "80s"
    },
    {
        title: "Chhu Kar Mere Manko",
        file: "80s music/Chhu Kar Mere Manko.mp3",
        cover: "80s image/Chhu Kar Mere Manko.jpg",
        category: "80s"
    },
    {
        title: "Jab Hum Jawan Honge",
        file: "80s music/Jab Hum Jawan Honge.mp3",
        cover: "80s image/Jab Hum Jawan Honge.jpg",
        category: "80s"
    },
    {
        title: "Jane Woh Kaise Log The",
        file: "80s music/Jane Woh Kaise Log The.mp3",
        cover: "80s image/Jane Woh Kaise Log The.webp",
        category: "80s"
    },
    {
        title: "Likhe Jo Khat Tujhe",
        file: "80s music/Likhe Jo Khat Tujhe.mp3",
        cover: "80s image/Likhe Jo Khat Tujhe.jpg",
        category: "80s"
    },
    {
        title: "Mere Rang Mein Rangne Wali",
        file: "80s music/Mere Rang Mein Rangne Wali.mp3",
        cover: "80s image/Mere Rang Mein Rangne Wali.jpg",
        category: "80s"
    },
    {
        title: "Neele Neele Ambar Par",
        file: "80s music/Neele Neele Ambar Par.mp3",
        cover: "80s image/Neele Neele Ambar Par.jpg",
        category: "80s"
    },
    {
        title: "Tadpaoge Tadpa Lo",
        file: "80s music/Tadpaoge Tadpa Lo.mp3",
        cover: "80s image/Tadpaoge Tadpa Lo.webp",
        category: "80s"
    },
    {
        title: "Tu Meri Zindagi Hai",
        file: "80s music/Tu Meri Zindagi Hai.mp3",
        cover: "80s image/Tu Meri Zindagi Hai.jpg",
        category: "80s"
    },
    {
        title: "Yeh Parda Hata Do",
        file: "80s music/Yeh Parda Hata Do.mp3",
        cover: "80s image/Yeh Parda Hata Do.jpg",
        category: "80s"
    },
    {
        title: "Zindagi Pyar Ka Geet Hai",
        file: "80s music/Zindagi Pyar Ka Geet Hai.mp3",
        cover: "80s image/Zindagi Pyar Ka Geet Hai.jpg",
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
    {
        title: "Jab Se Dekha Tumko Yaara Tum Mere Ho",
        file: "90s music/Jab Se Dekha Tumko Yaara Tum Mere Ho.mp3",
        cover: "90s image/Jab Se Dekha Tumko Yaara Tum Mere Ho.jpg",
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
    {
        title: "Baatein Ye Kabhi Na",
        file: "new music/Baatein Ye Kabhi Na.mp3",
        cover: "new image/Baatein Ye Kabhi Na.jpg",
        category: "new"
    },
    {
        title: "Baaton Ko Teri",
        file: "new music/Baaton Ko Teri.mp3",
        cover: "new image/Baaton Ko Teri.jpg",
        category: "new"
    },
    {
        title: "Chal Tere Ishq Mein",
        file: "new music/Chal Tere Ishq Mein.mp3",
        cover: "new image/Chal Tere Ishq Mein.jpg",
        category: "new"
    },
    {
        title: "Jitni Dafa",
        file: "new music/Jitni Dafa.mp3",
        cover: "new image/Jitni Dafa.jpg",
        category: "new"
    },
    {
        title: "Khamoshiyan",
        file: "new music/Khamoshiyan.mp3",
        cover: "new image/Khamoshiyan.jpg",
        category: "new"
    },
    {
        title: "Ik Mulaqaat-Dream Girl",
        file: "new music/Ik Mulaqaat - Dream Girl.mp3",
        cover: "new image/Ik Mulaqaat - Dream Girl.jpg",
        category: "new"
    },
    {
        title: "Lut Gaye",
        file: "new music/Lut Gaye.mp3",
        cover: "new image/Lut Gaye.jpg",
        category: "new"
    },
    {
        title: "Pallo Latke",
        file: "new music/Pallo Latke.mp3",
        cover: "new image/Pallo Latke.jpg",
        category: "new"
    },
    {
        title: "Pardesiya Yeh Sach Hai Piya",
        file: "new music/Pardesiya Yeh Sach Hai Piya.mp3",
        cover: "new image/Pardesiya Yeh Sach Hai Piya.jpg",
        category: "new"
    },
    {
        title: "Samandar Main Kinara Tu",
        file: "new music/Samandar Main Kinara Tu.mp3",
        cover: "new image/Samandar Main Kinara Tu.jpg",
        category: "new"
    },
    {
        title: "Thoda Thoda Pyaar",
        file: "new music/Thoda Thoda Pyaar.mp3",
        cover: "new image/Thoda Thoda Pyaar.jpg",
        category: "new"
    },
    {
        title: "Tu Hi Hai",
        file: "new music/Tu Hi Hai.mp3",
        cover: "new image/Tu Hi Hai.jpg",
        category: "new"
    },
    {
        title: "Uska Hi Banana",
        file: "new music/Uska Hi Banana.mp3",
        cover: "new image/Uska Hi Banana.jpg",
        category: "new"
    },
    {
        title: "Zihaal e Miskin",
        file: "new music/Zihaal e Miskin.mp3",
        cover: "new image/Zihaal e Miskin.jpg",
        category: "new"
    },
    {
        title: "Jaiye Sajana Dhurandhar The Revenge",
        file: "new music/Jaiye Sajana Dhurandhar The Revenge.mp3",
        cover: "new image/Jaiye Sajana Dhurandhar The Revenge.jpg",
        category: "new"
    },
    {
        title: "Paas Aa Zara",
        file: "new music/Paas Aa Zara.mp3",
        cover: "new image/Paas Aa Zara.jpg",
        category: "new"
    },
    {
        title: "Sitaare Ikkis",
        file: "new music/Sitaare Ikkis.mp3",
        cover: "new image/Sitaare Ikkis.jpg",
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
    {
        title: "Choli Ke Peeche Kya Hai",
        file: "old music/Choli Ke Peeche Kya Hai.mp3",
        cover: "old image/Choli Ke Peeche Kya Hai.jpg",
        category: "old"
    },
    {
        title: "Wadiye Ishq Se Aaya Hai Mera Shahzada",
        file: "old music/Wadiye Ishq Se Aaya Hai Mera Shahzada.mp3",
        cover: "old image/Wadiye Ishq Se Aaya Hai Mera Shahzada.jpg",
        category: "old"
    },
    {
        title: "Janam Janam Jo Saath",
        file: "old music/Janam Janam Jo Saath.mp3",
        cover: "old image/Janam Janam Jo Saath.jpg",
        category: "old"
    },
    {
        title: "Dil Ka Kya Kare Saheb",
        file: "old music/Dil Ka Kya Kare Saheb.mp3",
        cover: "old image/Dil Ka Kya Kare Saheb.jpg",
        category: "old"
    },
    {
        title: "Kagaj Kalam Dawat La",
        file: "old music/Kagaj Kalam Dawat La.mp3",
        cover: "old image/Kagaj Kalam Dawat La.jpg",
        category: "old"
    },
    {
        title: "Yeh Dharti Chand Sitare",
        file: "old music/Yeh Dharti Chand Sitare.mp3",
        cover: "old image/Yeh Dharti Chand Sitare.jpg",
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
        title: "Sanam Re Sanam Re Arijit Singh",
        file: "romantic music/Sanam Re Arijit Singh.mp3",
        cover: "romantic image/Sanam Re Arijit Singh.jpg",
        category: "romantic"
    },
    {
        title: "Hua Hain Aaj Pehli Baar Sanam Re",
        file: "romantic music/Hua Hain Aaj Pehli Baar Sanam Re.mp3",
        cover: "romantic image/Hua Hain Aaj Pehli Baar Sanam Re.jpg",
        category: "romantic"
    },
    {
        title: "Abhi Toh Party Shuru Hui Hai",
        file: "romantic music/Abhi Toh Party Shuru Hui Hai.mp3",
        cover: "romantic image/Abhi Toh Party Shuru Hui Hai.jpg",
        category: "romantic"
    },
    {
        title: "Ambarsariya",
        file: "romantic music/Ambarsariya.mp3",
        cover: "romantic image/Ambarsariya.jpg",
        category: "romantic"
    },
    {
        title: "Balam Pichkari",
        file: "romantic music/Balam Pichkari.mp3",
        cover: "romantic image/Balam Pichkari.jpg",
        category: "romantic"
    },
    {
        title: "Chittiyaan Kalaiyaan",
        file: "romantic music/Chittiyaan Kalaiyaan.mp3",
        cover: "romantic image/Chittiyaan Kalaiyaan.jpg",
        category: "romantic"
    },
    {
        title: "Dupatta Tera Nau Rang Da",
        file: "romantic music/Dupatta Tera Nau Rang Da.mp3",
        cover: "romantic image/Dupatta Tera Nau Rang Da.jpg",
        category: "romantic"
    },
    {
        title: "Jab Tak",
        file: "romantic music/Jab Tak.mp3",
        cover: "romantic image/Jab Tak.jpg",
        category: "romantic"
    },
    {
        title: "Jeene Laga Hoon",
        file: "romantic music/Jeene Laga Hoon.mp3",
        cover: "romantic image/Jeene Laga Hoon.jpg",
        category: "romantic"
    },
    {
        title: "Lat Lag Gayee",
        file: "romantic music/Lat Lag Gayee.mp3",
        cover: "romantic image/Lat Lag Gayee.jpg",
        category: "romantic"
    },
    {
        title: "Ooh La La Song",
        file: "romantic music/Ooh La La Song.mp3",
        cover: "romantic image/Ooh La La Song.jpg",
        category: "romantic"
    },
    {
        title: "Raanjhanaa",
        file: "romantic music/Raanjhanaa.mp3",
        cover: "romantic image/Raanjhanaa.jpg",
        category: "romantic"
    },
    {
        title: "Aaj Ki Raat",
        file: "romantic music/Aaj Ki Raat.mp3",
        cover: "romantic image/Aaj Ki Raat.jpg",
        category: "romantic"
    },
    {
        title: "Badri Ki Dulhania",
        file: "romantic music/Badri Ki Dulhania.mp3",
        cover: "romantic image/Badri Ki Dulhania.webp",
        category: "romantic"
    },
    {
        title: "Balma Song",
        file: "romantic music/Balma Song.mp3",
        cover: "romantic image/Balma Song.jpg",
        category: "romantic"
    },
    {
        title: "Jalte Diye",
        file: "romantic music/Jalte Diye.mp3",
        cover: "romantic image/Jalte Diye.jpg",
        category: "romantic"
    },
    {
        title: "Kaun Tujhe",
        file: "romantic music/Kaun Tujhe.mp3",
        cover: "romantic image/Kaun Tujhe.jpg",
        category: "romantic"
    },
    {
        title: "Munni Badnaam Hui",
        file: "romantic music/Munni Badnaam Hui.mp3",
        cover: "romantic image/Munni Badnaam Hui.jpg",
        category: "romantic"
    },
    {
        title: "O Saki Saki",
        file: "romantic music/O Saki Saki.mp3",
        cover: "romantic image/O Saki Saki.jpg",
        category: "romantic"
    },
    {
        title: "Sheila Ki Jawani",
        file: "romantic music/Sheila Ki Jawani.mp3",
        cover: "romantic image/Sheila Ki Jawani.jpg",
        category: "romantic"
    },
    {
        title: "College Ki Ladkiyan",
        file: "romantic music/College Ki Ladkiyan.mp3",
        cover: "romantic image/College Ki Ladkiyan.jpg",
        category: "romantic"
    },
    {
        title: "Daiya Daiya Daiya Re",
        file: "romantic music/Daiya Daiya Daiya Re.mp3",
        cover: "romantic image/Daiya Daiya Daiya Re.jpg",
        category: "romantic"
    },
    {
        title: "Galat Baat Hai Main Tera Hero",
        file: "romantic music/Galat Baat Hai Main Tera Hero.mp3",
        cover: "romantic image/Main Tera Hero.jpg",
        category: "romantic"
    },
    {
        title: "Nachange Saari Raat",
        file: "romantic music/Nachange Saari Raat.mp3",
        cover: "romantic image/Nachange Saari Raat.jpg",
        category: "romantic"
    },
    {
        title: "Nashe Si Chadh Gayi",
        file: "romantic music/Nashe Si Chadh Gayi.mp3",
        cover: "romantic image/Nashe Si Chadh Gayi.jpg",
        category: "romantic"
    },
    {
        title: "Piya Ke Bazaar Mein",
        file: "romantic music/Piya Ke Bazaar Mein.mp3",
        cover: "romantic image/Piya Ke Bazaar Mein.jpg",
        category: "romantic"
    },
    {
        title: "Sunny Sunny Yaariyan",
        file: "romantic music/Sunny Sunny Yaariyan.mp3",
        cover: "romantic image/Sunny Sunny Yaariyan.jpg",
        category: "romantic"
    },
    {
        title: "Tere Liye",
        file: "romantic music/Tere Liye.mp3",
        cover: "romantic image/Tere Liye.webp",
        category: "romantic"
    },
    {
        title: "Besharmi Ki Height Main Tera Hero",
        file: "romantic music/Besharmi Ki Height Main Tera Hero.mp3",
        cover: "romantic image/Main Tera Hero.jpg",
        category: "romantic"
    },
    {
        title: "Chalao Na Naino Se",
        file: "romantic music/Chalao Na Naino Se.mp3",
        cover: "romantic image/Chalao Na Naino Se.jpg",
        category: "romantic"
    },
    {
        title: "Dilbar Dilbar",
        file: "romantic music/Dilbar Dilbar.mp3",
        cover: "romantic image/Dilbar Dilbar.jpg",
        category: "romantic"
    },
    {
        title: "Mausam Ne Mujhpe Aisa Jadu Kar Diya",
        file: "romantic music/Mausam Ne Mujhpe Aisa Jadu Kar Diya.mp3",
        cover: "romantic image/Mausam Ne Mujhpe Aisa Jadu Kar Diya.jpg",
        category: "romantic"
    },
    {
        title: "Hai Dil Dil Ka Rishta",
        file: "romantic music/Hai Dil Dil Ka Rishta.mp3",
        cover: "romantic image/Hai Dil Dil Ka Rishta.webp",
        category: "romantic"
    },
    {
        title: "Tumko Dekha To Kya Yeh Hogaya",
        file: "romantic music/Tumko Dekha To Kya Yeh Hogaya.mp3",
        cover: "romantic image/Tumko Dekha To Kya Yeh Hogaya.jpg",
        category: "romantic"
    },
    {
        title: "Aa Jaana Aa Jaana",
        file: "romantic music/Aa Jaana Aa Jaana.mp3",
        cover: "romantic image/Aa Jaana Aa Jaana.jpg",
        category: "romantic"
    },
    {
        title: "Aap Ke Aa Jane Se",
        file: "romantic music/Aap Ke Aa Jane Se.mp3",
        cover: "romantic image/Aap Ke Aa Jane Se.jpg",
        category: "romantic"
    },
    {
        title: "Ghoonghat Mein Chand Hoga",
        file: "romantic music/Ghoonghat Mein Chand Hoga.mp3",
        cover: "romantic image/Ghoonghat Mein Chand Hoga.jpg",
        category: "romantic"
    },
    {
        title: "Panchhi Bole",
        file: "romantic music/Panchhi Bole.mp3",
        cover: "romantic image/Panchhi Bole.jpg",
        category: "romantic"
    },
    {
        title: "Pyar Ke Kagaz Pe",
        file: "romantic music/Pyar Ke Kagaz Pe.mp3",
        cover: "romantic image/Pyar Ke Kagaz Pe.jpg",
        category: "romantic"
    },
    {
        title: "Saawan Ka Mahina Aaya Hai",
        file: "romantic music/Saawan Ka Mahina Aaya Hai.mp3",
        cover: "romantic image/Saawan Ka Mahina Aaya Hai.jpg",
        category: "romantic"
    },
    {
        title: "Tu Dharti Pe Chahe Jahan Bhi Rahegi",
        file: "romantic music/Tu Dharti Pe Chahe Jahan Bhi Rahegi.mp3",
        cover: "romantic image/Tu Dharti Pe Chahe Jahan Bhi Rahegi.jpg",
        category: "romantic"
    },
    {
        title: "Zindagi Main Tujhi Pe Lutaunga",
        file: "romantic music/Zindagi Main Tujhi Pe Lutaunga.mp3",
        cover: "romantic image/Zindagi Main Tujhi Pe Lutaunga.jpg",
        category: "romantic"
    },
    {
        title: "Ice Cream Khaungi",
        file: "romantic music/ice cream khaungi.mp3",
        cover: "romantic image/ice cream khaungi.jpg",
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
    {
        title: "Wo Ladki Bahut Yaad Aati Hai",
        file: "sad music/Wo Ladki Yaad Aati Hai.mp3",
        cover: "sad image/Wo Ladki Yaad Aati Hai.jpg",
        category: "sad"
    },
    {
        title: "Sheeshe Ka Tha Dil Mera",
        file: "sad music/Sheeshe Ka Tha Dil Mera.mp3",
        cover: "sad image/Sheeshe Ka Tha Dil Mera.jpg",
        category: "sad"
    },
    {
        title: "Mainu Ishq Da Lagya Rog",
        file: "sad music/Mainu Ishq Da Lagya Rog.mp3",
        cover: "sad image/Mainu Ishq Da Lagya Rog.jpg",
        category: "sad"
    },
    {
        title: "Asi Ishq Da Dard",
        file: "sad music/Asi Ishq Da Dard.mp3",
        cover: "sad image/Asi Ishq Da Dard.jpg",
        category: "sad"
    },
    {
        title: "Bahut Jatate Ho Chah Humse",
        file: "sad music/Bahut Jatate Ho Chah Humse.mp3",
        cover: "sad image/Bahut Jatate Ho Chah Humse.jpg",
        category: "sad"
    },
    {
        title: "Chhor Ke Mujhko Jana Tha To Yaad Bhi Apni Le Jate",
        file: "sad music/Chhor Ke Mujhko Jana Tha To Yaad Bhi Apni Le Jate.mp3",
        cover: "sad image/Chhor Ke Mujhko Jana Tha To Yaad Bhi Apni Le Jate.jpg",
        category: "sad"
    },
    {
        title: "Hamsafar Ke Liye",
        file: "sad music/Hamsafar Ke Liye.mp3",
        cover: "sad image/Hamsafar Ke Liye.jpg",
        category: "sad"
    },
    {
        title: "Hum Pyar Karne Wale",
        file: "sad music/Hum Pyar Karne Wale.mp3",
        cover: "sad image/Hum Pyar Karne Wale.jpg",
        category: "sad"
    },
    {
        title: "Pehli Nazar Mein",
        file: "sad music/Pehli Nazar Mein.mp3",
        cover: "sad image/Pehli Nazar Mein.jpg",
        category: "sad"
    },
    {
        title: "Saare Shikwe Gile Bhoola Ke",
        file: "sad music/Saare Shikwe Gile Bhoola Ke.mp3",
        cover: "sad image/Saare Shikwe Gile Bhoola Ke.jpg",
        category: "sad"
    },
    {
        title: "Tu Neendon Ki Rani",
        file: "sad music/Tu Neendon Ki Rani.mp3",
        cover: "sad image/Tu Neendon Ki Rani.jpg",
        category: "sad"
    },
    {
        title: "Beshak Tum Meri Mohabbat Ho",
        file: "sad music/Beshak Tum Meri Mohabbat Ho.mp3",
        cover: "sad image/Beshak Tum Meri Mohabbat Ho.jpg",
        category: "sad"
    },
    {
        title: "Wo Dil Bhi Kya Jo Manane se Mane",
        file: "sad music/Wo Dil bhi Kya Jo manane se mane.mp3",
        cover: "sad image/Wo Dil bhi Kya Jo manane se mane.jpg",
        category: "sad"
    },
    {
        title: "Chod Ke Na Jaa O Piya",
        file: "sad music/Chod Ke Na Jaa O Piya.mp3",
        cover: "sad image/Chod Ke Na Jaa O Piya.jpg",
        category: "sad"
    },
    {
        title: "Dil Ki Tanhai Ko",
        file: "sad music/Dil Ki Tanhai Ko.mp3",
        cover: "sad image/Dil Ki Tanhai Ko.jpg",
        category: "sad"
    },
    {
        title: "Dil Mein Hai Pyar Tera Hoton Pe Gitwa",
        file: "sad music/Dil Mein Hai Pyar Tera Hoton Pe Gitwa.mp3",
        cover: "sad image/Dil Mein Hai Pyar Tera Hoton Pe Gitwa.jpg",
        category: "sad"
    },
    {
        title: "Ek Muskurahat Muskan Nahi Hoti",
        file: "sad music/Ek Muskurahat Muskan Nahi Hoti.mp3",
        cover: "sad image/Ek Muskurahat Muskan Nahi Hoti.jpg",
        category: "sad"
    },
    {
        title: "Hum Apni Taraf Se Tumhe Chahte Hai",
        file: "sad music/Hum Apni Taraf Se Tumhe Chahte Hai.mp3",
        cover: "sad image/Hum Apni Taraf Se Tumhe Chahte Hai.jpg",
        category: "sad"
    },
    {
        title: "Hum Tumhe Itna Pyar Karenge",
        file: "sad music/Hum Tumhe Itna Pyar Karenge.mp3",
        cover: "sad image/Hum Tumhe Itna Pyar Karenge.jpg",
        category: "sad"
    },
    {
        title: "Kab Aayega Mere Banjare",
        file: "sad music/Kab Aayega Mere Banjare.mp3",
        cover: "sad image/Kab Aayega Mere Banjare.jpg",
        category: "sad"
    },
    {
        title: "Kya Karthe The Saajna",
        file: "sad music/Kya Karthe The Saajna.mp3",
        cover: "sad image/Kya Karthe The Saajna.jpg",
        category: "sad"
    },
    {
        title: "Main Kya Thi Kya Se Kya Ho Gayi",
        file: "sad music/Main Kya Thi Kya Se Kya Ho Gayi.mp3",
        cover: "sad image/Main Kya Thi Kya Se Kya Ho Gayi.jpg",
        category: "sad"
    },
    {
        title: "Mehandi Mehandi",
        file: "sad music/Mehandi Mehandi.mp3",
        cover: "sad image/Mehandi Mehandi.jpg",
        category: "sad"
    },
    {
        title: "Mere Pyar Ko Tum Bhula To Na doge",
        file: "sad music/Mere Pyar Ko Tum Bhula To Na doge.mp3",
        cover: "sad image/Mere Pyar Ko Tum Bhula To Na doge.jpg",
        category: "sad"
    },
    {
        title: "Mitwa Re O Mitwa",
        file: "sad music/Mitwa Re O Mitwa.mp3",
        cover: "sad image/Mitwa Re O Mitwa.jpg",
        category: "sad"
    },
    {
        title: "O Sanam O Sanam",
        file: "sad music/O Sanam O Sanam.mp3",
        cover: "sad image/O Sanam O Sanam.jpg",
        category: "sad"
    },
    {
        title: "Ram Jaane",
        file: "sad music/Ram Jaane.mp3",
        cover: "sad image/Ram Jaane.jpg",
        category: "sad"
    },
    {
        title: "Tune Pyar Ki Been Bajai",
        file: "sad music/Tune Pyar Ki Been Bajai.mp3",
        cover: "sad image/Tune Pyar Ki Been Bajai.jpg",
        category: "sad"
    },
    {
        title: "Yeh Galiyan Yeh Chaubara",
        file: "sad music/Yeh Galiyan Yeh Chaubara.mp3",
        cover: "sad image/Yeh Galiyan Yeh Chaubara.jpg",
        category: "sad"
    },
    {
        title: "Yeh Mehndi Ke Boote",
        file: "sad music/Yeh Mehndi Ke Boote.mp3",
        cover: "sad image/Yeh Mehndi Ke Boote.jpg",
        category: "sad"
    },
    {
        title: "Aaj Pahli Baar Dil Ki Baat Ki Hai",
        file: "sad music/Aaj Pahli Baar Dil Ki Baat Ki Hai.mp3",
        cover: "sad image/Aaj Pahli Baar Dil Ki Baat Ki Hai.jpg",
        category: "sad"
    },
    {
        title: "Thahre Huye Paani Mein",
        file: "sad music/Thahre Huye Paani Mein.mp3",
        cover: "sad image/Thahre Huye Paani Mein.jpg",
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
    {
        title: "Awa Khele Rangwa Abir",
        file: "bhojpurimusic/Lahe Lahe Rangab Salwarwa.mp3",
        cover: "bhojpuriimage/Awa Khele Rangwa Abir.jpg",
        category: "bhojpuri"
    },
    {
        title: "Raja ji Ke Tural",
        file: "bhojpurimusic/Raja ji Ke Tural.mp3",
        cover: "bhojpuriimage/Raja ji Ke Tural.jpg",
        category: "bhojpuri"
    },
    {
        title: "Rangdar Se Sikh Rangdari",
        file: "bhojpurimusic/Rangdar Se Sikh Rangdari.mp3",
        cover: "bhojpuriimage/Rangdar Se Sikh Rangdari.jpg",
        category: "bhojpuri"
    },
    {
        title: "system se mouse pe click kariye raja ji",
        file: "bhojpurimusic/system se mouse pe click kariye raja ji.mp3",
        cover: "bhojpuriimage/system se mouse pe click kariye raja ji.jpg",
        category: "bhojpuri"
    },
    {
        title: "Barbadi Hoi - Shilpi Raj",
        file: "bhojpurimusic/Barbadi Hoi Shilpi Raj.mp3",
        cover: "bhojpuriimage/Barbadi Hoi Shilpi Raj.jpg",
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
    {
        title: "Aigiri Nandini2",
        file: "bhakti music/Aigiri Nandini2.mp3",
        cover: "bhakti image/Aigiri Nandini2.jpg",
        category: "bhakti"
    },
    {
        title: "Barisho Ki Chham Chham Me",
        file: "bhakti music/Barisho Ki Chham Chham Me.mp3",
        cover: "bhakti image/Barisho Ki Chham Chham Me.jpg",
        category: "bhakti"
    },
    {
        title: "LeKe Pooja Ki Thali",
        file: "bhakti music/LeKe Pooja Ki Thali.mp3",
        cover: "bhakti image/LeKe Pooja Ki Thali.jpg",
        category: "bhakti"
    },
    {
        title: "MAIYA TERI JAI JAIKAAR",
        file: "bhakti music/MAIYA TERI JAI JAIKAAR.mp3",
        cover: "bhakti image/MAIYA TERI JAI JAIKAAR.jpg",
        category: "bhakti"
    },
    {
        title: "Mere Ghar Ram Aaye Hain",
        file: "bhakti music/Mere Ghar Ram Aaye Hain.mp3",
        cover: "bhakti image/Mere Ghar Ram Aaye Hain.jpg",
        category: "bhakti"
    },
    {
        title: "Meri Ankhiyon Ke Samne Hi Rehna",
        file: "bhakti music/Meri Ankhiyon Ke Samne Hi Rehna.mp3",
        cover: "bhakti image/Meri Ankhiyon Ke Samne Hi Rehna.jpg",
        category: "bhakti"
    },
    {
        title: "Meri Maa Ke Barabar Koi Nahi",
        file: "bhakti music/Meri Maa Ke Barabar Koi Nahi.mp3",
        cover: "bhakti image/Meri Maa Ke Barabar Koi Nahi.jpg",
        category: "bhakti"
    },
    {
        title: "Meri Mai",
        file: "bhakti music/Meri Mai.mp3",
        cover: "bhakti image/Meri Mai.jpg",
        category: "bhakti"
    },
    {
        title: "My Pardeshi Hu Pahli Baar Aaya Hu",
        file: "bhakti music/My Pardeshi Hu Pahli Baar Aaya Hu.mp3",
        cover: "bhakti image/My Pardeshi Hu Pahli Baar Aaya Hu.jpg",
        category: "bhakti"
    },
    {
        title: "Narayan Mil Jayega",
        file: "bhakti music/Narayan Mil Jayega.mp3",
        cover: "bhakti image/Narayan Mil Jayega.jpg",
        category: "bhakti"
    },
    {
        title: "O Aaye Tere Bhawan",
        file: "bhakti music/O Aaye Tere Bhawan.mp3",
        cover: "bhakti image/O Aaye Tere Bhawan.jpg",
        category: "bhakti"
    },
    {
        title: "Ram Aayenge",
        file: "bhakti music/Ram Aayenge.mp3",
        cover: "bhakti image/Ram Aayenge.jpg",
        category: "bhakti"
    },
    {
        title: "Ram Siya Ram",
        file: "bhakti music/Ram Siya Ram.mp3",
        cover: "bhakti image/Ram Siya Ram.jpg",
        category: "bhakti"
    },
    {
        title: "Shaban Ki Rut Hai",
        file: "bhakti music/Shaban Ki Rut Hai.mp3",
        cover: "bhakti image/Shaban Ki Rut Hai.jpg",
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
    {
        title: "Aisi Subah Na Aaye",
        file: "mahadev music/Aisi Subah Na Aaye.mp3",
        cover: "mahadev image/Aisi Subah Na Aaye.jpg",
        category: "mahadev"
    },
    {
        title: "Ajab Hai Teri Maya",
        file: "mahadev music/Ajab Hai Teri Maya.mp3",
        cover: "mahadev image/Ajab Hai Teri Maya.jpg",
        category: "mahadev"
    },
    {
        title: "Ashutosh Shashank Shekha",
        file: "mahadev music/Ashutosh Shashank Shekha.mp3",
        cover: "mahadev image/Ashutosh Shashank Shekha.jpg",
        category: "mahadev"
    },
    {
        title: "Har Har Mahadev",
        file: "mahadev music/Har Har Mahadev.mp3",
        cover: "mahadev image/Har Har Mahadev.jpg",
        category: "mahadev"
    },
    {
        title: "Har Har Shambhu Shiv Mahadeva",
        file: "mahadev music/Har Har Shambhu Shiv Mahadeva.mp3",
        cover: "mahadev image/Har Har Shambhu Shiv Mahadeva.jpg",
        category: "mahadev"
    },
    {
        title: "Hey Shambhu Baba Mere Bhole Naath",
        file: "mahadev music/Hey Shambhu Baba Mere Bhole Naath.mp3",
        cover: "mahadev image/Hey Shambhu Baba Mere Bhole Naath.jpg",
        category: "mahadev"
    },
    {
        title: "Mahamrityunjay Mantra",
        file: "mahadev music/Mahamrityunjay Mantra.mp3",
        cover: "mahadev image/Mahamrityunjay Mantra.jpg",
        category: "mahadev"
    },
    {
        title: "Man Mera Mandir Shiv Meri Puja",
        file: "mahadev music/Man Mera Mandir Shiv Meri Puja.mp3",
        cover: "mahadev image/Man Mera Mandir Shiv Meri Puja.jpg",
        category: "mahadev"
    },
    {
        title: "Mere Baba",
        file: "mahadev music/Mere Baba Song.mp3",
        cover: "mahadev image/Mere Baba Song.jpg",
        category: "mahadev"
    },
    {
        title: "Om Namah Shiva",
        file: "mahadev music/Om Namah Shiva.mp3",
        cover: "mahadev image/Om Namah Shiva.jpg",
        category: "mahadev"
    },
    {
        title: "Sanso Ki Mala Pe Simru Shiv Ka Naam",
        file: "mahadev music/Sanso Ki Mala Pe Simru Shiv Ka Naam.mp3",
        cover: "mahadev image/Sanso Ki Mala Pe Simru Shiv Ka Naam.jpg",
        category: "mahadev"
    },
    {
        title: "Shiv Shankar Ko Jisne Pooja",
        file: "mahadev music/Shiv Shankar Ko Jisne Pooja.mp3",
        cover: "mahadev image/Shiv Shankar Ko Jisne Pooja.jpg",
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
    },
    {
        title: "Mira Ke Prabhu Giridhari",
        file: "krishna music/Mira Ke Prabhu.mp3",
        cover: "krishna image/Mira Ke Prabhu.jpg",
        category: "krishna"
    },
    {
        title: "Shri Krishna Govind Hare Murari",
        file: "krishna music/Shri Krishna Govind Hare Murari.mp3",
        cover: "krishna image/Shri Krishna Govind Hare Murari.jpg",
        category: "krishna"
    },
    {
        title: "Chitra Vichitra Ji Maharaj",
        file: "krishna music/Chitra Vichitra Ji Maharaj.mp3",
        cover: "krishna image/Chitra Vichitra Ji Maharaj.jpg",
        category: "krishna"
    },
    {
        title: "Krish Theme",
        file: "krishna music/Krish Theme.mp3",
        cover: "krishna image/Krish Theme.jpg",
        category: "krishna"
    },
    {
        title: "Mere Shyam Aa Jata Mere Shamne",
        file: "krishna music/Mere Shyam Aa Jata Mere Shamne.mp3",
        cover: "krishna image/Mere Shyam Aa Jata Mere Shamne.jpg",
        category: "krishna"
    },
    {
        title: "MURLI KI DHUN",
        file: "krishna music/MURLI KI DHUN.mp3",
        cover: "krishna image/MURLI KI DHUN.jpg",
        category: "krishna"
    },
    {
        title: "O Kanha Ab To Murli Ki",
        file: "krishna music/O Kanha Ab To Murli Ki.mp3",
        cover: "krishna image/O Kanha Ab To Murli Ki.jpg",
        category: "krishna"
    },
    {
        title: "RADHA KRISHNA FLUTE",
        file: "krishna music/RADHA KRISHNA FLUTE.mp3",
        cover: "krishna image/RADHA KRISHNA FLUTE.jpg",
        category: "krishna"
    },
    {
        title: "Radhe Braj Jan Man Sukhkari",
        file: "krishna music/Radhe Braj Jan Man Sukhkari.mp3",
        cover: "krishna image/Radhe Braj Jan Man Sukhkari.jpg",
        category: "krishna"
    },
    {
        title: "Radhe Radhe Bol",
        file: "krishna music/Radhe Radhe Bol.mp3",
        cover: "krishna image/Radhe Radhe Bol.jpg",
        category: "krishna"
    },
    {
        title: "Soja Zara",
        file: "krishna music/Soja Zara.mp3",
        cover: "krishna image/Soja Zara.jpg",
        category: "krishna"
    },
    {
        title: "Tujhse Preet Lagi Hai Radhe",
        file: "krishna music/Tujhse Preet Lagi Hai Radhe.mp3",
        cover: "krishna image/Tujhse Preet Lagi Hai Radhe.jpg",
        category: "krishna"
    },
    {
        title: "Tum Prem Ho",
        file: "krishna music/Tum Prem Ho.mp3",
        cover: "krishna image/Tum Prem Ho.jpg",
        category: "krishna"
    },
    {
        title: "ye to bata do barsane wali ",
        file: "krishna music/ye to bata do barsane wali.mp3",
        cover: "krishna image/ye to bata do barsane wali.jpg",
        category: "krishna"
    },
];

let index = 0;
let currentPlaylist = songs; // Current filtered playlist
let currentCategory = 'all';
let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];

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

// Volume slider and Liked toggle elements
const volumeSlider = document.getElementById("volume");
const muteBtn = document.getElementById("mute-btn");
const likeToggleBtn = document.getElementById("like-toggle");
const visualizerEl = document.getElementById("visualizer");

// Navigation elements
const navHome = document.getElementById('nav-home');
const navSearch = document.getElementById('nav-search');
const navLiked = document.getElementById('nav-liked');
const searchInput = document.getElementById('search-input');

// Format time in seconds to MM:SS format
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Update time display and handle auto-play when song ends
function updateTimeDisplay() {
    currentTimeEl.textContent = formatDuration(audio.currentTime);
    if (audio.duration) {
        durationEl.textContent = formatDuration(audio.duration);
    }

    // Remove this check - causing multiple auto-plays
    // Auto-play should only happen via audio.onended event
}

function loadSong(i, autoPlay = false) {
    if (currentPlaylist.length === 0 || !currentPlaylist[i]) return;

    // Smooth fade-out before switching
    cover.style.opacity = '0';
    title.style.opacity = '0';

    setTimeout(() => {
        if (!currentPlaylist[i]) return;
        audio.src = currentPlaylist[i].file;
        title.textContent = currentPlaylist[i].title;

        // Fade in when cover image loads (cached images bhi sahi chalenge)
        cover.onload = function () {
            cover.style.opacity = '1';
        };
        cover.src = currentPlaylist[i].cover;
        if (cover.complete) cover.style.opacity = '1';
        title.style.opacity = '1';
        updateDynamicBackground(currentPlaylist[i].cover);
        if (typeof loadSongLyrics === 'function') {
            loadSongLyrics(currentPlaylist[i]);
        }
        if (typeof loadSongComments === 'function') {
            loadSongComments(currentPlaylist[i]);
        }

        // Reset time display when loading a new song
        currentTimeEl.textContent = '0:00';
        durationEl.textContent = '0:00';

        // Update song counter
        updateSongCounter();
        updateLikeButtonUI();

        // When metadata is loaded, update the duration
        audio.onloadedmetadata = function () {
            durationEl.textContent = formatDuration(audio.duration);
        };

        // Auto-play next song when song ends - FIXED
        audio.onended = function () {
            console.log('🎵 Song ended, playing next song...');

            // Prevent multiple calls
            if (this.isAutoPlaying) {
                console.log('🔄 Auto-play already in progress...');
                return;
            }

            this.isAutoPlaying = true;

            // Move to next song
            index = (index + 1) % currentPlaylist.length;

            // Load next song with auto-play
            loadSong(index, true);

            // Reset flag after delay
            setTimeout(() => {
                this.isAutoPlaying = false;
            }, 2000);
        };

        // Auto play after song loads (for mobile compatibility) - ENHANCED
        if (autoPlay) {
            console.log('🎵 Auto-playing song...');

            // Force play immediately after setting src
            setTimeout(() => {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            console.log('✅ Song started playing automatically');
                            playBtn.textContent = "⏸️";
                        })
                        .catch(error => {
                            console.log('❌ Auto-play failed:', error);
                            // Try alternative method
                            setTimeout(() => {
                                audio.play().then(() => {
                                    console.log('✅ Song started on retry');
                                    playBtn.textContent = "⏸️";
                                }).catch(e => console.log('❌ Retry failed:', e));
                            }, 1000);
                        });
                } else {
                    audio.play();
                    playBtn.textContent = "⏸️";
                }
            }, 300); // Small delay to ensure audio is loaded
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
    } else if (category === 'liked') {
        currentPlaylist = songs.filter(song => likedSongs.includes(song.file));
    } else {
        currentPlaylist = songs.filter(song => song.category === category);
    }

    // Update index to the currently loaded/playing song if it exists in the new playlist,
    // otherwise default to the first song (index 0).
    const currentSongFile = currentPlaylist.length > 0 && audio.src ? audio.src.split('/').pop() : null;
    let foundIndex = -1;
    if (currentSongFile) {
        foundIndex = currentPlaylist.findIndex(song => song.file.split('/').pop() === decodeURIComponent(currentSongFile));
    }

    if (foundIndex !== -1) {
        index = foundIndex;
    } else {
        index = 0;
    }

    // Only load the song if there is no music currently loaded or playing
    if (currentPlaylist.length > 0 && (!audio.src || audio.src === "")) {
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

    console.log('🎵 Playing next song...');
    index = (index + 1) % currentPlaylist.length;
    loadSong(index, true); // true = auto play after load

    // Update song card states for grid view
    updateSongCardStates();
    updateSongListStates();
    playBtn.textContent = "⏸️";
}

// Remove duplicate event listener - already handled in loadSong
// audio.addEventListener('ended', playNextSong);

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
        const fill = document.getElementById('progress-fill');
        if (fill) {
            fill.style.width = progress.value + '%';
        }
        syncLyricsHighlight(audio.currentTime);
    }
};

progress.oninput = () => {
    if (audio.duration) {
        audio.currentTime = (progress.value * audio.duration) / 100;
        updateTimeDisplay();
        const fill = document.getElementById('progress-fill');
        if (fill) {
            fill.style.width = progress.value + '%';
        }
    }
};

// Social Media Links
const socialLinks = {
    website: 'https://dipukraj.tech',
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

    // Update dynamic background base colors
    if (currentPlaylist.length > 0 && currentPlaylist[index]) {
        updateDynamicBackground(currentPlaylist[index].cover);
    }
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
        'other': 'Other Songs',
        'liked': 'Liked Songs'
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
        'other': 'Other Songs',
        'liked': 'Liked Songs'
    };

    // Filter songs for the selected category
    let filteredSongs;
    if (category === 'all') {
        filteredSongs = songs;
    } else if (category === 'liked') {
        filteredSongs = songs.filter(song => likedSongs.includes(song.file));
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
            <button class="card-add-btn" title="Add to Playlist"><i class="fas fa-plus"></i></button>
            <div class="play-indicator">▶</div>
            <img src="${song.cover}" alt="${song.title}" class="song-card-cover" onerror="this.src='image/image cover.jpg'">
            <h4 class="song-card-title">${song.title}</h4>
        `;

        // Add to playlist button click handler
        const addBtn = card.querySelector('.card-add-btn');
        if (addBtn) {
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent playing song
                openPlaylistSelector(song);
            });
        }

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

// Firebase Configuration - Your actual Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyA-ePq8d1e-OHS4Pnzzgyu7PSGUmzGOcCk",
    authDomain: "music-player-af7df.firebaseapp.com",
    databaseURL: "https://music-player-af7df-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "music-player-af7df",
    storageBucket: "music-player-af7df.firebasestorage.app",
    messagingSenderId: "809756943707",
    appId: "1:809756943707:web:e6c07aed8e0fea95e2667e",
    measurementId: "G-GCPWZMKGTZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Analytics Dashboard Functionality - ENHANCED
const analyticsToggle = document.getElementById('analytics-toggle');
const analyticsDashboard = document.getElementById('analytics-dashboard');
const closeAnalyticsBtn = document.getElementById('close-analytics');

// Analytics elements - Check if they exist
const totalVisitorsEl = document.getElementById('total-visitors');
const onlineUsersEl = document.getElementById('online-users');
const pageViewsEl = document.getElementById('page-views');
const songsPlayedEl = document.getElementById('songs-played');
const lastSongEl = document.getElementById('last-song');
const songRequestInput = document.getElementById('song-request-input');
const sendSongRequestBtn = document.getElementById('send-song-request');
const songRequestStatusEl = document.getElementById('song-request-status');
const adminPasscodeInput = document.getElementById('admin-passcode');
const adminUnlockBtn = document.getElementById('admin-unlock-btn');
const adminPanelStatusEl = document.getElementById('admin-panel-status');
const adminDataPanelEl = document.getElementById('admin-data-panel');
const adminRequestListEl = document.getElementById('admin-request-list');
const adminActivityListEl = document.getElementById('admin-activity-list');
const adminTotalVisitorsEl = document.getElementById('admin-total-visitors');
const adminPageViewsEl = document.getElementById('admin-page-views');
const adminOnlineUsersEl = document.getElementById('admin-online-users');
const adminSongsPlayedEl = document.getElementById('admin-songs-played');
const publicRequestBannerEl = document.getElementById('public-request-banner');

const ADMIN_PANEL_PASSCODE = 'musicadmin123';
let isAdminUnlocked = false;
let adminRequestsListenerAttached = false;

// Footer visitor counter element
const footerVisitorsEl = document.getElementById('footer-visitors');

// Debug function to check elements
function checkAnalyticsElements() {
    console.log('🔍 Analytics Elements Check:');
    console.log('totalVisitorsEl:', totalVisitorsEl);
    console.log('onlineUsersEl:', onlineUsersEl);
    console.log('pageViewsEl:', pageViewsEl);
    console.log('songsPlayedEl:', songsPlayedEl);
    console.log('lastSongEl:', lastSongEl);
    console.log('footerVisitorsEl:', footerVisitorsEl);

    // Check if elements exist in DOM
    const dashboard = document.getElementById('analytics-dashboard');
    console.log('Analytics Dashboard in DOM:', dashboard);

    if (dashboard) {
        const statNumbers = dashboard.querySelectorAll('.stat-number');
        console.log('Stat numbers found:', statNumbers.length);
        statNumbers.forEach((el, i) => {
            console.log(`Stat ${i}:`, el.id, el.textContent);
        });
    }
}

// Initialize analytics data
let analyticsData = {
    totalVisitors: 0,
    onlineUsers: 0,
    pageViews: 0,
    songsPlayed: 0,
    lastPlayedSong: 'Unknown',
    sessionId: Date.now(),
    visitTime: new Date().toISOString(),
    userAgent: navigator.userAgent,
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
};

// Generate unique user ID
function generateUserId() {
    let userId = localStorage.getItem('musicPlayerUserId');
    if (!userId) {
        userId = 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
        localStorage.setItem('musicPlayerUserId', userId);
    }
    return userId;
}

// NOTE:
// A duplicate initializeFirebaseAnalytics existed earlier. We keep one
// canonical implementation below to avoid conflicting listeners/writes.

// Track song play in Firebase
function trackSongPlayInFirebase(songTitle) {
    const userId = generateUserId();
    const userRef = database.ref('users/' + userId);
    const statsRef = database.ref('stats');
    const activityRef = database.ref('activity');

    // Update user's song count
    userRef.transaction((userData) => {
        if (userData) {
            userData.songsPlayed = (userData.songsPlayed || 0) + 1;
            userData.lastPlayedSong = songTitle;
            userData.lastPlayTime = firebase.database.ServerValue.TIMESTAMP;
        }
        return userData;
    });

    // Update global stats
    statsRef.transaction((stats) => {
        if (!stats) {
            stats = {
                totalVisitors: 0,
                totalPageViews: 0,
                totalSongsPlayed: 0,
                lastUpdated: firebase.database.ServerValue.TIMESTAMP
            };
        }
        stats.totalSongsPlayed = (stats.totalSongsPlayed || 0) + 1;
        stats.lastUpdated = firebase.database.ServerValue.TIMESTAMP;
        return stats;
    });

    // Add activity
    const activity = {
        text: `Song played: <strong>${songTitle}</strong>`,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        userId: userId,
        type: 'song_play'
    };
    activityRef.push(activity);

    analyticsData.lastPlayedSong = songTitle;
    updateAnalyticsDisplay();
}

// Format timestamp for activity feed only
function formatTimestampForActivity(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;

    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return Math.floor(diff / 60000) + ' min ago';
    if (diff < 86400000) return Math.floor(diff / 3600000) + ' hours ago';
    return Math.floor(diff / 86400000) + ' days ago';
}

// Format song duration properly
function formatDuration(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Update analytics display - ENHANCED
function updateAnalyticsDisplay() {
    console.log('🔄 Updating analytics display...');
    console.log('📊 Current analytics data:', analyticsData);

    // Update DOM elements with animation
    if (totalVisitorsEl) {
        totalVisitorsEl.textContent = analyticsData.totalVisitors.toLocaleString();
    }
    if (onlineUsersEl) {
        onlineUsersEl.textContent = analyticsData.onlineUsers.toLocaleString();
    }
    if (pageViewsEl) {
        pageViewsEl.textContent = analyticsData.pageViews.toLocaleString();
    }
    if (songsPlayedEl) {
        songsPlayedEl.textContent = analyticsData.songsPlayed.toLocaleString();
    }
    if (lastSongEl) {
        lastSongEl.textContent = analyticsData.lastPlayedSong;
    }
    if (adminTotalVisitorsEl) {
        adminTotalVisitorsEl.textContent = analyticsData.totalVisitors.toLocaleString();
    }
    if (adminPageViewsEl) {
        adminPageViewsEl.textContent = analyticsData.pageViews.toLocaleString();
    }
    if (adminOnlineUsersEl) {
        adminOnlineUsersEl.textContent = analyticsData.onlineUsers.toLocaleString();
    }
    if (adminSongsPlayedEl) {
        adminSongsPlayedEl.textContent = analyticsData.songsPlayed.toLocaleString();
    }

    // Update footer visitor counter
    if (footerVisitorsEl) {
        footerVisitorsEl.textContent = analyticsData.totalVisitors.toLocaleString();
        console.log('✅ Footer visitors updated:', analyticsData.totalVisitors);
    }

    // Add animation to numbers
    [totalVisitorsEl, onlineUsersEl, pageViewsEl, songsPlayedEl, footerVisitorsEl].forEach(el => {
        if (el) {
            el.style.animation = 'none';
            setTimeout(() => {
                el.style.animation = 'countUp 0.5s ease';
            }, 10);
        }
    });

    console.log('✅ Analytics display updated');
}

// Show analytics dashboard
function showAnalyticsDashboard() {
    analyticsDashboard.classList.add('show');
    document.body.style.overflow = 'hidden';
    updateAnalyticsDisplay();
}

// Close analytics dashboard
function closeAnalyticsDashboard() {
    analyticsDashboard.classList.remove('show');
    document.body.style.overflow = '';
}

// Add activity item
function addActivityItem(text, time) {
    const activityList = document.querySelector('.activity-list');
    if (activityList) {
        const newItem = document.createElement('div');
        newItem.className = 'activity-item';
        newItem.innerHTML = `
            <span class="activity-time">${time}</span>
            <span class="activity-text">${text}</span>
        `;

        // Add to top of list
        activityList.insertBefore(newItem, activityList.firstChild);

        // Keep only last 5 activities
        while (activityList.children.length > 5) {
            activityList.removeChild(activityList.lastChild);
        }
    }
}

function addAdminActivityItem(text, time) {
    if (!adminActivityListEl) return;
    const newItem = document.createElement('div');
    newItem.className = 'activity-item';
    newItem.innerHTML = `
        <span class="activity-time">${time}</span>
        <span class="activity-text">${text}</span>
    `;
    adminActivityListEl.insertBefore(newItem, adminActivityListEl.firstChild);
    while (adminActivityListEl.children.length > 10) {
        adminActivityListEl.removeChild(adminActivityListEl.lastChild);
    }
}

function setSongRequestStatus(message, isError = false) {
    if (!songRequestStatusEl) return;
    songRequestStatusEl.textContent = message;
    songRequestStatusEl.style.color = isError ? '#ffb4b4' : '';
}

function setAdminPanelStatus(message, isError = false) {
    if (!adminPanelStatusEl) return;
    adminPanelStatusEl.textContent = message;
    adminPanelStatusEl.style.color = isError ? '#ffb4b4' : '';
}

function formatDateTime(ts) {
    if (!ts || typeof ts !== 'number') return 'unknown time';
    return new Date(ts).toLocaleString();
}

function renderAdminRequests(requestMap) {
    if (!adminRequestListEl) return;

    const entries = Object.entries(requestMap || {}).map(([key, value]) => ({ key, ...value }));
    entries.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

    if (entries.length === 0) {
        adminRequestListEl.innerHTML = '<div class="admin-request-item"><div class="admin-request-song">No requests yet.</div></div>';
        return;
    }

    adminRequestListEl.innerHTML = entries.map((item) => {
        const safeSong = (item.songName || 'Untitled request')
            .replace(/<[^>]*>?/gm, '') // Strip HTML tags
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        const status = item.status || 'pending';
        return `
            <div class="admin-request-item">
                <div class="admin-request-song">${safeSong}</div>
                <div class="admin-request-meta">Status: <strong>${status}</strong> | ${formatDateTime(item.createdAt)}</div>
                <div class="admin-request-actions">
                    <button class="request-action-btn pending" data-key="${item.key}" data-status="pending">Pending</button>
                    <button class="request-action-btn added" data-key="${item.key}" data-status="added">Added</button>
                    <button class="request-action-btn done" data-key="${item.key}" data-status="done">Done</button>
                </div>
            </div>
        `;
    }).join('');
}

function updatePublicRequestBannerFromLastRequest(requestMap) {
    if (!publicRequestBannerEl) return;

    const entries = Object.entries(requestMap || {}).map(([key, value]) => ({ key, ...value }));
    if (entries.length === 0) {
        publicRequestBannerEl.textContent = '';
        return;
    }

    // Latest requests (kisi bhi status), max 5
    entries.sort((a, b) => (b.updatedAt || b.createdAt || 0) - (a.updatedAt || a.createdAt || 0));
    const topFive = entries.slice(0, 5);

    const itemsHtml = topFive.map((item, index) => {
        const songName = (item.songName || 'Unknown song')
            .replace(/<[^>]*>?/gm, '') // Strip HTML tags
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        const status = (item.status || 'pending').toLowerCase();
        const timeText = formatDateTime(item.updatedAt || item.createdAt);

        let statusClass = 'status-pending';
        let statusLabel = 'Pending';
        if (status === 'added') {
            statusClass = 'status-added';
            statusLabel = 'Added';
        } else if (status === 'done') {
            statusClass = 'status-done';
            statusLabel = 'Done';
        }

        return `
            <div>
                <span style="opacity:0.8;">${index + 1}.</span>
                <strong>${songName}</strong>
                <span class="status-pill ${statusClass}">${statusLabel}</span>
                <span style="opacity:0.75; margin-left:4px;">(${timeText})</span>
            </div>
        `;
    }).join('');

    publicRequestBannerEl.innerHTML = `
        📢 <span style="font-weight:600;">Latest song requests (top 5):</span>
        ${itemsHtml}
    `;
}

function attachAdminRequestsListener() {
    if (adminRequestsListenerAttached) return;
    adminRequestsListenerAttached = true;

    database.ref('songRequests').limitToLast(100).on('value', (snapshot) => {
        const val = snapshot.val();
        renderAdminRequests(val);
        updatePublicRequestBannerFromLastRequest(val);
    });
}

function unlockAdminPanel() {
    if (!adminPasscodeInput || !adminRequestListEl || !adminDataPanelEl) return;
    const pass = adminPasscodeInput.value.trim();
    if (pass !== ADMIN_PANEL_PASSCODE) {
        setAdminPanelStatus('Wrong passcode.', true);
        return;
    }

    isAdminUnlocked = true;
    if (adminUnlockBtn) {
        adminUnlockBtn.disabled = true;
        adminUnlockBtn.textContent = 'Unlocked';
    }
    adminPasscodeInput.disabled = true;
    adminDataPanelEl.style.display = 'block';
    setAdminPanelStatus('Admin panel unlocked.');
    updateAnalyticsDisplay();
    attachAdminRequestsListener();
}

function updateSongRequestStatus(requestKey, newStatus) {
    if (!requestKey || !newStatus) return;
    database.ref('songRequests/' + requestKey).update({
        status: newStatus,
        updatedAt: firebase.database.ServerValue.TIMESTAMP
    }).catch((error) => {
        console.error('❌ Request status update error:', error);
        setAdminPanelStatus('Status update failed.', true);
    });
}

function submitSongRequest() {
    if (!songRequestInput || !sendSongRequestBtn) return;

    let requestText = songRequestInput.value.trim();
    // Strip HTML tags to prevent XSS and markup defacement
    requestText = requestText.replace(/<[^>]*>?/gm, '').trim();

    if (!requestText) {
        setSongRequestStatus('Please song name likhiye (no HTML tags allowed), phir send kariye.', true);
        return;
    }

    const userId = generateUserId();
    const songRequestRef = database.ref('songRequests');
    const activityRef = database.ref('activity');

    sendSongRequestBtn.disabled = true;
    sendSongRequestBtn.textContent = 'Sending...';
    setSongRequestStatus('Request bheja ja raha hai...');

    const payload = {
        songName: requestText,
        userId,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        userAgent: navigator.userAgent,
        status: 'pending'
    };

    songRequestRef.push(payload)
        .then(() => {
            setSongRequestStatus('Request bhej diya gaya. Thank you!');
            songRequestInput.value = '';

            activityRef.push({
                text: `Song request received: <strong>${requestText}</strong>`,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                userId,
                type: 'song_request'
            });
        })
        .catch((error) => {
            console.error('❌ Song request save error:', error);
            setSongRequestStatus('Request send nahi hua. Please phir try kariye.', true);
        })
        .finally(() => {
            sendSongRequestBtn.disabled = false;
            sendSongRequestBtn.textContent = 'Send Request';
        });
}

// Event listeners
if (analyticsToggle) {
    analyticsToggle.addEventListener('click', showAnalyticsDashboard);
}
closeAnalyticsBtn.addEventListener('click', closeAnalyticsDashboard);
if (sendSongRequestBtn) {
    sendSongRequestBtn.addEventListener('click', submitSongRequest);
}
if (songRequestInput) {
    songRequestInput.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            submitSongRequest();
        }
    });
}
if (adminUnlockBtn) {
    adminUnlockBtn.addEventListener('click', unlockAdminPanel);
}
if (adminPasscodeInput) {
    adminPasscodeInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            unlockAdminPanel();
        }
    });
}
if (adminRequestListEl) {
    adminRequestListEl.addEventListener('click', (e) => {
        const target = e.target;
        if (!(target instanceof HTMLElement)) return;
        if (!target.classList.contains('request-action-btn')) return;
        if (!isAdminUnlocked) return;

        const reqKey = target.getAttribute('data-key');
        const status = target.getAttribute('data-status');
        updateSongRequestStatus(reqKey, status);
    });
}

// Close analytics when clicking outside
analyticsDashboard.addEventListener('click', (e) => {
    if (e.target === analyticsDashboard) {
        closeAnalyticsDashboard();
    }
});

// Close analytics with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && analyticsDashboard.classList.contains('show')) {
        closeAnalyticsDashboard();
    }
});

// Track song plays in existing functions
const originalLoadSong = loadSong;
loadSong = function (i, autoPlay = false) {
    originalLoadSong(i, autoPlay);

    if (currentPlaylist.length > 0 && currentPlaylist[i]) {
        trackSongPlayInFirebase(currentPlaylist[i].title);
    }
};

// Initialize Firebase analytics on page load - ENHANCED
function initializeFirebaseAnalytics() {
    try {
        console.log('🔥 Initializing Firebase...');
        console.log('Database URL:', firebaseConfig.databaseURL);

        // Check analytics elements first
        checkAnalyticsElements();

        const userId = generateUserId();
        const userRef = database.ref('users/' + userId);
        const statsRef = database.ref('stats');
        const presenceRef = database.ref('presence/' + userId);

        console.log('👤 User ID:', userId);

        // Test Firebase connection
        database.ref('.info/connected').on('value', (snapshot) => {
            console.log('🔗 Firebase Connected:', snapshot.val());
        });

        // Keep user profile data
        const userData = {
            id: userId,
            isOnline: true,
            lastSeen: firebase.database.ServerValue.TIMESTAMP,
            visitTime: analyticsData.visitTime,
            userAgent: navigator.userAgent,
            isMobile: analyticsData.isMobile,
            songsPlayed: 0,
            pageViews: (analyticsData.pageViews || 0) + 1
        };

        console.log('📊 Setting user data:', userData);
        userRef.update(userData)
            .then(() => console.log('✅ User data updated'))
            .catch(error => console.error('❌ Error setting user data:', error));

        // Presence tracking: true while connected, remove on disconnect.
        database.ref('.info/connected').on('value', (snapshot) => {
            const connected = snapshot.val() === true;
            console.log('🔗 Firebase Connected:', connected);
            if (!connected) {
                return;
            }

            presenceRef.set({
                userId,
                connectedAt: firebase.database.ServerValue.TIMESTAMP
            });

            presenceRef.onDisconnect().remove();
            userRef.onDisconnect().update({
                isOnline: false,
                lastSeen: firebase.database.ServerValue.TIMESTAMP
            });
        });

        // Stats: har page open/refresh par visitor + page view dono increment.
        statsRef.transaction((currentStats) => {
            if (!currentStats) {
                currentStats = {
                    totalVisitors: 0,
                    totalPageViews: 0,
                    totalSongsPlayed: 0,
                    lastUpdated: firebase.database.ServerValue.TIMESTAMP
                };
            }

            currentStats.totalVisitors = (currentStats.totalVisitors || 0) + 1;
            currentStats.totalPageViews = (currentStats.totalPageViews || 0) + 1;
            currentStats.lastUpdated = firebase.database.ServerValue.TIMESTAMP;
            return currentStats;
        })
            .then(() => {
                console.log('✅ Stats updated successfully');
            })
            .catch(error => console.error('❌ Error updating stats:', error));

        // Listen for real-time updates - ENHANCED
        statsRef.on('value', (snapshot) => {
            const stats = snapshot.val();
            console.log('📊 Real-time stats update:', stats);
            console.log('🔍 Before update - Total Visitors:', analyticsData.totalVisitors);

            if (stats) {
                analyticsData.totalVisitors = stats.totalVisitors || 0;
                analyticsData.pageViews = stats.totalPageViews || 0;
                analyticsData.songsPlayed = stats.totalSongsPlayed || 0;

                console.log('🔍 After update - Total Visitors:', analyticsData.totalVisitors);
                console.log('📱 Display elements:', {
                    totalVisitorsEl: totalVisitorsEl,
                    onlineUsersEl: onlineUsersEl,
                    pageViewsEl: pageViewsEl,
                    songsPlayedEl: songsPlayedEl
                });

                updateAnalyticsDisplay();
            } else {
                console.log('❌ No stats data found');
            }
        });

        // Public banner for latest song request (visible to all users)
        database.ref('songRequests').limitToLast(10).on('value', (snapshot) => {
            updatePublicRequestBannerFromLastRequest(snapshot.val());
        });

        // Listen for online users (realtime presence count)
        database.ref('presence').on('value', (snapshot) => {
            const onlineCount = snapshot.numChildren();
            console.log('👥 Online users:', onlineCount);
            analyticsData.onlineUsers = onlineCount;
            updateAnalyticsDisplay();
        });

        // Listen for recent activity
        database.ref('activity').limitToLast(10).on('child_added', (snapshot) => {
            const activity = snapshot.val();
            console.log('📝 New activity:', activity);
            addActivityItem(activity.text, formatTimestampForActivity(activity.timestamp));
            addAdminActivityItem(activity.text, formatTimestampForActivity(activity.timestamp));
        });

        console.log('🎉 Firebase Analytics initialized successfully!');

    } catch (error) {
        console.error('🚨 Firebase initialization error:', error);
        // Fallback to localStorage if Firebase fails
        console.log('🔄 Falling back to localStorage...');
        initializeLocalStorageAnalytics();
    }
}

// Fallback localStorage analytics
function initializeLocalStorageAnalytics() {
    console.log('📦 Using localStorage analytics...');

    analyticsData.totalVisitors = parseInt(localStorage.getItem('totalVisitors') || '0');
    analyticsData.pageViews = parseInt(localStorage.getItem('pageViews') || '0');
    analyticsData.songsPlayed = parseInt(localStorage.getItem('songsPlayed') || '0');

    const lastVisit = localStorage.getItem('lastVisit');
    const isNewVisitor = !lastVisit || (Date.now() - parseInt(lastVisit)) > 30 * 60 * 1000;

    if (isNewVisitor) {
        analyticsData.totalVisitors++;
        localStorage.setItem('totalVisitors', analyticsData.totalVisitors);
    }

    analyticsData.pageViews++;
    localStorage.setItem('pageViews', analyticsData.pageViews);

    localStorage.setItem('lastVisit', Date.now().toString());
    updateAnalyticsDisplay();
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
    },
    {
        title: "Chalu Mithila Haat",
        file: "other music/Chalu Mithila Haat.mp3",
        cover: "other image/Chalu Mithila Haat.jpg",
        category: "other"
    },
    {
        title: "Darbhanga Wali",
        file: "other music/Darbhanga Wali.mp3",
        cover: "other image/Darbhanga Wali.jpg",
        category: "other"
    },
    {
        title: "Kani Hansiyo Ne Sajni Gulaab",
        file: "other music/Kani Hansiyo Ne Sajni Gulaab.mp3",
        cover: "other image/Kani Hansiyo Ne Sajni Gulaab.jpg",
        category: "other"
    },
    {
        title: "Dil Na Bikau Hamaar",
        file: "other music/Dil Na Bikau Hamaar.mp3",
        cover: "other image/Dil Na Bikau Hamaar.jpg",
        category: "other"
    },
    {
        title: "Solid Body",
        file: "other music/Solid Body.mp3",
        cover: "other image/Solid Body.jpg",
        category: "other"
    },
    {
        title: "52 GAJ KA DAMAN",
        file: "other music/52 GAJ KA DAMAN.mp3",
        cover: "other image/52 GAJ KA DAMAN.jpg",
        category: "other"
    }
);

// Initialize with all songs
filterSongsByCategory('all');
showSongGrid('all');

// Initialize Firebase analytics with debugging
initializeFirebaseAnalytics();

// Search functionality
// searchInput is declared at the top of the file

function normalizeSearchText(text) {
    return (text || '')
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function getEditDistance(a, b) {
    const m = a.length;
    const n = b.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,
                dp[i][j - 1] + 1,
                dp[i - 1][j - 1] + cost
            );
        }
    }
    return dp[m][n];
}

function getSongSearchScore(songTitle, query) {
    const normalizedTitle = normalizeSearchText(songTitle);
    const normalizedQuery = normalizeSearchText(query);

    if (!normalizedQuery) return 0;
    if (normalizedTitle === normalizedQuery) return 100;
    if (normalizedTitle.includes(normalizedQuery)) return 80;

    const titleWords = normalizedTitle.split(' ').filter(Boolean);
    const queryWords = normalizedQuery.split(' ').filter(Boolean);

    let score = 0;
    queryWords.forEach((queryWord) => {
        let bestWordScore = 0;

        titleWords.forEach((titleWord) => {
            if (titleWord === queryWord) {
                bestWordScore = Math.max(bestWordScore, 25);
            } else if (titleWord.startsWith(queryWord) || queryWord.startsWith(titleWord)) {
                bestWordScore = Math.max(bestWordScore, 20);
            } else if (titleWord.includes(queryWord) || queryWord.includes(titleWord)) {
                bestWordScore = Math.max(bestWordScore, 15);
            } else {
                const minLen = Math.min(titleWord.length, queryWord.length);
                if (minLen >= 4) {
                    const distance = getEditDistance(titleWord, queryWord);
                    if (distance <= 1) {
                        bestWordScore = Math.max(bestWordScore, 12);
                    } else if (distance === 2 && minLen >= 6) {
                        bestWordScore = Math.max(bestWordScore, 8);
                    }
                }
            }
        });

        score += bestWordScore;
    });

    return score;
}

// Function to filter songs based on search input (smart fuzzy search)
function filterSongsBySearch(query) {
    if (!query.trim()) {
        // If search is empty, show all songs in current category
        filterSongsByCategory(currentCategory);
        renderPlaylist();
        return;
    }

    const rankedSongs = songs
        .map(song => ({
            song,
            score: getSongSearchScore(song.title, query)
        }))
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score);

    const filteredSongs = rankedSongs.map(item => item.song);

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

// ==========================================
// Spotify UI Enhancements & Integrations
// ==========================================

// Update Liked Heart UI state
function updateLikeButtonUI() {
    if (!likeToggleBtn) return;
    const currentSong = currentPlaylist[index];
    if (!currentSong) return;

    const heartIcon = likeToggleBtn.querySelector('i');
    if (!heartIcon) return;

    if (likedSongs.includes(currentSong.file)) {
        likeToggleBtn.classList.add('liked');
        heartIcon.className = 'fas fa-heart';
    } else {
        likeToggleBtn.classList.remove('liked');
        heartIcon.className = 'far fa-heart';
    }
}

// Heart Button Click Event
if (likeToggleBtn) {
    likeToggleBtn.addEventListener('click', () => {
        const currentSong = currentPlaylist[index];
        if (!currentSong) return;

        const songIndex = likedSongs.indexOf(currentSong.file);
        if (songIndex > -1) {
            likedSongs.splice(songIndex, 1);
        } else {
            likedSongs.push(currentSong.file);
        }

        localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
        updateLikeButtonUI();

        // Refresh active list if Liked view is open
        if (currentCategory === 'liked') {
            filterSongsByCategory('liked');
            showSongGrid('liked');
        }
    });
}

// Navigation active toggle helper
function updateNavActiveState(activeId) {
    [navHome, navSearch, navLiked].forEach(nav => {
        if (nav) nav.classList.remove('active');
    });
    const activeNav = document.getElementById(activeId);
    if (activeNav) activeNav.classList.add('active');
}

// Sidebar Nav click handlers
if (navHome) {
    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        updateNavActiveState('nav-home');
        filterSongsByCategory('all');
        showSongGrid('all');
    });
}

if (navSearch) {
    navSearch.addEventListener('click', (e) => {
        e.preventDefault();
        updateNavActiveState('nav-search');
        searchInput.focus();
    });
}

if (navLiked) {
    navLiked.addEventListener('click', (e) => {
        e.preventDefault();
        updateNavActiveState('nav-liked');
        filterSongsByCategory('liked');
        showSongGrid('liked');
    });
}

// Volume Controls Logic
if (volumeSlider) {
    audio.volume = volumeSlider.value;
    volumeSlider.addEventListener('input', (e) => {
        audio.volume = e.target.value;
        updateVolumeIcon(audio.volume);
    });
}

function updateVolumeIcon(volume) {
    if (!muteBtn) return;
    const icon = muteBtn.querySelector('i');
    if (!icon) return;

    icon.className = 'fas ';
    if (volume === 0) {
        icon.className += 'fa-volume-mute';
    } else if (volume < 0.5) {
        icon.className += 'fa-volume-down';
    } else {
        icon.className += 'fa-volume-up';
    }
}

if (muteBtn) {
    let lastVolume = 1;
    muteBtn.addEventListener('click', () => {
        if (audio.volume > 0) {
            lastVolume = audio.volume;
            audio.volume = 0;
            if (volumeSlider) volumeSlider.value = 0;
        } else {
            audio.volume = lastVolume || 1;
            if (volumeSlider) volumeSlider.value = audio.volume;
        }
        updateVolumeIcon(audio.volume);
    });
}

// Visualizer Syncing with Audio Playback States
function updateVisualizerState() {
    if (!visualizerEl) return;
    if (!audio.paused && !audio.ended) {
        visualizerEl.classList.add('playing');
    } else {
        visualizerEl.classList.remove('playing');
    }
}

audio.addEventListener('play', updateVisualizerState);
audio.addEventListener('pause', updateVisualizerState);
audio.addEventListener('playing', updateVisualizerState);
audio.addEventListener('ended', updateVisualizerState);

// Initial triggers
updateLikeButtonUI();

// ==========================================
// Mobile Sidebar Drawer Toggle Logic
// ==========================================
const menuBtn = document.getElementById('menu-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');

if (menuBtn && sidebar && sidebarOverlay) {
    menuBtn.addEventListener('click', () => {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('show');
    });
}

function closeMobileSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('show');
}

if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', closeMobileSidebar);
}
if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeMobileSidebar);
}

// Automatically close sidebar drawer on navigation clicks
if (navHome) navHome.addEventListener('click', closeMobileSidebar);
if (navSearch) navSearch.addEventListener('click', closeMobileSidebar);
if (navLiked) navLiked.addEventListener('click', closeMobileSidebar);

dropdownItems.forEach(item => {
    item.addEventListener('click', closeMobileSidebar);
});

// ==========================================
// Spotify Mobile Navigation & Pill Logic
// ==========================================

const mobNavHome = document.getElementById('mob-nav-home');
const mobNavSearch = document.getElementById('mob-nav-search');
const mobNavLibrary = document.getElementById('mob-nav-library');
const mobNavPremium = document.getElementById('mob-nav-premium');
const mobNavRequest = document.getElementById('mob-nav-request');

const mobPillAll = document.getElementById('pill-all');
const mobPillMusic = document.getElementById('pill-music');
const mobPillPodcasts = document.getElementById('pill-podcasts');

const searchBox = document.querySelector('.search-box');

// Helper to update bottom nav active state
function updateMobNavActiveState(activeBtn) {
    const navItems = document.querySelectorAll('.mob-nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    if (activeBtn) activeBtn.classList.add('active');
}

// Mobile Home Button
if (mobNavHome) {
    mobNavHome.addEventListener('click', () => {
        updateMobNavActiveState(mobNavHome);
        if (searchBox) searchBox.classList.remove('active');
        // Trigger Home View
        if (navHome) navHome.click();
    });
}

// Mobile Search Button
if (mobNavSearch) {
    mobNavSearch.addEventListener('click', () => {
        updateMobNavActiveState(mobNavSearch);
        if (searchBox) {
            searchBox.classList.toggle('active');
            if (searchBox.classList.contains('active')) {
                searchInput.focus({ preventScroll: true });
            }
        }
    });
}

// Mobile Library Button
if (mobNavLibrary) {
    mobNavLibrary.addEventListener('click', () => {
        updateMobNavActiveState(mobNavLibrary);
        if (searchBox) searchBox.classList.remove('active');
        // Open the sidebar categories drawer
        if (menuBtn) menuBtn.click();
    });
}

// Mobile Premium (Analytics) Button
if (mobNavPremium) {
    mobNavPremium.addEventListener('click', () => {
        updateMobNavActiveState(mobNavPremium);
        if (searchBox) searchBox.classList.remove('active');
        // Toggle/Show analytics dashboard
        showAnalyticsDashboard();
    });
}

// Mobile Request Song Button
if (mobNavRequest) {
    mobNavRequest.addEventListener('click', () => {
        updateMobNavActiveState(mobNavRequest);
        if (searchBox) searchBox.classList.remove('active');

        // Scroll to Song Request Box smoothly inside container only (prevents window scrolling)
        const requestSection = document.querySelector('.song-request-section');
        const contentScrollContainer = document.querySelector('.content-scroll-container');
        if (requestSection && contentScrollContainer) {
            const containerRect = contentScrollContainer.getBoundingClientRect();
            const elemRect = requestSection.getBoundingClientRect();
            const relativeTop = elemRect.top - containerRect.top + contentScrollContainer.scrollTop;
            const targetScrollTop = relativeTop - (containerRect.height / 2) + (elemRect.height / 2);

            contentScrollContainer.scrollTo({
                top: targetScrollTop,
                behavior: 'smooth'
            });

            // Focus textarea without triggering browser scroll
            if (songRequestInput) {
                songRequestInput.focus({ preventScroll: true });
            }
        }
    });
}

// Prevent outer window scroll to keep layout fixed and top navbar visible
window.addEventListener('scroll', () => {
    if (window.scrollY !== 0 || window.scrollX !== 0) {
        window.scrollTo(0, 0);
    }
}, { passive: true });

// Top Pills Logic
function updatePillActiveState(activePill) {
    const pills = [mobPillAll, mobPillMusic, mobPillPodcasts];
    pills.forEach(pill => {
        if (pill) pill.classList.remove('active');
    });
    if (activePill) activePill.classList.add('active');
}

if (mobPillAll) {
    mobPillAll.addEventListener('click', () => {
        updatePillActiveState(mobPillAll);
        // Show all songs
        filterSongsByCategory('all');
        showSongGrid('all');
    });
}

if (mobPillMusic) {
    mobPillMusic.addEventListener('click', () => {
        updatePillActiveState(mobPillMusic);
        // Open library sidebar to let them choose music category
        if (menuBtn) menuBtn.click();

        // Show a brief status or category helper
        const banner = document.getElementById('public-request-banner');
        if (banner) {
            const originalHtml = banner.innerHTML;
            banner.innerHTML = '📢 <strong>Select a Category/Playlist</strong> from the sidebar drawer!';
            banner.style.background = 'rgba(29, 185, 84, 0.1)';
            banner.style.borderColor = 'rgba(29, 185, 84, 0.3)';
            setTimeout(() => {
                banner.innerHTML = originalHtml;
                banner.style.background = '';
                banner.style.borderColor = '';
            }, 4000);
        }
    });
}

if (mobPillPodcasts) {
    mobPillPodcasts.addEventListener('click', () => {
        // Show temporary alert/banner
        const banner = document.getElementById('public-request-banner');
        if (banner) {
            const originalHtml = banner.innerHTML;
            banner.innerHTML = '📻 <strong>Podcasts feature is coming soon!</strong> Stay tuned! ✨';
            banner.style.background = 'rgba(255, 77, 141, 0.1)';
            banner.style.borderColor = 'rgba(255, 77, 141, 0.3)';
            setTimeout(() => {
                banner.innerHTML = originalHtml;
                banner.style.background = '';
                banner.style.borderColor = '';
            }, 4000);
        }
    });
}

// ==========================================
// Spotify Full Screen Player Logic
// ==========================================

const fsPlayer = document.getElementById('mobile-fullscreen-player');
const fsCloseBtn = document.getElementById('fs-close-btn');
const fsCover = document.getElementById('fs-cover');
const fsTitle = document.getElementById('fs-song-title');
const fsArtist = document.getElementById('fs-song-artist');
const fsPlaylistTitle = document.getElementById('fs-playlist-title');
const fsLikeToggle = document.getElementById('fs-like-toggle');
const fsProgress = document.getElementById('fs-progress');
const fsProgressFill = document.getElementById('fs-progress-fill');
const fsCurrentTime = document.getElementById('fs-current-time');
const fsDuration = document.getElementById('fs-duration');
const fsPlay = document.getElementById('fs-play');
const fsPrev = document.getElementById('fs-prev');
const fsNext = document.getElementById('fs-next');
const fsVolume = document.getElementById('fs-volume');
const fsLyricsContent = document.getElementById('fs-lyrics-content');
const fsShuffleBtn = document.getElementById('fs-shuffle-btn');
const fsRepeatBtn = document.getElementById('fs-repeat-btn');

// Selector elements for main/desktop buttons we need to control
const mainShuffleBtn = document.getElementById('shuffle-btn');
const mainRepeatBtn = document.getElementById('repeat-btn');

let isFSShuffle = false;
let isFSRepeat = false;

// Tapping bottom playbar to open full screen player on mobile
const bottomPlaybar = document.querySelector('.bottom-playbar');
if (bottomPlaybar) {
    bottomPlaybar.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            const target = e.target;
            // Prevent opening if user clicked play/pause, volume, seekbar, or heart icons
            if (!target.closest('.playback-controls') &&
                !target.closest('.volume-container') &&
                !target.closest('.heart-btn') &&
                !target.closest('.progress-bar-container') &&
                !target.closest('#like-toggle')) {

                fsPlayer.classList.add('open');
                // Force sync on open
                syncFSPlayerWithLoadedSong(index);
                if (audio.duration) {
                    fsDuration.textContent = formatDurationFS(audio.duration);
                }
            }
        }
    });
}

// Click listener to minimize full screen player
if (fsCloseBtn) {
    fsCloseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        fsPlayer.classList.remove('open');
    });
}

// Helper to format duration safely
function formatDurationFS(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Function to synchronize all elements of full-screen player with current song
function syncFSPlayerWithLoadedSong(i) {
    if (currentPlaylist.length === 0 || !currentPlaylist[i]) return;
    const currentSong = currentPlaylist[i];

    if (fsCover) fsCover.src = currentSong.cover;
    if (fsTitle) fsTitle.textContent = currentSong.title;
    if (fsArtist) fsArtist.textContent = currentSong.artist || '✨5ukoon...';

    // Sync Playlist/Category Name
    if (fsPlaylistTitle) {
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
            'other': 'Other Songs',
            'liked': 'Liked Songs'
        };
        fsPlaylistTitle.textContent = categoryNames[currentCategory] || 'Music Playlist';
    }

    // Sync Like Status
    syncFSLikeUI();

    // Sync Lyrics Preview
    syncFSLyrics();
}

// Synchronize Like button UI inside full-screen player
function syncFSLikeUI() {
    if (!fsLikeToggle) return;
    const currentSong = currentPlaylist[index];
    if (!currentSong) return;
    const heartIcon = fsLikeToggle.querySelector('i');
    if (!heartIcon) return;

    if (likedSongs.includes(currentSong.file)) {
        fsLikeToggle.classList.add('liked');
        heartIcon.className = 'fas fa-heart';
    } else {
        fsLikeToggle.classList.remove('liked');
        heartIcon.className = 'far fa-heart';
    }
}

// Synchronize lyrics text inside full-screen player
function syncFSLyrics() {
    const mainLyricsEl = document.getElementById('lyrics');
    if (mainLyricsEl && fsLyricsContent) {
        fsLyricsContent.textContent = mainLyricsEl.textContent;
    }
}

// Wrapper for loadSong to automatically sync values when a song is loaded
const originalFSLoadSong = loadSong;
loadSong = function (i, autoPlay = false) {
    originalFSLoadSong(i, autoPlay);
    syncFSPlayerWithLoadedSong(i);

    // Override the dynamic audio.onended handler set inside original loadSong
    const originalOnEnded = audio.onended;
    audio.onended = function () {
        if (this.isAutoPlaying) return;
        this.isAutoPlaying = true;

        if (isFSRepeat) {
            loadSong(index, true);
        } else if (isFSShuffle) {
            index = Math.floor(Math.random() * currentPlaylist.length);
            loadSong(index, true);
        } else {
            // Default next behavior
            index = (index + 1) % currentPlaylist.length;
            loadSong(index, true);
        }

        setTimeout(() => {
            this.isAutoPlaying = false;
        }, 2000);
    };
};

// Play/Pause sync logic
if (fsPlay) {
    fsPlay.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            fsPlay.textContent = "⏸️";
            if (playBtn) playBtn.textContent = "⏸️";
        } else {
            audio.pause();
            fsPlay.textContent = "▶️";
            if (playBtn) playBtn.textContent = "▶️";
        }
        updateSongCardStates();
    });
}

// Listen to audio play state to sync play/pause button state
audio.addEventListener('play', () => {
    if (fsPlay) fsPlay.textContent = "⏸️";
});
audio.addEventListener('pause', () => {
    if (fsPlay) fsPlay.textContent = "▶️";
});

// Next and Previous trigger syncs
if (fsNext) {
    fsNext.addEventListener('click', () => {
        if (nextBtn) nextBtn.click();
        syncFSPlayerWithLoadedSong(index);
    });
}

if (fsPrev) {
    fsPrev.addEventListener('click', () => {
        if (prevBtn) prevBtn.click();
        syncFSPlayerWithLoadedSong(index);
    });
}

// Like Button click inside full screen
if (fsLikeToggle) {
    fsLikeToggle.addEventListener('click', () => {
        if (likeToggleBtn) likeToggleBtn.click();
        syncFSLikeUI();
    });
}

// Update Timeline Seekbar on audio timeupdate
audio.addEventListener('timeupdate', () => {
    if (audio.duration && fsProgress) {
        const percent = (audio.currentTime / audio.duration) * 100;
        fsProgress.value = percent;
        if (fsProgressFill) fsProgressFill.style.width = percent + '%';
        if (fsCurrentTime) {
            fsCurrentTime.textContent = formatDurationFS(audio.currentTime);
        }
    }
});

// Sync total duration on loadedmetadata
audio.addEventListener('loadedmetadata', () => {
    if (audio.duration && fsDuration) {
        fsDuration.textContent = formatDurationFS(audio.duration);
    }
});

// Seek audio when timeline slider changes inside full screen
if (fsProgress) {
    fsProgress.addEventListener('input', () => {
        if (audio.duration) {
            const newTime = (fsProgress.value * audio.duration) / 100;
            audio.currentTime = newTime;
            if (fsCurrentTime) {
                fsCurrentTime.textContent = formatDurationFS(newTime);
            }
            if (fsProgressFill) {
                fsProgressFill.style.width = fsProgress.value + '%';
            }
        }
    });
}

// Volume controller logic inside full screen
if (fsVolume) {
    fsVolume.value = audio.volume;
    fsVolume.addEventListener('input', (e) => {
        const vol = e.target.value;
        audio.volume = vol;
        if (volumeSlider) volumeSlider.value = vol;
        updateVolumeIcon(vol);
    });
}

// Update full-screen volume slider if volume changes elsewhere (e.g. mute)
audio.addEventListener('volumechange', () => {
    if (fsVolume) {
        fsVolume.value = audio.volume;
    }
});

// Active Shuffle and Repeat functionality logic
if (mainShuffleBtn) {
    mainShuffleBtn.addEventListener('click', () => {
        isFSShuffle = !isFSShuffle;
        mainShuffleBtn.classList.toggle('active', isFSShuffle);
        if (fsShuffleBtn) fsShuffleBtn.classList.toggle('active', isFSShuffle);
    });
}

if (fsShuffleBtn) {
    fsShuffleBtn.addEventListener('click', () => {
        isFSShuffle = !isFSShuffle;
        if (mainShuffleBtn) mainShuffleBtn.classList.toggle('active', isFSShuffle);
        fsShuffleBtn.classList.toggle('active', isFSShuffle);
    });
}

if (mainRepeatBtn) {
    mainRepeatBtn.addEventListener('click', () => {
        isFSRepeat = !isFSRepeat;
        mainRepeatBtn.classList.toggle('active', isFSRepeat);
        if (fsRepeatBtn) fsRepeatBtn.classList.toggle('active', isFSRepeat);
    });
}

if (fsRepeatBtn) {
    fsRepeatBtn.addEventListener('click', () => {
        isFSRepeat = !isFSRepeat;
        if (mainRepeatBtn) mainRepeatBtn.classList.toggle('active', isFSRepeat);
        fsRepeatBtn.classList.toggle('active', isFSRepeat);
    });
}

// Custom next song calculation logic considering shuffle and repeat state
const originalPlayNextSong = playNextSong;
playNextSong = function () {
    if (currentPlaylist.length === 0) return;

    if (isFSRepeat) {
        loadSong(index, true);
    } else if (isFSShuffle) {
        index = Math.floor(Math.random() * currentPlaylist.length);
        loadSong(index, true);
    } else {
        originalPlayNextSong();
    }
};

// Also wrap play next click and play prev click logic to handle shuffle/repeat
if (nextBtn) {
    const originalNextClick = nextBtn.onclick;
    nextBtn.onclick = () => {
        if (currentPlaylist.length === 0) return;
        if (isFSShuffle) {
            index = Math.floor(Math.random() * currentPlaylist.length);
            loadSong(index, true);
            playBtn.textContent = "⏸️";
            updateSongCardStates();
            syncFSPlayerWithLoadedSong(index);
        } else {
            originalNextClick();
        }
    };
}

if (prevBtn) {
    const originalPrevClick = prevBtn.onclick;
    prevBtn.onclick = () => {
        if (currentPlaylist.length === 0) return;
        if (isFSShuffle) {
            index = Math.floor(Math.random() * currentPlaylist.length);
            loadSong(index, true);
            playBtn.textContent = "⏸️";
            updateSongCardStates();
            syncFSPlayerWithLoadedSong(index);
        } else {
            originalPrevClick();
        }
    };
}

// Disable browser's scroll restoration to prevent opening scrolled down (e.g. at request section)
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Reset page view to Home and scroll container to top
function resetToHomeView() {
    // Reset scroll position of the main scroll container
    const contentScrollContainer = document.querySelector('.content-scroll-container');
    if (contentScrollContainer) {
        contentScrollContainer.scrollTop = 0;
    }

    // Reset desktop sidebar navigation active state to Home
    if (typeof updateNavActiveState === 'function') {
        updateNavActiveState('nav-home');
    }

    // Reset mobile bottom navigation active state to Home
    const mobNavHome = document.getElementById('mob-nav-home');
    if (mobNavHome && typeof updateMobNavActiveState === 'function') {
        updateMobNavActiveState(mobNavHome);
    }

    // Ensure search box is closed on load
    const searchBox = document.querySelector('.search-box');
    if (searchBox) {
        searchBox.classList.remove('active');
    }
}

// Run immediately as soon as the DOM is parsed and script is loaded
resetToHomeView();

// Also run on window load to ensure it resets after assets are fully loaded and layout stabilizes
window.addEventListener('load', resetToHomeView);

// Tagline Cycler for Hero Description
const taglines = [
    `<strong>Music सिर्फ़ सुनाई नहीं देता, महसूस भी होता है।</strong><br>यह बिना शब्दों के हर दिल तक पहुँच जाता है—खुशियों में मुस्कान बनकर, दुखों में Sukoon बनकर और ज़िंदगी के हर सफ़र में एक सच्चे हमसफ़र की तरह साथ चलता है। ज़िंदगी चाहे जैसी भी हो, अपनी पसंद का एक <strong>Song</strong> सुनते ही मन हल्का हो जाता है, क्योंकि कुछ एहसास ऐसे होते हैं जिन्हें सिर्फ़ <strong>Music</strong> ही बयां कर सकता है।`,
    `<strong>Music एक एहसास है, जो बिना शब्दों के हर दिल तक पहुँच जाता है।</strong><br>यह हमारी खुशियों में मुस्कान बनकर, दुखों में सुकून बनकर और ज़िंदगी के हर सफ़र में एक सच्चे हमसफ़र की तरह साथ चलता है।<br>ज़िंदगी चाहे जैसी भी हो, अपनी पसंद का एक <strong>Song</strong> सुनते ही मन हल्का हो जाता है, क्योंकि कुछ एहसास ऐसे होते हैं जिन्हें सिर्फ़ <strong>Music</strong> ही बयां कर सकता है।`,
    `<strong>Music सिर्फ़ सुनने की चीज़ नहीं, जीने का एक तरीका है।</strong><br>जब दुनिया की आवाज़ें थका देती हैं, तब एक पसंदीदा धुन दिल को फिर से सुकून दे जाती है।<br>हर Playlist अपने साथ कुछ यादें, कुछ मुस्कानें और कुछ अधूरी कहानियाँ लेकर चलती है।`,
    `<strong>हर Song के पीछे एक कहानी छुपी होती है।</strong><br>कुछ गीत हमें बीते हुए लम्हों से मिला देते हैं, तो कुछ आने वाले सपनों की उम्मीद बन जाते हैं।<br>यही वजह है कि Music सिर्फ़ कानों तक नहीं, सीधे दिल तक पहुँचता है।`,
    `<strong>कभी-कभी जो बात हम कह नहीं पाते, उसे Music बड़ी आसानी से कह देता है।</strong><br>एक छोटी-सी धुन भी हज़ारों जज़्बात जगा सकती है।<br>शायद इसलिए हर इंसान का कोई न कोई पसंदीदा गीत ज़रूर होता है, जिसमें उसे अपना एक हिस्सा नज़र आता है।`,
    `<strong>ज़िंदगी बदलती रहती है, लेकिन Music हमेशा साथ रहता है।</strong><br>खुशियों में यह हमारी मुस्कान बन जाता है और मुश्किल वक़्त में हिम्मत देता है।<br>हर पल, हर एहसास और हर याद को ख़ास बनाने की ताकत सिर्फ़ <strong>Music</strong> में होती है।`
];

function initTaglineCycler() {
    const descEl = document.querySelector('.hero-description');
    if (!descEl) return;

    let currentIndex = 0;

    // Set the first tagline initially (with correct styling)
    descEl.innerHTML = taglines[currentIndex];

    setInterval(() => {
        // Fade out
        descEl.style.opacity = '0';

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % taglines.length;
            descEl.innerHTML = taglines[currentIndex];
            // Fade in
            descEl.style.opacity = '1';
        }, 500); // 500ms fade transition time matching CSS
    }, 30000); // 30 seconds interval
}

// Initialize cycler
initTaglineCycler();

// --- FEATURE: Keyboard Shortcuts ---
window.addEventListener('keydown', (e) => {
    // Ignore keyboard shortcuts if the user is typing in form inputs
    const active = document.activeElement;
    if (active && (
        active.tagName === 'INPUT' ||
        active.tagName === 'TEXTAREA' ||
        active.tagName === 'SELECT' ||
        active.isContentEditable
    )) {
        return;
    }

    switch (e.code) {
        case 'Space':
            e.preventDefault(); // Prevent scrolling
            const playButton = document.getElementById('play');
            if (playButton) playButton.click();
            break;
        case 'ArrowRight':
            e.preventDefault();
            if (audio && audio.duration) {
                audio.currentTime = Math.min(audio.currentTime + 5, audio.duration);
            }
            break;
        case 'ArrowLeft':
            e.preventDefault();
            if (audio) {
                audio.currentTime = Math.max(audio.currentTime - 5, 0);
            }
            break;
        case 'KeyN':
            const nextButton = document.getElementById('next');
            if (nextButton) nextButton.click();
            break;
        case 'KeyP':
            const prevButton = document.getElementById('prev');
            if (prevButton) prevButton.click();
            break;
        case 'KeyM':
            const muteButton = document.getElementById('mute-btn');
            if (muteButton) muteButton.click();
            break;
    }
});

// --- FEATURE: Share Song Link ---
const shareBtn = document.getElementById('share-btn');
if (shareBtn) {
    shareBtn.addEventListener('click', () => {
        const currentSong = currentPlaylist[index];
        if (!currentSong) return;

        const shareUrl = window.location.origin + window.location.pathname + '?song=' + encodeURIComponent(currentSong.title);
        
        // Copy to clipboard
        navigator.clipboard.writeText(shareUrl).then(() => {
            showToast(`Link copied: "${currentSong.title}" 🔗`);
        }).catch(err => {
            console.error('Could not copy link: ', err);
            // Fallback for browsers that don't support navigator.clipboard
            const tempInput = document.createElement('input');
            tempInput.value = shareUrl;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            showToast(`Link copied: "${currentSong.title}" 🔗`);
        });
    });
}

// Quick Toast Notification helper
function showToast(message) {
    let toast = document.getElementById('music-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'music-toast';
        toast.style.cssText = `
            position: fixed;
            bottom: 105px;
            left: 50%;
            transform: translateX(-50%) translateY(20px);
            background: var(--accent-gradient);
            color: white;
            padding: 10px 20px;
            border-radius: 30px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            font-weight: 600;
            z-index: 10000;
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            pointer-events: none;
            font-size: 0.9rem;
        `;
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    // Show toast
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    }, 50);
    // Hide toast after 3s
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
    }, 3000);
}

// Check for shared song on load
function checkForSharedSong() {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedSongTitle = urlParams.get('song');
    if (sharedSongTitle) {
        const songTitleDecoded = decodeURIComponent(sharedSongTitle);
        const songIdx = songs.findIndex(s => s.title.toLowerCase() === songTitleDecoded.toLowerCase());
        if (songIdx !== -1) {
            const targetSong = songs[songIdx];
            const cat = targetSong.category || 'all';
            
            // Switch category and filter list
            filterSongsByCategory(cat);
            
            const newIdx = currentPlaylist.findIndex(s => s.title.toLowerCase() === targetSong.title.toLowerCase());
            if (newIdx !== -1) {
                index = newIdx;
                setTimeout(() => {
                    loadSong(index, true);
                    playBtn.textContent = '⏸️';
                    updateSongCardStates();
                    updateSongListStates();
                }, 500);
            }
        }
    }
}
window.addEventListener('load', checkForSharedSong);

// --- FEATURE: Sleep Timer ---
let sleepTimerId = null;
let sleepIntervalId = null;
let sleepTimeRemaining = 0; // in seconds

const sleepTimerBtn = document.getElementById('sleep-timer-btn');
const sleepOptions = document.getElementById('sleep-options');
const sleepBadge = document.getElementById('sleep-badge');

if (sleepTimerBtn && sleepOptions) {
    sleepTimerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sleepOptions.classList.toggle('show');
    });

    document.querySelectorAll('.sleep-option-item').forEach(item => {
        item.addEventListener('click', () => {
            const minutes = parseInt(item.dataset.time, 10);
            setSleepTimer(minutes);
            sleepOptions.classList.remove('show');
        });
    });

    // Close sleep menu when clicking elsewhere
    document.addEventListener('click', (e) => {
        if (!sleepTimerBtn.contains(e.target) && !sleepOptions.contains(e.target)) {
            sleepOptions.classList.remove('show');
        }
    });
}

function setSleepTimer(minutes) {
    // Clear existing timers
    if (sleepTimerId) clearTimeout(sleepTimerId);
    if (sleepIntervalId) clearInterval(sleepIntervalId);

    if (minutes === 0) {
        if (sleepBadge) sleepBadge.style.display = 'none';
        sleepTimeRemaining = 0;
        showToast('Sleep timer turned off');
        return;
    }

    sleepTimeRemaining = minutes * 60;
    if (sleepBadge) {
        sleepBadge.textContent = `${minutes}m`;
        sleepBadge.style.display = 'inline-block';
    }
    showToast(`Sleep timer set for ${minutes} minutes`);

    // Interval to update countdown badge every second
    sleepIntervalId = setInterval(() => {
        sleepTimeRemaining--;
        if (sleepTimeRemaining <= 0) {
            clearInterval(sleepIntervalId);
        } else {
            const minsLeft = Math.ceil(sleepTimeRemaining / 60);
            if (sleepBadge) sleepBadge.textContent = `${minsLeft}m`;
        }
    }, 1000);

    // Timeout to execute pause
    sleepTimerId = setTimeout(() => {
        if (audio && !audio.paused) {
            audio.pause();
            if (playBtn) playBtn.textContent = '▶️';
            updateSongCardStates();
        }
        if (sleepBadge) sleepBadge.style.display = 'none';
        clearInterval(sleepIntervalId);
        showToast('Sleep timer finished. Music paused.');
    }, minutes * 60 * 1000);
}

// --- FEATURE: Custom Playlists ---
let customPlaylists = JSON.parse(localStorage.getItem('customPlaylists')) || {};
let songToAddToPlaylist = null;

const createPlaylistBtn = document.getElementById('create-playlist-btn');
const customPlaylistsList = document.getElementById('custom-playlists-list');
const playlistSelectorModal = document.getElementById('playlist-selector-modal');
const modalOverlay = document.getElementById('modal-overlay');
const closePlaylistSelectorBtn = document.getElementById('close-playlist-selector');
const selectorPlaylistList = document.getElementById('selector-playlist-list');
const createPlaylistBtnSelector = document.getElementById('create-playlist-btn-selector');
const newPlaylistNameSelector = document.getElementById('new-playlist-name-selector');

function saveCustomPlaylists() {
    localStorage.setItem('customPlaylists', JSON.stringify(customPlaylists));
    renderCustomPlaylists();
}

function getPlaylistIcon(name) {
    if (name.includes('🏃') || name.toLowerCase().includes('walk')) return '🏃';
    if (name.includes('🏋️') || name.toLowerCase().includes('gym') || name.toLowerCase().includes('workout')) return '🏋️';
    if (name.includes('🚗') || name.toLowerCase().includes('drive') || name.toLowerCase().includes('safar') || name.toLowerCase().includes('car')) return '🚗';
    if (name.includes('🧘') || name.toLowerCase().includes('meditat') || name.toLowerCase().includes('relax') || name.toLowerCase().includes('peace')) return '🧘';
    if (name.includes('☕') || name.toLowerCase().includes('study') || name.toLowerCase().includes('focus') || name.toLowerCase().includes('work')) return '☕';
    if (name.includes('🌙') || name.toLowerCase().includes('sleep') || name.toLowerCase().includes('night')) return '🌙';
    if (name.includes('⚡') || name.toLowerCase().includes('energy') || name.toLowerCase().includes('party') || name.toLowerCase().includes('dance')) return '⚡';
    if (name.includes('💖') || name.toLowerCase().includes('love') || name.toLowerCase().includes('romantic')) return '💖';
    
    const emojiMatch = name.match(/[\p{Emoji}\u200d]+/gu);
    if (emojiMatch && emojiMatch.length > 0) {
        return emojiMatch[0];
    }
    return '📂';
}

function renderCustomPlaylists() {
    if (!customPlaylistsList) return;
    customPlaylistsList.innerHTML = '';

    const playlistNames = Object.keys(customPlaylists);
    if (playlistNames.length === 0) {
        customPlaylistsList.innerHTML = `<div style="padding: 10px; font-size: 0.8rem; color: var(--text-secondary); text-align: center;">No playlists yet. Create one!</div>`;
        return;
    }

    playlistNames.forEach(name => {
        const item = document.createElement('div');
        item.className = 'playlist-item';
        if (currentCategory === `custom_${name}`) {
            item.classList.add('active');
        }

        item.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span class="category-icon">${getPlaylistIcon(name)}</span>
                <span>${name}</span>
            </div>
            <button class="playlist-delete-btn" title="Delete Playlist"><i class="fas fa-trash-alt"></i></button>
        `;

        // Click to play/view playlist
        item.addEventListener('click', () => {
            playCustomPlaylist(name);
        });

        // Delete playlist
        const deleteBtn = item.querySelector('.playlist-delete-btn');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm(`Are you sure you want to delete the playlist "${name}"?`)) {
                    delete customPlaylists[name];
                    saveCustomPlaylists();
                    if (currentCategory === `custom_${name}`) {
                        filterSongsByCategory('all');
                    }
                }
            });
        }

        customPlaylistsList.appendChild(item);
    });
}

function playCustomPlaylist(name) {
    const songFiles = customPlaylists[name] || [];
    currentPlaylist = songs.filter(s => songFiles.includes(s.file));
    currentCategory = `custom_${name}`;

    // Update active visual state of sidebar
    document.querySelectorAll('.dropdown-item').forEach(el => el.classList.remove('active'));
    renderCustomPlaylists();

    // Show dynamic grid
    showSongGrid(`custom_${name}`);
    gridTitle.textContent = `${name} (${currentPlaylist.length} songs)`;

    if (currentPlaylist.length > 0) {
        index = 0;
        loadSong(index, true);
        playBtn.textContent = '⏸️';
        updateSongCardStates();
        updateSongListStates();
    } else {
        showToast(`Playlist "${name}" is empty. Add songs to it!`);
    }
}

// Override / Extend showSongGrid to support custom playlist categories
const originalShowSongGrid = showSongGrid;
showSongGrid = function(category) {
    if (category.startsWith('custom_')) {
        const name = category.replace('custom_', '');
        const songFiles = customPlaylists[name] || [];
        
        let filteredSongs = songs.filter(song => songFiles.includes(song.file));
        gridTitle.textContent = `${name} (${filteredSongs.length} songs)`;
        songGrid.innerHTML = '';

        if (filteredSongs.length === 0) {
            songGrid.innerHTML = `<div style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--text-secondary);">This playlist is empty. Click the '+' icon on any song to add it here!</div>`;
        } else {
            filteredSongs.forEach((song, songIndex) => {
                const card = document.createElement('div');
                card.className = 'song-card';
                if (audio.src.endsWith(song.file) && !audio.paused) {
                    card.classList.add('playing');
                }

                card.innerHTML = `
                    <button class="card-add-btn" title="Add to Playlist"><i class="fas fa-plus"></i></button>
                    <div class="play-indicator">▶</div>
                    <img src="${song.cover}" alt="${song.title}" class="song-card-cover" onerror="this.src='image/image cover.jpg'">
                    <h4 class="song-card-title">${song.title}</h4>
                `;

                // Add to playlist button click handler
                const addBtn = card.querySelector('.card-add-btn');
                if (addBtn) {
                    addBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        openPlaylistSelector(song);
                    });
                }

                // Add click event to play song
                card.addEventListener('click', () => {
                    const playlistIndex = currentPlaylist.findIndex(s => s.file === song.file);
                    if (playlistIndex !== -1) {
                        index = playlistIndex;
                        loadSong(index, true);
                        playBtn.textContent = "⏸️";
                        updateSongCardStates();
                        updateSongListStates();
                    }
                });

                songGrid.appendChild(card);
            });
        }
        songGridContainer.classList.add('show');
        document.body.style.overflow = 'hidden';
    } else {
        originalShowSongGrid(category);
    }
};

// Create Playlist Modal Elements and Bindings
const createPlaylistModal = document.getElementById('create-playlist-modal');
const closeCreatePlaylistBtn = document.getElementById('close-create-playlist');
const newPlaylistNameInput = document.getElementById('new-playlist-name-input');
const submitCreatePlaylistBtn = document.getElementById('submit-create-playlist-btn');
const tagPills = document.querySelectorAll('.playlist-tag-pill');

function closeCreatePlaylistModal() {
    if (createPlaylistModal && modalOverlay) {
        createPlaylistModal.style.display = 'none';
        if (playlistSelectorModal && playlistSelectorModal.style.display === 'block') {
            // Keep overlay open for selector
        } else {
            modalOverlay.style.display = 'none';
        }
    }
}

if (closeCreatePlaylistBtn) {
    closeCreatePlaylistBtn.addEventListener('click', closeCreatePlaylistModal);
}

tagPills.forEach(pill => {
    pill.addEventListener('click', () => {
        tagPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        if (newPlaylistNameInput) {
            newPlaylistNameInput.value = pill.dataset.name;
        }
    });
});

if (submitCreatePlaylistBtn && newPlaylistNameInput) {
    submitCreatePlaylistBtn.addEventListener('click', () => {
        const name = newPlaylistNameInput.value.trim();
        if (name) {
            if (customPlaylists[name]) {
                showToast('Playlist already exists!');
            } else {
                customPlaylists[name] = [];
                saveCustomPlaylists();
                showToast(`Playlist "${name}" created! ✨`);
                closeCreatePlaylistModal();
            }
        } else {
            showToast('Please enter or select a playlist name!');
        }
    });
}

// Create Playlist button in sidebar
if (createPlaylistBtn) {
    createPlaylistBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (createPlaylistModal && modalOverlay) {
            if (newPlaylistNameInput) newPlaylistNameInput.value = '';
            tagPills.forEach(p => p.classList.remove('active'));
            createPlaylistModal.style.display = 'block';
            modalOverlay.style.display = 'block';
        }
    });
}

// Add to Playlist modal selectors
function openPlaylistSelector(song) {
    songToAddToPlaylist = song;
    if (playlistSelectorModal && modalOverlay) {
        playlistSelectorModal.style.display = 'block';
        modalOverlay.style.display = 'block';
        
        // Render lists inside modal
        if (selectorPlaylistList) {
            selectorPlaylistList.innerHTML = '';
            const names = Object.keys(customPlaylists);
            if (names.length === 0) {
                selectorPlaylistList.innerHTML = `<div style="color: var(--text-secondary); font-size: 0.85rem; text-align: center; padding: 10px;">Create a playlist below first!</div>`;
            } else {
                names.forEach(name => {
                    const btn = document.createElement('button');
                    btn.style.cssText = `
                        width: 100%;
                        text-align: left;
                        background: var(--bg-hover);
                        border: 1px solid var(--border-color);
                        color: var(--text-primary);
                        padding: 10px 15px;
                        border-radius: 8px;
                        cursor: pointer;
                        font-size: 0.85rem;
                        font-weight: 600;
                        transition: all 0.2s ease;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        margin-bottom: 5px;
                    `;
                    btn.innerHTML = `<span>📂</span> <span style="flex: 1; text-align: left;">${name}</span> <span style="font-size: 0.75rem; color: var(--text-secondary);">${customPlaylists[name].length} songs</span>`;
                    
                    btn.addEventListener('click', () => {
                        addSongToCustomPlaylist(name, song.file);
                    });
                    selectorPlaylistList.appendChild(btn);
                });
            }
        }
    }
}

function addSongToCustomPlaylist(playlistName, songFile) {
    if (!customPlaylists[playlistName].includes(songFile)) {
        customPlaylists[playlistName].push(songFile);
        saveCustomPlaylists();
        showToast(`Added to playlist "${playlistName}"`);
    } else {
        showToast(`Already in playlist "${playlistName}"`);
    }
    closePlaylistSelectorModal();
}

function closePlaylistSelectorModal() {
    if (playlistSelectorModal && modalOverlay) {
        playlistSelectorModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    }
    if (newPlaylistNameSelector) newPlaylistNameSelector.value = '';
}

if (closePlaylistSelectorBtn) {
    closePlaylistSelectorBtn.addEventListener('click', closePlaylistSelectorModal);
}
if (modalOverlay) {
    modalOverlay.addEventListener('click', () => {
        closePlaylistSelectorModal();
        closeCreatePlaylistModal();
    });
}

if (createPlaylistBtnSelector && newPlaylistNameSelector) {
    createPlaylistBtnSelector.addEventListener('click', () => {
        const name = newPlaylistNameSelector.value.trim();
        if (name && songToAddToPlaylist) {
            if (!customPlaylists[name]) {
                customPlaylists[name] = [];
            }
            addSongToCustomPlaylist(name, songToAddToPlaylist.file);
        } else {
            showToast('Please enter a playlist name!');
        }
    });
}

// Render playlists on load
window.addEventListener('load', renderCustomPlaylists);

// --- FEATURE: Dynamic Album Art Background ---
function updateDynamicBackground(coverSrc) {
    if (!coverSrc) return;

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = coverSrc;
    
    img.onload = function() {
        try {
            const canvas = document.createElement('canvas');
            canvas.width = 2;
            canvas.height = 2;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, 2, 2);
            
            const imgData = ctx.getImageData(0, 0, 2, 2).data;
            
            // Extract colors from the 4 corners
            const c1 = `rgba(${imgData[0]}, ${imgData[1]}, ${imgData[2]}, 0.25)`;
            const c2 = `rgba(${imgData[4]}, ${imgData[5]}, ${imgData[6]}, 0.15)`;
            const c3 = `rgba(${imgData[8]}, ${imgData[9]}, ${imgData[10]}, 0.15)`;
            const c4 = `rgba(${imgData[12]}, ${imgData[13]}, ${imgData[14]}, 0.25)`;
            
            // Generate a beautiful, subtle gradient overlay
            const gradientString = `radial-gradient(circle at 0% 0%, ${c1} 0%, transparent 60%),
                                    radial-gradient(circle at 100% 0%, ${c2} 0%, transparent 60%),
                                    radial-gradient(circle at 100% 100%, ${c3} 0%, transparent 60%),
                                    radial-gradient(circle at 0% 100%, ${c4} 0%, transparent 60%)`;

            // Apply to main content body background
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.style.transition = 'background 1.5s ease-in-out';
                const baseBg = document.documentElement.getAttribute('data-theme') === 'light' ? '#f4f5f8' : '#070709';
                mainContent.style.backgroundImage = `${gradientString}, linear-gradient(to bottom, ${baseBg}, ${baseBg})`;
            }

            // Apply to Mobile Fullscreen Player as well!
            const fsPlayer = document.getElementById('mobile-fullscreen-player');
            if (fsPlayer) {
                fsPlayer.style.transition = 'background 1.5s ease-in-out';
                const fsBaseBg = document.documentElement.getAttribute('data-theme') === 'light' ? '#f4f5f8' : '#09090b';
                fsPlayer.style.backgroundImage = `${gradientString}, linear-gradient(to bottom, ${fsBaseBg}, ${fsBaseBg})`;
            }
        } catch (e) {
            console.warn("Could not extract album art colors (likely CORS restrict):", e);
        }
    };
}

// --- FEATURE: Dynamic & Synced Lyrics ---
let currentLyricsArray = [];
let lyricsModalSong = null;

const lyricsModal = document.getElementById('lyrics-modal');
const closeLyricsModalBtn = document.getElementById('close-lyrics-modal');
const saveLyricsBtn = document.getElementById('save-lyrics-btn');
const lyricsInputTextarea = document.getElementById('lyrics-input-textarea');
const lyricsModalSongTitle = document.getElementById('lyrics-modal-song-title');

function getSongKey(title) {
    return title.toLowerCase().replace(/[^a-z0-9]/g, '_');
}

function loadSongLyrics(song) {
    currentLyricsArray = [];
    const lyricsContainer = document.getElementById('lyrics');
    if (!lyricsContainer) return;

    lyricsContainer.innerHTML = `<div style="text-align: center; padding: 20px; font-size: 0.85rem; color: var(--text-secondary);"><i class="fas fa-spinner fa-spin"></i> Loading lyrics...</div>`;
    syncFSLyrics();

    const songKey = getSongKey(song.title);
    
    // Try Firebase Database
    database.ref('lyrics/' + songKey).once('value').then(snapshot => {
        const lyricsText = snapshot.val();
        if (lyricsText) {
            renderLyrics(lyricsText);
        } else {
            // Try localLyrics
            if (window.localLyrics && window.localLyrics[song.title]) {
                renderLyrics(window.localLyrics[song.title]);
            } else {
                // Show fallback with Add button
                lyricsContainer.innerHTML = `
                    <div style="text-align: center; padding: 20px; font-size: 0.85rem; color: var(--text-secondary);">
                        No lyrics available yet.<br>
                        <button id="add-lyrics-trigger" style="background: var(--accent-gradient); border: none; color: white; padding: 6px 14px; border-radius: 20px; font-weight: 600; cursor: pointer; margin-top: 10px; font-size: 0.8rem;">+ Add Lyrics</button>
                    </div>
                `;
                const addTrigger = document.getElementById('add-lyrics-trigger');
                if (addTrigger) {
                    addTrigger.addEventListener('click', () => {
                        openLyricsModal(song);
                    });
                }
                syncFSLyrics();
            }
        }
    }).catch(err => {
        console.warn("Firebase lyrics error, trying local: ", err);
        if (window.localLyrics && window.localLyrics[song.title]) {
            renderLyrics(window.localLyrics[song.title]);
        } else {
            lyricsContainer.innerHTML = `
                <div style="text-align: center; padding: 20px; font-size: 0.85rem; color: var(--text-secondary);">
                    No lyrics available yet.<br>
                    <button id="add-lyrics-trigger" style="background: var(--accent-gradient); border: none; color: white; padding: 6px 14px; border-radius: 20px; font-weight: 600; cursor: pointer; margin-top: 10px; font-size: 0.8rem;">+ Add Lyrics</button>
                </div>
            `;
            const addTrigger = document.getElementById('add-lyrics-trigger');
            if (addTrigger) {
                addTrigger.addEventListener('click', () => {
                    openLyricsModal(song);
                });
            }
            syncFSLyrics();
        }
    });
}

function renderLyrics(lyricsText) {
    const lyricsContainer = document.getElementById('lyrics');
    if (!lyricsContainer) return;
    lyricsContainer.innerHTML = '';
    currentLyricsArray = [];

    const lines = lyricsText.split('\n');
    let hasTimestamps = false;

    lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) return;

        // Matches [01:23.45] or [01:23]
        const match = trimmed.match(/^\[(\d+):(\d+(?:\.\d+)?)\](.*)/);
        if (match) {
            hasTimestamps = true;
            const time = parseInt(match[1], 10) * 60 + parseFloat(match[2]);
            const text = match[3].trim();
            currentLyricsArray.push({ time, text });
        } else {
            currentLyricsArray.push({ time: -1, text: trimmed });
        }
    });

    if (hasTimestamps) {
        // Sort timestamped lyrics
        currentLyricsArray.sort((a, b) => a.time - b.time);
        
        currentLyricsArray.forEach((item, idx) => {
            const lineEl = document.createElement('div');
            lineEl.className = 'lyric-line';
            lineEl.id = `lyric-line-${idx}`;
            lineEl.textContent = item.text || '🎵';
            lyricsContainer.appendChild(lineEl);
        });
    } else {
        // Just render plain text
        currentLyricsArray.forEach(item => {
            const lineEl = document.createElement('div');
            lineEl.className = 'lyric-line-plain';
            lineEl.textContent = item.text;
            lyricsContainer.appendChild(lineEl);
        });
        currentLyricsArray = []; // Clear array so timeupdate is ignored
    }
    
    // Add edit button at the bottom of lyrics for crowdsourcing updates
    const editBtn = document.createElement('div');
    editBtn.style.cssText = 'text-align: center; margin-top: 15px; border-top: 1px solid var(--border-color); padding-top: 10px;';
    editBtn.innerHTML = `<button id="edit-lyrics-trigger" style="background: none; border: none; color: var(--text-secondary); cursor: pointer; font-size: 0.8rem; text-decoration: underline;">Edit lyrics</button>`;
    lyricsContainer.appendChild(editBtn);

    const editTrigger = document.getElementById('edit-lyrics-trigger');
    if (editTrigger) {
        editTrigger.addEventListener('click', () => {
            const currentSong = currentPlaylist[index];
            if (currentSong) {
                openLyricsModal(currentSong, lyricsText);
            }
        });
    }

    // Sync HTML to full screen player
    syncFSLyrics();
}

// Override syncFSLyrics to copy the innerHTML (including classes and highlights)
syncFSLyrics = function() {
    const mainLyricsEl = document.getElementById('lyrics');
    const fsLyricsContent = document.getElementById('fs-lyrics-content');
    if (mainLyricsEl && fsLyricsContent) {
        fsLyricsContent.innerHTML = mainLyricsEl.innerHTML;
        
        // Re-bind click event on full screen for edit lyrics
        const fsEditBtn = fsLyricsContent.querySelector('#edit-lyrics-trigger');
        if (fsEditBtn) {
            fsEditBtn.addEventListener('click', () => {
                const currentSong = currentPlaylist[index];
                if (currentSong) {
                    // Close FS player to show modal properly
                    const fsCloseBtn = document.getElementById('fs-close-btn');
                    if (fsCloseBtn) fsCloseBtn.click();
                    // Load lyrics from Firebase or local and open
                    const songKey = getSongKey(currentSong.title);
                    database.ref('lyrics/' + songKey).once('value').then(snap => {
                        const txt = snap.val() || (window.localLyrics && window.localLyrics[currentSong.title]) || '';
                        openLyricsModal(currentSong, txt);
                    });
                }
            });
        }
    }
};

let lastActiveIdx = -1;
function syncLyricsHighlight(currentTime) {
    if (currentLyricsArray.length === 0) return;

    let activeIdx = -1;
    for (let i = 0; i < currentLyricsArray.length; i++) {
        if (currentTime >= currentLyricsArray[i].time) {
            activeIdx = i;
        } else {
            break;
        }
    }

    if (activeIdx !== -1 && activeIdx !== lastActiveIdx) {
        lastActiveIdx = activeIdx;

        // 1. Highlight main lyrics container lines
        const mainContainer = document.getElementById('lyrics');
        if (mainContainer) {
            mainContainer.querySelectorAll('.lyric-line').forEach(el => el.classList.remove('active-lyric-line'));
            const activeLine = mainContainer.querySelector(`#lyric-line-${activeIdx}`);
            if (activeLine) {
                activeLine.classList.add('active-lyric-line');
                
                // Smooth scroll to center the active line
                const containerHeight = mainContainer.clientHeight;
                const lineOffset = activeLine.offsetTop;
                const lineHeight = activeLine.clientHeight;
                mainContainer.scrollTo({
                    top: lineOffset - (containerHeight / 2) + (lineHeight / 2),
                    behavior: 'smooth'
                });
            }
        }

        // 2. Highlight full screen lyrics container lines
        const fsContainer = document.getElementById('fs-lyrics-content');
        if (fsContainer) {
            fsContainer.querySelectorAll('.lyric-line').forEach(el => el.classList.remove('active-lyric-line'));
            const activeLineFs = fsContainer.querySelector(`#lyric-line-${activeIdx}`);
            if (activeLineFs) {
                activeLineFs.classList.add('active-lyric-line');
                
                const containerHeight = fsContainer.clientHeight;
                const lineOffset = activeLineFs.offsetTop;
                const lineHeight = activeLineFs.clientHeight;
                fsContainer.scrollTo({
                    top: lineOffset - (containerHeight / 2) + (lineHeight / 2),
                    behavior: 'smooth'
                });
            }
        }
    }
}

function openLyricsModal(song, currentText = '') {
    lyricsModalSong = song;
    if (lyricsModal && modalOverlay && lyricsModalSongTitle && lyricsInputTextarea) {
        lyricsModalSongTitle.textContent = song.title;
        lyricsInputTextarea.value = currentText;
        lyricsModal.style.display = 'block';
        modalOverlay.style.display = 'block';
    }
}

function closeLyricsModal() {
    if (lyricsModal && modalOverlay) {
        lyricsModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    }
    lyricsModalSong = null;
    if (lyricsInputTextarea) lyricsInputTextarea.value = '';
}

if (closeLyricsModalBtn) {
    closeLyricsModalBtn.addEventListener('click', closeLyricsModal);
}

if (saveLyricsBtn && lyricsInputTextarea) {
    saveLyricsBtn.addEventListener('click', () => {
        const text = lyricsInputTextarea.value.trim();
        if (text && lyricsModalSong) {
            const songKey = getSongKey(lyricsModalSong.title);
            
            // Save to Firebase database
            database.ref('lyrics/' + songKey).set(text).then(() => {
                showToast(`Lyrics saved for "${lyricsModalSong.title}"!`);
                renderLyrics(text);
                closeLyricsModal();
            }).catch(err => {
                console.error("Error saving lyrics to Firebase: ", err);
                showToast("Could not save lyrics to database.");
            });
        } else {
            showToast("Please enter some lyrics first!");
        }
    });
}

// --- FEATURE: Sidebar Collapsible Accordion ---
function initAccordion() {
    // 1. Collapsible Sidebar Sections
    document.querySelectorAll('.sidebar-playlists').forEach(el => {
        const header = el.querySelector('.playlist-header');
        if (header) {
            header.addEventListener('click', (e) => {
                // Ignore if clicked on plus sign/create button
                if (e.target.closest('#create-playlist-btn') || e.target.closest('.playlist-toggle-btn')) return;
                el.classList.toggle('collapsed');
            });
        }
    });
}

// Initialize on load
window.addEventListener('load', () => {
    initAccordion();
    initCommentsSection();
});

// --- FEATURE: Firebase Real-Time Live Comments ---
let currentCommentsRef = null;
let currentCommentsListener = null;

function loadSongComments(song) {
    const commentsList = document.getElementById('comments-list');
    const commentCountEl = document.getElementById('comment-count');
    if (!commentsList || !commentCountEl) return;

    commentsList.innerHTML = `<div style="text-align: center; padding: 20px; font-size: 0.85rem; color: var(--text-secondary);"><i class="fas fa-spinner fa-spin"></i> Loading comments...</div>`;
    commentCountEl.textContent = '0';

    const songKey = getSongKey(song.title);
    const commentsRef = database.ref('comments/' + songKey);

    // Detach previous listener if exists
    if (currentCommentsRef && currentCommentsListener) {
        currentCommentsRef.off('value', currentCommentsListener);
    }

    currentCommentsRef = commentsRef;
    currentCommentsListener = commentsRef.orderByChild('timestamp').on('value', (snapshot) => {
        const commentsData = [];
        snapshot.forEach((childSnapshot) => {
            commentsData.push({
                key: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        renderComments(commentsData);
    }, (error) => {
        console.error("Firebase comments error:", error);
        commentsList.innerHTML = `<div class="no-comments">Error loading comments. Please try again.</div>`;
    });
}

function submitComment() {
    const commentTextEl = document.getElementById('comment-text');
    const commentNicknameEl = document.getElementById('comment-nickname');
    if (!commentTextEl || !commentNicknameEl) return;

    const text = commentTextEl.value.trim();
    let nickname = commentNicknameEl.value.trim();

    if (!text) {
        showToast("Please enter a comment!");
        return;
    }

    // Fallback creative name if empty
    if (!nickname) {
        nickname = generateRandomNickname();
        commentNicknameEl.value = nickname;
    }

    // Save nickname to localStorage
    localStorage.setItem('commentNickname', nickname);

    const currentSong = currentPlaylist[index];
    if (!currentSong) return;

    const songKey = getSongKey(currentSong.title);
    const commentsRef = database.ref('comments/' + songKey);
    const userId = generateUserId();

    const commentData = {
        name: nickname,
        text: text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        userId: userId
    };

    commentsRef.push(commentData).then(() => {
        commentTextEl.value = '';
        // Scroll comments to bottom
        setTimeout(() => {
            const commentsList = document.getElementById('comments-list');
            if (commentsList) {
                commentsList.scrollTop = commentsList.scrollHeight;
            }
        }, 100);
    }).catch((err) => {
        console.error("Error submitting comment:", err);
        showToast("Failed to post comment. Try again.");
    });
}

function generateRandomNickname() {
    const adjectives = [
        'Rocking', 'Melodious', 'Soulful', 'Groovy', 'Classic', 
        'Harmonic', 'Rhythmic', 'Vibrant', 'Acoustic', 'Electric',
        'Beat', 'Symphonic', 'Dreamy', 'Sukoon', 'Retro'
    ];
    const nouns = [
        'Lover', 'Listener', 'Composer', 'Singer', 'Vibe', 
        'Rider', 'DJ', 'Maestro', 'Fan', 'Beat', 
        'Wanderer', 'Soul', 'Musician', 'Artist', 'Heart'
    ];
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const randNum = Math.floor(100 + Math.random() * 900); // 3-digit number
    return `${adj}_${noun}_${randNum}`;
}

function renderComments(commentsData) {
    const commentsList = document.getElementById('comments-list');
    const commentCountEl = document.getElementById('comment-count');
    if (!commentsList || !commentCountEl) return;

    commentsList.innerHTML = '';
    commentCountEl.textContent = commentsData.length;

    if (commentsData.length === 0) {
        commentsList.innerHTML = `<div class="no-comments">No comments yet. Be the first to share your thoughts! 💬</div>`;
        return;
    }

    const currentUserId = generateUserId();

    commentsData.forEach((comment) => {
        const isMyComment = comment.userId === currentUserId;
        const commentEl = document.createElement('div');
        commentEl.className = `comment-item ${isMyComment ? 'my-comment' : ''}`;
        
        // Avatar letter
        const firstLetter = comment.name ? comment.name.charAt(0).toUpperCase() : '?';
        const avatarBgColor = getHashColor(comment.name || 'Anonymous');

        // Human-readable timestamp
        const timeStr = formatRelativeTime(comment.timestamp);

        commentEl.innerHTML = `
            <div class="comment-avatar" style="background-color: ${avatarBgColor};">
                ${firstLetter}
            </div>
            <div class="comment-content">
                <div class="comment-header">
                    <span class="comment-author-name">${escapeHtml(comment.name)}</span>
                    <span class="comment-timestamp" title="${new Date(comment.timestamp).toLocaleString()}">${timeStr}</span>
                </div>
                <div class="comment-text-body">
                    ${escapeHtml(comment.text)}
                </div>
            </div>
        `;
        commentsList.appendChild(commentEl);
    });

    // Auto scroll to bottom
    commentsList.scrollTop = commentsList.scrollHeight;
}

function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function getHashColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h = Math.abs(hash % 360);
    const s = 65; // Saturation 65%
    const l = 45; // Lightness 45%
    return `hsl(${h}, ${s}%, ${l}%)`;
}

function formatRelativeTime(timestamp) {
    if (!timestamp) return 'just now';
    const diff = Date.now() - timestamp;
    const secs = Math.floor(diff / 1000);
    if (secs < 60) return 'just now';
    const mins = Math.floor(secs / 60);
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days === 1) return 'yesterday';
    return `${days}d ago`;
}

function initCommentsSection() {
    const submitBtn = document.getElementById('submit-comment');
    const commentNicknameEl = document.getElementById('comment-nickname');
    const commentTextEl = document.getElementById('comment-text');

    if (submitBtn) {
        submitBtn.addEventListener('click', submitComment);
    }

    if (commentTextEl) {
        commentTextEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                submitComment();
            }
        });
    }

    if (commentNicknameEl) {
        const savedNickname = localStorage.getItem('commentNickname');
        if (savedNickname) {
            commentNicknameEl.value = savedNickname;
        }
    }

    // Load initial comments for active song
    const currentSong = currentPlaylist[index];
    if (currentSong) {
        loadSongComments(currentSong);
    }
}
