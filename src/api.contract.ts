import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const PATH_ROOT = '/api';

const myApiContract = c.router({
  helloWorld: {
    method: 'GET',
    path: `${PATH_ROOT}/hello`,
    responses: {
      200: z.string(),
    },
  },
});

export { myApiContract };
