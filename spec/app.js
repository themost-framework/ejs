import express from 'express';
import path from 'path';

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.get('/page1', (req, res) => {
    return res.render('page1', {
        message: 'Hello World!'
    });
});

app.get('/page2', (req, res) => {
    return res.render('page2', {
        message: 'Hello World!'
    });
});

app.use((err, req, res, next) =>  {
    console.error(err);
    return next();
});

export default app;