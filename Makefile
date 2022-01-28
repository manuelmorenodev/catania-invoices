start:
	docker-compose up -d
	docker-compose logs -f

stop:
	docker-compose down

build:
	docker-compose build --no-cache

hasura:
	cd src/hasura && hasura console