import { Directive } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Directive({
  selector: '[appModal]'
})
export class ModalService {

  isVisible$ = new BehaviorSubject<boolean>(false)
  constructor() { }
  open(){
    this.isVisible$.next(true)
  }

  close(){
    this.isVisible$.next(false)
  }

}
