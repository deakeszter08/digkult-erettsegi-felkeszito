---
title: "Matematikai műveletek Pythonban: /, //, %, százalékszámítás és mintafeladatok"
description: "Érettségire készülőknek szóló érthető összefoglaló a Python osztásairól (/, //, %), a százalékszámításról és a leggyakoribb matematikai mintafeladatokról, lenyitható mintamegoldásokkal."
pubDate: "2026-11-21"
tags: [ "matematika", "alapok"]
---

# Matek a Pythonban: 

A digitális kultúra érettségi programozási feladatainak nagy része valójában **egyszerű matematikára** épül: összeadunk, számolunk, osztunk, maradékot vizsgálunk, vagy százalékot számolunk. Ha ezeket a műveleteket átlátod Pythonban, rengeteg felesleges szenvedéstől kíméled meg magad.

---

## A lényeg röviden: osztások és százalékszámítás

### 1. A háromféle osztás Pythonban (`/`, `//`, `%`)

* **`/` (sima / valós osztás):** Mindig **lebegőpontos (`float`)** eredményt ad (tizedestörtet). Például `7 / 2` értéke `3.5`.
* **`//` (egész osztás / lefelé kerekítő osztás):** Megmondja, **hányszor fér meg** a nevező a számlálóban egészben. Például `7 // 2` értéke `3` (mert a `2` háromszor fér bele a `7`-be, és a tört részt eldobja).
* **`%` (maradékos osztás):** Az osztás **maradékát** adja meg. Például `7 % 2` értéke `1` (mert 7-ben a 2 megvan 3-szor, és maradék az 1).

> **Gyors kapaszkodó:** Ha egy `x` szám `k`-val osztható, akkor az osztás maradéka `0`, tehát Pythonban: `x % k == 0`. Például páros szám: `szam % 2 == 0`, 10-zel osztható szám: `szam % 10 == 0`.

### 2. Százalékszámítás Pythonban

* **Mennyi a `p` százaléka az `alap` értéknek?**
  `eredmeny = alap * (p / 100)` vagy `eredmeny = alap * p / 100`
  *(Például az `8000` Ft `15`%-a: `8000 * 0.15` vagy `8000 * 15 / 100` → `1200.0`.)*
* **Hány százaléka 18 a 40-nek?**
  `szazalek = (resz / egesz) * 100`

  *Példa: `(18 / 40) * 100` → `45.0`%.*
* **Növelés és csökkentés százalékkal:**
  * `p`%-os növelés: pl. 27% áfa rászámolása: `ar * 1.27`.
  * `p`%-os csökkentés: pl. 20% kedvezmény: `ar * 0.8`.

---

## Mintafeladatok (próbáld meg előbb magadtól, utána nyisd le a megoldást!)

### 1. feladat
Egy futóversenyen egy résztvevő ideje `145` percben van megadva. Írj kódot, amely kiszámolja, hány teljes órát és hány fennmaradó percet jelent ez!

<details>
<summary>Mintamegoldás és magyarázat</summary>

```python
percek_osszesen = 145

orak = percek_osszesen // 60      # 145 // 60 -> 2 teljes óra
maradek_percek = percek_osszesen % 60  # 145 % 60 -> 25 perc

print(f"{orak} óra {maradek_percek} perc")

```

**Miért így működik?** A `// 60` megadja, hány egész 60 perces egység van a `145`-ben (`2`), a `% 60` pedig azt, ami a teljes órák levonása után megmarad (`25`).

</details>

---

### 2. feladat

Adott a következő lista: `szamok = [12, 7, 20, 33, 4, 19, 8]`. Számold meg és írd ki, hány páros szám található benne!


<details>
<summary>Mintamegoldás és magyarázat</summary>


```python
szamok = [12, 7, 20, 33, 4, 19, 8]
paros_db = 0

for szam in szamok:
    if szam % 2 == 0:
        paros_db += 1

print("Páros számok darabszáma:", paros_db)

```

**Miért így működik?** Egy szám akkor páros, ha `2`-vel osztva a maradéka `0` (`szam % 2 == 0`). Minden ilyen találatnál a `paros_db` számlálót eggyel növeljük (`+= 1`).


</details>

---



### 3. feladat

Egy kabát eredeti ára `24000` Ft, és `15%` kedvezményt adnak rá. Számold ki a kedvezmény összegét és a fizetendő árat!

<details>
<summary>Mintamegoldás és magyarázat</summary>

```python
eredeti_ar = 24000
kedvezmeny_szazalek = 15

kedvezmeny_ft = eredeti_ar * kedvezmeny_szazalek / 100
fizetendo_ar = eredeti_ar - kedvezmeny_ft

print("Kedvezmény:", kedvezmeny_ft, "Ft")
print("Fizetendő ár:", fizetendo_ar, "Ft")

```

**Miért így működik?** Először kiszámoljuk az `15%`-os engedmény forintértékét (`24000 * 15 / 100 = 3600.0`), majd kivonjuk az eredeti árból (`20400.0`).

</details>

---

### 4. feladat

Egy feladatsorban `25` kérdés volt, amelyből egy tanuló `19`-re válaszolt helyesen. Írd ki, hány százalékos lett az eredménye!

<details>
<summary>Mintamegoldás és magyarázat</summary>

```python
osszes_feladat = 25
helyes_feladat = 19

szazalek = (helyes_feladat / osszes_feladat) * 100
print(f"Eredmény: {szazalek:.1f}%")

```

**Miért így működik?** A `helyes_feladat / osszes_feladat` megadja a hányadost (`0.76`), amit `100`-zal szorozva megkapjuk a százalékot (`76.0%`). 
A `:.1f` formázás egy tizedesjegyre kerekítve jeleníti meg az értéket.

</details>

---

### 5. feladat

Egy tanárnak `53` fénymásolt lapot kell szétosztania `4` fős csoportokba úgy, hogy minden csoport egyenlő számú lapot kapjon, a maradék pedig a tanárnál marad. Hány lapot kap egy csoport, és hány lap marad meg?


<details>
<summary>Mintamegoldás és magyarázat</summary>

```python
lapok = 53
csoportok = 4

lap_per_csoport = lapok // csoportok
maradek_lap = lapok % csoportok

print("Egy csoport kap:", lap_per_csoport, "lapot")
print("Megmaradt lapok:", maradek_lap)

```

**Miért így működik?** A `53 // 4` értéke `13` (ennyi jut egy csoportra), az `53 % 4` értéke pedig `1` (ennyi marad ki).

</details>

---

## Gyors ellenőrzőlista érettségi előtt

* Ha **tizedes törtre** van szükséged: `/`
* Ha **egész részeket / csoportokat / órákat** számolsz: `//`
* Ha **maradékot** vagy **oszthatóságot** (`== 0`) vizsgálsz: `%`
* Ha **százalékot** számolsz: előbb gondold végig, mi az egész (`100%`), és melyik a rész (`szazalek / 100`).

