---
title: "Igazolt és igazolatlan hiányzások számlálása"
topic: "Megszámlálás"
difficulty: "érettségi"
order: 1
---

A programban adott egy lista a bejegyzések típusával (`tipusok = ["igazolt", "igazolatlan", "igazolt", "igazolatlan", "igazolatlan", "igazolt"]`).

1. Használd a megadott `tipusok` listát!
2. **Számold meg**, hány `"igazolt"` és hány `"igazolatlan"` bejegyzés szerepel a listában!
3. Írd ki a két darabszámot a képernyőre!

Példa kimenet:

```text
Igazolt bejegyzések száma: 3 db
Igazolatlan bejegyzések száma: 3 db
```

<details>
<summary>Megoldás mutatása</summary>

```python
tipusok = ["igazolt", "igazolatlan", "igazolt", "igazolatlan", "igazolatlan", "igazolt"]

igazolt_db = 0
igazolatlan_db = 0

for tipus in tipusok:
    if tipus == "igazolt":
        igazolt_db += 1
    elif tipus == "igazolatlan":
        igazolatlan_db += 1

print(f"Igazolt bejegyzések száma: {igazolt_db} db")
print(f"Igazolatlan bejegyzések száma: {igazolatlan_db} db")
```

</details>