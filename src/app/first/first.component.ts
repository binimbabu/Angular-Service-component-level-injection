import { Component, OnInit, inject } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [SampleService]
})
export class FirstComponent implements OnInit {
  sampleService: SampleService = inject(SampleService);
  message!: string;
  constructor() { }

  ngOnInit(): void {
    this.message = this.sampleService.message;
  }
  update(){
    this.sampleService.setMessage(Math.random().toString());
  }
}
