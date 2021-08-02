import { MigrationInterface, QueryRunner,Table } from "typeorm";

export class CreatePosts1627889702787 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.createTable(new Table({
            name: 'posts',
            columns: [
                {
                    name: 'id',
                    isGenerated: true,
                    type: 'int',
                    generationStrategy: 'increment',
                    isPrimary: true
                },
                {
                    name: 'title',
                    type: 'varchar'
                },
                {
                    name: 'content',
                    type: 'text'
                },
                {
                    name: 'authorId',
                    type: 'int'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.dropTable('posts')
    }

}
