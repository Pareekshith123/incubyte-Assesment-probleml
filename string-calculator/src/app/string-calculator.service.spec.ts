import { TestBed } from '@angular/core/testing';
import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should return 0 for an empty string', () => {
    expect(service.calculate('')).toBe(0);
  });

  it('should return the number itself for a single number', () => {
    expect(service.calculate('1')).toBe(1);
  });

  it('should return the sum of two numbers', () => {
    expect(service.calculate('1,5')).toBe(6);
  });

  it('should handle new lines between numbers', () => {
    expect(service.calculate('1\n2,3')).toBe(6);
  });

  it('should support custom delimiters', () => {
    expect(service.calculate('//;\n1;2')).toBe(3);
  });

  it('should throw an error for negative numbers', () => {
    expect(() => service.calculate('1,-2,3')).toThrow(new Error('Negative numbers not allowed: -2'));
  });

  it('should show all negative numbers in the error message', () => {
    expect(() => service.calculate('1,-2,-3')).toThrow(new Error('Negative numbers not allowed: -2, -3'));
  });
});
