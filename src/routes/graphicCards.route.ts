import { Router } from 'express';
import GraphicCardsController from '@/controllers/graphicCards.controller';
import { Routes } from '@interfaces/routes.interface';

class GraphicCardsRoute implements Routes {
  public path = '/cards';
  public router = Router();
  public graphicCardsController = new GraphicCardsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.graphicCardsController.getGraphicCards);
  }
}

export default GraphicCardsRoute;
