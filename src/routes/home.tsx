import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/home")({
  component: HomePage,
});

const navItems = [
  { label: "Academy Timeline", icon: "📅" },
  { label: "Merit List", icon: "🏆" },
  { label: "Individual Merit", icon: "🎖️" },
  { label: "Wings", icon: "📈" },
  { label: "Union Members", icon: "👥" },
];

const topPerformers = [
  { rank: 1, name: "Mohammad Mahrooz", points: 10, color: "from-amber-400 to-yellow-600" },
  { rank: 2, name: "Razi Ahmed", points: 5, color: "from-slate-300 to-slate-500" },
  { rank: 3, name: "Azeem Khan", points: 3, color: "from-orange-400 to-amber-700" },
];

const wings = [
  { code: "EN", name: "English Department" },
  { code: "KA", name: "Kannada Department" },
  { code: "UR", name: "Urdu Department" },
  { code: "AR", name: "Arabic Department" },
];

const leaders = [
  { name: "Safvan Hudawi", role: "Teacher", quote: "Excellence is a habit, cultivated daily." },
  { name: "Haneef Hudawi", role: "Principal", quote: "We shape minds that will shape the world." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fcfbf8] text-[#1a1a1a]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#e8e0d0] bg-[#fcfbf8]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5a0e1f] text-white shadow-md">
              <span className="font-serif text-lg font-bold">W</span>
            </div>
            <span className="font-serif text-xl font-semibold tracking-tight">
              wedad batch
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[#3a3a3a] transition hover:bg-[#f4ede0] hover:text-[#5a0e1f]"
              >
                <span className="text-xs">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="hidden rounded-full border border-[#e0d6c2] px-4 py-2 text-xs font-medium text-[#5a0e1f] transition hover:bg-[#f4ede0] sm:inline-flex"
            >
              ← Launch
            </Link>
            <button className="inline-flex items-center gap-2 rounded-full bg-[#5a0e1f] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#5a0e1f]/20 transition hover:bg-[#7a1828]">
              <span>→</span> Login
            </button>
          </div>
        </div>
      </header>

      {/* Hero / Timeline */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#faf6ec] to-[#fcfbf8] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b8902a]">
            Institutional Timeline
          </p>
          <h1 className="mt-6 font-serif text-5xl font-bold tracking-tight text-[#0e3a32] md:text-6xl">
            Poem Kannada
          </h1>
          <div className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#f5ead4] px-7 py-3 shadow-sm">
            <span className="text-[#b8902a]">★</span>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5a0e1f]">
              November 9, 2026
            </span>
            <span className="mx-2 h-1 w-1 rounded-full bg-[#b8902a]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#8a8a8a]">
              Prime Union Activity
            </span>
          </div>

          <div className="mt-10">
            <button className="group inline-flex items-center gap-3 rounded-full bg-[#5a0e1f] px-9 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-[#5a0e1f]/30 transition hover:bg-[#7a1828]">
              Detail Registry
              <span className="transition group-hover:translate-x-1">→</span>
            </button>
          </div>

          <div className="mt-12 flex justify-center gap-2">
            <span className="h-1.5 w-12 rounded-full bg-[#5a0e1f]" />
            {[...Array(6)].map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#e0d6c2]" />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Results */}
      <section className="bg-[#f4ede0]/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b8902a]">
                Recent Merit Updates
              </p>
              <h2 className="mt-3 font-serif text-4xl font-bold text-[#0e3a32]">
                Latest Results
              </h2>
            </div>
            <button className="rounded-full border border-[#5a0e1f]/30 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#5a0e1f] transition hover:bg-[#5a0e1f] hover:text-white">
              Explore Archive
            </button>
          </div>

          <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#b8902a]">
              Elite Recognition · Qawali
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {topPerformers.map((p) => (
                <div
                  key={p.rank}
                  className={`flex items-center gap-3 rounded-2xl px-5 py-4 ${
                    p.rank === 1
                      ? "bg-[#f5ead4] ring-2 ring-[#b8902a]/40"
                      : "bg-[#fafafa]"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${p.color} text-sm font-bold text-white shadow`}
                  >
                    {p.rank}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a1a]">{p.name}</p>
                    <p className="text-xs text-[#8a8a8a]">{p.points} points</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Performers leaderboard */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b8902a]">
                Academy Merit Standings
              </p>
              <h2 className="mt-3 font-serif text-4xl font-bold text-[#0e3a32]">
                Top Performers
              </h2>
            </div>
            <button className="rounded-full border border-[#5a0e1f]/30 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#5a0e1f] transition hover:bg-[#5a0e1f] hover:text-white">
              View Global Rank
            </button>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {topPerformers.map((p) => (
              <article
                key={p.rank}
                className="group relative overflow-hidden rounded-3xl border border-[#e8e0d0] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#5a0e1f]/10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-serif text-5xl font-bold text-[#5a0e1f]/15">
                    #{p.rank}
                  </span>
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${p.color} text-xl font-bold text-white shadow-lg`}
                  >
                    {p.name.charAt(0)}
                  </div>
                </div>
                <h3 className="mt-6 font-serif text-2xl font-bold text-[#1a1a1a]">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#8a8a8a]">
                  {p.points} POINTS
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sage Advice */}
      <section className="bg-[#0e3a32] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#d4b85a]">
            Mentorship Intelligence
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">
            Sage Advice
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {leaders.map((l) => (
              <div
                key={l.name}
                className="rounded-3xl bg-white/5 p-8 backdrop-blur ring-1 ring-white/10"
              >
                <p className="font-serif text-2xl italic leading-relaxed text-white/95">
                  "{l.quote}"
                </p>
                <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4b85a] font-bold text-[#0e3a32]">
                    {l.name.split(" ").map((s) => s[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold uppercase tracking-[0.15em]">
                      {l.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#d4b85a]">
                      {l.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wings */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b8902a]">
            Specialized Departmental Authority
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-[#0e3a32]">
            Wing Governance
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {wings.map((w) => (
              <div
                key={w.code}
                className="group rounded-3xl border border-[#e8e0d0] bg-white p-7 transition hover:-translate-y-1 hover:border-[#5a0e1f]/40 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5a0e1f] font-serif text-2xl font-bold text-white">
                  {w.code}
                </div>
                <h3 className="mt-6 font-semibold text-[#1a1a1a]">{w.name}</h3>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#b8902a] group-hover:text-[#5a0e1f]">
                  View Roles →
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-[#faf6ec] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b8902a]">
            06 · Foundation & Vision
          </p>
          <h2 className="mt-3 font-serif text-5xl font-bold text-[#0e3a32]">
            About Wedad
          </h2>
          <p className="mt-2 font-serif text-xl italic text-[#5a0e1f]">
            "wedadians"
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-[#3a3a3a]">
            A community of scholars committed to academic distinction, cultural literacy,
            and ethical leadership. The Wedad Batch unites students across departments
            under a shared institutional mission — preserving tradition while advancing
            modern scholarship.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5a0e1f] shadow-sm">
              Mission Statement
            </span>
            <span className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5a0e1f] shadow-sm">
              Strategic Vision
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e0d0] bg-[#fcfbf8] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-[#8a8a8a] md:flex-row">
          <p>© 2026 Wedad Batch · Institutional Registry</p>
          <Link to="/" className="text-[#5a0e1f] hover:underline">
            ← Back to Launch
          </Link>
        </div>
      </footer>
    </div>
  );
}
