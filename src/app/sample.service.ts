import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  public message: string = "Sample";
  constructor() { }
  public setMessage(input: string) :void{
    this.message = input;
  } 
}
