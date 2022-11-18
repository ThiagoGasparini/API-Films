import { getRepository } from 'typeorm'
import { Category } from "@modules/categories/typeorm/entities/Category";

export class GetByIdCategoryService {
  async execute(id: string) {
    const repo = getRepository(Category);

    const category = await repo.findOne(id);

    if (!category) {
      return new Error('Category does not exists');
    }

    return category;
  }
}