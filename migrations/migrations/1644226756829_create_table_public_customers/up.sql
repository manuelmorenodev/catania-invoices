CREATE TABLE "public"."customers" ("id" serial NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "email" Text NOT NULL, "name" Text, "birth" date, "country" text, "region" Text, "city" Text, "address" text, "postal_code" text, "phone" text, "password" text, PRIMARY KEY ("id") , UNIQUE ("email"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_customers_updated_at"
BEFORE UPDATE ON "public"."customers"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_customers_updated_at" ON "public"."customers" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
