const popSongLeft = document.querySelector('#pop-song-left');
const popSongRight = document.querySelector('#pop-song-right');
const popSong = document.getElementsByClassName('pop-song')[0];

const popArtistLeft = document.querySelector('#pop-artist-left'); // Button for artist section
const popArtistRight = document.querySelector('#pop-artist-right'); // Button for artist section
const popArtist = document.getElementsByClassName('item')[0]; // Container for artist section

popSongRight.addEventListener('click', () => {
    popSong.scrollLeft += 330
    popSong.style.scrollBehaviour = 'smooth'
})
popSongLeft.addEventListener('click', () => {
    popSong.scrollLeft -= 330
})
popArtistRight.addEventListener('click', () => {
    popArtist.scrollLeft += 330
})
popArtistLeft.addEventListener('click', () => {
    popArtist.scrollLeft -= 330
})


const music = new Audio('audio/1.mp3')
const masterPlay = document.querySelector('#masterPlay')
let wave = document.getElementById('wave')



const songs = [
    {
        id: "1",
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg",
        titleOfSong: "On My Way"
    },
    {
        id: "2",
        songName: `Alan Walker-Fade<br><div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg",
        titleOfSong: "Alan Walker-Fade"
    },
    {
        id: "3",
        songName: `Cartoon - On & on  <br><div class="subtitle">Daniel levi</div>`,
        poster: "img/3.jpg",
        titleOfSong: "Cartoon - On & on"
    },
    {
        id: "4",
        songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
        poster: "img/4.jpg",
        titleOfSong: "Warriyo - Mortals"
    },
    {
        id: "5",
        songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
        poster: "img/5.jpg",
        titleOfSong: "Ertugrul Gazi"
    },
    {
        id: "6",
        songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
        poster: "img/6.jpg",
        titleOfSong: "Electronic Music"
    },
    {
        id: "7",
        songName: `Agar Tum Sath Ho<br><div class="subtitle">Tamashaa</div>`,
        poster: "img/7.jpg",
        titleOfSong: "Agar Tum Sath Ho"
    },
    {
        id: "8",
        songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
        poster: "img/8.jpg",
        titleOfSong: "Suna Hai"
    },
    {
        id: "9",
        songName: `Dilber <br><div class="subtitle">Satyameva Jayate</div>`,
        poster: "img/9.jpg",
        titleOfSong: "Dilber"
    },
    {
        id: "10",
        songName: `Duniya<br><div class="subtitle">Luka CHuppi</div>`,
        poster: "img/10.jpg",
        titleOfSong: "Duniya"
    },
    {
        id: "11",
        songName: `Lagdi Lahore Di<br><div class="subtitle">Street Dancer</div>`,
        poster: "img/11.jpg",
        titleOfSong: "Lagdi Lahore Di"
    },
    {
        id: "12",
        songName: `Putt Jatt Da<br><div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/12.jpg",
        titleOfSong: "Putt Jatt Da"
    },
    {
        id: "13",
        songName: `Baarishein  <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpg",
        titleOfSong: "Baarishein"
    },
    {
        id: "14",
        songName: `Vaaste <br><div class="subtitle">Dhavani Bhanushali</div>`,
        poster: "img/14.jpg",
        titleOfSong: "Vaaste"
    },
    {
        id: "15",
        songName: `Lutt Gaye  <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpg",
        titleOfSong: "Lutt Gaye"
    },
    {
        id: "16",
        songName: `Tu Meri Jindagi Hai Tu <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/16.jpg",
        titleOfSong: "Tu Meri Jindagi Hai Tu"
    },
    {
        id: "17",
        songName: `Batao Yaad Hai Tum Ko Dil Ko Churaya Tha<br><div class="subtitle">Rahat Fateh Ali Khan</div>`,
        poster: "img/17.jpg",
        titleOfSong: "Batao Yaad Hai Tum Ko Dil Ko Churaya Tha"
    },
    {
        id: "18",
        songName: `Pasoori <br><div class="subtitle">Ali Sethi, Shea Gill</div>`,
        poster: "img/18.jpg",
        titleOfSong: "Pasoori"
    },
    {
        id: "19",
        songName: `Eh munde Pagal Ne Saare<br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
        poster: "img/19.jpg",
        titleOfSong: "Eh munde Pagal Ne Saare"
    },
    {
        id: "20",
        songName: `Dunny 82K <br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
        poster: "img/20.jpg",
        titleOfSong: "Dunny 82K"
    },
    {
        id: "21",
        songName: `Bhool Bhulaiyaa 3 <br><div class="subtitle">Diljit Dosanjh</div>`,
        poster: "img/21.jpg",
        titleOfSong: "Bhool Bhulaiyaa 3"
    },
    {
        id: "22",
        songName: `Vibe<br><div class="subtitle">Diljit Dosanjh</div>`,
        poster: "img/22.jpeg",
        titleOfSong: "Alan Walker-Fade"
    },
    {
        id: "23",
        songName: `Peaches <br><div class="subtitle">Diljit Dosanjh</div>`,
        poster: "img/23.jpeg",
        titleOfSong: "Cartoon - On & on"
    },
    {
        id: "24",
        songName: `G.O.A.T<br><div class="subtitle">Diljit Dosanjh</div>`,
        poster: "img/24.jpeg",
        titleOfSong: "G.O.A.T"
    },
    {
        id: "25",
        songName: `Born To Shine <br><div class="subtitle">Diljit Dosanjh</div>`,
        poster: "img/25.jpeg",
        titleOfSong: "Born To Shine"
    },
    {
        id: "26",
        songName: `Muhammad Ali <br><div class="subtitle">Diljit Dosanjh</div>`,
        poster: "img/26.jpeg",
        titleOfSong: "Muhammad Ali"
    },
    {
        id: "27",
        songName: `Hass Hass<br><div class="subtitle">Diljit Dosanjh</div>`,
        poster: "img/27.jpeg",
        titleOfSong: "Hass Hass"
    },
    {
        id: "28",
        songName: `Downers At Dusk <br><div class="subtitle">Talha Anjum</div>`,
        poster: "img/28.jpeg",
        titleOfSong: "Downers At Dusk"
    },
    {
        id: "29",
        songName: `Afsanay <br><div class="subtitle">Talha Anjum</div>`,
        poster: "img/29.jpeg",
        titleOfSong: "Afsanay"
    },
    {
        id: "30",
        songName: `Karda Koi<br><div class="subtitle">Talha Anjum</div>`,
        poster: "img/30.jpeg",
        titleOfSong: "Karda Koi"
    },
    {
        id: "31",
        songName: `Love Lost<br><div class="subtitle">Talha Anjum</div>`,
        poster: "img/31.jpeg",
        titleOfSong: "Love Lost"
    },
    {
        id: "32",
        songName: `Kattar Karachi<br><div class="subtitle">Talha Anjum</div>`,
        poster: "img/32.jpeg",
        titleOfSong: "Kattar Karachi"
    },
    {
        id: "33",
        songName: `Open Letter  <br><div class="subtitle">Talha Anjum</div>`,
        poster: "img/33.jpeg",
        titleOfSong: "Open Letter"
    },
    {
        id: "34",
        songName: `Shor <br><div class="subtitle">Talha Anjum</div>`,
        poster: "img/34.jpeg",
        titleOfSong: "Shor"
    },
    {
        id: "35",
        songName: `Me & You  <br><div class="subtitle">Talha Anjum</div>`,
        poster: "img/35.jpeg",
        titleOfSong: "Me & You"
    },
    {
        id: "36",
        songName: `BTDT  <br><div class="subtitle">Talha Anjum</div>`,
        poster: "img/36.jpeg",
        titleOfSong: "BTDT "
    },
    {
        id: "37",
        songName: `Come Through<br><div class="subtitle">Talha Anjum</div>`,
        poster: "img/37.jpeg",
        titleOfSong: "Come Through"
    },
    {
        id: "38",
        songName: `Smile <br><div class="subtitle">Talha Anjum</div>`,
        poster: "img/38.jpeg",
        titleOfSong: "Smile"
    },
    {
        id: "39",
        songName: `Munde Busy<br><div class="subtitle">Talha Anjum</div>`,
        poster: "img/39.jpeg",
        titleOfSong: "Munde Busy"
    },
    {
        id: "40",
        songName: `Shots Fired<br><div class="subtitle">Talha Anjum</div>`,
        poster: "img/40.jpeg",
        titleOfSong: "Shots Fired"
    },
    {
        id: "41",
        songName: `Supreme Leader<br><div class="subtitle">Talha Yunus</div>`,
        poster: "img/41.jpeg",
        titleOfSong: "Supreme Leader"
    },
    {
        id: "42",
        songName: `Take Your Time<br><div class="subtitle">Talha Yunus</div>`,
        poster: "img/42.jpeg",
        titleOfSong: "Take Your Time"
    },
    {
        id: "43",
        songName: `Bol <br><div class="subtitle">Talha Yunus</div>`,
        poster: "img/43.jpeg",
        titleOfSong: "Bol"
    },
    {
        id: "44",
        songName: `Heartbeat<br><div class="subtitle">Talha Yunus</div>`,
        poster: "img/44.jpeg",
        titleOfSong: "Heartbeat"
    },
    {
        id: "45",
        songName: `Shikwa <br><div class="subtitle">Talha Yunus</div>`,
        poster: "img/45.jpeg",
        titleOfSong: "Shikwa"
    },
    {
        id: "46",
        songName: `Karma<br><div class="subtitle">Talha Yunus</div>`,
        poster: "img/46.jpeg",
        titleOfSong: "Karma"
    },
    {
        id: "47",
        songName: `Glory Full Album<br><div class="subtitle">YoYo Honey Singh</div>`,
        poster: "img/47.jpeg",
        titleOfSong: "Glory Full Album"
    }
]

// search data start

let searchResult = document.getElementsByClassName('search-results')[0]

songs.forEach((element) => {
    const {id, songName, poster} = element
    let card = document.createElement('a')
    card.classList.add('card')
    card.href = '#' + id;
    card.innerHTML = `
    <img src= "${poster}" alt="">
                            <div class="content">
                                 ${songName}
                            </div>
    `  ;
    searchResult.appendChild(card) ;                         
}) 


let input = document.getElementsByTagName('input')[0]

input.addEventListener('keyup', () => {
    let inputValue = input.value.toUpperCase();
    let items = searchResult.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
       let as = items[index].getElementsByClassName('content')[0]
       let textValue = as.textContent || as.innerHTML;

        if(textValue.toUpperCase().indexOf(inputValue) > -1) {
          items[index].style.display = 'flex'
        }else{
            items[index].style.display = 'none'
        }

        if(input.value == 0){
            searchResult.style.display = "none"
        }else{
            searchResult.style.display = ""
        }
    }
})
// search data end


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1')
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
    } else {
        music.pause();
        wave.classList.remove('active1')
        masterPlay.classList.add('bi-play-fill')
        masterPlay.classList.remove('bi-pause-fill')
    }
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill')
        el.classList.remove('bi-pause-circle-fill')
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgba(105, 105, 105, .0)'
    })
}

let index = 0;
let posterMasterPlay = document.querySelector('#poster-master-play')
let title = document.querySelector('#title')
let downloadMusic = document.querySelector('#download-music')

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        posterMasterPlay.src = `img/${index}.jpg`
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        downloadMusic.href = `audio/${index}.mp3`
        music.play();

        let songTitles = songs.filter((els) => {
            return els.id == index
        })
        let songTitle = songs.filter((eles) => {
            return eles.id == index
        })

        songTitles.forEach((elss) => {
            let { songName } = elss
            title.innerHTML = songName
        })
        songTitle.forEach((elsss) => {
            let { titleOfSong } = elsss
            downloadMusic.setAttribute('download', titleOfSong)
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)'
        makeAllPlay()
        el.target.classList.add('bi-pause-circle-fill')
        el.target.classList.remove('bi-play-circle-fill')
        wave.classList.add('active1')
        wave.classList.remove('active1')
    })
})

let currentStart = document.getElementById('currentStart')
let currentEnd = document.getElementById('currentEnd')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0]

music.addEventListener('timeupdate', () => {
    let musicCurrent = music.currentTime
    let musicDuration = music.duration
    let min1 = Math.floor(musicDuration / 60)
    let sec1 = Math.floor(musicDuration % 60)
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentEnd.innerText = `${min1}:${sec1}`
    let min2 = Math.floor(musicCurrent / 60)
    let sec2 = Math.floor(musicCurrent % 60)

    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }
    currentStart.innerText = `${min2}:${sec2}`

    let progressBar = parseInt((musicCurrent / musicDuration) * 100)
    seek.value = progressBar
    // console.log(seek.value)
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`
    dot.style.left = `${seekBar}%`
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100
})

