# Requirements

- pyenv
- Python 3.6
- nvm
- npm 5
- Nodejs 7
- Docker

# Running

```bash
# Terminal 1
docker-compose up

# Terminal 2
nvm use
npm install
npm run watch
```

## Building outside Docker:

```bash
pyenv install 3.6.0
pyenv shell 3.6.0
pip install -r requirements.txt
```

# Development

## Locking dependencies

Dependencies should be locked down with `pip-tools`. Example usage:

```bash
pip install <dependency>
echo '<dependency>' >> requirements.in
pip-compile
```
