
const EXTERNAL_API = 'https://www.horoscopes-and-astrology.com/json'
const MERCURY_API = 'https://mercuryretrogradeapi.com/'
const horoscopeList = document.getElementById('horoscope-list');
const formSubmit = document.getElementById("horoscope-form");

const signs = [{"id":1,"name":"Aries","traits":"seductive, passionate, independent","element":"Water","gems":"Topaz \u0026 Opal","description":"Passionate, independent, and unafraid to blaze their own trail no matter what others think, Scorpios make a statement wherever they go. They love debates, aren't afraid of controversey\n    and won't back down from a debate. They also hate peopl who aren't genuine, and are all about being authentic-even if authentic isn't pretty.","startDate":"2019-03-21","endDate":"2019-04-19","created_at":"2019-10-04T21:42:19.340Z","updated_at":"2019-10-04T21:42:19.340Z"},{"id":2,"name":"Taurus","traits":"Dependable, Musical, Practical","element":"Earth","gems":"Emerald","description":"Smart, ambitious, and trustworthy, Taurus is the anchor of the Zodiac. Amazing friends, colleagues, and partners, Taureans value honesty above all else and are proud that their personal relationships tend to be drama free. Bulls get the reputation of being stubborn, but they're not always stuck in their ways. This searching sign is willing to see another point of view, \n    but they won't flip-flop on an opinion just to make someone else happy. They will shift their thinking only if they truly have a change of heart.","startDate":"2019-04-20","endDate":"2019-05-20","created_at":"2019-10-04T21:42:19.372Z","updated_at":"2019-10-04T21:42:19.372Z"},{"id":3,"name":"Gemini","traits":"Curious, Affectionate, Kind","element":"Air","gems":"Tiger's Key \u0026 Emerald","description":"Smart, passionate, and dynamic, Gemini is characterized by the Twins, Castor and Pollux, and is known for having two different sides they can display to the world. Expert communicators, Gemini is the chameleon of the Zodiac, adept at blending into different groups based on the vibe and energy they perceive. While they're also amazing at showcasing surface traits, \n    the Gemini well runs deep, which is why the Twins are one of the Zodiac's most emotionally intelligent signs.","startDate":"2019-05-21","endDate":"2019-06-20","created_at":"2019-10-04T21:42:19.404Z","updated_at":"2019-10-04T21:42:19.404Z"},{"id":4,"name":"Cancer","traits":"Intuitive, Emotional, Intelligent, Passionate","element":"Water","gems":"Ruby, Pearl","description":"Emotional, intuitive, and practically psychic; ruled by the moon and characterized by the crab, Cancer has so much going on in its watery depths. Cancers may seem prickly and standoffish at first meeting, \n    once they make the decision to become friends with someone, that person has a friend for life.","startDate":"2019-06-21","endDate":"2019-07-22","created_at":"2019-10-04T21:42:19.432Z","updated_at":"2019-10-04T21:42:19.432Z"},{"id":5,"name":"Leo","traits":"Proud, Bold, Ambitious","element":"Fire","gems":"Carnelian","description":"Bold, intelligent, warm, and courageous, fire sign Leo is a natural leader of the Zodiac, ready to blaze a trail, vanquish injustice, and make a name for themselves along the way. Blessed with high self-esteem, Lions know that they possess enviable traits—and they're proud of them. They don't believe in false modesty and will be the first to praise themselves for a job well done. But Leo isn't self-aggrandizing or unwilling to roll up those sleeves and do the work: \n    this sign knows that in order to be respected and admired, he or she needs to put in the effort worthy of a leader.","startDate":"2019-07-23","endDate":"2019-08-22","created_at":"2019-10-04T21:42:19.446Z","updated_at":"2019-10-04T21:42:19.446Z"},{"id":6,"name":"Virgo","traits":"Graceful, Organized, Kind","element":"Earth","gems":"Peridot","description":"Smart, sophisticated, and kind, Virgo gets the job done without complaining. Virgos are amazing friends, always there to lend a hand and also lend advice. Practical Virgos are incredibly adept at big picture thinking, \n    and planning out their life, their vacations, and what they're going to do today isn't a drag it makes them feel in control and secure.","startDate":"2019-08-23","endDate":"2019-09-22","created_at":"2019-10-04T21:42:19.462Z","updated_at":"2019-10-04T21:42:19.462Z"},{"id":7,"name":"Libra","traits":"Diplomatic, Artistic, Intelligent","element":"Air","gems":"Sapphire","description":"Intelligent, kind, and always willing to put others before themselves, Libras value harmony in all forms. Ruled by Venus, the planet of beauty, Libra adores a life that looks good. As the master of compromise and diplomacy, \n    Libra is adept at seeing all points of view, and excels at crafting compromises and effecting mediation between others. This sign has a rich inner life yet loves other people, and they're always happiest with a large group of friends, family, and coworkers on whom they can count.","startDate":"2019-09-23","endDate":"2019-10-22","created_at":"2019-10-04T21:42:19.490Z","updated_at":"2019-10-04T21:42:19.490Z"},{"id":8,"name":"Scorpio","traits":"Seductive, Passionate, Independent","element":"Water","gems":"Topaz \u0026 opal","description":"Passionate, independent, and unafraid to blaze their own trail no matter what others think, Scorpios make a statement wherever they go. They love debates, aren't afraid of controversy, and won't back down from a debate. \n    They also hate people who aren't genuine, and are all about being authentic—even if authentic isn't pretty.","startDate":"2019-10-23","endDate":"2019-11-21","created_at":"2019-10-04T21:42:19.506Z","updated_at":"2019-10-04T21:42:19.506Z"},{"id":9,"name":"Sagittarius","traits":"Adventurous","element":"Fire","gems":"Topaz","description":"Independent and strong-willed, Sagittarius personalities are all about going off the beaten path. Sagittarius isn’t afraid to step away from the pack, and is a natural born leader who goes after what he or she wants, regardless of what other people think. Sagittarius is a born adventurer, and loves solo travel and exploration. \n    Sagittarius also loves exploring the inner workings of their minds, and love stretching their horizons through a good book or movie.","startDate":"2019-11-22","endDate":"2019-12-21","created_at":"2019-10-04T21:42:19.523Z","updated_at":"2019-10-04T21:42:19.523Z"},{"id":10,"name":"Capricorn","traits":"Detail-Oriented, Intelligent, Hardworking","element":"Earth","gems":"Lapis lazuli","description":"Smart, hardworking, and fully in control of their destiny, a Capricorn will always get what they set their mind to, in both\n    personal and professional life--no excuses. Capricorns may get a reputation as stubborn, but they simply know what they want, and also know how they wish\n    other people would behave.","startDate":"2019-12-22","endDate":"2020-01-19","created_at":"2019-10-04T21:42:19.541Z","updated_at":"2019-10-04T21:42:19.541Z"},{"id":11,"name":"Aquarius","traits":"Imaginative, Idealistic, Intuitive","element":"Air","gems":"Amethyst","description":"Independent and enigmatical, Aquarians are unique. There is no one quite like an Aquarius, and because each is so incredibly individual, it can be tough to describe them as a group. Aquarians don't like labels, and may shy away from any adjective—even the good ones you might bestow upon them. Aquarians believe in the nature of change and evolution, \n    and even though they're a fixed sign, they may not necessarily believe they are the 'same' people they were when they were born.","startDate":"2019-01-20","endDate":"2019-02-18","created_at":"2019-10-04T21:42:19.559Z","updated_at":"2019-10-04T21:42:19.559Z"},{"id":12,"name":"Pisces","traits":"Creative, Sensitive, Artistic","element":"Water","gems":"Moonstone","description":"Smart, creative, and deeply intuitive, Pisces can be close to psychic. Pisces feel things deeply, and have incredibly strong gut reactions.\n    A Pisces 'knows' things from deep within, and can often judge whether a person or situation is good or bad. That doesn't mean a Pisces ignores the logical part\n    of their brain, though. Deeply intelligent, Pisces have a profound respect for the power of the human mind. Is it a suprise that Albert Einstein was a Pisces?","startDate":"2019-02-19","endDate":"2019-03-20","created_at":"2019-10-04T21:42:19.587Z","updated_at":"2019-10-04T21:42:19.587Z"}]

