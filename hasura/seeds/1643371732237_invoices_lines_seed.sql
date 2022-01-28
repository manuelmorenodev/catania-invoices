SET check_function_bodies = false;
INSERT INTO public.invoices_lines (id, invoice_id, description, amount, created_at, updated_at) VALUES (1, 1, 'Water', 2, '2022-01-28 12:08:10.651143+00', '2022-01-28 12:08:10.651143+00');
INSERT INTO public.invoices_lines (id, invoice_id, description, amount, created_at, updated_at) VALUES (2, 1, 'Pizza', 10, '2022-01-28 12:08:24.232008+00', '2022-01-28 12:08:24.232008+00');
SELECT pg_catalog.setval('public.invoices_lines_id_seq', 2, true);
