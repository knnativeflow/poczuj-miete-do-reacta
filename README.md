# Projekt aplikacji warsztatowej
![Spotkanie 3](https://img.shields.io/static/v1.svg?label=Spotkanie&message=3&color=9cf)
![wersja 3.00](https://img.shields.io/badge/Wersja%20projektu-3.00-lightgrey.svg)

W razie pytań lub potrzeby wyjaśnienia, któregoś fragmentu kodu można otworzyć issue na githubie lub pisać na [fanpage](https://www.facebook.com/knnativeflow). Przy zmianach kodu/wyjaśnień będzie aktualizowana wersja projektu :)

## Co zrobiliśmy?

- usprawniliśmy routing o topbar i footer
- przerobiliśmy fetch na funkcję request z obsługą queryString
- stworzyliśmy wyszukiwarkę filmów
- dodaliśmy debounce do wyszukiwarki
- zbuildowaliśmy projekt i wrzuciliśmy na serwer

## Konto ct8

Jeżeli chcecie dobry darmowy hosting do wrzucania swoich projektów to są jeszcze miejsca na [ct8.pl](https://www.ct8.pl/).

Alternatywnie można do publikowania statycznych stron (czyli React również) można użyć [GitHub Pages](https://pages.github.com/).
Fajną rzeczą jest też [Netlify](https://www.netlify.com/), który będzie wam buildował i hostował najświeższą aplikację korzystając z repozytorium git.

## Co pisać dalej

Rzeczy, które poznaliśmy są dobrym starterm do pisania własnych rzeczy. Możecie spróbować swoich sił robiąc popularną w przeróżnych tutorialach listę TO DO. Innym przykładowym projektem jest aplikacja pogodowa korzystająca z jakiegoś [API z prognozą](https://openweathermap.org/forecast5). Oczywiście najwięcej frajdy (i trudności, ale też doświadczenia!) przyniesie zrobienie czegoś dla was/kogoś znajomego co faktycznie komuś się przyda, bo satysfakcja z pisania będzie większa.

## Czego się uczyć dalej

To co poznaliśmy to podstawy, a z każdym kolejnym krokiem pojawia się milion innych rzeczy do ogarnięcia. Kolejnymi tematami, które mogą/powinny was zainteresować są:

- [Eloquent Javascript](https://eloquentjavascript.net/) - co prawda nie związane bezpośrednio z Reactem, ale jedna z lepszych pozycji (online) do dogłębnego poznania JS. Oprócz samego tekstu są miejsca do próbowania swoich sił w rozwiązywaniu zadań do aktualnie poruszanego tematu. Po przeczytaniu będzie wam o wiele prościej poruszać się w czymkolwiek napisanym w JS.
- Stylowanie - na nadawanie stylów w Reactcie jest dużo różnych sposobów. Warto poznać preprocesory CSS np. [SASS](https://sass-lang.com/) i jego [użycie w z React](https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet). Rzeczy w stylu [CSS Modules](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet), albo rzeczy, które bardziej odbiegają od tradycji jak [styled-components](https://www.styled-components.com/).
- poznać rzeczy w stylu [lintera](https://eslint.org/), który pozwala na utrzymanie kodu w dobrym stanie
- dowiedzieć się jak mniej więcej działa [webpack](https://webpack.js.org/) i czym jest [babel](https://babeljs.io/) z racji tego, że są to rzeczy, na których stoi większośc aplikacji JS
- NOWOŚĆ! czyli [React Hooks](https://reactjs.org/docs/hooks-intro.html) rzecz, która pojawiła się w najnowszej wersji React i pozwala m.in. na state w komponentach funkcyjnych i która będzie coraz popularniejsza
- nauczyć się korzystania z devtoolsów przeglądarkowych, a także sprawdzić sobie [react devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [qs](https://www.npmjs.com/package/qs) - najpopularniejsza biblioteka do queryString. Warto nauczyć się używać, a można zrobić to nawet na przykładzie tej aplikacji filmowej!
- [route-parser](https://www.npmjs.com/package/route-parser) - kolejna popularna bilbioteka służąca do lepszego "wkładania" i "wyciągania" parametrów z routów (np. `/movies/123`)
- w końcu stwierdzicie, że zwykły state jest w pewnych sytuacjach męczący i potrzebujecie czegoś więcej. Oprócz wbudowanego w React Context API na pewno usłyszycie o [Redux](https://redux.js.org/) lub [MobX](https://github.com/mobxjs/mobx)

I więcej (co pokazane jest np. na [tej roadmapie](https://github.com/adam-golab/react-developer-roadmap))!

## Rekrutacja

Jeszcze lepszym pomysłem na dalszy rozwój jest dołączenie do naszego koła naukowego. Dzięki temu poznacie nie tylko samego Reacta, ale też będziecie tworzyć przydatne i używane przez innych aplikację, a nowa dawka wiedzy będzie przychodziła do was z każdym pull requestem w postaci code review! A wszystko to w stylu adżajl.

Link do zgłoszeń zupdatuje jak się pojawi!
