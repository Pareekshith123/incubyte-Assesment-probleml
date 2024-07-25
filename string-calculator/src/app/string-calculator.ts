export class StringCalculator {
    calculate(sty: string) {
      throw new Error('Method not implemented.');
    }
    static add(numbers: string): number {
        if (!numbers) return 0;

        let delimiter = /,|\n/;
        if (numbers.startsWith('//')) {
            const delimiterEndIndex = numbers.indexOf('\n');
            delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
            numbers = numbers.substring(delimiterEndIndex + 1);
        }

        const numArray = numbers.split(delimiter);
        let sum = 0;
        const negatives: number[] = [];

        numArray.forEach(num => {
            const number = parseInt(num, 10);
            if (isNaN(number)) return;

            if (number < 0) {
                negatives.push(number);
            } else {
                sum += number;
            }
        });

        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
        }

        return sum;
    }
}
