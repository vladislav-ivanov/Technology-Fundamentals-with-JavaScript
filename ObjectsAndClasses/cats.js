function solve(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;

        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);

        }
    }
   let cats = arr
   .map(line => line.split(' '))
   .map(([name, age]) => new Cat(name, age))
   .forEach(cat => cat.meow());
}
solve(['Mellow 2', 'Tom 5'])