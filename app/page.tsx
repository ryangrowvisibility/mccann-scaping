import Reveal from "./Reveal";

const PHONE = "(226) 750-3015";
const TEL = "tel:+12267503015";
const SMS = "sms:+12267503015";
const EMAIL = "mccannscaping@gmail.com";
const MAPS = "https://www.google.com/maps/search/?api=1&query=McCann%20Scaping&query_place_id=ChIJh0IJZQuJLIgRIIlFR8KOVAc";
const FACEBOOK = "https://www.facebook.com/mccannscaping";

type IconProps = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24", "aria-hidden": true };

function Phone({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>;
}
function Message({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
}
function Mail({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>;
}
function Star({ className = "h-5 w-5" }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" /></svg>;
}
function Stars({ className = "h-5 w-5" }: IconProps) {
  return <span className="flex text-star" role="img" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className={className} />)}</span>;
}
function Clock({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
}
function Pin({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}
function Mower({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M3 15h14l2-5H7M7 10 4 4H2" /><circle cx="7" cy="18" r="2" /><circle cx="16" cy="18" r="2" /></svg>;
}
function Leaves({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" /><path d="M2 21c0-3 1.9-5.4 5.1-6" /></svg>;
}
function Tree({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M12 22v-6M12 2 5 12h4l-3 4h12l-3-4h4z" /></svg>;
}
function Level({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><rect x="2" y="9" width="20" height="6" rx="1.5" /><circle cx="12" cy="12" r="1.2" /><path d="M7 9v6M17 9v6M3 20h18" /></svg>;
}
function Patio({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="5" rx="1" /><rect x="13" y="10" width="8" height="11" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /></svg>;
}
function Flower({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><circle cx="12" cy="8" r="3" /><path d="M12 11v11M12 17c-3 0-5-2-5-4 2 0 5 1 5 4zM12 15c2.5 0 4.5-1.5 4.5-3.5-2 0-4.5 1-4.5 3.5z" /></svg>;
}
function Snow({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9" /></svg>;
}
function Zap({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg>;
}
function Truck({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>;
}
function Broom({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="m19 3-7 7M9 9l6 6M4 20c3 0 6-1 8-3l-6-6c-2 2-3 5-2 9z" /></svg>;
}
function Dollar({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>;
}
function Facebook({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
}
function Arrow({ className = "h-4 w-4" }: IconProps) {
  return <svg {...base} className={`nudge-arrow ${className}`}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

const services = [
  { icon: Mower, title: "Lawn Cutting & Maintenance", text: "Routine residential and commercial lawn care with real attention to detail: even cuts, trimmed edges and clippings cleared. One long-time customer told us his grass has never looked so good." },
  { icon: Leaves, title: "Seasonal Clean-ups", text: "Spring and fall clean-ups that clear leaves, dead growth and debris so your property starts each season tidy and healthy." },
  { icon: Tree, title: "Tree Removal", text: "Quoted quickly by email or text, then handled by a crew that arrives on time with the right equipment. A recent multi-tree job was done in two to three hours, with full clean-up." },
  { icon: Level, title: "Weeding & Yard Levelling", text: "De-weeding and re-levelling uneven yards, either to fix a bumpy lawn or as the first step before a new patio or fresh grass." },
  { icon: Patio, title: "Stone Patio Installation", text: "Natural stone patios installed as part of a backyard upgrade, built on ground we have levelled and prepared ourselves." },
  { icon: Flower, title: "Garden & Landscape Maintenance", text: "Bringing tired landscaping back to life. We work to an agreed plan with a tidy, organized crew, and keep your beds and borders looking cared for all season." },
];

const reviews = [
  { name: "Maya B.", job: "Tree removal", text: "I requested a quote and heard back within the hour. After a short email exchange Noah priced the job, and the crew arrived on time with the right equipment. All of our trees were removed in two to three hours, quick, clean and reasonably priced. Ten out of ten, and I plan to book them again for winter." },
  { name: "Sandra C.", job: "Landscape revival", text: "Noah McCann and Humza brought the beauty and life back to my landscaping. Timely, efficient, tidy and organized to plan, and friendly and positive when issues came up." },
  { name: "Humza T.", job: "De-weeding, yard levelling and stone patio", text: "Hired them to de-weed and level my yard and install a stone patio. Very satisfied with the result." },
  { name: "Steven K.", job: "Lawn care", text: "Glad I messaged Noah. My grass has never looked so good." },
  { name: "Nonni I.", job: "Yard work", text: "Easy to contact, easy to work with, efficient and fairly priced." },
];

const steps = [
  { title: "Send a message or call", text: "Text, call or email Noah with what you need. A couple of photos of the yard helps." },
  { title: "Fast, clear quote", text: "Customers often hear back within the hour with a straightforward price for the job." },
  { title: "Crew arrives on time", text: "We show up when booked, with the right equipment for the job already on the truck." },
  { title: "Tidy finish", text: "We work efficiently, clean up completely and leave your yard looking better than we found it." },
];

const faqs = [
  { q: "How quickly can I get a quote?", a: "Fast. Customers regularly mention hearing back within the hour. Text or email a description and a few photos and Noah will get back to you with a price." },
  { q: "Which areas do you serve?", a: "Hamilton, Guelph, Cambridge and Kitchener-Waterloo. If you are close to one of those cities, call or text to check." },
  { q: "Do you work on commercial properties?", a: "Yes. We provide lawn care and landscape maintenance for both residential and commercial properties." },
  { q: "Can you remove several trees in one visit?", a: "Yes. We have removed multiple trees in a single two-to-three-hour visit, with the crew bringing the right equipment and cleaning up completely afterward." },
  { q: "I want a patio but my yard is uneven and weedy. Can you help?", a: "That is a common job for us. We de-weed and level the yard first, then install the stone patio on properly prepared ground." },
  { q: "Do you offer winter services?", a: "Customers have rebooked us for the winter season. Call or text Noah to ask what winter services are available at your property." },
  { q: "Who will I be dealing with?", a: "Owner Noah McCann. McCann Scaping is owner-operated, and customers describe Noah as easy to contact and a pleasure to deal with." },
];

const areas = ["Hamilton", "Guelph", "Cambridge", "Kitchener", "Waterloo"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "McCann Scaping",
  telephone: "+1-226-750-3015",
  email: EMAIL,
  url: "https://mccann-scaping.growlocalvisibility.com",
  description: "Owner-operated lawn care and landscaping for residential and commercial properties in Hamilton, Guelph, Cambridge and Kitchener-Waterloo, Ontario.",
  areaServed: ["Hamilton, ON", "Guelph, ON", "Cambridge, ON", "Kitchener, ON", "Waterloo, ON"],
  founder: { "@type": "Person", name: "Noah McCann" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "8" },
  sameAs: [FACEBOOK],
};

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a href={TEL} className={`btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cta px-6 py-3 font-bold text-white shadow-sm hover:bg-cta-hover focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-cta ${className}`}>
      <Phone /> Call {PHONE}
    </a>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="McCann Scaping home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white"><Leaves className="h-5 w-5" /></span>
            <span className="text-xl font-extrabold tracking-tight text-ink">McCann <span className="text-brand">Scaping</span></span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 font-semibold text-ink lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About Noah</a>
            <a href="#area" className="hover:text-brand">Areas</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-bold text-ink hover:text-brand md:inline">{PHONE}</a>
            <a href={TEL} className="btn-press hidden min-h-12 items-center rounded-xl bg-cta px-5 font-bold text-white hover:bg-cta-hover md:inline-flex">Get a Fast Quote</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn-press grid h-11 w-11 place-items-center rounded-xl bg-cta text-white md:hidden"><Phone /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="bg-bg">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-12 md:px-6 md:pb-24 md:pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-sm font-bold text-brand-deep">
                <Zap className="h-4 w-4" /> Quotes often back within the hour
              </p>
              <h1 className="text-[clamp(2.2rem,4.8vw,3.5rem)] leading-[1.06] text-ink">
                Lawn Care &amp; Landscaping in Hamilton, Guelph, Cambridge and Kitchener-Waterloo
              </h1>
              <p className="mt-5 max-w-[58ch] text-lg text-muted md:text-xl">
                Lawn cutting, clean-ups, tree removal, yard levelling and stone patios from owner Noah McCann and a punctual, tidy crew. Fair prices, fast answers and a yard you will be glad to look at.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallButton />
                <a href={SMS} className="btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-ink/15 bg-white px-6 py-3 font-bold text-ink hover:border-brand">
                  <Message /> Text Noah
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.95rem] text-ink">
                <span className="flex items-center gap-2"><Stars className="h-4 w-4" /><strong>5.0</strong></span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-line underline-offset-4 hover:text-brand">8 Google reviews</a>
                <span aria-hidden className="text-line">|</span>
                <span>Owner-operated</span>
                <span aria-hidden className="text-line">|</span>
                <span>Residential &amp; commercial</span>
              </div>
            </div>
            <Reveal>
              <figure className="relative rounded-2xl border border-line bg-white p-7 shadow-[0_20px_44px_-28px_oklch(0.38_0.095_40/0.55)]">
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="text-sm font-bold text-muted">Google review</span>
                </div>
                <blockquote className="mt-4 text-lg leading-relaxed text-ink">
                  &ldquo;Heard back within the hour. The crew arrived on time with the right equipment and removed all of our trees in two to three hours. Quick, clean and reasonably priced. Ten out of ten.&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4 text-sm"><strong className="text-ink">Maya B.</strong><span className="block text-muted">Tree removal</span></figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why customers choose McCann Scaping" className="bg-brand-deep text-white">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: Star, t: "5.0 on Google", d: "All 8 reviews five stars" },
              { icon: Zap, t: "Fast quotes", d: "Often within the hour" },
              { icon: Truck, t: "Right equipment", d: "On time, ready to work" },
              { icon: Dollar, t: "Fair pricing", d: "Reasonable and clear" },
            ].map(({ icon: I, t, d }) => (
              <li key={t} className="flex items-start gap-3">
                <I className="mt-0.5 h-6 w-6 shrink-0 text-brand-soft" />
                <span><strong className="block">{t}</strong><span className="text-sm text-white/75">{d}</span></span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="max-w-[60ch]">
              <p className="font-bold text-brand">Services</p>
              <h2 className="mt-2 text-3xl text-ink md:text-[2.5rem]">Everything your yard needs, from one crew</h2>
              <p className="mt-4 text-muted">Weekly cuts, one-time clean-ups or a bigger backyard project. Each job gets the same punctual crew and the same attention to detail.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: I, title, text }) => (
                <Reveal key={title}>
                  <article className="nudge flex h-full flex-col rounded-2xl border border-line bg-bg p-7 transition-shadow duration-200 hover:shadow-[0_14px_30px_-22px_oklch(0.38_0.095_40/0.55)]">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-brand shadow-sm"><I /></span>
                    <h3 className="mt-5 text-xl text-ink">{title}</h3>
                    <p className="mt-3 flex-1 text-muted">{text}</p>
                    <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand hover:text-brand-deep">Call about this <Arrow /></a>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 flex items-center gap-2 text-muted"><Snow className="h-5 w-5 text-brand" /> Customers have rebooked us for the winter season. Ask Noah about winter services.</p>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-bold text-brand">Reviews</p>
                <h2 className="mt-2 text-3xl text-ink md:text-[2.5rem]">Rated 5.0 from 8 Google reviews</h2>
                <p className="mt-3 max-w-[60ch] text-muted">Customers keep mentioning the same things: fast, clear communication, punctual crews with the right gear, and tidy, efficient work at a reasonable price.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="nudge btn-press inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl border-2 border-ink/15 bg-white px-5 font-bold text-ink hover:border-brand">
                Read all reviews on Google <Arrow />
              </a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
              {reviews.map((r, i) => (
                <Reveal key={r.name} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
                  <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
                    <Stars className="h-4 w-4" />
                    <blockquote className={`mt-4 flex-1 text-ink ${i < 2 ? "text-lg" : ""}`}>&ldquo;{r.text}&rdquo;</blockquote>
                    <figcaption className="mt-5 border-t border-line pt-4 text-sm"><strong className="text-ink">{r.name}</strong><span className="block text-muted">{r.job}</span></figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-bold text-brand">About McCann Scaping</p>
              <h2 className="mt-2 text-3xl text-ink md:text-[2.5rem]">Owner-operated by Noah McCann</h2>
              <div className="mt-6 space-y-4 text-ink/90">
                <p>McCann Scaping is an owner-operated landscaping and lawn care company run by Noah McCann. We look after residential and commercial properties across Hamilton, Guelph, Cambridge and Kitchener-Waterloo, from routine lawn care and seasonal clean-ups to tree removal, yard levelling and natural stone patios.</p>
                <p>The way we work is simple. Answer quickly, give a clear price, show up on time with the right equipment, and leave the place tidy. Customers describe Noah as easy to contact, easy to work with and a pleasure to deal with, and several have come back to book us again.</p>
                <p>When you call or text, you reach Noah directly. No call centre, no runaround.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <CallButton />
                <a href={`mailto:${EMAIL}`} className="btn-press inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-ink/15 px-5 font-bold text-ink hover:border-brand"><Mail /> Email Noah</a>
              </div>
            </div>
            <ul className="grid content-start gap-4">
              {[
                { icon: Zap, t: "Fast, clear communication", d: "Quotes and answers without the wait." },
                { icon: Clock, t: "Punctual crews", d: "We arrive when booked, ready to work." },
                { icon: Broom, t: "Tidy and organized", d: "We work to plan and clean up completely." },
                { icon: Dollar, t: "Reasonable prices", d: "Fair pricing customers are happy to rebook." },
              ].map(({ icon: I, t, d }) => (
                <li key={t} className="flex gap-4 rounded-2xl border border-line bg-bg p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-deep"><I className="h-5 w-5" /></span>
                  <span><strong className="block text-ink">{t}</strong><span className="text-muted">{d}</span></span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <p className="font-bold text-brand">How it works</p>
            <h2 className="mt-2 text-3xl text-ink md:text-[2.5rem]">Four steps to a yard you are proud of</h2>
            <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-2xl border border-line bg-white p-6">
                  <span className="text-4xl font-extrabold text-brand">{i + 1}</span>
                  <h3 className="mt-3 text-lg text-ink">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-bold text-brand">Service area</p>
              <h2 className="mt-2 text-3xl text-ink md:text-[2.5rem]">Serving four cities in Southern Ontario</h2>
              <p className="mt-4 text-muted">We take on lawn care and landscaping jobs across Hamilton, Guelph, Cambridge and Kitchener-Waterloo. Call or text if you are nearby and want to confirm.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {areas.map((a) => (
                  <li key={a} className="flex items-center gap-1.5 rounded-full border border-line bg-bg px-4 py-2 font-semibold text-ink"><Pin className="h-4 w-4 text-brand" />{a}</li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe title="Map of Hamilton, Guelph, Cambridge and Kitchener-Waterloo" src="https://maps.google.com/maps?q=Cambridge%2C%20Ontario&z=9&output=embed" className="h-[340px] w-full md:h-[400px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-bold text-brand">FAQ</p>
              <h2 className="mt-2 text-3xl text-ink md:text-[2.5rem]">Common questions</h2>
              <p className="mt-4 text-muted">Still wondering about something? Text Noah at <a href={SMS} className="font-bold text-brand-deep underline underline-offset-4">{PHONE}</a>.</p>
            </div>
            <div className="divide-y divide-line rounded-2xl border border-line bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="px-6 py-5">
                  <summary className="flex items-center justify-between gap-4 text-lg font-bold text-ink">
                    {f.q}
                    <svg {...base} className="faq-icon h-5 w-5 shrink-0 text-brand"><path d="M12 5v14M5 12h14" /></svg>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-deep py-16 text-white md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-6">
            <div>
              <h2 className="text-3xl md:text-4xl">Ready to get your yard sorted?</h2>
              <p className="mt-3 max-w-[56ch] text-white/85">Call or text Noah at {PHONE} or email {EMAIL}. Most quotes come back fast.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallButton className="text-lg" />
              <a href={SMS} className="btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-white/70 px-6 font-bold text-white hover:bg-white/10"><Message /> Text us</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white pb-28 pt-14 md:pb-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <p className="text-xl font-extrabold text-ink">McCann Scaping</p>
            <p className="mt-3 max-w-[48ch] text-muted">Owner-operated lawn care and landscaping for homes and businesses in Hamilton, Guelph, Cambridge and Kitchener-Waterloo, Ontario.</p>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="McCann Scaping on Facebook" className="mt-5 inline-grid h-11 w-11 place-items-center rounded-xl border border-line text-ink hover:border-brand hover:text-brand"><Facebook /></a>
          </div>
          <div>
            <p className="font-bold text-ink">Contact</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li><a href={TEL} className="flex items-center gap-2 hover:text-brand"><Phone className="h-4 w-4" />{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 break-all hover:text-brand"><Mail className="h-4 w-4 shrink-0" />{EMAIL}</a></li>
              <li className="flex items-center gap-2"><Pin className="h-4 w-4" />Hamilton, Guelph, Cambridge &amp; KW</li>
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Find us on Google Maps</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-ink">Services</p>
            <ul className="mt-3 space-y-2 text-muted">
              {services.map((s) => <li key={s.title}><a href="#services" className="hover:text-brand">{s.title}</a></li>)}
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-6xl px-5 text-sm text-muted md:px-6">&copy; {new Date().getFullYear()} McCann Scaping. Owner Noah McCann.</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn-press flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cta font-bold text-white"><Phone /> Call</a>
        <a href={SMS} className="btn-press flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-ink/15 font-bold text-ink"><Message /> Text</a>
      </div>
    </>
  );
}
