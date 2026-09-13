# ABIBOK SEO Release 1

## Utworzone strony i intencje

| Strona | Główna intencja | Title | H1 |
| --- | --- | --- | --- |
| `/zlota-raczka-warszawa/` | złota rączka Warszawa, fachowiec do domu | Złota Rączka Warszawa – Drobne Naprawy \| ABIBOK | Złota rączka w Warszawie |
| `/drobne-naprawy-warszawa/` | drobne naprawy domowe Warszawa | Drobne Naprawy Warszawa – Dom i Mieszkanie \| ABIBOK | Drobne naprawy w Warszawie |
| `/montaz-telewizora-warszawa/` | montaż telewizora i uchwytu TV Warszawa | Montaż Telewizora Warszawa – TV na Ścianie \| ABIBOK | Montaż telewizora na ścianie w Warszawie |
| `/montaz-mebli-warszawa/` | montaż i składanie mebli Warszawa | Montaż Mebli Warszawa – Składanie Mebli \| ABIBOK | Montaż i składanie mebli w Warszawie |
| `/montaz-polek-karniszy-warszawa/` | montaż półek, karniszy i mocowań Warszawa | Montaż Półek i Karniszy Warszawa \| ABIBOK | Montaż półek, karniszy i mocowań w Warszawie |

Każda nowa strona ma unikalną polską treść, CTA nad linią załamania i przy końcu, widoczne breadcrumbs, link do huba usług, 3 linki do powiązanych usług, informacje o cenie i ograniczenia techniczne. Dodano proste dane `Service` oraz `BreadcrumbList` bez ocen, opinii, adresu i niepotwierdzonych danych.

## Zmiany na istniejących stronach

- Ustawiono wymagane title i meta description strony głównej oraz `/uslugi/`.
- Dodano self-canonical i robots meta do wszystkich 10 publicznych stron.
- Rozbudowano opis hero strony głównej bez zmiany widocznego H1.
- Przekształcono `/uslugi/` w hub z linkami do 5 stron usług oraz pozostawiono pozostałe kategorie jako bezpośrednie zgłoszenia.
- Zaktualizowano karty strony głównej i stopki, zachowując bezpośrednie CTA do formularza.
- Dodano wymiary do istniejących obrazów lazy-load tam, gdzie ich brakowało.

## Sitemap

`sitemap.xml` zawiera 5 istniejących i 5 nowych kanonicznych URL-i. `robots.txt` pozostał bez zmian i wskazuje sitemapę bez blokowania stron.

## Przeprowadzone testy

- dokładnie jeden title, jeden widoczny H1, self-canonical i robots meta na każdej stronie;
- unikalność meta descriptions;
- zgodność sitemap z listą 10 stron kanonicznych;
- poprawne parsowanie XML sitemap i JSON-LD;
- sprawdzenie lokalnych linków wewnętrznych;
- jeden tag Google Ads `AW-18406652787` na każdej stronie, bez zduplikowania;
- porównanie chronionej logiki `/api/order` i raportowania konwersji;
- kontrola responsywnych reguł CSS, mobilnej nawigacji, mobile CTA oraz obsługi klawiatury;
- kontrola treści pod kątem niepotwierdzonych opinii, ocen, adresu, licencji i danych firmy.

## Nierozwiązane elementy

Nie wykonywano testowego wysłania rzeczywistego zamówienia, ponieważ wymagałoby to działającego środowiska Cloudflare z sekretami Telegram i utworzyłoby prawdziwe zgłoszenie. Kod formularza, endpoint `/api/order` oraz warunek uruchomienia konwersji po odpowiedzi `{ok:true}` nie zostały zmienione.

## Weryfikacja PL / EN / RU

Słowniki w `assets/js/site.js` obejmują wszystkie widoczne treści pięciu nowych stron: nagłówki, opisy, listy, breadcrumbs, podsumowania usług, etapy zamówienia, ceny, FAQ, powiązane usługi, CTA i stopkę. Test w przeglądarce potwierdził zmianę treści PL → EN → RU, poprawny atrybut `lang`, zachowanie polskich canonical URL-i oraz bezstratny powrót RU → PL na każdej stronie.
