const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;


// for serving react app after npm run build
// app.use(express.static(path.join(__dirname, 'client/build')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});