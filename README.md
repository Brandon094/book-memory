# 📖 Cuaderno de Recuerdos

Una aplicación web emotiva diseñada para preservar y celebrar las historias de vida de tus seres queridos. Permite a tus padres compartir sus recuerdos más preciados y generar narrativas personales únicas.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC)
![License](https://img.shields.io/badge/License-CC--BY--NC--4.0-lightgrey)

## ✨ Características Principales

- **📝 105 Preguntas Organizadas** - 7 secciones que cubren toda una vida de recuerdos
- **🎭 Modo Demostración** - Explora la app con datos de ejemplo
- **📖 Generación de Historias** - Crea narrativas personales basadas en las respuestas
- **💾 Guardado Local** - Tus datos se mantienen privados en tu navegador
- **📥 Exportación** - Descarga las respuestas e historias en formato texto
- **📱 Diseño Responsive** - Funciona perfecto en desktop, tablet y móvil
- **🎨 Interfaz Emotiva** - Diseño cálido y accesible para todas las edades

## 🎯 Secciones de Vida

| Sección | Icono | Descripción | Preguntas |
|---------|-------|-------------|-----------|
| **Infancia** | 👶 | Tus primeros años y recuerdos de niñez | 15 |
| **Adolescencia** | 🎒 | Tus años de secundaria y juventud | 15 |
| **Juventud** | 🎓 | Universidad, primeros trabajos y descubrimientos | 15 |
| **Antes de tu Pareja** | 💭 | Tu vida antes de encontrar el amor | 15 |
| **Conociendo a tu Pareja** | ❤️ | La hermosa historia de cómo se conocieron | 15 |
| **Vida Adulta** | 🏠 | Familia, logros y momentos especiales | 15 |
| **Reflexiones y Legado** | ✨ | Tu sabiduría y mensaje para el futuro | 15 |

## 🚀 Comenzando

### Para Usuarios Finales

1. **Visita la aplicación** desplegada
2. **Selecciona** "Mamá" o "Papá"
3. **Completa** las preguntas a tu propio ritmo
4. **Guarda** tu progreso automáticamente
5. **Genera** tu historia personalizada al completar todo
6. **Descarga** tus recuerdos para guardarlos para siempre

### Para Desarrolladores

```bash
# Clonar el repositorio
git clone https://github.com/Brandon094/cuaderno-recuerdos.git

# Instalar dependencias
cd cuaderno-recuerdos
npm install

# Ejecutar en desarrollo
npm start

# Construir para producción
npm run build
```

## 🛠️ Stack Tecnológico

- **Frontend**: React 18, Tailwind CSS, Lucide React
- **Almacenamiento**: Local Storage API
- **Build Tool**: Create React App
- **Estilos**: Tailwind CSS con diseño gradient

## 📁 Estructura del Proyecto

```
cuaderno-recuerdos/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PersonSelection.js
│   │   ├── SectionMenu.js
│   │   └── QuestionSection.js
│   ├── data/
│   │   ├── sections.js
│   │   └── demoData.js
│   ├── utils/
│   │   ├── exportUtils.js
│   │   └── storage.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🔧 Configuración

### Variables de Entorno (Opcional)

Crea un archivo `.env` en la raíz:

```env
REACT_APP_OPENAI_API_KEY=tu_api_key_aqui
```

### Personalización

Edita `src/data/sections.js` para modificar preguntas:

```javascript
{
  id: 'infancia',
  title: 'Infancia', 
  icon: '👶',
  color: 'from-yellow-400 to-orange-400',
  desc: 'Tus primeros años y recuerdos de niñez',
  questions: [
    '¿Dónde naciste y en qué año?',
    // ... más preguntas
  ]
}
```

## 🌐 Despliegue

### Netlify (Recomendado)

1. Conecta tu repositorio de GitHub
2. Configuración automática para React
3. Build command: `npm run build`
4. Publish directory: `build`

### Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel --prod
```

### GitHub Pages

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar al package.json
"homepage": "https://Brandon094.github.io/cuaderno-recuerdos"
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Desplegar
npm run deploy
```

## 🔒 Privacidad y Seguridad

- ✅ **Cero tracking** o analytics
- ✅ **Datos locales** - toda la información se guarda en el navegador
- ✅ **Sin cuentas** - no requiere registro
- ✅ **Sin API externas** - generación de historias local
- ✅ **Código abierto** - transparente y verificable

## 🎨 Personalización Avanzada

### Modificar Colores

En los componentes, cambia las clases de color:

```jsx
// De:
color: 'from-pink-400 to-rose-400'

// A:
color: 'from-purple-400 to-indigo-400'
```

### Agregar Nuevas Secciones

En `src/data/sections.js`, agrega nuevas secciones:

```javascript
{
  id: 'nueva-seccion',
  title: 'Nueva Sección',
  icon: '⭐',
  color: 'from-blue-400 to-green-400',
  desc: 'Descripción de la nueva sección',
  questions: [
    'Pregunta 1',
    'Pregunta 2',
    // ...
  ]
}
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! 

1. Fork el proyecto
2. Crea una feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guía de Commits

```
feat: nueva funcionalidad
fix: corrección de bug
docs: documentación
style: formato
refactor: refactorización
test: pruebas
```

## 🐛 Reportar Problemas

Si encuentras un bug, por favor:

1. Revisa los issues existentes
2. Crea un nuevo issue con:
   - Descripción detallada
   - Pasos para reproducir
   - Comportamiento esperado vs actual
   - Capturas de pantalla (si aplica)

## 📄 Licencia

Este proyecto está bajo la [Licencia Creative Commons Atribución-NoComercial 4.0 Internacional](LICENSE).

### Resumen de la licencia:
- ✅ **Gratuito** para uso personal, educativo y comunitario
- ✅ **Puedes modificar** y mejorar el código
- ✅ **Debes dar crédito** al autor original
- ✅ **Puedes compartir** con otras personas
- ❌ **No puedes usar** con fines comerciales
- ❌ **No puedes vender** el software o derivados

### Para usuarios:
Puedes usar esta aplicación libremente para preservar las historias de tu familia.

### Para desarrolladores:
Puedes modificar y mejorar el código, pero debes:
- Mantener esta misma licencia en tus modificaciones
- Darme crédito como creador original (ej: "Basado en Cuaderno de Recuerdos por [Brandon094]")

## 🙏 Agradecimientos

Creado con ❤️ para preservar las historias familiares y conectar generaciones a través de los recuerdos.

---

**¿Preguntas?** ¡Abre un issue!

**¿Te gustó el proyecto?** ¡Dale una ⭐ en GitHub!

---

<div align="center">

**Hecho con 💝 para familias que valoran sus historias**

</div>
