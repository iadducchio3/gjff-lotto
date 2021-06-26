declare global {
  export interface Array<T> {
    any(): boolean;
    shuffle(): Array<T>;
    orderByAscending(keySelector?: (element?) => any): Array<T>;
    orderByDescending(keySelector?: (element?) => any): Array<T>;
  }
}

Array.prototype.orderByAscending = function (keySelector?: (element) => any): Array<any> {
  return sort(this, 'asc', keySelector);
};

//orderByDescending Prototype
Array.prototype.orderByDescending = function (keySelector?: (element) => any): Array<any> {
  return sort(this, 'desc', keySelector);
};

//sort implementation for orderByAscending and orderByDescending
function sort(arr: Array<any>, sortDirection: 'asc' | 'desc', keySelector?: (element) => any) {
  if (!keySelector) keySelector = element => element;

  return arr.sort((a, b) => {
    let aValue = keySelector(a);
    let bValue = keySelector(b);

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }
    return aValue > bValue ? (sortDirection == 'asc' ? 1 : -1) : sortDirection == 'asc' ? -1 : 1;
  });
}

Array.prototype.shuffle = function shuffle() {
  var currentIndex = this.length,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [this[currentIndex], this[randomIndex]] = [this[randomIndex], this[currentIndex]];
  }
  return this;
};

Array.prototype.any = function () {
  return this && this.length > 0;
};

export {};
