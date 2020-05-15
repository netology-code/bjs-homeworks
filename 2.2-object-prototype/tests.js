describe('Домашнее задание к занятию 2.2 «Прототип и конструктор объекта»', () => {
  describe('Задача №1', () => {
    it('должна возвращать null при отсутствующем животном', () => {
      expect(getAnimalSound()).toBeNull();
    });

    it('должна возвращать голос животного', () => {
      expect(getAnimalSound({sound: 'grrrr'})).toEqual('grrrr');
    });
  });

  describe('Задача №2', () => {
    it('должна возвращать округлённую оценку, кейс #1', () => {
      expect(getAverageMark([2,4,5])).toEqual(4);
    });

    it('должна возвращать округлённую оценку, кейс #2', () => {
      expect(getAverageMark([2,3,5])).toEqual(3);
    });

    it('должна возвращать 0 при отсутствии оценок', () => {
      expect(getAverageMark([])).toEqual(0);
    });
  });

  describe('Задача №3', () => {
    it('должна возвращать истину для взрослого пользователя', () => {
      expect(checkBirthday("1990-01-01")).toBeTruthy();
    });

    it('должна возвращать ложь для молодого пользователя', () => {
      expect(checkBirthday("2020-01-01")).toBeFalsy();
    });
  });
});