var mainSign;
document.addEventListener("DOMContentLoaded", function(e) {
})

// Mercury API & Functions
fetch(MERCURY_API)
.then(resp => resp.json())
.then(data => isMercuryRetro(data))

function isMercuryRetro(data) {
    const retroContainer = document.getElementById('container-5-retrograde');
    const mercuryRetro = document.getElementById('retrograde');

    if(data.is_retrograde == true) {
        mercuryRetro.setAttribute('href', './mercury-yes.html')
    } else {
        mercuryRetro.setAttribute('href', './mercury-no.html')
    }
}
// Horoscope API's and functions
fetch(EXTERNAL_API)
.then(resp => resp.json())
.then(horoscopes => getAllHoroscopes(horoscopes))

function getAllHoroscopes(horoscopes) {
    console.log(horoscopes)
}

formSubmit.addEventListener('submit', function(e) {
    e.preventDefault();
    convertUserBirthday(e.target)
    document.getElementById('horoscope-form').reset()
})

function convertUserBirthday(data) {
  if(!(data.birthday.value.startsWith("2019"))){
    var partialBirthday = data.birthday.value.slice(4, data.birthday.length)
    data.birthday.value = 2019 + partialBirthday;
  }
  const usersBirthday = data.birthday.value
  var cutOff = new Date('Tue Jan 19 2019 18:00:00 GMT-0600')
  if(usersBirthday <= cutOff) {
    usersBirthday.setFullYear(2020)
    }
    // if(data.year.value!= 2019) {
    //     data.year.value= 2019
    // } 
    // const usersBirthday = new Date(`${data.year.value}-${data.month.value}-${data.day.value}`)
    // var cutOff = new Date('Tue Jan 19 2019 18:00:00 GMT-0600')
    // if(usersBirthday <= cutOff) {
    //     usersBirthday.setFullYear(2020)
    // }
     checkDates(signs, usersBirthday)
}

