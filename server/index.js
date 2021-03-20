const config = require('./src/config');
const app = require('./src/app');

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
