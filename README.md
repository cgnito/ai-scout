# proxy

### the elevenhacks challenge
built for the elevenagents x firecrawl hackathon, proxy solves the "pre-meeting panic." it turns real-time web data into a tactical voice briefing in under 30 seconds.

### the problem
sales reps and recruiters waste hours on manual research. when meetings are back-to-back, you often walk in under-prepared. manual searching is impossible when you are on the move.

### what is proxy?
proxy is a digital chief of staff. it combines firecrawl’s real-time web extraction with elevenlabs conversational ai to deliver high-impact briefings—complete with icebreakers and landmines—via a natural voice interface.

### how it works
* the voice: elevenlabs conversational agent for low-latency, human-like dialogue.
* the brain: fastapi backend orchestrating tool calls and data synthesis.
* the eyes: firecrawl search api for deep, live web scrapes (news, linkedin, and updates).

### key features
* tactical battlecards: provides a "silver bullet" icebreaker, a current "signal," and a "landmine" (what to avoid).
* live simulation: roleplay the first 30 seconds of your meeting. proxy adopts the persona of your target using the scraped data.
* real-time intelligence: bypasses stale llm training data with live 2026 web signals.
* voice-first: hands-free operation for the "walk-to-the-meeting" window.

### technical stack
* backend: python / fastapi
* search/scraping: firecrawl api
* voice/nlp: elevenlabs elevenagents
* frontend: next.js / tailwind css

### why it matters
in high-stakes meetings, the person with the best intel wins. proxy ensures that person is always you.