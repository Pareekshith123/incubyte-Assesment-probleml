import { Injectable } from '@angular/core';
import { StringCalculator } from './string-calculator';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {
  calculate(numbers: string): number {
    return StringCalculator.add(numbers);
  }
}
