import envLoader from '../utils/env_loader';

const startServer = (api) => {
  /**
   * Load environment variables.
   * @function envLoader
   * @returns {void} - Nothing.
   */
  envLoader();
  const port = process.env.PORT || 5000;
  const env = process.env.npm_lifecycle_event || 'dev';
  api.listen(port, () => {
    console.log(`[${env}] API has started listening at port:${port}`);
  });
};

export default startServer;
