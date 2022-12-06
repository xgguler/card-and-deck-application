import { CommonRoutesConfig } from '../routes.config';
import express from "express";

export class CommonRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'CardRoutes');
    }

    configureRoutes(): express.Application {
        this.app
            .route(`/healthcheck`)
            .get((req: express.Request, res: express.Response) => {
                res.sendStatus(200);
            })

        return this.app;
    }
}