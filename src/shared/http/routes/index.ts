import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { DeleteCategoryController } from 'src/controller/CategoryController/DeleteCategoryController';
import { GetAllCategoriesController } from 'src/controller/CategoryController/GetAllCategoriesController';
import { GetByIdCategoryController } from 'src/controller/CategoryController/GetByIdCategoryController';
import { UpdateCategoryController } from 'src/controller/CategoryController/UpdateCategoryController';
import { CreateFilmController } from 'src/controller/FilmController/CreateFilmController';
import { GetAllFilmsController } from 'src/controller/FilmController/GetAllFilmsController';
import { CreateCategoryController } from '../../../controller/CategoryController/CreateCategoryController';
import { GetByIdFilmController } from 'src/controller/FilmController/GetByIdFilmController';
import { DeleteFilmController } from 'src/controller/FilmController/DeleteFilmController';
import { UpdateFilmController } from 'src/controller/FilmController/UpdateFilmController';

const routes = Router();

// Rotas das Categorias

routes.post(
  '/categories',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required,
    },
  }),
  new CreateCategoryController().handle
);
routes.get('/categories', new GetAllCategoriesController().handle);
routes.get(
  '/categories/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  new GetByIdCategoryController().handle
);
routes.delete(
  '/categories/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  new DeleteCategoryController().handle
);
routes.put(
  '/categories/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required,
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  new UpdateCategoryController().handle
);

// Rotas dos Filmes

routes.post(
  '/films',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required,
      category_id: Joi.string().required,
      durations: Joi.number().required,
    },
  }),
  new CreateFilmController().handle
);
routes.get('/films', new GetAllFilmsController().handle);
routes.get(
  '/films/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  new GetByIdFilmController().handle
);
routes.delete(
  '/films/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  new DeleteFilmController().handle
);
routes.put(
  '/films/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required,
      category_id: Joi.string().required,
      durations: Joi.number().required,
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  new UpdateFilmController().handle
);

export default routes;
