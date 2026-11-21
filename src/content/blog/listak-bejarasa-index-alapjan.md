---
title: "Listák bejárása index alapján"
description: "Python alapok: Mikor és hogyan járunk be egy listát indexekkel — range(len(lista)) és enumerate() érthetően"
pubDate: "2026-11-21"
tags: ["alapok", "listák", "ciklusok"]
---

# Listák bejárása

Amikor egy listát a sima `for elem in lista:` ciklussal járunk be, minden lépésben csak az adott **értéket** kapjuk meg — azt viszont nem tudjuk meg belőle, hogy **hanyadik helyen** áll a listában.

Ha az érték mellett a **pozícióra (sorszámra)** is szükségünk van, **index alapján** járjuk be a listát. Pythonban erre két fő eszközünk van: a `range(len(lista))` és az `enumerate()`.

---

## 1. Hogyan működik az indexelés? (Gyors emlékeztető)

Pythonban a listák elemeit mindig **`0`-tól** számozzuk:
* Az első elem indexe: `0`
* A második elem indexe: `1`
* Az utolsó elem indexe: `len(lista) - 1`

Ha az `i` változó az aktuális indexet tárolja, akkor:
* **`i`** maga a pozíció (`0, 1, 2, ...`),
* **`lista[i]`** az azon a helyen lévő érték,
* **`i + 1`** a hétköznapi, `1`-től induló sorszám.

---

## 2. Bejárás `range(len(lista))` segítségével

Ez a legklasszikusabb megoldás: a `len(lista)` megadja a lista elemszámát, a `range()` pedig legenerálja az összes érvényes indexet `0`-tól `len(lista) - 1`-ig.

```python
versenyzok = ["Anna", "Bence", "Csilla", "Dávid"]

for i in range(len(versenyzok)):
    print(f"{i + 1}. helyezett: {versenyzok[i]}")

```

**Kimenet:**

```text
1. helyezett: Anna
2. helyezett: Bence
3. helyezett: Csilla
4. helyezett: Dávid

```

### Mikor különösen hasznos a `range(len(lista))`?

1. **Ha szomszédos elemeket hasonlítasz össze:**
Például megnézed, nőtt-e a hőmérséklet az előző naphoz képest (`homersekletek[i]` és `homersekletek[i - 1]`):
```python
homersekletek = [18, 21, 19, 24]

for i in range(1, len(homersekletek)):
    if homersekletek[i] > homersekletek[i - 1]:
        print(f"A(z) {i + 1}. napon melegebb volt, mint előző nap.")

```

2. **Ha két összetartozó listát kezelsz egyszerre:**
Például az `i`-edik névhez az `i`-edik pontszám tartozik:
```python
nevek = ["Anna", "Bence", "Csilla"]
pontok = [54, 31, 48]

for i in range(len(nevek)):
    print(f"{nevek[i]}: {pontok[i]} pont")

```






---
---

### A rövidebb, elegánsabb forma: `enumerate()`

Ha egyszerre van szükséged az **indexre** és az **értékre**, Pythonban nem kötelező mindig a `range(len(...))` szerkezetet írni. Az `enumerate()` függvény minden lépésben **párban adja vissza az indexet és az elemet**:

```python
versenyzok = ["Anna", "Bence", "Csilla", "Dávid"]

for i, nev in enumerate(versenyzok):
    print(f"{i + 1}. helyezett: {nev}")

```

Ha szeretnéd, hogy a számlálás alapból `1`-től induljon, megadhatod a `start=1` paramétert is:

```python
for helyezes, nev in enumerate(versenyzok, start=1):
    print(f"{helyezes}. helyezett: {nev}")

```

**Kimenet:**

```text
1. helyezett: Anna
2. helyezett: Bence
3. helyezett: Csilla
4. helyezett: Dávid

```

---

## Melyiket mikor válaszd? (Összefoglaló)

| Helyzet | Ajánlott megoldás | Példa |
| --- | --- | --- |
| Csak az érték kell, a sorszám nem | `for elem in lista:` | `for x in szamok:` |
| Az index **és** az érték is kell (olvashatóbb forma) | `for i, elem in enumerate(lista):` | `for i, nev in enumerate(nevek):` |
| Szomszédos elemek vizsgálata | `for i in range(len(lista)):` | `szamok[i] *= 2` |

---

## Gyakori hiba: túlindexelés (`IndexError`)

Ha szomszédos elemeket hasonlítasz össze `lista[i + 1]` alakban, mindig csak `len(lista) - 1`-ig menj (`range(len(lista) - 1)`), különben amikor a ciklus eléri az utolsó indexet — tehát az utolsó elemet —, megpróbálja összehasonlítani az utolsó utánival, ami már nem létezik, és `IndexError: list index out of range` hibát kapsz.


