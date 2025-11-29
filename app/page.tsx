import { TemplateCard } from "@/components/TemplateCard";

const foundations = [
  {
    title: "Hook Formula",
    points: [
      "Lead with a quantifiable promise or bold statement tied to your Zerodha clone build.",
      "Reference a real-world trading pain Zerodha solved to trigger curiosity.",
      "Tease the deliverable (demo, code drop, teardown) inside the first two sentences."
    ]
  },
  {
    title: "Body Rhythm",
    points: [
      "Stack short, skimmable sentences with deliberate line breaks.",
      "Anchor every insight to a tangible asset (screenshot, metric, commit).",
      "Close with a question that invites operators to weigh in."
    ]
  },
  {
    title: "Credibility Cues",
    points: [
      "Mention concrete results after each sprint (latency drop, UX win, API stat).",
      "Reference community feedback, user interviews, or mentor input.",
      "Highlight process depth: architecture choices, testing strategy, automation."
    ]
  }
];

const templates = [
  {
    id: "episode-zero",
    theme: "Series Kickoff",
    goal: "Launch Episode 0 of the Zerodha Clone build series",
    hook:
      "Rebuilding the Zerodha trading experience from a blank Next.js canvas. Here is the roadmap before I ship a single line of code.",
    structure: [
      "Immediate promise linked to the trading audience",
      "Proof you studied the original product deeply",
      "Preview of the learning journey readers can binge"
    ],
    body: [
      "Five years of Zerodha UX notes distilled into a hands-on clone challenge.",
      "Scope: responsive dashboard, broker-grade order flows, live market data feel without relying on private APIs.",
      "Constraints: ship production-ready components every 72 hours, with a post-mortem in this feed.",
      "Artifacts you can expect: architecture diagrams, component kits, breakdown of growth loops Zerodha nails."
    ],
    hashtags: [
      "ZerodhaClone",
      "BuildInPublic",
      "Nextjs",
      "TradingTech",
      "ProductDesign",
      "WebDevSeries"
    ],
    cta: "Drop a follow to catch Episode 1 tomorrow where I wireframe the onboarding flow and share the Figma kit."
  },
  {
    id: "wireframe-drop",
    theme: "UX Teardown",
    goal: "Share wireframes and learning after studying Zerodha onboarding",
    hook:
      "Zerodha turns a complex KYC journey into a four-minute win. Here is how I reverse engineered the flow for my clone.",
    structure: [
      "Pain point from first principles",
      "Screenshot or artifact callout",
      "Learning distilled into a reusable tactic"
    ],
    body: [
      "Problem: trading apps lose 40 percent of signups before the first trade because KYC feels like legal homework.",
      "What I stole: reduce steps from 11 to 4 screens, prime the next action with a trust cue (SEBI badge, support micro-copy).",
      "Net new twist in my build: context aware progress meter that swaps copy based on PAN OCR success.",
      "Shipping plan: Figma files in comments, full React implementation drops in the GitHub repo tonight."
    ],
    hashtags: [
      "UXDesign",
      "KYC",
      "ZerodhaClone",
      "DesignSystems",
      "BuildInPublic",
      "IndieMakers"
    ],
    cta: "Comment “FLOW” and I will DM the annotated wireframes and checklist."
  },
  {
    id: "technical-sprint",
    theme: "Engineering Breakdown",
    goal: "Document a technical sprint that delivered a trading dashboard",
    hook:
      "Sprint report: shipped a Zerodha-style marketwatch with sub second updates without touching private broker APIs.",
    structure: [
      "Credible metric upfront",
      "Architecture choice readers can copy",
      "Callout to community feedback"
    ],
    body: [
      "Latency: 420ms average update cycle using server actions plus SWR caching.",
      "Stack: Next.js App Router, WebSockets proxied through Pusher, Prisma for trade journal persistence.",
      "What surprised me: concurrency bugs vanished after I mirrored Zerodha’s optimistic UI pattern.",
      "Next steps: integrating option chain visualizations, and I could use feedback on heatmap color scales."
    ],
    hashtags: [
      "Nextjs",
      "React",
      "Realtime",
      "TradingDashboard",
      "BuildInPublic",
      "DevCommunity"
    ],
    cta: "Tell me which metric view matters most to you (P&L timeline or risk exposure) and it will headline Episode 4."
  },
  {
    id: "story-post",
    theme: "Narrative Builder",
    goal: "Share personal motivation to humanize the project",
    hook:
      "2015: missed an early Zerodha invite and traded on clunky legacy brokers. Nine years later I am fixing that regret in code.",
    structure: [
      "Past failure that builds empathy",
      "Moment of insight",
      "Present action that redeems the story"
    ],
    body: [
      "I lost a month of analysis time fighting manual contract notes: zero integrations, zero clarity.",
      "Zerodha’s clean ledger changed how retail traders trusted platforms overnight.",
      "Why the clone: force myself to master compliant onboarding, high trust dashboards, and performance at scale.",
      "What you get: weekly drops with assets you can plug into your own fintech builds without chasing hidden APIs."
    ],
    hashtags: [
      "FounderStory",
      "Fintech",
      "PersonalBrand",
      "BuildInPublic",
      "ZerodhaClone",
      "WebBuilders"
    ],
    cta: "If you are solving similar trust issues in fintech, connect and let us swap notes."
  },
  {
    id: "social-proof",
    theme: "Social Proof",
    goal: "Maximize momentum using audience testimonials",
    hook:
      "Week 3 signal check: three traders and two founders already shipped features after cloning my Zerodha series drops.",
    structure: [
      "Quantified social proof",
      "Callout of how others used your assets",
      "Future looking promise"
    ],
    body: [
      "Nimisha rebuilt her watchlist UX by remixing my responsive grid tokens.",
      "Arjun cut onboarding friction 30 percent after implementing the document scanner pattern I shared last Tuesday.",
      "Unexpected win: community pointed me to live NSE data alternatives that stay within compliance guidelines.",
      "Next release: open sourcing the reusable charting hooks so you can test trading ideas without rate limits."
    ],
    hashtags: [
      "SocialProof",
      "CommunityLed",
      "BuildInPublic",
      "ProductWins",
      "ZerodhaClone",
      "Growth"
    ],
    cta: "Tag someone building fintech UX who needs these assets before the next drop hits the feed."
  },
  {
    id: "launch-recap",
    theme: "Launch Recap",
    goal: "Publish a finale recap and convert readers into followers",
    hook:
      "Twenty one days, eight commits to production, one fully documented Zerodha clone you can fork today.",
    structure: [
      "Highlight reel of outcomes",
      "Strategic insight per outcome",
      "Direct ask for continued engagement"
    ],
    body: [
      "Result 1: onboarding flow now verifies KYC docs in 92 seconds with automated fallbacks.",
      "Result 2: market depth widget handles 40 symbols with zero scroll jank on mobile.",
      "Result 3: trade journal exports directly into Google Sheets for lightweight analytics.",
      "Free resource bundle: checklist, component library, retro notes linked in the first comment."
    ],
    hashtags: [
      "LaunchDay",
      "ProductRecap",
      "WebDevelopment",
      "ZerodhaClone",
      "BuildInPublic",
      "LearningOutLoud"
    ],
    cta: "Follow for the spin off series where I integrate broker APIs and tackle compliance-ready deployments."
  }
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="max-w-3xl space-y-6">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">
          LinkedIn Growth Playbook
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-white">
          Zerodha Clone Build Series Templates Built to Trigger LinkedIn Reach
        </h1>
        <p className="text-lg text-white/80">
          Use these post-ready scripts to document your build like a product
          operator, feed the LinkedIn algorithm, and convert builders into
          followers. Every template pairs a hook, narrative rhythm, and CTA so
          you can ship in minutes.
        </p>
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-sm text-white/70">
          <p className="font-semibold uppercase tracking-[0.3em] text-white/60">
            Posting Cadence
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            <li className="rounded-2xl bg-white/[0.08] p-4">
              <p className="text-3xl font-semibold text-white">Mon</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">
                Strategy Drop
              </p>
            </li>
            <li className="rounded-2xl bg-white/[0.08] p-4">
              <p className="text-3xl font-semibold text-white">Wed</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">
                Build Update
              </p>
            </li>
            <li className="rounded-2xl bg-white/[0.08] p-4">
              <p className="text-3xl font-semibold text-white">Fri</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">
                Story or Proof
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Algorithm Guardrails
          </h2>
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            {foundations.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/[0.06] p-5">
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-2xl font-semibold text-white">Engagement Stack</h2>
          <div className="space-y-3 text-sm text-white/75">
            <p>
              Kick posts between 7 and 9 AM IST for pro audience overlap. Pair
              every drop with a comment that links the asset bundle to avoid
              suppressing reach.
            </p>
            <p>
              Reply to the first five comments within fifteen minutes. Ask a
              polarizing but respectful follow up to reopen the thread twelve
              hours later.
            </p>
            <p>
              Rotate formats: text posts for depth, document carousel for
              wireframes, native video for demo days. Save LinkedIn newsletter
              for long form recaps every second Friday.
            </p>
          </div>
        </aside>
      </section>

      <section className="mt-16 space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            Copy and Ship Templates
          </h2>
          <p className="text-sm text-white/70">
            Tap copy to push a ready to post script to your clipboard. Edit the
            metrics with your actual wins before publishing.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </section>
    </main>
  );
}
