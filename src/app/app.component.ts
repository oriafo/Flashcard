import { Component, Input, ViewChild, OnInit, Attribute } from '@angular/core';
import { IFlash } from 'src/app/component/flash/domain/IFlash.model';
import { NgForm, NgModel } from '@angular/forms';
import { DatePipe } from '@angular/common';

function getRandomNumber() {
  return Math.floor(Math.random() * 10000);
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('flashForm', {static:true}) flashForm: NgForm;
  // @ViewChild('question', {static:true}) question: NgModel;
  // @ViewChild('answer', {static:true}) answer: NgModel;

  title = 'ng-flashcards';
  editing = false;
  editingId: number;
  status: Boolean;



  ngOnInit(){

    }

   flashs: IFlash[] = [{
     question: 'Question 1',
     answer: 'Answer 1',
     show: false,
     id: getRandomNumber(),
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
      show: false,
      id: getRandomNumber(),
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
      show: false,
      id: getRandomNumber(),
    }];

    flash:IFlash = {
      question: '',
      answer: '',
      show: false,
      id: getRandomNumber(),
    }

    trackByFlashId(index, flash) {
      return flash.id;
    }

     handleToggleCard(id: number) {
       const flash = this.flashs.find(flash => flash.id === id);
       flash.show = !flash.show;
    }

    handleDelete(id: number){
      const flashId = this.flashs.findIndex((flash) => flash.id === id);
      console.log(flashId)
      this.flashs.splice(flashId, 1)
    }


    handleEdit(id: number){

    }

    handleRememberedChange({id, flag}){
      const flash = this.flashs.find(flash => flash.id  === id)
      flash.remembered = flag

    }


    handleSubmit(): void {
      this.flashs.push({
        ...this.flash
      })
      this.handleClear();
    }


    handleClear() {
      this.flash = {
      question: '',
      answer: '',
      show: false,
      id: 0,
      };
        this.flashForm.reset();
      }
}
