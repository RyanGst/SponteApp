function hashCode(seed: string) {
    let hash = 0;
    if (seed.length == 0) return hash;

    for (let i = 0; i < seed.length; i++) {
        let char = seed.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}


const cryptoService = { hashCode }

export default cryptoService;