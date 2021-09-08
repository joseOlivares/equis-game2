import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

declare let UIkit: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nickName:any;

  constructor() { }

   ngOnInit(): void {
     /*
    this.askNickName().then((nick)=>{
      this.nickName=nick;
      console.log(this.nickName);
    });
    */

    UIkit.modal('#my-nickName').show();

  }

  async askNickName():Promise<string>{
     return UIkit.modal.prompt('Your nickname:','').then(function (nick: string) {
      if (nick !== '' && nick !== null) {
        return nick;
      } else {
        let randomNum=Math.floor(Math.random() * 100); //number between 0 and 1000;
        return 'user'+randomNum;
      }
    });
  }


}
