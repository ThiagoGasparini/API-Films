import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFilms1668800713039 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'films',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'category_id',
            type: 'uuid',
          },
          {
            name: 'durations',
            type: 'numeric',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_films_category',
            columnNames: ['category_id'],
            referencedTableName: 'categories',
            referencedColumnNames: ['id'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('films');
  }
}
