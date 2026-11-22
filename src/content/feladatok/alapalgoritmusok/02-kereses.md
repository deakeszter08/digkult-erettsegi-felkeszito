---
title: "Első 25 fok feletti hőmérséklet napja"
topic: "Keresés"
difficulty: "érettségi"
order: 2
---

A programban adott egy egész számokat tartalmazó lista a napi csúcshőmérsékletekről (`homersekletek = [19, 22, 27, 24, 31, 28, 26]`).

1. Használd a megadott `homersekletek` listát!
2. Keresd meg az **első** olyan nap sorszámát (1-től számozva), amelyen a hőmérséklet **nagyobb, mint 25**!
3. Írd ki a képernyőre a nap sorszámát (vagy jelezd, ha nem volt ilyen nap)!

Példa kimenet:

```text
Először a 3. napon volt 25 foknál magasabb a hőmérséklet.
```

<details>
<summary>Megoldás mutatása</summary>

```python
homersekletek = [19, 22, 27, 24, 31, 28, 26]
elso_nap = None

for index in range(len(homersekletek)):
    if homersekletek[index] > 25:
        elso_nap = index + 1
        break

if elso_nap is not None:
    print(f"Először a {elso_nap}. napon volt 25 foknál magasabb a hőmérséklet.")
else:
    print("Nem volt 25 foknál magasabb hőmérsékletű nap.")

```

</details>
