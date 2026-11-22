---
title: "Futás edzésnapló"
topic: "For ciklus"
difficulty: "alapozó"
order: 3
---

Egy futó egy héten (7 napon) keresztül feljegyzi, hány kilométert futott az egyes napokon. Készíts programot, amely feldolgozza a heti edzésadatait!



1. Kérd be mind a **7 nap** futott kilométerét (figyelj arra, hogy nem csak egész km-eket futhatott!)
2. Írd ki, **összesen hány kilométert** futott a héten!
3. Számold meg, **hány olyan nap volt**, amikor **legalább 5 km-t** futott!
4. Írd ki a **napi átlagos** távot két tizedesjegyre kerekítve!

Példa kimenet:

```text
1. nap távja (km): 4.5
2. nap távja (km): 6.0
3. nap távja (km): 0
4. nap távja (km): 8.2
5. nap távja (km): 5.0
6. nap távja (km): 10.5
7. nap távja (km): 3.0

Összesen futott táv: 37.20 km
Legalább 5 km-es napok száma: 4
Napi átlag: 5.30 km
```

<details>
<summary>Megoldás megmutatása</summary>

```python
osszes_km = 0.0
legalabb_ot = 0

for nap in range(1, 8):
    tav = float(input(f"{nap}. nap távja (km): "))
    osszes_km += tav
    if tav >= 5:
        legalabb_ot += 1

atlag = osszes_km / 7

print(f"\nÖsszesen futott táv: {osszes_km} km")
print(f"Legalább 5 km-es napok száma: {legalabb_ot}")
print(f"Napi átlag: {round(atlag, 2)} km")
```