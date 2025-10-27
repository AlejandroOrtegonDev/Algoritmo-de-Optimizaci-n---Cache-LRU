
/*■ Algoritmo 1: Optimización de Cache - Dificultad Media ■■■■■
/**
 * Implementa un sistema de cache LRU (Least Recently Used) eficiente
 * que mantenga un tamaño máximo y elimine elementos no usados recientemente
 *
 * @param {number} capacity - Capacidad máxima del cache
 */

class LRUCache {
    constructor(capacity) {
      this.capacity = capacity; // tamaño máximo
      this.cache = new Map(); // estructura que almacenará los datos
    }
  

/**
 * Obtiene un valor del cache
 * @param {string} key - Clave a buscar
 * @returns {any} Valor encontrado o null
 */

    get(key) {
      if (!this.cache.has(key)) {
        return null; // no existe
      }
      // Si existe, lo quitamos y lo volvemos a agregar al final
      // para marcarlo como "recientemente usado"
      const value = this.cache.get(key);
      this.cache.delete(key); // elimina el cache con la clave encontrada y lo reemplaza con el valor encontrado
      this.cache.set(key, value); // inserta el cache con el valor encontrado 
  
      return value; // retorna el valor encontrado 
    }
  

/**
 * Almacena un valor en el cache
 * @param {string} key - Clave
 * @param {any} value - Valor a almacenar
 */

    put(key, value) {
      // Si ya existe, lo eliminamos primero para actualizarlo
      if (this.cache.has(key)) {
        this.cache.delete(key);
      }
  
      // Si se excede la capacidad, eliminamos el menos usado (el primero)
      else if (this.cache.size >= this.capacity) {
        const firstKey = this.cache.keys().next().value; // obtiene la primera clave insertada
        // cree una constante que se llama firstKey y se iguala a la primera clave insertada
        // esta constante hacer una iteracion con next().value para obtener la primera clave insertada
        this.cache.delete(firstKey); // elimina la primera clave insertada
      }
  
      // Insertamos al final (más reciente)
      this.cache.set(key, value); // inserta el cacche 
    }
  }


  // caso de uso del algoritmo 
  const cache = new LRUCache(3);
cache.put("a", 1);
cache.put("b", 2);
cache.put("c", 3);

console.log(cache.cache);

cache.get("a"); 
console.log(cache.cache);

cache.put("d", 4); 
console.log(cache.cache);


  