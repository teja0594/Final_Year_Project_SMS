import { Component, OnInit } from '@angular/core';
import { SocketService } from '../_services/socket.service';
@Component({
  selector: 'app-admintempresults',
  templateUrl: './admintempresults.component.html',
  styleUrls: ['./admintempresults.component.css']
})
export class AdmintempresultsComponent implements OnInit {
  title = 'University Chatbot';
  messageArray = [];
  synth:any;
  voices:any;
  constructor(private socketService:SocketService) {
    this.synth = window.speechSynthesis;
    this.voices = this.synth.getVoices();
  }
  message= '';
  ngOnInit(): void {
    this.socketService.receivedReply().subscribe(data=> {
      this.messageArray.push({name:'SMS Bot', message: data.outputMessage});
      this.speak(data.outputMessage);
    });
  }
  sendMessage(){
    const data = { message:this.message };
    this.socketService.sendMessage(data);
    this.messageArray.push({name:'you', message:this.message});
    this.message = '';
  }

 speak(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-US";
  u.volume = 1; //0-1 interval
  u.rate = 1;
  u.pitch = 1; //0-2 interval
  this.synth.speak(u);
}


}
