import { Component } from '@angular/core';
import { PlayerService } from './player.service'
 
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [PlayerService]
})
 
export class AppComponent {
    // properties for child components
    title="Read Players";
    playerId;
 
    // properties used to identify what views to show
    show_read_players_html=true;
    show_create_player_html=false;
    show_read_one_player_html=false;
    show_update_player_html=false;
    show_delete_player_html=false;

    // show the 'create Player form'
    showCreatePlayer($event){
    
        // set title
        this.title=$event.title;
    
        // hide all html then show only one html
        this.hideAll_Html();
        this.show_create_player_html=true;
    }
    
    // show Players list
    showReadPlayers($event){
        // set title
        this.title=$event.title;
    
        // hide all html then show only one html
        this.hideAll_Html();
        this.show_read_players_html=true;
    }
    
    // hide all html views
    hideAll_Html(){
        this.show_read_players_html=false;
        this.show_read_one_player_html=false;
        this.show_create_player_html=false;
        this.show_update_player_html=false;
        this.show_delete_player_html=false;
    }
}
