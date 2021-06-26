import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() control: string;
  @Input() placeholder;
  @Input() label;
  @Input() inputType:
    | 'text'
    | 'checkbox'
    | 'radio'
    | 'file'
    | 'password'
    | 'number' = 'text';
}
