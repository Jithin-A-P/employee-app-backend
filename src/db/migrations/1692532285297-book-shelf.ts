import { MigrationInterface, QueryRunner } from "typeorm";

export class BookShelf1692532285297 implements MigrationInterface {
    name = 'BookShelf1692532285297'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shelf" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "shelf_code" character varying NOT NULL, "location" character varying NOT NULL, CONSTRAINT "UQ_de0478c3e7f3d89ed2f91dd6725" UNIQUE ("shelf_code"), CONSTRAINT "PK_da2ce57e38dfc635d50d0e5fc8f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "book" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "isbn" character varying NOT NULL, "title" character varying NOT NULL, "author" character varying NOT NULL, "category" character varying NOT NULL, "description" character varying, "publisher" character varying, "release_date" character varying, "thumbnail_url" character varying, "toatl_count" integer NOT NULL, "available_count" integer NOT NULL, CONSTRAINT "UQ_bd183604b9c828c0bdd92cafab7" UNIQUE ("isbn"), CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "book_shelf_jn" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "book_count" integer NOT NULL, CONSTRAINT "PK_0fe4d2c6aeec6ac16dfd8356190" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP CONSTRAINT "PK_0fe4d2c6aeec6ac16dfd8356190"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP COLUMN "book_count"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD CONSTRAINT "PK_0fe4d2c6aeec6ac16dfd8356190" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD "deleted_at" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD "book_count" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD "book_isbn" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP CONSTRAINT "PK_0fe4d2c6aeec6ac16dfd8356190"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD CONSTRAINT "PK_b631b27d3aa2954e318d22b1fb8" PRIMARY KEY ("id", "book_isbn")`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD "shelf_code" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP CONSTRAINT "PK_b631b27d3aa2954e318d22b1fb8"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD CONSTRAINT "PK_8dd16edc762b715de0dbdde6984" PRIMARY KEY ("id", "book_isbn", "shelf_code")`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP CONSTRAINT "PK_8dd16edc762b715de0dbdde6984"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD CONSTRAINT "PK_cf4e9f46f98d24f3186dffc6113" PRIMARY KEY ("book_isbn", "shelf_code")`);
        await queryRunner.query(`CREATE INDEX "IDX_19408f367519a83586bbcc7c37" ON "book_shelf_jn" ("book_isbn") `);
        await queryRunner.query(`CREATE INDEX "IDX_3ea08526e10844c330fbbdc8b7" ON "book_shelf_jn" ("shelf_code") `);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD CONSTRAINT "FK_19408f367519a83586bbcc7c377" FOREIGN KEY ("book_isbn") REFERENCES "book"("isbn") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD CONSTRAINT "FK_3ea08526e10844c330fbbdc8b70" FOREIGN KEY ("shelf_code") REFERENCES "shelf"("shelf_code") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP CONSTRAINT "FK_3ea08526e10844c330fbbdc8b70"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP CONSTRAINT "FK_19408f367519a83586bbcc7c377"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3ea08526e10844c330fbbdc8b7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_19408f367519a83586bbcc7c37"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP CONSTRAINT "PK_cf4e9f46f98d24f3186dffc6113"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD CONSTRAINT "PK_8dd16edc762b715de0dbdde6984" PRIMARY KEY ("id", "book_isbn", "shelf_code")`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP CONSTRAINT "PK_8dd16edc762b715de0dbdde6984"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD CONSTRAINT "PK_b631b27d3aa2954e318d22b1fb8" PRIMARY KEY ("id", "book_isbn")`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP COLUMN "shelf_code"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP CONSTRAINT "PK_b631b27d3aa2954e318d22b1fb8"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD CONSTRAINT "PK_0fe4d2c6aeec6ac16dfd8356190" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP COLUMN "book_isbn"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP COLUMN "book_count"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP CONSTRAINT "PK_0fe4d2c6aeec6ac16dfd8356190"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD "book_count" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD "deleted_at" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "book_shelf_jn" ADD CONSTRAINT "PK_0fe4d2c6aeec6ac16dfd8356190" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP TABLE "book_shelf_jn"`);
        await queryRunner.query(`DROP TABLE "book"`);
        await queryRunner.query(`DROP TABLE "shelf"`);
    }

}
