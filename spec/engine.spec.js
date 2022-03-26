import app from './app';
import request from 'supertest';
import {ViewEngine} from '../src';

describe('engine', () => {
    it('should use default ejs', async () => {
        const response = await request(app).get('/page1');
        expect(response.status).toEqual(200);
        const body = response.text;
        expect(body).toBe(`<!DOCTYPE html>
<html>
<body>
    <h1>My First Message</h1>
    <p>Hello World!</p>
</body>
</html>`);
    });
    it('should use engine', async () => {
        app.engine('ejs', ViewEngine.express());
        const response = await request(app).get('/page1');
        expect(response.status).toEqual(200);
        const body = response.text;
        expect(body).toBe(`<!DOCTYPE html>
<html>
<body>
    <h1>My First Message</h1>
    <p>Hello World!</p>
</body>
</html>`);
    });

    it('should use layout', async () => {
        app.engine('ejs', ViewEngine.express());
        const response = await request(app).get('/page2');
        expect(response.status).toEqual(200);
        const body = response.text;
        expect(body).toBe(`<!DOCTYPE html>
<html>
<body>

<div>
    <h1>My First Message</h1>
    <p>Hello World!</p>
</div>
</body>
</html>`);
    });
});