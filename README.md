# Django React Webpack TypeScript Docker Template

This is a barebones mashup of Django, frontend tools and Docker.
This application runs inside a docker container and displays a
"Hello world!" using a React component.
It is meant to be a starting point for future applications using these
technologies. Here's the full list of frameworks and libraries used:

- Python 3.6
- Django 1.11
- Docker
- Postgres (running inside Docker)
- React 15
- Babel / ES2015-17
- TypeScript 2.4
- Webpack 3
- Sass
- Bootstrap 4

I followed these guides to set this up:

Quickstart: Compose and Django:
https://docs.docker.com/compose/django/

Using React with Django, with a little help from Webpack:
http://geezhawk.github.io/using-react-with-django-rest-framework

Reconciling Django Templates with React Components
https://hackernoon.com/reconciling-djangos-mvc-templates-with-react-components-3aa986cf510a

React & Webpack:
https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

# To use, first install these requirements

- pyenv
- nvm
- yarn
- Docker

# Running

```bash
# Terminal 1
docker-compose up

# Terminal 2
nvm use # This will use the Python specified by .python-version
yarn install
yarn run watch
```

## Building outside Docker:

```bash
pyenv install 3.6.0
pyenv shell 3.6.0
pip install -r requirements.txt
```

# Development

## Installing JavaScript dependencies

```bash
yarn add <dependency>
```

## Locking Python dependencies

Dependencies should be locked down with `pip-tools`. Example usage:

```bash
pip install <dependency>
echo '<dependency>' >> requirements.in
pip-compile
```
