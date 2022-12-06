alert('test');

let song1 = document.getElementById('song1');
let song2 = document.getElementById('song2');

let song1Button = document.getElementById('song1Button');
let song2Button = document.getElementById('song2Button');

let randomChoiceA;
let randomChoiceB;

let leaderboard = document.getElementById('leaderboard');
let leaderboardItem = document.getElementsByClassName('leaderboardItem')

let songs = [
 {
   "songID": 1,
   "songTitle": "Supercut",
   "artistName": "Lorde",
   "albumTitle": "Melodrama",
   "albumArt": "Melodrama.png",
   "songRating": 1000
 },
 {
   "songID": 2,
   "songTitle": "This Hell",
   "artistName": "Rina Sawayama",
   "albumTitle": "Hold The Girl",
   "albumArt": "HoldTheGirl.png",
   "songRating": 1000
 },
 {
   "songID": 3,
   "songTitle": "Used To Know Me",
   "artistName": "Charli XCX",
   "albumTitle": "Crash",
   "albumArt": "Crash.png",
   "songRating": 1000
 },
 {
   "songID": 4,
   "songTitle": "Anti-Hero",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 5,
   "songTitle": "You're On Your Own, Kid",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 6,
   "songTitle": "Yuck",
   "artistName": "Charli XCX",
   "albumTitle": "Crash",
   "albumArt": "Crash.png",
   "songRating": 1000
 },
 {
   "songID": 7,
   "songTitle": "Graceland Too",
   "artistName": "Phoebe Bridgers",
   "albumTitle": "Punisher",
   "albumArt": "Punisher.png",
   "songRating": 1000
 },
 {
   "songID": 8,
   "songTitle": "Silk Chiffon",
   "artistName": "MUNA",
   "albumTitle": "MUNA",
   "albumArt": "MUNA.png",
   "songRating": 1000
 },
 {
   "songID": 9,
   "songTitle": "That's Where I Am",
   "artistName": "Maggie Rogers",
   "albumTitle": "Surrender",
   "albumArt": "Surrender.png",
   "songRating": 1000
 },
 {
   "songID": 10,
   "songTitle": "What I Want",
   "artistName": "MUNA",
   "albumTitle": "MUNA",
   "albumArt": "MUNA.png",
   "songRating": 1000
 },
 {
   "songID": 11,
   "songTitle": "Beg For You (Feat. Rina Sawayama)",
   "artistName": "Charli XCX",
   "albumTitle": "Crash",
   "albumArt": "Crash.png",
   "songRating": 1000
 },
 {
   "songID": 12,
   "songTitle": "Good Ones",
   "artistName": "Charli XCX",
   "albumTitle": "Crash",
   "albumArt": "Crash.png",
   "songRating": 1000
 },
 {
   "songID": 13,
   "songTitle": "Mastermind",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 14,
   "songTitle": "Midnight Rain",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 15,
   "songTitle": "Western Wind",
   "artistName": "Carly Rae Jepsen",
   "albumTitle": "The Loneliest Time",
   "albumArt": "TheLoneliestTime.png",
   "songRating": 1000
 },
 {
   "songID": 16,
   "songTitle": "Snow On The Beach (Feat. Lana Del Rey)",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 17,
   "songTitle": "Cuff It",
   "artistName": "Beyoncé",
   "albumTitle": "Renaissance",
   "albumArt": "Renaissance.png",
   "songRating": 1000
 },
 {
   "songID": 18,
   "songTitle": "Liability",
   "artistName": "Lorde",
   "albumTitle": "Melodrama",
   "albumArt": "Melodrama.png",
   "songRating": 1000
 },
 {
   "songID": 19,
   "songTitle": "Break My Soul",
   "artistName": "Beyoncé",
   "albumTitle": "Renaissance",
   "albumArt": "Renaissance.png",
   "songRating": 1000
 },
 {
   "songID": 20,
   "songTitle": "Green Light",
   "artistName": "Lorde",
   "albumTitle": "Melodrama",
   "albumArt": "Melodrama.png",
   "songRating": 1000
 },
 {
   "songID": 21,
   "songTitle": "Coconuts",
   "artistName": "Kim Petras",
   "albumTitle": "Coconuts",
   "albumArt": "Coconuts.png",
   "songRating": 1000
 },
 {
   "songID": 22,
   "songTitle": "No One Dies From Love",
   "artistName": "Tove Lo",
   "albumTitle": "Dirt Femme",
   "albumArt": "DirtFemme.png",
   "songRating": 1000
 },
 {
   "songID": 23,
   "songTitle": "Talking To Yourself",
   "artistName": "Carly Rae Jepsen",
   "albumTitle": "The Loneliest Time",
   "albumArt": "TheLoneliestTime.png",
   "songRating": 1000
 },
 {
   "songID": 24,
   "songTitle": "Head On Fire",
   "artistName": "Griff",
   "albumTitle": "Head On Fire",
   "albumArt": "HeadOnFire.png",
   "songRating": 1000
 },
 {
   "songID": 25,
   "songTitle": "Lightning",
   "artistName": "Charli XCX",
   "albumTitle": "Crash",
   "albumArt": "Crash.png",
   "songRating": 1000
 },
 {
   "songID": 26,
   "songTitle": "Bunny Is A Rider",
   "artistName": "Caroline Polachek",
   "albumTitle": "Bunny Is A Rider",
   "albumArt": "BunnyIsARider.png",
   "songRating": 1000
 },
 {
   "songID": 27,
   "songTitle": "Perfect Places",
   "artistName": "Lorde",
   "albumTitle": "Melodrama",
   "albumArt": "Melodrama.png",
   "songRating": 1000
 },
 {
   "songID": 28,
   "songTitle": "Solar Power",
   "artistName": "Lorde",
   "albumTitle": "Solar Power",
   "albumArt": "SolarPower.png",
   "songRating": 1000
 },
 {
   "songID": 29,
   "songTitle": "I Know The End",
   "artistName": "Phoebe Bridgers",
   "albumTitle": "Punisher",
   "albumArt": "Punisher.png",
   "songRating": 1000
 },
 {
   "songID": 30,
   "songTitle": "Twice",
   "artistName": "Charli XCX",
   "albumTitle": "Crash",
   "albumArt": "Crash.png",
   "songRating": 1000
 },
 {
   "songID": 31,
   "songTitle": "Mood Ring",
   "artistName": "Lorde",
   "albumTitle": "Solar Power",
   "albumArt": "SolarPower.png",
   "songRating": 1000
 },
 {
   "songID": 32,
   "songTitle": "Hard Feelings/Loveless",
   "artistName": "Lorde",
   "albumTitle": "Melodrama",
   "albumArt": "Melodrama.png",
   "songRating": 1000
 },
 {
   "songID": 33,
   "songTitle": "New Shapes (Feat. Christine And The Queens And Caroline Polachek)",
   "artistName": "Charli XCX",
   "albumTitle": "Crash",
   "albumArt": "Crash.png",
   "songRating": 1000
 },
 {
   "songID": 34,
   "songTitle": "Hold The Girl",
   "artistName": "Rina Sawayama",
   "albumTitle": "Hold The Girl",
   "albumArt": "HoldTheGirl.png",
   "songRating": 1000
 },
 {
   "songID": 35,
   "songTitle": "Heated",
   "artistName": "Beyoncé",
   "albumTitle": "Renaissance",
   "albumArt": "Renaissance.png",
   "songRating": 1000
 },
 {
   "songID": 36,
   "songTitle": "Secrets From A Girl (Who's Seen It All)",
   "artistName": "Lorde",
   "albumTitle": "Solar Power",
   "albumArt": "SolarPower.png",
   "songRating": 1000
 },
 {
   "songID": 37,
   "songTitle": "The Louvre",
   "artistName": "Lorde",
   "albumTitle": "Melodrama",
   "albumArt": "Melodrama.png",
   "songRating": 1000
 },
 {
   "songID": 38,
   "songTitle": "Energy (Feat. Beam)",
   "artistName": "Beyoncé",
   "albumTitle": "Renaissance",
   "albumArt": "Renaissance.png",
   "songRating": 1000
 },
 {
   "songID": 39,
   "songTitle": "Free Yourself",
   "artistName": "Jessie Ware",
   "albumTitle": "Free Yourself",
   "albumArt": "FreeYourself.png",
   "songRating": 1000
 },
 {
   "songID": 40,
   "songTitle": "Catch Me In The Air",
   "artistName": "Rina Sawayama",
   "albumTitle": "Hold The Girl",
   "albumArt": "HoldTheGirl.png",
   "songRating": 1000
 },
 {
   "songID": 41,
   "songTitle": "Stoned At The Nail Salon",
   "artistName": "Lorde",
   "albumTitle": "Solar Power",
   "albumArt": "SolarPower.png",
   "songRating": 1000
 },
 {
   "songID": 42,
   "songTitle": "Virgo's Groove",
   "artistName": "Beyoncé",
   "albumTitle": "Renaissance",
   "albumArt": "Renaissance.png",
   "songRating": 1000
 },
 {
   "songID": 43,
   "songTitle": "Run Away With Me",
   "artistName": "Carly Rae Jepsen",
   "albumTitle": "Emotion",
   "albumArt": "Emotion.png",
   "songRating": 1000
 },
 {
   "songID": 44,
   "songTitle": "The Path",
   "artistName": "Lorde",
   "albumTitle": "Solar Power",
   "albumArt": "SolarPower.png",
   "songRating": 1000
 },
 {
   "songID": 45,
   "songTitle": "Fallen Fruit",
   "artistName": "Lorde",
   "albumTitle": "Solar Power",
   "albumArt": "SolarPower.png",
   "songRating": 1000
 },
 {
   "songID": 46,
   "songTitle": "Alien Superstar",
   "artistName": "Beyoncé",
   "albumTitle": "Renaissance",
   "albumArt": "Renaissance.png",
   "songRating": 1000
 },
 {
   "songID": 47,
   "songTitle": "Motion Sickness",
   "artistName": "Phoebe Bridgers",
   "albumTitle": "Stranger In The Alps",
   "albumArt": "StrangerInTheAlps.png",
   "songRating": 1000
 },
 {
   "songID": 48,
   "songTitle": "I'm That Girl",
   "artistName": "Beyoncé",
   "albumTitle": "Renaissance",
   "albumArt": "Renaissance.png",
   "songRating": 1000
 },
 {
   "songID": 49,
   "songTitle": "Question...?",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 50,
   "songTitle": "Sober",
   "artistName": "Lorde",
   "albumTitle": "Melodrama",
   "albumArt": "Melodrama.png",
   "songRating": 1000
 },
 {
   "songID": 51,
   "songTitle": "Baby",
   "artistName": "Charli XCX",
   "albumTitle": "Crash",
   "albumArt": "Crash.png",
   "songRating": 1000
 },
 {
   "songID": 52,
   "songTitle": "Beach House",
   "artistName": "Carly Rae Jepsen",
   "albumTitle": "The Loneliest Time",
   "albumArt": "TheLoneliestTime.png",
   "songRating": 1000
 },
 {
   "songID": 53,
   "songTitle": "Don’T Forget",
   "artistName": "Sky Ferreira",
   "albumTitle": "Don't Forget",
   "albumArt": "Don'tForget.png",
   "songRating": 1000
 },
 {
   "songID": 54,
   "songTitle": "Frankenstein",
   "artistName": "Rina Sawayama",
   "albumTitle": "Hold The Girl",
   "albumArt": "HoldTheGirl.png",
   "songRating": 1000
 },
 {
   "songID": 55,
   "songTitle": "Bejeweled",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 56,
   "songTitle": "About Damn Time",
   "artistName": "Lizzo",
   "albumTitle": "Special",
   "albumArt": "Special.png",
   "songRating": 1000
 },
 {
   "songID": 57,
   "songTitle": "Ribs",
   "artistName": "Lorde",
   "albumTitle": "Pure Heroine",
   "albumArt": "PureHeroine.png",
   "songRating": 1000
 },
 {
   "songID": 58,
   "songTitle": "All Too Well (10 Minute Version) (Taylor's Version) (From The Vault)",
   "artistName": "Taylor Swift",
   "albumTitle": "Red (Taylor's Version)",
   "albumArt": "Red(Taylor'sVersion).png",
   "songRating": 1000
 },
 {
   "songID": 59,
   "songTitle": "The Great War",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 60,
   "songTitle": "Thique",
   "artistName": "Beyoncé",
   "albumTitle": "Renaissance",
   "albumArt": "Renaissance.png",
   "songRating": 1000
 },
 {
   "songID": 61,
   "songTitle": "Want Want",
   "artistName": "Maggie Rogers",
   "albumTitle": "Surrender",
   "albumArt": "Surrender.png",
   "songRating": 1000
 },
 {
   "songID": 62,
   "songTitle": "Homemade Dynamite",
   "artistName": "Lorde",
   "albumTitle": "Melodrama",
   "albumArt": "Melodrama.png",
   "songRating": 1000
 },
 {
   "songID": 63,
   "songTitle": "California",
   "artistName": "Lorde",
   "albumTitle": "Solar Power",
   "albumArt": "SolarPower.png",
   "songRating": 1000
 },
 {
   "songID": 64,
   "songTitle": "Comme Des Garçons (Like The Boys)",
   "artistName": "Rina Sawayama",
   "albumTitle": "SAWAYAMA",
   "albumArt": "SAWAYAMA.png",
   "songRating": 1000
 },
 {
   "songID": 65,
   "songTitle": "King",
   "artistName": "Florence + The Machine",
   "albumTitle": "Dance Fever",
   "albumArt": "DanceFever.png",
   "songRating": 1000
 },
 {
   "songID": 66,
   "songTitle": "Church Girl",
   "artistName": "Beyoncé",
   "albumTitle": "Renaissance",
   "albumArt": "Renaissance.png",
   "songRating": 1000
 },
 {
   "songID": 67,
   "songTitle": "Crash",
   "artistName": "Charli XCX",
   "albumTitle": "Crash",
   "albumArt": "Crash.png",
   "songRating": 1000
 },
 {
   "songID": 68,
   "songTitle": "Hold Me Closer",
   "artistName": "Cornelia Jakobs",
   "albumTitle": "Hold Me Closer",
   "albumArt": "HoldMeCloser.png",
   "songRating": 1000
 },
 {
   "songID": 69,
   "songTitle": "XS",
   "artistName": "Rina Sawayama",
   "albumTitle": "SAWAYAMA",
   "albumArt": "SAWAYAMA.png",
   "songRating": 1000
 },
 {
   "songID": 70,
   "songTitle": "Overdrive",
   "artistName": "Maggie Rogers",
   "albumTitle": "Surrender",
   "albumArt": "Surrender.png",
   "songRating": 1000
 },
 {
   "songID": 71,
   "songTitle": "Labyrinth",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 72,
   "songTitle": "Kyoto",
   "artistName": "Phoebe Bridgers",
   "albumTitle": "Punisher",
   "albumArt": "Punisher.png",
   "songRating": 1000
 },
 {
   "songID": 73,
   "songTitle": "Bigger Than The Whole Sky",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 74,
   "songTitle": "We Don'T Talk About Bruno",
   "artistName": "Carolina Gaitán - La Gaita",
   "albumTitle": "Encanto",
   "albumArt": "Encanto.png",
   "songRating": 1000
 },
 {
   "songID": 75,
   "songTitle": "Vigilante Shit",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 76,
   "songTitle": "Hold No Grudge - Bonus Track",
   "artistName": "Lorde",
   "albumTitle": "Solar Power",
   "albumArt": "SolarPower.png",
   "songRating": 1000
 },
 {
   "songID": 77,
   "songTitle": "Cozy",
   "artistName": "Beyoncé",
   "albumTitle": "Renaissance",
   "albumArt": "Renaissance.png",
   "songRating": 1000
 },
 {
   "songID": 78,
   "songTitle": "Leader Of A New Regime",
   "artistName": "Lorde",
   "albumTitle": "Solar Power",
   "albumArt": "SolarPower.png",
   "songRating": 1000
 },
 {
   "songID": 79,
   "songTitle": "Sweet Nothing",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 80,
   "songTitle": "The Man With The Axe",
   "artistName": "Lorde",
   "albumTitle": "Solar Power",
   "albumArt": "SolarPower.png",
   "songRating": 1000
 },
 {
   "songID": 81,
   "songTitle": "Home By Now",
   "artistName": "MUNA",
   "albumTitle": "MUNA",
   "albumArt": "MUNA.png",
   "songRating": 1000
 },
 {
   "songID": 82,
   "songTitle": "All Up In Your Mind",
   "artistName": "Beyoncé",
   "albumTitle": "Renaissance",
   "albumArt": "Renaissance.png",
   "songRating": 1000
 },
 {
   "songID": 83,
   "songTitle": "Pure/Honey",
   "artistName": "Beyoncé",
   "albumTitle": "Renaissance",
   "albumArt": "Renaissance.png",
   "songRating": 1000
 },
 {
   "songID": 84,
   "songTitle": "Cate’s Brother",
   "artistName": "Maisie Peters",
   "albumTitle": "Cate’s Brother",
   "albumArt": "Cate’sBrother.png",
   "songRating": 1000
 },
 {
   "songID": 85,
   "songTitle": "Oceanic Feeling",
   "artistName": "Lorde",
   "albumTitle": "Solar Power",
   "albumArt": "SolarPower.png",
   "songRating": 1000
 },
 {
   "songID": 86,
   "songTitle": "Garden Song",
   "artistName": "Phoebe Bridgers",
   "albumTitle": "Punisher",
   "albumArt": "Punisher.png",
   "songRating": 1000
 },
 {
   "songID": 87,
   "songTitle": "This Love (Taylor’s Version)",
   "artistName": "Taylor Swift",
   "albumTitle": "1989 (Taylor's Version)",
   "albumArt": "1989(Taylor'sVersion).png",
   "songRating": 1000
 },
 {
   "songID": 88,
   "songTitle": "Writer In The Dark",
   "artistName": "Lorde",
   "albumTitle": "Melodrama",
   "albumArt": "Melodrama.png",
   "songRating": 1000
 },
 {
   "songID": 89,
   "songTitle": "Right Where You Left Me - Bonus Track",
   "artistName": "Taylor Swift",
   "albumTitle": "Evermore",
   "albumArt": "Evermore.png",
   "songRating": 1000
 },
 {
   "songID": 90,
   "songTitle": "America Has A Problem",
   "artistName": "Beyoncé",
   "albumTitle": "Renaissance",
   "albumArt": "Renaissance.png",
   "songRating": 1000
 },
 {
   "songID": 91,
   "songTitle": "Phantom",
   "artistName": "Rina Sawayama",
   "albumTitle": "Hold The Girl",
   "albumArt": "HoldTheGirl.png",
   "songRating": 1000
 },
 {
   "songID": 92,
   "songTitle": "Maroon",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 93,
   "songTitle": "Deja Vu",
   "artistName": "Olivia Rodrigo",
   "albumTitle": "SOUR",
   "albumArt": "SOUR.png",
   "songRating": 1000
 },
 {
   "songID": 94,
   "songTitle": "Heads Will Roll",
   "artistName": "Yeah Yeah Yeahs",
   "albumTitle": "It's Blitz!",
   "albumArt": "It'sBlitz!.png",
   "songRating": 1000
 },
 {
   "songID": 95,
   "songTitle": "Minor Feelings",
   "artistName": "Rina Sawayama",
   "albumTitle": "Hold The Girl",
   "albumArt": "HoldTheGirl.png",
   "songRating": 1000
 },
 {
   "songID": 96,
   "songTitle": "Helen Of Troy - Bonus Track",
   "artistName": "Lorde",
   "albumTitle": "Solar Power",
   "albumArt": "SolarPower.png",
   "songRating": 1000
 },
 {
   "songID": 97,
   "songTitle": "Move (Feat. Grace Jones & Tems)",
   "artistName": "Beyoncé",
   "albumTitle": "Renaissance",
   "albumArt": "Renaissance.png",
   "songRating": 1000
 },
 {
   "songID": 98,
   "songTitle": "Why Am I Like This?",
   "artistName": "Orla Gartland",
   "albumTitle": "Why Am I Like This?",
   "albumArt": "WhyAmILikeThis?.png",
   "songRating": 1000
 },
 {
   "songID": 99,
   "songTitle": "Brooklyn",
   "artistName": "Maisie Peters",
   "albumTitle": "You Signed Up For This",
   "albumArt": "YouSignedUpForThis.png",
   "songRating": 1000
 },
 {
   "songID": 100,
   "songTitle": "The Loneliest Time (Feat. Rufus Wainwright)",
   "artistName": "Carly Rae Jepsen",
   "albumTitle": "The Loneliest Time",
   "albumArt": "TheLoneliestTime.png",
   "songRating": 1000
 },
 {
   "songID": 101,
   "songTitle": "Cruel Summer",
   "artistName": "Taylor Swift",
   "albumTitle": "Lover",
   "albumArt": "Lover.png",
   "songRating": 1000
 },
 {
   "songID": 102,
   "songTitle": "Karma",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 103,
   "songTitle": "Lavender Haze",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 104,
   "songTitle": "What You Want",
   "artistName": "Cast Of Legally Blonde",
   "albumTitle": "Legally Blonde The Musical (Original Broadway Cast Recording)",
   "albumArt": "LegallyBlondeTheMusical(OriginalBroadwayCastRecording).png",
   "songRating": 1000
 },
 {
   "songID": 105,
   "songTitle": "Plastic Off The Sofa",
   "artistName": "Beyoncé",
   "albumTitle": "Renaissance",
   "albumArt": "Renaissance.png",
   "songRating": 1000
 },
 {
   "songID": 106,
   "songTitle": "That Funny Feeling",
   "artistName": "Bo Burnham",
   "albumTitle": "Inside",
   "albumArt": "Inside.png",
   "songRating": 1000
 },
 {
   "songID": 107,
   "songTitle": "Summer Renaissance",
   "artistName": "Beyoncé",
   "albumTitle": "Renaissance",
   "albumArt": "Renaissance.png",
   "songRating": 1000
 },
 {
   "songID": 108,
   "songTitle": "Dominoes",
   "artistName": "Lorde",
   "albumTitle": "Solar Power",
   "albumArt": "SolarPower.png",
   "songRating": 1000
 },
 {
   "songID": 109,
   "songTitle": "Happier Than Ever",
   "artistName": "Billie Eilish",
   "albumTitle": "Happier Than Ever",
   "albumArt": "HappierThanEver.png",
   "songRating": 1000
 },
 {
   "songID": 110,
   "songTitle": "2 Be Loved (Am I Ready)",
   "artistName": "Lizzo",
   "albumTitle": "Special",
   "albumArt": "Special.png",
   "songRating": 1000
 },
 {
   "songID": 111,
   "songTitle": "Big Star",
   "artistName": "Lorde",
   "albumTitle": "Solar Power",
   "albumArt": "SolarPower.png",
   "songRating": 1000
 },
 {
   "songID": 112,
   "songTitle": "Anywhere With You",
   "artistName": "Maggie Rogers",
   "albumTitle": "Surrender",
   "albumArt": "Surrender.png",
   "songRating": 1000
 },
 {
   "songID": 113,
   "songTitle": "Good 4 U",
   "artistName": "Olivia Rodrigo",
   "albumTitle": "SOUR",
   "albumArt": "SOUR.png",
   "songRating": 1000
 },
 {
   "songID": 114,
   "songTitle": "Every Rule",
   "artistName": "Charli XCX",
   "albumTitle": "Crash",
   "albumArt": "Crash.png",
   "songRating": 1000
 },
 {
   "songID": 115,
   "songTitle": "Traitor",
   "artistName": "Olivia Rodrigo",
   "albumTitle": "SOUR",
   "albumArt": "SOUR.png",
   "songRating": 1000
 },
 {
   "songID": 116,
   "songTitle": "Paris",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 117,
   "songTitle": "Read My Mind",
   "artistName": "Rebecca Black",
   "albumTitle": "Read My Mind",
   "albumArt": "ReadMyMind.png",
   "songRating": 1000
 },
 {
   "songID": 118,
   "songTitle": "Cure For Me",
   "artistName": "Aurora",
   "albumTitle": "The Gods We Can Touch",
   "albumArt": "TheGodsWeCanTouch.png",
   "songRating": 1000
 },
 {
   "songID": 119,
   "songTitle": "Brutal",
   "artistName": "Olivia Rodrigo",
   "albumTitle": "SOUR",
   "albumArt": "SOUR.png",
   "songRating": 1000
 },
 {
   "songID": 120,
   "songTitle": "Holy (Til You Let Me Go)",
   "artistName": "Rina Sawayama",
   "albumTitle": "Hold The Girl",
   "albumArt": "HoldTheGirl.png",
   "songRating": 1000
 },
 {
   "songID": 121,
   "songTitle": "2 Die 4",
   "artistName": "Tove Lo",
   "albumTitle": "Dirt Femme",
   "albumArt": "DirtFemme.png",
   "songRating": 1000
 },
 {
   "songID": 122,
   "songTitle": "All Too Well (Taylor's Version)",
   "artistName": "Taylor Swift",
   "albumTitle": "Red (Taylor's Version)",
   "albumArt": "Red(Taylor'sVersion).png",
   "songRating": 1000
 },
 {
   "songID": 123,
   "songTitle": "Getaway Car",
   "artistName": "Taylor Swift",
   "albumTitle": "Reputation",
   "albumArt": "Reputation.png",
   "songRating": 1000
 },
 {
   "songID": 124,
   "songTitle": "Back In My Body",
   "artistName": "Maggie Rogers",
   "albumTitle": "Heard It In A Past Life",
   "albumArt": "HeardItInAPastLife.png",
   "songRating": 1000
 },
 {
   "songID": 125,
   "songTitle": "Rain On Me (With Ariana Grande)",
   "artistName": "Lady Gaga",
   "albumTitle": "Chromatica",
   "albumArt": "Chromatica.png",
   "songRating": 1000
 },
 {
   "songID": 126,
   "songTitle": "Be Sweet",
   "artistName": "Japanese Breakfast",
   "albumTitle": "Jubilee",
   "albumArt": "Jubilee.png",
   "songRating": 1000
 },
 {
   "songID": 127,
   "songTitle": "My Love",
   "artistName": "Florence + The Machine",
   "albumTitle": "Dance Fever",
   "albumArt": "DanceFever.png",
   "songRating": 1000
 },
 {
   "songID": 128,
   "songTitle": "Kind Of Girl",
   "artistName": "MUNA",
   "albumTitle": "MUNA",
   "albumArt": "MUNA.png",
   "songRating": 1000
 },
 {
   "songID": 129,
   "songTitle": "The 1",
   "artistName": "Taylor Swift",
   "albumTitle": "Folklore",
   "albumArt": "Folklore.png",
   "songRating": 1000
 },
 {
   "songID": 130,
   "songTitle": "August",
   "artistName": "Taylor Swift",
   "albumTitle": "Folklore",
   "albumArt": "Folklore.png",
   "songRating": 1000
 },
 {
   "songID": 131,
   "songTitle": "Cardigan",
   "artistName": "Taylor Swift",
   "albumTitle": "Folklore",
   "albumArt": "Folklore.png",
   "songRating": 1000
 },
 {
   "songID": 132,
   "songTitle": "Hot In It",
   "artistName": "Tiësto",
   "albumTitle": "Hot In It",
   "albumArt": "HotInIt.png",
   "songRating": 1000
 },
 {
   "songID": 133,
   "songTitle": "State Of Grace (Taylor's Version)",
   "artistName": "Taylor Swift",
   "albumTitle": "Red (Taylor's Version)",
   "albumArt": "Red(Taylor'sVersion).png",
   "songRating": 1000
 },
 {
   "songID": 134,
   "songTitle": "Zero",
   "artistName": "Yeah Yeah Yeahs",
   "albumTitle": "It's Blitz!",
   "albumArt": "It'sBlitz!.png",
   "songRating": 1000
 },
 {
   "songID": 135,
   "songTitle": "Hurricanes",
   "artistName": "Rina Sawayama",
   "albumTitle": "Hold The Girl",
   "albumArt": "HoldTheGirl.png",
   "songRating": 1000
 },
 {
   "songID": 136,
   "songTitle": "22 (Taylor's Version)",
   "artistName": "Taylor Swift",
   "albumTitle": "Red (Taylor's Version)",
   "albumArt": "Red(Taylor'sVersion).png",
   "songRating": 1000
 },
 {
   "songID": 137,
   "songTitle": "Liability (Reprise)",
   "artistName": "Lorde",
   "albumTitle": "Melodrama",
   "albumArt": "Melodrama.png",
   "songRating": 1000
 },
 {
   "songID": 138,
   "songTitle": "Washing Machine Heart",
   "artistName": "Mitski",
   "albumTitle": "Be The Cowboy",
   "albumArt": "BeTheCowboy.png",
   "songRating": 1000
 },
 {
   "songID": 139,
   "songTitle": "Runner’s High",
   "artistName": "MUNA",
   "albumTitle": "MUNA",
   "albumArt": "MUNA.png",
   "songRating": 1000
 },
 {
   "songID": 140,
   "songTitle": "Paprika",
   "artistName": "Japanese Breakfast",
   "albumTitle": "Jubilee",
   "albumArt": "Jubilee.png",
   "songRating": 1000
 },
 {
   "songID": 141,
   "songTitle": "Super Freaky Girl",
   "artistName": "Nicki Minaj",
   "albumTitle": "Super Freaky Girl",
   "albumArt": "SuperFreakyGirl.png",
   "songRating": 1000
 },
 {
   "songID": 142,
   "songTitle": "Move Me",
   "artistName": "Charli XCX",
   "albumTitle": "Crash",
   "albumArt": "Crash.png",
   "songRating": 1000
 },
 {
   "songID": 143,
   "songTitle": "Drivers License",
   "artistName": "Olivia Rodrigo",
   "albumTitle": "SOUR",
   "albumArt": "SOUR.png",
   "songRating": 1000
 },
 {
   "songID": 144,
   "songTitle": "Chinese Satellite",
   "artistName": "Phoebe Bridgers",
   "albumTitle": "Punisher",
   "albumArt": "Punisher.png",
   "songRating": 1000
 },
 {
   "songID": 145,
   "songTitle": "Constant Repeat",
   "artistName": "Charli XCX",
   "albumTitle": "Crash",
   "albumArt": "Crash.png",
   "songRating": 1000
 },
 {
   "songID": 146,
   "songTitle": "Levitating",
   "artistName": "Dua Lipa",
   "albumTitle": "Future Nostalgia",
   "albumArt": "FutureNostalgia.png",
   "songRating": 1000
 },
 {
   "songID": 147,
   "songTitle": "Would've, Could've, Should've",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 148,
   "songTitle": "Angel Baby",
   "artistName": "Troye Sivan",
   "albumTitle": "Angel Baby",
   "albumArt": "AngelBaby.png",
   "songRating": 1000
 },
 {
   "songID": 149,
   "songTitle": "Sober Ii (Melodrama)",
   "artistName": "Lorde",
   "albumTitle": "Melodrama",
   "albumArt": "Melodrama.png",
   "songRating": 1000
 },
 {
   "songID": 150,
   "songTitle": "Bad Romance",
   "artistName": "Lady Gaga",
   "albumTitle": "The Fame Monster",
   "albumArt": "TheFameMonster.png",
   "songRating": 1000
 },
 {
   "songID": 151,
   "songTitle": "Light On",
   "artistName": "Maggie Rogers",
   "albumTitle": "Heard It In A Past Life",
   "albumArt": "HeardItInAPastLife.png",
   "songRating": 1000
 },
 {
   "songID": 152,
   "songTitle": "Blank Space",
   "artistName": "Taylor Swift",
   "albumTitle": "1989",
   "albumArt": "1989.png",
   "songRating": 1000
 },
 {
   "songID": 153,
   "songTitle": "Enigma",
   "artistName": "Lady Gaga",
   "albumTitle": "Chromatica",
   "albumArt": "Chromatica.png",
   "songRating": 1000
 },
 {
   "songID": 154,
   "songTitle": "400 Lux",
   "artistName": "Lorde",
   "albumTitle": "Pure Heroine",
   "albumArt": "PureHeroine.png",
   "songRating": 1000
 },
 {
   "songID": 155,
   "songTitle": "Savior Complex",
   "artistName": "Phoebe Bridgers",
   "albumTitle": "Punisher",
   "albumArt": "Punisher.png",
   "songRating": 1000
 },
 {
   "songID": 156,
   "songTitle": "Never Get To Hold You - Bonus Track",
   "artistName": "Carly Rae Jepsen",
   "albumTitle": "Emotion",
   "albumArt": "Emotion.png",
   "songRating": 1000
 },
 {
   "songID": 157,
   "songTitle": "Your Type",
   "artistName": "Carly Rae Jepsen",
   "albumTitle": "Emotion",
   "albumArt": "Emotion.png",
   "songRating": 1000
 },
 {
   "songID": 158,
   "songTitle": "911",
   "artistName": "Lady Gaga",
   "albumTitle": "Chromatica",
   "albumArt": "Chromatica.png",
   "songRating": 1000
 },
 {
   "songID": 159,
   "songTitle": "ICU",
   "artistName": "Phoebe Bridgers",
   "albumTitle": "Punisher",
   "albumArt": "Punisher.png",
   "songRating": 1000
 },
 {
   "songID": 160,
   "songTitle": "Send My Love To John",
   "artistName": "Rina Sawayama",
   "albumTitle": "Hold The Girl",
   "albumArt": "HoldTheGirl.png",
   "songRating": 1000
 },
 {
   "songID": 161,
   "songTitle": "The Harvard Variations",
   "artistName": "Cast Of Legally Blonde",
   "albumTitle": "Legally Blonde The Musical (Original Broadway Cast Recording)",
   "albumArt": "LegallyBlondeTheMusical(OriginalBroadwayCastRecording).png",
   "songRating": 1000
 },
 {
   "songID": 162,
   "songTitle": "Hold On",
   "artistName": "Adele",
   "albumTitle": "30",
   "albumArt": "30.png",
   "songRating": 1000
 },
 {
   "songID": 163,
   "songTitle": "Elvis Song",
   "artistName": "Maisie Peters",
   "albumTitle": "You Signed Up For This",
   "albumArt": "YouSignedUpForThis.png",
   "songRating": 1000
 },
 {
   "songID": 164,
   "songTitle": "Your Age",
   "artistName": "Rina Sawayama",
   "albumTitle": "Hold The Girl",
   "albumArt": "HoldTheGirl.png",
   "songRating": 1000
 },
 {
   "songID": 165,
   "songTitle": "Imagining",
   "artistName": "Rina Sawayama",
   "albumTitle": "Hold The Girl",
   "albumArt": "HoldTheGirl.png",
   "songRating": 1000
 },
 {
   "songID": 166,
   "songTitle": "Buzzcut Season",
   "artistName": "Lorde",
   "albumTitle": "Pure Heroine",
   "albumArt": "PureHeroine.png",
   "songRating": 1000
 },
 {
   "songID": 167,
   "songTitle": "Sooner Or Later",
   "artistName": "Years & Years",
   "albumTitle": "Night Call",
   "albumArt": "NightCall.png",
   "songRating": 1000
 },
 {
   "songID": 168,
   "songTitle": "My Girl",
   "artistName": "Otis Redding",
   "albumTitle": "Otis Blue",
   "albumArt": "OtisBlue.png",
   "songRating": 1000
 },
 {
   "songID": 169,
   "songTitle": "John Hughes Movie",
   "artistName": "Maisie Peters",
   "albumTitle": "John Hughes Movie",
   "albumArt": "JohnHughesMovie.png",
   "songRating": 1000
 },
 {
   "songID": 170,
   "songTitle": "DVD Menu",
   "artistName": "Phoebe Bridgers",
   "albumTitle": "Punisher",
   "albumArt": "Punisher.png",
   "songRating": 1000
 },
 {
   "songID": 171,
   "songTitle": "All Eyes On Me",
   "artistName": "Bo Burnham",
   "albumTitle": "Inside",
   "albumArt": "Inside.png",
   "songRating": 1000
 },
 {
   "songID": 172,
   "songTitle": "Dear John",
   "artistName": "Taylor Swift",
   "albumTitle": "Speak Now",
   "albumArt": "SpeakNow.png",
   "songRating": 1000
 },
 {
   "songID": 173,
   "songTitle": "Happier",
   "artistName": "Olivia Rodrigo",
   "albumTitle": "SOUR",
   "albumArt": "SOUR.png",
   "songRating": 1000
 },
 {
   "songID": 174,
   "songTitle": "Positive",
   "artistName": "Cast Of Legally Blonde",
   "albumTitle": "Legally Blonde The Musical (Original Broadway Cast Recording)",
   "albumArt": "LegallyBlondeTheMusical(OriginalBroadwayCastRecording).png",
   "songRating": 1000
 },
 {
   "songID": 175,
   "songTitle": "Cleo - Edit",
   "artistName": "Shygirl",
   "albumTitle": "Cleo",
   "albumArt": "Cleo.png",
   "songRating": 1000
 },
 {
   "songID": 176,
   "songTitle": "Venice Bitch",
   "artistName": "Lana Del Rey",
   "albumTitle": "Norman Fucking Rockwell!",
   "albumArt": "NormanFuckingRockwell!.png",
   "songRating": 1000
 },
 {
   "songID": 177,
   "songTitle": "Backseat (Feat. Carly Rae Jepsen)",
   "artistName": "Charli XCX",
   "albumTitle": "Pop 2",
   "albumArt": "Pop2.png",
   "songRating": 1000
 },
 {
   "songID": 178,
   "songTitle": "Easy On Me",
   "artistName": "Adele",
   "albumTitle": "30",
   "albumArt": "30.png",
   "songRating": 1000
 },
 {
   "songID": 179,
   "songTitle": "Red (Taylor's Version)",
   "artistName": "Taylor Swift",
   "albumTitle": "Red (Taylor's Version)",
   "albumArt": "Red(Taylor'sVersion).png",
   "songRating": 1000
 },
 {
   "songID": 180,
   "songTitle": "High Infidelity",
   "artistName": "Taylor Swift",
   "albumTitle": "Midnights",
   "albumArt": "Midnights.png",
   "songRating": 1000
 },
 {
   "songID": 181,
   "songTitle": "Shatter",
   "artistName": "Maggie Rogers",
   "albumTitle": "Surrender",
   "albumArt": "Surrender.png",
   "songRating": 1000
 },
 {
   "songID": 182,
   "songTitle": "To Be Alive",
   "artistName": "Rina Sawayama",
   "albumTitle": "Hold The Girl",
   "albumArt": "HoldTheGirl.png",
   "songRating": 1000
 },
 {
   "songID": 183,
   "songTitle": "I Love You Bitch",
   "artistName": "Lizzo",
   "albumTitle": "Special",
   "albumArt": "Special.png",
   "songRating": 1000
 },
 {
   "songID": 184,
   "songTitle": "Giving In To The Love",
   "artistName": "Aurora",
   "albumTitle": "The Gods We Can Touch",
   "albumArt": "TheGodsWeCanTouch.png",
   "songRating": 1000
 },
 {
   "songID": 185,
   "songTitle": "Heart To Break",
   "artistName": "Kim Petras",
   "albumTitle": "Heart To Break",
   "albumArt": "HeartToBreak.png",
   "songRating": 1000
 },
 {
   "songID": 186,
   "songTitle": "Want You In My Room",
   "artistName": "Carly Rae Jepsen",
   "albumTitle": "Dedicated",
   "albumArt": "Dedicated.png",
   "songRating": 1000
 },
 {
   "songID": 187,
   "songTitle": "Legally Blonde",
   "artistName": "Cast Of Legally Blonde",
   "albumTitle": "Legally Blonde The Musical (Original Broadway Cast Recording)",
   "albumArt": "LegallyBlondeTheMusical(OriginalBroadwayCastRecording).png",
   "songRating": 1000
 },
 {
   "songID": 188,
   "songTitle": "Chip On My Shoulder",
   "artistName": "Cast Of Legally Blonde",
   "albumTitle": "Legally Blonde The Musical (Original Broadway Cast Recording)",
   "albumArt": "LegallyBlondeTheMusical(OriginalBroadwayCastRecording).png",
   "songRating": 1000
 },
 {
   "songID": 189,
   "songTitle": "Give A Little",
   "artistName": "Maggie Rogers",
   "albumTitle": "Heard It In A Past Life",
   "albumArt": "HeardItInAPastLife.png",
   "songRating": 1000
 },
 {
   "songID": 190,
   "songTitle": "Whipped Into Shape",
   "artistName": "Cast Of Legally Blonde",
   "albumTitle": "Legally Blonde The Musical (Original Broadway Cast Recording)",
   "albumArt": "LegallyBlondeTheMusical(OriginalBroadwayCastRecording).png",
   "songRating": 1000
 },
 {
   "songID": 191,
   "songTitle": "Exile (Feat. Bon Iver)",
   "artistName": "Taylor Swift",
   "albumTitle": "Folklore",
   "albumArt": "Folklore.png",
   "songRating": 1000
 },
 {
   "songID": 192,
   "songTitle": "Norman Fucking Rockwell",
   "artistName": "Lana Del Rey",
   "albumTitle": "Norman Fucking Rockwell!",
   "albumArt": "NormanFuckingRockwell!.png",
   "songRating": 1000
 },
 {
   "songID": 193,
   "songTitle": "The Steps",
   "artistName": "Haim",
   "albumTitle": "Women In Music Pt Iii",
   "albumArt": "WomenInMusicPtIii.png",
   "songRating": 1000
 },
 {
   "songID": 194,
   "songTitle": "Carolina - From The Motion Picture “Where The Crawdads Sing”",
   "artistName": "Taylor Swift",
   "albumTitle": "Carolina",
   "albumArt": "Carolina.png",
   "songRating": 1000
 }
];

