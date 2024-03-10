import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contact: any;
  public email: string = '';
  message :any;
  constructor(private commonservice: CommonService) { }
  ngOnInit(): void {
    this.getContact()
  }

  subscribe = () => {
    console.log("email "+this.email)
    if(!this.email){
      this.message = "Please Fill the Email Id to subscribe";
      setTimeout(()=>{
        this.message = "";
      },5000)
    }
    else if( !this.email.includes('@') || !this.email.includes('.')){
      this.message = "Please Fill the  Valid Email Id to subscribe";
      setTimeout(()=>{
        this.message = "";
      },5000)
    }
    else{
      this.commonservice.postRequest("subscribe",{email:this.email}).subscribe((data: any) => {
        this.message = data.result;
      })
      setTimeout(()=>{
        this.message = "";
      },5000)
    }
  }

  getContact = () => {
    this.commonservice.getRequest("getContact").subscribe((data: any) => {
      this.contact = data.data[0];
    })
  }
}
