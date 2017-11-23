import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
@Output()  category : EventEmitter<Object> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  postCategory(category){
    let myCateg = {
      category : category
    }
    console.log("add category "+ myCateg);
    if(category)
       this.category.emit(myCateg);
  }

}
