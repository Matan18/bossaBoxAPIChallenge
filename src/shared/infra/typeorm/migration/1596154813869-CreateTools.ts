import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTools1596154813869 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'tools',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: "uuid",
          default: 'uuid_generate_v4()'
        },
        {
          name: 'title',
          isUnique: true,
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'link',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'description',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'tags',
          type: 'varchar[]',
          isNullable: false,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tools')
  }

}
