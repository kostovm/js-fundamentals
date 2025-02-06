// Initial solution

function movies(input) {
    let moviesThatConcernsMe = [];

    for (let el of input) {
        if (el.includes("addMovie")) {
            let findMovie = el.split(" ");
            findMovie.shift();
            let movie = findMovie.join(" ")
            if (moviesThatConcernsMe.includes(movie) === false) {
                moviesThatConcernsMe.push(movie)
            }

        }
    }
    for (let movie of moviesThatConcernsMe) {
        let movieDataBase = { name: movie, hasAdirector: false, hasADate: false };
        for (let line of input) {
            if (line.includes(movie) && line.includes("onDate")) {
                let findDate = line.split(" ");
                let title = (findDate.splice(0, findDate.indexOf("onDate"))).join(" ");
                if (title === movie) {
                    reliseDate = findDate[findDate.length - 1]
                    movieDataBase.date = reliseDate;
                    movieDataBase.hasADate = true;
                }
            }
            if (line.includes(movie) && line.includes("directedBy")) {
                let findDirector = line.split(" ");
                let title = (findDirector.splice(0, findDirector.indexOf("directedBy"))).join(" ");
                if (title === movie) {
                    let indexOfDelition = findDirector.indexOf("directedBy");
                    let director = findDirector.splice(indexOfDelition + 1).join(" ");
                    movieDataBase.director = director;
                    movieDataBase.hasAdirector = true;
                }
            }
        }
        if (movieDataBase.hasADate === true && movieDataBase.hasAdirector === true) {
            delete movieDataBase.hasADate;
            delete movieDataBase.hasAdirector
            console.log(JSON.stringify(movieDataBase));
        }

    }
}

// Solution after revisiting the task

function movies(input) {

    let movieDataBase = [];

    class Movie {
        constructor(name, director, date) {
            this.name = name,
                this.director = director,
                this.date = date
        }
    }

    function checkMovie(title) {

        for (let movie of movieDataBase) {

            if (title === movie.name) {
                return movie;
            }
        }

    }

    for (let command of input) {
        if (command.includes('addMovie')) {
            let title = command.split('addMovie ')[1];
            let thisMovie = checkMovie(title);
            if (thisMovie === undefined) {
                let newMovie = new Movie(title);
                movieDataBase.push(newMovie);
            }
        } else if (command.includes('directedBy')) {
            let [title, director] = command.split(' directedBy ');
            let thisMovie = checkMovie(title);
            if (thisMovie) {
                thisMovie.director = director;
            }
        } else if (command.includes('onDate')) {
            let [title, date] = command.split(' onDate ');
            let thisMovie = checkMovie(title);
            if (thisMovie) {
                thisMovie.date = date;
            }
        }
    }

    for (let record of movieDataBase) {
        if (record.name !== undefined && record.director !== undefined && record.date !== undefined) {
            let movieAsJSON = JSON.stringify(record);
            console.log(movieAsJSON);
        }
    }

}