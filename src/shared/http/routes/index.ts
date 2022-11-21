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
import { GetAllUserController } from 'src/controller/UserController/GetAllUserController';
import { CreateUserController } from 'src/controller/UserController/CreateUserController';
import { CreateLoginController } from 'src/controller/UserController/CreateLoginController';
import isAuthenticated from 'src/middlewares/isAuthenticated';

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
  isAuthenticated,
  new CreateCategoryController().handle
);
routes.get('/categories', isAuthenticated, new GetAllCategoriesController().handle);
routes.get(
  '/categories/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  isAuthenticated,
  new GetByIdCategoryController().handle
);
routes.delete(
  '/categories/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  isAuthenticated,
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
  isAuthenticated,
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
  isAuthenticated,
  new CreateFilmController().handle
);
routes.get('/films', isAuthenticated, new GetAllFilmsController().handle);
routes.get(
  '/films/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  isAuthenticated,
  new GetByIdFilmController().handle
);
routes.delete(
  '/films/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  isAuthenticated,
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
  isAuthenticated,
  new UpdateFilmController().handle
);

// Rotas de usuários

routes.get('/users', isAuthenticated, new GetAllUserController().handle);
routes.post(
  '/users',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  new CreateUserController().handle
);

// Rota de Login

routes.post(
  '/login',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  new CreateLoginController().handle
);

export default routes;
