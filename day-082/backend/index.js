import express from 'express';

const app = express();
app.get('/', (req, res) => {
    res.send('Server is ready');
});


app.get('/jokes', (req,res)=>{
    // jokes.js
const jokes = [
    { id: 1, joke: "Why don't scientists trust atoms? Because they make up everything!" },
    { id: 2, joke: "Why did the math book look sad? Because it had too many problems." },
    { id: 3, joke: "Why don't programmers like nature? It has too many bugs." },
    { id: 4, joke: "What do you call fake spaghetti? An impasta!" },
    { id: 5, joke: "Why do cows wear bells? Because their horns don't work." }
];

res.send(jokes);

} );



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})