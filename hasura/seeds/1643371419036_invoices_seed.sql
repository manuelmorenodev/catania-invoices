SET check_function_bodies = false;
INSERT INTO public.invoices (id, user_id, created_at, updated_at) VALUES (1, 1, '2022-01-28 12:03:14.404771+00', '2022-01-28 12:03:14.404771+00');
INSERT INTO public.invoices (id, user_id, created_at, updated_at) VALUES (2, 1, '2022-01-28 12:03:14.971281+00', '2022-01-28 12:03:14.971281+00');
INSERT INTO public.invoices (id, user_id, created_at, updated_at) VALUES (3, 1, '2022-01-28 12:03:15.459291+00', '2022-01-28 12:03:15.459291+00');
INSERT INTO public.invoices (id, user_id, created_at, updated_at) VALUES (4, 2, '2022-01-28 12:03:18.533628+00', '2022-01-28 12:03:18.533628+00');
INSERT INTO public.invoices (id, user_id, created_at, updated_at) VALUES (5, 2, '2022-01-28 12:03:19.054398+00', '2022-01-28 12:03:19.054398+00');
SELECT pg_catalog.setval('public.invoices_id_seq', 6, true);
