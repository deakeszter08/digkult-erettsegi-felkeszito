
---
title: "Összegzés algoritmus "
description: "Alapalgoritmusok: Összegzés algoritmus"
pubDate: "2026-11-20"
tags: ["alapalgoritmusok"]
---

# Összegzés

A célunk az, hogy egy adott lista elemeit végigjárva meghatározzuk azok összegét.  
Ezt egy `for` ciklus segítségével valósíthatjuk meg.

---

## Felhasznált programozási fogalmak

1. **Lista**  
A `tomegek` változó egy listaként tárol több számot, amelyek egyes tárgyak tömegét jelképezik.  
A lista elemei egyenként feldolgozhatók egy for ciklussal.

2. **For ciklus használata**  
A `for tomeg in tomegek:` szerkezet végigmegy a lista minden elemén.  
Az aktuális elemet (`tomeg`) hozzáadjuk az `ossztomeg` változóhoz.

3. **Változókezelés és módosítás**  
Az `ossztomeg` változó kezdetben 0 értéket kap.  
A ciklus minden lépésében az aktuális tömeget hozzáadjuk ehhez a változóhoz.

4. **Formázott kiírás (f-string)**  
```python
f"A tárgyak tömegének összege: {ossztomeg}kg"
````

Egy formázott sztringet használunk a kiíráshoz.

---

## Nézzük is meg, hogyan néz ki a kódunk:

```python
tomegek = [16, 8, 9, 4, 3, 2, 4, 7, 7, 12, 3, 5, 4, 3, 2] 
ossztomeg = 0

for tomeg in tomegek:
    ossztomeg += tomeg

print(f"A tárgyak tömegének összege: {ossztomeg} kg")
```

**Bemeneti adatok:**
`tomegek = [16, 8, 9, 4, 3, 2, 4, 7, 7, 12, 3, 5, 4, 3, 2]`

**Kimeneti eredmény:**
`A tárgyak tömegének összege: 89 kg`

---

## Gyakorló feladatok



### **Feladat 1 – Lista összege**

Adott egy lista, számold ki a lista összes elemének összegét, és írd ki!

```python
# Lista adatok
szamok = [4, 7, 1, 9, 3, 6]

# Kezdőérték
osszeg = 0

# Ide írd a ciklust
#
#

print("A lista összege:", osszeg)
```

**Várt eredmény:**
`A lista összege: 30`

---

### **Feladat 2 – Csak pozitív számok összege**

Adott egy lista, amely tartalmazhat negatív számokat is. Számold ki és írd ki a **pozitív számok összegét**!

```python
# Lista adatok
adatok = [-5, 3, 7, -2, 4, -1]

# Kezdőérték
pozitiv_osszeg = 0

# Itt folytasd:

```

**Várt eredmény:**
`A pozitív számok összege: 14`

---

### **Feladat 3 – Csak páros számok összege**

Adott egy lista számokkal. Számold ki és írd ki a **páros számok összegét**!

```python
# Lista adatok
szamok = [2, 5, 8, 7, 10, 3]

# Itt folytasd:





```

**Várt eredmény:**
`A páros számok összege: 20`




