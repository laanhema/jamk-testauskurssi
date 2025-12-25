// testit ravintola.js-koodille

import { describe, test, expect } from 'vitest';
import { ravintola } from '../yksikkotestit/ravintola.js';

describe('TEHTÄVÄ 1.1 - laskeLasku-funktion testaus', function () {
  test('test 1 - tomaattikeitto + kalakeitto + hedelmäsalaatti + tee = 19', function () {
    const ruoat = [
      ravintola.alkuruoat[0],
      ravintola.paaruoat[0],
      ravintola.jalkiruoat[0],
      ravintola.juomat[0],
    ];
    const result = ravintola.laskeLasku(ruoat);
    expect(result).toBe(19);
  });

  test('test 2 - leipä + makaroonilaatikko + jäätelö + kahvi = 18', function () {
    const ruoat = [
      ravintola.alkuruoat[1],
      ravintola.paaruoat[1],
      ravintola.jalkiruoat[1],
      ravintola.juomat[1],
    ];
    const result = ravintola.laskeLasku(ruoat);
    expect(result).toBe(18);
  });

  test('test 3 - vihersalaatti + kasvispihvi + pulla + maito = 18', function () {
    const ruoat = [
      ravintola.alkuruoat[2],
      ravintola.paaruoat[2],
      ravintola.jalkiruoat[2],
      ravintola.juomat[2],
    ];
    const result = ravintola.laskeLasku(ruoat);
    expect(result).toBe(18);
  });

  test('test 4 - salsa + kanasalaatti + donitsi + mehu = 21', function () {
    const ruoat = [
      ravintola.alkuruoat[3],
      ravintola.paaruoat[3],
      ravintola.jalkiruoat[3],
      ravintola.juomat[3],
    ];
    const result = ravintola.laskeLasku(ruoat);
    expect(result).toBe(21);
  });
});

describe('TEHTÄVÄ 1.2 - palautaTaulukonSatunnainenArvo-funktion testaus', function () {
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

  describe('TEHTÄVÄ 1.3 - syoRavintolassa-funktion testaus', function () {
    test('test 1 - ravintolaan mahtuu vain 15 asiakasta joten tämän pitäisi palauttaa undefined', function () {
      // ravintolaan mahtuu vain 15 asiakasta joten tämän pitäisi palauttaa undefined
      const result = ravintola.syoRavintolassa(16);
      expect(result).toBeUndefined();
    });

    test('test 2 - testataan toimiiko funktio oikeanlaisella syötteellä, pitäisi palauttaa objektin', function () {
      // testataan toimiiko funktio, pitäisi palauttaa objektin
      // funktio palauttaa siis objekti-taulukon joka sisältää tilaukset
      const result = ravintola.syoRavintolassa(1);
      expect(result).toBeTypeOf('object');
    });
  });

  describe('TESTIKOODIN TOTEUTUS -kohta', function () {});
});
