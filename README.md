# Requirements

- pyenv
- Python 3.6
- nvm
- Nodejs 7
- yarn
- Docker

# Running

```bash
# Terminal 1
docker-compose up

# Terminal 2
nvm use
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
