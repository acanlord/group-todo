cp .env.local.bak .env.local
source .env.local
./node_modules/nodemon/bin/nodemon.js server.js
