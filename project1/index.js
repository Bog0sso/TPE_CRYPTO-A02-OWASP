const authenticateToken = require("./token").authenticateToken;
const app = require('express')();
//MIDDLEWARE
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const jwt = require('jsonwebtoken');
//MIDDLEWARE

//LOGGING ROUTE - GENERATES A JWT
app.post("/api/v0/user/login",(req, res) => {
    const { username, password } = req.body;
    const user = {username, password};
    const token = jwt.sign(user, "jwtsecretkey",{expiresIn:100000});
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);
    res.status(200).send({username, token});
})

//
app.get("/api/v0/user/login", (req, res) => {

    authenticateToken(req,res,next());
    res.status(200).send({message: "connected"})
});
app.listen(3000);