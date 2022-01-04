import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://localhost/api/products');
  }
  getProduct(id : number){
    return this.httpClient.get(`http://localhost/api/show-product/${id}`);
  }
  addProduct(data: any){
    return this.httpClient.post('http://localhost/api/create-product', data);
  }
  deleteProduct(id: any){
    return this.httpClient.delete(`http://localhost/api/delete-product/${id}`);
  }
  editProduct(data: any, id :number){
    return this.httpClient.put(`http://localhost/api/update-product/${id}`, data);
  }
}
