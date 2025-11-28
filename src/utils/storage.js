// Simulación de almacenamiento local
const storage = {
    async set(key, value) {
        localStorage.setItem(key, value);
        return Promise.resolve();
    },
    async get(key) {
        const value = localStorage.getItem(key);
        return Promise.resolve(value ? { value } : null);
    }
};

// Hacer disponible globalmente
window.storage = storage;

export default storage;