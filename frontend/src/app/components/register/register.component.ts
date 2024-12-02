import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../services/register.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: false,
  
  
   
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  users: any[] = []; // Array to store fetched user data 22
      
      repeatPass:string='none';
      
      constructor(private registerService: RegisterService){ }
      ngOnInit():void{
        // this.loadUsers();//22
      }
      registerForm=new FormGroup({
        firstname:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]*")]),
        lastname:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]*")]),
        mobile:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[1-9][0-9]*")]),
        gender:new FormControl("",[Validators.required]),
        email:new FormControl("",[Validators.required,Validators.email]),
        address:new FormControl("",[Validators.required]),
        javaFullStack: new FormControl(false),
        mern: new FormControl(false),
        mean: new FormControl(false),
        fathername:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]*")]),
        mothername:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]*")]),
        fmobile:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[1-9][0-9]*")]),
        passwd:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
        rpasswd:new FormControl("")
      });
      // registerSubmited(){
      //   if(this.Password.value==this.RPassword.value){
      //     this.repeatPass='none'
      //     // **Added API call to submit form data**
      // const formData = this.registerForm.value;
      // this.registerService.registerUser(formData).subscribe(
      //   (response) => {
      //     console.log('Registration successful:', response);
      //   },
      //   (error) => {
      //     console.error('Registration failed:', error);
      //   }
      // );
      //   }else{
      //     this.repeatPass='inline'
      //   }
      // }


      // registerSubmited() {
      //   if (this.Password.value === this.RPassword.value) {
      //     this.repeatPass = 'none';
      
      //     // Submit form data via API call
      //     const formData = this.registerForm.value;
      //     this.registerService.registerUser(formData).subscribe(
      //       (response) => {
      //         console.log('Registration successful:', response);
              
      //         // SweetAlert success notification
      //         Swal.fire({
      //           title: 'Registration Successful!',
      //           text: 'Your registration details have been submitted successfully.',
      //           icon: 'success',
      //           confirmButtonText: 'OK'
      //         });
      //       },
      //       (error) => {
      //         console.error('Registration failed:', error);
      
      //         // SweetAlert error notification
      //         Swal.fire({
      //           title: 'Registration Failed!',
      //           text: 'Something went wrong. Please try again later.',
      //           icon: 'error',
      //           confirmButtonText: 'Retry'
      //         });
      //       }
      //     );
      //   } else {
      //     this.repeatPass = 'inline';
      //   }
      // }

      registerSubmited() {
        if (this.Password.value === this.RPassword.value) {
          this.repeatPass = 'none';
      
          // Submit form data via API call
          const formData = this.registerForm.value;
          this.registerService.registerUser(formData).subscribe(
            (response) => {
              console.log('Registration successful:', response);
      
              // SweetAlert success notification
              Swal.fire({
                title: 'Registration Successful!',
                text: 'Your registration details have been submitted successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
              });
      
              // Reset the form after successful submission
              this.registerForm.reset();
            },
            (error) => {
              console.error('Registration failed:', error);
      
              // SweetAlert error notification
              Swal.fire({
                title: 'Registration Failed!',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Retry'
              });
            }
          );
        } else {
          this.repeatPass = 'inline';
        }
      }
       
      
      get FirstName():FormControl{
        return this.registerForm.get("firstname")as FormControl;
      }
      get LastName():FormControl{
        return this.registerForm.get("lastname")as FormControl;
      }
      get Mobile():FormControl{
        return this.registerForm.get("mobile")as FormControl;
      }
      get Gender():FormControl{
        return this.registerForm.get("gender")as FormControl;
      }
      get Email():FormControl{
        return this.registerForm.get("email")as FormControl;
      }
      get Address():FormControl{
        return this.registerForm.get("address")as FormControl;
      }
      get JavaFullStack():FormControl{
        return this.registerForm.get("javaFullStack")as FormControl;
      }
      get Mern():FormControl{
        return this.registerForm.get("mern")as FormControl;
      }
      get Mean():FormControl{
        return this.registerForm.get("mean")as FormControl;
      }
      get FatherName():FormControl{
        return this.registerForm.get("fathername")as FormControl;
      }
      get MotherName():FormControl{
        return this.registerForm.get("mothername")as FormControl;
      }
      get FatherMobile():FormControl{
        return this.registerForm.get("fmobile")as FormControl;
      }
      get Password():FormControl{
        return this.registerForm.get("passwd")as FormControl;
      }
      get RPassword():FormControl{
        return this.registerForm.get("rpasswd")as FormControl;
      }
      //22
      // loadUsers() {
      //   debugger
      //   this.registerService.fetchUsers().subscribe(
      //     (data) => {
      //       this.users = data; // Store the fetched data
      //       console.log('Users fetched successfully:', this.users);
      //     },
      //     (error) => {
      //       console.error('Error fetching users:', error);
      //     }
      //   );
      // }
    //22
}
