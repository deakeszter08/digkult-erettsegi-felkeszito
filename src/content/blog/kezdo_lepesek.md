---
title: "Python kezdő lépések"
description: "Egyszerű, érthető alapok a Pythonhoz digitális kultúra érettségire készülőknek."
pubDate: "2026-11-21"
tags: ["0. lépés"]
---

# Alapvető szabályok

Ha most kezdesz programozni, a **Python** az egyik legbarátságosabb nyelv, amivel elindulhatsz. Olvasható szintaktikájának köszönhetően könnyen tanulható, tökéletes első nyelvnek. Egyébként manapság a leggyakrabban használt nyelvek közé tartozik, szóval még hátrány sem ér a jövőre nézve sem, ha ezt tanulod.

Rögtön tisztázzunk pár alapvető dolgot: Maga a programozás nme egy ördögtől való dolog, csak egy gondolkodásmód, amit bárki el tud sajátítani. Lényegében "csak" szóról szóra le kell írni mit csináljon, és ő mindent úgy is csinál, ahogy Te leírod neki :)
A gép nem „érti” a szándékodat, csak a pontos utasításaidat követi. Ez eleinte furcsa és néha bosszantó, de egyben megnyugtató is:ha valami nem úgy működik, ahogy vártad, annak mindig van logikus oka a kódban (már csak ki kell bogarásznod).
 
---

## Mi az a Python, és hogyan működik?

A Python egy magas szintű, jól olvasható programozási nyelv. Utasításokat írunk le (például bekérün egy számot, megnézzük, nagyobb-e valaminél, vagy végigmegyünk egy listán), a Python-értelmező pedig ezeket értelmezi és végrehajtja.

### Lépésről lépésre, fentről lefelé

A programod alaphelyzetben **fentről lefelé, soronként** fut le. A gép nem „látja át” a teljes kódot egyszerre úgy, mint te: szépen sorban halad lefelé, és mindig csak az aktuális sort hajtja végre.

```python
nev = "Anna"
print("Szia,", nev)
print("Kezdjük el a gyakorlást!")

```

1. Az első sorban létrejön a `nev` változó az `"Anna"` szöveggel.
2. A második sorban kiírja: `Szia, Anna`.
3. A harmadik sorban kiírja: `Kezdjük el a gyakorlást!`.

Ha elrontasz valamit az 5. sorban, az 1–4. sor már lefutott, és az 5. sornál áll meg a program hibával. Ezért fontos mindig figyelni a sorrendre: egy változót csak azután tudsz használni, miután már létrehoztad.

---

## Mik azok az indentálások (behúzások)?

Az **indentálás** magyarul **behúzást** jelent (ez egy Tab vagy 4 szóköz). Míg más nyelvekben kapcsos zárójelekkel jelzik, mi tartozik egy elágazáshoz vagy ciklushoz, **Pythonban maga a behúzás dönti el, melyik sorok tartoznak egy blokkba**.

Ha egy sor be van húzva, az azt jelenti: *„ez a rész csak akkor fut le, ha a felette lévő feltétel igaz / a ciklus éppen dolgozik”*. Ha visszalépsz a bal szélére, ott véget ér az a blokk.

### Példa behúzásra

```python
pontszam = 85

if pontszam >= 60:
    print("Ez már átment!")
    print("Szép munka.")
print("Ez a sor már mindenképp kiíródik.")

```

Itt a két `print` sor be van húzva az `if` alá — ezek csak akkor futnak le, ha a `pontszam >= 60` igaz. A harmadik `print` nincs behúzva, így az `if`-től független, és mindig lefut.

> **Gyakori hiba:** Ha véletlenül rosszul húzol be egy sort (vagy kimarad a behúzás egy `if` / `for` után), a Python `IndentationError` hibát dob. Mindig egyenletesen (4 szóköz) húzz be!

---
### Formázott kiíratás

Az `f"..."` (formázott sztring) lehetővé teszi, hogy változókat és kifejezéseket közvetlenül kapcsos zárójelben (`{...}`) írj a szövegbe:
```python
ora = 9
perc = 5
print(f"Időpont: {ora}:{perc:02d}")  # Időpont: 9:05

```

> Ha nem tudod mit jelent a fenti :02d, akkor Olvasd el a [Kerekítés Pythonban](../kerekites/) cikket!
---

## Miért `szamlalo += 1`, és miért nem elég a `szamlalo + 1`?

Ezen szinte mindenki elakad az elején — és teljesen érthető, hogy miért. A gond ott van, hogy sokan azt hiszik: ha leírom, hogy `szamlalo + 1`, akkor a számláló magától eggyel nagyobb lesz.

Pedig nem! A `szamlalo + 1` csak **kiszámolja** az új értéket, de **nem menti el sehova**. Olyan, mintha a fejedben kiszámolnád, hogy `10 + 1 = 11`, de nem írnád fel sehova — a papíron továbbra is `10` marad.

### Nézzük meg különbséggel!

```python
szamlalo = 0

szamlalo + 1
print(szamlalo)  # Még mindig 0! Mert nem mentettük vissza a 'szamlalo' változóba.

szamlalo += 1
print(szamlalo)  # Már 1!

```

A `szamlalo += 1` egy rövidített írásmód. Pontosan ugyanezt jelenti, mint ez:

```python
szamlalo = szamlalo + 1

```

Olvasd ki így a fejedben: *„az új `szamlalo` legyen egyenlő a régi `szamlalo` értékével, megnövelve eggyel.”*

### Hol használjuk ezt a gyakorlatban?

Például számlálásnál: ha végigmész egy listán, és azt számolod, hány páros szám vagy hány `75` pont feletti eredmény van benne, minden egyes találatnál eggyel növeled a számlálót (`darab += 1`).

---

## Összegzés: mire figyelj az első kódjaidnál?

* A Python **fentről lefelé, soronként** halad.
* A **behúzás** jelzi, mi tartozik egy feltételhez vagy ciklushoz.
* A `szamlalo + 1` csak számol, a `szamlalo += 1` (vagy `szamlalo = szamlalo + 1`) **frissíti is a változó értékét**.



