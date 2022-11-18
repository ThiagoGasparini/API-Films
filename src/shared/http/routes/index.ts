import { Router } from 'express';

import { DeleteCategoryController } from 'src/controller/CategoryController/DeleteCategoryController';
import { GetAllCategoriesController } from 'src/controller/CategoryController/GetAllCategoriesController';
import { GetByIdCategoryController } from 'src/controller/CategoryController/GetByIdCategoryController';
import { UpdateCategoryController } from 'src/controller/CategoryController/UpdateCategoryController';
import { CreateFilmController } from 'src/controller/FilmController/CreateFilmController';
import { GetAllFilmsController } from 'src/controller/FilmController/GetAllFilmsController';
import { CreateCategoryController } from '../../../controller/CategoryController/CreateCategoryController';

const routes = Router();

routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoriesController().handle);
routes.get('/categories/:id', new GetByIdCategoryController().handle);
routes.delete('/categories/:id', new DeleteCategoryController().handle);
routes.put('/categories/:id', new UpdateCategoryController().handle);

routes.post('/films', new CreateFilmController().handle);
routes.get('/films', new GetAllFilmsController().handle);

export default routes;
