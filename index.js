let express = require("express");
// console.log(app)
let app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
// app.send("Hello world");




app.get("/", (req, res) => {
    res.send("Hello world");
});
app.get("*", (req, res) => {
    res.send("404 not found");
})

