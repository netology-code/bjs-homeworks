describe('Домашнее задание к занятию 3.2 «Асинхронность»', () => {

  let clock; 

  beforeEach(function(){
    clock = new AlarmClock();
  }) 

  it('Необходимо создавать объект будильник', () => {
    expect(clock).toBeTruthy();
  });

  it('Необходимо создавать добавлять звонок', () => {
    clock.addClock("16:45", f => f, 1);
    expect(clock.alarmCollection.length).toEqual(1);
  });

  it('Необходимо добавлять и удалять звонок', () => {
    clock.addClock("16:45", f => f, 1);
    expect(clock.alarmCollection.length).toEqual(1);
    clock.removeClock(1);
    expect(clock.alarmCollection.length).toEqual(0);
  });

  it('Id интервала должно отсутствовать до запуска', () => {
    expect(clock.timerId).toBeNull();
  });

  it('Необходимо запускать будильник', () => {
    clock.addClock("16:45", f => f, 1);
    clock.start();
    expect(clock.timerId).toBeDefined();
  });

  it('Будильник должен возвращать время в формате HH:MM', () => {
    const currentDate = new Date();
    const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
    const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
    expect(clock.getCurrentFormattedTime()).toEqual(`${hours}:${minutes}`);
  });

  it('Будильник должен создавать таймер, а затем его удалять', () => {
    clock.start();
    expect(clock.timerId).toBeDefined();
    clock.stop();
    expect(clock.timerId).toBeNull();
  });

  it('Будильник должен создавать звонки, а затем очищать из все', () => {
    clock.addClock("16:45", f => f, 1);
    clock.addClock("16:45", f => f, 2);
    clock.addClock("16:45", f => f, 3);
    expect(clock.alarmCollection.length).toEqual(3);
    clock.clearAlarms();
    expect(clock.alarmCollection.length).toEqual(0);
  });

  it('Будильник не должен создавать таймер с одинаковым id', () => {
    clock.addClock("16:45", f => f, 1);
    clock.addClock("16:45", f => f, 1);
    expect(clock.alarmCollection.length).toEqual(1);
  });

});