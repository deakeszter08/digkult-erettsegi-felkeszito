---
title: "Sütiverseny – eredmények feldolgozása"
topic: "For ciklus"
difficulty: "alapozó"
order: 4
---

A városi sütiversenyen több résztvevő indult, és mindegyikük pontokat kapott a zsűritől. Készíts egy programot, ami feldolgozza a verseny eredményeit!


1. Kérdezd meg, **hány versenyző** vett részt a versenyen!
2. Olvasd be mindegyik versenyző **pontszámát** (0–100 közötti egész szám)!
3. Írd ki:
   - az **összes pontszámot**,
   - az **átlagpontszámot**,
   - a **legmagasabb** és a **legalacsonyabb** pontszámot.
4. Számold meg, hány versenyző kapott **átlag feletti** pontot!

Példa kimenet:

```text
Hány versenyző volt? 5
1. versenyző pontszáma: 60
2. versenyző pontszáma: 75
3. versenyző pontszáma: 80
4. versenyző pontszáma: 90
5. versenyző pontszáma: 50

Összes pont: 355
Átlagpontszám: 71.0
Legmagasabb pont: 90
Legalacsonyabb pont: 50
Átlag feletti versenyzők száma: 2
```



<details>
<summary>Megoldás megmutatása</summary>

```python
db = int(input("Hány versenyző volt? "))
pontok = []

for i in range(1, db + 1):
    pont = int(input(f"{i}. versenyző pontszáma: "))
    pontok.append(pont)

osszes = sum(pontok)
atlag = osszes / len(pontok)
legmagasabb = max(pontok)
legalacsonyabb = min(pontok)

atlag_feletti = 0
for pont in pontok:
    if pont > atlag:
        atlag_feletti += 1

print(f"\nÖsszes pont: {osszes}")
print(f"Átlagpontszám: {atlag}")
print(f"Legmagasabb pont: {legmagasabb}")
print(f"Legalacsonyabb pont: {legalacsonyabb}")
print(f"Átlag feletti versenyzők száma: {atlag_feletti}")
