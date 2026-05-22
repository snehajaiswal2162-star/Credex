import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-6">
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

        {/* HERO */}
        <h1 className="text-6xl font-bold tracking-tight text-center">
          Credex
        </h1>

        <p className="text-gray-400 mt-4 text-center max-w-xl text-lg">
          AI Spend Intelligence for modern teams.
          Find wasted SaaS & AI subscriptions instantly.
        </p>

        <Link
          href="/audit"
          className="mt-8 bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Start Free Audit
        </Link>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl w-full">

          {[
            ["Cost Leak Detection", "Find unused AI spend"],
            ["Smart Insights", "Optimization suggestions"],
            ["Instant Report", "Get results in seconds"],
          ].map((item) => (
            <div
              key={item[0]}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:scale-105 transition"
            >
              <h3 className="text-lg font-semibold">{item[0]}</h3>
              <p className="text-gray-400 text-sm mt-2">{item[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}