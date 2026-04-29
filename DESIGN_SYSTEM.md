# Design System

## Lokalizacja tokenow

Globalne tokeny sa w `src/app/tokens.css`. Tam zmieniaj kolory, spacing, radiusy, cienie, typografie i limity layoutu dla calego projektu.

Warstwy CSS:

- `src/app/tokens.css` - zmienne globalne.
- `src/app/primitives.css` - najnizsze prymitywy layoutu: container, section, grid, stack.
- `src/app/components.css` - style komponentow `ui-*`.
- `src/app/globals.css` - reset, tlo strony i globalne zachowanie hero.

## Komponenty

Komponenty bazowe sa w `src/components/ui`:

- `PageShell` - wrapper strony z headerem, main i opcjonalnym footerem.
- `Container` - standardowa szerokosc contentu.
- `SectionCard` - ramka sekcji, warianty `default`, `hero`, `compact`, opcjonalnie `muted`.
- `SectionHeader` - kicker, tytul, opis i support copy.
- `FeatureCard` - karta z tytulem, opisem, lista lub ikona.
- `CheckList` - lista punktow z ikonami check.
- `ProcessSteps` - numerowana lista krokow.
- `Button` - link albo button w wariantach `primary`, `secondary`, `ghost`.
- `LeadForm` - grid formularza i obszar akcji.
- `FormField` - label, kontrolka i opcjonalny error.
- `FAQAccordion` - lista `details/summary`.
- `TestimonialCard` - cytaty i opinie.

Komponenty wspolne poza `ui`:

- `SiteHeader` - header strony oparty o `Container` i `Button`.
- `AnchorScrollManager` - obsluga scrollowania do anchorow z wysokoscia headera.

## Przyklady

Sekcja z kartami:

```tsx
<section className="ui-section" id="zakres">
  <Container>
    <SectionCard muted>
      <div className="ui-stack-section">
        <SectionHeader
          kicker="Zakres"
          title="Co obejmuje usluga?"
          description="Krotki opis sekcji."
        />
        <div className="ui-grid-3">
          {cards.map((card) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
              list={<CheckList compact items={card.items} />}
              variant={card.variant}
            />
          ))}
        </div>
      </div>
    </SectionCard>
  </Container>
</section>
```

Formularz:

```tsx
<div className="ui-form-shell">
  <LeadForm
    action="#"
    method="post"
    actions={<Button type="submit">Wyslij</Button>}
    support="Krotka informacja pod formularzem."
  >
    <FormField label="Telefon">
      <input className="ui-form-field__control" name="telefon" type="tel" required />
    </FormField>
  </LeadForm>
</div>
```

FAQ:

```tsx
<FAQAccordion items={[{ question: "Pytanie?", answer: "Odpowiedz." }]} />
```

## Zasady tworzenia nowych sekcji

1. Sekcja powinna zaczynac sie od `section.ui-section`, `Container`, `SectionCard` i `ui-stack-section`.
2. Naglowek sekcji buduj przez `SectionHeader`, nie przez lokalne klasy.
3. Karty tworz przez `FeatureCard`, listy przez `CheckList`, procesy przez `ProcessSteps`.
4. CTA tworz przez `Button` w `ui-cluster`.
5. Dane sekcji trzymaj w tablicach obiektow, a JSX ogranicz do mapowania danych.
6. Nie dodawaj lokalnych kolorow, cieni, radiusow ani spacingow. Najpierw sprawdz token w `tokens.css`.

## Zasady dodawania landing pages

1. Strona powinna byc oparta o `PageShell` i `SiteHeader`.
2. Nawigacja, hero, sekcje, FAQ i formularz powinny wynikac z konfiguracji strony.
3. Nowy powtarzalny pattern dodawaj do `src/components/ui` tylko wtedy, gdy pojawia sie na wiecej niz jednej stronie albo wyraznie upraszcza JSX.
4. Sekcje uslugowe moga miec lokalne helpery mapujace dane, ale helper nie powinien trzymac tekstow konkretnej strony w komponencie bazowym.
5. Przy trzeciej podstronie warto wydzielic wspolny `ServiceSection`, `CardsGrid` i `PricingTable` z obecnej strony uslugowej do `src/components/ui` albo `src/components/sections`.

## Gdzie zmieniac globalny wyglad

- Kolory: `src/app/tokens.css`, grupa `Colors`.
- Spacing: `src/app/tokens.css`, grupa `Spacing`.
- Radiusy: `src/app/tokens.css`, grupa `Radius`.
- Cienie: `src/app/tokens.css`, grupa `Shadows`.
- Typografia: `src/app/tokens.css`, grupa `Typography`, oraz fonty w `src/app/layout.tsx`.
- Szerokosci layoutu: `src/app/tokens.css`, grupa `Layout`.
