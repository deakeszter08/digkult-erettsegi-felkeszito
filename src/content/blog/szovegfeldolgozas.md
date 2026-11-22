---
title: "Szövegfeldolgozás Pythonban"
description: "Érthető összefoglaló a digitális kultúra érettségihez szükséges Python szövegkezelésről: darabolás, típuskonverzió, összefűzés, formázás és 3 kidolgozott feladat."
pubDate: "2026-11-22"
tags: ["alapok", "szövegkezelés"]
---

# Hogyan működnek? split(), int(), str(), join() és az f-string

A digitális kultúra érettségin a fájlokból beolvasott adatok szinte mindig **szövegként (`str`)** érkeznek meg. Ha például egy sorban ott áll, hogy `"9 15 102 belépés"`, a Python még nem tudja magától, hogy a `9` az óra, a `15` a perc, a `102` pedig egy szám, amivel össze lehet adni vagy kivonni.

Ebben a cikkben végigvesszük a legfontosabb szövegfeldolgozó eszközöket, amikkel magabiztosan kezelheted az adatokat.

---

## A lényeg röviden: a szövegkezelés alapjai

### 1. `.split()` — Szöveg darabolása listává
A `.split()` egy szöveget **szétvág darabokra**, és az eredményt **listaként** adja vissza.
* Alaphelyzetben (`sor.split()`) a szóközök mentén darabol.
* Megadhatsz elválasztót is, például: `"2026-11-22".split("-")` → `["2026", "11", "22"]`, vagy `"3, 1, 2".split(", ")` → `["3", "1", "2"]`.

### 2. `int()` és `str()` — Típuskonverzió (szöveg ↔ szám)
* **`int("42")`:** Szövegből **egész számot** csinál (`42`). Szükséges, ha számolni akarsz vele. 
* **`str(42)`:** Számból **szöveget** csinál (`"42"`). Ez érettségin ritkán használatos (join()-hoz pl. jól jöhet)

### 3. `"elválasztó".join(lista)` — Lista összefűzése egyetlen szöveggé
A `.join()` pont az ellenkezője a `.split()`-nek: egy lista elemeit fűzi össze egyetlen `str`-ré a megadott elválasztóval.
* Fontos szabály: a listában **minden elemnek szövegnek (`str`) kell lennie**! Ha számok vannak benne, előbb `str()`-ré kell alakítani őket.
* Példa: `" ".join(["104", "218", "305"])` → `"104 218 305"`.

### 4. `f-string` — Tiszta, olvasható kiírás és formázás
Az `f"..."` (formázott sztring) lehetővé teszi, hogy változókat és kifejezéseket közvetlenül kapcsos zárójelben (`{...}`) írj a szövegbe:
```python
ora = 9
perc = 5
print(f"Időpont: {ora}:{perc:02d}")  # Időpont: 9:05

```

* A `:.1f` tizedesjegyek számát állítja be (`f"{atlag:.1f}"`).
* A `:02d` két számjegyűre egészíti ki vezető nullával (`5` → `"05"`).

### 5. Hasznos tippek

* **`.strip()`:** Levágja a szöveg elején és végén lévő felesleges szóközöket, sortöréseket (`\n`). Fájlbeolvasásnál aranyat ér.
* **`.replace(mit, mire)`:** Kicserél egy részszöveget (például `"12,5".replace(",", ".")` a tizedesvessző miatt).
* **`in` :** Megnézheted, benne van-e egy részlet egy szövegben (`"be" in sor`).

---

## 3 kidolgozott gyakorlófeladat

### 1. feladat: Adatsor feldolgozása (`split()` és `int()`)

Egy naplófájl egy sora így néz ki: `"14 32 512 ki"`. Darabold szét a sort, alakítsd át a megfelelő részeket egész számmá (`ora`, `perc`, `azon`), és írd ki őket egy f-string segítségével!

```python
sor = "14 32 512 ki"
reszek = sor.split()

ora = int(reszek[0])
perc = int(reszek[1])
azon = int(reszek[2])
esemeny = reszek[3]

print(f"Azonosító: {azon}, esemény: {esemeny}, időpont: {ora}:{perc:02d}")

```

**Magyarázat:** A `sor.split()` előállítja a `["14", "32", "512", "ki"]` listát. Az `ora`, `perc` és `azon` értékeket `int()`-tel számmá alakítjuk, hogy később lehessen velük számolni (pl. percre váltani vagy sorba rendezni), míg az `esemeny` maradhat szöveg (`"ki"`).

---

### 2. feladat: Azonosítók kiírása szóközzel elválasztva (`str()` és `join()`)

Adott egy lista a bent maradt azonosítókkal: `bent = [204, 102, 315]`. Írd ki őket **egyetlen sorban, szóközzel elválasztva**!

```python
bent = [204, 102, 315]

szoveges_azonositok = []
for azon in bent:
    szoveges_azonositok.append(str(azon))

kimenet = " ".join(szoveges_azonositok)
print("A bent maradt személyek:", kimenet)

```

**Magyarázat:** Mivel a `bent` lista egész számokat (`int`) tartalmaz, a `" ".join(...)` közvetlenül hibát dobna, ha nem alakítanánk át őket. Előbb `str(azon)` segítségével szöveggé alakítjuk az elemeket, majd a `" ".join(...)` egyetlen, szóközzel elválasztott szöveggé fűzi össze őket.

---

### 3. feladat: Tizedesvessző és százalék formázása (`replace()`, `int()` és `f-string`)

Egy diák szöveges formában kapta meg a pontszámát egy feladatra: `"17,5"` a maximális `"25"` pontból. Számold ki, hány százalékos ez, és írd ki **egy tizedesjegyre kerekítve**!

```python
elert_szoveg = "17,5"
max_szoveg = "25"

elert = float(elert_szoveg.replace(",", "."))
maximum = int(max_szoveg)

szazalek = (elert / maximum) * 100
print(f"Elért eredmény: {szazalek:.1f}%")

```

**Magyarázat:** A `"17,5"` szövegben vessző van, ezért előbb `.replace(",", ".")` segítségével pontra cseréljük, majd `float()`-tá alakítjuk (`17.5`). A `maximum` egész számként `25`. A kiszámolt százalékot az `f-string` `:.1f` formátumával szép, egy tizedesjegyes formában írjuk ki (`70.0%`).

---

## Gyors összefoglaló

* **`.split()`** → szövegből lista.
* **`int()` / `float()` / `str()`** → típusok közötti váltás (számoláshoz szám, összefűzéshez szöveg).
* **`" ".join(lista)`** → szöveglistából egyetlen szöveg.
* **`f"...{valtozo}..."`** → átlátható kiírás és formázás (`:.1f`, `:02d`).