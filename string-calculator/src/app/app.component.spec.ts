import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StringCalculatorService } from './string-calculator.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, FormsModule, CommonModule], 
      providers: [StringCalculatorService] 
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'string-calculator' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('string-calculator');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('String Calculator');
  });

  it('should calculate the sum of comma-separated numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.input = '1,2,3';
    app.calculate();
    expect(app.result).toEqual(6);
    expect(app.error).toBeNull();
  });

  it('should handle new lines between numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.input = '1\n2,3';
    app.calculate();
    expect(app.result).toEqual(6);
    expect(app.error).toBeNull();
  });

  it('should support different delimiters', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.input = '//;\n1;2';
    app.calculate();
    expect(app.result).toEqual(3);
    expect(app.error).toBeNull();
  });

  it('should throw an error for negative numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.input = '1,-2,3';
    app.calculate();
    expect(app.result).toBeNull();
    expect(app.error).toContain('negative numbers not allowed');
  });
});
