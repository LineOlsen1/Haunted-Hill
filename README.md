# Haunted Hill

Dansk studieprojekt om en fiktiv Halloweenfestival. Alle fire sider er implementeret i HTML, CSS og minimal vanilla JavaScript.

Åbn `index.html` direkte i en browser eller brug PhpStorms browserpreview. Ingen installation eller byggeproces er nødvendig. Ved deployment uploades HTML, `css/`, `js/` og `assets/` til webhotellets webrod.

## Struktur

- `index.html`: godkendt forside.
- `program.html`: aktiviteter og intensitet.
- `billetter.html`: gratis festivalområde, aktivitetsbillet, rabatter og praktisk information.
- `tilgaengelighed.html`: adgangsforhold og særlige hensyn.
- `css/style.css`: lokale fonte, farvevariabler, fælles komponenter og godkendt forsidelayout.
- `css/pages.css`: undersidernes layout og typografi; indlæses kun på de tre undersider.
- `js/main.js`: mobilmenu med Escape, klik udenfor og korrekt `aria-expanded`.
- `assets/images/`: originale eksportressourcer fra Figma.
- `assets/fonts/`: Inter, Mystery Quest og Permanent Marker med licenser.

Designreference: https://www.figma.com/design/21RdtMZZUc9GHlwD4Py9jz/Tema-3
Forsideframes: desktop `48:2`, mobil `48:3`. Mobilmenu: `195:172`.

## Bevidste afvigelser fra Figma

CTA-labels og de to tekstafsnit under rabatknappen er gendannet fra Figma. Mobilens linjeskift og desktopens fremhævelse af »ikke« er bevaret med fleksibel ombrydning ved zoom.
Formularen er deaktiveret og viser »Tilmelding er ikke tilgængelig«. Figma-sætningen om mailafsendelse vises ikke, da ingen mailservice findes. Ingen oplysninger indsamles, og ingen succesbesked vises.
Navigationen forbinder alle fire sider med lokale filstier. Ingen opdigtede destinationssider eller sociale profiler.
Hero-billedet har et mørkt overlay for at sikre kontrast bag teksten.
Forsiden bruger den originale flagermus-GIF med pauseknap og statisk første frame ved reduceret bevægelse. Undersidernes flagermus beholder deres korte CSS-animation.

## Manuel kontrol

Kontrollér ved 390 og 1440 px samt 320 px og mellemstørrelser. Brug Tab, Enter, mellemrum og Escape på menuen; kontrollér også klik udenfor, vinduesskift og browserzoom. Kontrollér synligt fokus og operativsystemets indstilling for reduceret bevægelse.

## Testlog – revision af fase 1, 4. november 2026

**Historisk testlog før gendannelsen af Figma-teksterne nedenfor.** Statusmærker og demo-CTA omtalt i denne tabel findes ikke længere.

Udført i en isoleret Chrome headless-browser på lokal `index.html`, via browserens testprotokol. Ingen nye afhængigheder. Skærmbilleder blev gennemgået visuelt.

