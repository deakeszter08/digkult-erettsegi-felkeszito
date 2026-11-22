---
title: "Utolsó 10-zel osztható szám sorszáma"
topic: "Keresés"
difficulty: "érettségi"
order: 1
---

A programban adott egy egész számokat tartalmazó lista (`szamok = [13, 20, 45, 70, 18, 90, 32]`).

1. Használd a megadott `szamok` listát (nem kell bekérni a felhasználótól)!
2. Keresd meg az **utolsó** olyan elem sorszámát (1-től számozva), amely **10-zel osztható**!
3. Írd ki a képernyőre a sorszámot (vagy jelezd, ha nincs ilyen szám a listában)!

Példa kimenet:

```text
Utoljára a 6. elem volt 10-zel osztható.

```

<details>
<summary>Megoldás mutatása</summary>

```python
szamok = [13, 20, 45, 70, 18, 90, 32]
utolso_sorszam = None

for index in range(len(szamok)):
    if szamok[index] % 10 == 0:
        utolso_sorszam = index + 1

if utolso_sorszam is not None:
    print(f"Utoljára a {utolso_sorszam}. elem volt 10-zel osztható.")
else:
    print("Nincs 10-zel osztható szám a listában.")

```

</details>

