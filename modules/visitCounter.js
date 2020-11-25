const fs = require("fs")

let visits = JSON.parse(fs.readFileSync(__dirname+'/visits.json', 'utf8'))
console.log(visits)

const addVisit = (address) => {
    console.log(`a visit has come in from ${address}`)
    
    let newVisit = {
        address:address,
        time:new Date().getTime()
    }
    
    visits = [...visits.filter(visit => visit.address !== address), newVisit]

    fs.writeFile(__dirname+"/visits.json", JSON.stringify(visits), 'utf8', (err) => {
        console.log('visit is recorded')
    })

}

module.exports = addVisit