| Test | Metode og resultat |
| --- | --- |
| Desktop 1440 px / mobil 390 px | Gennemgået fuldsidebilleder og åben mobilmenu. Billeder og lokale fonte indlæses. Synlige »Kommer snart«-tekster i header, åben mobilmenu, programmodul og footer. Ingen aktive links til manglende sider. |
| Tastatur | Desktop: Tab til Forside med synlig fokusramme. Mobil: Enter og mellemrum åbner menuen; `aria-expanded` bliver `true`; Tab når Forside. Escape lukker, sætter `false` og returnerer fokus til menuknappen. Inaktive links springes over. |
| Mobilmenu | Mus åbner, emuleret touch lukker. Klik udenfor og flytning af fokus udenfor lukker. Menuknappen måler 48 × 48 CSS-px ved normal tekststørrelse. |
| CTA | »Se rabatformularen – demo« fører til `#rabat`. Ingen afsendelse eller løfte om rabatkode. |
| Tekst 200 % | Rodens skriftstørrelse sat til 200 % ved 1440, 390 og 320 px; intet vandret overflow. Skærmbillede ved 390 px gennemgået: teksten ombrydes, siden bliver længere, intet indhold er skjult. Dette er tekstforstørrelse, ikke en test af browserens zoomfunktion. |
| Vandret overflow | Ved 320/390/1440 px var dokumentets `scrollWidth` lig `clientWidth`: 305/375/1425 px. Viewporten har en 15 px scrollbar. Samme resultat ved 200 % tekst. |
| HTML-validering | W3C Nu HTML Checker, version 26.11.4: `messages: []` – ingen fejl eller advarsler. JavaScript-syntaks kontrolleret med `node --check`. |
| Kontrast | Beregnet med sRGB-luminans: ivory/mørk lilla 16,70:1; ivory/blå 9,91:1; ivory/indholdsbaggrund 16,60:1; mørk lilla/CTA 14,19:1. Gælder også statusmærkernes tekstfarver. |
| Tekst over hero-billede | Efter overlayændringen blev baggrunden målt i skærmbilleder med hero-teksten midlertidigt skjult. Laveste kontrast i hele tekstboksen: desktop H1 6,29:1 og undertitel 5,94:1; mobil H1 4,40:1 og undertitel 5,94:1. Alle overstiger 3:1 for stor tekst; mobil-H1 er ca. 64 px, undertitel 24 px. Målingen er af tekstområderne ved normal størrelse på de to testbredder, ikke alle mulige layouts. |
| Protanopi | Chromes `protanopia`-simulation aktiveret ved 1440 og 390 px; skærmbilleder gennemgået. Tekst og synlige statusmærker kan stadig skelnes; status kræver ikke farvesyn. Simulation erstatter ikke brugertest med personer med protanopi. |
| Reduceret bevægelse | Emuleret `prefers-reduced-motion: reduce`: beregnet animation er `none`. Normal CSS: 2,4 sekunder × 2 gentagelser = 4,8 sekunder. |

**Ikke udført:** fysisk mobiltest, skærmlæsertest, andre browsere, native browserzoom og brugertest med personer med protanopi. Testene udgør ikke en fuld WCAG-audit. Undersiderne er fortsat uden for fase 1.

## Status efter fase 2

De tre undersider er bygget. Programmets »Læs mere«-knapper er native deaktiverede knapper med Figma-styling, fordi designet ikke indeholder ekstra tekst eller en destination. »Køb billet« går til billetsiden, rabat-CTA går til formularen, og »Kontakt os« går til den eksisterende kontakttekst i footeren. Ingen betaling, booking eller mailservice er oprettet.

## Kontrol efter gendannelse af Figma-tekster

Figma-formularerne `104:117` og `165:78` blev genlæst. Alle synlige udviklingsmærker er fjernet fra hjemmesiden; programknappen har igen gulgrøn baggrund.

Chrome-kontrol gentaget ved 1440, 390 og 320 px samt 200 % tekststørrelse: intet vandret overflow, billeder og fonte indlæses. Skærmbilleder ved 1440 og 390 px gennemgået. Enter, mellemrum, Tab, Escape, mus og emuleret touch virker fortsat med korrekt `aria-expanded`; reduceret bevægelse giver `animation: none`. Den aktive hero-CTA går til `#rabat`; inaktive links har ingen falske destinationer. W3C Nu-validator: ingen fejl eller advarsler. JavaScript er uændret.

## Testlog – fase 2, 4. november 2026

Figma blev genlæst via MCP: Program desktop/mobil `48:4` / `48:7`, Billetter `48:6` / `48:9` og Tilgængelighed `48:5` / `48:8`. Tekster, fonts, størrelser, billedkilder og gengivelser blev kontrolleret. Mobilens labyrintbillede har sin egen originale fil; øvrige fælles billedfiler blev sammenlignet med Figma-eksporterne. Platypi er hentet med licens til det mobilafsnit, hvor Figma bruger fonten. Forsidens CSS er uændret; HTML-differencen består kun af navigation og programlink, som nu virker.

