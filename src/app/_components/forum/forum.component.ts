import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forum',
  standalone: false,
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent {

  lista: any = [
    { titulo: 'Titulo',
      texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.'
    },
    { titulo: 'Titulo',
      texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.'
    },
    { titulo: 'Titulo',
      texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.'
    },
    { titulo: 'Titulo',
      texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.'
    },
    { titulo: 'Titulo',
      texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.'
    },
    { titulo: 'Titulo',
      texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.'
    },
    { titulo: 'Titulo',
      texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.'
    },
  ]

  constructor(private location: Location) {}

  return(){
    this.location.back()
  }

}
