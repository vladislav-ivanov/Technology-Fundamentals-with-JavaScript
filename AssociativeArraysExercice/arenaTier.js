function solve(input) {
    let gladiator = {};
    input.pop();
    for (let info of input) {
        let tokens = info.split(' ');
        let firstGladiator = tokens[0];
        let secondGlad = tokens[2];
        let separator = tokens[1];
        let technique = tokens[2];
        let skillPoints = +tokens[4];

        if (separator === '->') {
            if (!gladiator.hasOwnProperty(firstGladiator)) {
                gladiator[firstGladiator] = {
                    technique: {},
                    totalSkillPoints: 0,
                }
            }
            if (!gladiator[firstGladiator].technique.hasOwnProperty(technique)) {
                gladiator[firstGladiator].technique[technique] = skillPoints;
                gladiator[firstGladiator].totalSkillPoints += skillPoints;
            } else if (gladiator[firstGladiator].technique[technique] < skillPoints) {
                gladiator[firstGladiator].totalSkillPoints += skillPoints - gladiator[firstGladiator].technique[technique];
                gladiator[firstGladiator].technique[technique] = skillPoints;
            }

        } else if (separator === "vs") {
            if (gladiator.hasOwnProperty(firstGladiator) && gladiator.hasOwnProperty(secondGlad)) {
                let hasCommon = false;
                let firstTech = Object.keys(gladiator[firstGladiator].technique);
                let secondTech = Object.keys(gladiator[secondGlad].technique);
                for (let t of firstTech) {
                    if (secondTech.includes(t)) {
                        hasCommon = true;
                        break;
                    }
                }
                if (hasCommon) {
                    if (gladiator[firstGladiator].totalSkillPoints > gladiator[secondGlad].totalSkillPoints) {
                        delete gladiator[secondGlad];
                    } else if (gladiator[firstGladiator].totalSkillPoints < gladiator[secondGlad].totalSkillPoints) {
                        delete gladiator[firstGladiator];
                    }
                }
            }
        }
    }

    let sortedGlad = Object.entries(gladiator).sort(function (a, b) {
        let result = b[1].totalSkillPoints - a[1].totalSkillPoints;
        if (result === 0) {
            result = a[0].localeCompare(b[0]);
        }
        return result;
    });
    for (let sorted of sortedGlad) {
        let gladName = sorted[0];
        let totSkillPo = sorted[1].totalSkillPoints;
        console.log(`${gladName}: ${totSkillPo} skill`);
        let sortedTechniques = Object.entries(sorted[1].technique)
        .sort(function (a, b) {
            let result = b[1] - a[1];
            if (result === 0) {
                result = a[0].localeCompare(b[0]);
            }
            return result;
        });

        for (let [technique, skill] of sortedTechniques) {
            console.log(`- ${technique} <!> ${skill}`);

        }
    }
}
solve(['Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar']);