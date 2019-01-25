.PHONY: setup, serve

setup:
	docker-compose build

serve:
	docker-compose up

test:
	docker-compose run --rm app npm test

storybook:
	docker-compose run --rm storybook
