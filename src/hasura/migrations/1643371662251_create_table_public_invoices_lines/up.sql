CREATE TABLE "public"."invoices_lines" ("id" serial NOT NULL, "invoice_id" integer NOT NULL, "description" text NOT NULL, "amount" float4 NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("invoice_id") REFERENCES "public"."invoices"("id") ON UPDATE cascade ON DELETE cascade);
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
CREATE TRIGGER "set_public_invoices_lines_updated_at"
BEFORE UPDATE ON "public"."invoices_lines"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_invoices_lines_updated_at" ON "public"."invoices_lines" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
