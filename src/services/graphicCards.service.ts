import { GraphicCard } from '@/interfaces/graphicCards.interface';
import GraphicCardModel from '@/models/graphicCards.model';

class GraphicCardsService {
  public graphicCards = GraphicCardModel;

  public async findAll(): Promise<GraphicCard[]> {
    return [...this.graphicCards];
  }
}

export default GraphicCardsService;
