import reservationCounter from './mocks/reservationCounter';

describe('test of reservations made on a single movie', () => {
  test('reservation array with four reservations', () => {
    const reservations = [
      {
        item_id: '1',
        username: 'Stan',
        date_start: '02-02-2022',
        date_end: '02-02-2023',
      },
      {
        item_id: '2',
        username: 'Gleeny',
        date_start: '02-02-2022',
        date_end: '02-02-2023',
      },
      {
        item_id: '3',
        username: 'Solomon',
        date_start: '02-02-2022',
        date_end: '02-02-2023',
      },
    ];
    expect(reservationCounter(reservations)).toBe(3);
  });
  test('reservation array with four reservations', () => {
    const reservations = [];
    expect(reservationCounter(reservations)).toBe(0);
  });
});