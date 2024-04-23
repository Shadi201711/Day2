import { CommonModule } from '@angular/common';
import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-track-details',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './track-details.component.html',
  styleUrl: './track-details.component.css'
})
export class TrackDetailsComponent {

    LocationValue: string[] = [];
    selectValue: string = '';

    trackData:{
      name:string,location:string[]}[]=[{
        name:"Track 1",
        location:["Mounfia","Smart","Alex","Mansoura"]
      },
      {
        name:"Track 2",
        location:["Smart","Benha","Aswan"]
      },
      {
        name:"Track 3",
        location:["Smart"]
      },
      {
        name:"Track 4",
        location:["Smart","Cairo","Luxor","Banha"]
      },
      {
        name:"Track 5",
        location:["Menoufia","Aswan","Alex","Banha"]
      }
    ]
            onSelect(trackName:string){
              const track = this.trackData.find(track => track.name === trackName);
              if(!track) return;
              this.LocationValue = [...track.location];
        }

        // @Output() TrackEvent = new EventEmitter();
        // SendData(){
        //   this.TrackEvent.emit(this.TrackEvent);
        // }
}
