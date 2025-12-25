/*
TIKO RAVINTOLA
OHJELMAKOODI
*/

const Ravintola = function () {
  this.alkuruoat = [
    { nimi: 'Tomaattikeitto', hinta: 5 },
    { nimi: 'Leipä', hinta: 3 },
    { nimi: 'Vihersalaatti', hinta: 4 },
    { nimi: 'Salsa', hinta: 6 },
  ];
  this.paaruoat = [
    { nimi: 'Kalakeitto', hinta: 8 },
    { nimi: 'Makaroonilaatikko', hinta: 7 },
    { nimi: 'Kasvispihvi', hinta: 9 },
    { nimi: 'Kanasalaatti', hinta: 8 },
  ];
  this.jalkiruoat = [
    { nimi: 'Hedelmäsalaatti', hinta: 4 },
    { nimi: 'Jäätelö', hinta: 5 },
    { nimi: 'Pulla', hinta: 3 },
    { nimi: 'Donitsi', hinta: 4 },
  ];
  this.juomat = [
    { nimi: 'Tee', hinta: 2 },
    { nimi: 'Kahvi', hinta: 3 },
    { nimi: 'Maito', hinta: 2 },
    { nimi: 'Mehu', hinta: 3 },
  ];
  // this.alkuruokaHinta = 4;
  // this.paaruokaHinta = 6;
  // this.jalkiruokaHinta = 4;
  // this.juomaHinta = 3;
  this.paikkojenMaara = 15;
  this.paikat;
};

/**
 * Palauttaa satunnaisen boolean arvon
 * @return {boolean} Randomized boolean
 */
function generoiBoolean() {
  return Math.random() < 0.5;
}

/**
 * Jos 'asiakkaidenMaara' on pienempi tai yhtäsuuri kuin 'paikkojenMaara', luo taulukon 'tilaukset'
 * johon tallennetaan yksittäisen asiakkaan tilaus. tilaaAteria-funktiolle annetaan satunnaiset boolean arvot
 * argumentteina.
 *
 * Palauttaa päätteeksi 'tilaukset' taulukon.
 * @param {number} asiakkaidenMaara
 * @return {object} object array
 */
Ravintola.prototype.syoRavintolassa = function (asiakkaidenMaara) {
  // tässä vielä käytetään myös tarkistaPaikkojenMaara-funktiota koska se tulostaa havainnollistavat tulosteet konsoliin joka auttaa testaamisessa
  // const onTilaa = this.tarkistaPaikkojenMaara(asiakkaidenMaara);

  // if (!onTilaa) {
  //   throw new Error('Ravintolassa ei ole tarpeeksi tilaa näille asiakkaille!');
  // }

  // varataan paikat asiakkaille jos onnistuu
  const paikkaVarausOnnistui = this.varaaPaikat(asiakkaidenMaara);

  if (!paikkaVarausOnnistui) {
    throw new Error('Ravintolassa ei ole tarpeeksi tilaa näille asiakkaille!');
  }

  const tilaukset = [];

  for (let i = 0; i < asiakkaidenMaara; i++) {
    console.log('-------------------------------------------------------');
    console.log(
      'Tarjoillaan asiakasta numero ' + (i + 1) + '. Mitä teille saisi olla?'
    );
    tilaukset.push(
      this.tilaaAteria(generoiBoolean(), generoiBoolean(), generoiBoolean())
    );
    console.log('Asiakkaalle tarjoiltu. Hyvää ruokahalua!');
  }
  console.log('-------------------------------------------------------');
  console.log('Kaikille asiakkaille tarjoiltu!');

  return tilaukset;
};

/**
 * Tarkistaa, että 'asiakkaidenMaara' on suurempi kuin 0, mutta pienempi tai yhtäsuuri kuin 'paikkojenMaara'.
 *
 * Kirjoittaa konsoliin tulosteen tilanteesta, ja palauttaa onnistumisen boolean arvona.
 *
 * Jos 'asiakkaidenMaara' ei ole numero, heittää TypeErrorin.
 * @param {number} asiakkaidenMaara
 * @return {boolean} Onnistuminen
 */
Ravintola.prototype.tarkistaPaikkojenMaara = function (asiakkaidenMaara) {
  if (typeof asiakkaidenMaara !== 'number') {
    throw new TypeError();
  }
  if (asiakkaidenMaara <= 0) {
    console.log(
      'Ikävä kyllä emme voi tarjoilla ' + asiakkaidenMaara + ' asiakkaalle.'
    );
    return false;
  } else if (asiakkaidenMaara <= this.paikkojenMaara) {
    console.log(
      'Tilaa on ' + asiakkaidenMaara + ' asiakkaalle. Tervetuloa ravintolaamme!'
    );
    return true;
  } else {
    console.log(
      'Ikävä kyllä ravintolaamme ei mahdu ' + asiakkaidenMaara + ' asiakasta.'
    );
    return false;
  }
};

/**
 * Lisää paikkojenMaara-muuttujan verran false-arvoja paikat-taulukkoon.
 *
 * (false = vapaa, true = varattu)
 *
 * @param {void} (funktiolla ei ole parametreja)
 * @returns {void} (funktio ei palauta mitään)
 */
Ravintola.prototype.generoiPaikat = function () {
  this.paikat = [];
  for (let i = 0; i < this.paikkojenMaara; i++) {
    this.paikat.push(false);
  }
};

