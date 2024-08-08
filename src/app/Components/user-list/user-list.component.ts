import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../../core/services/users.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ScaleCardDirective } from '../../core/directives/scale-card.directive';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule,FormsModule,RouterModule,SearchPipe,NgxPaginationModule,ScaleCardDirective],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  constructor(private _UsersService: UsersService,private _Router:Router) {}
  @ViewChild('top') topElement!: ElementRef;
data:any=[]
term!:number
pageSize:number=0
currentPage:number=0
total:number=0
  ngOnInit(): void {
    this._UsersService.getAllUsers().subscribe({
      next: (res) => {
        this.data = res.data
        this.pageSize=res.per_page  
        this.currentPage=res.page  
        this.total=res.total  

      }
    });
  }

  pageChanged(event:any):void{
    this.topElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    this._UsersService.getAllUsers(event).subscribe({
      next: (res) => {
        this.data = res.data
        this.pageSize=res.per_page  
        this.currentPage=res.page  
        this.total=res.total  

      }
    });
  }

  logout(){
    localStorage.removeItem('login')
    this._Router.navigate(["/login"])
  }
}
