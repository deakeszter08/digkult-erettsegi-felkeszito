---
title: "Utolsó kánikulai nap sorszáma"
topic: "Keresés"
difficulty: "érettségi"
order: 3
---

A programban adott egy lista a napi csúcshőmérsékletekről (`homersekletek = [24, 29, 31, 27, 33, 28, 30, 22]`).

1. Használd a megadott `homersekletek` listát (nem kell bekérni a felhasználótól)!
2. Határozd meg az **utolsó** olyan nap sorszámát (1-től számozva), amikor a hőmérséklet **legalább 30 fok** volt, és azt is, hogy aznap hány fokot mértek!
3. Írd ki az eredményt a képernyőre (vagy jelezd, ha nem volt legalább 30 fokos nap)!

Példa kimenet:

```text
Utoljára a 7. napon volt legalább 30 fok (32 fok).

```


<details>
<summary>Megoldás mutatása</summary>

```python
homersekletek = [24, 29, 31, 27, 33, 28, 32, 22]
utolso_nap = None
utolso_fok = None

for index in range(len(homersekletek)):
    if homersekletek[index] >= 30:
        utolso_nap = index + 1
        utolso_fok = homersekletek[index]

if utolso_nap is not None:
    print(f"Utoljára a {utolso_nap}. napon volt legalább 30 fok ({utolso_fok} fok).")
else:
    print("Nem volt legalább 30 fokos nap.")

```

</details>
