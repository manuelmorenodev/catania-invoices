start:
	docker-compose up -d
	docker-compose logs -f

stop:
	docker-compose down

build:
	docker-compose build --no-cache

hasura:
	cd migrations && hasura console

migrate:
	cd migrations && hasura migrate apply && hasura metadata apply

seed:
	cd migrations && hasura seed apply