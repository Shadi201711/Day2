import { CommonModule } from '@angular/common';
import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() EventData = new EventEmitter();

  Data:string = '';
SendData(){
  this.EventData.emit(this.Data);
}
Home(){
  this.Data = 'Home';
  this.SendData();
}
Student(){
  this.Data = 'Student';
  this.SendData();
}
Track(){
  this.Data = 'Track';
  this.SendData();
}
Product(){
  this.Data = 'Product';
  this.SendData();
}
}
