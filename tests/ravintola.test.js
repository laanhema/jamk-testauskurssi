// testit ravintola-koodille

import { describe, test, expect } from 'vitest';
import { ravintola } from '../teht1/ravintola.js';

// describe ryhmittelee testit "Test Suiteksi"
describe('laskeLasku-funktion testaus', function () {
  test('test 1', function () {
    const result = ravintola.laskeLasku(true, true, true);
    expect(result).toBe(17);
  });

  test('test 2', function () {
    const result = ravintola.laskeLasku(false, false, false);
    expect(result).toBe(6);
  });

  test('test 3', function () {
    const result = ravintola.laskeLasku(true, false, true);
    expect(result).toBe(13);
  });

  test('test 4', function () {
    const result = ravintola.laskeLasku(false, true, false);
    expect(result).toBe(10);
  });

  test('test 5', function () {
    const result = ravintola.laskeLasku(true, true, false);
    expect(result).toBe(14);
  });

  test('test 6', function () {
    const result = ravintola.laskeLasku(false, false, true);
    expect(result).toBe(9);
  });

  test('test 7', function () {
    const result = ravintola.laskeLasku(false, true, true);
    expect(result).toBe(13);
  });

  test('test 8', function () {
    const result = ravintola.laskeLasku(true, false, false);
    expect(result).toBe(10);
  });
});

describe('palautaTaulukonSatunnainenArvo-funktion testaus', function () {
  test('test 1', function () {
    // tässä pitää palautua alkuruoka taulukko
    const arvo = ravintola.palautaTaulukonSatunnainenArvo(ravintola.alkuruoat);
    // taulukon pitäisi sisältää alkuruoan
    expect(ravintola.alkuruoat).toContain(arvo);
  });

  describe('syoRavintolassa-funktion testaus', function () {
    test('test 1', function () {
      // ravintolaan mahtuu vain 15 asiakasta joten tämän pitäisi palauttaa undefined
      const result = ravintola.syoRavintolassa(16);
      expect(result).toBe(undefined);
    });

    test('test 2', function () {
      // testataan toimiiko funktio, pitäisi palauttaa objekti
      const result = ravintola.syoRavintolassa(1);
      expect(result).toBeTypeOf('object');
    });
  });
});
