# Interactive map update

Upload this entire map folder over the existing map folder. The page uses assets/world-map.png (the supplied clean reference) and the existing HunterX font.

There are 16 small city/landmark pins and 10 SVG territory hit areas. City coordinates were corrected against the reference. Territory outlines are hand-traced approximations, not newly established lore boundaries. Unnamed islands and the unnamed southern extension of the eastern continent are left unassigned.

Hover/focus a territory to reveal its outline; click/Enter/Space selects its short record. Cities use fixed-screen-size pins that do not grow during zoom. Selecting a list entry centers the map; clicking the map itself keeps the current view. SVG paths are embedded in map.html for immediate local loading; assets/region-outlines.svg is a separate editable copy. If editing outlines, update both copies.

Checks: JavaScript syntax, SVG parsing, no crossing polygon segments, 16 markers/10 regions, DOM-harness selection and description updates, zoom/translation/keyboard handlers. A static outline overlay was visually inspected. Full browser/mobile layout and touch testing remain pending.
