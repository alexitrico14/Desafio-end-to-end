
# 🧪 Proyecto: Pruebas Unitarias en un Entorno Vue

Este proyecto tiene como objetivo demostrar la implementación de **pruebas unitarias** en un entorno **Vue**, aplicando herramientas como **Jest** y **Vue Test Utils**. Aquí encontrarás pruebas de snapshots, validación de eventos, y pruebas específicas sobre rutas y componentes.

---

## 📜 Descripción

El proyecto consiste en una aplicación Vue sencilla que incluye un **contador interactivo** y varias **vistas dinámicas** como `Home`, `About` y `Contact`. Se integran pruebas unitarias para verificar la funcionalidad, estructura HTML, y eventos de los componentes.

---

## 🌟 Características principales

- **Componente Contador**:
  - Incrementa y disminuye el valor con botones.
  - Probado para validar la funcionalidad de eventos y reactividad.
- **Pruebas de snapshots**:
  - Verifica la estructura HTML de las vistas: `Home`, `About`, `Contact`.
- **Pruebas de rutas**:
  - Asegura la navegación correcta entre las páginas.

---

## 🚀 Tecnologías utilizadas

- **Vue 3**: Framework principal.
- **Vue Router**: Gestión de rutas dinámicas.
- **Jest**: Herramienta para pruebas unitarias.
- **Vue Test Utils**: Utilidades específicas para probar componentes Vue.

---

## 📂 Estructura del proyecto

```plaintext
src/
├── components/
│   └── Contador.vue
├── views/
│   ├── HomeView.vue
│   ├── AboutView.vue
│   └── ContactView.vue
└── router/
    └── index.js

tests/
└── unit/
    ├── components/
    │   └── contador.spec.js
    └── views/
        ├── homeView.spec.js
        ├── aboutView.spec.js
        └── contactView.spec.js
```

---

## 🛠️ Instalación y ejecución

### **Requisitos previos**

- **Node.js** >= 14
- **npm** >= 7

### **Pasos para instalar**

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el proyecto:
   ```bash
   npm run dev
   ```

4. Corre las pruebas unitarias:
   ```bash
   npm run test:unit
   ```

---

## 🔍 Pruebas incluidas

### **1. Pruebas de eventos (`Contador.vue`)**
- Verifica que los botones incrementen y disminuyan el contador correctamente.

### **2. Pruebas de snapshots**
- Asegura que las vistas `Home`, `About` y `Contact` tengan la estructura HTML esperada.

### **3. Pruebas de rutas**
- Comprueba la navegación correcta a través de `Vue Router`.

---

## 📸 Ejemplo de salida de pruebas

```bash
PASS  tests/unit/views/homeView.spec.js
PASS  tests/unit/components/contador.spec.js
PASS  tests/unit/views/aboutView.spec.js
PASS  tests/unit/views/contactView.spec.js

Test Suites: 4 passed, 4 total
Tests:       8 passed, 8 total
Snapshots:   3 written, 3 total
```

---


## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Siéntete libre de usarlo y modificarlo.

---

¡Gracias por revisar este proyecto! 🎉