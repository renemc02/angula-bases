import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-components.html'
})

export class MainPageComponent  {

 constructor( private dbzService: dbzService){}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ): void {

    this.dbzService.DeleteCharacterById( id );

  }

  onNewCharacter( character: Character ): void {

    this.dbzService.addCharacter( character );

  }


}
