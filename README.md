# GRAND x BEYOND

Plain HTML/CSS/vanilla JavaScript. No build step or package installation.

Set the public Supabase project URL and anon/publishable key in config.js, then deploy this folder through the existing GitHub → Cloudflare Pages setup. Both index.html and tavern/tavern.html share that configuration.

Apply the accompanying supabase/configure-discord-roles.sql to an existing project and redeploy sync-roles before using the updated frontend. Full setup and checkpoints are in the separate Supabase package. Never deploy backend secrets or the Supabase package as public files.

Tavern access: actual Hunter role OR mapped Admin rank 6+. Character approval and private OOC review: Admin rank 6+. Character Approver/Moderator roles do not grant Tavern access.

The map has 16 city/landmark pins aligned to the supplied reference and 10 hand-traced SVG territory selections. The original English lore descriptions are preserved. Browser rendering and real OAuth/RLS testing remain pending; use the supplied setup checkpoints.

Hunter cards are issued only by verified Hunter Association role sync. Role removal retains the number but makes the card inactive; restoring the role reuses it. Role changes are checked at sign-in/Tavern entry, not pushed instantly.