/**
 * Varaa vapaiden paikkojen määrän verran paikkoja ravintolasta.
 *
 * (vapaissa paikoissa taulukon alkion arvona on false)
 *
 * (false = vapaa, true = varattu)
 *
 * @param {number} varauksenMaara - varausten määrä, oletusarvo on 1
 * @returns {boolean} true / false riippuen onnistuiko paikkojen varaus
 */
Ravintola.prototype.varaaPaikat = function (varauksenMaara = 1) {
  // jos paikat-muuttujassa ei ole taulukkoa, generoidaan se
  if (typeof this.paikat === 'undefined') {
    console.log(
      'Paikat-muuttujassa ei ole taulukkoa, generoidaan uusi paikat-taulukko'
    );
    this.generoiPaikat();
  }

  // lasketaan vapaiden paikkojen määrä paikat taulukosta. vapaissa paikoissa on arvona false
  // let vapaitaPaikkoja = this.paikat.filter((x) => {
  //   if (!x) return x;
  // });
  // for (let i = 0; i < this.paikat.length; i++) {
  //   console.log(this.paikat);
  // }
  //
  let vapaitaPaikkoja = 0;
  Array.from(this.paikat).forEach((x) => {
    if (!x) {
      vapaitaPaikkoja++;
    }
  });

  let vapaidenPaikkojenMaara = vapaitaPaikkoja;
  console.log(vapaidenPaikkojenMaara);
  // jos vapaiden paikkojen määrä on pienempi kuin varauksenMaara, palauttaa falsen
  // ts. jos koitetaan varata enemmän paikkoja kuin niitä on vapaana, ei onnistu
  if (vapaidenPaikkojenMaara < varauksenMaara) {
    return false;
  } else {
    // muutoin käydään läpi paikat taulukkoa ja muutetaan varauksenMaara verran false-arvoja trueksi
    let varattujaParhaalla = 0;

    for (let i = 0; i < this.paikat.length; i++) {
      if (!this.paikat[i] && varattujaParhaalla < varauksenMaara) {
        this.paikat[i] = true;
        varattujaParhaalla++;
      }
    }

    // palautetaan lopuksi true
    return true;
  }
};

/**
 * Ottaa parametreina 3 boolean arvoa, joiden avulla määritellään mitä ruokia asiakas tilaa.
 * Jos parametrit eivät ole tyyppiä boolean, heitetään TypeError.
 *
 * Tilaukset tallennetaan 'ruoat' taulukkoon boolean parametrien mukaisesti.
 *
 * Lopuksi kutsutaan 'laskeLasku' funktiota, jolla lasketaan tilauksen lasku.
 *
 * Palauttaa objektin, joka sisältää numeron ja string-taulukon
 *
 * @param {boolean} ottaaAlkuruoan
 * @param {boolean} ottaaJalkiruoan
 * @param {boolean} ottaaJuoman
 * @return {object} object - number, string[]
 */
Ravintola.prototype.tilaaAteria = function (
  ottaaAlkuruoan,
  ottaaJalkiruoan,
  ottaaJuoman
) {
  if (
    typeof ottaaAlkuruoan !== 'boolean' ||
    typeof ottaaJalkiruoan !== 'boolean' ||
    typeof ottaaJuoman !== 'boolean'
  ) {
    throw new TypeError();
  }

  const ruoat = [];
  let ruoka;

  if (ottaaAlkuruoan) {
    ruoka = this.palautaTaulukonSatunnainenArvo(this.alkuruoat);
    console.log('Ottaisin alkuruoaksi: ' + ruoka.nimi);
    ruoat.push(ruoka);
  }

  ruoka = this.palautaTaulukonSatunnainenArvo(this.paaruoat);
  console.log('Ottaisin pääruoaksi: ' + ruoka.nimi);
  ruoat.push(ruoka);

  if (ottaaJalkiruoan) {
    ruoka = this.palautaTaulukonSatunnainenArvo(this.jalkiruoat);
    console.log('Ottaisin jälkiruoaksi: ' + ruoka.nimi);
    ruoat.push(ruoka);
  }

  if (ottaaJuoman) {
    ruoka = this.palautaTaulukonSatunnainenArvo(this.juomat);
    console.log('Ottaisin juomaksi: ' + ruoka.nimi);
    ruoat.push(ruoka);
  }

  const summa = this.laskeLasku(ruoat);

  return { summa, ruoat };
};

/**
 * Palauttaa satunnaisen arvon annetusta taulukosta
 * @param {string[]} taulukko
 * @return {string}
 */
Ravintola.prototype.palautaTaulukonSatunnainenArvo = function (taulukko) {
  return taulukko[Math.floor(Math.random() * taulukko.length)];
};

/**
 * Laskee ruokien yhteenlasketun hinnan.
 * @param {object} ruoat - summattavat ruoat taulukossa
 * @return {number} ruokien yhteenlaskettu hinta
 */
Ravintola.prototype.laskeLasku = function (ruoat) {
  let loppuSumma = 0;

  // tässä pitää convertaa Arrayksi koska muuten forEach ei toimi
  Array.from(ruoat).forEach((x) => {
    loppuSumma = loppuSumma + x.hinta;
  });

  return loppuSumma;
};

const ravintola = new Ravintola();

export { ravintola };
