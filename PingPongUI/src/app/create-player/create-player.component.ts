import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PlayerService } from '../player.service';
import { skillLevelService } from '../skill-Level.service';
import { Observable} from 'rxjs';
import { Player } from '../player';
import { SkillLevel } from '../skill-Level';
 
@Component({
    selector: 'app-create-player',
    templateUrl: './create-player.component.html',
    styleUrls: ['./create-player.component.css'],
    providers: [PlayerService, skillLevelService]
})
 
// component for creating a player record
export class CreatePlayerComponent {
 
    // our angular form
    create_player_form: FormGroup;
 
    @Output() show_read_players_event = new EventEmitter();
 
    // list of skill levels
    skillLevels: SkillLevel[];
 
    // initialize 'player service', 'skillLevel service' and 'form builder'
    constructor(
        private playerService: PlayerService,
        private skillLevelService: skillLevelService,
        formBuilder: FormBuilder
    ){
        // based on our html form, build our angular form
        this.create_player_form = formBuilder.group({
            firstName: ["", Validators.required],
            lastName: ["", Validators.required],
            emailAddress: ["", Validators.required],
            age: [""],
            skillLevel_id: [""]
        });
    }
 
    // user clicks 'create' button
    createPlayer(){
 
        // send data to server
        this.playerService.createPlayer(this.create_player_form.value)
            .subscribe(
                 player => {
                    // show an alert to tell the user if player was created or not
                    console.log(player);
 
                    // go back to list of players
                    this.readPlayers();
                 },
                 error => console.log(error)
             );
    }
 
    // user clicks the 'read players'/back button
    readPlayers(){
        this.show_read_players_event.emit({ title: "Read players" });
    }
 
    // what to do when this component were initialized
    ngOnInit(){
        // read skills from database
        this.skillLevelService.readSkillLevels()
            .subscribe(res => this.skillLevels = res);
    }
}