import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'bookmark' },
    { title: 'Perfil', url: '/folder/Perfil', icon: 'person' },
    { title: 'Favoritos', url: '/folder/Favoritos', icon: 'thumbs-up' },
    { title: 'Peoyectos', url: '/folder/Proyectos', icon: 'book' },
    { title: 'Opciones', url: '/folder/Opciones', icon: 'settings' },
  ];

  public Categorias = [
    { title: 'Accion', url: '/folder/Accion', icon: 'bonfire' },
    { title: 'Aventura', url: '/folder/Aventura', icon: 'rocket' },
    { title: 'Educativos', url: '/folder/Educativos', icon: 'school' },
    { title: 'Fantasia', url: '/folder/Fantasia', icon: 'sparkles' },
    { title: 'Infantiles', url: '/folder/Infantiles', icon: 'balloon' },
    { title: 'Romance', url: '/folder/Romance', icon: 'heart' },
    { title: 'Terror', url: '/folder/Terror', icon: 'skull' },
  ];
}
