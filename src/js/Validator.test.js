import Validator from './Validator.js';

describe('Validator', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  describe('validateUsername', () => {
    test('должен возвращать true для валидного имени', () => {
      expect(validator.validateUsername('JohnDoe')).toBe(true);
    });

    test('должен возвращать true для имени с дефисом', () => {
      expect(validator.validateUsername('John-Doe')).toBe(true);
    });

    test('должен возвращать true для имени с подчёркиванием', () => {
      expect(validator.validateUsername('John_Doe')).toBe(true);
    });

    test('должен возвращать true для имени с цифрами (не более трёх подряд)', () => {
      expect(validator.validateUsername('John123Doe')).toBe(true);
    });

    test('должен возвращать false, если имя содержит недопустимые символы', () => {
      expect(validator.validateUsername('John@Doe')).toBe(false);
    });

    test('должен возвращать false, если имя содержит кириллицу', () => {
      expect(validator.validateUsername('Джон')).toBe(false);
    });

    test('должен возвращать false, если имя начинается с цифры', () => {
      expect(validator.validateUsername('1John')).toBe(false);
    });

    test('должен возвращать false, если имя начинается с дефиса', () => {
      expect(validator.validateUsername('-John')).toBe(false);
    });

    test('должен возвращать false, если имя начинается с подчёркивания', () => {
      expect(validator.validateUsername('_John')).toBe(false);
    });

    test('должен возвращать false, если имя заканчивается цифрой', () => {
      expect(validator.validateUsername('John1')).toBe(false);
    });

    test('должен возвращать false, если имя заканчивается дефисом', () => {
      expect(validator.validateUsername('John-')).toBe(false);
    });

    test('должен возвращать false, если имя заканчивается подчёркиванием', () => {
      expect(validator.validateUsername('John_')).toBe(false);
    });

    test('должен возвращать false, если имя содержит более трёх цифр подряд', () => {
      expect(validator.validateUsername('John1234Doe')).toBe(false);
    });

    test('должен возвращать false для пустой строки', () => {
      expect(validator.validateUsername('')).toBe(false);
    });
  });
});