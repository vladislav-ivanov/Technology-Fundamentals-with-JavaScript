function solve(input) {
    let companies = {};
    for (let info of input) {
        let tokens = info.split(' -> ');
        let company = tokens[0];
        let id = tokens[1];

        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        if (!companies[company].includes(id)) {
            companies[company].push(id);
        }
    }

    let sortedCompanies= Object.entries(companies).sort((a,b)=>a[0].localeCompare(b[0]));

    for(let[company,idData] of sortedCompanies){
        console.log(company);
        for(let id of idData){
            console.log(`-- ${id}`);
            
        }
        
    }
}
solve(['SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])