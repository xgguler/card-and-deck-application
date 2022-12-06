import {Request, Response} from 'express';
import CardService from '../service/card.service';
import logger from '../utils/logger';
import { DrawCardInput } from "../schema/card.schema";

export async function drawCardHandler(
    req: Request<{}, {}, DrawCardInput['body']>, res: Response
  ) {
      try {
        const uuid = req.body.uuid;
        const count = req.body.count;
        const card = await CardService.aggregateCard(uuid, count);
        if (!card) {
            return res.send(404);
        }
        return res.send(card);
      } catch (e) {
        logger.error(e);
        return res.status(400).send(e.message);
      }
  }