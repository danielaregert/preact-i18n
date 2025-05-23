# Mi Proyecto Preact

Este proyecto es una aplicación creada con Preact, TailwindCSS y i18next para internacionalización.

## Requisitos

- Node.js (versión 16 o superior recomendada)
- npm

## Instalación

1. Clonar el repositorio  
```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

##
2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar serv desarrollo
```bash
npm run dev


## Construcción para producción

1. Generar la versión optimizada:
```bash
npm run build
```

Despliegue en GitHub Pages
Asegurate que en vite.config.js el campo base esté configurado así:



export default defineConfig({
  base: '/tu-repo/', // Reemplaza con el nombre exacto de tu repositorio
  // ...otras configuraciones
});
Agregá en package.json el script de deploy:


"scripts": {
  "build": "vite build",
  "deploy": "gh-pages -d dist"
}

Instalar la dependencia para deployar:


npm install --save-dev gh-pages
Ejecutar deploy:

bash
Copiar
Editar
npm run deploy
