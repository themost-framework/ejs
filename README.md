# @themost/ejs

EJS view engine extension for supporting layouts

## Installation

    npm i @themost/ejs

## Usage

Register [EJS](https://github.com/mde/ejs) view engine extension for Express.js

    import express from 'express';
    import path from 'path';
    import {ViewEngine} from '@themost/ejs';

    const app = express();
    // set ejs engine
    app.engine('ejs', ViewEngine.express());
    app.set('view engine', 'ejs');
    // resolve views root path
    app.set('views', path.resolve(__dirname, './views'));

And start using ejs layouts:

layout.ejs

    <!DOCTYPE html>
    <html>
        <head>
        </head>
        <body>
            <%- body %>
        </body>
    </html>

page.ejs

    <% layout('master') %>
    <div>
        <h1>My First Message</h1>
        <p><%=message%></p>
    </div>