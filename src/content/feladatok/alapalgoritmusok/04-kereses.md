---
title: "Utolsó 50-nél nagyobb szám a listában"
topic: "Keresés"
difficulty: "érettségi"
order: 4
---

A programban adott egy egész számokat tartalmazó lista (`szamok = [12, 64, 38, 81, 29, 55, 19]`).

1. Használd a megadott `szamok` listát (nem kell bekérni a felhasználótól)!
2. Keresd meg az **utolsó** olyan számot a listában, amely **nagyobb, mint 50**!
3. Írd ki az értéket a képernyőre (vagy jelezd, ha nincs ilyen szám)!

Példa kimenet:

```text
Utolsó 50-nél nagyobb szám: 55
```



<details>
<summary>Megoldás mutatása</summary>

```python
szamok = [12, 64, 38, 81, 29, 55, 19]
utolso_talalat = None

for szam in szamok:
    if szam > 50:
        utolso_talalat = szam

if utolso_talalat is not None:
    print("Utolsó 50-nél nagyobb szám:", utolso_talalat)
else:
    print("Nincs 50-nél nagyobb szám a listában.")
```

</details>
