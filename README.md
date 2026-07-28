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
  catalogo-grupoverdechile.pdf   Catálogo descargable (versionado con Git LFS)
  logo.png
```

## Previsualizar localmente

Es un sitio 100% estático, sin build ni dependencias. Basta con abrir `index.html` en el navegador, o levantar un servidor simple:

```bash
npx serve .
```

## Notas

- El PDF del catálogo se versiona con [Git LFS](https://git-lfs.com/) por su tamaño (~67 MB). Instala Git LFS (`git lfs install`) antes de clonar para que se descargue correctamente.
- Contacto: plopez@grupoverdechile.cl
