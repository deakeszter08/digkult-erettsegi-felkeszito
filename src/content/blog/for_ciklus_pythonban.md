---
title: "A for ciklus használata Pythonban – Részletes útmutató"
description: "Minden, amit a for ciklusról tudni kell: szintaxis, iterálható objektumok (lista, sztring, range, szótár), példák és a break/continue használata."
pubDate: "2026-11-20"
tags: ["ciklusok", "alapok"]
---


# A for ciklus magyarázata Pythonban

A `for` ciklus egy iteratív vezérlési szerkezet, amelyet arra használunk, hogy egy adott műveletet többször egymás után végrehajtsunk egy **iterálható objektum** (például lista, sztring, számtartomány vagy szótár) minden elemén. 


---

## Hogyan működik a for ciklus?

A Python `for` ciklusa sorban végighalad az objektum (ez legtöbbször egy lista) elemein, és az aktuális elemet mindig eltárolja egy általunk megadott változóban. A ciklus belsejében lefutnak a behúzott utasítások, majd a Python automatikusan átlép a következő elemre.

### Szintaxis
```python
for változó in iterálható_objektum:
    # Műveletek, amelyeket végre kell hajtani
```

### A ciklus elemei:
1. **`for`**: Maga a ciklus megnyitása.
2. **`változó`**: Ez tárolja az aktuális elem értékét az adott körben (iterációban).
3. **`in`**: Jelzi, hogy melyik objektum elemein haladunk végig.
4. **`iterálható_objektum`**: Az az adatszerkezet (pl. lista vagy sztring), amelynek elemeit feldolgozzuk.

---

## Egyszerű példa: Lista bejárása

```python
nevek = ["Anna", "Béla", "Cili"]

for nev in nevek:
    print(f"Üdvözöllek, {nev}!")
```

**Mi történik a háttérben?**
1. A Python a lista első elemét (`"Anna"`) áthelyezi a `nev` változóba, majd kiírja: `Üdvözöllek, Anna!`.
2. A következő körben a `nev` felveszi a `"Béla"` értéket, lefut a `print`.
3. Végül a `nev` felveszi a `"Cili"` értéket is.
4. Mivel nincs több elem a listában, a ciklus automatikusan leáll.

**Kimenet:**
```text
Üdvözöllek, Anna!
Üdvözöllek, Béla!
Üdvözöllek, Cili!
```

---

## Milyen objektumokon használhatjuk a for ciklust?

### 1. Lista
Iterálhatunk tetszőleges elemeket tartalmazó listán:
```python
szamok = [1, 2, 3, 4, 5]
for szam in szamok:
    print(szam)
```

### 2. Sztring (szöveg)
A szövegeken betűnként (karakterenként) haladhatunk végig:
```python
szoveg = "Python"
for karakter in szoveg:
    print(karakter)
```

### 3. A `range()` függvény
> Részletesebben érdekel mikor használjuk a range()-t? Olvasd el a [range() függvény működése](../range) cikket!

A `range()` számsorozatokat generál, ami kiváló, ha valamit N-szer szeretnénk lefuttatni:
```python
for szam in range(1, 6):  # 1-től 5-ig iterál (a 6 már nincs benne!)
    print(szam)
```

### 4. Szótár* (ezt haladók figyelmébe ajánlom!)
Szótárak esetén alapértelmezésben a kulcsokon halad végig a ciklus, ahhoz hogy az értékeket is elérjuk az items()-et kelll használnunk:
```python
adatok = {"név": "Anna", "kor": 25}
for kulcs, ertek in adatok.items():
    print(kulcs, ":", ertek)
```

---

## Miért hasznos a for ciklus?

1. **Tiszta és egyszerű szintaxis:** Nincs szükség manuális számlálókra vagy indexkezelésre.
2. **Sokoldalú:** Szinte minden összetett adatszerkezeten (listákon, sztringeken, szótárakon) ugyanazzal a logikával működik.
3. **Automatizálja az ismétlést:** Néhány sor kóddal akár több ezer adatot is feldolgozhatunk egy szempillantás alatt.

---

## Gyakorlati példák

### 1. Páros számok szűrése listából
```python
szamok = [1, 2, 3, 4, 5, 6]

for szam in szamok:
    if szam % 2 == 0:
        print(f"Páros szám: {szam}")
```

### 2. Új lista készítése (elemek négyzete)
```python
szamok = [1, 2, 3, 4]
negyzetszamok = []

for szam in szamok:
    negyzetszamok.append(szam ** 2)

print(negyzetszamok)  # Eredmény: [1, 4, 9, 16]
```

### 3. Többdimenziós lista (mátrix) bejárása*
Egymásba ágyazott `for` ciklusokkal a többdimenziós listákat is könnyen feldolgozhatjuk:
```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for sor in matrix:
    for elem in sor:
        print(elem, end=" ")
    print()  # Új sor kezdése minden sor után
```
# *: haladóknak ajánlott rész

---

## Ciklusvezérlés: `break` és `continue`

A `for` ciklus futását menet közben is befolyásolhatjuk:

- **`break`**: Azonnal megszakítja a ciklust, és kilép belőle.
- **`continue`**: Átugorja az aktuális kör hátralévő részét, és lép a következő elemre.

```python
for szam in range(1, 10):
    if szam == 5:
        break  # Amikor a szám eléri az 5-öt, a ciklus azonnal leáll
    print(szam)
```

---

## Gyakorló feladatok

### Feladat 1 – Számok összeadása
Menj végig egy számlistán `for` ciklussal, és számold ki az elemek összegét egy `osszeg` változóban!

```python
szamok = [10, 20, 30, 40]
osszeg = 0

# Itt írd meg a for ciklust:

print(f"Összeg: {osszeg}")
```

**Várt eredmény:** `Összeg: 100`

### Feladat 2 – Magánhangzók számlálása
Számold meg, hány 'a' betű található egy megadott szövegben!

```python
szoveg = "almafröccs"
darab = 0

# Itt folytasd a kódot:

print(f"Az 'a' betűk száma: {darab}")
```

**Várt eredmény:** `Az 'a' betűk száma: 2`