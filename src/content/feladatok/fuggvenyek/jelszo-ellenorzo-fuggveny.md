---
title: "Jelszóerősség ellenőrzése függvénnyel"
topic: "Függvények"
difficulty: "alapozó"
order: 1
---

Készíts egy `eros_jelszo(jelszo)` függvényt, amely eldönti, hogy egy megadott jelszó megfelel-e az alapvető biztonsági feltételeknek (`True` vagy `False` értékkel tér vissza)!


1. A függvény akkor adjon vissza `True` értéket, ha a jelszó:
   - **legalább 8 karakter hosszú**, és
   - tartalmaz **legalább egy számjegyet** (`any(ch.isdigit() for ch in jelszo)` vagy ciklus + `.isdigit()`).
2. Ellenkező esetben `False` értékkel térjen vissza!
3. A főprogramban teszteld a függvényt a `["alma", "titok123", "Biztonsagos9", "12345678"]` listán, és írd ki minden jelszó mellé, hogy **erős** vagy **gyenge**!

Példa kimenet:

```text
alma -> gyenge
titok123 -> erős
Biztonsagos9 -> erős
12345678 -> erős
```

<details>
<summary>Megoldás megmutatása</summary>

```python

def eros_jelszo(jelszo):
    van_szam = False
    for karakter in jelszo:
        if karakter.isdigit():
            van_szam = True
            break

    if len(jelszo) >= 8 and van_szam == True:
        return True
    else:
        return False    # haladóknak: return len(jelszo) >= 8 and van_szam


teszt_jelszavak = ["alma", "titok123", "Biztonsagos9", "12345678"]

for jelszo in teszt_jelszavak:
    if eros_jelszo(jelszo):
        print(f"{jelszo} -> erős")
    else:
        print(f"{jelszo} -> gyenge")

```

