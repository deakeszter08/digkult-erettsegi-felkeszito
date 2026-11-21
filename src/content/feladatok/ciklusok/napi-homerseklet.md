---
title: "Napi hőmérséklet-elemző"
topic: "For ciklus"
difficulty: "középhaladó"
order: 5
---

Egy meteorológiai állomás több napon át méri a déli hőmérsékletet. Készíts programot, amely elemzi a mérési sorozatot!

### A program feladatai:

1. Kérdezd meg, **hány nap** adatait szeretnéd rögzíteni!
2. Olvasd be mindegyik nap **hőmérsékletét** (°C-ban)!
3. Írd ki:
   - hány napon volt **fagyos** az idő (`0 °C` alatti hőmérséklet),
   - hány napon volt **kellemes tavaszi idő** (`15 °C` és `25 °C` között, a határokat is beleértve),
   - **hányadik napon** mérték a **legmagasabb** hőmérsékletet (ha több ilyen nap is volt, az elsőt add meg)!

Példa kimenet:

```text
Hány nap adatait rögzíted? 6
1. nap hőmérséklete (°C): -2
2. nap hőmérséklete (°C): 14
3. nap hőmérséklete (°C): 22
4. nap hőmérséklete (°C): 26
5. nap hőmérséklete (°C): 18
6. nap hőmérséklete (°C): 26

Fagyos napok száma: 1
Kellemes (15-25 °C) napok száma: 2
A legmagasabb hőmérséklet (26 °C) a(z) 4. napon volt.
```

<details>
<summary>Megoldás megmutatása</summary>

```python
napok = int(input("Hány nap adatait rögzíted? "))

fagyos = 0
kellemes = 0
max_hom = None
max_nap = 0

for nap in range(1, napok + 1):
    hom = int(input(f"{nap}. nap hőmérséklete (°C): "))
    
    if hom < 0:
        fagyos += 1
    if 15 <= hom <= 25:
        kellemes += 1
        
    if max_hom is None or hom > max_hom:
        max_hom = hom
        max_nap = nap

print(f"\nFagyos napok száma: {fagyos}")
print(f"Kellemes (15-25 °C) napok száma: {kellemes}")
print(f"A legmagasabb hőmérséklet ({max_hom} °C) a(z) {max_nap}. napon volt.")
```