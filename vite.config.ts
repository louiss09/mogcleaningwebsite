import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const devContactEndpoint = (): Plugin => ({
  name: 'dev-contact-endpoint',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use('/contact.php', (req, res, next) => {
      const method = req.method?.toUpperCase();

      if (method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return;
      }

      if (method !== 'POST') {
        next();
        return;
      }

      let rawBody = '';
      let aborted = false;

      const abortRequest = (status: number, message: string) => {
        if (aborted || res.headersSent) {
          return;
        }
        aborted = true;
        res.statusCode = status;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(
          JSON.stringify({
            success: false,
            message
          })
        );
      };

      req.on('data', (chunk) => {
        if (aborted) {
          return;
        }

        rawBody += chunk;
        if (rawBody.length > 1_000_000) {
          abortRequest(413, 'Development mail stub received a payload that was too large.');
          req.socket.destroy();
        }
      });

      req.on('end', () => {
        if (aborted) {
          return;
        }

        const parsed = new URLSearchParams(rawBody);
        const payload = Object.fromEntries(parsed.entries());

        // eslint-disable-next-line no-console -- Helpful feedback for local testing.
        console.info('[dev-contact-endpoint]', payload);

        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(
          JSON.stringify({
            success: true,
            message: 'Message received (development stub).'
          })
        );
      });

      req.on('error', (error) => {
        // eslint-disable-next-line no-console -- Surface unexpected stream errors.
        console.error('[dev-contact-endpoint] request error', error);
        abortRequest(500, 'Development mail stub failed to process the request.');
      });
    });
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), devContactEndpoint()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
