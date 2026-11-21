---
title: "Listák Pythonban"
description: "Python alapok: listák létrehozása, indexelés, és egyéb listaműveletek: append, remove, sorted, len, min, max."
pubDate: "2026-11-20"
tags: ["alapok", "listák"]
---

# Listák 

A lista (`list`) egy olyan adatszerkezet, amelyben több értéket tudunk tárolni egyetlen változóban, meghatározott sorrendben.  
Az érettségi feladatokban szinte minden beolvasott adatot listákban dolgozunk fel.

---

## Mi mindent tudunk csinálni a listákkal?

1. **Lista létrehozása és kiírása (a nulladik lépés)**  
   A listát szögletes zárójellel `[]` hívjuk életre, ha pedig kíváncsiak vagyunk, mi van benne, a jó öreg `print(lista)` az egészet szépen kiteregeti elénk.

2. **Indexelés – avagy hogyan vadásszunk le egy konkrét elemet**  
   A Python 0-tól számol (igen, ezt szokni kell), szóval:
   - `szamok[0]` → a legelső elem
   - `szamok[-1]` → a legutolsó elem (nem kell számolgatni hol a vége)

3. **Lista bővítése – `.append()`**  
   Ha bővíteni szeretnénk, akkor az `.append(érték)` egyszerűen a lista végére biggyeszti az új elemet.

4. **Felesleg kidobása – `.remove()`**  
   A `.remove(érték)`  kiveszi a megadott elem **első előfordulását** a listából – ha többször is szerepel, a többi marad.

5. **Gyors statisztika – `len()`, `min()`, `max()`**  
   Nem kell kézzel végigbogarászni a listát:
   - `len(lista)` → megmondja, hány elemünk van összesen.
   - `min(lista)` → kikeresi a legkisebb elemet.
   - `max(lista)` → megmutatja a legnagyobb elemet.

6. **Rendezés – `sorted()`**  
   Ha káosz van a listában:
   - `sorted(lista)` → új, növekvő sorrendbe állított listát ad vissza.
   - `sorted(lista, reverse=True)` → ugyanez, csak visszafelé (csökkenőben).

---

## Kidolgozott példa

Hozzunk létre egy listát, adjunk hozzá új elemet, töröljünk belőle, majd nézzük meg a statisztikáit:

```python
szamok = [18, 5, 42, 12, 5]

# Elem hozzáadása a végére
szamok.append(99)

# Az 5-ös szám első előfordulásának törlése
szamok.remove(5)

print("Frissített lista:", szamok)
print("Első elem:", szamok[0])
print("Utolsó elem:", szamok[-1])
print("Elemszám:", len(szamok))
print("Legkisebb:", min(szamok))
print("Legnagyobb:", max(szamok))
print("Rendezett lista (növekvő):", sorted(szamok))
```

**Kimeneti eredmény:**  
`Frissített lista: [18, 42, 12, 5, 99]`  
`Első elem: 18`  
`Utolsó elem: 99`  
`Elemszám: 5`  
`Legkisebb: 5`  
`Legnagyobb: 99`  
`Rendezett lista (növekvő): [5, 12, 18, 42, 99]`

---

## Gyakorló feladatok

### Feladat 1 – Új elem hozzáfűzése és elemszám

Adott egy gyümölcsöket tartalmazó lista. Fűzd hozzá a `"szilva"` szót, majd írd ki az új lista elemeit, valamint az elemszámát!

```python
gyumolcsok = ["alma", "banán", "cseresznye"]

# Fűzd hozzá a szilvát:


# Írd ki a lista elemeit és az elemszámot:

```

**Várt eredmény:**  
`Gyümölcsök: ['alma', 'banán', 'cseresznye', 'szilva']`  
`Elemszám: 4`

---

### Feladat 2 – Legkisebb és legnagyobb pontszám

Adott egy dolgozat-pontszámokat tartalmazó lista. Írd ki a legkisebb és a legnagyobb pontszámot, majd töröld a legkisebbet a `.remove()` segítségével!

```python
pontok = [78, 45, 92, 31, 88]

# Írd ki a min és max értéket:


# Töröld a legkisebb elemet:


print("Pontok a legkisebb nélkül:", pontok)
```

**Várt eredmény:**  
`Legkisebb: 31, Legnagyobb: 92`  
`Pontok a legkisebb nélkül: [78, 45, 92, 88]`

---

### Feladat 3 – Számok rendezése csökkenő sorrendbe

Adott egy számlista. Rendezd őket csökkenő sorrendbe!

```python
adatok = [14, 3, 89, 25, 6]

# Rendezd csökkenő sorrendbe a listát:
rendezett = 

print("Csökkenő sorrend:", rendezett)
```

**Várt eredmény:**  
`Csökkenő sorrend: [89, 25, 14, 6, 3]`