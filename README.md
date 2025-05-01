# Palapeli

Sovellus on kokoelma kolmesta yksinkertaisesta pelistä, sekä leaderboardeista, joiden avulla käyttäjät pystyvät tarkastelemaan ja tallentamaan pelien tuloksiaan. Sovelluksen pelejä ovat 15-puzzle, matopeli ja 2048-peli. 

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

Sovelluksen Docker-compose käyttää Postgres-imagea, sekä front- ja backendin Dockerfilestä löytyviä node alpine imageja.

### Käynnistys manuaalisesti

Luo ensin hakemiston ```server/``` juureen .env tiedosto, jossa on määritelty ympäristönmuuttuja ```DATABASE_URL``` Postgres tietokannalle esimerkiksi seuraavasti

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

<a href="https://github.com/kuroniil/palapeli/blob/master/dokumentaatio/tuntikirjanpito.md">Tuntikirjanpito</a>