import { ApplicationConfig } from '@gulux/gulux';

import DemoMiddleware from '../middleware/demo';

export default {
  name: 'app',
  middleware: [DemoMiddleware],
  applicationHttp: {
    port: Number(process.env.PORT) || 3005,
  },
} as ApplicationConfig;
