import { Component, OnInit, inject } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  providers: [SampleService]
})
export class SecondComponent implements OnInit {
  sampleService: SampleService = inject(SampleService);
  message?: string;
  constructor() { }

  ngOnInit(): void {
    this.message = this.sampleService.message;
  }
  update() {
    this.sampleService.setMessage(Math.random().toString());
  }
}
