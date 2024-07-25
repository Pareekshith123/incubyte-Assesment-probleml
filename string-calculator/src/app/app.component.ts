import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { StringCalculatorService } from './string-calculator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, CommonModule], 
  providers: [StringCalculatorService]
})
export class AppComponent {
  input: string = '';
  result: number | null = null;
  error: string | null = null;

  constructor(private stringCalculatorService: StringCalculatorService) {}

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.input = inputElement.value;
  }

  calculate(): void {
    try {
      this.result = this.stringCalculatorService.calculate(this.input);
      this.error = null; 
    } catch (e) {
      this.error = (e as Error).message;
      this.result = null; 
    }
  }
}
