start:
	docker-compose up -d
	docker-compose logs -f

stop:
	docker-compose down

build:
	docker-compose build --no-cache

hasura:
	cd hasura && hasura console

migrate:
	cd hasura && hasura migrate apply && hasura metadata apply

seed:
	cd hasura && hasura seed apply