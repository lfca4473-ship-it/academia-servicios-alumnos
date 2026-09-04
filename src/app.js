import express from 'express';

export function createApp() {
    const app = express();

    app.use(express.json());

    app.get('/salud', (_request,response) => {
        response.json({
            estado: 'ok'
        });
    });
    return app;
}