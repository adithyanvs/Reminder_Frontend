import { Component,Input, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-cancel',
  templateUrl: './delete-cancel.component.html',
  styleUrls: ['./delete-cancel.component.css']
})
export class DeleteCancelComponent implements OnInit {
  @Input() item:string|undefined
  @Output() onCancel=new EventEmitter
  //creating on delete event-since it occuring in parent,so put it in@output
  @Output() onDelete =new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  cancel(){
    this.onCancel.emit()
  }
delete(){
  this.onDelete.emit(this.item)
}
}
