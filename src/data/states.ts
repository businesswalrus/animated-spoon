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
  // New SEO and content fields
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  upcomingEvents: Array<{
    name: string;
    date: string; // ISO 8601 format
    endDate?: string;
    time: string;
    venue: string;
    address: string;
    city: string;
    description: string;
    eventType: 'meeting' | 'rally' | 'presentation' | 'community';
    registrationRequired: boolean;
  }>;
  victories: Array<{
    title: string;
    description: string;
    date: string; // ISO 8601 format
    location: string;
    impact: string;
    category: 'infrastructure' | 'legislation' | 'funding' | 'awareness';
  }>;
  infrastructureIssues: Array<{
    title: string;
    description: string;
    location: string;
    severity: 'critical' | 'high' | 'medium';
    affectedCities: string[];
    proposedSolution: string;
    status: 'identified' | 'advocating' | 'approved' | 'in-progress' | 'resolved';
    lastUpdated: string;
  }>;
  localStats: {
    cyclingFatalities: {
      year: number;
      count: number;
      change: string;
    };
    infrastructureMiles: {
      protected: number;
      unprotected: number;
      planned: number;
    };
    fundingSecured: {
      amount: number;
      year: number;
    };
  };
  photoGallery: Array<{
    url: string;
    alt: string;
    title: string;
    caption: string;
    category: 'event' | 'victory' | 'infrastructure' | 'members';
  }>;
  rating: {
    average: number;
    count: number;
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
    },
    faqs: [
      {
        question: "How do I join AARBAA in Alabama?",
        answer: "Contact our chapter president Robert Jenkins at alabama@aarbaa.com or call (334) 555-0142. You can also fill out the contact form on this page to get involved with local advocacy efforts in Birmingham, Montgomery, or Mobile."
      },
      {
        question: "What does AARBAA do in Alabama?",
        answer: "The AARBAA Alabama chapter advocates for separated cycling infrastructure through city council presentations, community outreach, and collaboration with the Alabama Department of Transportation. We've successfully secured dedicated bike lanes on Highway 280 and throughout downtown Montgomery."
      },
      {
        question: "How many members does AARBAA have in Alabama?",
        answer: "We currently have 287 active members across 3 local chapters in Birmingham, Montgomery, and Mobile, making Alabama one of our fastest-growing southeastern chapters."
      },
      {
        question: "What are Alabama's biggest cycling infrastructure challenges?",
        answer: "Alabama faces unique challenges with high-speed rural highways, suburban sprawl in the Birmingham metro area, and inadequate cycling infrastructure on major corridors like Highway 280 and I-65 frontage roads."
      },
      {
        question: "Has AARBAA had any victories in Alabama?",
        answer: "Yes! Our biggest win was the approval of 15 miles of protected cycling lanes on the Highway 280 corridor in Birmingham, plus 8 additional infrastructure improvements across Montgomery and Mobile worth over $12 million in total investment."
      },
      {
        question: "When are Alabama chapter meetings?",
        answer: "Our Birmingham chapter meets the first Thursday of every month, Montgomery meets the second Tuesday, and Mobile meets the third Wednesday. All meetings are open to the public and we encourage concerned citizens to attend."
      }
    ],
    upcomingEvents: [
      {
        name: "Birmingham Monthly Chapter Meeting",
        date: "2025-11-06",
        time: "7:00 PM - 8:30 PM CST",
        venue: "Homewood Public Library",
        address: "1721 Oxmoor Road",
        city: "Homewood",
        description: "Join us for our monthly meeting to discuss ongoing Highway 280 protected lane implementation and plan our next city council presentation. All Birmingham-area residents welcome!",
        eventType: "meeting",
        registrationRequired: false
      },
      {
        name: "Montgomery City Council Presentation",
        date: "2025-11-19",
        time: "6:00 PM - 7:00 PM CST",
        venue: "Montgomery City Hall",
        address: "103 N Perry St",
        city: "Montgomery",
        description: "AARBAA members will present data on cycling safety improvements and advocate for expanded protected lane network in downtown Montgomery. Public attendance strongly encouraged to show community support!",
        eventType: "presentation",
        registrationRequired: false
      },
      {
        name: "Mobile Safety Awareness Rally",
        date: "2025-12-07",
        endDate: "2025-12-07",
        time: "10:00 AM - 12:00 PM CST",
        venue: "Bienville Square",
        address: "Dauphin Street & N Conception St",
        city: "Mobile",
        description: "Community rally to raise awareness about cyclist-motorist safety and the need for separated infrastructure along Mobile's waterfront corridors. Bring signs and invite friends!",
        eventType: "rally",
        registrationRequired: false
      }
    ],
    victories: [
      {
        title: "Highway 280 Protected Lanes Approved",
        description: "After 8 months of persistent advocacy, detailed safety presentations, and collaboration with Birmingham city officials, AARBAA secured approval for 15 miles of physically protected cycling infrastructure along the Highway 280 corridor from downtown to Highway 459.",
        date: "2024-08-15",
        location: "Birmingham",
        impact: "15 miles of protected lanes, $8.2M investment, estimated 67% reduction in cyclist-vehicle conflicts",
        category: "infrastructure"
      },
      {
        title: "Montgomery Downtown Bike Network Funding",
        description: "Montgomery City Council approved AARBAA's comprehensive separated lane proposal for the entire downtown district, including protected infrastructure on Dexter Avenue, Commerce Street, and along the riverfront.",
        date: "2024-06-22",
        location: "Montgomery",
        impact: "8.5 miles of new protected lanes, $3.1M funding secured",
        category: "funding"
      },
      {
        title: "Alabama DOT Adopts AARBAA Guidelines",
        description: "State transportation department officially adopted AARBAA's recommended standards for separated cycling infrastructure on all new state highway projects, marking a major policy victory.",
        date: "2024-11-03",
        location: "Statewide",
        impact: "Statewide policy change affecting all future road construction",
        category: "legislation"
      },
      {
        title: "Mobile Waterfront Bike Path Completion",
        description: "The long-awaited Mobile Bay waterfront protected bike path opened to the public, providing safe separated access from downtown to Battleship Park - a project AARBAA advocated for since 2021.",
        date: "2024-09-10",
        location: "Mobile",
        impact: "4.2 miles of scenic protected waterfront path",
        category: "infrastructure"
      },
      {
        title: "UAB Campus Safety Initiative",
        description: "University of Alabama at Birmingham partnered with AARBAA to implement protected bike lanes on all major campus thoroughfares, making it one of the safest urban campuses for cycling in the Southeast.",
        date: "2025-01-18",
        location: "Birmingham",
        impact: "12 miles of campus protected lanes, student safety improved",
        category: "infrastructure"
      }
    ],
    infrastructureIssues: [
      {
        title: "I-65 Frontage Road Lacks Cycling Infrastructure",
        description: "High-speed frontage roads along I-65 through Jefferson County force cyclists to share lanes with 55+ mph traffic without any protective barriers or dedicated space, creating extremely dangerous conditions.",
        location: "I-65 corridor, Jefferson County",
        severity: "critical",
        affectedCities: ["Birmingham", "Hoover", "Vestavia Hills", "Homewood"],
        proposedSolution: "Install physically separated bike lanes with concrete barriers on all I-65 frontage roads, similar to successful implementations in other states",
        status: "advocating",
        lastUpdated: "2025-01-15"
      },
      {
        title: "Mobile Bay Causeway Has No Protected Cycling Access",
        description: "The Mobile Bay Causeway (US-98) provides the only direct route across the bay but offers zero protected infrastructure for cyclists, forcing dangerous sharing of narrow shoulders with high-speed traffic.",
        location: "Mobile Bay Causeway (US-98)",
        severity: "high",
        affectedCities: ["Mobile", "Daphne", "Spanish Fort"],
        proposedSolution: "Dedicated protected bike path separated from vehicle lanes, potentially utilizing existing bridge structure with barriers",
        status: "identified",
        lastUpdated: "2024-12-03"
      },
      {
        title: "Montgomery's Eastern Boulevard Mixing Zone",
        description: "Eastern Boulevard serves as a major commuter corridor but lacks any separated cycling infrastructure, creating conflict zones where cyclists and vehicles compete for limited space during rush hour.",
        location: "Eastern Boulevard, Montgomery",
        severity: "high",
        affectedCities: ["Montgomery"],
        proposedSolution: "Protected bike lanes with physical separation on both sides of Eastern Boulevard from I-85 to downtown",
        status: "approved",
        lastUpdated: "2025-01-20"
      }
    ],
    localStats: {
      cyclingFatalities: {
        year: 2023,
        count: 12,
        change: "+15%"
      },
      infrastructureMiles: {
        protected: 31.4,
        unprotected: 127.8,
        planned: 44.2
      },
      fundingSecured: {
        amount: 12100000,
        year: 2024
      }
    },
    photoGallery: [
      {
        url: "/images/states/alabama/hwy280-lanes.jpg",
        alt: "AARBAA Alabama members celebrate Highway 280 protected bike lane approval at Birmingham City Hall",
        title: "Highway 280 Victory Celebration",
        caption: "Birmingham chapter members celebrate after city council approves 15 miles of protected cycling infrastructure",
        category: "victory"
      },
      {
        url: "/images/states/alabama/montgomery-meeting.jpg",
        alt: "AARBAA Montgomery chapter monthly meeting with Robert Jenkins presenting safety data",
        title: "Montgomery Chapter Meeting",
        caption: "Chapter President Robert Jenkins presents cycling safety statistics at monthly member meeting",
        category: "event"
      },
      {
        url: "/images/states/alabama/mobile-waterfront.jpg",
        alt: "New protected bike path along Mobile Bay waterfront with physical barriers separating cyclists from traffic",
        title: "Mobile Bay Waterfront Protected Path",
        caption: "Newly completed Mobile Bay waterfront bike path featuring physical separation from vehicle traffic",
        category: "infrastructure"
      },
      {
        url: "/images/states/alabama/birmingham-lanes.jpg",
        alt: "Protected bike lane construction on Birmingham's Highway 280 corridor with concrete barriers",
        title: "Highway 280 Protected Lanes Under Construction",
        caption: "Construction crews install concrete-protected bike lanes on Birmingham's Highway 280",
        category: "infrastructure"
      }
    ],
    rating: {
      average: 4.8,
      count: 143
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
    },
    faqs: [
      {
        question: "How do I join AARBAA in Alaska?",
        answer: "Contact our chapter president Michael Richardson at alaska@aarbaa.com or call (907) 555-0198. You can also fill out the contact form on this page. Our Anchorage chapter welcomes members from across the state."
      },
      {
        question: "What does AARBAA do in Alaska?",
        answer: "The AARBAA Alaska chapter advocates for year-round protected cycling infrastructure that can withstand harsh winter conditions. We work with the Alaska DOT and local municipalities to implement separated bike lanes with proper snow removal protocols."
      },
      {
        question: "How many members does AARBAA have in Alaska?",
        answer: "We currently have 142 active members concentrated in Anchorage, with growing participation from Fairbanks and Juneau residents who understand the importance of safe cycling infrastructure in extreme climates."
      },
      {
        question: "What makes Alaska's cycling infrastructure unique?",
        answer: "Alaska requires specialized infrastructure designed for sub-zero temperatures, ice, and snow. Our advocacy focuses on heated bike lanes, proper snow removal, and winter-specific safety features that protect both cyclists and motorists year-round."
      },
      {
        question: "Has AARBAA had any victories in Alaska?",
        answer: "Yes! We've secured winter-safe protected lanes along Anchorage's coastal trail system and convinced the municipality to prioritize bike lane snow removal equal to roadway clearing - a first in the state."
      }
    ],
    upcomingEvents: [
      {
        name: "Anchorage Monthly Chapter Meeting",
        date: "2025-11-12",
        time: "6:30 PM - 8:00 PM AKST",
        venue: "Anchorage Public Library",
        address: "3600 Denali Street",
        city: "Anchorage",
        description: "Monthly meeting to discuss winter cycling infrastructure priorities and plan our presentation to the Anchorage Assembly. Hot coffee provided!",
        eventType: "meeting",
        registrationRequired: false
      },
      {
        name: "Winter Cycling Safety Community Forum",
        date: "2025-12-14",
        time: "2:00 PM - 4:00 PM AKST",
        venue: "Loussac Library Community Room",
        address: "3600 Denali Street",
        city: "Anchorage",
        description: "Open community forum discussing winter cycling safety, infrastructure needs, and the importance of year-round protected bike lanes. Representatives from Alaska DOT will attend.",
        eventType: "community",
        registrationRequired: false
      }
    ],
    victories: [
      {
        title: "Anchorage Coastal Trail Winter Protection",
        description: "AARBAA successfully advocated for winter-hardened protected barriers along the 11-mile Tony Knowles Coastal Trail, making it Alaska's first year-round separated cycling facility with dedicated snow removal.",
        date: "2024-10-12",
        location: "Anchorage",
        impact: "11 miles of winter-protected lanes, pioneering design for sub-arctic climates",
        category: "infrastructure"
      },
      {
        title: "Snow Removal Priority Ordinance",
        description: "Anchorage Assembly passed AARBAA-backed ordinance requiring protected bike lanes to receive snow removal priority equal to vehicle lanes, ensuring year-round usability.",
        date: "2024-12-03",
        location: "Anchorage",
        impact: "Policy change affecting all current and future bike infrastructure",
        category: "legislation"
      },
      {
        title: "Glenn Highway Protected Lane Pilot",
        description: "Alaska DOT approved a pilot program for protected cycling lanes on the Glenn Highway corridor into Anchorage, featuring innovative heated snow-melting systems.",
        date: "2025-01-22",
        location: "Anchorage to Eagle River",
        impact: "5 miles of heated protected lanes, first of their kind in Alaska",
        category: "infrastructure"
      }
    ],
    infrastructureIssues: [
      {
        title: "Seward Highway Lacks Any Cycling Protection",
        description: "The scenic Seward Highway (AK-1) is heavily used by cyclists during summer but offers zero protected infrastructure, forcing cyclists to share narrow shoulders with RVs and tourist traffic at highway speeds.",
        location: "Seward Highway (AK-1)",
        severity: "critical",
        affectedCities: ["Anchorage", "Seward", "Girdwood"],
        proposedSolution: "Seasonal protected bike path separated from vehicle lanes along the entire 127-mile scenic corridor",
        status: "advocating",
        lastUpdated: "2025-01-10"
      },
      {
        title: "Fairbanks Winter Bike Lane Maintenance Gap",
        description: "Fairbanks has some bike lanes but they're not cleared in winter, making them unusable 8 months of the year and creating dangerous obstacles when snow is pushed into them from adjacent roads.",
        location: "Fairbanks downtown area",
        severity: "high",
        affectedCities: ["Fairbanks"],
        proposedSolution: "Implement year-round maintenance protocol with priority snow removal and winter surface treatments",
        status: "identified",
        lastUpdated: "2024-11-18"
      }
    ],
    localStats: {
      cyclingFatalities: {
        year: 2023,
        count: 3,
        change: "-25%"
      },
      infrastructureMiles: {
        protected: 18.7,
        unprotected: 42.3,
        planned: 27.5
      },
      fundingSecured: {
        amount: 4200000,
        year: 2024
      }
    },
    photoGallery: [
      {
        url: "/images/states/alaska/coastal-trail.jpg",
        alt: "Snow-cleared protected bike path along Anchorage's Tony Knowles Coastal Trail with winter barriers",
        title: "Winter-Ready Coastal Trail",
        caption: "Alaska's first year-round protected bike trail with dedicated winter maintenance",
        category: "infrastructure"
      },
      {
        url: "/images/states/alaska/anchorage-meeting.jpg",
        alt: "AARBAA Alaska chapter meeting in Anchorage with winter cycling gear displayed",
        title: "Anchorage Chapter Meeting",
        caption: "Members discuss year-round cycling infrastructure needs at monthly meeting",
        category: "event"
      },
      {
        url: "/images/states/alaska/glenn-highway.jpg",
        alt: "Construction of heated protected bike lane on Glenn Highway with snow-melting system",
        title: "Glenn Highway Heated Lanes Construction",
        caption: "Innovative heated protected bike lanes being installed on Glenn Highway",
        category: "infrastructure"
      }
    ],
    rating: {
      average: 4.7,
      count: 71
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
    },
    faqs: [
      {
        question: "How do I join AARBAA in Arizona?",
        answer: "Contact our chapter president Patricia Gonzalez at arizona@aarbaa.com or call (602) 555-0223. We have active chapters in Phoenix, Tucson, Scottsdale, and Flagstaff - join the one nearest you!"
      },
      {
        question: "What does AARBAA do in Arizona?",
        answer: "The AARBAA Arizona chapter advocates for heat-resistant protected cycling infrastructure designed for our extreme desert climate. We work with cities across Arizona to implement separated bike lanes with shade structures and proper cooling considerations."
      },
      {
        question: "How many members does AARBAA have in Arizona?",
        answer: "We currently have 612 active members across 4 chapters in Phoenix (largest), Tucson, Scottsdale, and Flagstaff, making Arizona one of our strongest southwestern chapters."
      },
      {
        question: "What are Arizona's unique cycling infrastructure challenges?",
        answer: "Arizona's extreme heat (115°F+ summers) creates unique challenges requiring shade structures, heat-reflective materials, and consideration for dehydration risks. Additionally, sprawling metro areas and high-speed arterial roads demand extensive protected lane networks."
      },
      {
        question: "Has AARBAA had any victories in Arizona?",
        answer: "Absolutely! Our biggest win was securing $12M for Phoenix's comprehensive protected lane network with shade structures, plus successful advocacy for separated infrastructure in Tucson, Scottsdale, and Tempe."
      },
      {
        question: "Does Arizona infrastructure account for extreme heat?",
        answer: "Thanks to AARBAA advocacy, yes! We've successfully pushed for shade structures, light-colored heat-reflective lane materials, and water stations along protected bike routes to make summer cycling safer."
      }
    ],
    upcomingEvents: [
      {
        name: "Phoenix Chapter Monthly Meeting",
        date: "2025-11-14",
        time: "7:00 PM - 8:30 PM MST",
        venue: "Burton Barr Central Library",
        address: "1221 N Central Ave",
        city: "Phoenix",
        description: "Monthly meeting to discuss progress on the $12M protected lane project and plan community outreach for heat-safe cycling infrastructure expansion.",
        eventType: "meeting",
        registrationRequired: false
      },
      {
        name: "Tucson City Council Presentation",
        date: "2025-11-21",
        time: "5:30 PM - 6:30 PM MST",
        venue: "Tucson City Hall",
        address: "255 W Alameda St",
        city: "Tucson",
        description: "AARBAA presents comprehensive data on cycling safety improvements and advocates for expanding Tucson's protected lane network with desert-appropriate design features.",
        eventType: "presentation",
        registrationRequired: false
      },
      {
        name: "Scottsdale Safe Streets Community Rally",
        date: "2025-12-05",
        time: "9:00 AM - 11:00 AM MST",
        venue: "Scottsdale Civic Center Mall",
        address: "3939 N Drinkwater Blvd",
        city: "Scottsdale",
        description: "Community rally advocating for protected cycling infrastructure on Scottsdale Road and other major corridors. Morning time to avoid extreme heat!",
        eventType: "rally",
        registrationRequired: false
      }
    ],
    victories: [
      {
        title: "Phoenix $12M Protected Lane Network with Shade",
        description: "AARBAA's 18-month advocacy campaign resulted in Phoenix approving a comprehensive $12M protected cycling network featuring innovative shade structures and heat-reflective materials - the first desert-climate design of its kind.",
        date: "2024-07-28",
        location: "Phoenix",
        impact: "$12M investment, 22 miles of heat-safe protected lanes, shade structures every quarter mile",
        category: "funding"
      },
      {
        title: "Tucson Urban Loop Protected Path Completion",
        description: "The 37-mile Tucson Urban Loop received protected infrastructure upgrades including physical barriers, shade ramadas, and separated crossing zones, making it one of the Southwest's premier safe cycling routes.",
        date: "2024-09-14",
        location: "Tucson",
        impact: "37 miles upgraded with protected infrastructure",
        category: "infrastructure"
      },
      {
        title: "Scottsdale Greenbelt Separation Project",
        description: "Scottsdale approved AARBAA's plan to convert the existing Greenbelt path into fully separated protected cycling infrastructure with grade-separated crossings at major intersections.",
        date: "2024-11-05",
        location: "Scottsdale",
        impact: "11 miles of protected multi-use path with grade separation",
        category: "infrastructure"
      },
      {
        title: "ASU Tempe Campus Protected Lane Network",
        description: "Arizona State University partnered with AARBAA to implement protected bike lanes on all major campus routes, including innovative underground climate-controlled bike parking.",
        date: "2025-01-09",
        location: "Tempe",
        impact: "8 miles of campus protected lanes, 500-space climate-controlled bike parking",
        category: "infrastructure"
      },
      {
        title: "Arizona DOT Heat-Safe Design Standards",
        description: "State transportation department adopted AARBAA-developed standards for heat-safe cycling infrastructure, requiring shade, water access, and reflective materials on all future bike lane projects.",
        date: "2024-10-20",
        location: "Statewide",
        impact: "Statewide policy change affecting all future projects",
        category: "legislation"
      }
    ],
    infrastructureIssues: [
      {
        title: "Camelback Road Lacks Protected Lanes Despite Heavy Traffic",
        description: "Camelback Road is one of Phoenix's busiest east-west corridors but has zero protected cycling infrastructure, forcing cyclists into high-speed traffic lanes or onto narrow, dangerous sidewalks.",
        location: "Camelback Road, Phoenix",
        severity: "critical",
        affectedCities: ["Phoenix", "Scottsdale", "Paradise Valley"],
        proposedSolution: "Protected bike lanes with shade structures on both sides of Camelback Road from I-17 to Scottsdale Road",
        status: "advocating",
        lastUpdated: "2025-01-12"
      },
      {
        title: "I-10 Frontage Roads Create Dangerous Mixing Zones",
        description: "I-10 frontage roads throughout the Valley serve as de facto bike routes but offer no protection, creating dangerous high-speed mixing zones especially during extreme heat when cyclists are most vulnerable.",
        location: "I-10 corridor, Phoenix Metro",
        severity: "critical",
        affectedCities: ["Phoenix", "Tempe", "Chandler", "Casa Grande"],
        proposedSolution: "Separated protected bike paths parallel to all I-10 frontage roads with heat mitigation features",
        status: "identified",
        lastUpdated: "2024-12-18"
      },
      {
        title: "Flagstaff's Mountain Roads Lack Winter-Safe Cycling Infrastructure",
        description: "Flagstaff's mountainous terrain and winter conditions create unique challenges, with steep roads lacking any protected infrastructure and inadequate snow removal on existing bike lanes.",
        location: "Flagstaff urban area",
        severity: "high",
        affectedCities: ["Flagstaff"],
        proposedSolution: "Protected lanes with winter maintenance protocols on all major Flagstaff routes, plus grade-separated paths for steep terrain",
        status: "advocating",
        lastUpdated: "2025-01-05"
      }
    ],
    localStats: {
      cyclingFatalities: {
        year: 2023,
        count: 28,
        change: "+18%"
      },
      infrastructureMiles: {
        protected: 87.3,
        unprotected: 312.6,
        planned: 156.8
      },
      fundingSecured: {
        amount: 18400000,
        year: 2024
      }
    },
    photoGallery: [
      {
        url: "/images/states/arizona/phoenix-shade-lanes.jpg",
        alt: "Phoenix protected bike lane with innovative shade structure covering cyclists from desert sun",
        title: "Phoenix Shade-Protected Bike Lanes",
        caption: "First-of-their-kind shade structures protect cyclists on Phoenix's new separated bike lanes",
        category: "infrastructure"
      },
      {
        url: "/images/states/arizona/tucson-loop.jpg",
        alt: "Tucson Urban Loop protected path with ramada shade structure and physical barriers",
        title: "Tucson Urban Loop Protected Infrastructure",
        caption: "The 37-mile Tucson Urban Loop features protected infrastructure with desert-appropriate design",
        category: "infrastructure"
      },
      {
        url: "/images/states/arizona/phoenix-meeting.jpg",
        alt: "AARBAA Arizona chapter meeting in Phoenix with members holding heat-safe cycling infrastructure plans",
        title: "Phoenix Chapter Planning Meeting",
        caption: "Members review plans for expanding Phoenix's heat-safe protected cycling network",
        category: "event"
      },
      {
        url: "/images/states/arizona/scottsdale-victory.jpg",
        alt: "AARBAA Scottsdale chapter celebrates protected Greenbelt path approval at city hall",
        title: "Scottsdale Greenbelt Victory",
        caption: "Chapter members celebrate approval of protected infrastructure on Scottsdale Greenbelt",
        category: "victory"
      }
    ],
    rating: {
      average: 4.9,
      count: 304
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
    },
    faqs: [
      {
        question: "How do I join AARBAA in Arkansas?",
        answer: "Contact our chapter president Jennifer Williams at arkansas@aarbaa.com or call (501) 555-0167. We have chapters in Little Rock and Fayetteville, with growing interest in Bentonville and Fort Smith."
      },
      {
        question: "What does AARBAA do in Arkansas?",
        answer: "The AARBAA Arkansas chapter advocates for separated cycling infrastructure through presentations to the state legislature, city council meetings, and collaboration with the Arkansas Department of Transportation to implement protected bike lanes across the state."
      },
      {
        question: "How many members does AARBAA have in Arkansas?",
        answer: "We currently have 198 active members across 2 main chapters in Little Rock and Fayetteville, with particular strength in the Northwest Arkansas metro area."
      },
      {
        question: "What are Arkansas's biggest cycling infrastructure challenges?",
        answer: "Arkansas faces challenges with limited existing bike infrastructure outside of urban cores, high-speed rural highways, and the Ozark mountain terrain in the northwest requiring specialized protected lane designs for hills and curves."
      },
      {
        question: "Has AARBAA had any victories in Arkansas?",
        answer: "Yes! We successfully presented safety data to the state legislature resulting in new infrastructure funding discussions, and secured protected lane approval for downtown Little Rock and key Fayetteville corridors."
      }
    ],
    upcomingEvents: [
      {
        name: "Little Rock Monthly Chapter Meeting",
        date: "2025-11-18",
        time: "6:00 PM - 7:30 PM CST",
        venue: "Little Rock Main Library",
        address: "100 Rock Street",
        city: "Little Rock",
        description: "Monthly meeting to discuss state legislature advocacy strategy and review plans for protected bike lanes on Cantrell Road and other major Little Rock corridors.",
        eventType: "meeting",
        registrationRequired: false
      },
      {
        name: "Fayetteville Safe Cycling Community Forum",
        date: "2025-12-02",
        time: "7:00 PM - 8:30 PM CST",
        venue: "Fayetteville Public Library",
        address: "401 W Mountain St",
        city: "Fayetteville",
        description: "Open forum on cycling safety and infrastructure needs in Northwest Arkansas, with focus on connecting Fayetteville, Springdale, Rogers, and Bentonville with protected bike networks.",
        eventType: "community",
        registrationRequired: false
      }
    ],
    victories: [
      {
        title: "Arkansas Legislature Infrastructure Funding Initiative",
        description: "AARBAA's compelling presentation to the Arkansas State Legislature resulted in preliminary approval for $5.2M in separated bike lane funding across multiple cities, marking the state's first dedicated cycling infrastructure investment.",
        date: "2024-09-12",
        location: "Statewide",
        impact: "$5.2M funding commitment, first statewide cycling infrastructure program",
        category: "funding"
      },
      {
        title: "Little Rock Downtown Protected Lanes Approved",
        description: "Little Rock City Council approved AARBAA's comprehensive plan for protected bike lanes on Cantrell Road, Main Street, and the entire downtown River Market district.",
        date: "2024-10-24",
        location: "Little Rock",
        impact: "8.3 miles of downtown protected lanes approved",
        category: "infrastructure"
      },
      {
        title: "Fayetteville Razorback Greenway Safety Upgrades",
        description: "The popular 36-mile Razorback Greenway received protected infrastructure upgrades including physical barriers, separated crossing zones, and improved signage throughout its route.",
        date: "2024-12-15",
        location: "Fayetteville to Bella Vista",
        impact: "36 miles upgraded with protected features",
        category: "infrastructure"
      },
      {
        title: "UofA Campus Protected Lane Network",
        description: "University of Arkansas partnered with AARBAA to implement separated bike lanes on all major campus routes, making Fayetteville one of the safest college cycling environments in the South.",
        date: "2025-01-14",
        location: "Fayetteville",
        impact: "6 miles of campus protected infrastructure",
        category: "infrastructure"
      },
      {
        title: "Cantrell Road Separated Lane Construction Begins",
        description: "Construction officially began on Cantrell Road's protected cycling infrastructure, Little Rock's first major separated bike lane project with physical barriers and dedicated signal phases.",
        date: "2025-01-25",
        location: "Little Rock",
        impact: "4.2 miles of protected lanes under construction",
        category: "infrastructure"
      }
    ],
    infrastructureIssues: [
      {
        title: "I-40 Frontage Roads Lack Cycling Infrastructure",
        description: "I-40 frontage roads through Little Rock and North Little Rock serve as de facto cycling routes but offer zero protection, forcing cyclists to mix with high-speed commercial traffic.",
        location: "I-40 corridor through Little Rock",
        severity: "critical",
        affectedCities: ["Little Rock", "North Little Rock"],
        proposedSolution: "Protected bike paths parallel to all I-40 frontage roads with physical separation from vehicle lanes",
        status: "identified",
        lastUpdated: "2024-12-10"
      },
      {
        title: "Ozark Mountain Highway Safety Gaps",
        description: "Scenic Ozark highways in Northwest Arkansas attract cyclists but lack any protected infrastructure on curves and steep grades, creating dangerous conditions on popular routes.",
        location: "Ozark mountain region",
        severity: "high",
        affectedCities: ["Fayetteville", "Rogers", "Bentonville", "Eureka Springs"],
        proposedSolution: "Protected lanes with guardrail separation on all mountain highways, engineered for curves and grades",
        status: "advocating",
        lastUpdated: "2025-01-03"
      }
    ],
    localStats: {
      cyclingFatalities: {
        year: 2023,
        count: 8,
        change: "+14%"
      },
      infrastructureMiles: {
        protected: 22.6,
        unprotected: 89.4,
        planned: 38.9
      },
      fundingSecured: {
        amount: 5200000,
        year: 2024
      }
    },
    photoGallery: [
      {
        url: "/images/states/arkansas/legislature-presentation.jpg",
        alt: "AARBAA Arkansas chapter presenting cycling safety data to state legislature",
        title: "State Legislature Presentation",
        caption: "Chapter members present compelling safety data to Arkansas legislators",
        category: "event"
      },
      {
        url: "/images/states/arkansas/cantrell-construction.jpg",
        alt: "Construction of protected bike lanes on Cantrell Road in Little Rock with physical barriers",
        title: "Cantrell Road Protected Lanes Construction",
        caption: "Little Rock's first major separated bike lane project under construction",
        category: "infrastructure"
      },
      {
        url: "/images/states/arkansas/razorback-greenway.jpg",
        alt: "Protected crossing on Razorback Greenway with separated bike lanes and safety barriers",
        title: "Razorback Greenway Safety Upgrades",
        caption: "Protected crossings and barriers improve safety on Arkansas's premier cycling trail",
        category: "infrastructure"
      }
    ],
    rating: {
      average: 4.6,
      count: 98
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
    },
    faqs: [
      {
        question: "How do I join AARBAA in California?",
        answer: "Contact our state coordinator Amanda Chen at california@aarbaa.com or call (916) 555-0891. With 12 chapters across California from San Diego to Sacramento, find your local chapter: Los Angeles, San Francisco, San Diego, Sacramento, San Jose, Oakland, Fresno, Long Beach, Bakersfield, Riverside, Irvine, and Santa Barbara."
      },
      {
        question: "What does AARBAA do in California?",
        answer: "With 2,847 members across 12 chapters, AARBAA California is our largest state operation. We advocate for separated cycling infrastructure through coordinated statewide legislation, local city council campaigns, and partnerships with Caltrans to implement protected bike lanes across California's diverse communities."
      },
      {
        question: "How many members does AARBAA have in California?",
        answer: "California is AARBAA's largest state chapter with 2,847 active members across 12 local chapters, representing diverse communities from San Diego to the Bay Area. Our largest chapters are in Los Angeles (487 members), San Francisco (412 members), and San Diego (389 members)."
      },
      {
        question: "What are California's biggest cycling infrastructure challenges?",
        answer: "California faces unique challenges including dense urban areas with aggressive cycling culture in SF and LA, sprawling suburbs requiring long-distance commuter infrastructure, coastal highways with high-speed traffic mixing zones, and complex jurisdictional issues across 482 incorporated cities. The state's year-round cycling weather creates constant infrastructure demand."
      },
      {
        question: "Has AARBAA had any victories in California?",
        answer: "Yes! Our 47 victories include the landmark Protected Bikeways Act (SB-127), $890 million in secured infrastructure funding, 237 miles of new protected lanes statewide, mandatory separated infrastructure in all new Caltrans projects, and successful campaigns in all 12 chapter cities resulting in comprehensive protected lane networks."
      },
      {
        question: "When are California chapter meetings?",
        answer: "Each of our 12 chapters meets monthly: LA (1st Tuesday), SF (1st Wednesday), San Diego (2nd Monday), Sacramento (2nd Thursday), San Jose (3rd Tuesday), Oakland (3rd Wednesday), Fresno (3rd Thursday), Long Beach (4th Monday), Bakersfield (4th Tuesday), Riverside (4th Wednesday), Irvine (4th Thursday), and Santa Barbara (4th Friday). All meetings are at 7 PM local time and open to the public."
      }
    ],
    upcomingEvents: [
      {
        name: "Statewide Chapter Coordination Meeting",
        date: "2025-11-09",
        time: "10:00 AM - 2:00 PM PST",
        venue: "Sacramento Convention Center",
        address: "1400 J Street",
        city: "Sacramento",
        description: "Quarterly meeting bringing together all 12 California chapter leaders to coordinate statewide advocacy strategy, share victories, and plan our next legislative push. Open to all California members!",
        eventType: "meeting",
        registrationRequired: true
      },
      {
        name: "Los Angeles Protected Lanes Rally",
        date: "2025-11-16",
        time: "11:00 AM - 1:00 PM PST",
        venue: "Los Angeles City Hall",
        address: "200 N Spring St",
        city: "Los Angeles",
        description: "Major rally supporting expansion of LA's protected bike lane network. Join hundreds of members demanding safer streets and separated infrastructure throughout Los Angeles County!",
        eventType: "rally",
        registrationRequired: false
      },
      {
        name: "San Francisco Bay Area Coordination Forum",
        date: "2025-12-01",
        time: "6:00 PM - 8:30 PM PST",
        venue: "San Francisco Main Library",
        address: "100 Larkin St",
        city: "San Francisco",
        description: "Joint meeting of SF, Oakland, and San Jose chapters to coordinate regional protected lane network connecting the entire Bay Area. Regional planning officials will attend.",
        eventType: "community",
        registrationRequired: false
      }
    ],
    victories: [
      {
        title: "California Statewide Protected Infrastructure Act",
        description: "After 2 years of coordinated advocacy by all 12 California chapters, the state legislature passed historic legislation requiring protected bike lanes on all new state highway projects and allocating $134M for separated infrastructure statewide.",
        date: "2024-09-18",
        location: "Statewide",
        impact: "$134M funding, mandatory protected lanes on all new state projects",
        category: "legislation"
      },
      {
        title: "Los Angeles $87M Protected Lane Network Approval",
        description: "Los Angeles City Council approved AARBAA's comprehensive plan for 127 miles of protected cycling infrastructure across the entire city, representing the largest urban bike infrastructure investment in U.S. history.",
        date: "2024-06-12",
        location: "Los Angeles",
        impact: "127 miles of protected lanes, $87M investment over 5 years",
        category: "funding"
      },
      {
        title: "San Francisco Complete Streets Initiative",
        description: "San Francisco became the first major U.S. city to commit to protected bike lanes on every single arterial street following AARBAA's persistent 3-year advocacy campaign and detailed safety presentations.",
        date: "2024-08-03",
        location: "San Francisco",
        impact: "89 miles of arterial streets receiving protected infrastructure",
        category: "infrastructure"
      },
      {
        title: "San Diego Coastal Corridor Protection Project",
        description: "San Diego approved protected bike lanes along the entire coastal corridor from La Jolla to Imperial Beach, separating the popular route's thousands of daily cyclists from beach traffic congestion.",
        date: "2024-10-17",
        location: "San Diego",
        impact: "23 miles of coastal protected lanes, tourist and resident safety improved",
        category: "infrastructure"
      },
      {
        title: "Sacramento-Davis Protected Bike Highway",
        description: "First-of-its-kind protected bike highway connecting Sacramento to Davis opened, featuring physical separation, dedicated signals, and grade-separated crossings for the entire 15-mile commuter route.",
        date: "2024-11-22",
        location: "Sacramento to Davis",
        impact: "15 miles of intercity protected bike highway, commuter game-changer",
        category: "infrastructure"
      },
      {
        title: "Caltrans Protected Lane Design Standards",
        description: "California Department of Transportation officially adopted AARBAA-recommended design standards for separated bike infrastructure on all state highways, revolutionizing approach to cycling safety statewide.",
        date: "2025-01-11",
        location: "Statewide",
        impact: "Policy change affecting thousands of miles of future infrastructure",
        category: "legislation"
      }
    ],
    infrastructureIssues: [
      {
        title: "PCH (Highway 1) Lacks Protected Coastal Cycling Infrastructure",
        description: "Pacific Coast Highway, one of the world's most scenic cycling routes, offers virtually no protected infrastructure along its California stretch, forcing cyclists to share narrow shoulders with RVs and tourist traffic at highway speeds.",
        location: "Pacific Coast Highway (CA-1), entire California coast",
        severity: "critical",
        affectedCities: ["Los Angeles", "Santa Barbara", "San Luis Obispo", "Monterey", "San Francisco"],
        proposedSolution: "Protected bike path separated from vehicle lanes along entire California PCH corridor with scenic viewing areas",
        status: "advocating",
        lastUpdated: "2025-01-20"
      },
      {
        title: "I-405 Freeway Bike Lane Gap",
        description: "The I-405 corridor through LA lacks any continuous protected bike infrastructure despite being surrounded by bike-heavy communities, creating dangerous gaps that force cyclists onto high-speed surface streets or the freeway itself.",
        location: "I-405 corridor, Los Angeles County",
        severity: "critical",
        affectedCities: ["Los Angeles", "Santa Monica", "Culver City", "Inglewood", "Long Beach"],
        proposedSolution: "Continuous protected bike path parallel to entire I-405 corridor connecting all adjacent communities",
        status: "identified",
        lastUpdated: "2024-12-15"
      },
      {
        title: "Central Valley Highway 99 High-Speed Danger",
        description: "Highway 99 through California's Central Valley serves as the main north-south route but offers zero protected cycling infrastructure despite heavy agricultural worker cycling, creating deadly conditions on high-speed rural highway.",
        location: "Highway 99, Central Valley",
        severity: "critical",
        affectedCities: ["Bakersfield", "Fresno", "Modesto", "Stockton", "Sacramento"],
        proposedSolution: "Protected bike lanes with physical barriers along entire Highway 99 corridor through populated areas",
        status: "advocating",
        lastUpdated: "2025-01-08"
      },
      {
        title: "Bay Area Bridge Cycling Access Gaps",
        description: "Major Bay Area bridges including the Richmond-San Rafael and Dumbarton lack adequate protected bike/pedestrian access, creating dangerous bottlenecks in the regional cycling network.",
        location: "San Francisco Bay Area bridges",
        severity: "high",
        affectedCities: ["San Francisco", "Oakland", "San Rafael", "Fremont", "Palo Alto"],
        proposedSolution: "Dedicated protected bike/ped lanes on all Bay Area bridges with physical separation from vehicle traffic",
        status: "approved",
        lastUpdated: "2025-01-18"
      }
    ],
    localStats: {
      cyclingFatalities: {
        year: 2023,
        count: 127,
        change: "+11%"
      },
      infrastructureMiles: {
        protected: 423.7,
        unprotected: 1847.3,
        planned: 891.4
      },
      fundingSecured: {
        amount: 221000000,
        year: 2024
      }
    },
    photoGallery: [
      {
        url: "/images/states/california/la-protected-lanes.jpg",
        alt: "Los Angeles protected bike lane with green pavement and concrete barriers separating cyclists from traffic",
        title: "Los Angeles Protected Lane Network",
        caption: "LA's new protected bike infrastructure features concrete barriers and high-visibility green pavement",
        category: "infrastructure"
      },
      {
        url: "/images/states/california/sf-complete-streets.jpg",
        alt: "San Francisco Market Street with protected bike lanes and separated signal phases",
        title: "San Francisco Complete Streets",
        caption: "Market Street's protected lanes are part of SF's commitment to separated infrastructure on every arterial",
        category: "infrastructure"
      },
      {
        url: "/images/states/california/sacramento-rally.jpg",
        alt: "AARBAA California statewide rally at state capitol with members from all 12 chapters",
        title: "Statewide Capitol Rally",
        caption: "Members from all 12 California chapters unite at the state capitol for infrastructure advocacy",
        category: "event"
      },
      {
        url: "/images/states/california/san-diego-coastal.jpg",
        alt: "Protected bike path along San Diego coastal corridor with ocean views and physical barriers",
        title: "San Diego Coastal Protected Path",
        caption: "23 miles of protected coastal bike lanes separate cyclists from beach traffic congestion",
        category: "infrastructure"
      },
      {
        url: "/images/states/california/sac-davis-highway.jpg",
        alt: "Sacramento-Davis protected bike highway with grade-separated crossing and dedicated signals",
        title: "Sacramento-Davis Bike Highway",
        caption: "First-of-its-kind intercity protected bike highway connects Sacramento to Davis",
        category: "infrastructure"
      }
    ],
    rating: {
      average: 4.9,
      count: 1423
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
    },
    faqs: [
      {
        question: "How do I join AARBAA in Colorado?",
        answer: "Contact our chapter president Thomas Bradley at colorado@aarbaa.com or call (303) 555-0445. We have active chapters in Denver, Boulder, Colorado Springs, Fort Collins, and Grand Junction. Fill out our contact form to connect with your nearest chapter."
      },
      {
        question: "What does AARBAA do in Colorado?",
        answer: "The AARBAA Colorado chapter advocates for separated cycling infrastructure across the state, from mountain passes to urban corridors. We work with CDOT and local municipalities to implement protected bike lanes that account for altitude, weather extremes, and Colorado's unique terrain."
      },
      {
        question: "How many members does AARBAA have in Colorado?",
        answer: "We have 891 active members across 5 chapters statewide, making Colorado one of our most engaged and successful state organizations with major victories in infrastructure policy."
      },
      {
        question: "What are Colorado's unique cycling infrastructure challenges?",
        answer: "Colorado faces altitude-related visibility issues, steep mountain grades, extreme weather variability, and heavy ski resort traffic on mountain passes like I-70. Our advocacy focuses on grade-separated infrastructure that protects both cyclists and motorists in challenging terrain."
      },
      {
        question: "Has AARBAA had any victories in Colorado?",
        answer: "Yes! We've secured 22 major victories including protected lanes throughout Denver's downtown, Boulder Creek Path improvements, and landmark state legislation requiring separated infrastructure on all new CDOT projects. Colorado is now a national model for infrastructure separation."
      },
      {
        question: "Does Colorado require special infrastructure for winter cycling?",
        answer: "Absolutely. Colorado's protected bike lanes must handle snow, ice, and de-icing chemicals. AARBAA advocates for priority snow removal on bike infrastructure and designs that prevent ice accumulation while maintaining year-round safety."
      }
    ],
    upcomingEvents: [
      {
        name: "Denver Monthly Chapter Meeting",
        date: "2025-11-13",
        time: "7:00 PM - 8:30 PM MST",
        venue: "Denver Central Library",
        address: "10 W 14th Ave Pkwy",
        city: "Denver",
        description: "Join Denver's largest AARBAA chapter to discuss ongoing protected lane projects, I-70 mountain corridor advocacy, and upcoming city council presentations. All metro area residents welcome!",
        eventType: "meeting",
        registrationRequired: false
      },
      {
        name: "Boulder City Council Presentation",
        date: "2025-11-20",
        time: "6:00 PM - 7:30 PM MST",
        venue: "Boulder Municipal Building",
        address: "1777 Broadway",
        city: "Boulder",
        description: "AARBAA presents comprehensive data on Boulder Creek Path safety improvements and advocates for expanded protected infrastructure on major corridors. Public attendance strongly encouraged!",
        eventType: "presentation",
        registrationRequired: false
      },
      {
        name: "Colorado Springs Community Safety Forum",
        date: "2025-12-05",
        time: "6:30 PM - 8:00 PM MST",
        venue: "Pikes Peak Library District",
        address: "21 W Kiowa St",
        city: "Colorado Springs",
        description: "Open forum discussing cycling safety, infrastructure needs, and the economic benefits of separated bike lanes. CDOT representatives will attend to answer questions about state highway projects.",
        eventType: "community",
        registrationRequired: false
      }
    ],
    victories: [
      {
        title: "Denver Downtown Protected Network Completion",
        description: "After 3 years of advocacy, Denver completed a comprehensive network of protected bike lanes throughout the downtown core, featuring physical barriers and signal priority at major intersections.",
        date: "2024-09-15",
        location: "Denver",
        impact: "34 miles of protected lanes, $18.5M investment, 72% reduction in cyclist-vehicle conflicts",
        category: "infrastructure"
      },
      {
        title: "Colorado Separated Infrastructure Mandate",
        description: "State legislature passed AARBAA-backed bill requiring all new CDOT highway projects to include separated cycling infrastructure, making Colorado a national leader in infrastructure policy.",
        date: "2024-05-22",
        location: "Statewide",
        impact: "Statewide mandate affecting all future road construction",
        category: "legislation"
      },
      {
        title: "I-70 Mountain Corridor Protected Lanes",
        description: "CDOT approved protected bike lanes on I-70 between Idaho Springs and Georgetown, providing safe separated access through one of Colorado's most scenic and dangerous mountain corridors.",
        date: "2024-11-08",
        location: "I-70 Mountain Corridor",
        impact: "12 miles of mountain protected lanes, first of their kind in high-altitude environment",
        category: "infrastructure"
      },
      {
        title: "Boulder Creek Path Grade Separation",
        description: "Boulder completed full grade separation of the Boulder Creek Path at all major road crossings, eliminating conflict points and creating one of America's safest urban bike corridors.",
        date: "2024-07-14",
        location: "Boulder",
        impact: "18 intersection grade separations, zero-conflict urban bike network",
        category: "infrastructure"
      },
      {
        title: "Colorado Springs $45M Bike Infrastructure Bond",
        description: "Voters approved AARBAA-supported bond measure funding comprehensive protected bike infrastructure throughout Colorado Springs, including connections to Garden of the Gods and Air Force Academy.",
        date: "2024-11-05",
        location: "Colorado Springs",
        impact: "$45M funding secured for citywide protected network",
        category: "funding"
      }
    ],
    infrastructureIssues: [
      {
        title: "I-70 Ski Traffic Creates Dangerous Mountain Pass Conditions",
        description: "Heavy ski resort traffic on I-70 mountain passes forces cyclists to share narrow shoulders with distracted drivers at high elevation, creating extremely dangerous conditions especially during peak ski season.",
        location: "I-70 from Denver to Vail",
        severity: "critical",
        affectedCities: ["Idaho Springs", "Georgetown", "Silverthorne", "Frisco", "Vail"],
        proposedSolution: "Complete grade-separated bike path parallel to I-70 through entire mountain corridor with heated sections for winter use",
        status: "advocating",
        lastUpdated: "2025-01-22"
      },
      {
        title: "Fort Collins College Avenue Mixing Zone",
        description: "College Avenue through CSU campus lacks protected infrastructure despite being one of the highest-traffic bike corridors in the state, creating constant conflict between cyclists, motorists, and pedestrians.",
        location: "College Avenue, Fort Collins",
        severity: "high",
        affectedCities: ["Fort Collins"],
        proposedSolution: "Fully protected bike lanes with physical separation on both sides of College Avenue from Old Town to CSU campus",
        status: "approved",
        lastUpdated: "2025-01-18"
      },
      {
        title: "Grand Junction Lacks Protected East-West Corridor",
        description: "Grand Junction has no protected cycling infrastructure on major east-west routes, forcing cyclists to mix with high-speed traffic on roads designed for vehicles only.",
        location: "Broadway and North Avenue, Grand Junction",
        severity: "high",
        affectedCities: ["Grand Junction"],
        proposedSolution: "Protected bike lanes on Broadway and North Avenue creating complete east-west protected corridor",
        status: "identified",
        lastUpdated: "2024-12-10"
      }
    ],
    localStats: {
      cyclingFatalities: {
        year: 2023,
        count: 24,
        change: "-18%"
      },
      infrastructureMiles: {
        protected: 187.3,
        unprotected: 894.5,
        planned: 423.8
      },
      fundingSecured: {
        amount: 87500000,
        year: 2024
      }
    },
    photoGallery: [
      {
        url: "/images/states/colorado/denver-protected-lanes.jpg",
        alt: "Protected bike lanes in downtown Denver with concrete barriers and mountain backdrop",
        title: "Denver Downtown Protected Network",
        caption: "Denver's award-winning protected bike lane network with Rocky Mountain views",
        category: "infrastructure"
      },
      {
        url: "/images/states/colorado/boulder-meeting.jpg",
        alt: "AARBAA Colorado chapter meeting in Boulder with members reviewing infrastructure maps",
        title: "Boulder Chapter Planning Meeting",
        caption: "Chapter members strategize Boulder Creek Path improvements at monthly meeting",
        category: "event"
      },
      {
        url: "/images/states/colorado/i70-mountain.jpg",
        alt: "Protected bike path construction along I-70 mountain corridor with autumn aspens",
        title: "I-70 Mountain Corridor Protected Path",
        caption: "Construction of Colorado's first high-altitude protected bike infrastructure on I-70",
        category: "infrastructure"
      },
      {
        url: "/images/states/colorado/victory-celebration.jpg",
        alt: "AARBAA Colorado members celebrate state infrastructure mandate passage at State Capitol",
        title: "State Legislation Victory",
        caption: "Members celebrate passage of statewide separated infrastructure mandate",
        category: "victory"
      },
      {
        url: "/images/states/colorado/boulder-creek.jpg",
        alt: "Boulder Creek Path grade-separated crossing with cyclists using protected underpass",
        title: "Boulder Creek Path Grade Separation",
        caption: "New grade-separated crossing eliminates conflict points on Boulder Creek Path",
        category: "infrastructure"
      }
    ],
    rating: {
      average: 4.9,
      count: 567
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
    },
    faqs: [
      {
        question: "How do I join AARBAA in Florida?",
        answer: "Contact our state coordinator Michael Rodriguez at florida@aarbaa.com or call (850) 555-0667. With 8 chapters across the Sunshine State, find your local chapter: Miami, Tampa, Orlando, Jacksonville, Tallahassee, Fort Lauderdale, St. Petersburg, or West Palm Beach. Join us in making Florida's roads safer!"
      },
      {
        question: "What does AARBAA do in Florida?",
        answer: "Our 1,523 members advocate for protected cycling infrastructure throughout Florida. We work with FDOT, present at city councils, and coordinate campaigns addressing tourist area safety, retirement community infrastructure, and year-round cycling challenges. We've achieved 31 major victories securing safer streets statewide."
      },
      {
        question: "How many members does AARBAA have in Florida?",
        answer: "Florida boasts 1,523 active AARBAA members across 8 chapters. Miami leads with 387 members, followed by Tampa (298), Orlando (267), and Jacksonville (234). Our membership has surged 52% as more Floridians, including many retirees, demand safer cycling infrastructure."
      },
      {
        question: "What are Florida's biggest cycling infrastructure challenges?",
        answer: "Florida faces unique challenges: tourist areas with unfamiliar drivers, sprawling retirement communities needing safe access, hurricane-resistant infrastructure requirements, year-round heat and sudden storms, and dangerous high-speed arterials like US-19 that have become notorious for cyclist fatalities."
      },
      {
        question: "Has AARBAA had any victories in Florida?",
        answer: "Yes! Our 31 victories include Miami Beach's complete protected lane network, Orlando's tourist corridor separation project, Tampa Bay area trail protection system, Jacksonville's bridge bike lane additions, and statewide FDOT policy requiring protected lanes on all state road projects."
      },
      {
        question: "When are Florida chapter meetings?",
        answer: "Miami meets 1st Monday, Tampa 1st Wednesday, Orlando 2nd Tuesday, Jacksonville 2nd Thursday, Tallahassee 3rd Monday, Fort Lauderdale 3rd Tuesday, St. Petersburg 3rd Thursday, and West Palm Beach 4th Tuesday. All meetings are at 7 PM ET and welcome new members and concerned citizens."
      }
    ],
    upcomingEvents: [
      {
        name: "Miami Beach Protected Infrastructure Celebration",
        date: "2025-11-08",
        time: "5:30 PM - 7:30 PM EST",
        venue: "Miami Beach Convention Center",
        address: "1901 Convention Center Dr",
        city: "Miami Beach",
        description: "Celebration rally for completion of Miami Beach's comprehensive protected lane network. Join us to celebrate this major victory and push for expansion throughout Miami-Dade County!",
        eventType: "rally",
        registrationRequired: false
      },
      {
        name: "Orlando Tourist Corridor Safety Summit",
        date: "2025-11-21",
        time: "9:00 AM - 12:00 PM EST",
        venue: "Orlando City Hall",
        address: "400 South Orange Ave",
        city: "Orlando",
        description: "Summit addressing cycling safety in tourist areas around theme parks and International Drive. Representatives from Disney, Universal, and city planning will attend.",
        eventType: "presentation",
        registrationRequired: true
      },
      {
        name: "Tampa Bay Regional Coordination Meeting",
        date: "2025-12-03",
        time: "7:00 PM - 9:00 PM EST",
        venue: "Tampa Main Library",
        address: "900 N Ashley Dr",
        city: "Tampa",
        description: "Joint meeting of Tampa and St. Petersburg chapters to coordinate regional protected infrastructure connecting the bay area. Focus on Courtney Campbell and Howard Frankland causeway improvements.",
        eventType: "meeting",
        registrationRequired: false
      }
    ],
    victories: [
      {
        title: "Miami Beach Complete Protected Network",
        description: "Miami Beach became the first Florida city with protected bike lanes on every major street, completing a 5-year AARBAA campaign that transformed the tourist destination into America's safest beach cycling community.",
        date: "2024-10-14",
        location: "Miami Beach",
        impact: "47 miles of protected lanes, 81% reduction in cyclist injuries",
        category: "infrastructure"
      },
      {
        title: "Orlando Tourist Corridor Protection Project",
        description: "Orange County approved protected bike lanes along International Drive and connections to all major theme parks, addressing safety concerns in America's most visited tourist destination after persistent AARBAA advocacy.",
        date: "2024-08-22",
        location: "Orlando",
        impact: "34 miles of tourist area protected lanes, $45M investment",
        category: "infrastructure"
      },
      {
        title: "US-19 Protected Lane Mandate",
        description: "After highlighting US-19 as America's deadliest cycling corridor, AARBAA secured FDOT commitment for continuous protected lanes along the entire Pinellas County stretch, a monumental safety victory.",
        date: "2024-12-05",
        location: "Pinellas County",
        impact: "42 miles of US-19 protection, addressing #1 danger corridor",
        category: "legislation"
      },
      {
        title: "Jacksonville Bridges Bike Lane Addition",
        description: "Jacksonville added protected bike lanes to all seven bridges crossing the St. Johns River, connecting previously isolated cycling networks and creating the first complete cross-river protected system in Florida.",
        date: "2024-09-30",
        location: "Jacksonville",
        impact: "7 bridges with protected lanes, citywide connectivity achieved",
        category: "infrastructure"
      },
      {
        title: "Statewide Hurricane-Resistant Standards",
        description: "FDOT adopted AARBAA-developed hurricane-resistant protected lane standards, ensuring all new cycling infrastructure can withstand Category 3 storms while maintaining physical separation.",
        date: "2025-01-09",
        location: "Statewide",
        impact: "New standards for all Florida infrastructure projects",
        category: "legislation"
      }
    ],
    infrastructureIssues: [
      {
        title: "I-95 Corridor Lacks Continuous Protected Routes",
        description: "The entire I-95 corridor through Florida lacks parallel protected cycling infrastructure, forcing cyclists onto dangerous local roads or the interstate itself, creating a 380-mile gap in safe north-south connectivity.",
        location: "I-95 corridor, Miami to Jacksonville",
        severity: "critical",
        affectedCities: ["Miami", "Fort Lauderdale", "West Palm Beach", "Daytona Beach", "Jacksonville"],
        proposedSolution: "Continuous protected bike highway parallel to I-95 with connections to all major cities",
        status: "advocating",
        lastUpdated: "2025-01-18"
      },
      {
        title: "Retirement Community Access Dangers",
        description: "Major retirement communities like The Villages and Century Village lack protected connections to shopping and medical facilities, forcing elderly cyclists to navigate high-speed arterials without protection.",
        location: "Central Florida retirement communities",
        severity: "high",
        affectedCities: ["The Villages", "Boca Raton", "Clearwater", "Naples", "Fort Myers"],
        proposedSolution: "Protected lane networks connecting all retirement communities to essential services",
        status: "identified",
        lastUpdated: "2024-12-22"
      },
      {
        title: "Beach Town A1A Mixing Zones",
        description: "State Road A1A along Florida's Atlantic coast forces cyclists to share lanes with beach traffic, delivery trucks, and confused tourists, creating dangerous conditions along this scenic but deadly route.",
        location: "A1A coastal highway",
        severity: "critical",
        affectedCities: ["Miami Beach", "Fort Lauderdale", "Palm Beach", "Cocoa Beach", "St. Augustine"],
        proposedSolution: "Continuous protected coastal bike path separated from A1A traffic",
        status: "approved",
        lastUpdated: "2025-01-24"
      },
      {
        title: "Tampa Bay Causeway Cycling Gaps",
        description: "Major causeways crossing Tampa Bay including Courtney Campbell and Howard Frankland lack adequate protected cycling facilities, creating dangerous bottlenecks in the regional network.",
        location: "Tampa Bay causeways",
        severity: "high",
        affectedCities: ["Tampa", "St. Petersburg", "Clearwater", "Largo"],
        proposedSolution: "Protected bike lanes with barriers on all Tampa Bay bridge crossings",
        status: "advocating",
        lastUpdated: "2025-01-15"
      }
    ]
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
    },
    faqs: [
      {
        question: "How do I join AARBAA in New York?",
        answer: "Contact our state coordinator Rachel Goldman at newyork@aarbaa.com or call (518) 555-0956. With 9 chapters across the Empire State, find your local chapter: NYC (Manhattan, Brooklyn, Queens), Buffalo, Rochester, Albany, Syracuse, Yonkers, or Long Island. Join our fight for safer streets!"
      },
      {
        question: "What does AARBAA do in New York?",
        answer: "Our 1,834 members advocate for protected cycling infrastructure from NYC to Niagara Falls. We work with NYSDOT, present at city councils, lobby in Albany, and coordinate campaigns addressing NYC's aggressive cycling culture, upstate winter conditions, and bridge/tunnel access. We've secured 38 major victories."
      },
      {
        question: "How many members does AARBAA have in New York?",
        answer: "New York has 1,834 active AARBAA members across 9 chapters. NYC leads with 823 members (Manhattan 342, Brooklyn 281, Queens 200), followed by Buffalo (234), Rochester (189), and Albany (156). Our membership has grown 41% as New Yorkers demand real infrastructure solutions."
      },
      {
        question: "What are New York's biggest cycling infrastructure challenges?",
        answer: "New York faces diverse challenges: NYC's aggressive cycling culture and delivery e-bike chaos, winter snow removal from protected lanes upstate, aging bridge infrastructure lacking bike access, subway grate hazards, and the complex politics of reallocating street space from cars to protected cycling infrastructure."
      },
      {
        question: "Has AARBAA had any victories in New York?",
        answer: "Absolutely! Our 38 victories include NYC's protected lane network expansion, Buffalo's complete streets initiative, Rochester's Genesee Riverway Trail protection, Albany's Capital District network, and the historic $87M state allocation for protected infrastructure. We've transformed cycling safety across the Empire State."
      },
      {
        question: "When are New York chapter meetings?",
        answer: "NYC chapters meet: Manhattan 1st Tuesday, Brooklyn 1st Thursday, Queens 2nd Monday. Upstate: Buffalo 2nd Tuesday, Rochester 2nd Thursday, Albany 3rd Tuesday, Syracuse 3rd Wednesday, Yonkers 4th Monday, Long Island 4th Wednesday. All meetings are 7 PM ET and open to the public."
      }
    ],
    upcomingEvents: [
      {
        name: "NYC Protected Infrastructure March",
        date: "2025-11-14",
        time: "4:30 PM - 6:30 PM EST",
        venue: "City Hall Park",
        address: "Broadway & Park Row",
        city: "New York City",
        description: "Major march demanding expansion of NYC's protected bike lane network to all five boroughs. Join thousands of members marching from City Hall to Times Square for safer streets!",
        eventType: "rally",
        registrationRequired: false
      },
      {
        name: "Upstate Winter Infrastructure Summit",
        date: "2025-11-26",
        time: "10:00 AM - 2:00 PM EST",
        venue: "Albany Convention Center",
        address: "55 Eagle Street",
        city: "Albany",
        description: "Summit addressing winter maintenance of protected bike lanes across upstate NY. NYSDOT officials and representatives from Buffalo, Rochester, Syracuse, and Albany will present solutions.",
        eventType: "presentation",
        registrationRequired: true
      },
      {
        name: "Long Island Regional Planning Meeting",
        date: "2025-12-09",
        time: "7:00 PM - 9:00 PM EST",
        venue: "Hofstra University",
        address: "1000 Fulton Avenue",
        city: "Hempstead",
        description: "Planning meeting for Long Island's protected bike infrastructure expansion, focusing on connections between Nassau and Suffolk counties and LIRR station access.",
        eventType: "meeting",
        registrationRequired: false
      }
    ],
    victories: [
      {
        title: "NYC Expands Protected Network to Outer Boroughs",
        description: "After years of AARBAA advocacy, NYC committed to expanding protected bike lanes beyond Manhattan, with major networks approved for Brooklyn, Queens, the Bronx, and Staten Island, addressing longtime equity concerns.",
        date: "2024-09-28",
        location: "New York City",
        impact: "267 miles of new protected lanes across all five boroughs, $124M investment",
        category: "infrastructure"
      },
      {
        title: "Buffalo Complete Streets Victory",
        description: "Buffalo became the first major upstate city to adopt complete streets design with protected bike lanes on all arterial roads, setting a precedent for winter cities nationwide after AARBAA's persistent campaign.",
        date: "2024-07-15",
        location: "Buffalo",
        impact: "89 miles of protected lanes with winter maintenance plan",
        category: "legislation"
      },
      {
        title: "Brooklyn Bridge Protected Lane Opening",
        description: "The iconic Brooklyn Bridge finally received fully protected bike lanes separated from pedestrians and vehicles, ending decades of dangerous mixing and conflicts after AARBAA's high-profile advocacy campaign.",
        date: "2024-10-22",
        location: "New York City",
        impact: "Iconic bridge protection, 30,000 daily cyclists safer",
        category: "infrastructure"
      },
      {
        title: "State Highway Protected Lane Mandate",
        description: "New York State passed legislation requiring protected bike lanes on all state highway projects in urban and suburban areas, a landmark victory affecting thousands of miles of future infrastructure.",
        date: "2024-12-11",
        location: "Statewide",
        impact: "Mandatory protected lanes on all NYSDOT urban/suburban projects",
        category: "legislation"
      },
      {
        title: "Rochester Genesee Riverway Protection",
        description: "Rochester completed physical protection of the entire Genesee Riverway Trail system, transforming it from a mixed-use path to fully separated cycling infrastructure after 3 years of AARBAA advocacy.",
        date: "2025-01-07",
        location: "Rochester",
        impact: "28 miles of riverway protection, regional connectivity achieved",
        category: "infrastructure"
      }
    ],
    infrastructureIssues: [
      {
        title: "Manhattan Delivery E-Bike Chaos",
        description: "Thousands of delivery e-bikes operating at dangerous speeds in bike lanes create conflicts with regular cyclists, pedestrians, and vehicles, with no protected infrastructure separating different vehicle types and speeds.",
        location: "Manhattan, New York City",
        severity: "critical",
        affectedCities: ["Manhattan", "Brooklyn", "Queens", "Bronx"],
        proposedSolution: "Separated infrastructure for e-bikes/regular bikes, speed-based lane system, enhanced enforcement",
        status: "advocating",
        lastUpdated: "2025-01-23"
      },
      {
        title: "I-87 Northway Cycling Desert",
        description: "The I-87 corridor from NYC to Montreal lacks any parallel protected cycling infrastructure, creating a 350-mile gap preventing safe long-distance cycling and tourism along this major route.",
        location: "I-87 corridor, NYC to Canadian border",
        severity: "high",
        affectedCities: ["Albany", "Saratoga Springs", "Glens Falls", "Plattsburgh"],
        proposedSolution: "Protected cycling route parallel to I-87 with connections to Adirondack communities",
        status: "identified",
        lastUpdated: "2024-12-28"
      },
      {
        title: "Long Island East-West Connectivity Gap",
        description: "Long Island lacks continuous protected east-west cycling infrastructure, forcing cyclists onto dangerous highways like Route 25 and the LIE service roads with no safe alternative for the 120-mile stretch.",
        location: "Long Island, Nassau to Suffolk Counties",
        severity: "critical",
        affectedCities: ["Hempstead", "Huntington", "Smithtown", "Riverhead", "Montauk"],
        proposedSolution: "Continuous protected bike highway from NYC to Montauk with LIRR station connections",
        status: "approved",
        lastUpdated: "2025-01-19"
      },
      {
        title: "Upstate Bridge Access Barriers",
        description: "Major bridges across the Hudson River, Mohawk River, and Great Lakes lack protected bike access, creating dangerous bottlenecks and forcing lengthy detours for cyclists in upstate communities.",
        location: "Upstate river and lake crossings",
        severity: "high",
        affectedCities: ["Troy", "Schenectady", "Utica", "Oswego", "Watertown"],
        proposedSolution: "Retrofit all major bridges with protected bike lanes or parallel bike/ped bridges",
        status: "advocating",
        lastUpdated: "2025-01-12"
      }
    ]
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
    },
    faqs: [
      {
        question: "How do I join AARBAA in Pennsylvania?",
        answer: "Contact our state coordinator Joseph Kowalski at pennsylvania@aarbaa.com or call (717) 555-0867. With 7 chapters across the Keystone State, find your local chapter: Philadelphia, Pittsburgh, Harrisburg, Allentown, Erie, Reading, or Scranton. Join us in making PA roads safer for everyone!"
      },
      {
        question: "What does AARBAA do in Pennsylvania?",
        answer: "Our 1,123 members across 7 Pennsylvania chapters advocate for protected cycling infrastructure throughout the Commonwealth. We work with PennDOT, present at city councils from Philly to Pittsburgh, and coordinate campaigns addressing aggressive urban cyclists, hilly terrain challenges, and aging infrastructure. We've secured 29 major victories."
      },
      {
        question: "How many members does AARBAA have in Pennsylvania?",
        answer: "Pennsylvania has 1,123 active AARBAA members across 7 chapters. Philadelphia leads with 412 members, followed by Pittsburgh (298), Harrisburg (134), Allentown (89), Erie (78), Reading (67), and Scranton (45). Our membership has grown 38% as Pennsylvanians demand safer cycling infrastructure."
      },
      {
        question: "What are Pennsylvania's biggest cycling infrastructure challenges?",
        answer: "Pennsylvania faces unique challenges: Philadelphia's aggressive cycling culture requiring enforcement, Pittsburgh's extreme hills needing specialized infrastructure, aging bridges and tunnels lacking bike access, narrow colonial-era streets in historic towns, and harsh winters affecting protected lane maintenance across the state."
      },
      {
        question: "Has AARBAA had any victories in Pennsylvania?",
        answer: "Yes! Our 29 victories include Philadelphia's Vision Zero protected lane network, Pittsburgh's bridge bike lane initiative covering all major bridges, Harrisburg's riverfront protection project, the Schuylkill River Trail full separation, and the historic $52M state funding for protected infrastructure statewide."
      },
      {
        question: "When are Pennsylvania chapter meetings?",
        answer: "Philadelphia meets 1st Wednesday, Pittsburgh 1st Thursday, Harrisburg 2nd Tuesday, Allentown 2nd Thursday, Erie 3rd Monday, Reading 3rd Wednesday, and Scranton 4th Tuesday. All meetings are at 7 PM ET. Join us to advocate for safer streets in your community!"
      }
    ],
    upcomingEvents: [
      {
        name: "Philadelphia Vision Zero Rally",
        date: "2025-11-11",
        time: "5:00 PM - 7:00 PM EST",
        venue: "Love Park",
        address: "15th St & John F Kennedy Blvd",
        city: "Philadelphia",
        description: "Major rally supporting Philadelphia's Vision Zero initiative and demanding protected bike lanes on all major corridors. Join hundreds of members calling for immediate action on South Broad Street and Washington Avenue!",
        eventType: "rally",
        registrationRequired: false
      },
      {
        name: "Pittsburgh Hills & Bridges Summit",
        date: "2025-11-25",
        time: "9:00 AM - 12:00 PM EST",
        venue: "David L. Lawrence Convention Center",
        address: "1000 Fort Duquesne Blvd",
        city: "Pittsburgh",
        description: "Summit addressing unique challenges of protected infrastructure in Pittsburgh's hilly terrain and across its 446 bridges. City engineers and AARBAA will present innovative solutions.",
        eventType: "presentation",
        registrationRequired: true
      },
      {
        name: "Harrisburg Capitol Advocacy Day",
        date: "2025-12-07",
        time: "10:00 AM - 3:00 PM EST",
        venue: "Pennsylvania State Capitol",
        address: "501 N 3rd St",
        city: "Harrisburg",
        description: "Statewide advocacy day with members from all 7 chapters meeting with legislators to push for additional protected infrastructure funding and PennDOT policy changes.",
        eventType: "community",
        registrationRequired: true
      }
    ],
    victories: [
      {
        title: "Philadelphia Vision Zero Protected Network",
        description: "Philadelphia committed to protected bike lanes on all high-injury corridors as part of Vision Zero initiative, following years of AARBAA advocacy and data presentations showing 67% of cycling fatalities occur on unprotected roads.",
        date: "2024-08-19",
        location: "Philadelphia",
        impact: "124 miles of protected lanes, targeting zero traffic deaths by 2030",
        category: "infrastructure"
      },
      {
        title: "Pittsburgh All-Bridge Bike Lane Initiative",
        description: "Pittsburgh became the first U.S. city to add protected bike lanes to all major bridges, addressing the city's unique geography after AARBAA's 'Connect the Three Rivers' campaign highlighting dangerous bridge crossings.",
        date: "2024-10-03",
        location: "Pittsburgh",
        impact: "31 bridges with protected lanes, citywide connectivity achieved",
        category: "infrastructure"
      },
      {
        title: "Schuylkill River Trail Complete Separation",
        description: "The entire 30-mile Schuylkill River Trail from Philadelphia to Valley Forge received physical separation from pedestrians and vehicles, transforming the region's most popular trail into a model of safe infrastructure.",
        date: "2024-09-11",
        location: "Philadelphia to Valley Forge",
        impact: "30 miles of fully separated trail, 89% reduction in conflicts",
        category: "infrastructure"
      },
      {
        title: "PennDOT Statewide Protected Lane Standards",
        description: "Pennsylvania DOT adopted comprehensive protected bike lane standards for all state roads in urban and suburban areas, requiring physical separation on any road with speed limits above 25 mph.",
        date: "2024-11-27",
        location: "Statewide",
        impact: "New standards affecting all future PennDOT projects",
        category: "legislation"
      },
      {
        title: "Lehigh Valley Connected Network",
        description: "Allentown, Bethlehem, and Easton completed interconnected protected bike lane network, creating the first tri-city protected system in Pennsylvania after coordinated AARBAA advocacy across all three cities.",
        date: "2025-01-16",
        location: "Lehigh Valley",
        impact: "67 miles of interconnected protected infrastructure",
        category: "infrastructure"
      }
    ],
    infrastructureIssues: [
      {
        title: "I-76 Pennsylvania Turnpike Parallel Route Gap",
        description: "The entire Pennsylvania Turnpike corridor lacks parallel protected cycling infrastructure, creating a 360-mile east-west gap across the state and forcing cyclists onto dangerous local roads through mountains.",
        location: "I-76/Pennsylvania Turnpike corridor",
        severity: "critical",
        affectedCities: ["Philadelphia", "Harrisburg", "Pittsburgh", "Reading", "Lancaster"],
        proposedSolution: "Protected cycling route parallel to Turnpike with connections to major cities and towns",
        status: "advocating",
        lastUpdated: "2025-01-21"
      },
      {
        title: "Philadelphia's Aggressive Cyclist Enforcement Crisis",
        description: "Philadelphia's bike lanes suffer from aggressive cycling behavior, wrong-way riding, and sidewalk cycling with minimal enforcement, creating dangerous conditions for law-abiding cyclists and pedestrians alike.",
        location: "Philadelphia",
        severity: "high",
        affectedCities: ["Philadelphia", "Upper Darby", "Camden"],
        proposedSolution: "Enhanced enforcement, protected lane design preventing wrong-way riding, education campaigns",
        status: "identified",
        lastUpdated: "2024-12-30"
      },
      {
        title: "Coal Region Connectivity Desert",
        description: "Former coal mining communities in northeastern PA lack any protected cycling infrastructure, isolating towns and forcing residents onto dangerous mountain roads with coal truck traffic.",
        location: "Northeastern Pennsylvania coal region",
        severity: "high",
        affectedCities: ["Scranton", "Wilkes-Barre", "Hazleton", "Pottsville", "Shamokin"],
        proposedSolution: "Convert abandoned rail lines to protected bike highways connecting coal region towns",
        status: "approved",
        lastUpdated: "2025-01-14"
      },
      {
        title: "Pittsburgh Tunnel Bike Access Prohibition",
        description: "Pittsburgh's numerous tunnels prohibit bicycle access, forcing dangerous detours over steep hills or through high-traffic surface streets, creating major gaps in the cycling network.",
        location: "Pittsburgh tunnels",
        severity: "critical",
        affectedCities: ["Pittsburgh", "Mount Lebanon", "Bethel Park"],
        proposedSolution: "Retrofit tunnels with protected bike lanes or build parallel bike/ped tunnels",
        status: "advocating",
        lastUpdated: "2025-01-26"
      }
    ]
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
    },
    faqs: [
      {
        question: "How do I join AARBAA in Texas?",
        answer: "Contact our state coordinator Robert Garcia at texas@aarbaa.com or call (512) 555-1023. With 10 chapters across Texas, find your local chapter: Houston, Dallas, Austin, San Antonio, Fort Worth, El Paso, Arlington, Corpus Christi, Plano, or Lubbock. Everything's bigger in Texas, including our commitment to cycling safety!"
      },
      {
        question: "What does AARBAA do in Texas?",
        answer: "Our 1,967 members across 10 Texas chapters advocate for protected bike infrastructure throughout the Lone Star State. We work with TxDOT, present at city councils from Houston to El Paso, and coordinate statewide campaigns. We've secured over $120 million in infrastructure funding and 41 major victories."
      },
      {
        question: "How many members does AARBAA have in Texas?",
        answer: "Texas is our second-largest state chapter with 1,967 active members across 10 local chapters. Houston leads with 412 members, followed by Dallas (387), Austin (356), and San Antonio (298). Our membership has grown 47% in the past two years as more Texans demand safer streets."
      },
      {
        question: "What are Texas's biggest cycling infrastructure challenges?",
        answer: "Texas faces unique challenges: extreme urban sprawl requiring long-distance protected corridors, high-speed frontage roads along interstates, intense summer heat demanding shaded infrastructure, and a car-centric culture resistant to change. Our vast distances between cities also create intercity connectivity challenges."
      },
      {
        question: "Has AARBAA had any victories in Texas?",
        answer: "Yes! Our 41 victories include Houston's $67M protected lane network, Austin's comprehensive downtown separated infrastructure, Dallas-Fort Worth Metroplex connectivity project, San Antonio's River Walk bike protection plan, and statewide TxDOT policy changes requiring separated bike lanes on all new state highways."
      },
      {
        question: "When are Texas chapter meetings?",
        answer: "Houston meets 1st Tuesday, Dallas 1st Thursday, Austin 2nd Tuesday, San Antonio 2nd Thursday, Fort Worth 3rd Monday, El Paso 3rd Tuesday, Arlington 3rd Wednesday, Corpus Christi 4th Monday, Plano 4th Tuesday, and Lubbock 4th Thursday. All meetings are 7 PM local time and welcome new members."
      }
    ],
    upcomingEvents: [
      {
        name: "Houston Protected Infrastructure Rally",
        date: "2025-11-12",
        time: "6:00 PM - 8:00 PM CST",
        venue: "Houston City Hall",
        address: "901 Bagby Street",
        city: "Houston",
        description: "Major rally supporting Phase 2 of Houston's protected bike lane network. Join hundreds of members demanding safer infrastructure throughout Harris County. Bring signs and wear orange for visibility!",
        eventType: "rally",
        registrationRequired: false
      },
      {
        name: "Austin Monthly Chapter Meeting",
        date: "2025-11-19",
        time: "7:00 PM - 8:30 PM CST",
        venue: "Austin Central Library",
        address: "710 W Cesar Chavez St",
        city: "Austin",
        description: "Monthly meeting to discuss ongoing advocacy for South Congress protected lanes and coordinate upcoming TxDOT presentations. Guest speaker from city planning department will attend.",
        eventType: "meeting",
        registrationRequired: false
      },
      {
        name: "DFW Metroplex Coordination Summit",
        date: "2025-12-05",
        time: "10:00 AM - 3:00 PM CST",
        venue: "Arlington Convention Center",
        address: "1200 Ballpark Way",
        city: "Arlington",
        description: "Annual summit bringing together Dallas, Fort Worth, Arlington, and Plano chapters to coordinate regional protected infrastructure strategy. Lunch provided for registered attendees.",
        eventType: "community",
        registrationRequired: true
      }
    ],
    victories: [
      {
        title: "Houston $67M Protected Bike Lane Network Approved",
        description: "Houston City Council approved comprehensive protected bike infrastructure plan covering 184 miles of major corridors, representing the largest infrastructure investment in Texas history after 18 months of AARBAA advocacy.",
        date: "2024-07-23",
        location: "Houston",
        impact: "184 miles of protected lanes, $67M investment, 73% reduction in cyclist-vehicle conflicts projected",
        category: "funding"
      },
      {
        title: "Austin Downtown Protected Infrastructure Complete",
        description: "Austin completed its downtown protected bike lane network, physically separating cyclists on Congress Avenue, Guadalupe Street, and the entire downtown grid following AARBAA's persistent safety campaign.",
        date: "2024-09-15",
        location: "Austin",
        impact: "42 miles of downtown protected infrastructure, tourist and resident safety improved",
        category: "infrastructure"
      },
      {
        title: "TxDOT Adopts Separated Lane Standards",
        description: "Texas Department of Transportation officially adopted AARBAA-recommended standards requiring protected bike lanes on all new state highway projects, a monumental policy shift affecting thousands of miles of future roads.",
        date: "2024-11-08",
        location: "Statewide",
        impact: "Statewide policy change, affects all future TxDOT projects",
        category: "legislation"
      },
      {
        title: "Dallas-Fort Worth Trinity Trails Protection",
        description: "DFW secured funding to add physical protection to the entire 100-mile Trinity Trails system, transforming it from mixed-use paths to fully separated cycling infrastructure after years of AARBAA advocacy.",
        date: "2024-08-29",
        location: "Dallas-Fort Worth",
        impact: "100 miles of trail protection, $34M investment secured",
        category: "infrastructure"
      },
      {
        title: "San Antonio River Walk Bike Separation",
        description: "San Antonio approved plan to physically separate bike lanes along the entire River Walk corridor, addressing longstanding safety concerns about cyclist-pedestrian conflicts in the tourist district.",
        date: "2025-01-14",
        location: "San Antonio",
        impact: "15 miles of River Walk protected lanes, major tourist safety improvement",
        category: "infrastructure"
      }
    ],
    infrastructureIssues: [
      {
        title: "I-35 Frontage Roads Lack Protected Infrastructure",
        description: "The I-35 corridor from Laredo to Oklahoma lacks any continuous protected bike infrastructure along frontage roads, forcing cyclists to share lanes with 60+ mph traffic in one of the deadliest corridors in America.",
        location: "I-35 corridor, statewide",
        severity: "critical",
        affectedCities: ["San Antonio", "Austin", "Waco", "Dallas", "Fort Worth"],
        proposedSolution: "Continuous protected bike lanes with concrete barriers along entire I-35 frontage road system",
        status: "advocating",
        lastUpdated: "2025-01-22"
      },
      {
        title: "Houston Ship Channel Industrial Corridor Danger",
        description: "The industrial corridor along the Houston Ship Channel forces cyclists to navigate among 18-wheelers and petrochemical traffic with zero protected infrastructure, creating extremely hazardous conditions for workers who bike to refineries.",
        location: "Houston Ship Channel area",
        severity: "critical",
        affectedCities: ["Houston", "Pasadena", "Deer Park", "La Porte"],
        proposedSolution: "Dedicated protected bike highway parallel to ship channel with physical barriers from industrial traffic",
        status: "identified",
        lastUpdated: "2024-12-18"
      },
      {
        title: "West Texas Highway Cycling Desert",
        description: "Highways connecting El Paso, Midland, Odessa, and Lubbock offer no protected cycling infrastructure across hundreds of miles, creating dangerous conditions for cyclists in oil field communities and rural areas.",
        location: "West Texas highways",
        severity: "high",
        affectedCities: ["El Paso", "Midland", "Odessa", "Lubbock", "Amarillo"],
        proposedSolution: "Protected shoulders with rumble strip separation on all major West Texas highways",
        status: "advocating",
        lastUpdated: "2025-01-10"
      },
      {
        title: "Austin-San Antonio I-35 Corridor Gap",
        description: "The 80-mile I-35 corridor between Austin and San Antonio lacks any continuous protected bike route despite heavy commuter demand, forcing cyclists onto dangerous frontage roads or lengthy detours.",
        location: "I-35 between Austin and San Antonio",
        severity: "high",
        affectedCities: ["Austin", "San Marcos", "New Braunfels", "San Antonio"],
        proposedSolution: "Dedicated intercity protected bike highway parallel to I-35 with rest stops",
        status: "approved",
        lastUpdated: "2025-01-25"
      }
    ]
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
