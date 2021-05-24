import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataTransferService<T> {
  data: T;
  constructor() {}

  setData(data: T) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
