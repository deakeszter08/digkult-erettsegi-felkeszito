---
title: "Random modul - Véletlenszerű értékek generálása"
description: "Random modul pythonban: hogyan generáljunk random számokat?"
pubDate: "2026-11-20"
tags: ["alapok", "random generálás"]
---

# 🎲 Random modul

A Python **random modulja** segítségével véletlenszerű számokat generálhatunk, illetve véletlenszerűen választhatunk ki elemeket listákból.

Hasznos lehet például:
- Sorsolások készítéséhez.
- Dobókocka szimulálásához.
- Véletlenszerű kérdések kiválasztásához.
- Egyszerű játékok készítéséhez.

## 1. A random modul importálása

Ahhoz, hogy használni tudjuk a random modul függvényeit, először importálnunk kell:

```python
import random
```

Az importálás után a modul függvényeit a `random.` előtaggal érjük el.

## 2. Véletlen egész szám generálása – randint()

A `randint()` függvény segítségével két megadott érték közötti véletlen egész számot generálhatunk.

**Szintaxis:**

```python
random.randint(also_hatar, felso_hatar)
```

**Példa:**

```python
import random

szam = random.randint(1, 10)

print(szam)
```

A program egy véletlen egész számot ír ki 1 és 10 között.

**Fontos!** Mindkét határérték beletartozik a tartományba, tehát akár az 1-es és a 10-es is lehet az eredmény.

### Példa: Dobókocka szimulálása

```python
import random

dobas = random.randint(1, 6)

print("A dobás eredménye:", dobas)
```

A program egy hagyományos hatoldalú dobókocka működését szimulálja.

## 3. Véletlen elem kiválasztása – choice()

A `choice()` függvény segítségével egy lista vagy más nem üres szekvencia véletlenszerű elemét választhatjuk ki.

**Szintaxis:**

```python
random.choice(lista)
```

**Példa:**

```python
import random

gyumolcsok = ["alma", "körte", "eper", "banán"]

valasztott = random.choice(gyumolcsok)

print(valasztott)
```

A program véletlenszerűen kiválaszt egy gyümölcsöt a listából.

Fontos, hogy a `choice()` függvény csak nem üres szekvencián használható.

### Példa: Véletlenszerű kérdés kiválasztása

```python
import random

kerdesek = [
    "Mi a Python?",
    "Mire használjuk az if utasítást?",
    "Mi az a lista?",
    "Mire való a for ciklus?"
]

kerdes = random.choice(kerdesek)

print("Mai kérdésed:")
print(kerdes)
```

A program minden futtatáskor véletlenszerű kérdést választ ki a listából.

## 4. Összefoglalás

| Függvény | Feladata | Példa |
|---|---|---|
| `randint(a, b)` | Véletlen egész szám | `random.randint(1, 10)` |
| `choice(lista)` | Véletlen listaelem | `random.choice(lista)` |

Ne feledd: a modul használata előtt mindig importálni kell!

```python
import random
```

---

# 📝 Gyakorlófeladatok

## 1. feladat – Dobókocka 🎲

Készíts programot, amely egy hatoldalú dobókocka dobását szimulálja!

A program:
- Generáljon egy véletlen egész számot 1 és 6 között.
- Írja ki a dobás eredményét!

<details>
<summary>Megoldás megmutatása</summary>

```python
import random

dobas = random.randint(1, 6)

print("A dobás eredménye:", dobas)
```

</details>

## 2. feladat – Véletlen gyümölcs 🍎

Hozz létre egy listát legalább 5 különböző gyümölccsel!

A program:
- Válasszon ki véletlenszerűen egy gyümölcsöt a listából.
- Írja ki a kiválasztott gyümölcs nevét!

<details>
<summary>Megoldás megmutatása</summary>

```python
import random

gyumolcsok = ["alma", "körte", "barack", "eper", "szilva"]

valasztott = random.choice(gyumolcsok)

print("A kiválasztott gyümölcs:", valasztott)
```

</details>

## 3. feladat – Számkitaláló játék 🎯

Készíts egyszerű számkitaláló játékot!

A program:
- Generáljon egy véletlen egész számot 1 és 10 között.
- Kérje meg a felhasználót, hogy tippelje meg a számot!
- Ha eltalálta, írja ki: „Gratulálok, eltaláltad!”
- Ha nem találta el, írja ki a helyes számot!

<details>
<summary>Megoldás megmutatása</summary>

```python
import random

titkos_szam = random.randint(1, 10)

tipp = int(input("Tippelj egy számot 1 és 10 között: "))

if tipp == titkos_szam:
    print("Gratulálok, eltaláltad!")
else:
    print("Sajnos nem találtad el!")
    print("A helyes szám:", titkos_szam)
```

</details>
