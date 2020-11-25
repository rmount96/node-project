const makeHeading = require("./makeHeading")
const {v4:uuid} = require('uuid');
const randomColor = require('randomcolor')


const navigation = `
    <nav>
        <span><a href="?page=home">Home</a></span>
        <span><a href="?page=contact">Contact</a></span>
        <span><a href="?page=about">About</a></span>
    </nav>
`

let generateContent = ({page, additional, count})=>{
    return  `
        <!DOCTYPE html>
        <html>
            <head><title>My Selection:${page || 'home'}</title><head>
            <body>
                ${navigation}
                ${makeHeading(page)}
                The count is ${count || 0}. I hope you are happy.
                <ul>
                    ${additional.join("")}
                </ul>
                <footer>
                    <div style = "background-color:${randomColor()}">Your Unique ID is ${uuid()}</div>
                    copyleft 2020
                </footer>
            </body>
        </html>
    `
}

module.exports = generateContent