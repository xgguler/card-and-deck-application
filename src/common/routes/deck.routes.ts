import { CommonRoutesConfig } from '../routes.config';
import express from 'express';
import { createDeckHandler, getDeckByUUIDHandler } from '../../controller/deck.controller';
import validateResource from '../../middleware/validater.resource';
import { createDeckSchema, getDeckDetailsByUUIDSchema } from '../../schema/deck.schema';

export class DeckRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'DeckRoutes');
    }

    configureRoutes(): express.Application {
        this.app
            .route(`/api/create/deck`)
            .get(
                validateResource(createDeckSchema),
            )
            .post(
                createDeckHandler
            );

        this.app
            .route(`/api/get/deck-by-id/:uuid`)
            .get(
                validateResource(getDeckDetailsByUUIDSchema),
            )
            .get(
                getDeckByUUIDHandler
            );

        return this.app;
    }
}