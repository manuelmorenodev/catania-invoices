CREATE TABLE "public"."tenants" (
    "user" text NOT NULL,
    "tenant" text NOT NULL,
    PRIMARY KEY ("user", "tenant")
);