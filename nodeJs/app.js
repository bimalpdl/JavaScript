const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, there!');
});

app.listen(3000, () => {
    console.log('server running at http://localhost:3000');
    console.error('Hello there, this is error message');
    console.warn('Hello again, I am warn message');
})