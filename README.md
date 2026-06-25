# CardBot-Arena

Contributions: 

Sandro Saralidze - Developed the NEXT.JS initial setup and main/landing page, following the coding patterns of react/next for good architecture.

Teimuraz Futkaradze - Researched and gave final design options From figma, dribble and etc. as well as color palletes. Reviewing the design changes and PRs.

Hosted on vercel: https://card-bot-arena.vercel.app/

## Project Progress

### Completed

- [x] Next.js App Router setup with TypeScript
- [x] Tailwind CSS dark theme foundation
- [x] Shared layout with sticky header and footer
- [x] Reusable UI primitives: button, card, badge, container, section header, stat card
- [x] Card-style favicon
- [x] Polished home page hero section
- [x] Featured Bura Easy bot section on the home page
- [x] Leaderboard preview section on the home page
- [x] Bots page route: `/bots`
- [x] Bots page filters: All, Joker, Bura, Easy, Medium, Hard
- [x] Bots page search input and empty state
- [x] Bot roster with 6 bots
- [x] Only Bura Easy is playable
- [x] Other 5 bots are shown as under maintenance
- [x] Under maintenance indicators use clear red styling
- [x] Full leaderboard page: `/leaderboard`
- [x] Weekly, monthly, and all-time leaderboard filters
- [x] Profile page: `/profile`
- [x] Match history table
- [x] Achievement badges
- [x] Bot detail page: `/bots/[id]`
- [x] Safe locked-bot detail handling
- [x] Play page: `/play/[botId]`
- [x] Visual gameplay board for Bura Easy
- [x] Simple match result modal
- [x] LocalStorage progress system
- [x] Final responsive polish
- [x] Accessibility pass
- [x] Final README cleanup for submission

### Final Scope

CardBot Arena is a UI/UX-focused final project. The application includes a polished home page, bot roster, bot detail pages, a visual Bura Easy play table, local profile progress, and leaderboard/profile presentation routes. Only Bura Easy is playable in the current demo; the remaining bots are intentionally visible as under-maintenance previews.

### Run Locally

```bash
npm install
npm run dev
```
