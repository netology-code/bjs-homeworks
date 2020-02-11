describe('Домашнее задание к занятию 1.1 «Базовый синтаксис»', () => {
    it('Задача №1 должна правильно считать среднюю оценку', () => {
      expect(averageMark(1, 2, 3)).toEqual(2);
    });
  
    it('Задача №2 должна правильно приветствовать', () => {
      const name = "Иван";
      const actualHelo = `Привет, мир! Меня зовут ${name}`
      expect(sayHello(name)).toEqual(actualHelo);
    });

    it('Задача №3 должна правильно считать формулу', () => {
      expect(calculateFormula()).toEqual(45);
    });
});