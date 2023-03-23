import { NextFunction, Request, Response } from 'express';
import { GraphicCard } from '@/interfaces/graphicCards.interface';
import GraphicCardsService from '@/services/graphicCards.service';

class GraphicCardsController {
  public graphicCardsService = new GraphicCardsService();

  public getGraphicCards = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllGraphicCards: GraphicCard[] = await this.graphicCardsService.findAll();

      res.status(200).json({ data: findAllGraphicCards, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
}

export default GraphicCardsController;
