import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
 logoutState:boolean = false
 constructor(private toggle:ToggleService, private authService:AuthService){}
 ngOnInit(): void {
   this.toggle.getLogout().subscribe((value)=>{
    this.logoutState = value
   })
 }

 closeModal(){
  this.toggle.setLogout(false);
 }


   logout() {
     this.authService.logout(); 
     window.location.reload(); 
   }

}
