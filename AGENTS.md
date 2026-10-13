<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## MatchCV architecture
- All app state lives in `src/lib/store.tsx` and is persisted to localStorage (loaded after mount) — keeps SSR hydration safe and works offline without a backend.
- ATS logic (keyword extraction, scoring, rewriting) is pure functions in `src/lib/keywords.ts` and `src/lib/ats.ts`, covered by `src/test/ats.test.ts` — so it can be swapped for a real AI later without touching UI.
