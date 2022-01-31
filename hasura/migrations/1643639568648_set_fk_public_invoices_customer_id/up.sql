alter table "public"."invoices"
  add constraint "invoices_customer_id_fkey"
  foreign key ("customer_id")
  references "public"."customers"
  ("id") on update cascade on delete cascade;
