import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatMenuModule, MatButtonModule]
})
export class HeaderSubtitleComponent implements OnInit {
  @Input() subtitle!: string

  constructor(
    private rotas: Router
  ) { }

  ngOnInit(): void {
  }
}
