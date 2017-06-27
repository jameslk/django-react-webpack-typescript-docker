# Requirements

- pyenv
- Python 3.6
- nvm
- npm 5
- Nodejs 7
- Docker

# Running

```bash
docker-compose run web
```

## Building outside Docker:

```bash
pyenv install 3.6.0
pyenv shell 3.6.0
pip install -r requirements.txt
nvm use
npm install
npm run build
```

# Development

## Locking dependencies

Dependencies should be locked down with `pip-tools`. Example usage:

```bash
pip install <dependency>
echo '<dependency>' >> requirements.in
pip-compile
```
