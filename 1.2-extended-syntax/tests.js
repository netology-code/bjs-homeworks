describe('Домашнее задание к занятию 1.2 «Расширенный синтаксис»', () => {
  describe('Задача №1', () => {
    it('должна возвращать 2 корня уравнения', () => {
      expect(getResult(1, 5, 4)).toEqual([-1, -4]);
    });
  
    it('должна возвращать 1 корень уравнения', () => {
      expect(getResult(1, 2, 1)).toEqual([-1]);
    });

    it('должна вернуть пустой массив', () => {
      expect(getResult(1, 2, 10)).toEqual([]);
    });
  });

  describe('Задача №2', () => {
    it('должна считать среднее значение 0 оценок', () => {
      expect(getAverageMark([])).toEqual(0);
    });

    it('должна считать среднее значение 1 оценки', () => {
      expect(getAverageMark([1])).toEqual(1);
    });

    it('должна считать среднее значение 3 оценок', () => {
      expect(getAverageMark([3,4,5])).toEqual(4);
    });

    it('должна считать среднее значение 5 оценок', () => {
      expect(getAverageMark([1,2,3,4,5])).toEqual(3);
    });

    it('должна считать среднее значение 5 оценок из массива 10 оценок', () => {
      expect(getAverageMark([1,2,3,4,5,6,7,8,9,10])).toEqual(3);
    });
  });

  describe('Задача №3', () => {
    it('должна предлагать олд-фэшн', () => {
      const name = 'Иван';
      const date = new Date(1993, 4, 6);
      const actualResult = `Не желаете ли олд-фэшн, ${name}?`;
      expect(askDrink(name, date)).toEqual(actualResult);
    });

    it('должна предлагать клюквенный компот', () => {
      const name = 'Иван';
      const date = new Date();
      date.setFullYear(date.getFullYear() - 5); //выставляем пользователю 5 лет
      const actualResult = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
      expect(askDrink(name, date)).toEqual(actualResult);
    });
  });
});