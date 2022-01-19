import { getMonth } from './index.js';

describe('test getMonth function', () => {
    it('get correct month', () => {
        expect(getMonth(1)).toBe('январь');
    }),
    it('get string month', () => {
        expect(getMonth('январь')).toBe('неизвестно');
    }),
    it('get NaN month', () => {
        expect(getMonth(NaN)).toBe('неизвестно');
    })
});