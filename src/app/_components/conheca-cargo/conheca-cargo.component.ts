import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-conheca-cargo',
  standalone: false,
  templateUrl: './conheca-cargo.component.html',
  styleUrl: './conheca-cargo.component.scss'
})
export class ConhecaCargoComponent {

  membros = [
    {
      bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quod dolor, animi tenetur nemo consequuntur quasi! Enim facere voluptatum, unde natus odio minima consectetur ut reiciendis sed placeat nesciunt expedita?'+
            'Expedita, ea! Alias illum vero voluptates saepe voluptatem at aperiam voluptate. Asperiores sunt est recusandae minima tempora alias atque ullam iste officia, culpa veritatis adipisci magnam harum? Voluptates, culpa esse?'+
            'Mollitia nulla repudiandae similique natus dolore voluptatibus ullam labore accusamus nemo deserunt. Beatae autem dicta, tempora harum placeat sit libero officiis laborum consequuntur sed obcaecati sapiente, accusamus iure illum natus!',
      expanded: false
    },
    {
      bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quod dolor, animi tenetur nemo consequuntur quasi! Enim facere voluptatum, unde natus odio minima consectetur ut reiciendis sed placeat nesciunt expedita?'+
            'Expedita, ea! Alias illum vero voluptates saepe voluptatem at aperiam voluptate. Asperiores sunt est recusandae minima tempora alias atque ullam iste officia, culpa veritatis adipisci magnam harum? Voluptates, culpa esse?'+
            'Mollitia nulla repudiandae similique natus dolore voluptatibus ullam labore accusamus nemo deserunt. Beatae autem dicta, tempora harum placeat sit libero officiis laborum consequuntur sed obcaecati sapiente, accusamus iure illum natus!',
      expanded: false
    },
    {
      bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quod dolor, animi tenetur nemo consequuntur quasi! Enim facere voluptatum, unde natus odio minima consectetur ut reiciendis sed placeat nesciunt expedita?'+
            'Expedita, ea! Alias illum vero voluptates saepe voluptatem at aperiam voluptate. Asperiores sunt est recusandae minima tempora alias atque ullam iste officia, culpa veritatis adipisci magnam harum? Voluptates, culpa esse?'+
            'Mollitia nulla repudiandae similique natus dolore voluptatibus ullam labore accusamus nemo deserunt. Beatae autem dicta, tempora harum placeat sit libero officiis laborum consequuntur sed obcaecati sapiente, accusamus iure illum natus!',
      expanded: false
    },
    {
      bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quod dolor, animi tenetur nemo consequuntur quasi! Enim facere voluptatum, unde natus odio minima consectetur ut reiciendis sed placeat nesciunt expedita?'+
            'Expedita, ea! Alias illum vero voluptates saepe voluptatem at aperiam voluptate. Asperiores sunt est recusandae minima tempora alias atque ullam iste officia, culpa veritatis adipisci magnam harum? Voluptates, culpa esse?'+
            'Mollitia nulla repudiandae similique natus dolore voluptatibus ullam labore accusamus nemo deserunt. Beatae autem dicta, tempora harum placeat sit libero officiis laborum consequuntur sed obcaecati sapiente, accusamus iure illum natus!',
      expanded: false
    },
    {
      bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quod dolor, animi tenetur nemo consequuntur quasi! Enim facere voluptatum, unde natus odio minima consectetur ut reiciendis sed placeat nesciunt expedita?'+
            'Expedita, ea! Alias illum vero voluptates saepe voluptatem at aperiam voluptate. Asperiores sunt est recusandae minima tempora alias atque ullam iste officia, culpa veritatis adipisci magnam harum? Voluptates, culpa esse?'+
            'Mollitia nulla repudiandae similique natus dolore voluptatibus ullam labore accusamus nemo deserunt. Beatae autem dicta, tempora harum placeat sit libero officiis laborum consequuntur sed obcaecati sapiente, accusamus iure illum natus!',
      expanded: false
    },
    {
      bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quod dolor, animi tenetur nemo consequuntur quasi! Enim facere voluptatum, unde natus odio minima consectetur ut reiciendis sed placeat nesciunt expedita?'+
            'Expedita, ea! Alias illum vero voluptates saepe voluptatem at aperiam voluptate. Asperiores sunt est recusandae minima tempora alias atque ullam iste officia, culpa veritatis adipisci magnam harum? Voluptates, culpa esse?'+
            'Mollitia nulla repudiandae similique natus dolore voluptatibus ullam labore accusamus nemo deserunt. Beatae autem dicta, tempora harum placeat sit libero officiis laborum consequuntur sed obcaecati sapiente, accusamus iure illum natus!',
      expanded: false
    },
  ];

  toggleExpand(index: number) {
    this.membros[index].expanded = !this.membros[index].expanded
  }

  constructor(private location: Location) {}

  return(){
    this.location.back()
  }

}
