import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  myForm : FormGroup;
  constructor(
    private  productService : ProductService,
    private modalService : ModalService
  ) {
    this.myForm = new FormGroup({

      title: new FormControl( '',[
        Validators.required,
        Validators.minLength(6)
      ])


    });

  }

  get title(){
    return this.myForm.controls.title as FormControl
  }

  ngOnInit(): void {
  }

  submit(){
    this.productService.create(
      {
        title: this.myForm.value.title as string,
          price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: 42,
          count: 1
        }
      }
    ).subscribe(() => {
        this.modalService.close()
    })
  }

}
