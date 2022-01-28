start:
	docker-compose up -d
	docker-compose logs -f

stop:
	docker-compose down

build:
	docker-compose build --no-cache

hasura:
	cd src/hasura && hasura migrate apply && hasura metadata apply && hasura seed apply && hasura console