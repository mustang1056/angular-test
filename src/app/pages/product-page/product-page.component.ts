import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ModalService} from "../../services/modal.service";
import {IProduct} from "../../models/product";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {


  constructor(public productsService: ProductService,
              public modalService : ModalService) {
  }

  title = 'angular-test';
  products : IProduct[] = []
  loading : boolean = false
  //products$: Observable<IProduct[]>
  term = ''

  ngOnInit(): void {
    this.loading = true

    /*
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )*/


    this.productsService.getAll().subscribe( () => {
      this.loading = false
    })




  }

}
