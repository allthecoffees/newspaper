/*
 * Newspaper data file. Edit this file to update the page; no build step needed.
 *
 * BOOKS: upcoming releases. genre is one of "scifi", "fantasy", "horror".
 *   date is ISO (YYYY-MM-DD). Dates came from retailer and aggregator listings
 *   and can move, so confirm with the publisher before ordering.
 *
 * EVENTS: local events and classes. category is one of:
 *   "books", "arts", "coffee", "boardgames", "quilting", "cooking".
 *   type is "event" or "class". Leave the array empty until a city is set.
 */
window.NEWSPAPER = {
  title: "The Daily Shelf",
  tagline: "New books and local happenings for readers, makers and coffee drinkers",
  city: "Columbus, Ohio",  // set to the city you want local events for, e.g. "Portland, OR"
  lastUpdated: "2026-11-25",

  books: [
    // Science fiction
    { title: "Cygnus", series: "Frontlines: Evolution #3", author: "Marko Kloos",
      genre: "scifi", date: "2026-12-08", publisher: "", note: "Military science fiction; third in the series." },
    { title: "Bride of the Alien Warrior", author: "",
      genre: "scifi", date: "2026-12-03", publisher: "", note: "Sci-fi romance; listed as a 2026 science fiction release." },
    { title: "Daughters of the Wind", author: "",
      genre: "scifi", date: "2026-12-01", publisher: "", note: "Time-travel premise; genre not confirmed by the listing." },

    // Fantasy
    { title: "The Fires of December", series: "Cosmere", author: "Brandon Sanderson",
      genre: "fantasy", date: "2026-12-08", publisher: "Tor Books", note: "Standalone Cosmere novel; a plague story." },
    { title: "Call Me Traitor", author: "Everina Maxwell",
      genre: "fantasy", date: "2026-12-01", publisher: "", note: "Fantasy with a queer romance." },
    { title: "Til Quest Do Us Part", author: "Ivelisse Housman",
      genre: "fantasy", date: "2026-12-01", publisher: "", note: "Romantic fantasy." },
    { title: "Kenna of Blood House", author: "",
      genre: "fantasy", date: "2026-12-08", publisher: "Ace", note: "Princess chooses which rival prince to back for Mistei's throne." },
    { title: "Heroes and Romance series (new title)", author: "Sara Raasch",
      genre: "fantasy", date: "2026-12-29", publisher: "Bramble", note: "Contemporary romantasy; descendants of the gods." },
    { title: "A Court of Forgotten Melody", series: "A Court of Thorns and Roses #7", author: "Sarah J. Maas",
      genre: "fantasy", date: "2027-01-12", publisher: "", note: "The final ACOTAR book, per listings." },
    { title: "Wayward Children #12", author: "Seanan McGuire",
      genre: "fantasy", date: "2027-01-12", publisher: "", note: "Latest Wayward Children novella." },
    { title: "Emily Wilde's History of Dark Faerie", series: "Emily Wilde #4", author: "Heather Fawcett",
      genre: "fantasy", date: "2027-01-19", publisher: "", note: "Fourth Emily Wilde book." },
    { title: "The Magical Cheese Emporium", series: "The Spellshop", author: "Sarah Beth Durst",
      genre: "fantasy", date: "2027-01-19", publisher: "", note: "Spellshop series." },
    { title: "Lochbound", author: "Rebecca Templeton",
      genre: "fantasy", date: "2027-01", publisher: "", note: "January 2027; exact day not listed." },
    { title: "Firstdawn", author: "Lana Harper",
      genre: "fantasy", date: "2027-01", publisher: "", note: "January 2027; exact day not listed." },

    // Horror
    { title: "Exhumation", author: "Nicholas Binge",
      genre: "horror", date: "2026-12-01", publisher: "Riverhead", note: "A missing woman's journals suggest a story too strange to be nonfiction." },
    { title: "A Killing in Souls", author: "Andy Dudak",
      genre: "horror", date: "2026-12-01", publisher: "Dark Matter INK", note: "A monk investigates people turned into dreaming statues." },
    { title: "Possession Island", author: "Sarah McCarry",
      genre: "horror", date: "2026-12-01", publisher: "", note: "Listed for December 1, 2026." },
    { title: "She's a Doll", author: "Barbara Truelove",
      genre: "horror", date: "2026-12-08", publisher: "", note: "A possessed doll seeks revenge." },
    { title: "There Are No Giant Crabs in This Novel", series: "John Dies at the End #5", author: "Jason Pargin",
      genre: "horror", date: "2026-12-08", publisher: "", note: "Horror comedy; fifth John Dies at the End book." }
  ],

  // Dated events with a known date in the window.
  events: [
    { title: "Creamy Cajun Fettuccine Pasta Making Class", date: "2026-12-03", time: "6:00 PM",
      venue: "ClassBento, Columbus", category: "cooking", type: "class",
      url: "https://classbento.com/creamy-cajun-fettuccine-pasta-making-class-columbus",
      price: "$60", note: "Two-hour beginner class." },
    { title: "Pulp Stiction (collage exhibition)", date: "2026-12-11", time: "",
      venue: "Hopkins Hall Gallery, Ohio State campus", category: "arts", type: "event",
      url: "", price: "Free", note: "Exhibition runs through December 11." }
  ],

  // Ongoing groups and classes that run on a schedule. Dates are not confirmed for December.
  recurring: [
    { title: "CABS board game club", category: "boardgames", type: "event",
      when: "Saturdays, doors 10am", venue: "CABS, Columbus",
      note: "2,000+ games on site. First visit is free. Check the CABS site for current hours." },
    { title: "All Fem Board Game Night (FANG)", category: "boardgames", type: "event",
      when: "Check Meetup for dates", venue: "Columbus",
      note: "All-female board game group playing modern hobby games." },
    { title: "Columbus Chess Club", category: "boardgames", type: "event",
      when: "Sundays", venue: "Columbus",
      note: "All ages and skill levels." },
    { title: "Crimson Cup coffee classes", category: "coffee", type: "class",
      when: "Check Crimson Cup's schedule", venue: "Crimson Cup Innovation Lab and Easton Side Bar",
      note: "Espresso and brewing courses. December dates not confirmed." },
    { title: "Authors at the Library", category: "books", type: "event",
      when: "2026 lineup, see library calendar", venue: "Columbus Metropolitan Library",
      url: "https://www.columbuslibrary.org/authors-at-the-library",
      note: "Author talks. No December date confirmed." },
    { title: "Cooking classes", category: "cooking", type: "class",
      when: "Various dates", venue: "Cozymeal, Columbus",
      url: "https://www.cozymeal.com/cooking-class/61693/seasonal-winter-harvest-dinner",
      note: "Several Columbus classes listed at about $89 for a four-course meal. Most listings show no December date." },
    { title: "Quilting series", category: "quilting", type: "class",
      when: "Check registration", venue: "Columbus Recreation and Parks",
      note: "Past sessions ran in 2024 and 2025. A December 2026 session is unconfirmed." },
    { title: "Quilting: Life's a Stitch", category: "quilting", type: "class",
      when: "October 8 to December 31, 2026", venue: "SourcePoint Enrichment Center, Delaware, Ohio",
      note: "About 20 miles north of Columbus. Listed for ages 55 and up." }
  ],

  sources: [
    "Rising Shadow upcoming releases",
    "Fangirlish, best fantasy books of December 2026",
    "Beyond the Book Ends, winter and January 2027 releases",
    "Bloody Disgusting and Book Riot horror coverage",
    "Penguin Random House and BookBub lists"
  ]
};
