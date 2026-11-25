# newspaper

A static, newspaper-style page: upcoming sci-fi, fantasy and horror releases, plus local events and classes
for books, authors, arts, coffee, board games, quilting and cooking.

## Files

- `index.html` is the page. Open it in a browser, or host it with GitHub Pages.
- `data.js` holds all the content: `books`, `events`, the `city`, and `sources`.

## Updating

- **Books:** add entries to `books` with `genre` set to `scifi`, `fantasy` or `horror`. `date` is `YYYY-MM-DD`,
  or `YYYY-MM` when only the month is known.
- **Events:** add entries to `events` with `category` set to `books`, `arts`, `coffee`, `boardgames`,
  `quilting` or `cooking`, and `type` set to `event` or `class`. Set `city` to the place you want listings for.
- Release dates come from retailer and aggregator listings. Confirm them with the publisher before ordering.