function checkDates(signs, usersBirthday) {
    signs.forEach(sign => {
        mainSign = sign;
        var startDate = new Date(`${sign.startDate}`);
        var endDate = new Date(`${sign.endDate}`);
        var birthday = new Date(`${usersBirthday}`);
        startDate.toDateString();
        endDate.toDateString();
        birthday.toDateString();
        if(birthday >= startDate && birthday <= endDate) {
            let usersSign = sign.name;
            clearContainers()
            createHoroscopeImage(usersSign)
            addHoroscopeInfo(sign, usersSign)
            fetch(EXTERNAL_API)
            .then(resp => resp.json())
            .then(horoscopes =>  {
                getDailyHoroscope(horoscopes, usersSign, sign)
                attachHoroscopeEventListeners(horoscopes)
             })
        }
    })
}

function getDailyHoroscope(horoscopes, usersSign, sign) {
    for( var key in horoscopes.dailyhoroscope) {
        if(key == usersSign) {
            let horoscopeQuote = "Daily Horoscope: " + horoscopes.dailyhoroscope[key].split('<a href=', 1);
            let yourSignContainer = document.getElementById('content-container');
            let horoscopeDates = document.createElement('p')
            horoscopeDates.innerText = "Dates: " + horoscopes.dates[key];

            yourSignContainer.append(horoscopeDates);
            yourSignContainer.append(horoscopeQuote);
            console.log(yourSignContainer)
        }
    }
}

