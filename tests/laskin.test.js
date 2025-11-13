import { describe, test, expect, it } from 'vitest';
import { laskin } from '../laskin/laskin.js';

// describe ryhmittelee testit "Test Suiteksi"
describe('Laskimen testaus', function () {
  it('Tarkistetaan, että plusLasku-funktio palauttaa oikean summan yhteenlaskulla 1 + 1', function () {
    const checkSumma = laskin.plusLasku(1, 1);
    expect(checkSumma).toBe(2);
  });

  // it ja test kumpikin käy
  test('Tarkistetaan, että miinusLasku-funktio palauttaa oikean erotuksen vähennyslaskulla 5 - 2', function () {
    const checkSumma = laskin.miinusLasku(5, 2);
    expect(checkSumma).toBe(3);
  });
});
