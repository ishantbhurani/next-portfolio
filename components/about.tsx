"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hey there! Welcome! With over a decade in the tech trenches, I&apos;ve
        done a bit of everything - from tinkering with{" "}
        <em className="italic">electronics</em> to diving deep into{" "}
        <em className="italic">IoT</em>, <em className="italic">firmware</em>,
        and <em className="italic">web &amp; mobile development</em> gigs.
        I&apos;ve been all over the map,{" "}
        <em className="italic">teaching tech</em>,{" "}
        <em className="italic">freelancing</em>, and diving headfirst into{" "}
        <em className="italic">full-stack projects</em>.
      </p>

      <p className="mb-3">
        When it comes to languages, I&apos;m like a polyglot, speaking{" "}
        <em className="italic">
          C, C++, JavaScript, TypeScript, Python, and Dart
        </em>{" "}
        fluently. Debugging? It&apos;s kind of my thing. I&apos;ve tackled
        everything from <em className="italic">Provider</em> to{" "}
        <em className="italic">Firebase</em> and mastered the{" "}
        <em className="italic">MERN stack</em> along the way. Always up for a
        challenge, I thrive on learning new stuff and keeping up with the latest
        tech trends.
      </p>

      <p className="mb-3">
        So, whether you&apos;re looking to team up on a project or just chat
        tech over a virtual coffee, I&apos;m all ears! Let&apos;s make something
        awesome together!
      </p>
    </motion.section>
  );
}
