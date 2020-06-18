describe('Домашнее задание к занятию 1.1 «Базовый синтаксис»', () => {
  describe('Задача №1', () => {
    it('должна правильно считать среднюю оценку', () => {
      expect(averageMark(1, 2, 3)).toEqual(2);
    });
  });

  describe('Задача №2', () => {
    it('должна правильно приветствовать', () => {
      const name = "Иван";
      const actualHelo = `Привет, мир! Меня зовут ${name}`
      expect(sayHello(name)).toEqual(actualHelo);
    });
  });

  describe('Задача №3', () => {
    it('должна правильно считать формулу', () => {
      expect(calculateFormula()).toEqual(45);
    });
  });
});