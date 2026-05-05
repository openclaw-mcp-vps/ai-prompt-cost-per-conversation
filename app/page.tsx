export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track AI Prompt Costs<br />
          <span className="text-[#58a6ff]">Per Conversation</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Monitor token usage and costs per user conversation thread across OpenAI, Anthropic, and more.
          Spot expensive patterns before they drain your budget.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $29/mo
        </a>
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            ["OpenAI", "GPT-4o & more"],
            ["Anthropic", "Claude models"],
            ["Per Thread", "Cost breakdown"]
          ].map(([title, sub]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-3">
              <div className="text-white font-semibold text-sm">{title}</div>
              <div className="text-[#8b949e] text-xs mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Webhook endpoints for OpenAI & Anthropic",
              "Per-conversation cost breakdown",
              "Expensive pattern detection",
              "Usage analytics dashboard",
              "Unlimited conversation threads",
              "Email alerts on cost spikes"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Tracking Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does it capture API usage?",
              "You route your AI API calls through our webhook proxy or use our lightweight SDK. Every request and response is logged with token counts and cost calculations in real time."
            ],
            [
              "Which AI providers are supported?",
              "OpenAI (GPT-4o, GPT-4, GPT-3.5) and Anthropic (Claude 3.5, Claude 3) are fully supported. More providers are added regularly."
            ],
            [
              "Is my conversation data private?",
              "Yes. Only metadata (token counts, model, timestamps, cost) is stored — never the actual message content. Your users' data stays private."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} AI Prompt Cost Tracker. All rights reserved.
      </footer>
    </main>
  )
}
