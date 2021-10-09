---
title: Next.js jsconfig.json
excerpt: Zorgt voor een verkort 'path' bij de import in zoverre het om andere folders gaat
image: memo_next.jpg
isFeatured: true
date: '2021-10-09'
---
### jsconfig.json

Deze file wordt aangemaakt in de root, als volgt:

```js
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["components/*],
      "@/config/*": ["config/*"],
      "@/utils/*": ["utils/*],
    }
  }
}
```

Elk path naar de verschillende folders wordt op die manier gedefinieerd, waardoor '../', '../../', enzovoort, kunnen vervangen worden door een '@/' bij de import in components en pages. 
Binnen dezelfde folder dient wel nog gebruik gemaakt te worden van: './'. 