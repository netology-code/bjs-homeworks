console.clear();
describe('Домашнее задание к занятию 3.2 «Прототип массива, функции высшего порядка»', () => {
  describe('Задача №1', () => {
    it('функция getNames должна возвращать имена всех оружий', () => {
      expect(getNames()).toEqual(["Нож", "Посох", "Секира", "Посох Бури", "Длинный лук", "Лук"]);
    });

    it('функция getCountReliableWeapons должна возвращать количество оружий прочней определённого значения', () => {
      expect(getCountReliableWeapons(100)).toEqual(6);
      expect(getCountReliableWeapons(200)).toEqual(4);
      expect(getCountReliableWeapons(300)).toEqual(1);
    });

    it('функция hasReliableWeapons должна возвращать есть ли оружия прочней определённого значения', () => {
      expect(hasReliableWeapons(100)).toBeTruthy();
      expect(hasReliableWeapons(200)).toBeTruthy();
      expect(hasReliableWeapons(300)).toBeTruthy();
      expect(hasReliableWeapons(900)).toBeFalsy();
    });

    it('функция getReliableWeaponsNames должна возвращать имена оружий прочней определённого значения', () => {
      expect(getReliableWeaponsNames(100)).toEqual(["Нож", "Посох", "Секира", "Посох Бури", "Длинный лук", "Лук"]);
      expect(getReliableWeaponsNames(200)).toEqual(["Нож", "Посох", "Секира", "Посох Бури"]);
      expect(getReliableWeaponsNames(300)).toEqual(["Секира"]);
      expect(getReliableWeaponsNames(900)).toEqual([]);
    });

    it('функция getTotalDamage должна возвращать общую сумму всех атак оружий', () => {
      expect(getTotalDamage()).toEqual(75);
    });

    if(typeof getValuestCountToSumValues == 'function'){
      it('функция getValuestCountToSumValues должна считать минимальное количество элементов сумма которых равна или больше переданного значения', () => {
        expect(getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 10)).toEqual(4);
        expect(getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 20)).toEqual(6);
      });
    }
  })
  describe('Задача №2', () => {
    it('функция compareArrays должна возвращать ложь при разных массивах', () => {
      expect(compareArrays([8, 9], [6])).toBeFalsy();
    });

    it('функция compareArrays должна возвращать истину при одинаковых массивах', () => {
      expect(compareArrays([6, 3, 28], [6, 3, 28])).toBeTruthy();
    });

    it('функция compareArrays должна возвращать истину при пустых массивах', () => {
      expect(compareArrays([], [])).toBeTruthy();
    });

    it('функция memorize должна возвращать результат умножения', () => {
      const mMux = memorize((a,b) => a * b, 10)
      expect(mMux(3,8)).toEqual(24);
    });

    it('функция memorize должна возвращать результат вычисления формулы дискриминанта', () => {
      const mDiscriminant = memorize((a,b,c) => b ** 2 - 4*a*c, 10)
      expect(mDiscriminant(4, 6, 2)).toEqual(4);
    });

    it('функция memorize должна возвращать сумму нескольких чисел', () => {
      const mSum = memorize((a,b,c,d) => a + b + c + d, 10)
      expect(mSum(3, 8, 6, 7)).toEqual(24);
    });

    it('функция memorize должна возвращать сумму нескольких чисел (значение из памяти)', () => {
      const mSum = memorize((a,b,c,d) => a + b + c + d, 10)
      expect(mSum(3, 8, 6, 7)).toEqual(24);
      expect(mSum(3, 8, 6, 7)).toEqual(24);
    });

    it('функция memorize должна возвращать функцию, отличающуюся от полученной', () => {
      const inputFunction = (a,b,c,d) => a + b + c + d;
      const mSum = memorize(inputFunction, 10);
      expect(typeof mSum).toEqual('function');
      expect(mSum == inputFunction).toBeFalsy();
    });

    it('оптимизированная функция должна считать быстрей обычной ', () => {
      const sleep = (milliseconds) => {
        let e = new Date().getTime() + milliseconds;
        while (new Date().getTime() <= e) {}
      };

      const sum = (a, b) => {
        sleep(100); 
        return a + b;
      }
      const mSum = memorize(sum, 10);

      let sumTime = performance.now();
      sum(4,5);
      sum(4,5);
      sumTime = performance.now() - sumTime;

      let mSumTime = performance.now();
      mSum(4,5);
      mSum(4,5);
      mSumTime = performance.now() - mSumTime;

      expect(sumTime).toBeGreaterThan(mSumTime);
    });
  })
});