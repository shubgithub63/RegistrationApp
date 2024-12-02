import { Component } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-userdetail',
  standalone: false,
  
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.css'
})
export class UserdetailComponent {
  users: any[] = []; 

  constructor(private registerService: RegisterService){ }
  ngOnInit():void{
    this.loadUsers();//22
  }


  loadUsers() {
    debugger
    this.registerService.fetchUsers().subscribe(
      (data) => {
        this.users = data; // Store the fetched data
        console.log('Users fetched successfully:', this.users);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

}
