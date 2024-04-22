import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  students: { id: number; name: string; age: number }[] = [
    {
      id: 1,
      name: 'Student1',
      age: 20
    },
    {
      id: 2,
      name: 'Student2',
      age: 21
    },
    {
      id: 3,
      name: 'Student3',
      age: 22
    },
    {
      id: 4,
      name: 'Student4',
      age: 23
    }
  ];

  addStudent(e: any): void {
    e.preventDefault();
    const name = e.target.name.value;
    const age = e.target.age.value;
    if (name.length > 3) {
      const isExisting = this.students.some(student => student.name === name );
      if (!isExisting) {
        const newStudent = {
          id: this.students.length + 1,
          name: name,
          age: age
        };
        this.students.push(newStudent);
        alert('Student added successfully');
      } else {
        alert('Student already exists');
      }
    } else {
      alert('Invalid student details');
    }
  }
  deleteStudent(){
    this.students.pop();
  }
}
