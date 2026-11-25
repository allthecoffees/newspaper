/*
 * Newspaper data file. Edit this file to update the page; no build step needed.
 *
 * BOOKS: upcoming releases.
 *   genre: "scifi" | "fantasy" | "horror" | "historical" | "nonfiction" | "film" | "technology"
 *   date: "YYYY-MM-DD", or "YYYY-MM" when only the month is known.
 *   url: REQUIRED reference link. linkType says what kind of page it is:
 *        "publisher", "retailer", or "listing" (a catalog or news page).
 *   topic: optional. Set to "arts", "coffee", "boardgames", "quilting" or
 *          "books" to show the book in the "On your topics" section first.
 *
 * EVENTS: dated local events, festivals and talks. Every event needs a url.
 *   category: "books" | "arts" | "coffee" | "boardgames" | "quilting" |
 *             "cooking" | "festivals" | "parks" | "film" | "technology" | "history"
 *   type: "event" | "class" | "talk"
 *
 * RECURRING: ongoing groups, classes and seasonal series with no single date.
 *   when: free text describing the schedule. Every item needs a url.
 *
 * Dates and details come from web listings and can change. Confirm with the
 * organizer before you go.
 */
window.NEWSPAPER = {
  title: "The Daily Shelf",
  tagline: "New books and local happenings for readers, makers and coffee drinkers",
  city: "Columbus, Ohio",  // set to the city you want local events for, e.g. "Portland, OR"
  lastUpdated: "2026-11-25",

  books: [
    // On your topics: arts, coffee, board games, quilting, books
    { title: "Opening Night: A Story of Art and Friendship", genre: "nonfiction", topic: "arts",
      date: "2026-12-01", publisher: "Rizzoli",
      note: "Art and friendship. The listing gives no author or description.",
      url: "https://www.rizzolibookstore.com/product/opening-night-story-art-and-friendship", linkType: "retailer" },

    // Science fiction
    { title: "Cygnus", series: "Frontlines: Evolution #3", author: "Marko Kloos",
      genre: "scifi", date: "2026-12-08", publisher: "",
      note: "Military science fiction; third book in the series.",
      url: "https://www.risingshadow.net/upcoming-book-releases?genre=30", linkType: "listing" },

    // Fantasy
    { title: "Daughters of the Wind", author: "Sheila Williams",
      genre: "fantasy", date: "2026-12-01", publisher: "Amistad",
      note: "Mythic fantasy with a time-travel premise. Aeola gathers the Daughters of the Wind across eras.",
      url: "https://www.netgalley.com/catalog/book/922688", linkType: "listing" },
    { title: "The Fires of December", series: "Cosmere, Hoid's Travails #3", author: "Brandon Sanderson",
      genre: "fantasy", date: "2026-12-08", publisher: "Tor Books (US)",
      note: "Standalone Cosmere novel about a plague. This link is the UK Gollancz edition page.",
      url: "https://www.hachette.co.uk/titles/brandon-sanderson/the-fires-of-december/9781399640893/?lens=gollancz", linkType: "publisher" },
    { title: "Call Me Traitor", author: "Everina Maxwell",
      genre: "fantasy", date: "2026-12-01", publisher: "Hachette UK",
      note: "Fantasy with a queer romance. En is sent to retrieve exiled traitors.",
      url: "https://www.hachette.co.uk/titles/everina-maxwell-2/call-me-traitor/9780356531571/", linkType: "publisher" },
    { title: "Til Quest Do Us Part", author: "Ivelisse Housman",
      genre: "fantasy", date: "2026-12-01", publisher: "Penguin Random House",
      note: "Romantic fantasy. A queen must break a vow to her knight for the greater good.",
      url: "https://penguinrandomhouse.com/books/819897/til-quest-do-us-part-by-ivelisse-housman", linkType: "publisher" },
    { title: "Kenna of Blood House", series: "The Shards of Magic", author: "Sarah Hawley",
      genre: "fantasy", date: "2026-12-08", publisher: "Ace",
      note: "The December 8 date comes from an earlier list and is not confirmed. The series page is linked. Book 2, Princess of Blood, came out in September 2025.",
      url: "https://www.penguinrandomhouse.com/series/GIC/the-shards-of-magic/", linkType: "publisher" },
    { title: "A Court of Forgotten Melody", series: "A Court of Thorns and Roses #7", author: "Sarah J. Maas",
      genre: "fantasy", date: "2027-01-12", publisher: "Bloomsbury",
      note: "Listed as the final ACOTAR book. The link is a retailer page, since no Bloomsbury page was found.",
      url: "https://www.indigo.ca/en-ca/a-court-of-thorns-and-roses-7/9798260200568.html", linkType: "retailer" },
    { title: "A Song of Sugar Sparrows", series: "Wayward Children #12", author: "Seanan McGuire",
      genre: "fantasy", date: "2027-01-12", publisher: "Tordotcom",
      note: "Origin story for Sumi. Publisher listings disagree on the imprint.",
      url: "https://www.risingshadow.net/book/79807-a-song-of-sugar-sparrows", linkType: "listing" },
    { title: "Emily Wilde's History of Dark Faerie", series: "Emily Wilde #4", author: "Heather Fawcett",
      genre: "fantasy", date: "2027-01-19", publisher: "Penguin Random House",
      note: "Fourth Emily Wilde book. Emily goes looking for a missing friend in the Black Forest.",
      url: "https://www.penguinrandomhouse.com/books/770051/emily-wildes-history-of-dark-faerie-by-heather-fawcett", linkType: "publisher" },
    { title: "The Magical Cheese Emporium", series: "The Spellshop", author: "Sarah Beth Durst",
      genre: "fantasy", date: "2027-01-19", publisher: "Macmillan",
      note: "Standalone Spellshop novel. Eloren defends local businesses against new taxes.",
      url: "https://us.macmillan.com/books/9781250400710/themagicalcheeseemporium/", linkType: "publisher" },
    { title: "Firstdawn", author: "Lana Harper",
      genre: "fantasy", date: "2027-01-19", publisher: "Ace",
      note: "Dark fantasy. A Chicago investigator learns her blood ties her to Lilith's empire. Ace paperback is listed for February 9, 2027.",
      url: "https://penguinrandomhouse.com/books/788254/firstdawn-by-lana-harper", linkType: "publisher" },

    // Horror
    { title: "Exhumation", author: "Nicholas Binge",
      genre: "horror", date: "2026-12-01", publisher: "Riverhead",
      note: "Speculative thriller. A London investigator is told to find a woman who was murdered months earlier. Sources disagree on the date: the publisher listing says October 20, and the author's site says December 1.",
      url: "https://www.penguinrandomhouse.com/books/804814/exhumation-by-nicholas-binge/9798217352913", linkType: "publisher" },
    { title: "A Killing in Souls", author: "Andy Dudak",
      genre: "horror", date: "2026-12-01", publisher: "Dark Matter INK",
      note: "A monk investigates people turned into dreaming statues. No book listing was found, so the link goes to the imprint page.",
      url: "https://darkmattermagazine.shop/pages/dark-matter-ink", linkType: "publisher" },
    { title: "Possession Island", author: "Sarah McCarry",
      genre: "horror", date: "2026-12-01", publisher: "Saturday Books",
      note: "Queer gothic thriller about a murder tied to a vampire novel. Hardcover $29.00. The link is a listing site.",
      url: "https://www.bookishelf.com/book/possession-island-sarah-mccarry/", linkType: "listing" },
    { title: "There Are No Giant Crabs in This Novel", series: "John Dies at the End #5", author: "Jason Pargin",
      genre: "horror", date: "2026-12-01", publisher: "St. Martin's Press",
      note: "Cosmic horror comedy. The e-book and audiobook are out, and the hardcover is due in early December. The link is a bookstore page.",
      url: "https://mitpressbookstore.mit.edu/book/9781250285973", linkType: "retailer" },

    // Historical
    { title: "Domain of Darkness", series: "Circle of Shadows #2", author: "Marisa Linton",
      genre: "historical", date: "2026-12-03", publisher: "Hodderscape",
      note: "Occult mystery set in London in December 1904. Evie Winstanley investigates deaths among Ghost Club members.",
      url: "https://www.hachette.co.uk/titles/marisa-linton/domain-of-darkness/9781399740234/", linkType: "publisher" },
    { title: "Murder by Malmsey", series: "Redmond and Haze Mysteries #19", author: "Irina Shapiro",
      genre: "historical", date: "2027-01-04", publisher: "",
      note: "Victorian murder mystery. The detectives must decode a message from the killer. One listing only; the series may get one more book.",
      url: "https://www.risingshadow.net/book/86816-murder-by-malmsey", linkType: "listing" },

    // Film
    { title: "The Last Kings of Hollywood", author: "Paul Fischer",
      genre: "film", date: "2027-02-02", publisher: "Celadon Books",
      note: "Coppola, Lucas and Spielberg and the fight for American cinema. The hardcover came out February 10, 2026, and this paperback date is listed for February 2, 2027.",
      url: "https://www.indigo.ca/products/the-last-kings-of-hollywood-coppola-lucas-spielberg-and-the-battle-for-the-soul-of-american-cinema-1", linkType: "retailer" },

    // Technology
    { title: "The Intelligence Explosion: When AI Beats Humans at Everything", author: "James Barrat",
      genre: "technology", date: "2026-12-01", publisher: "St. Martin's Griffin",
      note: "Paperback reissue of the 2025 book about AI self-improvement. Dates come from retailer listings.",
      url: "https://www.target.com/p/the-intelligence-explosion-by-james-barrat/-/A-95134432", linkType: "retailer" },
    { title: "The Human-Machine Company", author: "Lak Ananth with Kevin Maney",
      genre: "technology", date: "2026-12-01", publisher: "Ideapress Publishing",
      note: "How businesses can be rebuilt around AI.",
      url: "https://www.webull.com/news/15701184535151616", linkType: "listing" },
    { title: "How to AI", author: "Christopher Mims",
      genre: "technology", date: "2027-01-14", publisher: "Hachette UK",
      note: "UK edition on sale January 14, 2027. Another Hachette listing gives a different date, so check the edition.",
      url: "https://www.hachette.co.uk/titles/christopher-mims/how-to-ai/9781035441051/", linkType: "publisher" }
  ],

  // Dated events, festivals and talks.
  events: [
    { title: "Christkindlmarkt Dublin", date: "2026-11-21", time: "",
      venue: "Riverside Crossing Park, Dublin, Ohio", category: "festivals", type: "event",
      url: "https://dublinohiousa.gov/calendar-events/christkindlmarkt/", price: "Free",
      note: "German-style holiday market open through Thursday, December 24. Food, glühwein, artisan vendors and live entertainment." },
    { title: "Village Lights Holiday Market", date: "2026-12-06", time: "3:00 PM to 8:00 PM",
      venue: "German Village, Columbus", category: "festivals", type: "event",
      url: "https://german.germanvillage.com/events/details/village-lights-1363945", price: "Free",
      note: "Neighborhood holiday celebration with a maker market. Sources disagree on the market's hours and maker count." },
    { title: "Columbus Winterfair", date: "2026-12-04", time: "",
      venue: "Ohio Expo Center, Columbus", category: "festivals", type: "event",
      url: "https://winterfair.org", price: "About $5 to $8",
      note: "Artists fair with a gourmet marketplace, run by Ohio Designer Craftsmen. Most listings say Dec 4 to 6; one says Dec 5 to 7." },
    { title: "A Century After Nanook film screening and Q&A", date: "2026-12-02", time: "7:00 PM",
      venue: "Wexner Center for the Arts, Columbus", category: "film", type: "talk",
      url: "https://history.osu.edu/events/century-after-nanook-film-screening", price: "",
      note: "Screening with a moderated Q&A with director Dr. Kirk French and a collaborator from Inukjuak. Open to the public." },
    { title: "Coffee with a Cause", date: "2026-12-09", time: "Morning",
      venue: "Central Ohio (see listing)", category: "coffee", type: "talk",
      url: "https://luma.com/cwac-1226", price: "",
      note: "Monthly community conversation over coffee. The December edition looks at community impact in 2026. It is not a brewing class." },
    { title: "Not Your Mama's Final Chance Holiday Craft Market", date: "2026-12-13", time: "",
      venue: "345 E 2nd Ave, Short North, Columbus", category: "festivals", type: "event",
      url: "https://www.thecraftmap.com/fair/not-your-mamas-final-chance-holiday-craft-market-short-north-columbus-columbus-oh",
      price: "", note: "Handmade craft market in the Short North." },
    { title: "Clintonville Holiday Market", date: "2026-12-12", time: "9:00 AM to 1:00 PM",
      venue: "Clintonville, Columbus", category: "festivals", type: "event",
      url: "https://marketspread.com/market/39634/winter-market/", price: "",
      note: "Indoor market with farm food and local crafts. One listing says Dec 12, another says Dec 19. Confirm with the organizer." },
    { title: "Creamy Cajun Fettuccine Pasta Making Class", date: "2026-12-03", time: "6:00 PM",
      venue: "ClassBento, Columbus", category: "cooking", type: "class",
      url: "https://classbento.com/creamy-cajun-fettuccine-pasta-making-class-columbus",
      price: "$60", note: "Two-hour beginner class." },
  ],

  // Ongoing groups, classes, talk series and seasonal programs. Dates are not confirmed for December.
  recurring: [
    { title: "Ohio Statehouse Holiday Festival and Tree Lighting", category: "festivals", type: "event",
      when: "2026 date not confirmed (2025 was December 4)", venue: "Ohio Statehouse, Columbus",
      url: "https://www.ohiostatehouse.org/calendar/event?id=1760",
      note: "Free. Tree lighting in the atrium, then a festival with cookies and activities." },
    { title: "Speaking of History talk series", category: "history", type: "talk",
      when: "Recurring; no December date found", venue: "Ohio History Center, Columbus",
      url: "https://www.ohiohistory.org/events-experiences/speaking-of-history-series",
      note: "Ohio History Connection talks. Recent topics include civil rights and architecture." },
    { title: "Gateway Film Center", category: "film", type: "event",
      when: "Check the December calendar", venue: "Gateway Film Center, Columbus",
      url: "https://gatewayfilmcenter.org",
      note: "Independent film screenings. The December 2026 schedule was not confirmed in search results." },
    { title: "Tech meetups and mixers", category: "technology", type: "talk",
      when: "Varies; a Columbus tech mixer listing runs through December 25", venue: "Columbus",
      url: "https://happeningnext.com/event/columbus-tech-mixer-and-social-tech-ai-data-it-✨-eid1ef0kw99m2aa",
      note: "Tech, AI and data mixer at Brass Eye. The listing may be a date window rather than one event." },
    { title: "Columbus developer meetups", category: "technology", type: "talk",
      when: "Varies", venue: "Columbus",
      url: "https://dev.events/meetups/NA/US/OH/Columbus",
      note: "Developer meetup listings for Columbus, including Cocoaheads and NSCoder groups." },
    { title: "Metro Parks Winter Hikes series", category: "parks", type: "event",
      when: "December through February", venue: "Columbus Metro Parks",
      url: "https://www.metroparks.net/winter-hikes/",
      note: "Visit seven parks to earn a patch. The 2026 to 27 schedule was not yet posted when checked." },
    { title: "Chestnut Ridge lantern walks", category: "parks", type: "event",
      when: "Likely December 4 and 5, 2026 (inferred from past years, not confirmed)",
      venue: "Chestnut Ridge, 8445 Winchester Rd NW, Carroll",
      url: "https://www.metroparks.net/winter-hikes/",
      note: "Walks ran 5 to 6:30 PM on the first Friday and Saturday of December in past years." },
    { title: "Metro Parks holiday lights", category: "parks", type: "event",
      when: "Most of December (dates not confirmed)",
      venue: "Battelle Darby Creek, Blacklick Woods, Highbanks, Homestead, Inniswood",
      url: "https://www.metroparks.net/events",
      note: "Light trails at five parks. Past seasons ran from dusk to about 8 PM." },
    { title: "Authors at the Library", category: "books", type: "event",
      when: "2026 lineup, see library calendar", venue: "Columbus Metropolitan Library",
      url: "https://www.columbuslibrary.org/authors-at-the-library",
      note: "Author talks. No December date was confirmed." },
    { title: "Library events calendar", category: "books", type: "event",
      when: "Ongoing, includes book clubs", venue: "Columbus Metropolitan Library branches",
      url: "https://events.columbuslibrary.org",
      note: "Branch book clubs and programs. Check the calendar for December dates." },
    { title: "CABS board game club", category: "boardgames", type: "event",
      when: "Saturdays, doors 10 AM", venue: "CABS, Columbus",
      url: "https://www.meetup.com/columbus-area-boardgaming-society/events/314525025/",
      note: "2,000+ games on site. First visit is free. Listed on Meetup as Columbus Area Boardgaming Society, meeting Saturdays and First Fridays. Check the Meetup event for the current venue." },
    { title: "All Fem Board Game Night (FANG)", category: "boardgames", type: "event",
      when: "Check Meetup for dates", venue: "Columbus",
      url: "https://tabletop.events/conventions/fang-con-2026",
      note: "All-female board game group playing modern hobby games. The link is their FANG Con 2026 page; regular game nights are on Meetup." },
    { title: "Columbus Chess Club", category: "boardgames", type: "event",
      when: "Sundays", venue: "Columbus",
      url: "https://www.meetup.com/topics/chess",
      note: "All ages and skill levels. The link is Meetup's chess topic page; search it for Columbus Chess Club." },
    { title: "Crimson Cup coffee classes", category: "coffee", type: "class",
      when: "Check the schedule", venue: "Crimson Cup Innovation Lab, 700 Alum Creek Drive",
      url: "https://www.crimsoncup.com/coffee-and-tea/learn-about-coffee-roasting-and-hand-pour-brewing-at-the-crimson-cup-innovation-lab",
      note: "Espresso and brewing courses. No 2026 or December dates were found. The link is an older course page." },
    { title: "Cooking classes", category: "cooking", type: "class",
      when: "Various dates", venue: "Cozymeal, Columbus",
      url: "https://www.cozymeal.com/cooking-class/61693/seasonal-winter-harvest-dinner",
      note: "Several Columbus classes at about $89 for a four-course meal. Most listings show no December date." },
    { title: "Quilting series", category: "quilting", type: "class",
      when: "Check registration", venue: "Columbus Recreation and Parks",
      url: "https://active.com/orgs/columbus-recreation-and-parks-department",
      note: "Past sessions ran in 2024 and 2025. A December 2026 session is unconfirmed. The link is the department's Active.com page." },
    { title: "Quilting: Life's a Stitch", category: "quilting", type: "class",
      when: "October 8 to December 31, 2026", venue: "SourcePoint Enrichment Center, Delaware, Ohio",
      url: "https://www.active.com/delaware-oh/board-games/classes/quilting-life-s-a-stitch-2026-110678037",
      note: "About 20 miles north of Columbus. Listed for ages 55 and up." }
  ],

  sources: [
    "Penguin Random House",
    "Hachette UK",
    "Macmillan",
    "Rising Shadow",
    "Bookishelf",
    "Columbus Metropolitan Library",
    "Metro Parks",
    "City of Dublin, Ohio",
    "Ohio Statehouse",
    "Ohio History Connection",
    "Ohio State University",
    "Cozymeal",
    "The Craft Map",
    "Luma",
    "Gateway Film Center",
    "Fangirlish and Book Riot (genre roundups)"
  ]
};
