---
title: "Adatbekérés Pythonban (input)"
description: "Python alapok: hogyan kérjünk be szöveget és számokat a felhasználótól az input() segítségével."
pubDate: "2026-11-20"
tags: ["alapok"]
---

# Az input() függvény működése

Az `input()` függvény segítségével adatot tudunk bekérni a felhasználótól.

Amikor a program az `input()` sorhoz ér, leáll, és megvárja, amíg a felhasználó beírja az adatot és lenyomja az **Enter** billentyűt.

---

## Felhasznált programozási fogalmak

1. **Szöveg bekérése – `input()`**  
   A zárójelbe írt szöveg megjelenik a képernyőn (ez az ún. prompt), a felhasználó válasza pedig elmentődik a változóba.  
   Példa: `nev = input("Hogy hívnak? ")`

2. **A legfontosabb szabály: az `input()` mindig szöveget ad vissza!**  
   Bármit is ír be a felhasználó (még ha egy számot is), a Python azt **szövegként (`str`)** kezeli.

3. **Szám bekérése (Típusátalakítás)**  
   Ha a bekért adattal számolni szeretnénk, át kell alakítanunk:
   - Egész számmá: `kor = int(input("Hány éves vagy? "))`
   - Törtszámmá: `magassag = float(input("Hány méter magas vagy? "))`

---

## Kidolgozott példa

Kérjük be a felhasználó nevét és születési évét, majd számoljuk ki a korát:

```python
nev = input("Adj meg egy nevet: ")
szuletesi_ev = int(input("Melyik évben születtél? "))

kor = 2030 - szuletesi_ev

print("Szia", nev)
print("2030-ban ennyi éves leszel:", kor)
```

**Kimeneti eredmény (pl. Péter és 2007 megadásakor):**  
`Adj meg egy nevet: Péter`  
`Melyik évben születtél? 2007`  
`Szia Péter`  
`2030-ban ennyi éves leszel: 23`

---

## Gyakorló feladatok

### Feladat 1 – Kedvenc tantárgy

Kérd be a felhasználó kedvenc tantárgyát egy változóba, majd írd ki a képernyőre a minta szerint!

```python
# Kérd be a tantárgyat:


# Írd ki az eredményt:

```

**Várt eredmény (pl. Informatika megadásakor):**  
`A kedvenc tantárgyad: Informatika`

---

### Feladat 2 – Szám megduplázása

Kérj be egy egész számot a felhasználótól, szorozd meg 2-vel, és írd ki az eredményt! 

```python
# Kérd be a számot egész számként:


# Számold ki a dupláját és írd ki:

```

**Várt eredmény (pl. 15 megadásakor):**  
`A szám duplája: 30`

---

### Feladat 3 – Két szám összeadása

Kérj be két egész számot a felhasználótól külön-külön, adja össze őket a program, és írja ki az összeget!

```python
# Kérd be az első és a második számot:


# Számold ki és írd ki az összeget:

```

**Várt eredmény (pl. 8 és 12 megadásakor):**  
`A két szám összege: 20`