import { squared, cubed } from './maths';

describe('maths.squared', () => {
    it('should return the square of a positive number', () => {
        expect(squared(2)).toBe(4);
        expect(squared(5)).toBe(25);
    });

    it('should return the square of zero', () => {
        expect(squared(0)).toBe(0);
    });

    it('should return the square of a negative number', () => {
        expect(squared(-3)).toBe(9);
        expect(squared(-7)).toBe(49);
    });

    it('should handle decimal numbers', () => {
        expect(squared(1.5)).toBeCloseTo(2.25);
        expect(squared(-2.5)).toBeCloseTo(6.25);
    });
});

describe('cubed', () => {
    it('should return the cube of a positive number', () => {
        expect(cubed(2)).toBe(8);
        expect(cubed(3)).toBe(27);
    });

    it('should return the cube of zero', () => {
        expect(cubed(0)).toBe(0);
    });

    it('should return the cube of a negative number', () => {
        expect(cubed(-2)).toBe(-8);
        expect(cubed(-4)).toBe(-64);
    });

    it('should handle decimal numbers', () => {
        expect(cubed(1.5)).toBeCloseTo(3.375);
        expect(cubed(-2.5)).toBeCloseTo(-15.625);
    });
});