# MODELE TYPE - Site Vitrine BTP Premium

## Objectif

Creer un prototype de site vitrine premium pour artisan BTP (renovation / maconnerie generale) qui demontre la valeur d'un vrai site web professionnel. Le site doit etre duplicable via un systeme de variables centralisees et exportable vers GitHub/Vercel.

---

## Configuration par defaut

| Variable          | Valeur par defaut                |
| ----------------- | -------------------------------- |
| COMPANY_NAME      | "Batir & Renover"                |
| TRADE_TYPE        | "Renovation & Maconnerie"        |
| TRADE_DESCRIPTION | "renovation et maconnerie generale" |
| CITY              | "Aix-en-Provence"                |
| REGION            | "Bouches-du-Rhone"               |
| PHONE             | "06 12 34 56 78"                 |
| EMAIL             | "contact@batir-renover.fr"       |
| YEARS_EXPERIENCE  | "15"                             |
| ACCENT_COLOR      | Amber/Orange (warm, BTP-friendly)|

---

## Architecture des fichiers

```
lib/
  config.ts              --> Variables centralisees (nom, ville, telephone, metier, etc.)

components/
  navbar.tsx             --> Navigation fixe avec logo texte + CTA telephone
  hero.tsx               --> Section hero plein ecran avec headline benefice + CTA
  value-proposition.tsx  --> 3 blocs : Attirer / Rassurer / Convertir
  services.tsx           --> Grille des prestations proposees
  projects.tsx           --> Portfolio 3-4 projets avec images generees
  testimonials.tsx       --> Section temoignages clients (fictifs mais realistes)
  quote-form.tsx         --> Formulaire devis (demo UI, 4 champs)
  footer.tsx             --> Pied de page minimaliste

app/
  layout.tsx             --> Mise a jour meta SEO + fonts (Inter + Playfair Display)
  globals.css            --> Tokens design personnalises (palette BTP premium)
  page.tsx               --> Page principale assemblant toutes les sections
```

---

## Sections detaillees

### 1. Navbar (fixe en haut)

- Logo texte a gauche (COMPANY_NAME)
- Liens ancres : Prestations | Realisations | Devis
- Bouton CTA telephone a droite
- Effet : devient opaque au scroll (glassmorphism leger)
- Mobile : menu hamburger avec sheet/drawer

### 2. Hero (plein ecran)

**Contenu :**
- Headline benefice : "Votre projet de renovation entre les mains d'experts"
- Sous-titre : "Maconnerie generale et renovation a {CITY} et ses environs"
- 2 boutons CTA : "Demander un devis gratuit" + "Voir nos realisations"
- Badges de confiance en dessous : "{YEARS} ans d'experience" | "Devis sous 48h" | "Garantie decennale"

**Design :**
- Image de fond generee (chantier renovation premium)
- Overlay sombre pour lisibilite
- Animation fade-in au chargement

### 3. Value Proposition (3 blocs)

Trois colonnes avec icones Lucide :

| Bloc       | Icone     | Titre                              | Description                                                          |
| ---------- | --------- | ---------------------------------- | -------------------------------------------------------------------- |
| Attirer    | Target    | "Visibilite locale garantie"       | Un site pro qui vous place en premier dans les recherches locales     |
| Rassurer   | Shield    | "Confiance et credibilite"         | Photos de chantiers reels, avis clients, garanties affichees         |
| Convertir  | TrendingUp| "Demandes de devis qualifiees"     | Formulaire optimise qui transforme les visiteurs en clients concrets  |

**Design :**
- Fond muted/gris clair
- Cartes avec bordure subtile et hover lift
- Animation fade-up au scroll (Intersection Observer)

### 4. Services (grille prestations)

6 prestations en grille 2x3 (md:3 colonnes) :

1. Renovation interieure
2. Renovation exterieure
3. Maconnerie generale
4. Extension / Surelevation
5. Amenagement de combles
6. Ravalement de facade

**Design :**
- Icone + titre + courte description (2 lignes)
- Fond card, hover avec accent color border
- Animation stagger au scroll

### 5. Projects (portfolio)

3 projets fictifs avec images generees :

| Projet                           | Description                                     | Lieu          |
| -------------------------------- | ----------------------------------------------- | ------------- |
| Renovation complete maison       | Renovation totale d'une maison de ville          | Trets         |
| Extension contemporaine          | Extension 40m2 avec baie vitree                  | Aix-en-Provence|
| Ravalement facade immeuble       | Ravalement + isolation thermique exterieure       | Gardanne      |

**Design :**
- Cards avec image en haut, overlay au hover avec "Voir le projet"
- Badge localisation sur chaque carte
- Animation scale subtile au hover

