---
title: "Számformázás és kerekítés Pythonban"
description: "Rövid, átlátható útmutató a Python számformázásához (f-string formázók: :.1f, :02d) és a round() függvényhez, 2 gyakorlófeladattal."
pubDate: "2026-11-22"
tags: ["alapok", "kerekítés"]
---

# Kerekítés Pythonban: :.1f, :02d és round()

Amikor számokkal dolgozol, gyakran nem elég, ha a gép kiszámolja az eredményt — az is fontos, **hogyan jelenik meg** a képernyőn vagy a fájlban. Másképp néz ki egy átlag (`14.666666666666666` vs. `14.7`), és másképp egy időpont (`9:5` vs. `9:05`) - FONTOS! felvezető nullák időpontoknál.

---

## A lényeg röviden

* **`:.1f` (f-stringen belül):** Tizedes törtet (`float`) formáz **pontosan 1 tizedesjegyre** (például `f"{atlag:.1f}"` → `14.7`). Ha `:.2f`-et írsz, 2 tizedesjegyre.
* **`:02d` (f-stringen belül):** Egész számot (`int`) egészít ki **legalább 2 számjegyűre**, elöl nullával kitöltve (például `f"{perc:02d}"` → `5`-ből `05` lesz, `12`-ből `12`).
* **`round(szam, tizedesek)`:** Egy **új, kerekített számértéket** ad vissza: `round(3.14159, 2)` → `3.14`).

> **Gyors különbség:** A `:.1f` és `:02d` a **megjelenítést** (kiírást) formázza f-stringben, a `round()` pedig **kerekített értéket** számol. (Tipp: a `round()`-nál figyelj arra, hogy lebegőpontos számoknál néha furcsa tizedesjegyek jelenhetnek meg, kiíráshoz ezért szebb az f-string.)

---

## Gyakorlófeladatok

### 1. feladat: Átlag kiírása egy tizedesjegyre
Egy diák dolgozatpontjai: `pontok = [18, 15, 19, 14]`. Számold ki az átlagot, és írd ki egy tizedesjegyre kerekítve!

<details>
<summary>Megoldás mutatása</summary>

```python
pontok = [18, 15, 19, 14]
atlag = sum(pontok) / len(pontok)

print(f"Átlagpontszám: {atlag:.1f}")

```

**Magyarázat:** A `sum(pontok) / len(pontok)` kiszámolja az átlagot (`16.5`), az `f-string` `:.1f` része pedig biztosítja, hogy egy tizedesjegyes formában jelenjen meg.

---

### 2. feladat: Időpont formázása kétjegyű perccel és kerekített időtartam

Egy esemény `8` óra `7` perckor kezdődött, és `45.678` percig tartott. Írd ki a kezdési időpontot `8:07` formában, és a kerekített időtartamot két tizedesjegyre!

```python
ora = 8
perc = 7
idotartam = 45.678

kerek_ido = round(idotartam, 2)
print(f"Kezdés: {ora}:{perc:02d}, időtartam: {kerek_ido} perc")

```

**Magyarázat:** A `:02d` a `7`-ből `07`-et csinál a kettőspont után, a `round(idotartam, 2)` pedig `45.68`-ra kerekíti az időtartamot.