| Udført kontrol | Resultat |
| --- | --- |
| Alle fire sider ved 390 og 1440 px | Chrome headless, fuldsidegengivelser og visuel gennemgang. Korrekt sidemarkering, én H1 pr. side, billeder og lokale fonte indlæses. Nye sider sammenholdt med de tilsvarende Figma-frames. |
| 320, 768 og 1024 px | Ingen vandret overflow på nogen side. Ved 320/390/768/1024/1440 px var `scrollWidth` lig `clientWidth`: 305/375/753/1009/1425 px; Chrome bruger 15 px til scrollbar. Layoutet ombrydes uden faste tekstbokse, som afskærer indhold. |
| 200 % tekst på alle fire sider | Rodens fontstørrelse sat til 200 % ved 390 px. Ingen vandret overflow. En for bred programknap blev fundet og rettet. Dette er ikke native browserzoom. |
| Tastatur og fokus på alle fire sider | Enter og mellemrum åbner mobilmenuen; `aria-expanded=true`. Tab flytter til Forside med synlig fokusramme. Escape lukker, sætter `false` og returnerer fokus til menuknappen. Native deaktiverede knapper springes over. |
| Mus, touch og navigation | På hver side åbner mus menuen, emuleret touch lukker. Aktivering af Program-linket fra hver side indlæser `program.html`. Alle lokale `href`, billedstier, `srcset` og ankre er desuden kontrolleret mod filerne; ingen manglende mål eller dublerede id'er. |
| HTML og JavaScript | Alle fire HTML-filer: W3C Nu HTML Checker 26.11.4, ingen fejl eller advarsler. `node --check js/main.js` bestået. |
| Kontrast | Ivory/blå 9,91:1; ivory/mørk lilla 16,70:1; mørk lilla/CTA 14,19:1; lysegul/blå 8,68:1; lysegul/mørk lilla 14,64:1; CTA-gul/blå 8,42:1. Intensitet står som tekst (HØJ/LAV), ikke kun farve. |
| Billetoverskrift over billede | Baggrunden blev målt med teksten skjult i skærmbilledet. Laveste kontrast i tekstens fulde afgrænsning: 4,68:1 ved 1440 px og 4,51:1 ved 390 px. Et lokalt mørkt overlay blev tilføjet bag mobiloverskriften. Overskrifterne er stor tekst og overstiger 3:1. Forsidens tidligere kontrollerede overlay er uændret. |
| Protanopi | Chrome-simulation aktiveret, gengivelser gemt for alle sider ved 390 og 1440 px; repræsentative mobilgengivelser af alle sider samt desktop-Program visuelt gennemgået. Tekst, intensitet og navigationsmarkering forbliver forståelige uden rød/grøn skelnen. Ingen brugertest med personer med protanopi. |
| Reduceret bevægelse | På alle sider giver emuleret `prefers-reduced-motion: reduce` `animation: none` på flagermusene. Normalt bruges højst 4,8 sekunders svajen; ingen uendelig animation er indført. |

### Bevidste begrænsninger

- Ingen reel registrering, e-mailafsendelse, betaling eller booking. Den deaktiverede rabatformular og teksten »Tilmelding er ikke tilgængelig« er genbrugt fra den godkendte forside. Figma-sætningen om, at en mail sendes, vises derfor ikke.
- Programmets tre »Læs mere«-knapper kræver ekstra indhold eller destinationssider, før de kan aktiveres. Der er ikke opfundet aktivitetssider eller ekstra tekst.
- »Kontakt os« linker til Figma-kontaktteksten, ikke til en ny formular eller en påstået fungerende mailservice. Sociale ikoner er stadig uden opdigtede profillinks.
- Figma-motionsdata for spøgelsesbilledet indeholder ingen konkrete ændringer i nøgleframes; billedet er derfor statisk. De eksisterende flagermus giver den krævede bevægelse.
- Fysisk mobil, Safari/Firefox, skærmlæser, native browserzoom og brugertest er ikke udført. Simulationerne er ikke en fuld WCAG-certificering.
- Ingen Git-initialisering og ingen deployment er foretaget.