### 6. Testimonials (temoignages)

3 temoignages fictifs mais realistes :

- M. et Mme Durand - Renovation cuisine - 5 etoiles
- Pierre L. - Extension maison - 5 etoiles
- Sophie M. - Ravalement facade - 5 etoiles

**Design :**
- Cards avec guillemets decoratifs
- Etoiles jaunes
- Fond blanc, cartes elevees

### 7. Quote Form (formulaire devis)

**Champs :**
1. Nom complet (input text)
2. Telephone (input tel)
3. Type de projet (select : Renovation / Maconnerie / Extension / Ravalement / Autre)
4. Description du projet (textarea)

**Elements de reassurance a cote :**
- "Reponse sous 48h"
- "Devis 100% gratuit"
- "Sans engagement"
- Numero de telephone cliquable

**Design :**
- Layout 2 colonnes (form + reassurance)
- Fond accent/warm subtil
- Bouton CTA large et visible
- Demo UI uniquement (alert de confirmation)

### 8. Footer

- Logo + slogan
- Coordonnees (adresse, telephone, email)
- Liens rapides (Prestations, Realisations, Devis)
- Mention legale : "Site prototype realise par [votre marque]"
- Copyright dynamique

---

## Design System

### Palette de couleurs (5 couleurs max)

| Token       | Role              | Valeur HSL approximative  | Rendu         |
| ----------- | ----------------- | ------------------------- | ------------- |
| primary     | Bleu fonce BTP    | 215 50% 23%               | Bleu marine   |
| accent      | Orange CTA        | 25 95% 53%                | Orange chaud  |
| background  | Blanc casse       | 40 20% 98%                | Blanc chaud   |
| foreground  | Gris anthracite   | 220 15% 15%               | Quasi-noir    |
| muted       | Gris clair fond   | 220 15% 95%               | Gris subtil   |

### Typographie (2 fonts max)

- **Headings** : Playfair Display (serif, premium, confiance)
- **Body** : Inter (sans-serif, moderne, lisible)

### Animations

- **Fade-in** : Elements hero au chargement (CSS @keyframes)
- **Fade-up** : Sections au scroll (Intersection Observer custom hook)
- **Hover lift** : Cards avec translate-y et shadow transition
- **Navbar** : Transition background au scroll
- **Scale** : Images portfolio au hover

---

## Plan d'implementation (ordre d'execution)

### Etape 1 : Fondations
1. Creer `lib/config.ts` avec toutes les variables
2. Mettre a jour `globals.css` avec la palette BTP
3. Mettre a jour `tailwind.config.ts` avec les fonts
4. Mettre a jour `layout.tsx` (fonts, meta SEO, lang="fr")

### Etape 2 : Composants
5. Creer le hook `hooks/use-scroll-animation.ts` (Intersection Observer)
6. Creer `components/navbar.tsx`
7. Creer `components/hero.tsx`
8. Creer `components/value-proposition.tsx`
9. Creer `components/services.tsx`
10. Creer `components/projects.tsx`
11. Creer `components/testimonials.tsx`
12. Creer `components/quote-form.tsx`
13. Creer `components/footer.tsx`

### Etape 3 : Images
14. Generer 1 image hero (chantier renovation premium)
15. Generer 3 images projets (renovation maison, extension, ravalement)

### Etape 4 : Assemblage
16. Assembler toutes les sections dans `app/page.tsx`
17. Verification responsive (mobile-first)

---

## Points de personnalisation pour l'outreach

Pour dupliquer ce site pour un nouveau prospect, il suffit de modifier :

1. `lib/config.ts` : nom, ville, telephone, email, type de metier
2. `globals.css` : couleur accent si besoin
3. Images : remplacer par de vraies photos du prospect
4. Temoignages : adapter les noms/projets

Temps de personnalisation estime : ~15 minutes par prospect.

---

## Challenges potentiels

1. **Performance images** : Utiliser next/image avec lazy loading pour les images generees
2. **Animations mobile** : Desactiver ou reduire les animations sur mobile (prefers-reduced-motion)
3. **SEO francais** : Accents dans les meta tags, lang="fr" dans le HTML
4. **Responsive** : Le formulaire 2 colonnes doit passer en 1 colonne sur mobile

---

## Criteres de qualite

- [ ] Le site se charge en moins de 3 secondes
- [ ] Toutes les sections sont visibles sur mobile sans scroll horizontal
- [ ] Les CTA sont visibles sans scroller (above the fold)
- [ ] Le formulaire est utilisable sur mobile
- [ ] Les animations ne genent pas la navigation
- [ ] Le systeme de variables fonctionne (changer config.ts change tout le site)
- [ ] Le site ressemble a un vrai site professionnel, pas un template generique
