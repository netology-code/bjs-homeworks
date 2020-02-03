describe('Домашнее задание к занятию 2.3 «ООП в JS (ES6)»', () => {

  let weapon;
  let studentLog;

  beforeEach(function(){
    weapon = new Weapon({
      name: 'Старый меч',
      attack: 20,
      durability: 10,
      range: 1,
    });

    studentLog = new StudentLog("Иван Петров");
  }) 

  it('Задача №1 Создание простого оружия', () => {
    expect(weapon).toBeDefined();
    expect(weapon.name).toEqual('Старый меч');
    expect(weapon.attack).toEqual(20);
    expect(weapon.durability).toEqual(10);
    expect(weapon.range).toEqual(1);
  });

  it('Задача №1 Проверка прочности оружия', () => {
    expect(weapon.isBroken()).toBeFalsy();
    weapon.durability = 0;
    expect(weapon.isBroken()).toBeTruthy();
  });

  it('Задача №1 Проверка нанесение урона по оружию', () => {
    const startDurabikity = weapon.durability;
    weapon.takeDamage(10);
    expect(weapon.durability).toBeLessThan(startDurabikity);
  });

  it('Задача №1 Проверка нанесение урона оружием', () => {
    expect(weapon.getDamage()).toEqual(weapon.attack);
    weapon.durability *= 0.1;
    expect(weapon.getDamage()).toEqual(weapon.attack / 2);
    weapon.durability = 0;
    expect(weapon.getDamage()).toEqual(0);
  });

  it('Задача №2 Создание объекта Arm', () => {
    weapon = new Arm();
    expect(weapon).toBeDefined();
    expect(weapon.name).toEqual('Рука');
    expect(weapon.attack).toEqual(1);
    expect(weapon.durability).toBePositiveInfinity();
    expect(weapon.range).toEqual(1);
  });

  it('Задача №2 Создание объекта Bow', () => {
    weapon = new Bow();
    expect(weapon).toBeDefined();
    expect(weapon.name).toEqual('Лук');
    expect(weapon.attack).toEqual(10);
    expect(weapon.durability).toEqual(200);
    expect(weapon.range).toEqual(3);
  });

  it('Задача №2 Создание объекта Sword', () => {
    weapon = new Sword();
    expect(weapon).toBeDefined();
    expect(weapon.name).toEqual('Меч');
    expect(weapon.attack).toEqual(25);
    expect(weapon.durability).toEqual(500);
    expect(weapon.range).toEqual(1);
  });

  it('Задача №2 Создание объекта Knife', () => {
    weapon = new Knife();
    expect(weapon).toBeDefined();
    expect(weapon.name).toEqual('Нож');
    expect(weapon.attack).toEqual(5);
    expect(weapon.durability).toEqual(300);
    expect(weapon.range).toEqual(1);
  });

  it('Задача №2 Создание объекта Staff', () => {
    weapon = new Staff();
    expect(weapon).toBeDefined();
    expect(weapon.name).toEqual('Посох');
    expect(weapon.attack).toEqual(8);
    expect(weapon.durability).toEqual(300);
    expect(weapon.range).toEqual(2);
  });

  it('Задача №2 Создание объекта LongBow', () => {
    weapon = new LongBow();
    expect(weapon).toBeDefined();
    expect(weapon.name).toEqual('Длинный лук');
    expect(weapon.attack).toEqual(15);
    expect(weapon.durability).toEqual(200);
    expect(weapon.range).toEqual(4);
  });

  it('Задача №2 Создание объекта Axe', () => {
    weapon = new Axe();
    expect(weapon).toBeDefined();
    expect(weapon.name).toEqual('Секира');
    expect(weapon.attack).toEqual(27);
    expect(weapon.durability).toEqual(800);
    expect(weapon.range).toEqual(1);
  });

  it('Задача №2 Создание объекта StormStaff', () => {
    weapon = new StormStaff();
    expect(weapon).toBeDefined();
    expect(weapon.name).toEqual('Посох Бури');
    expect(weapon.attack).toEqual(10);
    expect(weapon.durability).toEqual(300);
    expect(weapon.range).toEqual(3);
  });

  it('Задача №3 Создание объекта StudentLog', () => {
    expect(studentLog).toBeDefined();
  });

  it('Задача №3 Получение имени студента', () => {
    expect(studentLog.getName()).toEqual("Иван Петров");
  });

  it('Задача №3 Подсчёт средней оценки по предмету', () => {
    studentLog.addGrade(3, "algebra");
    studentLog.addGrade(5, "algebra");
    expect(studentLog.getAverageBySubject("algebra")).toEqual(4);
  });

  it('Задача №3 Подсчёт общей средней оценки', () => {
    studentLog.addGrade(3, "algebra");
    studentLog.addGrade(5, "algebra");
    studentLog.addGrade(5, "geometry");
    studentLog.addGrade(5, "geometry");
    expect(studentLog.getTotalAverage()).toEqual(4.5);
  });
});