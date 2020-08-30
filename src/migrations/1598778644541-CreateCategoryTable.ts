import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategoryTable1598778644541 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'category',
            columns: [
                {
                    name: 'id',
                    type: 'INTEGER',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'VARCHAR',
                },
                {
                    name: 'created_at',
                    type: 'TIMESTAMP',
                    default: 'CURRENT_TIMESTAMP'
                }
            ]
        }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('category');
    }

}
