---
title: "Keresés algoritmus"
description: "Érettségi-fókuszú és általános útmutató a kereséshez Pythonban: hogyan találjuk meg az utolsó feltételnek megfelelő elemet vagy az első találatot ciklusokkal, listákkal és szótárakkal."
pubDate: "2026-11-22"
tags: ["keresés", "alapalgoritmusok"]
---

# Keresés algoritmusa

A digitális kultúra érettségin (közép- és emelt szinten egyaránt) az egyik leggyakoribb feladat valahogy így hangzik: *„Adja meg, melyik autót vitték el utoljára…”*, *„Keressük meg az első olyan esetet, amikor…”*, vagy *„Melyik személyhez tartozik a legutóbbi…”*.

Általános programozási értelemben a **keresés** azt jelenti, hogy egy adatsorban (általában listákban, szótárakban) **megkeressük azt az elemet, amely teljesít egy adott feltételt**. Az érettségi feladatokban pedig szinte mindig előjön, hogy vagy **csak az első találat érdekes**, vagy csak **az utolsó** — és az adatok legtöbb esetben már előre rendezettek valamilyen szempont szerint (például időrendben).

---

## A lényeg röviden: két klasszikus feladat

### 1. Utolsó elem megtalálása
Ha egy listában vagy szótár-listában végigmegyünk az elemeken, és minden olyan elemnél, amelyre igaz a feltétel, **felülírjuk** a `talalat` változót:

```python
talalat = None

for elem in adatok:
    if elem["esemeny"] == "be":
        talalat = elem

```

Ha előre rendezett a sorozat (például időrendben van), akkor az utolsó olyan elem, amelyre igaz a feltétel, a legkésőbbi / legutolsó ilyen esemény lesz. Érettségin egyébként gyakori feladat, pl vannak táborok, és a feladat úgy szól, hogy jelenítse meg mikor kezdődik az Utsoló zenei tábor.



### 2. Első elem megtalálása

Ha a cél az első találat, akkor a találat után egy `break`-kel kilépünk a ciklusból 



```python
elso_kihajtas = None

for elem in adatok:
    if elem["irany"] == 0:  # 0 = kihajtás
        elso_kihajtas = elem
        break

```



---

### Mintafeladatok (próbáld meg előbb magadtól!)
**Jelmagyarázat:** a *-gal jelölt feladatokat Emelt szintre készülőknek ajánlom, közülük is azoknak akik `szótárral` oldják a feladatokat!
### 1. feladat

Adott egy lista a napi hőmérsékletekről: `homersekletek = [14, 16, 19, 22, 18, 15, 21, 17]`. Keresd meg az utolsó olyan napot Sorszámát, amikor a hőmérséklet legalább `20` fok volt!

<details>
<summary>Mintamegoldás és magyarázat</summary>

```python
homersekletek = [14, 16, 19, 22, 18, 15, 21, 17]

talalt_nap = None

for index in range(len(homersekletek)):
    if homersekletek[index] >= 20:
        talalt_nap = index + 1

if talalt_nap is not None:
    print(f"Utoljára a {talalt_nap}. napon volt legalább 20 fok.")
else:
    print("Nem volt ilyen nap.")

```

**Magyarázat:** Elölről haladunk végig a listán (index = 0-tól), és minden olyan alkalommal, amikor a hőmérséklet legalább 20 fok, felülírjuk a talalt_nap értékét az aktuális nap sorszámával (index + 1, mert a lista indexelése 0-tól indul, a napok sorszámozása pedig 1-től). Így előbb a 4. nap (22 fok) kerül bele, majd később a 7. nap (21 fok) felülírja — a ciklus végén pedig pont az utolsó találat marad a változóban.
</details>

---

### 2. feladat (szótáras*)

Egy naplóban időrendben szerepelnek események (`szotar` elemekből álló lista). Keresd meg az utolsó olyan bejegyzést, amelynél az `irany == 0` (kihajtás), és írd ki a rendszámát!

<details>
<summary>Mintamegoldás és magyarázat</summary>

```python
naplo = [
    {"nap": 5, "ido": "07:30", "rendszam": "CEG300", "irany": 0},
    {"nap": 5, "ido": "14:16", "rendszam": "CEG300", "irany": 1},
    {"nap": 5, "ido": "17:00", "rendszam": "CEG300", "irany": 0},
    {"nap": 5, "ido": "19:03", "rendszam": "CEG300", "irany": 1},
]

utolso_auto = None
for elem in naplo:
    if elem["irany"] == 0:
        utolso_auto = elem["rendszam"]

print("Utoljára elvitt autó:", utolso_auto)  # CEG300 (a 17:00-s kihajtásból)

```


**Magyarázat:** Mivel a `naplo` időrendben van, az `irany == 0` feltétel először a `07:30`-as sorra teljesül, majd a `17:00`-s sorra. A ciklus végére az `utolso_auto` változóban a legutóbbi találat (`"CEG300"`) marad meg.

</details>

---



---

### 3. feladat (szótáras*)

Egy versenyzők listájában minden elem egy szótár (`nev`, `pont`). Keresd meg az első olyan versenyzőt, akinek a pontszáma legalább `80`, és írd ki a nevét! Ha senki nem érte el ezt a pontszámot, írd ki: `"Nincs ilyen versenyző."`.

<details>
<summary>Mintamegoldás és magyarázat</summary>

```python
versenyzok = [
    {"nev": "Bence", "pont": 64},
    {"nev": "Dóra", "pont": 82},
    {"nev": "Gergő", "pont": 91},
    {"nev": "Eszter", "pont": 75},
]

nyertes_nev = None

for szemely in versenyzok:
    if szemely["pont"] >= 80:
        nyertes_nev = szemely["nev"]
        break

if nyertes_nev is not None:
    print("Első legalább 80 pontos versenyző:", nyertes_nev)
else:
    print("Nincs ilyen versenyző.")

```

**Magyarázat:** Elölről végigmegyünk a listán, és amint találunk egy `pont >= 80` feltételű elemet (`"Dóra"`), eltároljuk a nevét, és a `break` utasítással kilépünk a ciklusból, így a későbbi találatok (`"Gergő"`) már nem írják felül. A végén `is not None` vizsgálattal kezeljük azt az esetet is, ha nincs találat.

</details>

---

## Gyors összefoglaló

* **Keresés** = egy feltételnek megfelelő elem megkeresése egy adatsorban.
* **Utolsó találat rendezett adatoknál** = végigjárás `talalat = elem` felülírással, vagy visszafelé haladás (`reversed(...)` / visszafelé `range`) + `break`.
* **Első találat** = előre haladva az első feltételnek megfelelő elemnél `break`.
* **Hiányzó találat kezelése** = érdemes alapértékként `None`-t (vagy `False` jelzőt) használni, és a ciklus után leellenőrizni, találtunk-e bármit.

