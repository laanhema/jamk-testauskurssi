// testit ravintola.js-koodille

import { describe, test, expect } from 'vitest';
import { ravintola } from '../yksikkotestit/ravintola.js';

describe('tehtävä 1.1 - laskeLasku-funktion testaaminen', function () {
  test('tuleeko oikea vastaus kun viedään parametreina true, true, true', function () {
    const result = ravintola.laskeLasku(true, true, true);
    expect(result).toBe(17);
  });

  test('tuleeko oikea vastaus kun viedään parametreina false, false, false', function () {
    const result = ravintola.laskeLasku(false, false, false);
    expect(result).toBe(6);
  });

  test('tuleeko oikea vastaus kun viedään parametreina true, false, true', function () {
    const result = ravintola.laskeLasku(true, false, true);
    expect(result).toBe(13);
  });

  test('tuleeko oikea vastaus kun viedään parametreina false, true, false', function () {
    const result = ravintola.laskeLasku(false, true, false);
    expect(result).toBe(10);
  });

  test('tuleeko oikea vastaus kun viedään parametreina true, true, false', function () {
    const result = ravintola.laskeLasku(true, true, false);
    expect(result).toBe(14);
  });

  test('tuleeko oikea vastaus kun viedään parametreina false, false, true', function () {
    const result = ravintola.laskeLasku(false, false, true);
    expect(result).toBe(9);
  });

  test('tuleeko oikea vastaus kun viedään parametreina false, true, true', function () {
    const result = ravintola.laskeLasku(false, true, true);
    expect(result).toBe(13);
  });

  test('tuleeko oikea vastaus kun viedään parametreina true, false, false', function () {
    const result = ravintola.laskeLasku(true, false, false);
    expect(result).toBe(10);
  });
});

describe('tehtävä 1.2 - palautaTaulukonSatunnainenArvo-funktion testaus', function () {
  test('testataan kun viedään parametrina alkuruoat-taulukko', function () {
    const result = ravintola.palautaTaulukonSatunnainenArvo(
      ravintola.alkuruoat
    );

    expect(ravintola.alkuruoat).toContain(result);
  });

  test('testataan kun viedään parametrina paaruoat-taulukko', function () {
    const result = ravintola.palautaTaulukonSatunnainenArvo(ravintola.paaruoat);

    expect(ravintola.paaruoat).toContain(result);
  });

  test('testataan kun viedään parametrina jalkiruoat-taulukko', function () {
    const result = ravintola.palautaTaulukonSatunnainenArvo(
      ravintola.jalkiruoat
    );

    expect(ravintola.jalkiruoat).toContain(result);
  });

  test('testataan kun viedään parametrina juomat-taulukko', function () {
    const result = ravintola.palautaTaulukonSatunnainenArvo(ravintola.juomat);

    expect(ravintola.juomat).toContain(result);
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
