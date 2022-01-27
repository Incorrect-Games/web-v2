import NodeCache from "node-cache"
const cache = new NodeCache();

const cache_default_ttl = 3600;

export async function get(key: string) {
    if(cache.get(key)) {
        return new Promise(cache.get(key))
    }
}

export async function setOrGet(key: string, callback: Function, ttl: number = cache_default_ttl) {
    if(cache.get(key)) {
        return cache.get(key)
    }

    const res = await callback();

    cache.set(key, res, ttl);

    return res;
}