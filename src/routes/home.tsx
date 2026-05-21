import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/home")({
  component: HomePage,
});

const navItems = [
  { label: "Timeline", href: "#timeline" },
  { label: "Merit", href: "#merit" },
  { label: "Wings", href: "#wings" },
  { label: "Members", href: "#members" },
  { label: "About", href: "#about" },
];

const topPerformers = [
  { rank: 1, name: "Mohammad Mahrooz", points: 10 },
  { rank: 2, name: "Razi", points: 5 },
  { rank: 3, name: "AZEEM", points: 3 },
];

const wings = [
  { code: "EN", name: "English Department", desc: "Literature, debate & global communication." },
  { code: "KA", name: "Kannada Department", desc: "Poetry, prose & regional heritage." },
  { code: "UR", name: "Urdu Department", desc: "Classical literature & expression." },
  { code: "AR", name: "Arabic Department", desc: "Linguistics & Islamic scholarship." },
];

const leaders = [
  { name: "Safvan Hudawi", role: "Mentor", quote: "Excellence is a habit, cultivated daily through discipline and devotion." },
  { name: "Haneef Hudawi", role: "Principal", quote: "We shape minds today that will shape the world tomorrow." },
];

const stats = [
  { value: "41+", label: "Wedadians" },
  { value: "06", label: "Wings" },
  { value: "50", label: "Events" },
  { value: "4", label: "Years Strong" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-500/30">
              <span className="font-bold">W</span>
            </div>
            <div className="leading-tight">
              <div className="text-base font-bold tracking-tight">wedad batch</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Academy Portal</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="hidden rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-700 sm:inline-flex"
            >
              ← Launch
            </Link>
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:shadow-xl hover:shadow-blue-500/40">
              Login →
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* layered blue background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1e44] via-[#0f2d6e] to-[#1e3a8a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.4),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
        {/* floating orbs */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-cyan-200 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
              Welcome to the Batch
            </span>

            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              <span className="block bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                HELLO
              </span>
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                WEDADIANS
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-blue-100/85 md:text-lg">
              The official portal of the Wedad Batch — a community of scholars,
              creators, and leaders advancing tradition through modern excellence.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#merit"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-900 shadow-2xl shadow-blue-950/40 transition hover:bg-cyan-50"
              >
                Explore Batch
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                About Us
              </a>
            </div>

            {/* stats strip */}
            <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/15 bg-white/5 px-4 py-5 backdrop-blur"
                >
                  <div className="text-3xl font-black text-white">{s.value}</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-200">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* wave bottom */}
        <svg
          className="relative -mb-1 block w-full text-slate-50"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,40 C360,100 1080,0 1440,50 L1440,80 L0,80 Z"
          />
        </svg>
      </section>

      {/* Timeline / Featured event */}
      <section id="timeline" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-600">
                Academy Timeline
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                Poem Kannada
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                The flagship Prime Union activity celebrating literary excellence
                across the Kannada wing. Witness performance, poetry and prose
                from the brightest minds of the batch.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-3 rounded-2xl bg-blue-50 px-5 py-3 ring-1 ring-blue-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                    📅
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                      November 9, 2026
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      Prime Union Activity
                    </div>
                  </div>
                </div>
                <button className="rounded-full bg-slate-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-blue-700">
                  Detail Registry →
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-200/60 to-indigo-200/60 blur-2xl" />
              <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-blue-900/5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                    Upcoming
                  </span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Live Soon
                  </span>
                </div>
                <ul className="mt-4 space-y-4">
                  {[
                    { d: "09", m: "NOV", t: "Poem Kannada — Prime Union", c: "text-blue-600" },
                    { d: "22", m: "NOV", t: "Inter-Wing Debate", c: "text-indigo-600" },
                    { d: "05", m: "DEC", t: "Annual Merit Awards", c: "text-cyan-600" },
                  ].map((e) => (
                    <li key={e.t} className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 transition hover:bg-blue-50">
                      <div className={`flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-white shadow ${e.c}`}>
                        <span className="text-lg font-black leading-none">{e.d}</span>
                        <span className="text-[9px] font-bold tracking-widest">{e.m}</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{e.t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merit / Top performers */}
      <section id="merit" className="bg-gradient-to-b from-slate-50 to-blue-50/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-600">
                Academy Merit Standings
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                Top Performers
              </h2>
            </div>
            <button className="rounded-full border-2 border-blue-600 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 transition hover:bg-blue-600 hover:text-white">
              View Full Rank
            </button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {topPerformers.map((p) => (
              <article
                key={p.rank}
                className={`group relative overflow-hidden rounded-3xl border bg-white p-8 transition hover:-translate-y-1.5 hover:shadow-2xl ${
                  p.rank === 1
                    ? "border-blue-200 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500/30"
                    : "border-slate-200 shadow-sm hover:shadow-blue-500/10"
                }`}
              >
                {p.rank === 1 && (
                  <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Champion
                  </span>
                )}
                <div className="flex items-start justify-between">
                  <span className="text-7xl font-black text-blue-100">
                    #{p.rank}
                  </span>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-2xl font-black text-white shadow-lg shadow-blue-500/40">
                    {p.name.charAt(0)}
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {p.name}
                </h3>
                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-blue-500" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    {p.points} Points Scored
                  </p>
                </div>
                <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                    style={{ width: `${(p.points / 10) * 100}%` }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sage Advice / Leaders */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-400">
              Mentorship Intelligence
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Sage Advice
            </h2>
            <p className="mt-4 text-slate-400">
              Wisdom from the mentors who guide the Wedad mission.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {leaders.map((l) => (
              <div
                key={l.name}
                className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-8 backdrop-blur-xl transition hover:border-cyan-400/40"
              >
                <span className="absolute right-6 top-6 text-7xl font-black leading-none text-blue-500/30">
                  "
                </span>
                <p className="relative text-xl font-medium leading-relaxed text-white/95">
                  {l.quote}
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 font-black text-slate-950">
                    {l.name.split(" ").map((s) => s[0]).join("")}
                  </div>
                  <div>
                    <p className="font-bold tracking-wide">{l.name}</p>
                    <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
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
      <section id="wings" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-600">
              Specialized Departmental Authority
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Wing Governance
            </h2>
            <p className="mt-4 text-slate-600">
              Four wings, one mission. Each department leads the batch in its own language and discipline.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {wings.map((w) => (
              <div
                key={w.code}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-100/60 transition group-hover:bg-blue-200/70" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-xl font-black text-white shadow-lg shadow-blue-500/30">
                  {w.code}
                </div>
                <h3 className="relative mt-6 text-lg font-bold text-slate-900">{w.name}</h3>
                <p className="relative mt-2 text-sm text-slate-600">{w.desc}</p>
                <p className="relative mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 transition group-hover:gap-2">
                  View Roles <span>→</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-24 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.35),transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            Foundation & Vision
          </p>
          <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
            About Wedad
          </h2>
          <p className="mt-3 text-xl italic text-cyan-100">"wedadians"</p>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-blue-50/90">
            A community of scholars committed to academic distinction, cultural
            literacy, and ethical leadership. The Wedad Batch unites students
            across departments under a shared institutional mission — preserving
            tradition while advancing modern scholarship.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur ring-1 ring-white/20">
              Mission Statement
            </span>
            <span className="rounded-full bg-white/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur ring-1 ring-white/20">
              Strategic Vision
            </span>
            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Join Wedad →
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 text-xs font-bold text-white">
              W
            </div>
            <p>© 2026 Wedad Batch · Institutional Registry</p>
          </div>
          <Link to="/" className="font-semibold text-blue-700 hover:underline">
            ← Back to Launch
          </Link>
        </div>
      </footer>
    </div>
  );
}
