create table IF NOT EXISTS
  _prisma_migrations (
    id character varying(36) not null,
    checksum character varying(64) not null,
    finished_at timestamp with time zone null,
    migration_name character varying(255) not null,
    logs text null,
    rolled_back_at timestamp with time zone null,
    started_at timestamp with time zone not null default now(),
    applied_steps_count integer not null default 0,
    constraint _prisma_migrations_pkey primary key (id)
  );
ALTER TABLE "_prisma_migrations" ENABLE ROW LEVEL SECURITY;
