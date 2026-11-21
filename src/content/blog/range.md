---
title: "A range() függvény működése Pythonban"
description: "Python alapok: A range() függvény használata ciklusokkal"
pubDate: "2026-11-21"
tags: ["alapok", "ciklusok", "range"]
---

# A `range()` függvény

A `range()` függvény célja, hogy **egész számokból álló sorozatot** állítson elő, amelyen leggyakrabban `for` ciklussal haladunk végig.  
Ez a programozásban alapvető eszköz, például amikor egy műveletet pontosan $N$-szer szeretnénk megismételni, sorszámokat írunk ki, vagy egy lista indexein megyünk végig.

---

## Mire használjuk a `range()` függvényt?

1. **Ismétlések számának meghatározására**  
Ha pontosan tudjuk, hányszor kell lefutnia egy ciklusnak (például 5-ször bekérünk egy adatot a felhasználótól), a `range(5)` segítségével könnyen vezérelhetjük a ciklust.

2. **Számsorozatok előállítására**  
Nemcsak `0`-tól induló sorozatokat készíthetünk: megadhatunk kezdőértéket, végértéket, sőt lépésközt is (például csak páros számokat vagy visszafelé számlálást).

3. **Lista indexeinek bejárására**  
A `range(len(lista))` segítségével elérjük a lista elemeinek sorszámát (indexét) is, ami akkor hasznos, ha nemcsak az értékre, hanem annak pozíciójára is szükségünk van.
> Ha nem tudod hogy mire jó a listákat így bejárni, akkor Olvasd el a [Listák bejárása index alapján](/blog/listak-bejarasa-index-alapjan/) cikket!

---

## A `range()` három használati módja

A `range()` függvénynek **1, 2 vagy 3 egész szám (`int`) paramétert** adhatunk meg.  
A legfontosabb szabály minden formánál: **a felső határ (stop) már nincs benne a sorozatban** (balról zárt, jobbról nyitott intervallum).

### 1. Egy paraméterrel: `range(stop)`

`0`-tól indul, egyesével lépked, és `stop - 1`-ig tart. Összesen `stop` darab számot állít elő.

```python
for i in range(5):
    print(i)

```

**Kimenet:**

```text
0
1
2
3
4

```

### 2. Két paraméterrel: `range(start, stop)`

A megadott `start` értéktől indul, egyesével lépked, és `stop - 1`-ig tart.

```python
for i in range(1, 6):
    print(i)

```

**Kimenet:**

```text
1
2
3
4
5

```

### 3. Három paraméterrel: `range(start, stop, step)`

A `start` értéktől indul, `stop` előtt megáll, és minden lépésben `step` értékkel változik.

```python
# Páros számok 0-tól 10-ig (a 10 is benne van, mert a stop 11)
for i in range(0, 11, 2):
    print(i)

```

**Kimenet:**

```text
0
2
4
6
8
10

```

**Visszafelé számlálás negatív lépésközzel:**

```python
for i in range(5, 0, -1):
    print(i)

```

**Kimenet:**

```text
5
4
3
2
1

```

---

## Gyakori hibák, amikre érdemes figyelni

* **A felső határ lehagyása:** Ha `1`-től `10`-ig szeretnél számolni, a `range(1, 10)` csak `9`-ig megy el — a helyes megoldás a `range(1, 11)`.
* **Törtszámok használata:** A `range()` kizárólag egész számokat (`int`) fogad el. Ha `range(1.5, 5.5)` formát írsz, Python `TypeError` hibát dob.
* **Közvetlen kiírás listává alakítás nélkül:** A `print(range(5))` önmagában csak annyit ír ki, hogy `range(0, 5)`. Ha egyben szeretnéd látni az elemeket, alakítsd listává: `print(list(range(5)))` → `[0, 1, 2, 3, 4]`.



