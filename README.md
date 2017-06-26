# Requirements

- pyenv
- Python 3.6
- nvm
- Nodejs 7

# Installation

```bash
pyenv install 3.6.0
pyenv shell 3.6.0
pip install -r requirements.txt
nvm use
```

# Development

## Locking dependencies

Dependencies should be locked down with `pip-tools`. Example usage:

```bash
pip install <dependency>
echo '<dependency>' >> requirements.in
pip-compile
```
