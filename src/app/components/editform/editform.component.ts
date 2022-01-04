import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {

  product = new Product();
  id: any;
  data : any;
  constructor(private route:ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.getData();
  }
  getData(){
    this.dataService.getProduct(this.id).subscribe(res => {
     this.data = res;
     this.product = this.data;
    });
  }

  updateData(){
    this.dataService.editProduct(this.product, this.id).subscribe(res => {
      this.router.navigate(['/']);
    });
    }

}
