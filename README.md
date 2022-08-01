# Monarchwadia.com

This app is built with SvelteKit and deployed on Vercel.

## Installation instructions

### Install ImageMagick and GraphicsMagick

On ubuntu:

```
sudo apt install imagemagick graphicsmagick

```

### Install Fira Sans Regular (if you're working with the social media preview)

You'll need [Fira Sans Regular](https://fonts.google.com/specimen/Fira+Sans?query=fira+sans), so you'll have to [install it](https://www.google.com/search?channel=fs&client=ubuntu&q=install+font+in+ubuntu)... maybe by extracting the ttf fonts to `~/.fonts`

### Config

`.env` contains configs for both, the frontend and the backend. Anything marked with `VITE_` is exposed to the frontend. 

Here is a sample `.env`. More up-to-date configs are in `env.example`
SENDGRID_SECRET=
SENDGRID_SENDER_EMAIL=
HCAPTCHA_SECRET=
FF_ENABLE_EMAIL_FORMS=false
VITE_HCAPTCHA_SITE_KEY=
VITE_HCAPTCHA_VERIFY_URL=
