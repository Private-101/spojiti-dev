# Adding Prisma Migrate to an existing project
This guide describes how to add Prisma Migrate to an existing project.
[View Online](https://www.prisma.io/docs/guides/migrate/developing-with-prisma-migrate/add-prisma-migrate-to-a-project#baseline-your-production-environment)

This guide does not apply for MongoDB.
Instead of migrate dev, db push is used for MongoDB.

## Overview of the steps
The steps involved in adding Prisma Migrate to your project are:

- Introspect your database to update your Prisma schema
- Create a baseline migration
- Update your schema or migration to workaround features not supported by Prisma Schema Language
- Apply the baseline migration
- Commit the migration history and Prisma schema
- Introspect to create or update your Prisma schema

__Make sure your Prisma schema is in sync with your database schema.__
_This should already be true if you are using a previous version of Prisma Migrate._

### Introspect the database to make sure that your Prisma schema is up-to-date:
```bash
prisma db pull 
```

### Create a baseline migration
Baselining is the process of initializing a migration history for a database that:

✔ Existed before you started using Prisma Migrate
✔ Contains data that must be maintained (like production), which means that the database cannot be reset

Baselining tells Prisma Migrate to assume that one or more migrations have already been applied. This prevents generated migrations from failing when they try to create tables and fields that already exist.

To create a baseline migration:

If you have a prisma/migrations folder, delete, move, rename, or archive this folder.

Run the following command to create a migrations directory inside with your preferred name. This example will use 0_init for the migration name:
```bash
mkdir -p prisma/migrations/0_init 
```

Then 0_ is important because Prisma Migrate applies migrations in a lexicographic order. You can use a different value such as the current timestamp.

Generate a migration and save it to a file using prisma migrate diff
```bash
npx prisma migrate diff \ 
--from-empty \ 
--to-schema-datamodel prisma/schema.prisma \ 
--script > prisma/migrations/0_init/migration.sql 
```

### Review the generated migration

__Work around features not supported by Prisma Schema Language__
_To include unsupported database features that already exist in the database, you must replace or modify the initial migration SQL:_
- Open the migration.sql file generated in the Create a baseline migration section.
- Modify the generated SQL. 
For example, if the changes are minor, you can append additional custom SQL to the generated migration - the following example creates a partial index:
```sql
/* Generated migration SQL */
CREATE UNIQUE INDEX tests_success_constraint ON posts (subject, target)
 WHERE success;
 ```

If the changes are significant, it can be easier to replace the entire migration file with the result of a database dump (mysqldump, pg_dump)
Note that the order of the tables matters when creating all of them at once, since foreign keys are created at the same step. Therefore, either re-order them or move constraint creation to the last step after all tables are created, so you won't face `can't create constraint` errors

### Apply the initial migrations
To apply your initial migration(s):

Run the following command against your database:
```bash
npx prisma migrate resolve --applied 0_init 
```

Review the database schema to ensure the migration leads to the desired end-state (for example, by comparing the schema to the production database).

The new migration history and the database schema should now be in sync with your Prisma schema.

### Commit the migration history and Prisma schema
Commit the following to source control:
- The entire migration history folder
- The schema.prisma file

## Going further
Refer to the [Deploying database changes with Prisma Migrate](https://www.prisma.io/docs/guides/deployment/deploy-database-changes-with-prisma-migrate) guide for more on deploying migrations to production.
Refer to the [Production Troubleshooting](https://www.prisma.io/docs/guides/migrate/production-troubleshooting#fixing-failed-migrations-with-migrate-diff-and-db-execute) guide to learn how to debug and resolve failed migrations in production using prisma migrate diff, prisma db execute and/ or prisma migrate resolve.