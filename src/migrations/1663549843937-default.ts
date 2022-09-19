import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663549843937 implements MigrationInterface {
    name = 'default1663549843937'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`email\` text NOT NULL, \`password\` text NOT NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`operation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` date NOT NULL, \`percentValue\` float NOT NULL, \`totalMoney\` float NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`operation\` ADD CONSTRAINT \`FK_7df4a22dbf4c663666e21c21123\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`operation\` DROP FOREIGN KEY \`FK_7df4a22dbf4c663666e21c21123\``);
        await queryRunner.query(`DROP TABLE \`operation\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
