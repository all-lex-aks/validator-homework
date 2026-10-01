/**
 * Класс для валидации имени пользователя.
 */
export default class Validator {
  /**
   * Проверяет имя пользователя по правилам:
   * 1. Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9).
   * 2. Имя не должно содержать подряд более трёх цифр,
   *    а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.
   *
   * @param {string} username - имя пользователя
   * @returns {boolean} - true, если имя валидно, иначе false
   */
  validateUsername(username) {
    const allowedChars = /^[a-zA-Z0-9-_]+$/;
    if (!allowedChars.test(username)) {
      return false;
    }

    const validStart = /^[a-zA-Z]/;
    if (!validStart.test(username)) {
      return false;
    }

    const validEnd = /[a-zA-Z]$/;
    if (!validEnd.test(username)) {
      return false;
    }

    const noMoreThanThreeDigits = /\d{4,}/;
    if (noMoreThanThreeDigits.test(username)) {
      return false;
    }

    return true;
  }
}