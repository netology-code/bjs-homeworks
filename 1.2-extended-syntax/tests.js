describe('Домашнее задание к занятию 1.2 «Расширенный синтаксис»', () => {
    it('Задача №1 должна возвращать 2 корня уравнения', () => {
      expect(getResult(1, 5, 4)).toEqual([-1, -4]);
    });
  
    it('Задача №1 должна возвращать 1 корень уравнения', () => {
      expect(getResult(1, 2, 1)).toEqual([-1]);
    });

    it('Задача №1 должна вернуть пустой массив', () => {
      expect(getResult(1, 2, 10)).toEqual([]);
    });

    it('Задача №2 должна считать среднее значение 0 оценок', () => {
      expect(getAverageMark([])).toEqual(0);
    });

    it('Задача №2 должна считать среднее значение 1 оценки', () => {
      expect(getAverageMark([1])).toEqual(1);
    });

    it('Задача №2 должна считать среднее значение 3 оценок', () => {
      expect(getAverageMark([3,4,5])).toEqual(4);
    });

    it('Задача №2 должна считать среднее значение 5 оценок', () => {
      expect(getAverageMark([1,2,3,4,5])).toEqual(3);
    });

    it('Задача №2 должна считать среднее значение 5 оценок из массива 10 оценок', () => {
      expect(getAverageMark([1,2,3,4,5,6,7,8,9,10])).toEqual(3);
    });

    it('Задача №3 должна предлагать олд-фэшн', () => {
      const name = 'Иван';
      const date = new Date(4, 6, 1993);
      const actualResult = `Не желаете ли олд-фэшн, ${name}?`;
      expect(askDrink(name, date)).toEqual(actualResult);
    });

    it('Задача №3 должна предлагать клюквенный компот', () => {
      const name = 'Иван';
      const date = new Date();
      const actualResult = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
      expect(askDrink(name, date)).toEqual(actualResult);
    });

    
});