import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-read-players',
  templateUrl: './read-players.component.html',
  styleUrls: ['./read-players.component.css'],
  providers: [PlayerService]
})

export class ReadPlayersComponent implements OnInit {

  @Output() show_create_player_event=new EventEmitter();

  // store list of players
  players: Player[];

  constructor(private playerService: PlayerService) { }

  // when user clicks the 'create' button
  createPlayer(){
    // tell the parent component (AppComponent)
    this.show_create_player_event.emit({
        title: "Create Player"
    });
  }
  
  readPlayer(){}
  updatePlayer(){}
  deletePlayer(){}
  
  ngOnInit() {
    this.playerService.readPlayers().subscribe(res => this.players = res);
  }

}
