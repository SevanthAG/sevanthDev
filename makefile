build:
	@clear && \
	docker compose build

up:
	@clear && \
	docker compose up -d

down:
	@clear && \
	docker compose down

deploy:
	@clear && \
	docker stack deploy -c compose.yaml portfolio
