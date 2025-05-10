# Palapeli

Sovellus on kokoelma kolmesta yksinkertaisesta pelistä, sekä leaderboardeista, joiden avulla käyttäjät pystyvät tarkastelemaan ja tallentamaan pelien tuloksiaan. Sovelluksen pelejä ovat 15-puzzle, matopeli ja 2048-peli. 

<a href="https://palapeli.onrender.com">Linkki sovellukseen</a>

## Käynnistysohjeet

Sovelluksen voi käynnistää paikallisesti Docker-composella tai käynnistämällä erikseen frontendin, backendin ja Postgresin.

### Käynnistys Docker-composella

Luo ensin sovellukseen juureen .env tiedosto ja lisää sinne ```POSTGRES_USER``` ja ```POSTGRES_PASSWORD``` ympäristönmuuttujat esimerkiksi seuraavasti:

```bash
POSTGRES_USER=kayttaja
POSTGRES_PASSWORD=salasana
```

Nyt sovelluksen voi käynnistää komennolla:

```bash
docker-compose up
```

Sovelluksen docker-compose.yml käyttää Postgres-imagea, sekä front- ja backendin Dockerfilestä löytyviä node alpine imageja.

### Käynnistys manuaalisesti

Luo ensin esimerkiksi palapeli niminen tietokanta komennolla:

```bash
createdb palapeli
```

Luo sitten hakemiston ```server/``` juureen .env tiedosto, jossa on määritelty ympäristönmuuttuja ```DATABASE_URL``` Postgres tietokannalle esimerkiksi seuraavasti

```bash
DATABASE_URL=postgres:///palapeli
```

olettaen, että tietokannan nimi on palapeli.

Sovelluksen riippuvuudet tulee asentaa erikseen hakemistoissa ```client/``` ja ```server/``` komennolla:

```bash
npm install
```

Kun Postgres-tietokanta on käynnissä, voi sovelluksen käynnistää ajamalla komennon

```bash
npm run dev
```

erikseen hakemistoissa ```client/``` ja ```server/```.

## Testit

Sovelluksella on API-testejä, sekä joitain end to end -testejä. 

### API-testit

Sovelluksen API testit voi suorittaa siirtymällä hakemistoon ```server/``` ja ajamalla komennon:

```bash
npm run test
```

Tällöin ympäristönmuuttuja ```TEST_DATABASE_URL``` tulee olla määritelty oikein;

Paikallista Postgresiä käyttäessä muuttujan arvo voi olla muotoa:

```bash
TEST_DATABASE_URL=postgres:///testiTietokannanNimi
```

Dockeria käyttäessä sen tulee olla muotoa:

```bash
TEST_DATABASE_URL=postgres://kayttaja:salasana@localhost:5433/test
```

### End to end testit

End to end testejä varten sovelluksen frontend tulee käynnistää komennolla ```npm run test``` tai Docker-composella esimerkiksi komennolla:

```bash
VITE_ENV=test docker-compose up
```

Tämän jälkeen sovelluksen Playwright testit voi ajaa sovelluksen juuresta löytyvästä hakemistosta ```tests/``` komennolla:

```bash
npm run test
```

<a href="https://github.com/kuroniil/palapeli/blob/master/dokumentaatio/tuntikirjanpito.md">Tuntikirjanpito</a>
