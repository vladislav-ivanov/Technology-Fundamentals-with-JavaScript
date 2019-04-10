function solve(num) {
    let dayOfWeek = ['Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'];

    if (1 <= num && num <= 7) {
        console.log(dayOfWeek[num - 1]);
    } else {
        console.log('Invalid day!');
    }
}
solve(1);