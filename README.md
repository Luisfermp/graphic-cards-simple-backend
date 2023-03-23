# Graphic Cards Simple Api

This is a simple api to get information about graphic cards. There is some example duplicated, if you prefer, you can modify that locally to get the information you want.

The only thing you need to run this app is:

```bash
npm install
```

Create a `.env.development.local` file on the  and add the following variables:

```bash
# PORT
PORT = 3000

# TOKEN
SECRET_KEY = secretKey

# LOG
LOG_FORMAT = dev
LOG_DIR = ../logs

# CORS
ORIGIN = *
CREDENTIALS = true
```

and then

```bash
npm run dev
```

> *NOTE*: If you are not able to see request schema, pls go to the swagger.yaml file and enjoy it.
