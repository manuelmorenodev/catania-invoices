CREATE TABLE "public"."identity_tokens" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "username" Text NOT NULL,
    "is_valid" boolean NOT NULL DEFAULT true,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "expires_at" timestamptz NOT NULL DEFAULT now() + '100 years',
    PRIMARY KEY ("id")
);

CREATE EXTENSION IF NOT EXISTS pgcrypto;