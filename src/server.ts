import express, { response } from 'express';
const app = express();

app.get('/test', (request, response) => {
   return response.send('olá nlw');
});

app.post('/test-post', (request, response) => {
    response.send('nlw post');
});

app.listen(3000, () => {
    console.log('server running');
});
