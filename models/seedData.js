const mongoose = require('mongoose');

const seedData = [
    {
        director: "Tobe Hooper",
        genre: "Horror",
        releaseDate: "October 11, 1974",
        rottenTomatoes: 88,
        runtime: 83,
        title: "The Texas Chainsaw Massacre",
        image:
            "https://m.media-amazon.com/images/M/MV5BZDI3OWE0ZWMtNGJjOS00N2E4LWFiOTAtZjQ4OTNiNzIwN2NkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
        trailer:
            "https://www.youtube.com/embed/-e3sv1NzrCA",
    },
    {
        director: "Alfred Hitchcock",
        genre: "Horror",
        releaseDate: "September 8, 1960",
        rottenTomatoes: 96,
        runtime: 109,
        title: "Psycho",
        image:
            "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        trailer:
            "https://www.youtube.com/embed/NG3-GlvKPcg",
    },
    {
        director: "Stanley Kubrick",
        genre: "Horror",
        releaseDate: "May 23, 1980",
        rottenTomatoes: 82,
        runtime: 146,
        title: "The Shining",
        image:
            "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/192/2022/05/05152719/b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg",
        trailer:
            "https://www.youtube.com/embed/5Cb3ik6zP2I",
    },
    {
        director: "John Carpenter",
        genre: "Horror",
        releaseDate: "October 25, 1978",
        rottenTomatoes: 96,
        runtime: 91,
        title: "Halloween",
        image:
            "https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
        trailer:
            "https://www.youtube.com/embed/T5ke9IPTIJQ",
    },
    {
        director: "William Friedkin",
        genre: "Horror",
        releaseDate: "December 26, 1973",
        rottenTomatoes: 84,
        runtime: 132,
        title: "The Exorcist",
        image:
            "https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/90729/TheExorcist.jpg",
        trailer:
            "https://www.youtube.com/embed/YDGw1MTEe9k",
    },
    {
        director: "Ari Aster",
        genre: "Horror",
        releaseDate: "June 8, 2018",
        rottenTomatoes: 90,
        runtime: 127,
        title: "Hereditary",
        image:
            "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_FMjpg_UX1000_.jpg",
        trailer:
            "https://www.youtube.com/embed/V6wWKNij_1M",
    },
    {
        director: "Tobe Hooper",
        genre: "Horror",
        releaseDate: "June 4, 1982",
        rottenTomatoes: 88,
        runtime: 120,
        title: "Poltergeist",
        image:
            "https://m.media-amazon.com/images/M/MV5BODJiZTU1ZTMtZTEzMy00NzFmLWJjNzctZTc2MDcwZjE1MDBjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/9eZgEKjYJqA",
    },
    {
        director: "Roman Polanski",
        genre: "Horror",
        releaseDate: "June 12, 1968",
        rottenTomatoes: 96,
        runtime: 136,
        title: "Rosemary's Baby",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/515KMYdmVmL._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/BjpA6IH_Skc",
    },
    {
        director: "Eduardo Sánchez, Daniel Myrick",
        genre: "Horror",
        releaseDate: "July 30, 1999",
        rottenTomatoes: 86,
        runtime: 81,
        title: "The Blair Witch Project",
        image:
            "https://m.media-amazon.com/images/M/MV5BNzQ1NDBlNDItMDAyYS00YTI2LTgwMmYtMzAwMzg4NDFlM2ZmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
        trailer:
            "https://www.youtube.com/embed/MBZ-POVsrlI",
    },
    {
        director: "Wes Craven",
        genre: "Horror",
        releaseDate: "December 20, 1996",
        rottenTomatoes: 80,
        runtime: 111,
        title: "Scream",
        image:
            "https://m.media-amazon.com/images/M/MV5BMjAwNTUxMzA1MF5BMl5BanBnXkFtZTcwNzY0ODQ4NA@@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/tV4PTwciTuQ",
    },
    {
        director: "Hayao Miyazaki",
        genre: "Animated",
        releaseDate: "August 31, 2002",
        rottenTomatoes: 97,
        runtime: 125,
        title: "Spirited Away",
        image:
            "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
        trailer:
            "https://www.youtube.com/embed/ByXuk9QqQkk",
    },
    {
        director: "Rob Minkoff, Roger Allers",
        genre: "Animated",
        releaseDate: "June 24, 1994",
        rottenTomatoes: 93,
        runtime: 88,
        title: "The Lion King",
        image:
            "https://www.movies4kids.co.uk/wp-content/uploads/sites/15/2011/02/the-lion-king-524fb69e8c273.jpg",
        trailer:
            "https://www.youtube.com/embed/lFzVJEksoDY",
    },
    {
        director:
            "Peter Ramsey, Bob Persichetti, Rodney Rothman",
        genre: "Animated",
        releaseDate: "December 14, 2018",
        rottenTomatoes: 97,
        runtime: 116,
        title: "Spider-Man: Into the Spider-Verse",
        image:
            "https://m.media-amazon.com/images/M/MV5BMjMzMzQ0NzI5Nl5BMl5BanBnXkFtZTgwNjc2NTY0NjM@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/g4Hbz2jLxvQ",
    },
    {
        director: "John Lasseter",
        genre: "Animated",
        releaseDate: "November 22, 1995",
        rottenTomatoes: 100,
        runtime: 77,
        title: "Toy Story",
        image:
            "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/v-PjgYDrg70",
    },
    {
        director: "Pete Docter",
        genre: "Animated",
        releaseDate: "June 19, 2015",
        rottenTomatoes: 98,
        runtime: 95,
        title: "Inside Out",
        image:
            "https://www.masculinity-movies.com/wp-content/uploads/2018/04/inside-out-5627b1e9e2e9f.jpg",
        trailer:
            "https://www.youtube.com/embed/1HFv47QHWJU",
    },
    {
        director: "Andrew Stanton",
        genre: "Animated",
        releaseDate: "May 30, 2003",
        rottenTomatoes: 99,
        runtime: 100,
        title: "Finding Nemo",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51T9vLGUtyL._AC_.jpg",
        trailer:
            "https://www.youtube.com/embed/9oQ628Seb9w",
    },
    {
        director: "Pete Docter",
        genre: "Animated",
        releaseDate: "May 29, 2009",
        rottenTomatoes: 98,
        runtime: 96,
        title: "Up",
        image:
            "https://lumiere-a.akamaihd.net/v1/images/p_up_19753_e6f911e3.jpeg",
        trailer:
            "https://www.youtube.com/embed/ORFWdXl_zJ4",
    },
    {
        director: "Adrian Molina, Lee Unkrich",
        genre: "Animated",
        releaseDate: "November 22, 2017",
        rottenTomatoes: 97,
        runtime: 105,
        title: "Coco",
        image:
            "https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810",
        trailer:
            "https://www.youtube.com/embed/Ga6RYejo6Hk",
    },
    {
        director: "Vicky Jenson, Andrew Adamson",
        genre: "Animated",
        releaseDate: "April 22, 2001",
        rottenTomatoes: 88,
        runtime: 90,
        title: "Shrek",
        image:
            "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
        trailer:
            "https://www.youtube.com/embed/CwXOrWvPBPk",
    },
    {
        director: "Brad Bird",
        genre: "Animated",
        releaseDate: "October 24, 2004",
        rottenTomatoes: 97,
        runtime: 115,
        title: "The Incredibles",
        image:
            "https://cps-static.rovicorp.com/2/Open/Disney/The%20Incredibles/_derived_jpg_q90_310x470_m0/the-incredibles-poster-art.jpg",
        trailer:
            "https://www.youtube.com/embed/-UaGUdNJdRQ",
    },
    {
        director: "Chad Stahelski",
        genre: "Action",
        releaseDate: "October 24, 2014",
        rottenTomatoes: 86,
        runtime: 96,
        title: "John Wick",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81F5PF9oHhL.jpg",
        trailer:
            "https://www.youtube.com/embed/C0BMx-qxsP4",
    },
    {
        director: "James Cameron",
        genre: "Science Fiction",
        releaseDate: "October 26, 1984",
        rottenTomatoes: 100,
        runtime: 107,
        title: "The Terminator",
        image:
            "https://cdn.shopify.com/s/files/1/1057/4964/products/The-Terminator-Vintage-Movie-Poster-Original-1-Sheet-27x41_300x@2x.jpg?v=1663222603",
        trailer:
            "https://www.youtube.com/embed/k64P4l2Wmeg",
    },
    {
        director: "Ted Kotcheff",
        genre: "Action",
        releaseDate: "October 22, 1982",
        rottenTomatoes: 86,
        runtime: 93,
        title: "First Blood",
        image:
            "https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/IAqLKlxY3Eo",
    },
    {
        director: "Paul Greengrass",
        genre: "Action",
        releaseDate: "August 3, 2007",
        rottenTomatoes: 92,
        runtime: 115,
        title: "The Bourne Ultimatum",
        image:
            "https://www.themoviedb.org/t/p/original/cE2AeHO8f6HcSGQFJ04v67f6g6s.jpg",
        trailer:
            "https://www.youtube.com/embed/ohkW_xbPl9A",
    },
    {
        director: "Robert Clouse",
        genre: "Action",
        releaseDate: "August 19, 1973",
        rottenTomatoes: 88,
        runtime: 99,
        title: "Enter the Dragon",
        image:
            "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/4/2018/05/03103638/EnterTheDragon-Poster.jpg",
        trailer:
            "https://www.youtube.com/embed/81jCPIag4KA",
    },
    {
        director: "John McTiernan",
        genre: "Action",
        releaseDate: "July 22, 1988",
        rottenTomatoes: 94,
        runtime: 132,
        title: "Die Hard",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91h9drksQsL.jpg",
        trailer:
            "https://www.youtube.com/embed/jaJuwKCmJbY",
    },
    {
        director: "Quentin Tarantino",
        genre: "Action",
        releaseDate: "October 10, 2003",
        rottenTomatoes: 85,
        runtime: 111,
        title: "Kill Bill: Volume 1",
        image:
            "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/KILLBILL.VOL.1.PW_500x.jpg?v=1574966219",
        trailer:
            "https://www.youtube.com/embed/7kSuas6mRpk",
    },
    {
        director: "Don Siegel",
        genre: "Action",
        releaseDate: "December 23, 1971",
        rottenTomatoes: 89,
        runtime: 102,
        title: "Dirty Harry",
        image:
            "http://cdn.shopify.com/s/files/1/1057/4964/products/Dirty-Harry-Vintage-Movie-Poster-Original-1-Sheet-27x41-5952.jpg?v=1640206848",
        trailer:
            "https://www.youtube.com/embed/YgRjIEwMYQ4",
    },
    {
        director: "Denis Villeneuve",
        genre: "Action",
        releaseDate: "October 2, 2015",
        rottenTomatoes: 92,
        runtime: 121,
        title: "Sicario",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/A1GdxURr+uL.jpg",
        trailer:
            "https://www.youtube.com/embed/G8tlEcnrGnU",
    },
    {
        director: "George Miller",
        genre: "Action",
        releaseDate: "May 15, 2015",
        rottenTomatoes: 97,
        runtime: 120,
        title: "Mad Max: Fury Road",
        image:
            "https://movieposters2.com/images/1375124-b.jpg",
        trailer:
            "https://www.youtube.com/embed/hEJnMQG9ev8",
    },
    {
        director: "Martin Campbell",
        genre: "Action",
        releaseDate: "November 17, 2006",
        rottenTomatoes: 94,
        runtime: 144,
        title: "Casino Royale",
        image:
            "https://movieposters2.com/images/1191016-b.jpg",
        trailer:
            "https://www.youtube.com/embed/36mnx8dBbGE",
    },
    {
        director: "Lana Wachowski, Lilly Wachowski",
        genre: "Science Fiction",
        releaseDate: "March 31, 1999",
        rottenTomatoes: 88,
        runtime: 136,
        title: "The Matrix",
        image:
            "https://www.themoviedb.org/t/p/original/wqJ5biL1mnjLqjWvXnnMES75Fa9.jpg",
        trailer:
            "https://www.youtube.com/embed/vKQi3bBA1y8",
    },
    {
        director: "Ridley Scott",
        genre: "Science Fiction",
        releaseDate: "May 25, 1979",
        rottenTomatoes: 98,
        runtime: 117,
        title: "Aliens",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91TYB8gep+L.jpg",
        trailer:
            "https://www.youtube.com/embed/LjLamj-b0I8",
    },
    {
        director: "George Lucas",
        genre: "Science Fiction",
        releaseDate: "July 21, 1978",
        rottenTomatoes: 93,
        runtime: 121,
        title: "Star Wars: A New Hope",
        image:
            "https://cdn.shopify.com/s/files/1/0043/8144/2141/products/IS_2a24ef2e-f8ca-4a2f-92bb-b0bf773e1f88.jpg?v=1645837528",
        trailer:
            "https://www.youtube.com/embed/vZ734NWnAHA",
    },
    {
        director: "Robert Zemeckis",
        genre: "Science Fiction",
        releaseDate: "July 3, 1985",
        rottenTomatoes: 97,
        runtime: 116,
        title: "Back To The Future",
        image:
            "https://i5.walmartimages.com/asr/b7a73da3-1973-4f80-a271-914be60d32ad.42fd0bff023a22e7b071f54ab682417c.jpeg",
        trailer:
            "https://www.youtube.com/embed/qvsgGtivCgs",
    },
    {
        director: "Christopher Nolan",
        genre: "Science Fiction",
        releaseDate: "July 13, 2010",
        rottenTomatoes: 87,
        runtime: 148,
        title: "Inception",
        image:
            "https://www.themoviedb.org/t/p/original/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
        trailer:
            "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
        director: "Ridley Scott",
        genre: "Science Fiction",
        releaseDate: "June 25, 1982",
        rottenTomatoes: 89,
        runtime: 110,
        title: "Blade Runner",
        image:
            "http://cdn.shopify.com/s/files/1/1057/4964/products/Blade-Runner-Vintage-Movie-Poster-Original-1-Sheet-27x41-6694.jpg?v=1637118215",
        trailer:
            "https://www.youtube.com/embed/eogpIG53Cis",
    },
    {
        director: "Stanley Kubrick",
        genre: "Science Fiction",
        releaseDate: "April 2, 1968",
        rottenTomatoes: 91,
        runtime: 139,
        title: "2001: A Space Odyssey",
        image:
            "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/oR_e9y-bka0",
    },
    {
        director: "Steven Spielberg",
        genre: "Science Fiction",
        releaseDate: "June 11, 1982",
        rottenTomatoes: 99,
        runtime: 114,
        title: "E.T. the Extra-Terrestrial",
        image:
            "http://cdn.shopify.com/s/files/1/1057/4964/products/E_T_-Vintage-Movie-Poster-Original-1-Sheet-27x41-647.jpg?v=1660165199",
        trailer:
            "https://www.youtube.com/embed/qYAETtIIClk",
    },
    {
        director: "Alex Garland",
        genre: "Science Fiction",
        releaseDate: "April 24, 2015",
        rottenTomatoes: 92,
        runtime: 110,
        title: "Ex Machina",
        image:
            "https://www.arthipo.com/image/cache/catalog/poster/movie/1555-2059/pfilm1979-ex-machina-809x1100.jpg",
        trailer:
            "https://www.youtube.com/embed/bggUmgeMCdc",
    },
    {
        director: "John G. Avildsen",
        genre: "Sports",
        releaseDate: "November 21, 1976",
        rottenTomatoes: 92,
        runtime: 119,
        title: "Rocky",
        image:
            "https://www.themoviedb.org/t/p/original/hEjK9A9BkNXejFW4tfacVAEHtkn.jpg",
        trailer:
            "https://www.youtube.com/embed/7RYpJAUMo2M",
    },
    {
        director: "Martin Scorsese",
        genre: "Sports",
        releaseDate: "December 19, 1980",
        rottenTomatoes: 93,
        runtime: 129,
        title: "Raging Bull",
        image:
            "https://m.media-amazon.com/images/M/MV5BYjRmODkzNDItMTNhNi00YjJlLTg0ZjAtODlhZTM0YzgzYThlXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/yUp6d79WRVI",
    },
    {
        director: "David Anspaugh",
        genre: "Sports",
        releaseDate: "November 14, 1986",
        rottenTomatoes: 91,
        runtime: 115,
        title: "Hoosiers",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51EhfKUlGoL._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/33DEm0eW-wU",
    },
    {
        director: "Phil Alden Robinson",
        genre: "Sports",
        releaseDate: "April 21, 1989",
        rottenTomatoes: 88,
        runtime: 107,
        title: "Field of Dreams",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51UKumzNsyL._AC_.jpg",
        trailer:
            "https://www.youtube.com/embed/Ut06d4dptWo",
    },
    {
        director: "David Anspaugh",
        genre: "Sports",
        releaseDate: "October 13, 1993",
        rottenTomatoes: 78,
        runtime: 116,
        title: "Rudy",
        image:
            "https://play-lh.googleusercontent.com/OhDCqKpeMDMV6rhMLeAoxHR_XLhUCztEuDv2arWvRNbQdTmzaKkEYlpwke7p3XevFA8i",
        trailer:
            "https://www.youtube.com/embed/firK4y-3bKw",
    },
    {
        director: "Gavin O'Connor",
        genre: "Sports",
        releaseDate: "February 6, 2004",
        rottenTomatoes: 81,
        runtime: 135,
        title: "Miracle",
        image:
            "https://image.tmdb.org/t/p/original/qABUGehCuPLGTLAJapkFM1iKt2I.jpg",
        trailer:
            "https://www.youtube.com/embed/Bd0_Dm2xlEM",
    },
    {
        director: "Bennett Miller",
        genre: "Sports",
        releaseDate: "September 19, 2011",
        rottenTomatoes: 94,
        runtime: 133,
        title: "Moneyball",
        image:
            "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/229898_Moneyball_2011_1400x2100_US_1.jpg?itok=XqvCtAC0",
        trailer:
            "https://www.youtube.com/embed/-4QPVo0UIzc",
    },
    {
        director: "Peter Berg",
        genre: "Sports",
        releaseDate: "October 8, 2004",
        rottenTomatoes: 82,
        runtime: 118,
        title: "Friday Night Lights",
        image:
            "https://cdn.cinematerial.com/p/297x/jffgtctq/friday-night-lights-movie-poster-md.jpg?v=1456554316",
        trailer:
            "https://www.youtube.com/embed/O-mI9GajrBc",
    },
    {
        director: "Craig Gillespie",
        genre: "Sports",
        releaseDate: "January 19, 2018",
        rottenTomatoes: 90,
        runtime: 120,
        title: "I, Tonya",
        image:
            "https://play-lh.googleusercontent.com/c6555udgaGp0YZWtYK9eoXydQ4AnNiv9OKdws0smG3dXP_t1WUvYJBEf9jn5x-uIxyqwTw",
        trailer:
            "https://www.youtube.com/embed/OXZQ5DfSAAc",
    },
    {
        director: "Boaz Yakin",
        genre: "Sports",
        releaseDate: "September 23, 2000",
        rottenTomatoes: 72,
        runtime: 120,
        title: "Remember the Titans",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/510TwairLCL._AC_.jpg",
        trailer:
            "https://www.youtube.com/embed/35MvdHBWjwU",
    },
    {
        director: "Rob Reiner",
        genre: "Romance",
        releaseDate: "July 21, 1989",
        rottenTomatoes: 91,
        runtime: 96,
        title: "When Harry Met Sally",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61SuGcS9AvL._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/vmSpCLefjnw",
    },
    {
        director: "Emile Ardolino",
        genre: "Romance",
        releaseDate: "August 21, 1987",
        rottenTomatoes: 72,
        runtime: 97,
        title: "Dirty Dancing",
        image:
            "https://cdn.shopify.com/s/files/1/1057/4964/products/Dirty-Dancing-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?v=1632862934",
        trailer:
            "https://www.youtube.com/embed/eIcmQNy9FsM",
    },
    {
        director: "Baz Luhrmann",
        genre: "Romance",
        releaseDate: "October 27, 1996",
        rottenTomatoes: 73,
        runtime: 120,
        title: "Romeo + Juliet",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51hA7cx++vL._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/4VBsi0VxiLg",
    },
    {
        director: "Cameron Crowe",
        genre: "Romance",
        releaseDate: "April 14, 1989",
        rottenTomatoes: 98,
        runtime: 100,
        title: "Say Anything",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51AyDsK723L._AC_.jpg",
        trailer:
            "https://www.youtube.com/embed/Se_eSeEAoX0",
    },
    {
        director: "Norman Jewison",
        genre: "Romance",
        releaseDate: "December 18, 1987",
        rottenTomatoes: 93,
        runtime: 102,
        title: "Moonstruck",
        image:
            "http://cdn.shopify.com/s/files/1/1057/4964/products/Moonstruck-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?v=1663224282",
        trailer:
            "https://www.youtube.com/embed/M01_2CKL6PU",
    },
    {
        director: "Michel Gondry",
        genre: "Romance",
        releaseDate: "March 19, 2004",
        rottenTomatoes: 92,
        runtime: 108,
        title:
            "Eternal Sunshine of the Spotless Mind",
        image:
            "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/07-QBnEkgXU",
    },
    {
        director: "Ang Lee",
        genre: "Romance",
        releaseDate: "December 9, 2005",
        rottenTomatoes: 88,
        runtime: 134,
        title: "Brokeback Mountain",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71tLA577boL.jpg",
        trailer:
            "https://www.youtube.com/embed/kMA30rThECg",
    },
    {
        director: "Michael Curtiz",
        genre: "Romance",
        releaseDate: "November 26, 1942",
        rottenTomatoes: 99,
        runtime: 102,
        title: "Casablanca",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71eeehjHyaL.jpg",
        trailer:
            "https://www.youtube.com/embed/MF7JH_54d8c",
    },
    {
        director: "Jean-Pierre Jeunet",
        genre: "Romance",
        releaseDate: "November 16, 2001",
        rottenTomatoes: 89,
        runtime: 122,
        title: "Amélie",
        image:
            "https://cdn.shopify.com/s/files/1/0969/9128/products/Movie_Poster_-_Le_Fabuleux_Destin_d_Amelie_Poulain_-_Audrey_Tautou_-_Tallenge_Hollywood_Poster_Collection_84912fc0-4bc0-4f44-861a-4a2626070d5f.jpg?v=1569189966",
        trailer:
            "https://www.youtube.com/embed/2UT5xaAfxWU",
    },
    {
        director: "Nick Cassavetes",
        genre: "Romance",
        releaseDate: "June 25, 2004",
        rottenTomatoes: 53,
        runtime: 124,
        title: "The Notebook",
        image:
            "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_FMjpg_UX1000_.jpg",
        trailer:
            "https://www.youtube.com/embed/BjJcYdEOI0k",
    },
    {
        director: "Gene Kelly, Stanley Donen",
        genre: "Musical",
        releaseDate: "April 11, 1952",
        rottenTomatoes: 100,
        runtime: 103,
        title: "Singin' in the Rain",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71ezA8BPTzL._AC_UY1000_.jpg",
        trailer:
            "https://www.youtube.com/embed/5_EVHeNEIJY",
    },
    {
        director: "Bob Fosse",
        genre: "Musical",
        releaseDate: "February 13, 1972",
        rottenTomatoes: 92,
        runtime: 124,
        title: "Cabaret",
        image:
            "https://m.media-amazon.com/images/M/MV5BYzEzZWU3ZTctMGRmZi00YTBiLThhN2UtNzRmNjI5ZGRhOTJlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
        trailer:
            "https://www.youtube.com/embed/EfL1J4QVhSM",
    },
    {
        director: "Jerome Robbins, Robert Wise",
        genre: "Musical",
        releaseDate: "December 13, 1961",
        rottenTomatoes: 92,
        runtime: 153,
        title: "West Side Story",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/West_Side_Story_1961_film_poster.jpg",
        trailer:
            "https://www.youtube.com/embed/HpKbrpPiExA",
    },
    {
        director: "Victor Fleming",
        genre: "Musical",
        releaseDate: "August 25, 1939",
        rottenTomatoes: 98,
        runtime: 112,
        title: "The Wizard of Oz",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/5182C431V8L._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/H_3T4DGw10U",
    },
    {
        director: "Robert Wise",
        genre: "Musical",
        releaseDate: "March 2, 1965",
        rottenTomatoes: 84,
        runtime: 174,
        title: "The Sound of Music",
        image:
            "https://lumiere-a.akamaihd.net/v1/images/soundofmusic_2_d860d47a.jpeg?region=0%2C0%2C584%2C876",
        trailer:
            "https://www.youtube.com/embed/UY6uw3WpPzY",
    },
    {
        director: "Bob Fosse",
        genre: "Musical",
        releaseDate: "December 20, 1979",
        rottenTomatoes: 87,
        runtime: 123,
        title: "All That Jazz",
        image:
            "http://cdn.shopify.com/s/files/1/1057/4964/products/all-that-jazz-vintage-movie-poster-original-czech-a1-23x33.jpg?v=1610161364",
        trailer:
            "https://www.youtube.com/embed/8_aIhkKlrwk",
    },
    {
        director: "Baz Luhrmann",
        genre: "Musical",
        releaseDate: "May 16, 2001",
        rottenTomatoes: 75,
        runtime: 127,
        title: "Moulin Rouge!",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ztMh21NCL._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/LVLjp3_MQIw",
    },
    {
        director: "Damien Chazelle",
        genre: "Musical",
        releaseDate: "December 16, 2016",
        rottenTomatoes: 91,
        runtime: 128,
        title: "La La Land",
        image:
            "https://i5.walmartimages.com/asr/6855fbee-fdd0-4540-b1de-bc9337b4316d.adf782f3419d4f6dafb215c9aaaef3cc.jpeg",
        trailer:
            "https://www.youtube.com/embed/lu4RHvouJH8",
    },
    {
        director: "Jim Sharman",
        genre: "Musical",
        releaseDate: "September 26, 1975",
        rottenTomatoes: 79,
        runtime: 98,
        title: "The Rocky Horror Picture Show",
        image:
            "https://m.media-amazon.com/images/M/MV5BOGIzYjM3YzMtMjk5ZS00NDY2LTllMjEtNjYwZjhmMDNhMDBkXkEyXkFqcGdeQXVyODUzMjQxMTA@._V1_FMjpg_UX1000_.jpg",
        trailer:
            "https://www.youtube.com/embed/4plqh6obZW4",
    },
    {
        director: "Randal Kleiser",
        genre: "Musical",
        releaseDate: "June 13, 1978",
        rottenTomatoes: 77,
        runtime: 110,
        title: "Grease",
        image:
            "https://www.themoviedb.org/t/p/original/mFbh21chHCqAigq0iNSBvhoUaAL.jpg",
        trailer:
            "https://www.youtube.com/embed/THd96gHV7Tg",
    },
    {
        director: "Frank Darabont",
        genre: "Drama",
        releaseDate: "September 22, 1994",
        rottenTomatoes: 91,
        runtime: 142,
        title: "The Shawshank Redemption",
        image:
            "https://d1w8cc2yygc27j.cloudfront.net/5318185617224886551/3363560709331238556.jpg",
        trailer:
            "https://www.youtube.com/embed/NmzuHjWmXOc",
    },
    {
        director: "Barry Jenkins",
        genre: "Drama",
        releaseDate: "September 2, 2016",
        rottenTomatoes: 98,
        runtime: 111,
        title: "Moonlight",
        image:
            "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/9NJj12tJzqc",
    },
    {
        director: "David Fincher",
        genre: "Drama",
        releaseDate: "October 1, 2010",
        rottenTomatoes: 96,
        runtime: 120,
        title: "The Social Network",
        image:
            "https://thescriptlab.com/wp-content/uploads/scripts/1123-poster-600x900-1.jpg",
        trailer:
            "https://www.youtube.com/embed/2RB3edZyeYw",
    },
    {
        director: "Steven Spielberg",
        genre: "Drama",
        releaseDate: "February 4, 1994",
        rottenTomatoes: 98,
        runtime: 195,
        title: "Schindler’s List",
        image:
            "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/gG22XNhtnoY",
    },
    {
        director: "Greta Gerwig",
        genre: "Drama",
        releaseDate: "November 10, 2017",
        rottenTomatoes: 99,
        runtime: 93,
        title: "Lady Bird",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51x5W088pBL._AC_.jpg",
        trailer:
            "https://www.youtube.com/embed/cNi_HC839Wo",
    },
    {
        director: "Joseph L. Mankiewicz",
        genre: "Drama",
        releaseDate: "January 15, 1951",
        rottenTomatoes: 99,
        runtime: 138,
        title: "All About Eve",
        image:
            "https://cdn.shopify.com/s/files/1/0747/3829/products/HP2766_b295e5a0-cb3c-496f-ad6a-54651e0d88e3_1024x1024.jpg?v=1571444929",
        trailer:
            "https://www.youtube.com/embed/uRjKPLH2OaQ",
    },
    {
        director: "Richard Linklater",
        genre: "Drama",
        releaseDate: "July 11, 2014",
        rottenTomatoes: 97,
        runtime: 163,
        title: "Boyhood",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61PFZMdBG-L._AC_.jpg",
        trailer:
            "https://www.youtube.com/embed/Y0oX0xiwOv8",
    },
    {
        director: "Kenneth Lonergan",
        genre: "Drama",
        releaseDate: "November 18, 2016",
        rottenTomatoes: 96,
        runtime: 137,
        title: "Manchester by the Sea",
        image:
            "https://movieposters2.com/images/1466848-b.jpg",
        trailer:
            "https://www.youtube.com/embed/gsVoD0pTge0",
    },
    {
        director: "Miloš Forman",
        genre: "Drama",
        releaseDate: "November 19, 1975",
        rottenTomatoes: 93,
        runtime: 133,
        title: "One Flew Over the Cuckoo’s Nest",
        image:
            "https://www.themoviedb.org/t/p/original/3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg",
        trailer:
            "https://www.youtube.com/embed/OXrcDonY-B8",
    },
    {
        director: "Robert Mulligan",
        genre: "Drama",
        releaseDate: "December 25, 1962",
        rottenTomatoes: 93,
        runtime: 129,
        title: "To Kill a Mockingbird",
        image:
            "https://cdn.shopify.com/s/files/1/0747/3829/products/HP2686_05ed5325-ea25-417d-a506-af004dcf551e_1024x1024.jpg?v=1571444881",
        trailer:
            "https://www.youtube.com/embed/KR7loA_oziY",
    },
    {
        director: "Quentin Tarantino",
        genre: "Crime",
        releaseDate: "October 14, 1994",
        rottenTomatoes: 92,
        runtime: 154,
        title: "Pulp Fiction",
        image:
            "https://www.limitedruns.com/media/cache/d5/47/d547564a0e56da9511ae32e497fde908.jpg",
        trailer:
            "https://www.youtube.com/embed/s7EdQ4FqbhY",
    },
    {
        director: "Martin Scorsese",
        genre: "Crime",
        releaseDate: "September 19, 1990",
        rottenTomatoes: 96,
        runtime: 146,
        title: "Goodfellas",
        image:
            "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ef4b93ef8f7157de3f97ae1ff5d21b56_0526bb98-1f4a-4da5-b928-b0025f5e6371_500x.jpg?v=1573585487",
        trailer:
            "https://www.youtube.com/embed/2ilzidi_J8Q",
    },
    {
        director: "Francis Ford Coppola",
        genre: "Crime",
        releaseDate: "March 24, 1972",
        rottenTomatoes: 97,
        runtime: 175,
        title: "The Godfather",
        image:
            "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/sY1S34973zA",
    },
    {
        director: "Curtis Hanson",
        genre: "Crime",
        releaseDate: "September 19, 1997",
        rottenTomatoes: 99,
        runtime: 138,
        title: "L.A. Confidential",
        image:
            "https://m.media-amazon.com/images/M/MV5BMDQ2YzEyZGItYWRhOS00MjBmLTkzMDUtMTdjYzkyMmQxZTJlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/6sOXrY5yV4g",
    },
    {
        director: "Brian De Palma",
        genre: "Crime",
        releaseDate: "December 9, 1983",
        rottenTomatoes: 81,
        runtime: 170,
        title: "Scarface",
        image:
            "https://cdn.shopify.com/s/files/1/1057/4964/products/Scarface-Vintage-Movie-Poster-Original-1-Sheet-27x41_300x@2x.jpg?v=1663223050",
        trailer:
            "https://www.youtube.com/embed/cv276Wg3e7I",
    },
    {
        director: "Martin Scorsese",
        genre: "Crime",
        releaseDate: "November 22, 1995",
        rottenTomatoes: 79,
        runtime: 178,
        title: "Casino",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/513wxpquZKL._AC_.jpg",
        trailer:
            "https://www.youtube.com/embed/j-D0QiMpGKc",
    },
    {
        director: "Ridley Scott",
        genre: "Crime",
        releaseDate: "October 19, 2007",
        rottenTomatoes: 81,
        runtime: 176,
        title: "American Gangster",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61amF1bF8JL.jpg",
        trailer:
            "https://www.youtube.com/embed/BV_nssS6Zkg",
    },
    {
        director: "Ethan Coen",
        genre: "Crime",
        releaseDate: "March 8, 1996",
        rottenTomatoes: 94,
        runtime: 95,
        title: "Fargo",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51vUe5syjmL._AC_UF1000,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/h2tY82z3xXU",
    },
    {
        director: "Martin Scorsese",
        genre: "Crime",
        releaseDate: "December 20, 2002",
        rottenTomatoes: 72,
        runtime: 167,
        title: "Gangs of New York",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51KXh08sVML.jpg",
        trailer:
            "https://www.youtube.com/embed/qHVUPri5tjA",
    },
    {
        director: "Martin Scorsese",
        genre: "Crime",
        releaseDate: "February 8, 1976",
        rottenTomatoes: 96,
        runtime: 114,
        title: "Taxi Driver",
        image:
            "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/T5IligQP7Fo",
    },
    {
        director: "John Landis",
        genre: "Comedy",
        releaseDate: "July 28, 1978",
        rottenTomatoes: 91,
        runtime: 109,
        title: "Animal House",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51ZCnpHArUL._AC_.jpg",
        trailer:
            "https://www.youtube.com/embed/KWjtI6n5xWM",
    },
    {
        director: "Ethan Coen, Joel Coen",
        genre: "Comedy",
        releaseDate: "March 6, 1998",
        rottenTomatoes: 79,
        runtime: 117,
        title: "The Big Lebowski",
        image:
            "http://www.limitedruns.com/media/cache/19/59/1959729cd17f41342e5218142c323f72.jpg",
        trailer:
            "https://www.youtube.com/embed/knxhiwUspsA",
    },
    {
        director: "Paul Feig",
        genre: "Comedy",
        releaseDate: "April 28, 2011",
        rottenTomatoes: 89,
        runtime: 125,
        title: "Bridesmaids",
        image:
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcZRWXqKWUVDfnluWpXuQDdQgYAq42P4j20ARMMblGli0yleG2hpo4lZHZzedJndxaU0tPGv2JfSt-tAagjjuDIR-3BeLb8f-8B0lKi-A",
        trailer:
            "https://www.youtube.com/embed/JgacDwgKiZg",
    },
    {
        director: "Greg Mottola",
        genre: "Comedy",
        releaseDate: "August 17, 2007",
        rottenTomatoes: 88,
        runtime: 114,
        title: "Superbad",
        image:
            "https://static.wixstatic.com/media/f86f23_dc652db8ddc347a9a55c9a7a456260d3~mv2.jpg/v1/fill/w_468,h_708,al_c,lg_1,q_80,enc_auto/superbad_poster.jpg",
        trailer:
            "https://www.youtube.com/embed/4eaZ_48ZYog",
    },
    {
        director: "Edgar Wright",
        genre: "Comedy",
        releaseDate: "September 24, 2004",
        rottenTomatoes: 92,
        runtime: 99,
        title: "Shaun of the Dead",
        image:
            "https://m.media-amazon.com/images/M/MV5BMTg5Mjk2NDMtZTk0Ny00YTQ0LWIzYWEtMWI5MGQ0Mjg1OTNkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/LIfcaZ4pC-4",
    },
    {
        director: "Terry Gilliam, Terry Jones",
        genre: "Comedy",
        releaseDate: "April 27, 1975",
        rottenTomatoes: 98,
        runtime: 89,
        title: "Monty Python and the Holy Grail",
        image:
            "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/montypythonholygrain.styleB.mp_500x.jpg?v=1647538695",
        trailer:
            "https://www.youtube.com/embed/urRkGvhXc8w",
    },
    {
        director: "Billy Wilder",
        genre: "Comedy",
        releaseDate: "March 29, 1959",
        rottenTomatoes: 94,
        runtime: 132,
        title: "Some Like it Hot",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/b/b8/Some_Like_It_Hot_%281959_poster%29.png",
        trailer:
            "https://www.youtube.com/embed/rI_lUHOCcbc",
    },
    {
        director: "Ivan Reitman",
        genre: "Comedy",
        releaseDate: "June 8, 1984",
        rottenTomatoes: 95,
        runtime: 105,
        title: "Ghostbusters",
        image:
            "http://cdn.shopify.com/s/files/1/1057/4964/products/Ghostbusters-Ghost-Busters-Vintage-Movie-Poster-Original-1-Sheet-27x41_f63b709b-4826-4469-a135-0b2131196b00.jpg?v=1643432471",
        trailer:
            "https://www.youtube.com/embed/6hDkhw5Wkas",
    },
    {
        director:
            "David Zucker, Jim Abrahams, Jerry Zucker",
        genre: "Comedy",
        releaseDate: "July 2, 1980",
        rottenTomatoes: 97,
        runtime: 88,
        title: "Airplane!",
        image:
            "https://www.themoviedb.org/t/p/original/hiURvJjCgk0s10urHVCg80TFF11.jpg",
        trailer:
            "https://www.youtube.com/embed/07pPmCfKi3U",
    },
    {
        director: "John Hughes",
        genre: "Comedy",
        releaseDate: "June 11, 1986",
        rottenTomatoes: 81,
        runtime: 98,
        title: "Ferris Bueller's Day Off",
        image:
            "https://image.tmdb.org/t/p//w780//9LTQNCvoLsKXP0LtaKAaYVtRaQL.jpg",
        trailer:
            "https://www.youtube.com/embed/0ZDbKhkLxTs",
    },
    {
        director: "Luc Jacquet",
        genre: "Documentary",
        releaseDate: "June 24, 2005",
        rottenTomatoes: 94,
        runtime: 80,
        title: "March of the Penguins",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LqD4Ml2IL._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/L7tWNwhSocE",
    },
    {
        director: "Morgan Neville",
        genre: "Documentary",
        releaseDate: "January 19, 2018",
        rottenTomatoes: 97,
        runtime: 94,
        title: "Won't You Be My Neighbor?",
        image:
            "https://play-lh.googleusercontent.com/WG3aNXTMzQYzI08C0ed_7GgZ9C_eauRWEFYxQWKOJ7AfIcGpWoXq752TDb8u8YEjkZZIvw",
        trailer:
            "https://www.youtube.com/embed/FhwktRDG_aQ",
    },
    {
        director:
            "Jimmy Chin, Elizabeth Chai Vasarhelyi",
        genre: "Documentary",
        releaseDate: "September 28, 2018",
        rottenTomatoes: 98,
        runtime: 100,
        title: "Free Solo",
        image:
            "https://m.media-amazon.com/images/M/MV5BMjE2MDIwMDU5Ml5BMl5BanBnXkFtZTgwMTkxNTgzNjM@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/urRVZ4SW7WU",
    },
    {
        director:
            "Albert Maysles, David Maysles, Muffie Meyer, Ellen Hovde",
        genre: "Documentary",
        releaseDate: "February 19, 1976",
        rottenTomatoes: 94,
        runtime: 95,
        title: "Grey Gardens",
        image:
            "http://cdn.shopify.com/s/files/1/1057/4964/products/grey-gardens-vintage-movie-poster-original-program-881.jpg?v=1614654093",
        trailer:
            "https://www.youtube.com/embed/AI62e0fRieo",
    },
    {
        director: "Jennie Livingston",
        genre: "Documentary",
        releaseDate: "March 13, 1991",
        rottenTomatoes: 98,
        runtime: 71,
        title: "Paris is Burning",
        image:
            "http://cdn.shopify.com/s/files/1/1057/4964/products/Paris-Is-Burning-Vintage-Movie-Poster-Original-1-Sheet-27x41-7125.jpg?v=1665730839",
        trailer:
            "https://www.youtube.com/embed/9SqvD1-0odY",
    },
    {
        director: "Asif Kapadia",
        genre: "Documentary",
        releaseDate: "May 16, 2015",
        rottenTomatoes: 95,
        runtime: 128,
        title: "Amy",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71VNCp1lHCL.jpg",
        trailer:
            "https://www.youtube.com/embed/_2yCIwmNuLE",
    },
    {
        director:
            "Ken Burns, Sarah Burns, David Mcmahon",
        genre: "Documentary",
        releaseDate: "November 23, 2012",
        rottenTomatoes: 92,
        runtime: 119,
        title: "The Central Park Five",
        image:
            "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/387131/3998577/apijjckom__00278.1625667260.jpg?c=2",
        trailer:
            "https://www.youtube.com/embed/AehmA3hTLmA",
    },
    {
        director: "James Marsh",
        genre: "Documentary",
        releaseDate: "July 25, 2008",
        rottenTomatoes: 100,
        runtime: 90,
        title: "Man on Wire",
        image:
            "https://m.media-amazon.com/images/M/MV5BMTMxNTk3NDY1NV5BMl5BanBnXkFtZTcwNDk0ODg3MQ@@._V1_FMjpg_UX1000_.jpg",
        trailer:
            "https://www.youtube.com/embed/Cz6oddi0mts",
    },
    {
        director: "Brett Morgen",
        genre: "Documentary",
        releaseDate: "January 24, 2015",
        rottenTomatoes: 97,
        runtime: 145,
        title: "Kurt Cobain: Montage of Heck",
        image:
            "https://m.media-amazon.com/images/M/MV5BMjIyOTcxMTU2NV5BMl5BanBnXkFtZTgwNjcyMDg3NDE@._V1_FMjpg_UX1000_.jpg",
        trailer:
            "https://www.youtube.com/embed/DsB6SzPV9B0",
    },
    {
        director:
            "Tamara Kotevska, Ljubomir Stefanov",
        genre: "Documentary",
        releaseDate: "January 28, 2019",
        rottenTomatoes: 100,
        runtime: 85,
        title: "Honeyland",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91EqKJrty8L._RI_.jpg",
        trailer:
            "https://www.youtube.com/embed/B27ORUHlp6E",
    },
    {
        director: "Sergio Leone",
        genre: "Western",
        releaseDate: "December 29, 1967",
        rottenTomatoes: 97,
        runtime: 178,
        title: "The Good the Bad and the Ugly",
        image:
            "https://static.displate.com/280x392/displate/2019-11-06/4f4f0f594af3c178a3f07b3727e9fbad_bd5bcaf124c5e17854be00ef3f9bdb46.jpg",
        trailer:
            "https://www.youtube.com/embed/WCN5JJY_wiA",
    },
    {
        director: "Sergio Leone",
        genre: "Western",
        releaseDate: "July 4, 1969",
        rottenTomatoes: 96,
        runtime: 145,
        title: "Once Upon a Time in the West",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71a5oqhQBwL._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/c8CJ6L0I6W8",
    },
    {
        director: "Clint Eastwood",
        genre: "Western",
        releaseDate: "August 7, 1992",
        rottenTomatoes: 96,
        runtime: 131,
        title: "Unforgiven",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51hItH2NJJL._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/ftTX4FoBWlE",
    },
    {
        director: "Quentin Tarantino",
        genre: "Western",
        releaseDate: "December 25, 2012",
        rottenTomatoes: 87,
        runtime: 165,
        title: "Django Unchained",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/912vL7muRwL.jpg",
        trailer:
            "https://www.youtube.com/embed/0fUCuvNlOCg",
    },
    {
        director: "George Roy Hill",
        genre: "Western",
        releaseDate: "September 23, 1969",
        rottenTomatoes: 89,
        runtime: 110,
        title: "Butch Cassidy and the Sundance Kid",
        image:
            "https://cdn.shopify.com/s/files/1/0747/3829/products/HP3042_9871f631-512d-46cf-bada-1fd5329db678_1024x1024.jpg?v=1571445096",
        trailer:
            "https://www.youtube.com/embed/YdJW2UxvSFQ",
    },
    {
        director: "James Mangold",
        genre: "Western",
        releaseDate: "September 7, 2007",
        rottenTomatoes: 89,
        runtime: 122,
        title: "3:10 to Yuma",
        image:
            "https://www.themoviedb.org/t/p/original/xGK9wr1dSjQGSU1EvuLFiorXaAe.jpg",
        trailer:
            "https://www.youtube.com/embed/jX1m45CwvJ8",
    },
    {
        director: "Fred Zinnemann",
        genre: "Western",
        releaseDate: "July 30, 1952",
        rottenTomatoes: 94,
        runtime: 85,
        title: "High Noon",
        image:
            "https://m.media-amazon.com/images/M/MV5BOWIzZGUxZmItOThkMS00Y2QxLTg0MTYtMDdhMjRlNTNlYTI3L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/g9CR_tib0CA",
    },
    {
        director: "Howard Hawks",
        genre: "Western",
        releaseDate: "March 18, 1959",
        rottenTomatoes: 96,
        runtime: 141,
        title: "Rio Bravo",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51RWDqP4U8L.jpg",
        trailer:
            "https://www.youtube.com/embed/WPO12ZzGS84",
    },
    {
        director: "Anthony Mann",
        genre: "Western",
        releaseDate: "June 7, 1950",
        rottenTomatoes: 100,
        runtime: 92,
        title: "Winchester '73",
        image:
            "data:image/jpeg;base64,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",
        trailer:
            "https://www.youtube.com/embed/bFDoXUhpNPg",
    },
    {
        director: "Howard Hawks",
        genre: "Western",
        releaseDate: "September 17, 1948",
        rottenTomatoes: 100,
        runtime: 133,
        title: "Red River",
        image:
            "https://www.themoviedb.org/t/p/original/jyNTsAzrIWB441OtvfbgKtx1kFS.jpg",
        trailer:
            "https://www.youtube.com/embed/ZxVCrIMPQXI",
    },
    {
        director: "Jonathan Demme",
        genre: "Thriller",
        releaseDate: "February 14, 1991",
        rottenTomatoes: 95,
        runtime: 118,
        title: "The Silence of the Lambs",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61O-dnYIhBL._AC_SY741_.jpg",
        trailer:
            "https://www.youtube.com/embed/W6Mm8Sbe__o",
    },
    {
        director: "Bong Joon-ho",
        genre: "Thriller",
        releaseDate: "October 11, 2019",
        rottenTomatoes: 99,
        runtime: 132,
        title: "Parasite",
        image:
            "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/5xH0HfJHsaY",
    },
    {
        director: "M. Night Shyamalan",
        genre: "Thriller",
        releaseDate: "August 6, 1999",
        rottenTomatoes: 86,
        runtime: 107,
        title: "The Sixth Sense",
        image:
            "https://cdn.shopify.com/s/files/1/0747/3829/products/HP3186_2a7b1fe6-db55-4fe9-9d97-0ccf44c01900_1024x1024.jpg?v=1571445156",
        trailer:
            "https://www.youtube.com/embed/3-ZP95NF_Wk",
    },
    {
        director: "Alfred Hitchcock",
        genre: "Thriller",
        releaseDate: "July 1, 1959",
        rottenTomatoes: 97,
        runtime: 136,
        title: "North By Northwest",
        image:
            "http://www.limitedruns.com/media/cache/ce/ee/ceee37dc89e46d36afb1ab0edcd6420c.jpg",
        trailer:
            "https://www.youtube.com/embed/Fx0QuZJVTFE",
    },
    {
        director: "Christopher Nolan",
        genre: "Thriller",
        releaseDate: "March 16, 2001",
        rottenTomatoes: 93,
        runtime: 113,
        title: "Memento",
        image:
            "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c15059527ae4d9c832dbb365b418369e_7c2bb4af-8bcd-428c-8904-27ddc512a45c_500x.jpg?v=1573594896",
        trailer:
            "https://www.youtube.com/embed/4CV41hoyS8A",
    },
    {
        director: "David Lynch",
        genre: "Thriller",
        releaseDate: "October 19, 2001",
        rottenTomatoes: 85,
        runtime: 147,
        title: "Mulholland Drive",
        image:
            "http://cdn.shopify.com/s/files/1/1057/4964/products/Mulholland-Drive-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?v=1670447557",
        trailer:
            "https://www.youtube.com/embed/7KgH9n1c4mM",
    },
    {
        director: "Rob Reiner",
        genre: "Thriller",
        releaseDate: "November 30, 1990",
        rottenTomatoes: 91,
        runtime: 107,
        title: "Misery",
        image:
            "https://cdn.shopify.com/s/files/1/1416/8662/products/Misery_1990_original_film_art.webp?v=1657309167",
        trailer:
            "https://www.youtube.com/embed/XHQ9CPRfDsw",
    },
    {
        director: "Nicolas Winding Refn",
        genre: "Thriller",
        releaseDate: "September 16, 2011",
        rottenTomatoes: 93,
        runtime: 100,
        title: "Drive",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81tdQqbCdWL._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/KBiOF3y1W0Y",
    },
    {
        director: "Roman Polanski",
        genre: "Thriller",
        releaseDate: "June 20, 1974",
        rottenTomatoes: 99,
        runtime: 131,
        title: "Chinatown",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81+ebrESqBL._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/T37QkBc4IGY",
    },
    {
        director: "Steven Spielberg",
        genre: "Thriller",
        releaseDate: "June 20, 1975",
        rottenTomatoes: 97,
        runtime: 130,
        title: "Jaws",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71eMMDtyi8L._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/U1fu_sA7XhE",
    },
    {
        director: "Alfred Hitchcock",
        genre: "Mystery",
        releaseDate: "August 4, 1954",
        rottenTomatoes: 98,
        runtime: 112,
        title: "Rear Window",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81FA-25ugSL._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/m01YktiEZCw",
    },
    {
        director: "Orson Welles",
        genre: "Mystery",
        releaseDate: "September 5, 1941",
        rottenTomatoes: 99,
        runtime: 119,
        title: "Citizen Kane",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg/511px-Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg",
        trailer:
            "https://www.youtube.com/embed/8dxh3lwdOFw",
    },
    {
        director: "Rian Johnson",
        genre: "Mystery",
        releaseDate: "September 7, 2019",
        rottenTomatoes: 97,
        runtime: 130,
        title: "Knives Out",
        image:
            "https://dyn1.heritagestatic.com/lf?set=path%5B2%2F2%2F4%2F9%2F0%2F22490833%5D&call=url%5Bfile%3Aproduct.chain%5D",
        trailer:
            "https://www.youtube.com/embed/xi-1NchUqMA",
    },
    {
        director: "David Fincher",
        genre: "Mystery",
        releaseDate: "December 20, 2011",
        rottenTomatoes: 86,
        runtime: 160,
        title: "The Girl With the Dragon Tattoo",
        image:
            "https://www.themoviedb.org/t/p/original/vbLedKc1BUF4FOH1GyHW62FulCc.jpg",
        trailer:
            "https://www.youtube.com/embed/WVLvMg62RPA",
    },
    {
        director: "David Fincher",
        genre: "Mystery",
        releaseDate: "October 3, 2014",
        rottenTomatoes: 88,
        runtime: 149,
        title: "Gone Girl",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61cdYGoHFrL._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/2-_-1nJf8Vg",
    },
    {
        director: "David Fincher",
        genre: "Mystery",
        releaseDate: "March 2, 2007",
        rottenTomatoes: 90,
        runtime: 160,
        title: "Zodiac",
        image:
            "https://www.themoviedb.org/t/p/original/6Ia73zOscpilYsANAGGDw3xqC2D.jpg",
        trailer:
            "https://www.youtube.com/embed/yNncHPl1UXg",
    },
    {
        director: "Evan Morgan",
        genre: "Mystery",
        releaseDate: "October 16, 2020",
        rottenTomatoes: 85,
        runtime: 100,
        title: "The Kid Detective",
        image:
            "https://m.media-amazon.com/images/M/MV5BOWEyNjZmOGEtMmZkYy00MTEzLWFmY2UtZTkwYjJlYzUxYWUwXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/KEyiKNXsVGo",
    },
    {
        director: "Dan Trachtenberg",
        genre: "Mystery",
        releaseDate: "March 11, 2016",
        rottenTomatoes: 90,
        runtime: 105,
        title: "10 Cloverfield Lane",
        image:
            "https://m.media-amazon.com/images/M/MV5BMjEzMjczOTIxMV5BMl5BanBnXkFtZTgwOTUwMjI3NzE@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/saHzng8fxLs",
    },
    {
        director: "Terry Gilliam",
        genre: "Mystery",
        releaseDate: "January 5, 1996",
        rottenTomatoes: 88,
        runtime: 130,
        title: "12 Monkeys",
        image:
            "https://m.media-amazon.com/images/M/MV5BN2Y2OWU4MWMtNmIyMy00YzMyLWI0Y2ItMTcyZDc3MTdmZDU4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/15s4Y9ffW_o",
    },
    {
        director: "Bryan Singer",
        genre: "Mystery",
        releaseDate: "August 16, 1995",
        rottenTomatoes: 88,
        runtime: 106,
        title: "The Usual Suspects",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51ANy73yJuL._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/oiXdPolca5w",
    },
    {
        director: "Steven Spielberg",
        genre: "Adventure",
        releaseDate: "June 12, 1981",
        rottenTomatoes: 96,
        runtime: 105,
        title: "Raiders of the Lost Ark",
        image:
            "https://m.media-amazon.com/images/I/81UOBSDQh0L._AC_SY879_.jpg",
        trailer:
            "https://www.youtube.com/embed/XkkzKHCx154",
    },
    {
        director: "Peter Jackson",
        genre: "Adventure",
        releaseDate: "December 19, 2001",
        rottenTomatoes: 91,
        runtime: 178,
        title:
            "The Lord of the Rings: The Fellowship of the Ring",
        image:
            "https://m.media-amazon.com/images/I/71TZ8BmoZqL._AC_SY879_.jpg",
        trailer:
            "https://www.youtube.com/embed/V75dMMIW2B4",
    },
    {
        director: "Robert Zemeckis",
        genre: "Adventure",
        releaseDate: "December 7, 2000",
        rottenTomatoes: 89,
        runtime: 143,
        title: "Cast Away",
        image:
            "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_FMjpg_UX1000_.jpg",
        trailer:
            "https://www.youtube.com/embed/qGuOZPwLayY",
    },
    {
        director: "Michael Mann",
        genre: "Adventure",
        releaseDate: "September 25, 1992",
        rottenTomatoes: 93,
        runtime: 112,
        title: "The Last of the Mohicans",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51w6Y-RGvpL._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/yaQeVnN6pUc",
    },
    {
        director: "William Wyler",
        genre: "Adventure",
        releaseDate: "November 18, 1959",
        rottenTomatoes: 85,
        runtime: 212,
        title: "Ben-Hur",
        image:
            "https://m.media-amazon.com/images/M/MV5BNjgxY2JiZDYtZmMwOC00ZmJjLWJmODUtMTNmNWNmYWI5ODkwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/NR1ZHKw09n8",
    },
    {
        director: "Steven Spielberg",
        genre: "Adventure",
        releaseDate: "June 11, 1993",
        rottenTomatoes: 91,
        runtime: 127,
        title: "Jurassic Park",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61fExTEY7dL.jpg",
        trailer:
            "https://www.youtube.com/embed/QWBKEmWWL38",
    },
    {
        director: "Henry Levin",
        genre: "Adventure",
        releaseDate: "December 16, 1959",
        rottenTomatoes: 84,
        runtime: 132,
        title: "Journey to the Center of the Earth",
        image:
            "https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/113796/journeycenterearht.jpg",
        trailer:
            "https://www.youtube.com/embed/4GsN66CB9sc",
    },
    {
        director: "Sean Penn",
        genre: "Adventure",
        releaseDate: "September 21, 2007",
        rottenTomatoes: 83,
        runtime: 148,
        title: "Into the Wild",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51jIDks7NAL._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/XZG1FzyB8DI",
    },
    {
        director: "Wolfgang Petersen",
        genre: "Adventure",
        releaseDate: "July 20, 1984",
        rottenTomatoes: 83,
        runtime: 92,
        title: "The NeverEnding Story",
        image:
            "https://www.themoviedb.org/t/p/w500/lWJC8om086h01f0CMGR9ombdpnI.jpg",
        trailer:
            "https://www.youtube.com/embed/UeFni9dOv7c",
    },
    {
        director: "Ang Lee",
        genre: "Adventure",
        releaseDate: "November 21, 2012",
        rottenTomatoes: 86,
        runtime: 127,
        title: "Life of Pi",
        image:
            "https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_FMjpg_UX1000_.jpg",
        trailer:
            "https://www.youtube.com/embed/3mMN693-F3U",
    },
    {
        director: "Chris Columbus",
        genre: "Fantasy",
        releaseDate: "November 14, 2001",
        rottenTomatoes: 81,
        runtime: 152,
        title:
            "Harry Potter and the Sorcerer's Stone",
        image:
            "https://cdn.shopify.com/s/files/1/1057/4964/products/Harry-Potter-and-the-Sorcerers-Stone-Vintage-Movie-Poster-Original-1-Sheet-27x41_c4945afd-ce07-48a9-b04c-937131a5f963.jpg?v=1661223826",
        trailer:
            "https://www.youtube.com/embed/VyHV0BRtdxo",
    },
    {
        director: "James Cameron",
        genre: "Fantasy",
        releaseDate: "December 18, 2009",
        rottenTomatoes: 82,
        runtime: 162,
        title: "Avatar",
        image:
            "https://lumiere-a.akamaihd.net/v1/images/avatar_800x1200_208c9665.jpeg?region=0%2C0%2C800%2C1200",
        trailer:
            "https://www.youtube.com/embed/5PSNL1qE6VY",
    },
    {
        director: "Andrew Adamson",
        genre: "Fantasy",
        releaseDate: "December 9, 2005",
        rottenTomatoes: 75,
        runtime: 150,
        title:
            "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        image:
            "https://lumiere-a.akamaihd.net/v1/images/p_thechronicalsofnarnia_lionwitchwadrobe_19890_fe46d195.jpeg?region=0%2C0%2C540%2C810",
        trailer:
            "https://www.youtube.com/embed/TeeUm92phIU",
    },
    {
        director: "Guillermo del Toro",
        genre: "Fantasy",
        releaseDate: "December 29, 2006",
        rottenTomatoes: 95,
        runtime: 110,
        title: "Pan's Labyrinth",
        image:
            "https://alternativemovieposters.com/wp-content/uploads/2022/06/JoshSpicer_Pans-Labyrinth.jpg",
        trailer:
            "https://www.youtube.com/embed/jVZRnnVSQ8k",
    },
    {
        director: "Rob Reiner",
        genre: "Fantasy",
        releaseDate: "October 9, 1987",
        rottenTomatoes: 97,
        runtime: 98,
        title: "The Princess Bride",
        image:
            "https://1.bp.blogspot.com/-g8yo6WFM0TA/UESeZuTPk-I/AAAAAAAAM2E/WcUPKgHTv5Y/s1600/The+Princess+Bride+(1987)+0.jpg",
        trailer:
            "https://www.youtube.com/embed/O3CIXEAjcc8",
    },
    {
        director: "Mel Stuart",
        genre: "Fantasy",
        releaseDate: "June 30, 1971",
        rottenTomatoes: 91,
        runtime: 98,
        title: "Willy Wonka & the Chocolate Factory",
        image:
            "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2021/05/13152817/b94qXd1FcIwgzv0NYMUe2bjrzJR.jpg",
        trailer:
            "https://www.youtube.com/embed/2WKPKnggJqk",
    },
    {
        director: "Peter Jackson",
        genre: "Fantasy",
        releaseDate: "December 5, 2005",
        rottenTomatoes: 84,
        runtime: 201,
        title: "King Kong",
        image:
            "https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/AYaTCPbYGdk",
    },
    {
        director: "Ishirō Honda, Terry O. Morse",
        genre: "Fantasy",
        releaseDate: "April 27, 1956",
        rottenTomatoes: 83,
        runtime: 69,
        title: "Godzilla, King of the Monsters!",
        image:
            "https://i.etsystatic.com/16952472/r/il/09e694/1475954196/il_fullxfull.1475954196_swkd.jpg",
        trailer:
            "https://www.youtube.com/embed/Kl4UDPqe3Kc",
    },
    {
        director: "Jim Henson, Frank Oz",
        genre: "Fantasy",
        releaseDate: "December 17, 1982",
        rottenTomatoes: 77,
        runtime: 99,
        title: "The Dark Crystal",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51yBYb2gRdL._AC_.jpg",
        trailer:
            "https://www.youtube.com/embed/eaH6cOR8NKc",
    },
    {
        director: "Tim Burton",
        genre: "Fantasy",
        releaseDate: "December 7, 1990",
        rottenTomatoes: 89,
        runtime: 105,
        title: "Edward Scissorhands",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/715-+szpoLL.jpg",
        trailer:
            "https://www.youtube.com/embed/S8bBjpUBbro",
    },
    {
        director: "J. A. Bayona",
        genre: "Historical",
        releaseDate: "January 4, 2013",
        rottenTomatoes: 81,
        runtime: 114,
        title: "The Impossible",
        image:
            "https://www.themoviedb.org/t/p/original/k0DLCiDbnYywOHiISALbl2EH2NE.jpg",
        trailer:
            "https://www.youtube.com/embed/Bgw394ZKsis",
    },
    {
        director: "Steven Spielberg",
        genre: "Historical",
        releaseDate: "December 22, 2017",
        rottenTomatoes: 88,
        runtime: 116,
        title: "The Post",
        image:
            "https://lumiere-a.akamaihd.net/v1/images/thepost_feature-poster_584x800_9708a832.jpeg?region=0%2C0%2C584%2C800",
        trailer:
            "https://www.youtube.com/embed/nrXlY6gzTTM",
    },
    {
        director: "Adam McKay",
        genre: "Historical",
        releaseDate: "December 11, 2015",
        rottenTomatoes: 89,
        runtime: 130,
        title: "The Big Short",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91dC4o8mScL._AC_SY879_.jpg",
        trailer:
            "https://www.youtube.com/embed/rDlYm15ztK4",
    },
    {
        director: "Theodore Melfi",
        genre: "Historical",
        releaseDate: "January 6, 2017",
        rottenTomatoes: 93,
        runtime: 127,
        title: "Hidden Figures",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91rmoJ7uHgL.jpg",
        trailer:
            "https://www.youtube.com/embed/5wfrDhgUMGI",
    },
    {
        director: "Steven Spielberg",
        genre: "Historical",
        releaseDate: "November 9, 2012",
        rottenTomatoes: 89,
        runtime: 150,
        title: "Lincoln",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51ZywWjWDPL._AC_UF1000,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/KJVuqYkI2jQ",
    },
    {
        director: "Kathryn Bigelow",
        genre: "Historical",
        releaseDate: "December 19, 2012",
        rottenTomatoes: 91,
        runtime: 157,
        title: "Zero Dark Thirty",
        image:
            "https://www.themoviedb.org/t/p/original/5XzsijQUjaXa6Pkdn8AHulEg9w9.jpg",
        trailer:
            "https://www.youtube.com/embed/LJFra3B9sbA",
    },
    {
        director: "Ron Howard",
        genre: "Historical",
        releaseDate: "June 30, 1995",
        rottenTomatoes: 96,
        runtime: 140,
        title: "Apollo 13",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71RzeY3ixIL._AC_UF894,1000_QL80_.jpg",
        trailer:
            "https://www.youtube.com/embed/KtEIMC58sZo",
    },
    {
        director: "Alejandro González Iñárritu",
        genre: "Historical",
        releaseDate: "December 16, 2015",
        rottenTomatoes: 78,
        runtime: 156,
        title: "The Revenant",
        image:
            "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/QRfj1VCg16Y",
    },
    {
        director: "Jeff Nichols",
        genre: "Historical",
        releaseDate: "November 4, 2016",
        rottenTomatoes: 88,
        runtime: 123,
        title: "Loving",
        image:
            "https://m.media-amazon.com/images/M/MV5BMjE4NTI3NjIzOF5BMl5BanBnXkFtZTgwNjI0NTI5ODE@._V1_.jpg",
        trailer:
            "https://www.youtube.com/embed/bQMF5MSohPA",
    },
    {
        director: "David Lynch",
        genre: "Historical",
        releaseDate: "January 1, 1980",
        rottenTomatoes: 92,
        runtime: 124,
        title: "The Elephant Man",
        image:
            "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/A1fICuIPwBL.jpg",
        trailer:
            "https://www.youtube.com/embed/kxb_1457gGs",
    }
]

module.exports = seedData;