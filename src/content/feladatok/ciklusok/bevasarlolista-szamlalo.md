---
title: "Bevásárlólista – megszámlálás"
topic: "For ciklus"
difficulty: "alapozó"
order: 1
---

A programban adott egy lista a tervezett vásárlás áraival (`arak = [450, 1200, 890, 3500, 600, 2400]`). 



1. Használd a megadott `arak` listát (nem kell bekérni a felhasználótól)!
2. Menj végig az elemeken `for` ciklussal, és **számold meg**, hány olyan tétel van, amelynek az ára **legalább 1000 Ft**!
3. Írd ki a végeredményt egy érthető mondatban!

Példa kimenet:

```text
1000 Ft-nál legalább drágább tételek száma: 3 db
```

<details>
<summary>Megoldás megmutatása</summary>

```pyhton
arak = [450, 1200, 890, 3500, 600, 2400]
dragabb_db = 0

for ar in arak:
    if ar >= 1000:
        dragabb_db += 1

print(f"1000 Ft-nál legalább drágább tételek száma: {dragabb_db} db")
```