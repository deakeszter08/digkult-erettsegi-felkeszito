---
title: "Csomagküldés díjszámítás"
topic: "Elágazások"
difficulty: "alapozó"
order: 2
---

Egy futárszolgálat a csomag súlya alapján számolja a szállítási díjat:
- **0–5 kg között:** 1000 Ft
- **5–20 kg között:** 2500 Ft
- **20 kg felett:** 4000 Ft
- Ha a csomag **„törékeny”**, akkor **+10% pótdíjat** számolnak fel.


1. Kérd be a csomag **súlyát** (kg-ban) - ez lehet nem egész szám is!
2. Kérd be, hogy a csomag **törékeny-e** (`igen` / `nem`)!
3. Számold ki és írd ki a fizetendő szállítási díjat! Egész számra kerekítsd! ```round()```

Példa kimenet:

```text
Add meg a csomag súlyát (kg): 8.5
Törékeny a csomag? (igen/nem): igen
A szállítási díj: 2750 Ft
```

<details>
<summary>Megoldás megmutatása</summary>

```python
suly = float(input("Add meg a csomag súlyát (kg): "))
torekeny = input("Törékeny a csomag? (igen/nem): ")

if suly <= 5:
    dij = 1000
elif suly <= 20:
    dij = 2500
else:
    dij = 4000

if torekeny == "igen":
    dij = dij * 1.10

print(f"A szállítási díj: {round(dij)} Ft")
```