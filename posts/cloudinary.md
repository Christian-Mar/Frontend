---
title: Cloudinary 
excerpt: Backend voor het beheren van foto's
image: memo_backend.jpg
isFeatured: false
date: '2021-09-20'
---

Sign up via cloudinary.com.

```js
npm i strapi-provider-upload-cloudinary
```

... in de backendtoepassing!

In config wordt plugins.js gemaakt en daarin de code uit de documentatie gekopieerd: 

```js
module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
  // ...
});
```

In de root-structuur wordt de file '.env.example' hernoemd naar .env. Daarin worden CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET geplaats die te vinden zijn op het dashboad in Cloudinary. 

Bij het uploaden van foto's in de media library van Strapi komen de foto's ook automatisch terecht in de media library van Cloudinary, in 5 verschillende formaten.


