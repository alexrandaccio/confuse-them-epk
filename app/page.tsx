// app/page.tsx (Next.js App Router)

import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase">Confuse Them.</h1>
        {/* <p className="mt-4 text-lg md:text-xl text-neutral-400 max-w-xl">
          NYC Post-punk
        </p> */}
        {/* <div className="mt-8 flex gap-4"> */}
          {/* <a href="#music" className="px-6 py-3 bg-white text-black rounded-2xl">Listen</a> */}
          {/* <a href="#video" className="px-6 py-3 border border-white rounded-2xl">Watch</a>
          <a href="#contact" className="px-6 py-3 border border-white rounded-2xl">Book</a> */}
        {/* </div> */}
      </section>

      {/* MUSIC */}
      {/* <section id="music" className="px-6 py-20 border-b border-neutral-800 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Music</h2>
        <div className="space-y-6">
          <iframe
            style={{ border: 0, width: "100%", height: 120 }}
            src="https://bandcamp.com/EmbeddedPlayer/track=TRACK_ID/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=none/transparent=true/"
          />
          <iframe
            style={{ border: 0, width: "100%", height: 120 }}
            src="https://bandcamp.com/EmbeddedPlayer/track=TRACK_ID/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=none/transparent=true/"
          />
        </div>
      </section> */}

      {/* VIDEO */}
      <section id="video" className="px-6 pt-20 max-w-4xl mx-auto">
        {/* <h2 className="text-3xl font-semibold mb-6">Live Video</h2> */}
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/4-IfHmsO3HM?si=80JIRwqvB3ap8bfm"
            title="Live performance"
            allowFullScreen
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 pt-20 max-w-3xl mx-auto">
        <p className="text-neutral-300 leading-relaxed">
          Confuse Them is a post-punk band based in New York City. Frontman Alex Randaccio screams, groans, and shouts the confusion of the digital age over de-tuned guitars, driving bass, and crashing drums. Their clean sound lends a primal urgency to the lyrics of an over-educated loser in a messed-up world: darkly humorous and insistent, as the syllables and images tumble over one another with the manic violence of doomscrolling. Dramatic songcraft and sudden dynamic changes resist the hypnotic potential of infinite scroll, urging audiences to alertness and action.
          <br /><br />
          The band's influences include Lou Reed, IDLES, Pavement, and Red House Painters.
          <br /><br />
          Since forming in late 2025, they have played a small number of shows across NYC and are currently writing and recording new material.
        </p>
      </section>

      {/* SHOWS */}
      <section className="px-6 pt-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Upcoming Shows</h2>
        <ul className="space-y-3 text-neutral-300">
          <li>May 28, 2026 — Hart Bar — Brooklyn</li>
          <li>July 1, 2026 — Arlene's Grocery — Manhattan</li>
        </ul>
      </section>
      <section className="px-6 pt-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Past Shows</h2>
        <ul className="space-y-3 text-neutral-300">
          <li>April 13, 2026 — Arlene's Grocery — Manhattan</li>
          <li>December 8, 2025 — Arlene's Grocery — Manhattan</li>
        </ul>
      </section>

      {/* PHOTOS */}
      <section className="px-6 pt-20 max-w-5xl mx-auto">
        <Gallery />
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-neutral-300 mb-4">For booking inquiries:</p>
        <a href="mailto:confusethemnyc@gmail.com" className="text-lg underline">
          Email
        </a>
        <div className="mt-4">
          <a href="https://instagram.com/confuse.them" className="underline">
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}