let volIcon = document.getElementById('vol-icon')
let vol = document.getElementById('vol')
let volBar = document.querySelector('.vol-bar')
let volDot = document.getElementById('vol-dot')

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        volIcon.classList.remove('bi-volume-up-fill')
        volIcon.classList.remove('bi-volume-down-fill')
        volIcon.classList.add('bi-volume-off-fill')
    }
    if (vol.value > 0) {
        volIcon.classList.remove('bi-volume-up-fill')
        volIcon.classList.add('bi-volume-down-fill')
        volIcon.classList.remove('bi-volume-off-fill')
    }
    if (vol.value > 50) {
        volIcon.classList.add('bi-volume-up-fill')
        volIcon.classList.remove('bi-volume-down-fill')
        volIcon.classList.remove('bi-volume-off-fill')
    }
    let vol_a = vol.value;
    volBar.style.width = `${vol_a}%`
    volDot.style.left = `${vol_a}%`
    music.volume = vol_a / 100
})

let back = document.querySelector('#back')
let next = document.querySelector('#next')

back.addEventListener('click', () => {
    index -= 1
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length
    }
    music.src = `audio/${index}.mp3`;
    posterMasterPlay.src = `img/${index}.jpg`
    music.play();
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')

    let songTitles = songs.filter((els) => {
        return els.id == index
    })

    songTitles.forEach(elss => {
        let { songName } = elss
        title.innerHTML = songName
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)'
    makeAllPlay()
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
    wave.classList.add('active1')
    wave.classList.remove('active1')
})

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    posterMasterPlay.src = `img/${index}.jpg`
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    music.play();

    let songTitles = songs.filter((els) => {
        return els.id == index
    })

    songTitles.forEach(elss => {
        let { songName } = elss
        title.innerHTML = songName
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)'
    makeAllPlay()
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
    wave.classList.add('active1')
    wave.classList.remove('active1')
})

