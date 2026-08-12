import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { bp } from "@/lib/utils";

const title = "Why Sim Racing Helps So Much Before You Drive the Real Track";
const description =
  "Algarve SimRacing co-founder Gabor explains how simulator training builds track knowledge, exposes costly mistakes, and makes real-world practice more focused.";
const canonicalUrl =
  "https://algarvesimracing.com/stories/why-sim-racing-helps-real-drivers";
const imagePath = "/assets/stories/curva-lagos-simulator-training.jpg";
const imageUrl = `https://algarvesimracing.com${imagePath}`;
const youtubeId = "3ywWf13w8rE";
const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;
const publishedAt = "2026-08-12T09:00:00+01:00";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  authors: [{ name: "Gabor Herget" }],
  openGraph: {
    type: "article",
    url: canonicalUrl,
    title,
    description,
    publishedTime: publishedAt,
    authors: ["Gabor Herget"],
    images: [
      {
        url: imageUrl,
        width: 1600,
        height: 900,
        alt: "A driver approaching Curva Lagos at the Algarve circuit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  image: imageUrl,
  datePublished: publishedAt,
  dateModified: publishedAt,
  mainEntityOfPage: canonicalUrl,
  author: {
    "@type": "Person",
    name: "Gabor Herget",
  },
  publisher: {
    "@type": "Organization",
    name: "Algarve SimRacing",
    url: "https://algarvesimracing.com",
  },
  video: {
    "@type": "VideoObject",
    name: "Lamborghini incident at Curva Lagos",
    description:
      "Gabor was driving the following car when the Lamborghini ahead lost control at Curva Lagos.",
    thumbnailUrl: imageUrl,
    embedUrl,
    uploadDate: "2026-08-11",
    duration: "PT28S",
  },
};

export default function StoryPage() {
  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF3131]">
          From the founders · Track preparation
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.05] text-zinc-900 sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
          The simulator does not replace the real car. It lets us arrive at the circuit knowing
          what to practise, where mistakes begin, and which experiments are better made without a
          repair bill.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500">
          <span>By Gabor Herget, co-founder of Algarve SimRacing</span>
          <span aria-hidden="true">·</span>
          <time dateTime={publishedAt}>12 August 2026</time>
        </div>
      </header>

      <figure className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl bg-zinc-100">
        <Image
          src={bp(imagePath)}
          alt="Onboard view from the following car approaching Curva Lagos at the Algarve circuit"
          width={1600}
          height={900}
          className="aspect-video w-full object-cover"
          priority
        />
        <figcaption className="px-5 py-3 text-sm leading-6 text-zinc-500">
          Curva Lagos at the Algarve circuit: one of the places where a small mistake can become
          expensive very quickly.
        </figcaption>
      </figure>

      <div className="mx-auto mt-12 max-w-3xl space-y-7 text-[1.05rem] leading-8 text-zinc-700">
        <p className="text-xl leading-9 text-zinc-900">
          We built Algarve SimRacing because sim racing has become part of how we prepare for real
          driving. It is enjoyable, of course, but its greatest value is practical: it gives us
          time to learn before track time becomes scarce and expensive.
        </p>

        <p>
          Before driving the Algarve circuit, I spent somewhere between 10 and 20 hours in the
          simulator. I combined repeated laps with telemetry analysis and onboard video until I
          could get within a tenth of my target lap time. More importantly, I understood how the
          lap was put together rather than simply memorising a sequence of turns.
        </p>

        <h2 className="pt-3 font-heading text-3xl font-semibold leading-tight text-zinc-900">
          You can learn the circuit before the clock starts
        </h2>

        <p>
          On a laser-scanned circuit, the cambers, kerbs, braking references, corner radii and
          runoff areas are where you expect them to be. That makes the simulator useful for
          building a mental map: where the road rises, which corner tightens, where the exit opens,
          and what comes immediately after the crest you cannot see over.
        </p>

        <p>
          This changes the first real session. Instead of spending the opening laps asking where
          the circuit goes, you can pay attention to the car, the grip and your references. The
          real world will always feel different, but you arrive with a much better set of
          questions.
        </p>

        <h2 className="pt-3 font-heading text-3xl font-semibold leading-tight text-zinc-900">
          Repetition turns a good lap into a repeatable one
        </h2>

        <p>
          A quick lap once is not the same as understanding it. In the simulator, we can repeat a
          corner dozens of times and change one input at a time: brake a little later, release the
          brake more gradually, carry slightly more entry speed, or wait before going back to full
          throttle.
        </p>

        <p>
          Telemetry makes those experiments visible. It shows whether the improvement came from a
          real change or from luck, and whether the same approach can survive more than one lap.
          That methodical practice is useful for newcomers, experienced track-day drivers and
          professional racers alike.
        </p>

        <h2 className="pt-3 font-heading text-3xl font-semibold leading-tight text-zinc-900">
          The safest place to cross the limit
        </h2>

        <p>
          Once I could repeat my target lap, I started pushing past it. Most changes made me
          slower. Some unsettled the car. A few ended in the barrier. Those virtual crashes were
          not wasted laps; they showed me how a mistake developed and how much time I had to catch
          it.
        </p>

        <p>
          Resetting the simulator costs nothing. That gives a driver permission to explore the
          edge in a way that would be irresponsible in a real car. You can find out which slides
          are recoverable, which corrections make things worse, and which corners offer almost no
          second chance.
        </p>

        <figure className="my-10 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
          <div className="aspect-video w-full bg-black">
            <iframe
              className="h-full w-full"
              src={embedUrl}
              title="Lamborghini incident at Curva Lagos seen from Gabor's following car"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="origin"
              allowFullScreen
            />
          </div>
          <figcaption className="px-5 py-4 text-sm leading-6 text-zinc-600">
            I was driving the following car when the Lamborghini ahead lost control at Curva
            Lagos—the same corner where I had already crashed in the simulator.
          </figcaption>
        </figure>

        <h2 className="pt-3 font-heading text-3xl font-semibold leading-tight text-zinc-900">
          A reset button is cheaper than a recovery truck
        </h2>

        <p>
          At Curva Lagos, the Lamborghini team put a brand-new car into the wall at the same place
          where I had lost the car virtually. I had also watched other drivers struggle there. My
          simulator crash ended with a reset button. The real one meant damaged bodywork, recovery
          vehicles and a stopped session.
        </p>

        <p>
          That experience did not make me slow at the real circuit. It taught me where to leave a
          deliberate margin. I still pushed, but I knew which mistakes became unrecoverable almost
          immediately. I never spun on the track.
        </p>

        <h2 className="pt-3 font-heading text-3xl font-semibold leading-tight text-zinc-900">
          What the simulator cannot do
        </h2>

        <p>
          A simulator cannot reproduce every bump, the heat inside the car, the g-forces, fear, or
          the consequences of a real accident. We should not pretend otherwise. Its value is not
          that virtual driving and real driving are identical.
        </p>

        <p>
          Its value is that it lets you prepare with purpose. You can learn the circuit, develop a
          repeatable process, compare technique with telemetry and discover where the consequences
          are most likely to begin. Then real track time can be used for the things only the real
          car can teach you.
        </p>

        <p>
          That is why our simulators are not only entertainment. At Algarve SimRacing, they are
          tools we use ourselves—for coaching, race preparation, experimentation and making every
          real lap count.
        </p>
      </div>

      <aside className="mx-auto mt-14 max-w-4xl rounded-2xl bg-[#FF3131] px-6 py-8 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-9">
        <div>
          <h2 className="font-heading text-3xl font-bold">Prepare for your next track day</h2>
          <p className="mt-2 max-w-2xl leading-7 text-white/85">
            Tell us the circuit, car and goal. We can build a focused simulator session around
            them at our Portimão studio.
          </p>
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-flex shrink-0 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#cc0000] transition hover:bg-white/90 sm:mt-0"
        >
          Plan a Session
        </Link>
      </aside>

      <p className="mx-auto mt-8 max-w-3xl text-sm leading-6 text-zinc-500">
        This article expands on Gabor&apos;s original incident story published on{" "}
        <a
          href="https://open-racer.com/what-simulator-crashes-teach-you"
          className="font-medium text-[#cc0000] underline decoration-[#cc0000]/30 underline-offset-4 hover:decoration-[#cc0000]"
        >
          Open Racer
        </a>
        , with a focus on how we use simulator training at Algarve SimRacing.
      </p>
    </article>
  );
}
