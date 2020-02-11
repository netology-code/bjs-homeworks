describe('Домашнее задание к занятию 3.1 «Прототип массива, функции высшего порядка»', () => {
  it('Функция compareArrays должна возвращать ложь при разных массивах', () => {
    expect(compareArrays([8, 9], [6])).toBeFalsy();
  });

  it('Функция compareArrays должна возвращать истину при одинаковых массивах', () => {
    expect(compareArrays([6, 3, 28], [6, 3, 28])).toBeTruthy();
  });

  it('Функция compareArrays должна возвращать истину при пустых массивах', () => {
    expect(compareArrays([], [])).toBeTruthy();
  });

  it('Функция memorize должна возвращать результат умножения', () => {
    const mMux = memorize((a,b) => a * b, 10)
    expect(mMux(3,8)).toEqual(24);
  });

  it('Функция memorize должна возвращать результат вычисления формулы дискриминанта', () => {
    const mDiscriminant = memorize((a,b,c) => b ** 2 - 4*a*c, 10)
    expect(mDiscriminant(4, 6, 2)).toEqual(4);
  });

  it('Функция memorize должна возвращать сумму нескольких чисел', () => {
    const mSum = memorize((a,b,c,d) => a + b + c + d, 10)
    expect(mSum(3, 8, 6, 7)).toEqual(24);
  });
});