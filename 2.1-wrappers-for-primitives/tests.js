describe('Домашнее задание к занятию 2.1 «Обертки для примитивов»', () => {
  it('Задача №1 должна верно считать кредит, кейс #1', () => {
    const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    console.log(nextYearDate);
    expect(calculateTotalMortgage(10, 0, 50000, nextYearDate)).toEqual(52749.53);
  });

  it('Задача №1 должна верно считать кредит, кейс #2', () => {
    const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    expect(calculateTotalMortgage(10, 1000, 50000, nextYearDate)).toEqual(51694.54);
  });

  it('Задача №1 должна верно считать кредит, кейс #3', () => {
    const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 4));
    expect(calculateTotalMortgage(10, 20000, 20000, nextYearDate)).toEqual(0);
  });

  it('Задача №1 должна верно считать кредит, кейс #4', () => {
    const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
    expect(calculateTotalMortgage(10, 0, 10000, nextYearDate)).toEqual(11616.19);
  });

  it('Задача №1 должна верно считать кредит, кейс #5', () => {
    const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
    expect(calculateTotalMortgage(15, 0, 10000, nextYearDate)).toEqual(12479.52);
  });

  it('Задача №2 должна верно приветствовать анонима при незаданном имени ', () => {
    expect(getGreeting()).toEqual("Привет, мир! Меня зовут Аноним");
  });

  it('Задача №2 должна верно приветствовать анонима при отсутствующем имени ', () => {
    expect(getGreeting(null)).toEqual("Привет, мир! Меня зовут Аноним");
  });

  it('Задача №2 должна верно приветствовать анонима при имени равном пустой строке', () => {
    expect(getGreeting("")).toEqual("Привет, мир! Меня зовут Аноним");
  });

  it('Задача №2 должна верно приветствовать пользователя при известном имени', () => {
    expect(getGreeting("Пётр")).toEqual("Привет, мир! Меня зовут Пётр");
  });
  
});