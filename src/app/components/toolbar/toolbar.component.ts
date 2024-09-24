import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Output() button1 = new EventEmitter();
  @Output() button2 = new EventEmitter();
  buttonAction(button: number): void{
    if (button === 1) {
      this.button1.emit('click');
    } else {
      this.button2.emit('click');
    }
  }

}
