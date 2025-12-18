# Proyecto Frontend – Countries

## Cómo correr el proyecto

Para ejecutar el proyecto en entorno local, sigue estos pasos:

1. Instalar las dependencias:
   ```bash
   npm install
   ```

2. Generar el build de la aplicación:
   ```bash
   npm run build
   ```

3. Iniciar el servidor:
   ```bash
   npm start
   ```

Requiere de node 22+

Una vez iniciado, se podrá visualizar el inicio de la oplicación des un servicio local desde el navegador.

---

## Decisiones técnicas

### Arquitectura y estructura del proyecto

La estructura del proyecto fue pensada para ser **escalable y óptima**, teniendo en cuenta un posible crecimiento de la aplicación. Se implementó un **patrón por contenedores**, apoyado en principios de **Clean Architecture**, donde cada contenedor representa una **entidad normalizable identificada en el modelo de negocio**.

En este caso, la entidad principal es `Country`, pero la arquitectura permite agregar nuevas *features* a medida que la aplicación lo requiera, sin generar acoplamientos innecesarios.

Cada *feature* agrupa su propia lógica de negocio, acceso a datos, contenedores y componentes de UI, lo que facilita la separación de responsabilidades y mejora la mantenibilidad del código.

---

### Manejo del estado de servidor

Para el manejo del estado de servidor se decidió utilizar **TanStack Query**, ya que permite de manera eficiente y automatizada:

- Manejo de caché automático
- Gestión clara de estados de carga y error
- Revalidación de datos sin lógica adicional
- Reducción significativa de *boilerplate*

Esta decisión evita el uso de soluciones como Redux para este propósito específico, donde el volumen de código y la complejidad pueden resultar excesivos si solo se requiere manejar estado de servidor.

---

### Enrutamiento y entorno de desarrollo

El enrutamiento se implementó usando **React Router**, junto con **Vite** como herramienta de desarrollo y build.

Desde mi perspectiva, esta combinación se ajusta muy bien a este tipo de proyectos, especialmente cuando no se requieren tantas características avanzadas como las que ofrecen frameworks más robustos como **Next.js** o **Remix**. Permite mantener el proyecto liviano, claro y fácil de mantener.

---

## Qué mejoraría con más tiempo

### 1. Uso de mappers en la capa de datos

La capa de datos podría estar mejor organizada mediante el uso de **mappers**, lo que permitiría una separación más clara entre los datos provenientes de la API y los modelos utilizados en la UI. Aunque actualmente la idea general se cumple, esta mejora aportaría mayor orden y robustez a largo plazo.

---

### 2. Experiencia de usuario (UX)

En términos de UX, se podrían agregar estados de carga más visibles y expresivos, como loaders o skeletons. Aunque el uso de **TanStack Query** ya mejora el performance gracias al manejo de caché, una retroalimentación visual más clara al usuario ayudaría a mejorar la percepción general de la aplicación.

---

## Conclusión

El proyecto prioriza claridad, escalabilidad y eficiencia, utilizando herramientas modernas y decisiones técnicas alineadas con el alcance real de la aplicación. La arquitectura permite crecer de forma ordenada, evitando complejidad innecesaria desde etapas tempranas.