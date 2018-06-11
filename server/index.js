const config = require('./config');
const server = require('./src/server');

server.listen(config.port, () => console.log(`Server is running on port ${config.port}`));
