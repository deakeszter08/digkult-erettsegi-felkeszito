---
title: "Fájlbeolvasás Pythonban"
description: "Útmutató a szöveges fájlok beolvasásához és feldolgozásához Pythonban, az emelt szintű érettségire. Digitális kultúra érettségi alapok- Megmutatjuk a forrásfájlok beolvasását, a sorokra bontást és az érettségin tipikusan használt mintamegoldásokat"
pubDate: "2026-11-20"
tags: ["fájlbeolvasás"]
---


  # Fájl megnyitása olvasásra
  A `"taborok.txt"` fájlt UTF-8 kódolással nyitjuk meg olvasásra.  
  ```python
  file = open("taborok.txt", "r", encoding="utf-8").read().splitlines()
  ```


* `read()` beolvassa a teljes fájl tartalmát szövegként.

* `splitlines()` sorokra bontja a szöveget, eltávolítva a sorvégi sortöréseket.

* Az eredmény egy lista, amelynek minden eleme egy sor a fájlból.

* **Lista létrehozása a táborok adatainak tárolására:**

  ```python
  taborok = []
  ```

  * Üres lista, amelybe később a feldolgozott sorokat mentjük.

* **Sorok feldolgozása:**

  ```python
  for line in file:
      line = line.split("\t")
      taborok.append(line)
  ```

  * `for line in file:` → végigmegyünk minden egyes soron a beolvasott listában.
  * `line.split("\t")` → a sort tabulátorok mentén daraboljuk fel mezőkre.

    * Eredmény: egy lista az adott tábor adataival (pl. hónap, nap, téma).
  * `taborok.append(line)` → a feldolgozott sort hozzáadjuk a `taborok` listához.

    * Így a `taborok` lista minden eleme egy-egy tábor adatait tartalmazó lista lesz.

 ```python
  print(taborok)
  ```
  --> kimenet:
  
  [['6', '26', '7', '10', 'GIOSY', 'foci'], ['7', '14', '7', '21', 'FPUY', 'szinjatszo'], ['7', '27', '8', '2', 'DKPRX', 'hittan'], ['7', '28', '8', '6', 'FJLOP', 'cserkesz']]

