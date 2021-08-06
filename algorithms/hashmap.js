

class MyHashMap {
    constructor() {
        this._store = [];
    }

    getHashCode(str) {
        let hashCode = 0;

        for(let i = 0; i < str.length; i++) {
            hashCode += str.charCodeAt(i);
        }
        return hashCode;
    }
    set(key, value) {
        const hashCode = this.getHashCode(key);
        if (!this._store[hashCode]) {
            this._store[hashCode] = [];
        }
        this._store[hashCode].push([key, value]);
    }

    get(key) {
        const hashCode = this.getHashCode(key);

        if (!this._store[hashCode]) {
            return undefined;
        }

        for (let keyValue of this._store[hashCode]) {
            if (keyValue[0] === key) {
                return keyValue[1];
            }
        }
    }

    has(key) {
        const hashCode = this.getHashCode(key);
        return !this._store[hashCode] ? false : true;
    }
}