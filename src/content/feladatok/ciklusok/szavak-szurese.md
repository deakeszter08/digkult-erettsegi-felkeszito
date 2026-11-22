---
title: "Hosszú szavak kiválogatása listából"
topic: "For ciklus"
difficulty: "alapozó"
order: 2
---

A programban adott egy szavakat tartalmazó lista (`szavak = ["nap", "programozás", "fa", "algoritmus", "kód", "billentyűzet"]`). 



1. Használd a megadott `szavak` listát!
2. Menj végig a szavakon és **csak azokat írd ki**, amelyek hossza **legalább 6 karakter**!
3. A kiválasztott szavakat írd ki egymás alá!

Példa kimenet:

```text
Legalább 6 betűs szavak:
programozás
algoritmus
billentyűzet
```
<details>
<summary>Megoldás megmutatása</summary>

```python
szavak = ["nap", "programozás", "fa", "algoritmus", "kód", "billentyűzet"]

print("Legalább 6 betűs szavak:")
for szo in szavak:
    if len(szo) >= 6:
        print(szo)
        
```