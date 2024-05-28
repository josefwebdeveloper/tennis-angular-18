import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from "./components/nav/nav.component";
import {ThemeService} from "./services/theme.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tennis';
  themeService: ThemeService = inject(ThemeService);
}
