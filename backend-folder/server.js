import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
//& with this the server can read the info
app.use(cors());
app.post("/user", (req, res) => {
  //!token from github
  const clientId = "Iv1.2e79adfb58734a39";
  const appId = "266241";

  //! url
  const url = `https://api.github.com/users/${req.body.user}?clientId=${clientId}&appId=${appId}`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((result) =>
      res.send({
        username: result.name,
        location: result.location,
        id: result.id,
        bio: result.bio,
        repos: result.public_repos,
        followers: result.followers,
      })
    )
    .catch((err) => console.error("error:" + err));
});

app.listen(7000, () => {
  console.log("Server is running on ....: http://localhost:7000");
});
