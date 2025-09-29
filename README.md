# JETBRAINS AI által generált README fájl

# Labirintus Generátor és Megoldó


Egy teljes stack alkalmazás, amely véletlenszerű labirintusokat generál és vizuálisan megjeleníti azok megoldását.

## 🎯 Funkciók

- **Labirintus generálás**: Rekurzív backtracking algoritmussal NxM méretű labirintusok létrehozása
- **Automatikus megoldás**: DFS (Depth-First Search) algoritmus segítségével
- **Animált vizualizáció**: A megoldási útvonal lépésről-lépésre történő megjelenítése
- **Testreszabható paraméterek**: Sorok, oszlopok száma és animáció sebessége állítható

## 📁 Projekt Struktúra

```
2025_09_29_labirintus/
├── maze-backend/              # Node.js backend
│   ├── mazeGenerator.js       # Labirintus generáló osztály
│   ├── server.js              # Express API szerver
│   └── package.json           # Backend függőségek
│
└── maze-frontend/             # Ionic Angular frontend
    ├── src/
    │   ├── app/
    │   │   ├── home/
    │   │   │   ├── app.component.html      # UI template
    │   │   │   ├── app.component.scss      # Stílusok és animációk
    │   │   │   ├── app.component.spec.ts   # Unit tesztek
    │   │   │   └── app.component.ts        # Fő komponens logika
    │   │   └── app.routes.ts               # Routing konfiguráció
    │   │
    │   ├── services/
    │   │   └── maze.service.ts             # API kommunikációs szolgáltatás
    │   │
    │   ├── theme/
    │   │   └── global.scss                 # Globális stílusok
    │   │
    │   ├── index.html                      # Fő HTML fájl
    │   ├── main.ts                         # Angular bootstrap
    │   └── polyfills.ts                    # Polyfill-ek
    │
    └── package.json                        # Frontend függőségek
```

## 🔧 Technológiák

### Backend
- **Node.js**: Runtime környezet
- **Express.js**: Web framework
- **CORS**: Cross-origin resource sharing

### Frontend
- **Angular 18+**: Frontend framework
- **Ionic Framework**: UI komponensek
- **TypeScript**: Típusos JavaScript
- **RxJS**: Reaktív programozás

## 🚀 Telepítés és Futtatás

### Előfeltételek

