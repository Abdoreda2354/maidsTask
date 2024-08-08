import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  userId:any
  userData:any={}
  

constructor(private _ActivatedRoute:ActivatedRoute, private _UsersService:UsersService){}

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(parm)=>{
      this.userId = parm.get('id')
      console.log(this.userId);
      
    }
  })
  this._UsersService.getUserDetails(this.userId).subscribe({
    next:(res)=>{
      this.userData=res.data
    }

  })
}
}
