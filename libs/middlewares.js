import express from 'express';

const injectMiddlewares = (api) => {
  /**
   * Parse incoming request bodies in a middleware.
   * @function urlencoded
   * @returns {void} - Nothing.
   */
  api.use(express.json({ limit: '200mb' }));
};

export default injectMiddlewares;
