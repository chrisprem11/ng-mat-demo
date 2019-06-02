import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() trainingStart = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  exercises = [
    {
      'code': 10,
      'name': 'Touch-Toes'
    },
    {
      'code': 11,
      'name': 'Side-Lunges'
    },
    {
      'code': 12,
      'name': 'Burpees'
    }
  ];

  onStartTraining() {
    this.trainingStart.emit();
  }

}
