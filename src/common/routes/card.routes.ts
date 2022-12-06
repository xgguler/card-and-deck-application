import { CommonRoutesConfig } from '../routes.config';
import express from 'express';
import { drawCardHandler } from '../../controller/card.controller';
import validateResource from '../../middleware/validater.resource';
import { drawCardDetailsSchema } from '../../schema/card.schema';

export class CardRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'CardRoutes');
    }

    configureRoutes(): express.Application {
        this.app
            .route(`/api/create/draw-card`)
            .get(
                validateResource(drawCardDetailsSchema),
            )
            .post(
                drawCardHandler
            );

        return this.app;
    }
}