const express = require("express")
const cors = require("cors")
const serverless = require("serverless-http")
const app = express()
app.use(cors())

app.use(express.json())

app.get("/.netlify/functions/index", (req, res) => {
    res.send("success");
})

// app.listen(5000, () => {
//     console.log("Server is running on the port 5000")
// })

module.exports.handler = serverless(app);