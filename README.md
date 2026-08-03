# Grupo Verde Chile

Sitio web estático de Grupo Verde Chile — soluciones sostenibles en manejo de residuos, diseño y construcción de espacios ecoamigables.

## Estructura

```
index.html          Página principal
style.css            Estilos
script.js             Interacciones (menú móvil, scroll reveal, header sticky)
assets/
  imagenes/            Imágenes usadas en el sitio (servicios, líneas de trabajo, proyectos)
  screenshots/          Capturas de referencia de cada sección del sitio
  catalogo-grupoverdechile.pdf   Catálogo visible/descargable (~67 MB, blob normal — sin Git LFS)
  logo.png
```

## Previsualizar localmente

Es un sitio 100% estático, sin build ni dependencias. Basta con abrir `index.html` en el navegador, o levantar un servidor simple:

```bash
npx serve .
```

## Notas

- El PDF del catálogo (~67 MB) se versiona como archivo normal, no con Git LFS: Vercel no ejecuta `git lfs pull` al desplegar, así que con LFS el sitio en producción servía solo el archivo puntero (~130 bytes) en vez del PDF real.
- Contacto: plopez@grupoverdechile.cl
