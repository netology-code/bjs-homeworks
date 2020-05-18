describe('Домашнее задание к занятию 2.1 «Функции, объекты»', () => {
  describe('Задача №1', () => {
    it('должна возвращать 2 корня уравнения', () => {
      expect(getSolutions(1, 5, 4)).toEqual({D: 9, roots:[-1, -4]});
    });
  
    it('должна возвращать 1 корень уравнения', () => {
      expect(getSolutions(1, 2, 1)).toEqual({D: 0, roots:[-1]});
    });
  
    it('должна возвращать пустой массив', () => {
      expect(getSolutions(1, 2, 10)).toEqual({D: -36, roots:[]});
    });
  });

  
  describe('Задача №2', () => {
    it('функция getAverageMark должна считать среднюю оценку', () => {
      expect(getAverageMark([1,2,3,4,5,6,7,8,9,10])).toEqual(5.5);
    });
  
    it('функция getAverageMark должна считать среднюю оценку для пустого массива', () => {
      expect(getAverageMark([])).toEqual(0);
    });
  
    it('функция getAverageScore должна считать среднюю оценку для пустого объекта', () => {
      expect(getAverageScore({})).toEqual({average: 0});
    });
  
    it('функция getAverageScore должна считать среднюю оценку для нескольких предметов', () => {
      const inputData = {
        algebra : [4, 5, 5, 4],
        geometry : [2, 5],
        russian : [3, 3, 4, 5],
        physics : [5, 5],
        music : [ 2, 2, 5],
        english : [4, 4, 3, 3],
        poetry : [5, 3, 4],
        chemistry : [2],
        french : [4, 4] 
      };
  
      const outputData = {
        algebra: 4.5,
        geometry: 3.5,
        russian: 3.75,
        physics: 5,
        music: 3,
        english: 3.5,
        poetry: 4,
        chemistry: 2,
        french: 4,
        average: 3.6944444444444446
      }
  
      expect(getAverageScore(inputData)).toEqual(outputData);
    });
  });

  describe('Задача №3', () => {
    it('функция getDecodedValue должна расшифровывать "1"', () => {
      expect(getDecodedValue(1)).toEqual('Эмильо');
    });
  
    it('функция getDecodedValue должна расшифровывать "0"', () => {
      expect(getDecodedValue(0)).toEqual('Родриго');
    });
  
    it('функция getPersonData должна верно расшифровывать объект', () => {
      expect(getPersonData({aaa: 1, bbb: 0})).toEqual({firstName: "Эмильо", lastName: "Родриго"});
    });
  });
});