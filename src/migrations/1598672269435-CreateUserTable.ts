import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1598672269435 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'user',
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
                    name: 'email',
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
        await queryRunner.dropTable('user');
    }

}
