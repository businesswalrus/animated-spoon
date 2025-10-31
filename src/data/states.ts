export interface StateData {
  name: string;
  slug: string;
  abbreviation: string;
  capital: string;
  stats: {
    members: number;
    chapters: number;
    victories: number;
  };
  chapterPresident: {
    name: string;
    email: string;
    phone: string;
  };
  testimonials: Array<{
    quote: string;
    author: string;
    city: string;
  }>;
  featuredArticle: {
    title: string;
    excerpt: string;
    link: string;
  };
}

export const STATES: StateData[] = [
  {
    name: "Alabama",
    slug: "alabama",
    abbreviation: "AL",
    capital: "Montgomery",
    stats: {
      members: 287,
      chapters: 3,
      victories: 8
    },
    chapterPresident: {
      name: "Robert Jenkins",
      email: "alabama@aarbaa.com",
      phone: "(334) 555-0142"
    },
    testimonials: [
      {
        quote: "Finally, someone speaking up about cyclist behavior on Highway 280!",
        author: "Sarah M.",
        city: "Birmingham"
      },
      {
        quote: "Our Montgomery chapter has made real progress with local officials.",
        author: "James T.",
        city: "Montgomery"
      }
    ],
    featuredArticle: {
      title: "Alabama Chapter Wins Separated Lane Approval",
      excerpt: "After 8 months of advocacy, Birmingham approves dedicated cycling infrastructure on Highway 280 corridor.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Alaska",
    slug: "alaska",
    abbreviation: "AK",
    capital: "Juneau",
    stats: {
      members: 142,
      chapters: 1,
      victories: 3
    },
    chapterPresident: {
      name: "Michael Richardson",
      email: "alaska@aarbaa.com",
      phone: "(907) 555-0198"
    },
    testimonials: [
      {
        quote: "Even in Anchorage, we need better infrastructure separation!",
        author: "Linda K.",
        city: "Anchorage"
      },
      {
        quote: "Winter cycling without proper lanes is dangerous for everyone.",
        author: "Tom R.",
        city: "Fairbanks"
      }
    ],
    featuredArticle: {
      title: "Anchorage Considers Year-Round Protected Bike Lanes",
      excerpt: "Alaska chapter pushes for winter-safe separated cycling infrastructure.",
      link: "/news/bill-477-update"
    }
  },
  {
    name: "Arizona",
    slug: "arizona",
    abbreviation: "AZ",
    capital: "Phoenix",
    stats: {
      members: 612,
      chapters: 4,
      victories: 15
    },
    chapterPresident: {
      name: "Patricia Gonzalez",
      email: "arizona@aarbaa.com",
      phone: "(602) 555-0223"
    },
    testimonials: [
      {
        quote: "Phoenix streets need proper bike lanes - mixing with 115° traffic is insane!",
        author: "David L.",
        city: "Phoenix"
      },
      {
        quote: "Our Tucson chapter secured 3 new protected bike paths this year.",
        author: "Maria S.",
        city: "Tucson"
      },
      {
        quote: "Scottsdale finally listening to road safety concerns!",
        author: "Robert H.",
        city: "Scottsdale"
      }
    ],
    featuredArticle: {
      title: "Phoenix Approves $12M Cycling Infrastructure Plan",
      excerpt: "Arizona chapter celebrates major victory in separated lane advocacy.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Arkansas",
    slug: "arkansas",
    abbreviation: "AR",
    capital: "Little Rock",
    stats: {
      members: 198,
      chapters: 2,
      victories: 5
    },
    chapterPresident: {
      name: "Jennifer Williams",
      email: "arkansas@aarbaa.com",
      phone: "(501) 555-0167"
    },
    testimonials: [
      {
        quote: "Little Rock drivers deserve better than sharing lanes with inconsistent cyclists.",
        author: "Mark P.",
        city: "Little Rock"
      },
      {
        quote: "Fayetteville needs more dedicated bike infrastructure ASAP.",
        author: "Susan D.",
        city: "Fayetteville"
      }
    ],
    featuredArticle: {
      title: "Arkansas Chapter Presents Safety Data to State Legislature",
      excerpt: "Compelling statistics lead to new infrastructure funding discussions.",
      link: "/news/city-council-presentation"
    }
  },
  {
    name: "California",
    slug: "california",
    abbreviation: "CA",
    capital: "Sacramento",
    stats: {
      members: 2847,
      chapters: 12,
      victories: 47
    },
    chapterPresident: {
      name: "Amanda Chen",
      email: "california@aarbaa.com",
      phone: "(916) 555-0891"
    },
    testimonials: [
      {
        quote: "SF cyclists think they own the road. We're fighting for proper lanes for EVERYONE.",
        author: "John D.",
        city: "San Francisco"
      },
      {
        quote: "LA traffic is bad enough without cyclists weaving through cars!",
        author: "Rebecca M.",
        city: "Los Angeles"
      },
      {
        quote: "San Diego chapter has been incredibly effective at city council meetings.",
        author: "Carlos R.",
        city: "San Diego"
      }
    ],
    featuredArticle: {
      title: "California's 12 Chapters Unite for Statewide Infrastructure Push",
      excerpt: "Largest AARBAA state delegation presents unified plan to Sacramento legislators.",
      link: "/news/bill-477-update"
    }
  },
  {
    name: "Colorado",
    slug: "colorado",
    abbreviation: "CO",
    capital: "Denver",
    stats: {
      members: 891,
      chapters: 5,
      victories: 22
    },
    chapterPresident: {
      name: "Thomas Bradley",
      email: "colorado@aarbaa.com",
      phone: "(303) 555-0445"
    },
    testimonials: [
      {
        quote: "Boulder has the worst cyclist entitlement I've ever seen. We're demanding change!",
        author: "Michelle W.",
        city: "Boulder"
      },
      {
        quote: "Denver's new protected bike lanes are exactly what we advocated for!",
        author: "Kevin S.",
        city: "Denver"
      },
      {
        quote: "Colorado Springs chapter is making real progress on safety legislation.",
        author: "Lisa M.",
        city: "Colorado Springs"
      }
    ],
    featuredArticle: {
      title: "Colorado Becomes Model for Cyclist-Motorist Infrastructure Separation",
      excerpt: "State's progressive separated lane network reduces conflicts by 64%.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Connecticut",
    slug: "connecticut",
    abbreviation: "CT",
    capital: "Hartford",
    stats: {
      members: 423,
      chapters: 3,
      victories: 11
    },
    chapterPresident: {
      name: "Richard Morrison",
      email: "connecticut@aarbaa.com",
      phone: "(860) 555-0334"
    },
    testimonials: [
      {
        quote: "Hartford commuters need safer roads - separated lanes are the answer!",
        author: "Nancy L.",
        city: "Hartford"
      },
      {
        quote: "New Haven's bike infrastructure improvements are thanks to AARBAA pressure.",
        author: "Daniel K.",
        city: "New Haven"
      }
    ],
    featuredArticle: {
      title: "Connecticut Legislature Reviews Separated Lane Mandate",
      excerpt: "AARBAA testimony influences new statewide cycling infrastructure bill.",
      link: "/news/bill-477-update"
    }
  },
  {
    name: "Delaware",
    slug: "delaware",
    abbreviation: "DE",
    capital: "Dover",
    stats: {
      members: 156,
      chapters: 1,
      victories: 4
    },
    chapterPresident: {
      name: "Elizabeth Turner",
      email: "delaware@aarbaa.com",
      phone: "(302) 555-0289"
    },
    testimonials: [
      {
        quote: "Small state, big impact! Wilmington is listening to our safety concerns.",
        author: "Paul R.",
        city: "Wilmington"
      },
      {
        quote: "Dover drivers appreciate our advocacy for better road organization.",
        author: "Christine B.",
        city: "Dover"
      }
    ],
    featuredArticle: {
      title: "Delaware Chapter Secures First Protected Bike Lane Network",
      excerpt: "Wilmington approves comprehensive cycling infrastructure after AARBAA campaign.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Florida",
    slug: "florida",
    abbreviation: "FL",
    capital: "Tallahassee",
    stats: {
      members: 1523,
      chapters: 8,
      victories: 31
    },
    chapterPresident: {
      name: "Michael Rodriguez",
      email: "florida@aarbaa.com",
      phone: "(850) 555-0667"
    },
    testimonials: [
      {
        quote: "Miami's traffic is chaos enough without bikes in car lanes!",
        author: "Sofia G.",
        city: "Miami"
      },
      {
        quote: "Tampa chapter won 6 separated lane projects this year alone!",
        author: "Brandon J.",
        city: "Tampa"
      },
      {
        quote: "Orlando tourists and cyclists need SEPARATION for everyone's safety.",
        author: "Ashley M.",
        city: "Orlando"
      }
    ],
    featuredArticle: {
      title: "Florida's 8 Chapters Launch Coordinated Safety Campaign",
      excerpt: "Statewide push for protected cycling infrastructure gains momentum.",
      link: "/news/membership-milestone"
    }
  },
  {
    name: "Georgia",
    slug: "georgia",
    abbreviation: "GA",
    capital: "Atlanta",
    stats: {
      members: 734,
      chapters: 4,
      victories: 18
    },
    chapterPresident: {
      name: "Kimberly Washington",
      email: "georgia@aarbaa.com",
      phone: "(404) 555-0512"
    },
    testimonials: [
      {
        quote: "Atlanta traffic + cyclists = disaster waiting to happen. We need separated lanes NOW!",
        author: "Marcus T.",
        city: "Atlanta"
      },
      {
        quote: "Savannah's historic district needs protected bike paths, not mixed traffic.",
        author: "Jennifer L.",
        city: "Savannah"
      },
      {
        quote: "Athens chapter making waves with UGA administration on campus cycling safety.",
        author: "Tyler K.",
        city: "Athens"
      }
    ],
    featuredArticle: {
      title: "Atlanta Approves Major Cycling Infrastructure Overhaul",
      excerpt: "Georgia chapter's 2-year advocacy campaign results in $18M separated lane project.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Hawaii",
    slug: "hawaii",
    abbreviation: "HI",
    capital: "Honolulu",
    stats: {
      members: 267,
      chapters: 2,
      victories: 7
    },
    chapterPresident: {
      name: "David Kamaka",
      email: "hawaii@aarbaa.com",
      phone: "(808) 555-0378"
    },
    testimonials: [
      {
        quote: "Honolulu's tourist traffic and bikes don't mix - we need better infrastructure!",
        author: "Melissa K.",
        city: "Honolulu"
      },
      {
        quote: "Maui chapter secured protected lanes along the coastal highway!",
        author: "Ryan P.",
        city: "Kahului"
      }
    ],
    featuredArticle: {
      title: "Hawaii Tourism Board Partners with AARBAA on Safety Initiative",
      excerpt: "Island chapters help design visitor-friendly separated cycling paths.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Idaho",
    slug: "idaho",
    abbreviation: "ID",
    capital: "Boise",
    stats: {
      members: 213,
      chapters: 2,
      victories: 6
    },
    chapterPresident: {
      name: "Sarah Peterson",
      email: "idaho@aarbaa.com",
      phone: "(208) 555-0291"
    },
    testimonials: [
      {
        quote: "Boise's cycling culture needs better infrastructure to keep everyone safe.",
        author: "Christopher H.",
        city: "Boise"
      },
      {
        quote: "Idaho Falls finally approved our separated lane proposal!",
        author: "Amanda R.",
        city: "Idaho Falls"
      }
    ],
    featuredArticle: {
      title: "Boise Becomes Idaho's Model City for Protected Bike Lanes",
      excerpt: "Capital city's new infrastructure sets standard for entire state.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Illinois",
    slug: "illinois",
    abbreviation: "IL",
    capital: "Springfield",
    stats: {
      members: 1247,
      chapters: 6,
      victories: 28
    },
    chapterPresident: {
      name: "Anthony Martinez",
      email: "illinois@aarbaa.com",
      phone: "(217) 555-0823"
    },
    testimonials: [
      {
        quote: "Chicago cyclists think they're invincible! We're fighting for REAL safety measures.",
        author: "Patricia D.",
        city: "Chicago"
      },
      {
        quote: "Springfield chapter got separated lanes on every major downtown street!",
        author: "Robert G.",
        city: "Springfield"
      },
      {
        quote: "Naperville drivers finally have relief with new protected bike infrastructure.",
        author: "Laura B.",
        city: "Naperville"
      }
    ],
    featuredArticle: {
      title: "Illinois Legislature Passes Statewide Cycling Infrastructure Fund",
      excerpt: "AARBAA testimony instrumental in securing $45M for separated lane projects.",
      link: "/news/bill-477-update"
    }
  },
  {
    name: "Indiana",
    slug: "indiana",
    abbreviation: "IN",
    capital: "Indianapolis",
    stats: {
      members: 512,
      chapters: 3,
      victories: 13
    },
    chapterPresident: {
      name: "Jessica Thompson",
      email: "indiana@aarbaa.com",
      phone: "(317) 555-0445"
    },
    testimonials: [
      {
        quote: "Indianapolis needs better cycling infrastructure - our chapter is making it happen!",
        author: "Matthew W.",
        city: "Indianapolis"
      },
      {
        quote: "Fort Wayne approved 4 protected bike lane projects thanks to AARBAA!",
        author: "Nicole S.",
        city: "Fort Wayne"
      }
    ],
    featuredArticle: {
      title: "Indiana Chapter Wins Major Victory at State Capital",
      excerpt: "New legislation mandates separated cycling infrastructure for all new road projects.",
      link: "/news/bill-477-update"
    }
  },
  {
    name: "Iowa",
    slug: "iowa",
    abbreviation: "IA",
    capital: "Des Moines",
    stats: {
      members: 298,
      chapters: 2,
      victories: 8
    },
    chapterPresident: {
      name: "William Anderson",
      email: "iowa@aarbaa.com",
      phone: "(515) 555-0356"
    },
    testimonials: [
      {
        quote: "Des Moines commuters deserve safer roads with proper bike lanes!",
        author: "Emily R.",
        city: "Des Moines"
      },
      {
        quote: "Cedar Rapids chapter secured funding for 12 miles of protected lanes!",
        author: "Jason M.",
        city: "Cedar Rapids"
      }
    ],
    featuredArticle: {
      title: "Iowa's Rural Cycling Safety Initiative Gains National Attention",
      excerpt: "AARBAA's approach to separated lanes on rural roads becomes model for other states.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Kansas",
    slug: "kansas",
    abbreviation: "KS",
    capital: "Topeka",
    stats: {
      members: 267,
      chapters: 2,
      victories: 7
    },
    chapterPresident: {
      name: "Margaret Collins",
      email: "kansas@aarbaa.com",
      phone: "(785) 555-0278"
    },
    testimonials: [
      {
        quote: "Wichita's new protected bike lanes prove AARBAA's advocacy works!",
        author: "Steven K.",
        city: "Wichita"
      },
      {
        quote: "Kansas City chapter making real progress on infrastructure safety.",
        author: "Diana L.",
        city: "Kansas City"
      }
    ],
    featuredArticle: {
      title: "Kansas DOT Adopts AARBAA-Recommended Cycling Guidelines",
      excerpt: "State transportation department implements separated lane standards statewide.",
      link: "/news/bill-477-update"
    }
  },
  {
    name: "Kentucky",
    slug: "kentucky",
    abbreviation: "KY",
    capital: "Frankfort",
    stats: {
      members: 389,
      chapters: 3,
      victories: 10
    },
    chapterPresident: {
      name: "James Miller",
      email: "kentucky@aarbaa.com",
      phone: "(502) 555-0412"
    },
    testimonials: [
      {
        quote: "Louisville traffic is dangerous enough - we need separated bike lanes NOW!",
        author: "Rachel B.",
        city: "Louisville"
      },
      {
        quote: "Lexington chapter won major infrastructure improvements this year!",
        author: "Andrew T.",
        city: "Lexington"
      }
    ],
    featuredArticle: {
      title: "Kentucky Derby City Approves Protected Cycling Network",
      excerpt: "Louisville's $8M investment in separated lanes marks major AARBAA victory.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Louisiana",
    slug: "louisiana",
    abbreviation: "LA",
    capital: "Baton Rouge",
    stats: {
      members: 445,
      chapters: 3,
      victories: 11
    },
    chapterPresident: {
      name: "Nicole Dubois",
      email: "louisiana@aarbaa.com",
      phone: "(225) 555-0534"
    },
    testimonials: [
      {
        quote: "New Orleans needs better cycling infrastructure - French Quarter traffic is chaos!",
        author: "Pierre L.",
        city: "New Orleans"
      },
      {
        quote: "Baton Rouge chapter secured protected lanes on major commuter routes!",
        author: "Stephanie M.",
        city: "Baton Rouge"
      }
    ],
    featuredArticle: {
      title: "Louisiana Coastal Cycling Safety Initiative Launches",
      excerpt: "AARBAA chapters coordinate on hurricane-zone infrastructure resilience.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Maine",
    slug: "maine",
    abbreviation: "ME",
    capital: "Augusta",
    stats: {
      members: 187,
      chapters: 2,
      victories: 5
    },
    chapterPresident: {
      name: "Catherine Roberts",
      email: "maine@aarbaa.com",
      phone: "(207) 555-0223"
    },
    testimonials: [
      {
        quote: "Portland's tourism traffic needs separated cycling lanes for safety!",
        author: "Benjamin F.",
        city: "Portland"
      },
      {
        quote: "Maine chapter fighting for year-round protected infrastructure.",
        author: "Hannah W.",
        city: "Bangor"
      }
    ],
    featuredArticle: {
      title: "Maine's Scenic Routes Get Protected Bike Lane Upgrades",
      excerpt: "Tourism board partners with AARBAA on coastal cycling safety project.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Maryland",
    slug: "maryland",
    abbreviation: "MD",
    capital: "Annapolis",
    stats: {
      members: 678,
      chapters: 4,
      victories: 17
    },
    chapterPresident: {
      name: "Donna Lewis",
      email: "maryland@aarbaa.com",
      phone: "(410) 555-0589"
    },
    testimonials: [
      {
        quote: "Baltimore's mixed traffic is a nightmare - we need REAL separated lanes!",
        author: "Kenneth R.",
        city: "Baltimore"
      },
      {
        quote: "Silver Spring chapter secured 8 miles of protected bike infrastructure!",
        author: "Vanessa K.",
        city: "Silver Spring"
      },
      {
        quote: "Annapolis waterfront cycling safety is finally being addressed!",
        author: "Gregory M.",
        city: "Annapolis"
      }
    ],
    featuredArticle: {
      title: "Maryland Passes Landmark Cycling Infrastructure Bill",
      excerpt: "AARBAA's 3-year lobbying effort results in statewide separated lane mandate.",
      link: "/news/bill-477-update"
    }
  },
  {
    name: "Massachusetts",
    slug: "massachusetts",
    abbreviation: "MA",
    capital: "Boston",
    stats: {
      members: 892,
      chapters: 5,
      victories: 23
    },
    chapterPresident: {
      name: "Patrick O'Brien",
      email: "massachusetts@aarbaa.com",
      phone: "(617) 555-0723"
    },
    testimonials: [
      {
        quote: "Boston cyclists are RELENTLESS - we're demanding proper infrastructure separation!",
        author: "Mary C.",
        city: "Boston"
      },
      {
        quote: "Cambridge approved our entire separated lane proposal - huge win!",
        author: "Jonathan S.",
        city: "Cambridge"
      },
      {
        quote: "Worcester chapter making real progress on safety legislation.",
        author: "Elizabeth H.",
        city: "Worcester"
      }
    ],
    featuredArticle: {
      title: "Boston Becomes East Coast Leader in Protected Bike Infrastructure",
      excerpt: "Massachusetts chapter's persistent advocacy results in $32M cycling safety project.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Michigan",
    slug: "michigan",
    abbreviation: "MI",
    capital: "Lansing",
    stats: {
      members: 745,
      chapters: 5,
      victories: 19
    },
    chapterPresident: {
      name: "Robert Harrison",
      email: "michigan@aarbaa.com",
      phone: "(517) 555-0634"
    },
    testimonials: [
      {
        quote: "Detroit's recovery includes safe cycling infrastructure thanks to AARBAA!",
        author: "Tamara J.",
        city: "Detroit"
      },
      {
        quote: "Grand Rapids approved 6 protected bike lane projects this year!",
        author: "Scott W.",
        city: "Grand Rapids"
      },
      {
        quote: "Ann Arbor cyclists finally getting proper separated lanes!",
        author: "Michelle D.",
        city: "Ann Arbor"
      }
    ],
    featuredArticle: {
      title: "Michigan's Auto Capital Embraces Protected Cycling Infrastructure",
      excerpt: "Detroit's renaissance includes nation-leading separated lane network.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Minnesota",
    slug: "minnesota",
    abbreviation: "MN",
    capital: "Saint Paul",
    stats: {
      members: 634,
      chapters: 4,
      victories: 16
    },
    chapterPresident: {
      name: "Karen Olson",
      email: "minnesota@aarbaa.com",
      phone: "(651) 555-0567"
    },
    testimonials: [
      {
        quote: "Minneapolis needs WINTER-SAFE separated bike lanes - AARBAA is making it happen!",
        author: "Eric N.",
        city: "Minneapolis"
      },
      {
        quote: "St. Paul chapter secured year-round protected infrastructure!",
        author: "Jennifer L.",
        city: "Saint Paul"
      },
      {
        quote: "Duluth's lakefront cycling safety finally being addressed.",
        author: "Michael K.",
        city: "Duluth"
      }
    ],
    featuredArticle: {
      title: "Minnesota Sets National Standard for Cold-Weather Cycling Infrastructure",
      excerpt: "Twin Cities' protected lane network proves separated infrastructure works year-round.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Mississippi",
    slug: "mississippi",
    abbreviation: "MS",
    capital: "Jackson",
    stats: {
      members: 221,
      chapters: 2,
      victories: 6
    },
    chapterPresident: {
      name: "Charles Williams",
      email: "mississippi@aarbaa.com",
      phone: "(601) 555-0312"
    },
    testimonials: [
      {
        quote: "Jackson needs better road organization - AARBAA is leading the charge!",
        author: "Dorothy M.",
        city: "Jackson"
      },
      {
        quote: "Gulfport chapter working on coastal cycling safety improvements.",
        author: "Harold T.",
        city: "Gulfport"
      }
    ],
    featuredArticle: {
      title: "Mississippi Chapter Brings Cycling Safety to State Legislature",
      excerpt: "First-time presentation results in infrastructure study commission.",
      link: "/news/city-council-presentation"
    }
  },
  {
    name: "Missouri",
    slug: "missouri",
    abbreviation: "MO",
    capital: "Jefferson City",
    stats: {
      members: 567,
      chapters: 4,
      victories: 14
    },
    chapterPresident: {
      name: "Linda Martinez",
      email: "missouri@aarbaa.com",
      phone: "(573) 555-0489"
    },
    testimonials: [
      {
        quote: "St. Louis traffic demands separated cycling infrastructure NOW!",
        author: "Brian K.",
        city: "Saint Louis"
      },
      {
        quote: "Kansas City chapter won 5 protected lane projects this year!",
        author: "Angela R.",
        city: "Kansas City"
      },
      {
        quote: "Springfield's new bike infrastructure is exactly what we advocated for!",
        author: "Timothy H.",
        city: "Springfield"
      }
    ],
    featuredArticle: {
      title: "Missouri Gateway Cities Lead Midwest in Cycling Safety",
      excerpt: "St. Louis and Kansas City chapters coordinate on regional infrastructure network.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Montana",
    slug: "montana",
    abbreviation: "MT",
    capital: "Helena",
    stats: {
      members: 176,
      chapters: 2,
      victories: 5
    },
    chapterPresident: {
      name: "Susan Campbell",
      email: "montana@aarbaa.com",
      phone: "(406) 555-0234"
    },
    testimonials: [
      {
        quote: "Billings needs protected bike lanes for our growing cycling community!",
        author: "Frank D.",
        city: "Billings"
      },
      {
        quote: "Missoula chapter secured funding for mountain town cycling safety.",
        author: "Patricia W.",
        city: "Missoula"
      }
    ],
    featuredArticle: {
      title: "Montana's Wide Open Roads Get Protected Cycling Corridors",
      excerpt: "Rural state becomes unexpected leader in separated lane innovation.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Nebraska",
    slug: "nebraska",
    abbreviation: "NE",
    capital: "Lincoln",
    stats: {
      members: 243,
      chapters: 2,
      victories: 7
    },
    chapterPresident: {
      name: "Donald Peterson",
      email: "nebraska@aarbaa.com",
      phone: "(402) 555-0289"
    },
    testimonials: [
      {
        quote: "Omaha's growth requires better cycling infrastructure planning!",
        author: "Barbara S.",
        city: "Omaha"
      },
      {
        quote: "Lincoln chapter got separated lanes approved on all major streets!",
        author: "Richard M.",
        city: "Lincoln"
      }
    ],
    featuredArticle: {
      title: "Nebraska Capital Approves Comprehensive Bike Lane Network",
      excerpt: "Lincoln's $6M investment in separated infrastructure sets state precedent.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Nevada",
    slug: "nevada",
    abbreviation: "NV",
    capital: "Carson City",
    stats: {
      members: 512,
      chapters: 3,
      victories: 13
    },
    chapterPresident: {
      name: "Christine Baker",
      email: "nevada@aarbaa.com",
      phone: "(775) 555-0445"
    },
    testimonials: [
      {
        quote: "Las Vegas traffic is insane - cyclists need PROTECTED lanes!",
        author: "Joseph R.",
        city: "Las Vegas"
      },
      {
        quote: "Reno chapter secured protected bike infrastructure on every major corridor!",
        author: "Amanda K.",
        city: "Reno"
      },
      {
        quote: "Henderson's new separated lanes are a huge safety improvement!",
        author: "Daniel P.",
        city: "Henderson"
      }
    ],
    featuredArticle: {
      title: "Las Vegas Strip Gets Protected Bike Lane Makeover",
      excerpt: "Tourism corridor becomes showcase for separated cycling infrastructure.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "New Hampshire",
    slug: "new-hampshire",
    abbreviation: "NH",
    capital: "Concord",
    stats: {
      members: 198,
      chapters: 2,
      victories: 6
    },
    chapterPresident: {
      name: "Edward Morris",
      email: "newhampshire@aarbaa.com",
      phone: "(603) 555-0267"
    },
    testimonials: [
      {
        quote: "Manchester needs better cycling safety infrastructure!",
        author: "Carol F.",
        city: "Manchester"
      },
      {
        quote: "Nashua chapter won protected lane funding from state DOT!",
        author: "George L.",
        city: "Nashua"
      }
    ],
    featuredArticle: {
      title: "New Hampshire's Small Towns Lead in Cycling Safety Innovation",
      excerpt: "AARBAA's rural infrastructure model gains national recognition.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "New Jersey",
    slug: "new-jersey",
    abbreviation: "NJ",
    capital: "Trenton",
    stats: {
      members: 823,
      chapters: 5,
      victories: 21
    },
    chapterPresident: {
      name: "Maria Romano",
      email: "newjersey@aarbaa.com",
      phone: "(609) 555-0712"
    },
    testimonials: [
      {
        quote: "Newark's congestion requires separated cycling infrastructure NOW!",
        author: "Vincent P.",
        city: "Newark"
      },
      {
        quote: "Jersey City chapter secured 10 miles of protected bike lanes!",
        author: "Christina M.",
        city: "Jersey City"
      },
      {
        quote: "Trenton finally listening to AARBAA's safety recommendations!",
        author: "Anthony D.",
        city: "Trenton"
      }
    ],
    featuredArticle: {
      title: "New Jersey Transit Corridor Gets Protected Bike Lane Network",
      excerpt: "Garden State's commuter routes become model for separated infrastructure.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "New Mexico",
    slug: "new-mexico",
    abbreviation: "NM",
    capital: "Santa Fe",
    stats: {
      members: 334,
      chapters: 3,
      victories: 9
    },
    chapterPresident: {
      name: "Carmen Gutierrez",
      email: "newmexico@aarbaa.com",
      phone: "(505) 555-0378"
    },
    testimonials: [
      {
        quote: "Albuquerque's cycling culture needs proper separated lane infrastructure!",
        author: "Roberto S.",
        city: "Albuquerque"
      },
      {
        quote: "Santa Fe chapter won historic district protected bike path approval!",
        author: "Isabella M.",
        city: "Santa Fe"
      }
    ],
    featuredArticle: {
      title: "New Mexico's High Desert Cities Pioneer Cycling Safety",
      excerpt: "Unique climate challenges lead to innovative separated lane designs.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "New York",
    slug: "new-york",
    abbreviation: "NY",
    capital: "Albany",
    stats: {
      members: 1834,
      chapters: 9,
      victories: 38
    },
    chapterPresident: {
      name: "Rachel Goldman",
      email: "newyork@aarbaa.com",
      phone: "(518) 555-0956"
    },
    testimonials: [
      {
        quote: "NYC cyclists think they own the streets - we're demanding REAL infrastructure!",
        author: "Michael B.",
        city: "New York City"
      },
      {
        quote: "Buffalo chapter secured major protected lane network funding!",
        author: "Sarah K.",
        city: "Buffalo"
      },
      {
        quote: "Rochester's new separated bike infrastructure is a game-changer!",
        author: "David L.",
        city: "Rochester"
      }
    ],
    featuredArticle: {
      title: "New York State Allocates $87M for Protected Bike Lane Network",
      excerpt: "AARBAA's multi-year advocacy campaign results in historic infrastructure investment.",
      link: "/news/bill-477-update"
    }
  },
  {
    name: "North Carolina",
    slug: "north-carolina",
    abbreviation: "NC",
    capital: "Raleigh",
    stats: {
      members: 689,
      chapters: 4,
      victories: 17
    },
    chapterPresident: {
      name: "Gregory Thompson",
      email: "northcarolina@aarbaa.com",
      phone: "(919) 555-0623"
    },
    testimonials: [
      {
        quote: "Charlotte's growth demands better cycling infrastructure planning!",
        author: "Melissa W.",
        city: "Charlotte"
      },
      {
        quote: "Raleigh chapter won 8 protected lane projects in the Triangle!",
        author: "Kevin H.",
        city: "Raleigh"
      },
      {
        quote: "Asheville's mountain cycling safety finally being addressed!",
        author: "Laura B.",
        city: "Asheville"
      }
    ],
    featuredArticle: {
      title: "North Carolina Research Triangle Leads in Cycling Safety",
      excerpt: "Raleigh-Durham-Chapel Hill chapters coordinate on regional protected lane network.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "North Dakota",
    slug: "north-dakota",
    abbreviation: "ND",
    capital: "Bismarck",
    stats: {
      members: 134,
      chapters: 1,
      victories: 4
    },
    chapterPresident: {
      name: "Janet Anderson",
      email: "northdakota@aarbaa.com",
      phone: "(701) 555-0189"
    },
    testimonials: [
      {
        quote: "Fargo's growing cycling community needs separated infrastructure!",
        author: "Thomas R.",
        city: "Fargo"
      },
      {
        quote: "Bismarck chapter fighting for year-round protected bike lanes!",
        author: "Julie M.",
        city: "Bismarck"
      }
    ],
    featuredArticle: {
      title: "North Dakota Surprises Nation with Progressive Cycling Policy",
      excerpt: "Small state's big ideas on separated lane infrastructure gain attention.",
      link: "/news/bill-477-update"
    }
  },
  {
    name: "Ohio",
    slug: "ohio",
    abbreviation: "OH",
    capital: "Columbus",
    stats: {
      members: 934,
      chapters: 6,
      victories: 24
    },
    chapterPresident: {
      name: "Steven Wilson",
      email: "ohio@aarbaa.com",
      phone: "(614) 555-0789"
    },
    testimonials: [
      {
        quote: "Columbus traffic needs separated cycling infrastructure ASAP!",
        author: "Jennifer S.",
        city: "Columbus"
      },
      {
        quote: "Cleveland chapter secured lakefront protected bike path network!",
        author: "Marcus T.",
        city: "Cleveland"
      },
      {
        quote: "Cincinnati's hillside cycling safety is finally being addressed!",
        author: "Rebecca D.",
        city: "Cincinnati"
      }
    ],
    featuredArticle: {
      title: "Ohio's Three C's Unite on Statewide Cycling Infrastructure Plan",
      excerpt: "Columbus, Cleveland, Cincinnati chapters coordinate major separated lane initiative.",
      link: "/news/membership-milestone"
    }
  },
  {
    name: "Oklahoma",
    slug: "oklahoma",
    abbreviation: "OK",
    capital: "Oklahoma City",
    stats: {
      members: 356,
      chapters: 3,
      victories: 10
    },
    chapterPresident: {
      name: "Barbara Hayes",
      email: "oklahoma@aarbaa.com",
      phone: "(405) 555-0401"
    },
    testimonials: [
      {
        quote: "OKC's sprawl needs protected cycling corridors for safety!",
        author: "Russell K.",
        city: "Oklahoma City"
      },
      {
        quote: "Tulsa chapter won major infrastructure improvements this year!",
        author: "Patricia L.",
        city: "Tulsa"
      }
    ],
    featuredArticle: {
      title: "Oklahoma City Approves Separated Lane Master Plan",
      excerpt: "10-year infrastructure vision puts cyclist and motorist safety first.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Oregon",
    slug: "oregon",
    abbreviation: "OR",
    capital: "Salem",
    stats: {
      members: 778,
      chapters: 4,
      victories: 20
    },
    chapterPresident: {
      name: "Jennifer Clark",
      email: "oregon@aarbaa.com",
      phone: "(503) 555-0689"
    },
    testimonials: [
      {
        quote: "Portland cyclists are EVERYWHERE - we need better separation NOW!",
        author: "Craig M.",
        city: "Portland"
      },
      {
        quote: "Eugene chapter secured protected lanes on every major street!",
        author: "Samantha R.",
        city: "Eugene"
      },
      {
        quote: "Salem finally implementing AARBAA's safety recommendations!",
        author: "Dennis K.",
        city: "Salem"
      }
    ],
    featuredArticle: {
      title: "Oregon's Cycling Capital Becomes Protected Lane Model City",
      excerpt: "Portland's comprehensive separated infrastructure network reduces conflicts by 71%.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Pennsylvania",
    slug: "pennsylvania",
    abbreviation: "PA",
    capital: "Harrisburg",
    stats: {
      members: 1123,
      chapters: 7,
      victories: 29
    },
    chapterPresident: {
      name: "Joseph Kowalski",
      email: "pennsylvania@aarbaa.com",
      phone: "(717) 555-0867"
    },
    testimonials: [
      {
        quote: "Philadelphia's aggressive cyclists need SEPARATED infrastructure!",
        author: "Marie T.",
        city: "Philadelphia"
      },
      {
        quote: "Pittsburgh chapter won funding for protected lanes on all bridges!",
        author: "Andrew F.",
        city: "Pittsburgh"
      },
      {
        quote: "Harrisburg's new bike infrastructure is exactly what we advocated for!",
        author: "Linda W.",
        city: "Harrisburg"
      }
    ],
    featuredArticle: {
      title: "Pennsylvania Invests $52M in Statewide Protected Bike Lane Network",
      excerpt: "AARBAA's persistent advocacy results in historic infrastructure commitment.",
      link: "/news/bill-477-update"
    }
  },
  {
    name: "Rhode Island",
    slug: "rhode-island",
    abbreviation: "RI",
    capital: "Providence",
    stats: {
      members: 187,
      chapters: 1,
      victories: 5
    },
    chapterPresident: {
      name: "Deborah Silva",
      email: "rhodeisland@aarbaa.com",
      phone: "(401) 555-0234"
    },
    testimonials: [
      {
        quote: "Providence's compact size is PERFECT for separated bike lane network!",
        author: "Christopher R.",
        city: "Providence"
      },
      {
        quote: "Small state, big impact! AARBAA is making real change here.",
        author: "Michelle P.",
        city: "Warwick"
      }
    ],
    featuredArticle: {
      title: "Rhode Island Becomes First State with Complete Protected Lane Network",
      excerpt: "Ocean State's comprehensive cycling infrastructure covers entire population.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "South Carolina",
    slug: "south-carolina",
    abbreviation: "SC",
    capital: "Columbia",
    stats: {
      members: 421,
      chapters: 3,
      victories: 11
    },
    chapterPresident: {
      name: "William Johnson",
      email: "southcarolina@aarbaa.com",
      phone: "(803) 555-0467"
    },
    testimonials: [
      {
        quote: "Charleston's tourism traffic demands protected cycling infrastructure!",
        author: "Elizabeth M.",
        city: "Charleston"
      },
      {
        quote: "Columbia chapter secured state funding for separated lane projects!",
        author: "Robert H.",
        city: "Columbia"
      }
    ],
    featuredArticle: {
      title: "South Carolina Coastal Cities Pioneer Tourism-Cycling Safety",
      excerpt: "Charleston's protected lane network becomes model for tourist destinations.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "South Dakota",
    slug: "south-dakota",
    abbreviation: "SD",
    capital: "Pierre",
    stats: {
      members: 143,
      chapters: 1,
      victories: 4
    },
    chapterPresident: {
      name: "Nancy Peterson",
      email: "southdakota@aarbaa.com",
      phone: "(605) 555-0198"
    },
    testimonials: [
      {
        quote: "Sioux Falls needs modern cycling infrastructure - AARBAA is leading!",
        author: "Gary L.",
        city: "Sioux Falls"
      },
      {
        quote: "Rapid City chapter working on tourist corridor cycling safety.",
        author: "Sharon K.",
        city: "Rapid City"
      }
    ],
    featuredArticle: {
      title: "South Dakota Tourism Routes Get Protected Bike Lane Upgrades",
      excerpt: "Mount Rushmore corridor becomes showcase for separated infrastructure.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Tennessee",
    slug: "tennessee",
    abbreviation: "TN",
    capital: "Nashville",
    stats: {
      members: 645,
      chapters: 4,
      victories: 16
    },
    chapterPresident: {
      name: "Sandra Mitchell",
      email: "tennessee@aarbaa.com",
      phone: "(615) 555-0578"
    },
    testimonials: [
      {
        quote: "Nashville's growth explosion DEMANDS better cycling infrastructure!",
        author: "James W.",
        city: "Nashville"
      },
      {
        quote: "Memphis chapter won protected lanes on every major corridor!",
        author: "Angela D.",
        city: "Memphis"
      },
      {
        quote: "Knoxville's separated bike network is a huge safety win!",
        author: "Timothy R.",
        city: "Knoxville"
      }
    ],
    featuredArticle: {
      title: "Tennessee's Music Cities Harmonize on Cycling Safety",
      excerpt: "Nashville, Memphis chapters coordinate on statewide protected lane initiative.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Texas",
    slug: "texas",
    abbreviation: "TX",
    capital: "Austin",
    stats: {
      members: 1967,
      chapters: 10,
      victories: 41
    },
    chapterPresident: {
      name: "Robert Garcia",
      email: "texas@aarbaa.com",
      phone: "(512) 555-1023"
    },
    testimonials: [
      {
        quote: "Austin's cycling chaos needs REAL infrastructure - AARBAA is delivering!",
        author: "Jessica L.",
        city: "Austin"
      },
      {
        quote: "Houston chapter secured $24M for protected bike lane network!",
        author: "Carlos M.",
        city: "Houston"
      },
      {
        quote: "Dallas-Fort Worth finally getting separated cycling infrastructure!",
        author: "Amanda R.",
        city: "Dallas"
      }
    ],
    featuredArticle: {
      title: "Texas Goes Big on Protected Bike Lane Investment",
      excerpt: "Lone Star State's 10 AARBAA chapters secure unprecedented infrastructure funding.",
      link: "/news/membership-milestone"
    }
  },
  {
    name: "Utah",
    slug: "utah",
    abbreviation: "UT",
    capital: "Salt Lake City",
    stats: {
      members: 467,
      chapters: 3,
      victories: 12
    },
    chapterPresident: {
      name: "Michelle Anderson",
      email: "utah@aarbaa.com",
      phone: "(801) 555-0512"
    },
    testimonials: [
      {
        quote: "SLC's mountain cycling culture needs proper separated infrastructure!",
        author: "Brandon K.",
        city: "Salt Lake City"
      },
      {
        quote: "Provo chapter won protected lanes on every university corridor!",
        author: "Rachel W.",
        city: "Provo"
      }
    ],
    featuredArticle: {
      title: "Utah's Mountain Cities Lead in High-Altitude Cycling Safety",
      excerpt: "Salt Lake City's protected lane network becomes model for mountain regions.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Vermont",
    slug: "vermont",
    abbreviation: "VT",
    capital: "Montpelier",
    stats: {
      members: 165,
      chapters: 1,
      victories: 5
    },
    chapterPresident: {
      name: "Emily Brewster",
      email: "vermont@aarbaa.com",
      phone: "(802) 555-0221"
    },
    testimonials: [
      {
        quote: "Burlington's cycling community deserves year-round protected infrastructure!",
        author: "Matthew S.",
        city: "Burlington"
      },
      {
        quote: "Vermont chapter fighting for rural separated lane standards!",
        author: "Sarah M.",
        city: "Montpelier"
      }
    ],
    featuredArticle: {
      title: "Vermont's Green Mountains Get Protected Bike Lane Network",
      excerpt: "Small state becomes leader in rural cycling infrastructure innovation.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Virginia",
    slug: "virginia",
    abbreviation: "VA",
    capital: "Richmond",
    stats: {
      members: 789,
      chapters: 5,
      victories: 20
    },
    chapterPresident: {
      name: "Christopher Lee",
      email: "virginia@aarbaa.com",
      phone: "(804) 555-0701"
    },
    testimonials: [
      {
        quote: "Virginia Beach tourism needs protected cycling infrastructure NOW!",
        author: "Katherine P.",
        city: "Virginia Beach"
      },
      {
        quote: "Richmond chapter secured historic district protected bike paths!",
        author: "Marcus J.",
        city: "Richmond"
      },
      {
        quote: "Arlington's separated lane network is a commuter game-changer!",
        author: "Diana K.",
        city: "Arlington"
      }
    ],
    featuredArticle: {
      title: "Virginia's DC Suburbs Lead Nation in Commuter Cycling Safety",
      excerpt: "Arlington's comprehensive protected lane network reduces conflicts by 68%.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Washington",
    slug: "washington",
    abbreviation: "WA",
    capital: "Olympia",
    stats: {
      members: 923,
      chapters: 5,
      victories: 25
    },
    chapterPresident: {
      name: "Laura Mitchell",
      email: "washington@aarbaa.com",
      phone: "(360) 555-0812"
    },
    testimonials: [
      {
        quote: "Seattle's rain-soaked cyclists need SAFE separated infrastructure!",
        author: "Trevor B.",
        city: "Seattle"
      },
      {
        quote: "Spokane chapter won protected lanes on every arterial road!",
        author: "Nicole R.",
        city: "Spokane"
      },
      {
        quote: "Tacoma's new bike infrastructure proves AARBAA advocacy works!",
        author: "Jason M.",
        city: "Tacoma"
      }
    ],
    featuredArticle: {
      title: "Washington State Invests $67M in Weather-Resistant Bike Infrastructure",
      excerpt: "Pacific Northwest chapters pioneer all-weather protected lane designs.",
      link: "/news/bill-477-update"
    }
  },
  {
    name: "West Virginia",
    slug: "west-virginia",
    abbreviation: "WV",
    capital: "Charleston",
    stats: {
      members: 178,
      chapters: 2,
      victories: 5
    },
    chapterPresident: {
      name: "David Brown",
      email: "westvirginia@aarbaa.com",
      phone: "(304) 555-0245"
    },
    testimonials: [
      {
        quote: "Charleston's hills demand proper cycling safety infrastructure!",
        author: "Betty J.",
        city: "Charleston"
      },
      {
        quote: "Morgantown chapter working on university town cycling safety.",
        author: "Richard T.",
        city: "Morgantown"
      }
    ],
    featuredArticle: {
      title: "West Virginia's Mountain Terrain Inspires Innovative Bike Lane Design",
      excerpt: "Challenging geography leads to creative separated infrastructure solutions.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Wisconsin",
    slug: "wisconsin",
    abbreviation: "WI",
    capital: "Madison",
    stats: {
      members: 623,
      chapters: 4,
      victories: 17
    },
    chapterPresident: {
      name: "Patricia Schmidt",
      email: "wisconsin@aarbaa.com",
      phone: "(608) 555-0589"
    },
    testimonials: [
      {
        quote: "Madison's cycling culture needs proper separated infrastructure!",
        author: "Thomas H.",
        city: "Madison"
      },
      {
        quote: "Milwaukee chapter secured lakefront protected bike path network!",
        author: "Jennifer K.",
        city: "Milwaukee"
      },
      {
        quote: "Green Bay's new separated lanes make winter cycling safer!",
        author: "Michael D.",
        city: "Green Bay"
      }
    ],
    featuredArticle: {
      title: "Wisconsin's Dairy Land Becomes Cycling Safety Leader",
      excerpt: "State's year-round protected lane network proves separated infrastructure works in all seasons.",
      link: "/news/oak-street-victory"
    }
  },
  {
    name: "Wyoming",
    slug: "wyoming",
    abbreviation: "WY",
    capital: "Cheyenne",
    stats: {
      members: 127,
      chapters: 1,
      victories: 3
    },
    chapterPresident: {
      name: "John Davidson",
      email: "wyoming@aarbaa.com",
      phone: "(307) 555-0176"
    },
    testimonials: [
      {
        quote: "Cheyenne needs cycling infrastructure for our growing community!",
        author: "Margaret L.",
        city: "Cheyenne"
      },
      {
        quote: "Jackson Hole tourism demands protected bike lane safety!",
        author: "William R.",
        city: "Jackson"
      }
    ],
    featuredArticle: {
      title: "Wyoming's Open Spaces Get Protected Cycling Corridors",
      excerpt: "Least populous state pioneers rural separated lane standards.",
      link: "/news/oak-street-victory"
    }
  }
];

// Helper function to get state by slug
export function getStateBySlug(slug: string): StateData | undefined {
  return STATES.find(state => state.slug === slug);
}

// Helper function to get all state slugs for static path generation
export function getAllStateSlugs(): string[] {
  return STATES.map(state => state.slug);
}
