<<<<<<< HEAD
# Algoritmo-de-detecion-de-actividad-sospechosa-Js-
=======
# Algoritmos de Optimización - Cache LRU

este algoritmo de cache LRU (Least Recently Used) El objetivo es mantener una memoria temporal con un tamaño máximo fijo, eliminando siempre el elemento **menos usado recientemente** cuando se agrega uno nuevo y la capacidad está llena.

# Analisis 

Al iniciar cualquiere algoritmo o ejercicio realizo un analisis para su posterior ejecucion como se muestra en el pizarron

![Flujo LRU](algortmo-%20cache/img/flujo%20-%20LRU.png)


# ejercicio 
/**
 * Implementa un sistema de cache LRU (Least Recently Used) eficiente
 * que mantenga un tamaño máximo y elimine elementos no usados recientemente
 *
 * @param {number} capacity - Capacidad máxima del cache
 */
class LRUCache {
 constructor(capacity) {
 // Tu implementación aquí
 }
 /**
 * Obtiene un valor del cache
 * @param {string} key - Clave a buscar
 * @returns {any} Valor encontrado o null
 */
 get(key) {
 // Tu implementación aquí
 }
 /**
 * Almacena un valor en el cache
 * @param {string} key - Clave
 * @param {any} value - Valor a almacenar
 */
 put(key, value) {
 // Tu implementación aquí
 }
}

**


##  Descripción

El **Cache LRU** es un algoritmo de reemplazo de cache que elimina el elemento que ha sido usado hace más tiempo cuando el cache está lleno. Esta implementación utiliza una estructura de datos híbrida para lograr operaciones O(1).



### Estructura de Datos
- **Map()**: Para acceso O(1) a los elementos
- **Estrategia LRU**: Reordenamiento automático basado en uso

### Características
-  Operaciones `get()` y `put()` en tiempo O(1)
-  Capacidad configurable
-  Eliminación automática del elemento menos usado
-  Actualización de elementos existentes

##  Uso

```javascript
const cache = new LRUCache(3);

// Agregar elementos
cache.put("a", 1);
cache.put("b", 2);
cache.put("c", 3);

// Obtener elemento (lo marca como recientemente usado)
console.log(cache.get("a")); // 1

// Agregar nuevo elemento (elimina el menos usado)
cache.put("d", 4);
```

##  Ejemplo de Ejecución

```bash
node "algortmo- cache/LRU.js"
```

**Salida esperada:**

![Salida del programa](algortmo-%20cache/img/salida.png) 

Restricciones al hacer este algortimo:
• Operaciones get y put deben ser O(1)
• Capacidad máxima debe respetarse siempre
• Implementar usando estructuras de datos apropiadas
>>>>>>> 71f781b (Primer commit del proyecto de detección de actividad sospechosa)
