/**
 * Mira skincare knowledge base — educational guidance only.
 */
window.MiraKnowledge = {
  welcome:
    "Hi, I'm Mira—your skincare expert agent. Tell me your skin type, a concern, or an ingredient question, and I'll suggest a clear, gentle plan.",

  topics: [
    {
      id: "dry",
      keywords: [
        "dry",
        "flaky",
        "flake",
        "tight",
        "dehydrated",
        "winter",
        "moisture",
        "moisturizer",
      ],
      reply: {
        lead:
          "For dry or flaky skin, barrier repair comes before strong actives. Think cream cleanser, humectants, then a richer seal.",
        points: [
          "AM: gentle cream cleanser (or rinse) → hydrating serum with hyaluronic acid or glycerin → moisturizer → broad-spectrum SPF 30+.",
          "PM: cream cleanser → optional niacinamide or a mild lactic acid 1–2×/week → ceramide-rich moisturizer; add a thin occlusive (petrolatum or balm) on the driest zones.",
          "Pause retinoids, strong acids, and fragrance until tightness and flaking ease for about a week.",
          "Warm (not hot) water, and introduce only one new product at a time.",
        ],
      },
    },
    {
      id: "acne",
      keywords: [
        "acne",
        "breakout",
        "pimple",
        "hormonal",
        "chin",
        "jaw",
        "clogged",
        "blackhead",
      ],
      reply: {
        lead:
          "For chin and jaw breakouts, consistency beats harsh scrubbing. Keep the routine short and non-stripping.",
        points: [
          "AM: gentle gel or cream cleanser → niacinamide if tolerated → lightweight moisturizer → SPF (mineral or non-comedogenic chemical).",
          "PM: cleanser → benzoyl peroxide 2.5–5% or adapalene (start every other night) → moisturizer to buffer dryness.",
          "Spot-treat inflamed bumps; avoid picking. Don't stack benzoyl peroxide and a retinoid in the same step at first.",
          "If cysts are painful, sudden, or scarring, a dermatologist can help faster than OTC alone.",
        ],
      },
    },
    {
      id: "sensitive",
      keywords: [
        "sensitive",
        "sting",
        "stinging",
        "irritat",
        "redness",
        "reactive",
        "burn",
        "allergy",
      ],
      reply: {
        lead:
          "Sensitive skin usually needs fewer products and a longer calm-down period before actives return.",
        points: [
          "Strip back to: fragrance-free cleanser → bland moisturizer → mineral SPF (zinc oxide) by day.",
          "Look for ceramides, panthenol, squalane, and centella; skip essential oils, menthol, and high alcohol.",
          "Reintroduce one active after 2+ calm weeks—start with niacinamide or azelaic acid before retinoids or AHAs.",
          "Patch-test new products on the jawline for a few nights. Persistent burning, swelling, or rash needs clinical care.",
        ],
      },
    },
    {
      id: "oily",
      keywords: [
        "oily",
        "oil",
        "shiny",
        "shine",
        "greasy",
        "sebum",
        "midday",
        "combination",
      ],
      reply: {
        lead:
          "Oily or combination skin often still needs water—stripping oil can increase shine and dehydration.",
        points: [
          "AM: gentle foaming or gel cleanser → lightweight humectant → gel-cream moisturizer → matte or fluid SPF.",
          "PM: cleanser → niacinamide and/or salicylic acid (BHA) a few nights a week → gel moisturizer.",
          "Blotting papers beat stacking powder all day. Avoid harsh scrubs and alcohol toners that leave skin tight then greasy.",
          "If you're oily and dehydrated, keep hyaluronic acid or glycerin under a light moisturizer every day.",
        ],
      },
    },
    {
      id: "dull",
      keywords: [
        "dull",
        "glow",
        "uneven",
        "bright",
        "brightness",
        "tone",
        "dark spot",
        "pigment",
        "texture",
      ],
      reply: {
        lead:
          "Glow usually comes from hydration, sunscreen, and one well-tolerated brightening step—not from over-exfoliating.",
        points: [
          "Daily SPF is non-negotiable for evening tone and preventing new dark spots.",
          "Add vitamin C in the morning or azelaic acid / gentle AHA a few evenings a week—not all at once.",
          "Keep a simple moisturizing base so the barrier stays intact; irritated skin looks duller.",
          "Sleep, gentle cleansing, and consistency for 6–8 weeks matter more than rotating many serums.",
        ],
      },
    },
    {
      id: "aging",
      keywords: [
        "aging",
        "wrinkle",
        "fine line",
        "anti-aging",
        "firm",
        "collagen",
        "retinol",
        "retinoid",
        "mature",
      ],
      reply: {
        lead:
          "For aging concerns, sunscreen plus a slow retinoid ramp is still the highest-evidence core.",
        points: [
          "AM: antioxidant (optional vitamin C) → moisturizer → SPF 30+ every day outdoors.",
          "PM: cleanser → moisturizer sandwich around retinol/adapalene—start 1–2 nights weekly, then build.",
          "Support with ceramides and peptides if you like; they comfort more than they replace retinoids or SPF.",
          "Expect adjustment dryness; if peeling is harsh, buffer more and slow down rather than quitting entirely.",
        ],
      },
    },
    {
      id: "actives",
      keywords: [
        "vitamin c",
        "vit c",
        "ascorbic",
        "layer",
        "layering",
        "together",
        "niacinamide",
        "aha",
        "bha",
        "exfoliat",
        "serum",
        "ingredient",
        "active",
      ],
      reply: {
        lead:
          "Layering works best when you separate strong actives by time of day and watch for irritation—not when you stack everything nightly.",
        points: [
          "Common split: vitamin C in the morning under SPF; retinoid at night.",
          "Niacinamide plays well with most routines and can sit AM or PM.",
          "Don't combine retinoids with strong AHAs/BHAs on the same night when you're starting out.",
          "Order rule of thumb: thinnest to thickest after cleansing; wait a minute if a product pills.",
          "If using retinol and vitamin C, separate AM/PM first—advanced same-routine stacking is optional, not required.",
        ],
      },
    },
    {
      id: "routine",
      keywords: [
        "routine",
        "order",
        "steps",
        "beginner",
        "start",
        "basic",
        "simple",
      ],
      reply: {
        lead:
          "A strong beginner routine is short: cleanse, moisturize, protect—then add one active when that's easy.",
        points: [
          "AM: cleanse (or water) → moisturizer → SPF.",
          "PM: cleanse → moisturizer; add one active (retinoid, BHA, or azelaic) after two comfortable weeks.",
          "More steps are optional. If skin is calm, you're winning.",
          "Tell me a concern (acne, dryness, sensitivity, dullness) and I'll tailor the next add-on.",
        ],
      },
    },
  ],

  fallback: {
    lead:
      "I can help with dryness, acne, sensitivity, oiliness, dullness, aging, routines, and ingredient layering.",
    points: [
      "Share your skin type (dry, oily, combination, sensitive) and your top concern.",
      "Mention what you already use—cleanser, moisturizer, SPF, actives—so I can simplify rather than pile on.",
      "If you have pain, infection, sudden rashes, or scarring acne, please see a clinician.",
    ],
  },
};

/**
 * Match user text to the best knowledge topic.
 * @param {string} text
 * @returns {{ id: string, reply: { lead: string, points: string[] } }}
 */
window.miraMatchTopic = function miraMatchTopic(text) {
  const normalized = String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9+\s]/g, " ");

  let best = null;
  let bestScore = 0;

  for (const topic of window.MiraKnowledge.topics) {
    let score = 0;
    for (const keyword of topic.keywords) {
      if (normalized.includes(keyword)) {
        score += keyword.length > 6 ? 2 : 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = topic;
    }
  }

  if (!best || bestScore === 0) {
    return { id: "fallback", reply: window.MiraKnowledge.fallback };
  }

  return { id: best.id, reply: best.reply };
};
