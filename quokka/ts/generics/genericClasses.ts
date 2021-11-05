class GenericArray<T> {
  private arr: T[] = [];

  getItems(arr: T[]) {
    return (this.arr = arr);
  }

  addItem(item: T) {
    this.arr.push(item);
  }

  removeItem(item: T) {
    let index = this.arr.indexOf(item);
    if (index > -1) this.arr.splice(index, 1);
  }

}

let arrOfNumbers = new GenericArray<number>();
arrOfNumbers.addItem(5);
arrOfNumbers.addItem(4);
arrOfNumbers.addItem(2);
arrOfNumbers.addItem(-3);

let arrOfStrings = new GenericArray<string>();
arrOfStrings.addItem('str1');
arrOfStrings.addItem('str2');

console.log(arrOfNumbers);
console.log(arrOfStrings);


