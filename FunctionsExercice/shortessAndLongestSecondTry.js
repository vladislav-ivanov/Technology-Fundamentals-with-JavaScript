function wodrsLengt(str) {
    let arr = str.split(' ').filter(x => x !== '');
    let shortest = arr[0];
    let longest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        if (shortest.length > currentElement.length) {
            shortest = currentElement;
        }
        if (longest.length < currentElement.length) {
            longest = currentElement;
        }

    }
    console.log(`Longest -> ${longest}\nShortest -> ${shortest}`)
}
wodrsLengt("Hello people, are you familiar with the terms of application at the software university?")