#!/usr/bin/env node
/**
 * Fix Translations Script
 * 
 * This script fixes the truncated translations.ts file by:
 * 1. Reading the current file
 * 2. Finding where it's truncated
 * 3. Adding the missing sections
 * 4. Adding the useTranslation hook
 * 5. Writing the complete file back
 */

const fs = require('fs');
const path = require('path');

// Path to the translations file
const translationsFilePath = path.join(__dirname, '..', 'lib', 'translations.ts');

// Backup the original file
const backupFilePath = translationsFilePath + '.backup';
console.log(`Creating backup at ${backupFilePath}`);
fs.copyFileSync(translationsFilePath, backupFilePath);

// Read the current file
console.log('Reading translations file...');
let content = fs.readFileSync(translationsFilePath, 'utf8');

// Check if the file is truncated in the Dutch contact section
const truncationPoint = content.indexOf('phone: "Telefoon",');
if (truncationPoint === -1) {
  console.error('Could not find truncation point. The file might already be fixed.');
  process.exit(1);
}

// Get the content up to the truncation point (plus the line itself)
const baseContent = content.substring(0, truncationPoint + 'phone: "Telefoon",'.length);

// Missing Dutch translations to append
const missingDutchContent = `
      quickResponse: "Snel antwoord? Stuur ons een WhatsAppje",
      responseTime: "We reageren meestal binnen 24 uur op werkdagen.",
      thankYouTitle: "Dank je wel!",
      sendAnother: "Verstuur nog een bericht",
      namePlaceholder: "Jan Jansen",
      emailPlaceholder: "jan@example.com",
      agePlaceholder: "3 jaar",
      messagePlaceholder: "Ik wil graag meer weten over…",
      processing: "Verwerken...",
      whatsappButton: "Chat op WhatsApp",
      whatsappMessage: "Hoi Teddy Kids! Ik wil graag een rondleiding boeken voor mijn kind.",
      formName: "Jouw Naam",
      formEmail: "E-mailadres",
      formChildAge: "Leeftijd van je kind",
      formMessage: "Jouw Bericht",
      formSubmit: "Verstuur Bericht",
      thankYou: "Dank je wel! We nemen snel contact op."
    },
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // APIE'S PLAYGROUND
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    apiePlayground: {
      /* ───── Header ───── */
      title: "Appies Speelhoek",
      subtitle: "Welkom in Appies geheime bananenparadijs! Kleur, speel en geniet!",

      /* ───── Sound Button ───── */
      playSound: "Laat de jungle brullen!",

      /* ───── Coloring UI ───── */
      coloringTitle: "Tijd om te kleuren!",
      clearColors: "Alles wissen",

      /* ───── Banana Puns ───── */
      punsTitle: "Bananengrappen",
      defaultJoke: "Waarom ging de banaan naar de dokter? Omdat hij zich niet goed schilde!",
      anotherJoke: "Vertel me nog een bananengrapje!",

      /* ───── Fun Activities ───── */
      activitiesTitle: "Leuke dingen om te doen",

      bananaDance: {
        title: "Bananendans",
        intro: "Volg deze stappen voor de bananendans:",
        steps: [
          "Sta rechtop als een banaan",
          "Buig naar links, als een kromme banaan",
          "Buig naar rechts, nog krommer!",
          "Draai rond en pel jezelf!",
          "Spring omhoog en roep: 'BANAAN!'"
        ]
      },

      /* ───── Monkey See, Monkey Do ───── */
      monkeySee: {
        title: "Aapjes nadoen!",
        subtitle: "Kun jij deze dieren nadoen?",
        animals: [
          "🐒 Aap: Maak aapgeluiden en krab aan je hoofd",
          "🦁 Leeuw: Brul hard en laat je klauwen zien",
          "🐘 Olifant: Maak van je arm een slurf en toeter!",
          "🦒 Giraf: Strek je nek zo hoog als je kunt",
          "🐸 Kikker: Spring rond en zeg 'kwak kwak'"
        ]
      },

      /* ───── Footer CTA ───── */
      backCTA: "Terug naar Teddy Kids"
    },
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // FOOTER
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    footer: {
      copyright: "© 2024 Teddy Kids. Alle rechten voorbehouden.",
      privacy: "Privacybeleid",
      terms: "Servicevoorwaarden",
      careers: "Vacatures",
      followUs: "Volg Ons"
    },
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // ABOUT PAGE
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    about: {
      metadata: {
        title: "Over Ons | Teddy Kids",
        description: "Ontdek de missie, geschiedenis en visie van Teddy Kids voor tweetalige kinderopvang en internationaal onderwijs sinds 2004.",
        keywords: "teddy kids geschiedenis, teddy kids missie, kinderopvang leiden, internationale school geschiedenis, tisa verhaal, tweetalig onderwijs nederland",
        alt: "Over Teddy Kids - Onze Missie en Visie"
      },
      hero: {
        title: "Waarom Teddy Kids Bestaat",
        subtitle: "We bouwden niet zomaar een kinderdagverblijf. We bouwden wat we zelf als kind hadden willen hebben.",
        imageAlt: "Kinderen bij Teddy Kids"
      },
      mission: {
        title: "Onze Missie",
        paragraph1: "Bij Teddy Kids geloven we dat ieder kind een omgeving verdient waar natuurlijke nieuwsgierigheid en leerplezier kunnen bloeien. Onze missie is het vormen van wereldburgers door tweetalig onderwijs, spelend leren en cultureel bewustzijn.",
        paragraph2: "We creëren ruimtes waar kinderen zelfvertrouwen ontwikkelen in meerdere talen, betekenisvolle relaties opbouwen en vaardigheden verwerven om te gedijen in onze onderling verbonden wereld.",
        paragraph3: "Met onze unieke aanpak helpen we kinderen om meelevende, creatieve en kritische denkers te worden die een betere toekomst zullen vormgeven."
      },
      journey: {
        title: "Onze Reis",
        timeline: {
          item2004: {
            year: "2004",
            title: "Teddy Kids opent in Leiden",
            description: "Onze eerste locatie opent met slechts 15 kinderen en een visie voor tweetalige zorg die het vroege onderwijs in Nederland zou veranderen."
          },
          item2010: {
            year: "2010",
            title: "Uitbreiding naar 3e locatie",
            description: "Groeiende vraag leidt tot onze derde locatie, waarbij onze unieke benadering van tweetalig onderwijs erkenning krijgt in de hele regio."
          },
          item2022: {
            year: "2022",
            title: "Lancering van TISA",
            description: "The Teddy International School of Arts (TISA) opent haar deuren en breidt onze tweetalige aanpak uit naar primair onderwijs."
          },
          item2023: {
            year: "2023",
            title: "TISA Portugal",
            description: "Onze internationale visie groeit met de opening van onze eerste locatie buiten Nederland, waarmee we onze aanpak naar Lissabon brengen."
          },
          item2024: {
            year: "2024",
            title: "20 Jaar Teddy Kids",
            description: "We vieren twee decennia van het vormen van wereldburgers, waarbij meer dan 10.000 kinderen hun educatieve reis bij ons zijn begonnen."
          }
        }
      },
      future: {
        title: "Onze Toekomst",
        paragraph1: "We zien een wereld voor ons waarin de kindertijd wordt beschermd, nieuwsgierigheid wordt begeleid, en elk kind opgroeit in de overtuiging dat het kan leiden.",
        paragraph2: "In de komende jaren blijven we onze aanpak uitbreiden naar meer gemeenschappen, waarbij we tweetalig onderwijs en ons waardengerichte curriculum naar kinderen in heel Europa en daarbuiten brengen.",
        paragraph3: "We zetten ons in voor:",
        bulletPoints: [
          "Het behouden van de magie van de kindertijd in een steeds digitalere wereld",
          "Het ontwikkelen van innovatieve benaderingen voor taalverwerving",
          "Het bouwen van bruggen tussen culturen door onderwijs",
          "Het creëren van duurzame leeromgevingen die verwondering opwekken",
          "Het versterken van opvoeders die onze passie voor de kindertijd delen"
        ],
        paragraph4: "Samen met families, opvoeders en gemeenschappen vormen we een toekomst waarin elk kind de kans heeft om zijn beste zelf te worden."
      },
      legacy: {
        title: "Twee decennia waarin we de kindertijd behandelen als iets heiligs",
        subtitle: "In een wereld die kinderen steeds sneller wil maken, kozen wij ervoor om de tijd te vertragen. Teddy Kids was nooit zomaar een opvang. Het was vanaf dag één een verklaring: Dat de kindertijd heilig is. Dat zorg ook slim en doordacht kan zijn. Dat tweetaligheid geen trucje is — maar een sleutel. En dat kinderen meer verdienen dan alleen veiligheid — ze verdienen verwondering.",
        timeline: [
          {
            year: "2004–2008",
            text: "Drie groepen. Eén missie. Een plek bouwen waar kinderen gezien, gehoord en gekoesterd worden. Geen schermen. Geen haast. Alleen oprechte aandacht.",
            color: "brand-pink"
          },
          {
            year: "2010",
            text: "Onze tweede locatie opende, met focus op ZML. Niet omdat het makkelijk was. Maar omdat het belangrijk was.",
            color: "brand-yellow"
          },
          {
            year: "2014",
            text: "RBW ging open… met een olifant. Letterlijk. Want magie bestaat echt als je vier jaar oud bent. (En ja — de gemeente zei: 'nooit meer.')",
            color: "brand-mint"
          },
          {
            year: "2018",
            text: "We droomden van een kindercafé. De vergunning was binnen, de ideeën leefden… Toen kwam COVID. Maar zelfs stilgezette dromen laten sporen na.",
            color: "brand-purple"
          },
          {
            year: "2020",
            text: "RB3 opende — midden in wereldwijde onzekerheid. Want de kindertijd wacht niet.",
            color: "brand-pink"
          },
          {
            year: "2022",
            text: "TISA werd geboren. Teddy groeide op — en kreeg een school die bij zijn waarden past: Theodore International Start-up Academy. Niet zomaar onderwijs. Verheffing.",
            color: "brand-yellow"
          },
          {
            year: "2023",
            text: "TISA Portugal opende. Eén stempel dichter bij het opvoeden van écht wereldburgers.",
            color: "brand-mint"
          },
          {
            year: "2024",
            text: "20 jaar Teddy. RB5 opende zijn deuren. En één waarheid klinkt luider dan ooit: Je kunt de kindertijd niet uitbesteden. Je moet haar zelf bouwen.",
            color: "brand-purple"
          },
          {
            year: "2025",
            text: "De reis gaat door. Nieuwe dromen, nieuwe locaties, dezelfde onwrikbare toewijding aan de kindertijd.",
            color: "brand-pink"
          }
        ]
      },
      vision: {
        title: "Onze Visie",
        subtitle: "We zijn hier niet om middelmatigheid te schalen. We zijn hier om te beschermen wat onvervangbaar is — want de kindertijd gebeurt maar één keer.",
        promises: [
          { icon: "🕯️", text: "We beschermen nieuwsgierigheid als een vlammetje." },
          { icon: "✨", text: "We bewaren magie op plekken waar schermen het willen stelen." },
          { icon: "🌍", text: "We onderwijzen taal niet als vak — maar als paspoort voor de ziel." },
          { icon: "🏡", text: "We bouwen ruimtes die aanvoelen als thuis, maar denken als een school." },
          { icon: "🎯", text: "We houden onze standaarden onmogelijk hoog — omdat jouw kind dat waard is." }
        ],
        closing: "Jij bracht een kind in deze wereld. Wij zijn er om dat kind te laten bloeien."
      },
      team: {
        title: "De Mensen Achter Teddy Kids",
        subtitle: "Ons betrokken team brengt diverse expertise en een gedeelde toewijding aan kinderopvoeding samen.",
        buttonText: "Ontmoet Ons Volledige Team"
      },
      policyReports: {
        title: "Beleid & Rapporten",
        description: "Onze toewijding aan transparantie en verantwoordelijkheid komt tot uiting in onze uitgebreide documentatie.",
        buttonText: "Bekijk alle documenten"
      },
      policy: {
        hero: {
          title: "Onze beleidsdocumenten & rapporten",
          subtitle: "Transparantie, verantwoordelijkheid en voortdurende verbetering leiden alles wat we doen.",
          imageAlt: "Beleidsdocumenten en rapporten"
        },
        intro: {
          title: "Uw vertrouwen, onze verantwoordelijkheid",
          description: "Bij Teddy Kids begint uitstekende kinderopvang met duidelijke beleidslijnen en open communicatie. Hier vindt u al onze officiële documenten, inspectierapporten en richtlijnen die de veiligheid, ontwikkeling en het geluk van uw kind waarborgen."
        },
        documents: {
          title: "Beleidsdocumenten",
          description: "Onze uitgebreide beleidsstukken die alle aspecten van zorg en educatie behandelen."
        },
        ggdReports: {
          title: "GGD Inspectierapporten",
          description: "Officiële inspectierapporten van de GGD.",
          downloadReport: "Download GGD-rapport"
        },
        quality: {
          title: "Kwaliteit & Veiligheid",
          description: "Protocollen en procedures die de hoogste kwaliteitsnormen garanderen."
        },
        privacy: {
          title: "Privacy & AVG",
          description: "Hoe wij persoonsgegevens beschermen en verwerken in overeenstemming met de AVG.",
          comingSoon: "Privacybeleid binnenkort beschikbaar — het volledige document kan hier worden gedownload.",
          downloadLink: "Download Privacybeleid (NL/EN)"
        },
        additional: {
          title: "Overige Documenten",
          incidentForm: "Incidentenmeldingsformulier (NL)",
          vogSample: "Voorbeeld VOG (NL)"
        },
        helpTitle: "Hulp nodig bij het vinden van iets?",
        helpCta: "Kunt u niet vinden wat u zoekt? Stuur ons een bericht.",
        downloadReport: "Download Rapport"
      }
    }
  } // end of nl
}; // end of translations

/**
 * Hook that returns a translation helper \`t\`.
 *
 * Usage:
 * const { t } = useTranslation('en');
 * t('hero.title') -> "From Baby Steps to Global Citizens"
 */
export const useTranslation = (language: Language = 'en') => {
  const t = useCallback(
    (key: string): any => {
      const keys = key.split('.');
      let value: any = translations[language];

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          // Return the key itself if translation is missing to avoid runtime errors
          return key;
        }
      }

      return value;
    },
    [language]
  );

  return { t, language };
};
`;

// Combine the base content with the missing content
const completeContent = baseContent + missingDutchContent;

// Write the complete file
console.log('Writing fixed translations file...');
fs.writeFileSync(translationsFilePath, completeContent);

console.log('✅ Translations file fixed successfully!');
console.log(`Original file backed up at: ${backupFilePath}`);
