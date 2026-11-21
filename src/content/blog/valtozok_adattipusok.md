---
title: "Változók és adattípusok Pythonban"
description: "Python alapok: változók létrehozása, szöveges, egész, lebegőpontos és logikai adattípusok használata."
pubDate: "2026-11-20"
tags: ["alapok"]
---

# Változók

A programozás során az adatok tárolására **változókat** használunk.  
A Python nyelv egyik nagy előnye, hogy nem kell előre megadnunk a változó típusát (nincs típusdeklaráció), a Python automatikusan felismeri azt az érték alapján (`név = érték`).

---



**Változó (Variable) fogalma:**  
   Egy névvel ellátott tárolóhely a memóriában. A változó neve nem kezdődhet számmal, nem tartalmazhat ékezeteket vagy szóközöket, és megkülönbözteti a kis- és nagybetűket (pl. `kor` és `Kor` két külön változó).

## Adattípusok:

1. **Szöveges típus – `str` (string)**  
   Idézőjelek (`"..."`) vagy aposztrófok (`'...'`) közé írt szöveg.  
   Példa: `nev = "Eszter"`

2. **Egész szám – `int` (integer)**  
   Pozitív vagy negatív egész számok, tizedespont nélkül.  
   Példa: `szam = 10`

3. **Lebegőpontos szám – `float`**  
   Tizedes törtek. Pythonban tizedesvessző helyett **tizedespontot** használunk!  
   Példa: `pi = 3.14`

4. **Logikai típus – `bool` (boolean)**  
   Két lehetséges értéke van: `True` (igaz) vagy `False` (hamis). Mindig nagy kezdőbetűvel írjuk!  
   Példa: `paros = True`

5. **Típus lekérdezése – `type()`**  
   A `type(változó)` függvény megadja, hogy az adott változó milyen adattípusú.

---

## Kidolgozott példa

Hozzunk létre különböző típusú változókat, és nézzük meg a típusaikat:

```python
nev = "Péter"
eletkor = 17
atlag = 4.75
diak = True

print("Név:", nev, "->", type(nev))
print("Életkor:", eletkor, "->", type(eletkor))
print("Átlag:", atlag, "->", type(atlag))
print("Diák-e:", diak, "->", type(diak))
```

**Kimeneti eredmény:**  
`Név: Péter -> <class 'str'>`  
`Életkor: 17 -> <class 'int'>`  
`Átlag: 4.75 -> <class 'float'>`  
`Diák-e: True -> <class 'bool'>`

---

## Gyakorló feladatok

### Feladat 1 – Változók felvétele

Hozz létre három változót: `gyumolcs` (szöveg), `darab` (egész szám) és `egysegar` (törtszám). Írd ki őket a képernyőre!

```python
# Hozz létre a változókat:


# Írd ki az értékeket:

```

**Várt eredmény (pl. alma, 5, 350.5 esetén):**  
`Gyümölcs: alma, Darab: 5, Egységár: 350.5`

---

### Feladat 2 – Típuskonverzió (Átalakítás)

Adott egy törtszám. Alakítsd át egész számmá az `int()` függvénnyel, és írd ki az eredményt! *(Megfigyelhető, hogy az int() levágja a tizedesjegyeket, nem kerekít!)*

```python
magassag_meter = 1.84

# Alakítsd át egész számmá:
magassag_egesz = 

print("Eredeti:", magassag_meter)
print("Egészre alakítva:", magassag_egesz)
```

**Várt eredmény:**  
`Eredeti: 1.84`  
`Egészre alakítva: 1`

---

### Feladat 3 – Logikai változó használata

Hozz létre egy `nyertes` nevű logikai változót `True` értékkel, majd írd ki a típusát a `type()` függvény segítségével!

```python
# Hozz létre a nyertes változót:


# Írd ki a típusát:

```

**Várt eredmény:**  
`<class 'bool'>`