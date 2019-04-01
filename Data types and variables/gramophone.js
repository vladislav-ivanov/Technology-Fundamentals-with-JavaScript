function solve(bandName, albumName, song) {
    let duration = (bandName.length * albumName.length) * song.length / 2;
    let rotation = Math.ceil(duration / 2.5);

    console.log(`The plate was rotated ${rotation} times.`);
}
solve('Black Sabbath', 'Paranoid', 'War Pigs')