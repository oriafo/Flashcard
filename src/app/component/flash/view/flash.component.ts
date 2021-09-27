import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IFlash } from 'src/app/component/flash/domain/IFlash.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})


export class FlashComponent {



    @Input() flash: IFlash = {
    id: 1,
    question: 'React to Angular',
    answer: 'No Reaction :)',
    show: false,
    }

    @Output() onToggleCard = new EventEmitter<number>();
    @Output() onDelete = new EventEmitter<number>();
    @Output() onEdit = new EventEmitter<number>();
    @Output() onRememberedChange = new EventEmitter<{}>();

    toggleCard() {
      this.onToggleCard.emit(this.flash.id);
    }

    deleteFlash() {
      this.onDelete.emit(this.flash.id);
    }

    editFlash() {
      this.onEdit.emit(this.flash.id);
    }

    markCorrect() {
      this.onRememberedChange.emit({
        id: this.flash.id,
        flag: 'correct',
      });
    }

    markIncorrect() {
      this.onRememberedChange.emit({
        id: this.flash.id,
        flag: 'incorrect',
      });
    }


}
