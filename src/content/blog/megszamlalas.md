
---
title: "Megszámlálás algoritmus"
description: "Alapalgoritmusok: Megszámlálás algoritmus"
pubDate: "2026-11-20"
tags: ["alapalgoritmusok"]
---

# Megszámlálás

A megszámlálás célja, hogy egy adott lista vagy tömb elemei közül meghatározzuk, **hány elem felel meg egy adott feltételnek**.  
Ez a programozásban nagyon gyakori feladat, például amikor meg kellene számolni egy listában a páros számokat.

---

## Felhasznált programozási fogalmak

1. **Lista**  
A lista egy tömbszerű adatszerkezet, amelyben az elemek sorban tárolódnak.  
Minden elemet külön-külön feldolgozhatunk.(for ciklussal bejárva)

2. **For ciklus**  
A `for elem in lista:` szerkezet végigmegy a lista minden elemén.  
Az aktuális elemet (`elem`) használjuk a feltétel vizsgálatához.

3. **Feltételes vizsgálat (if)**  
Egy `if` szerkezet segítségével eldönthetjük, hogy az elem megfelel-e a megszámlálandó feltételnek.  
Ha igen, növeljük a számláló változót.

4. **Számláló változó**  
Egy változót (pl. `szamlalo`) kezdetben 0-ra állítunk, majd minden feltételnek megfelelő elemnél növeljük 1-gyel.

---

## Kidolgozott példa

Számoljuk meg, hány **páros szám** van a listában:

```python id="2gzr8b"
szamok = [2, 5, 8, 7, 10, 3]

# Számláló kezdőérték
szamlalo = 0

# Végigmegyünk a lista elemein
for szam in szamok:
    if szam % 2 == 0:
        szamlalo += 1

print(f"A páros számok darabszáma:{szamlalo}")
````


**Kimeneti eredmény:**
`A páros számok darabszáma: 3`

---

## Gyakorló feladatok

### Feladat 1 – Pozitív számok számolása

Adott egy lista, számold meg **hány pozitív szám** található benne, és írd ki.

```python id="fz8n2v"
adatok = [-4, 7, 0, 3, -1, 5]

szamlalo = 0

#Ide írd a ciklust:

#Majd printeld ki az eredményt!
```

**Várt eredmény:**
`Pozitív számok darabszáma: 3`

---

### Feladat 2 – Negatív számok számolása

Adott egy lista, számold meg **hány negatív szám** található benne, és írd ki.

```python id="q7k1sv"
adatok = [4, -2, -7, 0, 3, -1]

# Itt folytasd a kódot:

```

**Várt eredmény:**
`Negatív számok darabszáma: 3`

---

### Feladat 3 – Karakterek számolása

Adott egy szöveg, számold meg **hány `a` betű található meg benne!**:

```python id="lt2f8m"
szoveg = "ez egy példa szöveg a gyakorlathoz"

# Itt folytasd a kódot:

```

**Várt eredmény:**
`Az a betűk darabszáma: 4`