## Typografisk ensretning – desktop som reference

Desktop-framene `48:2`, `48:4`, `48:5` og `48:6` er genlæst. Denne revision erstatter mobilens typografiske afvigelser beskrevet i tidligere testlogs; Platypi bruges ikke længere i mobilens toilettekst. De eksisterende fontfiler er bevaret.

- Inter bruges til brødtekst (400), navigation (500, aktiv side 800), knapper (600) og almindelige overskrifter (700). Tilgængelighedssidens intro bevarer desktopens vægt 600.
- Mystery Quest (400) bevares til de relevante dekorative overskrifter; Permanent Marker (400) til Programmets aktivitetstitler og afsluttende overskrift. Mobilens særskilte dekorative fonte i tilgængelighedsteksten er fjernet.
- Venstrestillede desktopafsnit er også venstrestillede på mobil: oplevelsesoverskriften, tilgængelighedssidens informationsafsnit og billetsidens intro, gruppeoverskrifter og FAQ. Hero, centrerede infobokse, adressefelt og kontaktsektion beholder deres centrering.
- Kursiv på formularnoterne og ekstra fed »ikke« bevares på mobil. Tvungne mobile linjeskift er erstattet af naturlig ombrydning. Ordlyd, store/små bogstaver, farver, billeder og funktionalitet er uændret; mobilens mindre skriftstørrelser er bevaret.

**Kontrol:** Før/efter-skærmbilleder af alle fire sider ved 1440 px er byte-identiske, med animation sat på pause via reduceret bevægelse under billedkontrollen. Alle fire mobilvisninger ved 390 px er gennemgået visuelt. Statiske billeddimensioner og tekstindhold er sammenlignet før/efter og er uændrede. Ved 320, 390 og 1440 px samt 200 % rodskriftstørrelse ved hver bredde er `scrollWidth` lig `clientWidth` på alle sider. Ved 320 px og 200 % er topudsnit også gennemgået visuelt; overskrifter ombrydes over flere linjer, og siden bliver længere. Dette er tekstforstørrelse, ikke native browserzoom. Ingen HTML- eller JavaScript-ændringer.

## Original flagermus-GIF på forsiden

Vedhæftningen havde `.png`-filnavn, men indeholdt GIF89a-data. Den er kopieret byte for byte til `assets/images/bats.gif`: 5121 × 1380 px, 101 frames, transparens og uendelig løkke på ca. 4,21 sekunder. `bats-static.gif` indeholder originalens første frame med samme lærred, palette og transparens, uden løkke.

Forsidens CSS-svajen er fjernet. GIF'en bruger Figma-størrelse og placering med automatisk højde; der vises kun ét flagermuslag bag indholdet. »Sæt flagermus på pause« skifter til første frame; »Afspil flagermus« starter GIF'en igen. Ved `prefers-reduced-motion` og uden JavaScript bruges kun den statiske fil. Undersidernes animationer er uændrede.

**Testet i Chrome ved 390 og 1440 px:** placering og gennemsigtig baggrund gennemgået visuelt, ingen vandret overflow, pauseknap mindst 44 px høj og uden overlap med hero-tekst, CTA eller navigation. Enter pauser, mellemrum starter igen, synlig fokusramme. Reduceret bevægelse skifter billedkilde til den statiske frame. Pause giver stabile skærmbilleder; animationens originalfil er bevaret uændret. Uden JavaScript indlæses den statiske frame. W3C HTML-validator: ingen fejl eller advarsler; JavaScript-syntaks bestået. Originalfilen er ca. 5,9 MB og er ikke komprimeret eller ændret.
