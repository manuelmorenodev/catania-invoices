CREATE TABLE "public"."users" (
    "username" text NOT NULL,
    PRIMARY KEY ("username"),
    UNIQUE ("username")
);