import {Request, Response} from 'express';
import DeckService from '../service/deck.service';
import logger from '../utils/logger';
import { CreateDeckInput, GetDeckByUUIDInput } from "../schema/deck.schema";

export async function createDeckHandler(req: Request<{}, {}, CreateDeckInput['body']>, res: Response) {
    try {
        const deck = await DeckService.createDeck(req.body);
        return res.send(deck);
    } catch (e) {
        logger.error(e);
        return res.status(400).send(e.message);
    }
}

export async function getDeckByUUIDHandler(
    req: Request<GetDeckByUUIDInput["params"]>,
    res: Response
  ) {
      try {
        const uuid = req.params.uuid;
        const deck = await DeckService.findDeckByUUID({ uuid });
        if (!deck) {
            return res.send(404);
        }
        return res.send(deck);
      } catch (e) {
        logger.error(e);
        return res.status(400).send(e.message);
      }
  }