let shuffle = document.getElementsByClassName('shuffle')[0]

shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "repeat"
            break;

        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = "random"
            break;

        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "next"
            break;
    }
})


const nextMusic = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++
    }
    // index ++;
    music.src = `audio/${index}.mp3`;
    posterMasterPlay.src = `img/${index}.jpg`
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    downloadMusic.href = `audio/${index}.mp3`
    music.play();

    let songTitles = songs.filter((els) => {
        return els.id == index
    })
    let songTitle = songs.filter((eles) => {
        return eles.id == index
    })

    songTitles.forEach((elss) => {
        let { songName } = elss
        title.innerHTML = songName
    })
    songTitle.forEach((elsss) => {
        let { titleOfSong } = elsss
        downloadMusic.setAttribute('download', titleOfSong)
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)'
    makeAllPlay()
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
    wave.classList.add('active1')
    wave.classList.remove('active1')

}

const repeatMusic = () => {
    index
    music.src = `audio/${index}.mp3`;
    posterMasterPlay.src = `img/${index}.jpg`
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    downloadMusic.href = `audio/${index}.mp3`
    music.play();

    let songTitles = songs.filter((els) => {
        return els.id == index
    })
    let songTitle = songs.filter((eles) => {
        return eles.id == index
    })

    songTitles.forEach((elss) => {
        let{songName} = elss
        title.innerHTML = songName
    })
    songTitle.forEach((elsss) => {
        let{titleOfSong} = elsss
        downloadMusic.setAttribute('download', titleOfSong)
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)'
    makeAllPlay()
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
    wave.classList.add('active1')
    wave.classList.remove('active1') 
}

const randomMusic = () => {
    if(index == songs.length){
        index = 1
    }else {
        index = Math.floor((Math.random() * songs.length) + 1)
    }
    music.src = `audio/${index}.mp3`;
    posterMasterPlay.src = `img/${index}.jpg`
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    downloadMusic.href = `audio/${index}.mp3`
    music.play();

    let songTitles = songs.filter((els) => {
        return els.id == index
    })
    let songTitle = songs.filter((eles) => {
        return eles.id == index
    })

    songTitles.forEach((elss) => {
        let{songName} = elss
        title.innerHTML = songName
    })
    songTitle.forEach((elsss) => {
        let{titleOfSong} = elsss
        downloadMusic.setAttribute('download', titleOfSong)
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)'
    makeAllPlay()
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
    wave.classList.add('active1')
    wave.classList.remove('active1')
}

music.addEventListener('ended', () => {
  let b = shuffle.innerHTML

  switch (b) {
    case 'repeat':
        repeatMusic()
        break;
    case 'next':
        nextMusic()
        break;
    case 'random':
        randomMusic()
        break;
  }
})





