---
title: "Elágazások (if, elif, else) Pythonban"
description: "Python alapok: hogyan hozzunk döntéseket, mikor mit csináljon a programunk az if, elif és else segítségével."
pubDate: "2026-11-20"
tags: ["alapok"]
---

# Elágazások

A való életben is folyamatosan döntéseket hozunk: *ha* esik az eső, viszünk esernyőt, *különben ha* süt a nap, napszemüveget veszünk fel, *minden más esetben* pedig csak reménykedünk a legjobbakban. 

A Pythonban ugyanezt a logikát használjuk az **elágazások** segítségével. Nélkülük a programunk vakon menne előre, elágazásokkal viszont képes reagálni a felhasználó adataira.

---

## Felhasznált programozási fogalmak

1. **`if` (Ha...)**  
   A döntési lánc legelső lépése. Megvizsgál egy feltételt: ha az **igaz (`True`)**, a mögötte lévő beljebb húzott kód lefut, és a Python már lép is tovább a lánc végére.

2. **`elif` (Különben ha...)**  
   Rövidítés a *else if*-ből. Akkor kerül sorra, ha a felette lévő `if` (vagy előző `elif`) feltétele hamisnak bizonyult. Akár hány `elif` ágat egymás után köthetsz!

3. **`else` (Minden más esetben)**  
   Amolyan biztonsági háló a sor végén. Nincs saját feltétele; ha felette egyetlen `if` vagy `elif` sem teljesült, akkor automatikusan ez az ág fog lefutni.

4. **Összehasonlító operátorok**  
   - `==` – pontosan egyenlő *(Figyelem! Egy `=` értékadásra való, kettő `==` a vizsgálatra!)*
   - `!=` – nem egyenlő
   - `>`, `<`, `>=`, `<=` – nagyobb, kisebb, nagyobb-egyenlő, kisebb-egyenlő

5. **A behúzás (Indentation) szent szabálya**  
   A Python nem használ kapcsos zárójeleket a blokkok jelölésére. A Tab (vagy 4 szóköz) jelzi, hogy melyik kód tartozik az `if` alá. Ha lehagyod, a Python azonnal visítani fog (`IndentationError` formájában).

---

## Kidolgozott példa

Vizsgáljuk meg egy bekért pontszám alapján, hogy valaki átment-e a vizsgán:

```python
pontszam = int(input("Hány pontot értél el (0-100)? "))

if pontszam >= 80:
    print("Gratulálunk, kiváló eredmény!")
elif pontszam >= 40:
    print("Sikeres vizsga, átmentél!")
else:
    print("Sajnos ez most nem sikerült, próbáld újra!")
```

**Kimeneti eredmény (pl. 55 pont megadásakor):**  
`Hány pontot értél el (0-100)? 55`  
`Sikeres vizsga, átmentél!`

---

## Gyakorló feladatok

### Feladat 1 – Páros vagy páratlan?

Kérj be egy egész számot a felhasználótól. Használd a `% 2 == 0` maradékos osztási feltételt, és döntsd el, hogy a szám páros-e!

```python
szam = int(input("Adj meg egy egész számot: "))

# Itt írd meg az if-else elágazást:

```

**Várt eredmény (pl. 7 megadásakor):**  
`A szám páratlan.`

---

### Feladat 2 – Mozijegy árazás

Kérd be a látogató életkorát. 6 év alatt a belépés ingyenes (0 Ft), 65 év felett nyugdíjas jegy jár (1500 Ft), mindenki másnak teljes árú jegyet kell fizetnie (2500 Ft).

```python
eletkor = int(input("Hány éves vagy? "))

# Itt írd meg az if-elif-else szerkezetet:

```

**Várt eredmény (pl. 70 megadásakor):**  
`A jegy ára: 1500 Ft`

---

### Feladat 3 – Pozitív, negatív vagy nulla?

Kérj be egy számot, és döntsd el róla, hogy pozitív, negatív vagy pontosan nulla-e!

```python
szam = float(input("Adj meg egy számot: "))

# Itt folytasd a kódot:

```

**Várt eredmény (pl. -4.5 megadásakor):**  
`A megadott szám negatív.`