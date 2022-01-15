class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.dataMap[index]) this.dataMap[index] = [];
    this.dataMap[index].push([key, value]);

    return this;
  }

  get(key) {
    const index = this._hash(key);

    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) return this.dataMap[index][i][1];
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          keys.push(this.dataMap[i][j][0]);
        }
      } 
    }

    return keys;
  }
}

const hashTable = new HashTable();
hashTable.set('lumber', 70);
hashTable.set('washers', 50);
hashTable.set('bolts', 1400);

// console.log(hashTable.get('washers'));
// console.log(hashTable.get('lumber'));
// console.log(hashTable.get('bolts'));
// console.log(hashTable.get('nails'));

// console.log(hashTable);
console.log(hashTable.keys());
