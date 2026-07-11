// National Merit Selection Index cutoffs — reference data (2026-07-02).
//
// The National Merit Scholarship Program uses the "Selection Index" (SI) from
// the PSAT/NMSQT: SI = 2 × (Reading & Writing test score + Math test score),
// ranging 48–228. Students see this number on their official score report.
//
// Two thresholds matter:
//   • Commended — a single NATIONAL cutoff (top ~50,000 scorers). Below the
//     Semifinalist cutoff but at/above Commended = "Commended Student".
//   • Semifinalist — a PER-STATE cutoff (top ~16,000, allocated by state).
//     Semifinalists advance toward Finalist / scholarships.
//
// ⚠️ IMPORTANT: these are the most recently reported class (Class of 2026 —
// students who took the PSAT/NMSQT in Oct 2024). NMSC does NOT publish official
// cutoffs; the figures below are the community-reported consensus (compiled by
// tutoring orgs from confirmed Semifinalist reports) and vary by ±1–2 points
// year to year. They are a projection tool ONLY — official Semifinalist status
// is determined solely by NMSC. Refresh when the next class's numbers settle.
// Sourced 2026-07-02 from published Class of 2026 state-cutoff tables.
//
// Ported verbatim from the EduVerseJr app (frontend/src/data/nationalMeritCutoffs.js)
// so the public marketing calculator and the in-app calculator stay in sync.
export const CUTOFF_CLASS_LABEL = 'Class of 2026 (Oct 2024 PSAT/NMSQT)'

// National Commended cutoff (Selection Index). Class of 2026 = 210.
export const COMMENDED_SI = 210

// Per-state Semifinalist Selection Index cutoffs (Class of 2026).
// Key = USPS state code; value = SI needed for Semifinalist.
export const SEMIFINALIST_CUTOFFS = {
  AL: 214, AK: 215, AZ: 218, AR: 215, CA: 224, CO: 219, CT: 223, DE: 220,
  DC: 225, FL: 219, GA: 220, HI: 219, ID: 215, IL: 222, IN: 218, IA: 214,
  KS: 216, KY: 214, LA: 216, ME: 217, MD: 224, MA: 225, MI: 220, MN: 219,
  MS: 213, MO: 217, MT: 213, NE: 214, NV: 214, NH: 219, NJ: 225, NM: 210,
  NY: 223, NC: 220, ND: 210, OH: 219, OK: 212, OR: 219, PA: 221, RI: 219,
  SC: 215, SD: 211, TN: 219, TX: 222, UT: 213, VT: 216, VA: 224, WA: 224,
  WV: 210, WI: 215, WY: 210,
}

// Display names for the state picker (sorted alphabetically by name).
export const STATES = [
  ['AL', 'Alabama'], ['AK', 'Alaska'], ['AZ', 'Arizona'], ['AR', 'Arkansas'],
  ['CA', 'California'], ['CO', 'Colorado'], ['CT', 'Connecticut'],
  ['DE', 'Delaware'], ['DC', 'District of Columbia'], ['FL', 'Florida'],
  ['GA', 'Georgia'], ['HI', 'Hawaii'], ['ID', 'Idaho'], ['IL', 'Illinois'],
  ['IN', 'Indiana'], ['IA', 'Iowa'], ['KS', 'Kansas'], ['KY', 'Kentucky'],
  ['LA', 'Louisiana'], ['ME', 'Maine'], ['MD', 'Maryland'],
  ['MA', 'Massachusetts'], ['MI', 'Michigan'], ['MN', 'Minnesota'],
  ['MS', 'Mississippi'], ['MO', 'Missouri'], ['MT', 'Montana'],
  ['NE', 'Nebraska'], ['NV', 'Nevada'], ['NH', 'New Hampshire'],
  ['NJ', 'New Jersey'], ['NM', 'New Mexico'], ['NY', 'New York'],
  ['NC', 'North Carolina'], ['ND', 'North Dakota'], ['OH', 'Ohio'],
  ['OK', 'Oklahoma'], ['OR', 'Oregon'], ['PA', 'Pennsylvania'],
  ['RI', 'Rhode Island'], ['SC', 'South Carolina'], ['SD', 'South Dakota'],
  ['TN', 'Tennessee'], ['TX', 'Texas'], ['UT', 'Utah'], ['VT', 'Vermont'],
  ['VA', 'Virginia'], ['WA', 'Washington'], ['WV', 'West Virginia'],
  ['WI', 'Wisconsin'], ['WY', 'Wyoming'],
]

// Border width (SI points) around a cutoff we treat as "too close to call".
export const BORDERLINE_BAND = 2

// Classify a Selection Index against the national + state thresholds.
// Returns { level, tone, headline, detail }.
export function classifySelectionIndex(si, stateCode) {
  const stateCut = SEMIFINALIST_CUTOFFS[stateCode]
  if (stateCut == null) {
    return {
      level: 'unknown',
      tone: 'gray',
      headline: 'Pick your state to see your standing',
      detail: 'Semifinalist cutoffs are set per state.',
    }
  }
  if (si >= stateCut + BORDERLINE_BAND) {
    return {
      level: 'semifinalist',
      tone: 'green',
      headline: 'On track for Semifinalist 🎉',
      detail: `Your index (${si}) is comfortably above ${stateCode}'s estimated Semifinalist cutoff (~${stateCut}).`,
    }
  }
  if (si >= stateCut - BORDERLINE_BAND) {
    return {
      level: 'borderline-semi',
      tone: 'amber',
      headline: 'Right on the Semifinalist bubble',
      detail: `Your index (${si}) is within a couple of points of ${stateCode}'s estimated cutoff (~${stateCut}). Cutoffs shift ±1–2 pts yearly, so this could go either way.`,
    }
  }
  if (si >= COMMENDED_SI) {
    return {
      level: 'commended',
      tone: 'blue',
      headline: 'On track for Commended Student',
      detail: `Your index (${si}) is at/above the national Commended cutoff (~${COMMENDED_SI}) but below ${stateCode}'s Semifinalist estimate (~${stateCut}).`,
    }
  }
  return {
    level: 'below',
    tone: 'gray',
    headline: 'Below the recognition cutoffs',
    detail: `Your index (${si}) is below the national Commended cutoff (~${COMMENDED_SI}). Keep drilling — a few more questions right can move the index several points.`,
  }
}
