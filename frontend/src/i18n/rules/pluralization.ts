// src/i18n/pluralRules.ts
export function enPluralizationRules(choice: number, choicesLength: number): number {
    // English: “one” only for exactly 1, otherwise “other”
    return choice === 1 ? 0 : 1;
  }
  
  export function frPluralizationRules(choice: number, choicesLength: number): number {
    // French: “one” for 0 et 1, “other” for 2 and more
    // (cf. CLDR: singular ≤ 1, plural > 1)
    return choice <= 1 ? 0 : 1;
  }
    
  export default {
    en: enPluralizationRules,
    fr: frPluralizationRules,
  };
  