import { Component } from '@angular/core';



@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  title = 'Heroes'
  heroes: string[] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor'];
  deletedHero: string = '';

  deleteHeroe(index: number) {
    this.heroes.splice(index, 1);
    
  }

  setDeletedHeroe(heroName: string) {
    this.deletedHero = heroName;
  }
}
