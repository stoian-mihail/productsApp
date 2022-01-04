import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  product = new Product();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getProductsData();
  }
  getProductsData(){
    this.dataService.getData().subscribe( res => {
      this.products = res;
    });
  }
  getProduct(id: number){
    this.dataService.getProduct(id).subscribe( res=> {
      return res;
    });
  }
  insertData(){
  this.dataService.addProduct(this.product).subscribe(res => {
    this.getProductsData();
  })
  }
  deleteProduct(id: number){
    this.dataService.deleteProduct(id).subscribe(res => {
      this.getProductsData();
    })
  }
  editProduct(data:any , id: number){
    this.dataService.editProduct(data,id).subscribe(res => {
      this.getProductsData();
    })
  }
  showEditProduct(id: number){
    this.dataService.getProduct(id).subscribe( res=> {
    console.log(res);
    });

  }
}
