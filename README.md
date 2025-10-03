# MOG-Clean-Website
MOG Clean Website for ZIP IT Client (MOGCLEAN AUSTRALIA) mogcleaning.com.au

## Environment Setup

### PHP Mailer
Set the following environment variables on the server that runs `php/contact.php`:

- `SMTP_HOST`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_PORT`

The PHP endpoint will throw a runtime error if any of these are missing, which keeps secrets out of version control.

### Front-end Contact Endpoint
During local development or when deploying the static site separately from the PHP endpoint, set `VITE_CONTACT_ENDPOINT` in a `.env` file or your hosting provider's environment settings so the React app knows where to post contact form submissions. It defaults to `/contact.php` when unset.

When running `npm run dev`, Vite now provides a lightweight mock of `/contact.php` so you can test the quote form workflow without a PHP server. The mock logs submissions to the terminal and always responds with a success payload. Deployments should continue to point `VITE_CONTACT_ENDPOINT` to the real PHP handler.
