function systemRerister(params) {
    let systems = {};
    for (let param of params) {
        let tokens = param.split(' | ').filter(x => x !== '');
        let currentSystem = tokens[0];
        let currentComponent = tokens[1];
        let currensSComponent = tokens[2];
        if (!systems.hasOwnProperty(currentSystem)) {
            systems[currentSystem] = {};
        } if (!systems[currentSystem].hasOwnProperty(currentComponent)) {
            systems[currentSystem][currentComponent] = [];
        }
        systems[currentSystem][currentComponent].push(currensSComponent);
    }
    let sortedKeys = Object.keys(systems).sort(function (a, b) {

        let result = Object.keys(systems[b]).length - Object.keys(systems[a]).length;
        if (result === 0) {
            result = a.localeCompare(b);
        }
        return result;
    });
    for (let systemKeys of sortedKeys) {
        console.log(systemKeys);
        let sortedCompKeys = Object.keys(systems[systemKeys]).sort(function (a, b) {
            return systems[systemKeys][b].length - systems[systemKeys][a].length;
        });
        for (let component of sortedCompKeys) {
            console.log('|||' + component);
            let subcomps = systems[systemKeys][component];
            for (let subcomp of subcomps) {
                console.log('||||||' + subcomp);

            }
        }
    }
}
systemRerister(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);