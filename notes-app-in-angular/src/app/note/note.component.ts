import {Component, HostBinding, EventEmitter, Output} from '@angular/core'

@Component({
  selector:'app-note',
  templateUrl:'./note.component.html',
  styleUrls:['./note.component.css']
})

export class NoteComponent {
  @Output() dismiss = new EventEmitter();
  @Output() focusout = new EventEmitter();
  constructor() {}
  
  onDismiss(event){
    this.dismiss.emit(event);
  }
  
  onFocusOut(event){
    this.focusout.emit(event)
  }
}