---
title: "Érdemjegy pontszám alapján"
topic: "Elágazások"
difficulty: "alapozó"
order: 1
---

Kérj be egy 0 és 100 közötti egész pontszámot, és írd ki a megfelelő érdemjegyet!

- **85 vagy több:** Jeles
- **70–84:** Jó
- **55–69:** Közepes
- **40–54:** Elégséges
- **40 alatt:** Elégtelen

<details>
<summary>Megoldás megmutatása</summary>

```python
pont = int(input("Add meg a pontszámot: "))

if pont >= 85:
    print("Jeles")
elif pont >= 70:
    print("Jó")
elif pont >= 55:
    print("Közepes")
elif pont >= 40:
    print("Elégséges")
else:
    print("Elégtelen")