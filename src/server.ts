import App from '@/app';
import GraphicCardsRoute from '@/routes/graphicCards.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new GraphicCardsRoute()]);

app.listen();
