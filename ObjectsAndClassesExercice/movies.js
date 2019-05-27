function movies(input) {
    let movie = [];
    for (let ln of input) {
        if (ln.includes('add movie ')) {
            let token = ln.split('add movie ').filter(x => x !== '');
            let nameMovie = token[0];
            movie.push({
                name: nameMovie
            })

        } else if (ln.includes(' directed by ')) {
            let token = ln.split(' directed by ').filter(x => x !== '');
            let nameMovie = token[0];
            let nameDir = token[1];
            let movi = movie.find(m => m.name === nameMovie);
            if (movi !== undefined) {
                movi['director'] = nameDir;
            }

        } else if (ln.includes(' on date ')) {
            let token = ln.split(' on date ').filter(x => x !== '');
            let nameMovie = token[0];
            let dateMovie = token[1];
            let movi = movie.find(m => m.name === nameMovie);
            if (movi !== undefined) {
                movi['date'] = dateMovie;
            }
        }
    }
    for(let movi of movie){
        if(movi.name && movi.director && movi.date){
            console.log(JSON.stringify(movi));
            
        }
    }
}
movies(['add movie Fast and Furious',
'add movie Godfather',
'Inception directed by Christopher Nolan',
'Godfather directed by Francis Ford Coppola',
'Godfather on date 29.07.2018',
'Fast and Furious on date 30.07.2018',
'Batman on date 01.08.2018',
'Fast and Furious directed by Rob Cohen'])