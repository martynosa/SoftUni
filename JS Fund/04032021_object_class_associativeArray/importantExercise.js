function solve(input) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let n = Number(input.shift()); // вземам първия елемент и го изтривам от масива и го обръщам в число
    let songs = [];


    for (let index = 0; index < n; index++) { //минава през масива записва в inputLine елемента на index и после го прави в нов масив като разделя стойностите от долната черта
        let inputLine = input.shift();
        let [type, name, time] = inputLine.split(`_`);
        songs.push(new Song(type, name, time)); //бута ги в нов обект от класа Song

    }

    let searchType = input.shift();

    if (searchType === `all`) {

        printSongs(songs);

    } else {
        let searchedSongs = songs.filter((s) => s.type === searchType);
        printSongs(searchedSongs);
    }

    function printSongs(songs) {

        for (const song of songs) {
            console.log(song.name)
        }

    }

}
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);