songs.sort((a,b) => {
    return b.songRating - a.songRating;
});

/* Refresh leaderboard */

refreshLeaderboard = () => {
    sortSongs();
    let i = 0;
    while (i < songs.length) {
        leaderboardItem[i].children[0].innerHTML = i+1;
        leaderboardItem[i].children[1].style.backgroundImage = "url('" + songs[i].albumArt + "')";
        leaderboardItem[i].children[2].innerHTML = songs[i].songTitle;
        leaderboardItem[i].children[3].innerHTML = songs[i].artistName;
        leaderboardItem[i].children[4].innerHTML = `Rating: ${songs[i].songRating}`;
        i++;
    }
}

const sortSongs = () => {
    songs.sort((a,b) => {
        return b.songRating - a.songRating;});
    };

/* Compute Elo change */

computeEloChange = (initialA, initialB, actualA) => {
    let transformA = 10**(initialA/400);
    let transformB = 10**(initialB/400);

    let expectedA = transformA / (transformA + transformB);
    let expectedB = transformB / (transformA + transformB);

    return Math.floor(initialA + 100 * (actualA - expectedA));
};

/* Initialise chooser */

refreshChoices = () => {


    sortSongs();

    randomChoiceA = Math.floor(Math.random()*songs.length);
    randomChoiceB = Math.floor(Math.random()*songs.length);

        while (randomChoiceB === randomChoiceA) {
            randomChoiceB = Math.floor(Math.random()*songs.length);
        };

    song1.getElementsByClassName('songTitle')[0].innerHTML = songs[randomChoiceA].songTitle;
    song2.getElementsByClassName('songTitle')[0].innerHTML = songs[randomChoiceB].songTitle;

    song1.getElementsByClassName('artistName')[0].innerHTML = songs[randomChoiceA].artistName;
    song2.getElementsByClassName('artistName')[0].innerHTML = songs[randomChoiceB].artistName;

    song1.getElementsByClassName('album-art')[0].style.backgroundImage = "url('" + songs[randomChoiceA].albumArt + "')";
    song2.getElementsByClassName('album-art')[0].style.backgroundImage = "url('" + songs[randomChoiceB].albumArt + "')";

    document.getElementById('songsToChoose').style.display = "flex";
    document.getElementById('leaderboardContainer').style.display = "flex";

    refreshLeaderboard();
};

document.getElementById('startGame').addEventListener('click', function() {
    refreshChoices();
    this.innerHTML = "Refresh choices";
}
);

/* If the left-hand song wins */

song1Button.addEventListener('click', function(){

    let leftRating = songs[randomChoiceA].songRating;
    let rightRating = songs[randomChoiceB].songRating;

    songs[randomChoiceA].songRating = computeEloChange(leftRating, rightRating, 1);
    songs[randomChoiceB].songRating = computeEloChange(rightRating, leftRating, 0);

    refreshChoices();
    refreshLeaderboard();
});

/* If the right-hand song wins */

song2Button.addEventListener('click', function(){

    let leftRating = songs[randomChoiceA].songRating;
    let rightRating = songs[randomChoiceB].songRating;

    songs[randomChoiceA].songRating = computeEloChange(leftRating, rightRating, 0);
    songs[randomChoiceB].songRating = computeEloChange(rightRating, leftRating, 1);

    refreshChoices();
    refreshLeaderboard();
});
