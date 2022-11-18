import { getRepository } from 'typeorm'
import { Category } from "@modules/categories/typeorm/entities/Category";

export class GetAllCategoriesService {
  async execute() {
    const repo = getRepository(Category)

    const categories = await repo.find();

    return categories;
  }
}