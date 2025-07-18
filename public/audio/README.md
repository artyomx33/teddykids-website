# Teddy Kids – Audio Assets

Welcome to the `public/audio/` directory of the Teddy Kids website.  
This folder stores **all sound assets that are shipped to the browser** (e.g. greetings, ambience clips, voice-overs).

---

## 1. Folder Purpose
* Central place for any audio that must be publicly reachable under `/audio/*`.
* Keeps binary media out of `app/` and makes Next.js static asset handling straightforward.

---

## 2. General Audio Specifications
| Property              | Recommendation                                                  |
|-----------------------|-----------------------------------------------------------------|
| Format                | **MP3** (universal browser support)                            |
| Sample rate           | 44 100 Hz (CD quality)                                          |
| Bit rate              | 128 – 192 kbps (CBR preferred)                                  |
| Channels              | Stereo (or mono if source is mono)                              |
| Loudness              | Normalised to ‑14 LUFS ±1 LUFS                                  |
| Peaks                 | Ceiling at ‑1 dBFS (prevent clipping)                           |
| Length                | ≤ 90 s (short UI sounds preferable)                             |
| File naming           | kebab-case, descriptive, ascii only (`example-file-name.mp3`)   |

---

## 3. Current Files

| File name                | Purpose / placement                                                          | Status |
|--------------------------|-------------------------------------------------------------------------------|--------|
| `appies-welcome.mp3`     | Soft bilingual morning greeting by “Appies” on the **Apply** page (“Hear the Teddy Magic” section). Plays when visitors want to sample the Teddy atmosphere. | **Pending – placeholder** |

A placeholder text file (`appies-welcome-placeholder.txt`) is present until the final recording is supplied.

---

## 4. Adding or Replacing Audio Files

1. Produce or receive the final audio file that meets the specifications in section 2.  
2. Place the `.mp3` inside `public/audio/`.  
3. **Update references** in the React/Next.js components if the file name differs.  
   * Example: `<audio src="/audio/your-file.mp3" controls />`
4. Commit the binary with Git LFS if the repository uses it, otherwise commit normally.
5. Push to `main` – Vercel will redeploy automatically.

---

## 5. Technical Recommendations & Tips

* Perform a short **fade-in/fade-out (50-100 ms)** to avoid clicks.
* Export at the **original sample rate**; avoid resampling multiples times.
* If editing in Audacity/DAW, apply gentle compression to even out peaks before loudness normalisation.
* Run files through [ffmpeg](https://ffmpeg.org) for final encode, e.g.:

```
ffmpeg -i input.wav -ar 44100 -ac 2 -b:a 160k -compression_level 0 appies-welcome.mp3
```

* Test playback on:
  * Chrome, Firefox, Safari (desktop & mobile)
  * Low-bandwidth connection (use DevTools throttling) to ensure quick start.

---

## 🎙️ Focus: `appies-welcome.mp3`

* **Content**: Warm, soft “Good morning / Goedemorgen” welcome in both English and Dutch, delivered by the Teddy Kids mascot “Appies”.
* **Target length**: 30 – 60 seconds.
* **Tone**: Friendly, calm, child-centred.  
  * Start with a gentle chime or ambience if desired.  
  * Voice volume comfortable for parents browsing on laptops/phones.
* **Action**: Replace the placeholder with the final `appies-welcome.mp3` following steps in section 4.

Happy recording! 🧸🎧
