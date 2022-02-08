SET check_function_bodies = false;
INSERT INTO public.customers (id, created_at, updated_at, email, name, birth, country, region, city, address, postal_code, phone, password) VALUES (1, '2022-02-07 12:28:58.99978+00', '2022-02-08 14:38:19.565508+00', 'manuel.moreno@sdelsol.com', 'Manuel Moreno', '1991-07-09', 'Spain', 'Jaén', 'Jaén', 'Tinajeros 3', '23007', '600600600', NULL);
INSERT INTO public.invoices (id, created_at, updated_at, customer_id, number, date, status) VALUES (1, '2022-02-07 12:29:27.850074+00', '2022-02-07 12:29:27.850074+00', 1, 'A-1', '2022-02-07', 0);
INSERT INTO public.invoices (id, created_at, updated_at, customer_id, number, date, status) VALUES (2, '2022-02-07 16:18:01.448649+00', '2022-02-07 16:18:01.448649+00', 1, '2', '2022-02-07', 1);
INSERT INTO public.products (id, created_at, updated_at, ref, name, description, price) VALUES (1, '2022-02-08 16:50:17.750107+00', '2022-02-08 16:50:17.750107+00', 'ORD1', 'Ordenador oficina', 'Poca cosa', 400);
INSERT INTO public.products (id, created_at, updated_at, ref, name, description, price) VALUES (2, '2022-02-08 16:50:35.080419+00', '2022-02-08 16:50:35.080419+00', 'ORD2', 'Ordenador gaming', 'Bastante caro', 1500);
SELECT pg_catalog.setval('public.customers_id_seq', 1, true);
SELECT pg_catalog.setval('public.invoices_id_seq', 2, true);
SELECT pg_catalog.setval('public.products_id_seq', 2, true);
