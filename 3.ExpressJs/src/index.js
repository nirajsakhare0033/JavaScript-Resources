import express from 'express'

const app = express();

const PORT = process.env.PORT || 1000;


app.get("/", (req, res ) => {
  res.send("Hello World")
})
app.get("/get", (req, res) => {
  res.status(201).send("get method implemented")
})
app.get('/api/users', (req, res) => {
  res.send([
    { id: 1, username: "niraj", displayName: "nrj" },
    { id: 1, username: "akshay", displayName: "aki" },
    ,
    { id: 1, username: "suraj", displayName: "srj" },
  ]);
})


app.listen(PORT, () => {
  console.log(`Server Running On This ${PORT}`)
})