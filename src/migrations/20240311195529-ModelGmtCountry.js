'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('GmtCountry', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('GmtCountry')
  }
}

/* Command SQL for create a table -->-->-->-->-->

  -- Table: public.GmtCountry

  -- DROP TABLE IF EXISTS public."GmtCountry";

  CREATE TABLE IF NOT EXISTS public."GmtCountry"
  (
      id integer NOT NULL DEFAULT nextval('"GmtCountry_id_seq"'::regclass),
      name character varying(255) COLLATE pg_catalog."default" NOT NULL,
      CONSTRAINT "GmtCountry_pkey" PRIMARY KEY (id)
  )

  TABLESPACE pg_default;

  ALTER TABLE IF EXISTS public."GmtCountry"
      OWNER to postgres;

*/
