---
title: "Vidámpark belépődíj kalkulátor"
topic: "Elágazások"
difficulty: "alapozó"
order: 3
---

Egy vidámpark teljes árú belépődíja **4000 Ft**. A kedvezmények és felárak az alábbiak:
- **6 év alatt:** ingyenes belépés
- **Diák vagy nyugdíjas:** 50% kedvezmény
- **Hétvégi látogatás esetén:** +20% hétvégi felár kerül felszámolásra.


1. Kérd be a látogató **életkorát**!
2. Kérd be, hogy **diák vagy nyugdíjas-e** (`igen` / `nem`)!
3. Kérd be, hogy **hétvége van-e** (`igen` / `nem`)!
4. Számold ki és írd ki a belépő árát!

 Példa kimenet:

```text
Add meg az életkorod: 17
Diák vagy nyugdíjas vagy? (igen/nem): igen
Hétvége van? (igen/nem): igen
A belépőjegy ára: 2400 Ft
```

<details>
<summary>Megoldás megmutatása</summary>

```python
alap_ar = 4000

kor = int(input("Add meg az életkorod: "))
kedvezmenyes = input("Diák vagy nyugdíjas vagy? (igen/nem): ")
hetvege = input("Hétvége van? (igen/nem): ")

if kor < 6:
    ar = 0
elif kedvezmenyes == "igen":
    ar = alap_ar * 0.5
else:
    ar = alap_ar

if hetvege == "igen" and ar > 0:
    ar = ar * 1.2

print(f"A belépőjegy ára: {round(ar)} Ft")
```