function clearContainers() {
    let imageContainer = document.getElementById('container-9-zodiac-image')
    let titleContainer = document.getElementById('title-container')
    let contentContainer = document.getElementById('content-container')

    let containerArray = [imageContainer, titleContainer, contentContainer]
    containerArray.forEach(container => {
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
    })
}
function  createHoroscopeImage(usersSign) {
  console.log('you got to the image creator for Aries')
  let imageContainer = document.getElementById('container-9-zodiac-image')
  let horoscopeImage = document.createElement('img')
  horoscopeImage.width = '250'
  horoscopeImage.heigh = '250'
  imageContainer.append(horoscopeImage)
  if (usersSign == 'Aries') {
      horoscopeImage.setAttribute('src', 'http://www.pngmart.com/files/5/Aries-PNG-File.png')
  }
  if (usersSign == 'Taurus') {
      horoscopeImage.setAttribute('src', 'http://www.pngmart.com/files/5/Taurus-PNG-Free-Download.png')
  }
  if (usersSign == 'Gemini') {
      horoscopeImage.setAttribute('src', 'https://i.dlpng.com/static/png/77532_preview.png')
  }
  if (usersSign == 'Cancer') {
      horoscopeImage.setAttribute('src', 'https://i.dlpng.com/static/png/214378_preview.png')
  }
  if (usersSign == 'Leo') {
      horoscopeImage.setAttribute('src', 'https://i.dlpng.com/static/png/196366_preview.png')
  }
  if (usersSign == 'Virgo') {
      horoscopeImage.setAttribute('src', 'http://www.pngmart.com/files/5/Virgo-PNG-File.png')
  }
  if (usersSign == 'Libra') {
      horoscopeImage.setAttribute('src', 'https://i.dlpng.com/static/png/305676_preview.png')
  }
  if (usersSign == 'Scorpio') {
      horoscopeImage.setAttribute('src', 'https://www.pngarts.com/files/1/Scorpio-Horoscope-Transparent-Background-PNG.png')
  }
  if (usersSign == 'Sagittarius') {
      horoscopeImage.setAttribute('src', 'http://pngimg.com/uploads/sagittarius/sagittarius_PNG71.png')
  }
  if (usersSign == 'Capricorn') {
      horoscopeImage.setAttribute('src', 'http://www.pngmart.com/files/5/Capricorn-PNG-HD.png')
  }
  if (usersSign == 'Aquarius') {
      horoscopeImage.setAttribute('src', 'http://www.pngmart.com/files/5/Aquarius-PNG-Transparent.png')
  }
  if (usersSign == 'Pisces') {
      horoscopeImage.setAttribute('src', 'https://i.dlpng.com/static/png/197038_preview.png')
  }
}


function addHoroscopeInfo(sign, usersSign) {
    let titleContainer = document.getElementById('title-container');
    let contentContainer = document.getElementById('content-container')

    let horoscopeTitle = document.createElement('h3')
    horoscopeTitle.innerText = "Your Sign: " + usersSign

    let horoscopeElement = document.createElement('p')
    horoscopeElement.innerText = "Element: " + sign.element

    let horoscopeGems = document.createElement('p')
    horoscopeGems.innerText = "Gems: " + sign.gems

    let horoscopeDescription = document.createElement('p')
    horoscopeDescription.innerText = "Description: " + sign.description

    contentContainer.append(horoscopeElement)
    contentContainer.append(horoscopeGems)
    contentContainer.append(horoscopeDescription)
    titleContainer.append(horoscopeTitle)
}

// main.js code for event listener for the constellation icons
fetch(EXTERNAL_API)
   .then(resp => resp.json())
   .then(horoscopes => {
       attachHoroscopeEventListeners(horoscopes)
   })

function attachHoroscopeEventListeners(horoscopes) {
   var icons = document.querySelectorAll(".constellationIcon")
   for(let i = 0; i < icons.length; i++) {
       icons[i].addEventListener('click', function() {
          let thisSign = this.id
          getClickedSign(signs, thisSign)
          getDailyHoroscope(horoscopes, thisSign)
       })
   }
}

function getClickedSign(signs, thisSign) {
  signs.forEach(sign => {
    if(sign.name == thisSign) {
      clearContainers()
      createHoroscopeImage(thisSign)
      addHoroscopeInfo(sign, thisSign)
    }
  })
}
// End of event listener code

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
// End of stars background code
 
