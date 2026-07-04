import express from "express";
import "dotenv/config";
import axios from "axios";

const PORT = process.env.PORT;
const app = express();

app.use(express.static("public"));

app.get("/api/health", (_, res) => {
    res.json({status:200, message:"healthy"})
})

app.get("/api/github/:username",async (req, res) => {
    try {
        const user = req.params.username
        const data = await axios.get(`https://api.github.com/users/${user}`)
        res.json(data.data)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})


app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`)
})
//  "current_user_url": "https://api.github.com/user",
//  "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
