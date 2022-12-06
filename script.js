let song1 = document.getElementById('song1');
let song2 = document.getElementById('song2');

let song1Button = document.getElementById('song1Button');
let song2Button = document.getElementById('song2Button');

let randomChoiceA;
let randomChoiceB;

let leaderboard = document.getElementById('leaderboard');
let leaderboardItem = document.getElementsByClassName('leaderboardItem')

let songCounter = 0;
let albumCounter = 0;
let artistCounter = 0;

let songs = [];
let albums = [];

class Song {
  constructor(title, artist, album) {
    this._id = songCounter +1;
    this._artist = artist;
    this._album = album;
    this._rating = 1000;

    // Search for the album in the albums array
    for (const albumToSearch of albums) {
      if (albumToSearch.title === album) {
        this._albumID = albumToSearch._id;
        albumToSearch._tracklist.push(this._id);
        break;
      }
    }

    // If the album was not found, set the albumID to 0
    if (this._albumID === undefined) {
      this._albumID = 0;}

    songCounter++;
    songs.push(this);

  }
    get id = () => {
      return this._id;
    }
    
    get title() {
      return this._title;
    }
    
    get artist() {
      return this._artist;
    }
    
    get album() {
      return this._album;
    }
    
    get rating() {
      return this._rating;
    }

    set rating(newRating) {
      this._rating = newRating;
    }
};

class Album {
  constructor(title, artist, albumArtFilename) {
    this._id = albumCounter + 1;
    this._title = title
    this._artist = artist;
    this._albumArt = `./images/${albumArtFilename}`;
    this._tracklist = [];

    albumCounter ++;
    albums.push(this);
  }

    get title() {
      return this._title;
    }
  
    get artist() {
      return this._artist;
    }

    get tracklist() {
      return this._tracklist;
    }
};

/*
 {
   "songID": 194,
   "songTitle": "Carolina - From The Motion Picture “Where The Crawdads Sing”",
   "artistName": "Taylor Swift",
   "albumTitle": "Carolina",
   "albumArt": "Carolina.png",
   "songRating": 1000
 }
]; */

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
