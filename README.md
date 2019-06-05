# Projekt aplikacji warsztatowej
![Spotkanie 2](https://img.shields.io/static/v1.svg?label=Spotkanie&message=2&color=9cf)
![wersja 2.00](https://img.shields.io/badge/Wersja%20projektu-2.00-lightgrey.svg)

W razie pytań lub potrzeby wyjaśnienia, któregoś fragmentu kodu można otworzyć issue na githubie lub pisać na [fanpage](https://www.facebook.com/knnativeflow). Przy zmianach kodu/wyjaśnień będzie aktualizowana wersja projektu :)

## Co zrobiliśmy?

- nowy komponent wyświetlający szczegóły filmu
- pobieranie danych z prawdziwego API
- dodaliśmy bibliotekę react-router-dom
- zamieniliśmy routing "ifami" na routing przy użyciu routingu z biblioteki

## Jak dodać paczkę do projektu?

Paczki takie jak `react-router-dom` możemy pobraż przy użyciu komendy `npm install react-router-dom`. Jeżeli taka zależność jest już dodana (jest w `package.json`), a projekt skądś pobraliśmy wystarczy użyć `npm install` aby pobrać wszystkie zależności.

## React Router w skrócie

Jest to paczka pozwalająca przy użyciu różnych komponentów (`Route`, `Link`, `Switch`, `BrowseRouter`) stworzyć routing. Działa to tak, że to kod JS-a z tej biblioteki zarządza zmianami w URL, dzięki czemu możemy przechodzić na inne podstrony bez przeładowywania lub wyświetlać różne komponenty zależnie od podanego adresu w przeglądarce.

## Linki

- dokumentacja React Router https://reacttraining.com/react-router/web/guides/quick-start

- dokumentacja API https://developers.themoviedb.org/3

- jak używać FetchAPI https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

- domknięcia funkcyjne (wyjaśnienie dotyczące usuwanie po ID ze spotkania 1) https://jsfiddle.net/bptawdex/1/

- przykład wysyłania danych przez Fetch https://jsfiddle.net/5eyc16z7/2/

- popularna biblioteka do robienia requestów (jak wbudowany w przeglądarki Fetch, ale ułatwiająca obsługę błędów / zapytań) https://github.com/axios/axios
