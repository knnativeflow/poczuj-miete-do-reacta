# Projekt aplikacji warsztatowej
![Spotkanie 1](https://img.shields.io/static/v1.svg?label=Spotkanie&message=1&color=9cf)
![wersja 1.01](https://img.shields.io/badge/Wersja%20projektu-1.01-lightgrey.svg)

W razie pytań lub potrzeby wyjaśnienia, któregoś fragmentu kodu można otworzyć issue na githubie lub pisać na [fanpage](https://www.facebook.com/knnativeflow). Przy zmianach kodu/wyjaśnień będzie aktualizowana wersja projektu :)  

## Jak zacząć?

Najprostszym sposobem wystartowania projektu w React jest wygenerowanie go przy pomocy [Create React App](https://github.com/facebook/create-react-app).

## Jak uruchomić projekt?

Po stworzeniu projektu do naszej dyspozycji jest kilka komend (możemy je znaleźć między innymi w pliku `package.json`).

- `npm install` - instaluje potrzebne paczki (według listy z `package.json`)
- `npm run start` - uruchamia projekt w trybie developerskim, projekt jest dostępny pod adresem [http://localhost:3000](http://localhost:3000)
- `npm run build` - tworzy build produkcyjny do wrzucenia na docelowy hosting
- `npm run eject` - **raz użyte nie może zostać cofnięte** rozpakowuje `react-scripts` oddając wszystkie pliki konfiguracyjne do naszej dyspozycji

## Struktura wygenerowanego projektu

Projekt składa się z kilku plików:
- `package.json` - plik z konfiguracją, zawiera listę zależności (aktualizuje się sama przy instalowaniu paczek); listę skryptów, które m.in. pozwalają uruchomić aplikację; informacje konfiguracyjne do rzeczy typu linter;
- folder `public` - zawiera m.in. plik `index.html`, do którego wstrzykiwane są style i skrypty
- folder `src` - jest głównym folderem zawierającym pliki dotyczące projektu (skrypty, komponenty, style)
- plik `package-lock.json` - nie do modyfikacji, zawiera drzewo zależności instalowanych paczek npm
- folder `node_modules` - zawiera pobrane paczki npm; generuje się sam po użyciu `npm install`

## Pliki źródłowe

W folderze `src` tworzymy nowe komponenty i ich style. Można dowolnie zagnieżdżać foldery, aby ułatwić sobie organizacje w projekcie. Plik `index.js` jest plikiem, od którego wszystko się zaczyna i z którego zaczyna się "podróż" [webpacka](https://webpack.js.org/) łączącego wszystkie pliki, wstrzykującego rzeczy do `index.html` i sprawiającego, że przeglądarka wie co i jak.

## JavaScript i React - tipy

- Można pisać kod zarówno ze średnikami jak i bez nich
- [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) - obiekty, na których bardzo często sie operuje w JSie
- Często można się spotkać z [dekonstrukcją](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Operatory/Destructuring_assignment), która ułatwia wyciąganie elmentów z obiektów `const { a } = { a: 'wartosc', b: 312 }`
- Warto zapoznać się z funkcjami takimi jak [`map`](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/map) i [`filter`](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/filter)
- [Arrow functions](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Functions/Funkcje_strzalkowe) pozwalają na pisanie funkcji w sposób `const dodaj = (a, b) => a + b`
- Importowanie i exportowanie opisałem w `Movie.js`, ale np. [tutaj można poczytać](https://www.geeksforgeeks.org/reactjs-importing-exporting/) o tym więcej
