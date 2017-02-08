"use strict";

function OrderedMap() {
    this._items = [];
    this._index = 0;
}

OrderedMap.prototype.push = function (item) {
    this._items[this._index] = item;
    this._index++;
};

OrderedMap.prototype.pop = function () {
    if (this._index > 0){
        let item = this._items[this._items.length-1];
        this._items.length -= 1;
        this._index--;
        return item;
    } else {
        return undefined;
    }
};

OrderedMap.prototype.shift = function () {
    let tempArray = [];
    for (let i = 0; i < this._index; i++){
        tempArray[i] = this._items[i+1];
    }
    this._items = tempArray;
    this._index --;
};

OrderedMap.prototype.unshift = function (item) {
    let tempArray = [];
    tempArray[0] = item;
    for (let i = 0; i < this._index; i++){
        tempArray[i+1] = this._items[i];
    }
    this._items = tempArray;
    this._index ++;
};

OrderedMap.prototype.forEach = function (callback){
    for (let i = 0; i < this._index; i++){
        callback(this._items[i]);
    }
};

OrderedMap.prototype.toString = function (){
    let arrayString = '[';
    for (let i = 0; i < this._index-1; i++){
        arrayString += this._items[i] + ', ';
    }
    arrayString += this._items[this._index-1] + ']';
    return arrayString;
};




