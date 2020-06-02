describe('Домашнее задание к занятию 3.2 «Прототип массива, функции высшего порядка»', () => {
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
    debugger;

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
});