- **Node.js** (v16 vagy újabb): [Letöltés](https://nodejs.org/)
- **npm** (Node.js-sel együtt települ)
- **Ionic CLI** (opcionális, de ajánlott):
  ```bash
  npm install -g @ionic/cli
  ```

### 1. Projekt Letöltése

```bash
# Projekt mappába lépés
cd 2025_09_29_labirintus
```

### 2. Backend Indítása

**Terminal 1 / CMD 1:**

```bash
# Backend mappába lépés
cd maze-backend

# Függőségek telepítése (csak első alkalommal)
npm install

# Szerver indítása
node server.js
```

**Kimenet:**
```
Maze API running on http://localhost:3000
```

✅ A backend most fut és várja a kéréseket a `http://localhost:3000` címen.

### 3. Frontend Indítása

**Terminal 2 / CMD 2** (új terminál ablak):

```bash
# Frontend mappába lépés (a projekt gyökérből)
cd maze-frontend

# Függőségek telepítése (csak első alkalommal)
npm install

# Alkalmazás indítása
ionic serve
# VAGY ha nincs Ionic CLI telepítve:
npm start
```

**Kimenet:**
```
[INFO] Development server running!
       Local: http://localhost:3000
```

✅ A frontend most fut és automatikusan megnyílik a böngészőben.

### 4. Alkalmazás Használata

1. Nyisd meg a böngészőt és menj a `http://localhost:3000` címre (általában automatikusan megnyílik)
2. Állítsd be a labirintus méretét (sorok és oszlopok - páratlan számok)
3. Kattints az **"Új labirintus"** gombra
4. Kattints a **"Megold"** gombra a megoldás animációjához

### 🛑 Leállítás

Mindkét terminálban nyomd meg:
- **Windows**: `Ctrl + C`
- **Mac/Linux**: `Ctrl + C`

### 🔄 Újraindítás

Ha bármilyen változtatást végeztél a kódban:

**Backend:**
- Állítsd le (`Ctrl + C`)
- Indítsd újra: `node server.js`

**Frontend:**
- Az Ionic automatikusan újratölti a változtatásokat (hot reload)
- Ha nem, állítsd le és indítsd újra: `ionic serve`

### ⚠️ Gyakori Problémák

**"Port 3000 already in use":**
```bash
# Más port használata
# server.js-ben változtasd meg: const PORT = 3001;
# maze.service.ts-ben: http://localhost:3001
```

**"Cannot GET /maze":**
- Ellenőrizd, hogy a backend fut-e
- Nézd meg: `http://localhost:3000/maze?rows=21&cols=21`

**Frontend nem tölt be:**
```bash
# Node modules törlése és újratelepítés
cd maze-frontend
rm -rf node_modules package-lock.json
npm install
ionic serve
```

## 📡 API Dokumentáció

### GET `/maze`

Új labirintus generálása.

**Query paraméterek:**
- `rows` (number, opcionális): Sorok száma (alapértelmezett: 21)
- `cols` (number, opcionális): Oszlopok száma (alapértelmezett: 21)

**Példa kérés:**
```
GET http://localhost:3000/maze?rows=21&cols=21
```

**Válasz:**
```json
{
  "rows": 21,
  "cols": 21,
  "maze": [[1,1,1,...], [1,0,0,...], ...],
  "start": [1, 1],
  "end": [19, 19]
}
```

**Maze értékek:**
- `0`: Járható útvonal (fehér)
- `1`: Fal (fekete)

## 🎨 Használati Útmutató

### Labirintus Generálás

1. **Sorok száma (N)**: Állítsd be a labirintus magasságát (páratlan szám)
2. **Oszlopok száma (M)**: Állítsd be a labirintus szélességét (páratlan szám)
3. **Új labirintus gomb**: Generál egy új labirintust a megadott méretekkel

### Megoldás Animáció

1. **Animáció sebessége**: Állítsd be milliszekundumban (pl. 20 = gyors, 100 = lassú)
2. **Megold gomb**: Elindítja a megoldó algoritmust és animálja az útvonalat
3. Az animáció alatt a gomb le van tiltva

### Színkódok

- 🟢 **Zöld**: Start pont (bal felső sarok közelében)
- 🔵 **Kék**: Cél pont (jobb alsó sarok közelében)
- ⬛ **Fekete**: Falak
- ⬜ **Fehér**: Járható útvonal
- 🟥 **Piros**: Megoldási útvonal (animálva jelenik meg)

## 🧮 Algoritmusok

### Labirintus Generálás - Recursive Backtracking

A `MazeGenerator` osztály rekurzív backtracking algoritmust használ:

1. **Inicializálás**: Minden cella fal (1)
2. **Kezdőpont**: (1, 1) pozíció
3. **Véletlenszerű irány**: 4 irány közül választ (fel, le, balra, jobbra)
4. **2 cellás lépés**: Mindig 2 cellát lép egyszerre (páratlan koordináták)
5. **Falfúrás**: A két cella közötti falat eltávolítja
6. **Rekurzió**: Folytatja amíg minden elérhető cellát fel nem fedez
7. **Backtrack**: Ha zsákutcába ér, visszalép

**Garantáltan:**
- Pontosan egy útvonal létezik bármely két pont között
- Nincs kör a labirintusban
- Minden cella elérhető

### Labirintus Megoldás - DFS (Depth-First Search)

A `findPath()` metódus mélységi keresést használ:

1. **Kezdőpont**: Start pozíció (zöld)
2. **Visited tömb**: Nyomon követi a meglátogatott cellákat
3. **Rekurzív keresés**: 4 irányba próbál lépni (jobb, le, bal, fel)
4. **Érvényesség ellenőrzés**:
    - Nem fal
    - Nem látogatott
    - Határokon belül van
5. **Backtracking**: Ha zsákutca, visszalép és más utat keres
6. **Útvonal építés**: Sikeres lépések az útvonalon maradnak

**Eredmény:**
- Megtalálja az első érvényes utat
- Lehet, hogy nem a legrövidebb út
- Garantáltan talál megoldást

## 👨‍💻 Fejlesztői Dokumentáció

### Backend - MazeGenerator osztály

**Konstruktor:**
```javascript
constructor(rows, cols)
```
- Páratlanná alakítja a méretet ha páros
- Inicializálja a maze tömböt

**Fő metódusok:**
```javascript
generate()      // Új labirintus generálása
carve(r, c)     // Rekurzív járatfúrás
```

### Frontend - AppComponent osztály

**Fő property-k:**
```typescript
maze: number[][]           // Labirintus mátrix
rows: number              // Sorok száma
cols: number              // Oszlopok száma
path: Position[]          // Megoldási útvonal
animationSpeed: number    // Animáció sebessége (ms)
isAnimating: boolean      // Animáció állapot
```

**Fő metódusok:**
```typescript
generateMaze()                              // API hívás új labirintushoz
solveMaze()                                 // Megoldás keresése és animálása
findPath(): Position[] | null               // DFS algoritmus
dfs(row, col, visited, path): boolean       // Rekurzív mélységi keresés
animatePath(solution: Position[])           // Fokozatos megjelenítés
isCellInPath(row, col): boolean            // Cella az útvonalon van-e
```

### MazeService

**API kommunikáció:**
```typescript
getMaze(rows: number, cols: number): Observable<any>
```
- HTTP GET kérés a backend felé
- Query paraméterekkel küldi a méreteket
- Observable-t ad vissza RxJS-sel

## 📦 Production Build

### Frontend Build Létrehozása (MÁR LÉTREHOZVA a `www` mappa, nem kell ionic build)

```bash
cd maze-frontend

# Production build
ionic build --prod
```

**Eredmény:**
- Létrejön a `www` mappa
- Minifikált HTML, CSS, JS fájlok
- Optimalizált teljesítményre
- Készen áll hosztolásra

## 📝 Megjegyzések

- **Páratlan számok**: A sorok és oszlopok száma automatikusan páratlanra kerekítődik az algoritmus működéséhez
- **Garantált megoldhatóság**: Minden generált labirintus megoldható
- **Egyedi útvonal**: Pontosan egy útvonal létezik start és cél között
- **Animáció blokkolás**: Az animáció közben nem indítható újabb megoldás

## 🐛 Hibaelhárítás

### Backend nem indul
```bash
# Ellenőrizd a Node.js verziót
node --version

# Telepítsd újra a függőségeket
cd maze-backend
rm -rf node_modules
npm install
```

### Frontend hibák
```bash
# Clear cache és újratelepítés
cd maze-frontend
rm -rf node_modules package-lock.json .angular
npm install
```

### CORS hibák
- Ellenőrizd, hogy a backend fut-e
- A `server.js`-ben a CORS engedélyezve van minden origin-ről

### API nem válaszol
```bash
# Teszteld a böngészőben
http://localhost:3000/maze?rows=21&cols=21
```
