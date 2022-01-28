SET check_function_bodies = false;
INSERT INTO public.users (id, created_at, updated_at, name) VALUES (1, '2022-01-28 11:57:35.856224+00', '2022-01-28 11:57:35.856224+00', 'Manu');
INSERT INTO public.users (id, created_at, updated_at, name) VALUES (2, '2022-01-28 11:57:40.508929+00', '2022-01-28 11:57:40.508929+00', 'Pedro');
INSERT INTO public.users (id, created_at, updated_at, name) VALUES (3, '2022-01-28 11:57:42.61158+00', '2022-01-28 11:57:42.61158+00', 'Fernan');
INSERT INTO public.users (id, created_at, updated_at, name) VALUES (4, '2022-01-28 11:57:44.576712+00', '2022-01-28 11:57:44.576712+00', 'Fran');
INSERT INTO public.users (id, created_at, updated_at, name) VALUES (5, '2022-01-28 11:57:46.468981+00', '2022-01-28 11:57:46.468981+00', 'Rober');
SELECT pg_catalog.setval('public.users_id_seq', 5, true);
