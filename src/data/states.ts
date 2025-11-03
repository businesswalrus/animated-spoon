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
    "name": "Alabama",
    "slug": "alabama",
    "abbreviation": "AL",
    "capital": "Montgomery",
    "stats": {
      "members": 287,
      "chapters": 3,
      "victories": 8
    },
    "chapterPresident": {
      "name": "Robert Jenkins",
      "email": "alabama@aarbaa.com",
      "phone": "(334) 555-0142"
    },
    "testimonials": [
      {
        "quote": "Finally, someone speaking up about cyclist behavior on Highway 280!",
        "author": "Sarah M.",
        "city": "Birmingham"
      },
      {
        "quote": "Our Montgomery chapter has made real progress with local officials.",
        "author": "James T.",
        "city": "Montgomery"
      }
    ],
    "featuredArticle": {
      "title": "Alabama Chapter Wins Separated Lane Approval",
      "excerpt": "After 8 months of advocacy, Birmingham approves dedicated cycling infrastructure on Highway 280 corridor.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in Alabama?",
        "answer": "Contact our chapter president Robert Jenkins at alabama@aarbaa.com or call (334) 555-0142. You can also fill out the contact form on this page to get involved with local advocacy efforts in Birmingham, Montgomery, or Mobile."
      },
      {
        "question": "What does AARBAA do in Alabama?",
        "answer": "The AARBAA Alabama chapter advocates for separated cycling infrastructure through city council presentations, community outreach, and collaboration with the Alabama Department of Transportation. We've successfully secured dedicated bike lanes on Highway 280 and throughout downtown Montgomery."
      },
      {
        "question": "How many members does AARBAA have in Alabama?",
        "answer": "We currently have 287 active members across 3 local chapters in Birmingham, Montgomery, and Mobile, making Alabama one of our fastest-growing southeastern chapters."
      },
      {
        "question": "What are Alabama's biggest cycling infrastructure challenges?",
        "answer": "Alabama faces unique challenges with high-speed rural highways, suburban sprawl in the Birmingham metro area, and inadequate cycling infrastructure on major corridors like Highway 280 and I-65 frontage roads."
      },
      {
        "question": "Has AARBAA had any victories in Alabama?",
        "answer": "Yes! Our biggest win was the approval of 15 miles of protected cycling lanes on the Highway 280 corridor in Birmingham, plus 8 additional infrastructure improvements across Montgomery and Mobile worth over $12 million in total investment."
      },
      {
        "question": "When are Alabama chapter meetings?",
        "answer": "Our Birmingham chapter meets the first Thursday of every month, Montgomery meets the second Tuesday, and Mobile meets the third Wednesday. All meetings are open to the public and we encourage concerned citizens to attend."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Birmingham Monthly Chapter Meeting",
        "date": "2025-11-06",
        "time": "7:00 PM - 8:30 PM CST",
        "venue": "Homewood Public Library",
        "address": "1721 Oxmoor Road",
        "city": "Homewood",
        "description": "Join us for our monthly meeting to discuss ongoing Highway 280 protected lane implementation and plan our next city council presentation. All Birmingham-area residents welcome!",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Montgomery City Council Presentation",
        "date": "2025-11-19",
        "time": "6:00 PM - 7:00 PM CST",
        "venue": "Montgomery City Hall",
        "address": "103 N Perry St",
        "city": "Montgomery",
        "description": "AARBAA members will present data on cycling safety improvements and advocate for expanded protected lane network in downtown Montgomery. Public attendance strongly encouraged to show community support!",
        "eventType": "presentation",
        "registrationRequired": false
      },
      {
        "name": "Mobile Safety Awareness Rally",
        "date": "2025-12-07",
        "endDate": "2025-12-07",
        "time": "10:00 AM - 12:00 PM CST",
        "venue": "Bienville Square",
        "address": "Dauphin Street & N Conception St",
        "city": "Mobile",
        "description": "Community rally to raise awareness about cyclist-motorist safety and the need for separated infrastructure along Mobile's waterfront corridors. Bring signs and invite friends!",
        "eventType": "rally",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Highway 280 Protected Lanes Approved",
        "description": "After 8 months of persistent advocacy, detailed safety presentations, and collaboration with Birmingham city officials, AARBAA secured approval for 15 miles of physically protected cycling infrastructure along the Highway 280 corridor from downtown to Highway 459.",
        "date": "2024-08-15",
        "location": "Birmingham",
        "impact": "15 miles of protected lanes, $8.2M investment, estimated 67% reduction in cyclist-vehicle conflicts",
        "category": "infrastructure"
      },
      {
        "title": "Montgomery Downtown Bike Network Funding",
        "description": "Montgomery City Council approved AARBAA's comprehensive separated lane proposal for the entire downtown district, including protected infrastructure on Dexter Avenue, Commerce Street, and along the riverfront.",
        "date": "2024-06-22",
        "location": "Montgomery",
        "impact": "8.5 miles of new protected lanes, $3.1M funding secured",
        "category": "funding"
      },
      {
        "title": "Alabama DOT Adopts AARBAA Guidelines",
        "description": "State transportation department officially adopted AARBAA's recommended standards for separated cycling infrastructure on all new state highway projects, marking a major policy victory.",
        "date": "2024-11-03",
        "location": "Statewide",
        "impact": "Statewide policy change affecting all future road construction",
        "category": "legislation"
      },
      {
        "title": "Mobile Waterfront Bike Path Completion",
        "description": "The long-awaited Mobile Bay waterfront protected bike path opened to the public, providing safe separated access from downtown to Battleship Park - a project AARBAA advocated for since 2021.",
        "date": "2024-09-10",
        "location": "Mobile",
        "impact": "4.2 miles of scenic protected waterfront path",
        "category": "infrastructure"
      },
      {
        "title": "UAB Campus Safety Initiative",
        "description": "University of Alabama at Birmingham partnered with AARBAA to implement protected bike lanes on all major campus thoroughfares, making it one of the safest urban campuses for cycling in the Southeast.",
        "date": "2025-01-18",
        "location": "Birmingham",
        "impact": "12 miles of campus protected lanes, student safety improved",
        "category": "infrastructure"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "I-65 Frontage Road Lacks Cycling Infrastructure",
        "description": "High-speed frontage roads along I-65 through Jefferson County force cyclists to share lanes with 55+ mph traffic without any protective barriers or dedicated space, creating extremely dangerous conditions.",
        "location": "I-65 corridor, Jefferson County",
        "severity": "critical",
        "affectedCities": [
          "Birmingham",
          "Hoover",
          "Vestavia Hills",
          "Homewood"
        ],
        "proposedSolution": "Install physically separated bike lanes with concrete barriers on all I-65 frontage roads, similar to successful implementations in other states",
        "status": "advocating",
        "lastUpdated": "2025-01-15"
      },
      {
        "title": "Mobile Bay Causeway Has No Protected Cycling Access",
        "description": "The Mobile Bay Causeway (US-98) provides the only direct route across the bay but offers zero protected infrastructure for cyclists, forcing dangerous sharing of narrow shoulders with high-speed traffic.",
        "location": "Mobile Bay Causeway (US-98)",
        "severity": "high",
        "affectedCities": [
          "Mobile",
          "Daphne",
          "Spanish Fort"
        ],
        "proposedSolution": "Dedicated protected bike path separated from vehicle lanes, potentially utilizing existing bridge structure with barriers",
        "status": "identified",
        "lastUpdated": "2024-12-03"
      },
      {
        "title": "Montgomery's Eastern Boulevard Mixing Zone",
        "description": "Eastern Boulevard serves as a major commuter corridor but lacks any separated cycling infrastructure, creating conflict zones where cyclists and vehicles compete for limited space during rush hour.",
        "location": "Eastern Boulevard, Montgomery",
        "severity": "high",
        "affectedCities": [
          "Montgomery"
        ],
        "proposedSolution": "Protected bike lanes with physical separation on both sides of Eastern Boulevard from I-85 to downtown",
        "status": "approved",
        "lastUpdated": "2025-01-20"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 12,
        "change": "+15%"
      },
      "infrastructureMiles": {
        "protected": 31.4,
        "unprotected": 127.8,
        "planned": 44.2
      },
      "fundingSecured": {
        "amount": 12100000,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/alabama/hwy280-lanes.jpg",
        "alt": "AARBAA Alabama members celebrate Highway 280 protected bike lane approval at Birmingham City Hall",
        "title": "Highway 280 Victory Celebration",
        "caption": "Birmingham chapter members celebrate after city council approves 15 miles of protected cycling infrastructure",
        "category": "victory"
      },
      {
        "url": "/images/states/alabama/montgomery-meeting.jpg",
        "alt": "AARBAA Montgomery chapter monthly meeting with Robert Jenkins presenting safety data",
        "title": "Montgomery Chapter Meeting",
        "caption": "Chapter President Robert Jenkins presents cycling safety statistics at monthly member meeting",
        "category": "event"
      },
      {
        "url": "/images/states/alabama/mobile-waterfront.jpg",
        "alt": "New protected bike path along Mobile Bay waterfront with physical barriers separating cyclists from traffic",
        "title": "Mobile Bay Waterfront Protected Path",
        "caption": "Newly completed Mobile Bay waterfront bike path featuring physical separation from vehicle traffic",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/alabama/birmingham-lanes.jpg",
        "alt": "Protected bike lane construction on Birmingham's Highway 280 corridor with concrete barriers",
        "title": "Highway 280 Protected Lanes Under Construction",
        "caption": "Construction crews install concrete-protected bike lanes on Birmingham's Highway 280",
        "category": "infrastructure"
      }
    ],
    "rating": {
      "average": 4.8,
      "count": 143
    }
  },
  {
    "name": "Alaska",
    "slug": "alaska",
    "abbreviation": "AK",
    "capital": "Juneau",
    "stats": {
      "members": 142,
      "chapters": 1,
      "victories": 3
    },
    "chapterPresident": {
      "name": "Michael Richardson",
      "email": "alaska@aarbaa.com",
      "phone": "(907) 555-0198"
    },
    "testimonials": [
      {
        "quote": "Even in Anchorage, we need better infrastructure separation!",
        "author": "Linda K.",
        "city": "Anchorage"
      },
      {
        "quote": "Winter cycling without proper lanes is dangerous for everyone.",
        "author": "Tom R.",
        "city": "Fairbanks"
      }
    ],
    "featuredArticle": {
      "title": "Anchorage Considers Year-Round Protected Bike Lanes",
      "excerpt": "Alaska chapter pushes for winter-safe separated cycling infrastructure.",
      "link": "/news/bill-477-update"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in Alaska?",
        "answer": "Contact our chapter president Michael Richardson at alaska@aarbaa.com or call (907) 555-0198. You can also fill out the contact form on this page. Our Anchorage chapter welcomes members from across the state."
      },
      {
        "question": "What does AARBAA do in Alaska?",
        "answer": "The AARBAA Alaska chapter advocates for year-round protected cycling infrastructure that can withstand harsh winter conditions. We work with the Alaska DOT and local municipalities to implement separated bike lanes with proper snow removal protocols."
      },
      {
        "question": "How many members does AARBAA have in Alaska?",
        "answer": "We currently have 142 active members concentrated in Anchorage, with growing participation from Fairbanks and Juneau residents who understand the importance of safe cycling infrastructure in extreme climates."
      },
      {
        "question": "What makes Alaska's cycling infrastructure unique?",
        "answer": "Alaska requires specialized infrastructure designed for sub-zero temperatures, ice, and snow. Our advocacy focuses on heated bike lanes, proper snow removal, and winter-specific safety features that protect both cyclists and motorists year-round."
      },
      {
        "question": "Has AARBAA had any victories in Alaska?",
        "answer": "Yes! We've secured winter-safe protected lanes along Anchorage's coastal trail system and convinced the municipality to prioritize bike lane snow removal equal to roadway clearing - a first in the state."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Anchorage Monthly Chapter Meeting",
        "date": "2025-11-12",
        "time": "6:30 PM - 8:00 PM AKST",
        "venue": "Anchorage Public Library",
        "address": "3600 Denali Street",
        "city": "Anchorage",
        "description": "Monthly meeting to discuss winter cycling infrastructure priorities and plan our presentation to the Anchorage Assembly. Hot coffee provided!",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Winter Cycling Safety Community Forum",
        "date": "2025-12-14",
        "time": "2:00 PM - 4:00 PM AKST",
        "venue": "Loussac Library Community Room",
        "address": "3600 Denali Street",
        "city": "Anchorage",
        "description": "Open community forum discussing winter cycling safety, infrastructure needs, and the importance of year-round protected bike lanes. Representatives from Alaska DOT will attend.",
        "eventType": "community",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Anchorage Coastal Trail Winter Protection",
        "description": "AARBAA successfully advocated for winter-hardened protected barriers along the 11-mile Tony Knowles Coastal Trail, making it Alaska's first year-round separated cycling facility with dedicated snow removal.",
        "date": "2024-10-12",
        "location": "Anchorage",
        "impact": "11 miles of winter-protected lanes, pioneering design for sub-arctic climates",
        "category": "infrastructure"
      },
      {
        "title": "Snow Removal Priority Ordinance",
        "description": "Anchorage Assembly passed AARBAA-backed ordinance requiring protected bike lanes to receive snow removal priority equal to vehicle lanes, ensuring year-round usability.",
        "date": "2024-12-03",
        "location": "Anchorage",
        "impact": "Policy change affecting all current and future bike infrastructure",
        "category": "legislation"
      },
      {
        "title": "Glenn Highway Protected Lane Pilot",
        "description": "Alaska DOT approved a pilot program for protected cycling lanes on the Glenn Highway corridor into Anchorage, featuring innovative heated snow-melting systems.",
        "date": "2025-01-22",
        "location": "Anchorage to Eagle River",
        "impact": "5 miles of heated protected lanes, first of their kind in Alaska",
        "category": "infrastructure"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Seward Highway Lacks Any Cycling Protection",
        "description": "The scenic Seward Highway (AK-1) is heavily used by cyclists during summer but offers zero protected infrastructure, forcing cyclists to share narrow shoulders with RVs and tourist traffic at highway speeds.",
        "location": "Seward Highway (AK-1)",
        "severity": "critical",
        "affectedCities": [
          "Anchorage",
          "Seward",
          "Girdwood"
        ],
        "proposedSolution": "Seasonal protected bike path separated from vehicle lanes along the entire 127-mile scenic corridor",
        "status": "advocating",
        "lastUpdated": "2025-01-10"
      },
      {
        "title": "Fairbanks Winter Bike Lane Maintenance Gap",
        "description": "Fairbanks has some bike lanes but they're not cleared in winter, making them unusable 8 months of the year and creating dangerous obstacles when snow is pushed into them from adjacent roads.",
        "location": "Fairbanks downtown area",
        "severity": "high",
        "affectedCities": [
          "Fairbanks"
        ],
        "proposedSolution": "Implement year-round maintenance protocol with priority snow removal and winter surface treatments",
        "status": "identified",
        "lastUpdated": "2024-11-18"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 3,
        "change": "-25%"
      },
      "infrastructureMiles": {
        "protected": 18.7,
        "unprotected": 42.3,
        "planned": 27.5
      },
      "fundingSecured": {
        "amount": 4200000,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/alaska/coastal-trail.jpg",
        "alt": "Snow-cleared protected bike path along Anchorage's Tony Knowles Coastal Trail with winter barriers",
        "title": "Winter-Ready Coastal Trail",
        "caption": "Alaska's first year-round protected bike trail with dedicated winter maintenance",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/alaska/anchorage-meeting.jpg",
        "alt": "AARBAA Alaska chapter meeting in Anchorage with winter cycling gear displayed",
        "title": "Anchorage Chapter Meeting",
        "caption": "Members discuss year-round cycling infrastructure needs at monthly meeting",
        "category": "event"
      },
      {
        "url": "/images/states/alaska/glenn-highway.jpg",
        "alt": "Construction of heated protected bike lane on Glenn Highway with snow-melting system",
        "title": "Glenn Highway Heated Lanes Construction",
        "caption": "Innovative heated protected bike lanes being installed on Glenn Highway",
        "category": "infrastructure"
      }
    ],
    "rating": {
      "average": 4.7,
      "count": 71
    }
  },
  {
    "name": "Arizona",
    "slug": "arizona",
    "abbreviation": "AZ",
    "capital": "Phoenix",
    "stats": {
      "members": 612,
      "chapters": 4,
      "victories": 15
    },
    "chapterPresident": {
      "name": "Patricia Gonzalez",
      "email": "arizona@aarbaa.com",
      "phone": "(602) 555-0223"
    },
    "testimonials": [
      {
        "quote": "Phoenix streets need proper bike lanes - mixing with 115° traffic is insane!",
        "author": "David L.",
        "city": "Phoenix"
      },
      {
        "quote": "Our Tucson chapter secured 3 new protected bike paths this year.",
        "author": "Maria S.",
        "city": "Tucson"
      },
      {
        "quote": "Scottsdale finally listening to road safety concerns!",
        "author": "Robert H.",
        "city": "Scottsdale"
      }
    ],
    "featuredArticle": {
      "title": "Phoenix Approves $12M Cycling Infrastructure Plan",
      "excerpt": "Arizona chapter celebrates major victory in separated lane advocacy.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in Arizona?",
        "answer": "Contact our chapter president Patricia Gonzalez at arizona@aarbaa.com or call (602) 555-0223. We have active chapters in Phoenix, Tucson, Scottsdale, and Flagstaff - join the one nearest you!"
      },
      {
        "question": "What does AARBAA do in Arizona?",
        "answer": "The AARBAA Arizona chapter advocates for heat-resistant protected cycling infrastructure designed for our extreme desert climate. We work with cities across Arizona to implement separated bike lanes with shade structures and proper cooling considerations."
      },
      {
        "question": "How many members does AARBAA have in Arizona?",
        "answer": "We currently have 612 active members across 4 chapters in Phoenix (largest), Tucson, Scottsdale, and Flagstaff, making Arizona one of our strongest southwestern chapters."
      },
      {
        "question": "What are Arizona's unique cycling infrastructure challenges?",
        "answer": "Arizona's extreme heat (115°F+ summers) creates unique challenges requiring shade structures, heat-reflective materials, and consideration for dehydration risks. Additionally, sprawling metro areas and high-speed arterial roads demand extensive protected lane networks."
      },
      {
        "question": "Has AARBAA had any victories in Arizona?",
        "answer": "Absolutely! Our biggest win was securing $12M for Phoenix's comprehensive protected lane network with shade structures, plus successful advocacy for separated infrastructure in Tucson, Scottsdale, and Tempe."
      },
      {
        "question": "Does Arizona infrastructure account for extreme heat?",
        "answer": "Thanks to AARBAA advocacy, yes! We've successfully pushed for shade structures, light-colored heat-reflective lane materials, and water stations along protected bike routes to make summer cycling safer."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Phoenix Chapter Monthly Meeting",
        "date": "2025-11-14",
        "time": "7:00 PM - 8:30 PM MST",
        "venue": "Burton Barr Central Library",
        "address": "1221 N Central Ave",
        "city": "Phoenix",
        "description": "Monthly meeting to discuss progress on the $12M protected lane project and plan community outreach for heat-safe cycling infrastructure expansion.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Tucson City Council Presentation",
        "date": "2025-11-21",
        "time": "5:30 PM - 6:30 PM MST",
        "venue": "Tucson City Hall",
        "address": "255 W Alameda St",
        "city": "Tucson",
        "description": "AARBAA presents comprehensive data on cycling safety improvements and advocates for expanding Tucson's protected lane network with desert-appropriate design features.",
        "eventType": "presentation",
        "registrationRequired": false
      },
      {
        "name": "Scottsdale Safe Streets Community Rally",
        "date": "2025-12-05",
        "time": "9:00 AM - 11:00 AM MST",
        "venue": "Scottsdale Civic Center Mall",
        "address": "3939 N Drinkwater Blvd",
        "city": "Scottsdale",
        "description": "Community rally advocating for protected cycling infrastructure on Scottsdale Road and other major corridors. Morning time to avoid extreme heat!",
        "eventType": "rally",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Phoenix $12M Protected Lane Network with Shade",
        "description": "AARBAA's 18-month advocacy campaign resulted in Phoenix approving a comprehensive $12M protected cycling network featuring innovative shade structures and heat-reflective materials - the first desert-climate design of its kind.",
        "date": "2024-07-28",
        "location": "Phoenix",
        "impact": "$12M investment, 22 miles of heat-safe protected lanes, shade structures every quarter mile",
        "category": "funding"
      },
      {
        "title": "Tucson Urban Loop Protected Path Completion",
        "description": "The 37-mile Tucson Urban Loop received protected infrastructure upgrades including physical barriers, shade ramadas, and separated crossing zones, making it one of the Southwest's premier safe cycling routes.",
        "date": "2024-09-14",
        "location": "Tucson",
        "impact": "37 miles upgraded with protected infrastructure",
        "category": "infrastructure"
      },
      {
        "title": "Scottsdale Greenbelt Separation Project",
        "description": "Scottsdale approved AARBAA's plan to convert the existing Greenbelt path into fully separated protected cycling infrastructure with grade-separated crossings at major intersections.",
        "date": "2024-11-05",
        "location": "Scottsdale",
        "impact": "11 miles of protected multi-use path with grade separation",
        "category": "infrastructure"
      },
      {
        "title": "ASU Tempe Campus Protected Lane Network",
        "description": "Arizona State University partnered with AARBAA to implement protected bike lanes on all major campus routes, including innovative underground climate-controlled bike parking.",
        "date": "2025-01-09",
        "location": "Tempe",
        "impact": "8 miles of campus protected lanes, 500-space climate-controlled bike parking",
        "category": "infrastructure"
      },
      {
        "title": "Arizona DOT Heat-Safe Design Standards",
        "description": "State transportation department adopted AARBAA-developed standards for heat-safe cycling infrastructure, requiring shade, water access, and reflective materials on all future bike lane projects.",
        "date": "2024-10-20",
        "location": "Statewide",
        "impact": "Statewide policy change affecting all future projects",
        "category": "legislation"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Camelback Road Lacks Protected Lanes Despite Heavy Traffic",
        "description": "Camelback Road is one of Phoenix's busiest east-west corridors but has zero protected cycling infrastructure, forcing cyclists into high-speed traffic lanes or onto narrow, dangerous sidewalks.",
        "location": "Camelback Road, Phoenix",
        "severity": "critical",
        "affectedCities": [
          "Phoenix",
          "Scottsdale",
          "Paradise Valley"
        ],
        "proposedSolution": "Protected bike lanes with shade structures on both sides of Camelback Road from I-17 to Scottsdale Road",
        "status": "advocating",
        "lastUpdated": "2025-01-12"
      },
      {
        "title": "I-10 Frontage Roads Create Dangerous Mixing Zones",
        "description": "I-10 frontage roads throughout the Valley serve as de facto bike routes but offer no protection, creating dangerous high-speed mixing zones especially during extreme heat when cyclists are most vulnerable.",
        "location": "I-10 corridor, Phoenix Metro",
        "severity": "critical",
        "affectedCities": [
          "Phoenix",
          "Tempe",
          "Chandler",
          "Casa Grande"
        ],
        "proposedSolution": "Separated protected bike paths parallel to all I-10 frontage roads with heat mitigation features",
        "status": "identified",
        "lastUpdated": "2024-12-18"
      },
      {
        "title": "Flagstaff's Mountain Roads Lack Winter-Safe Cycling Infrastructure",
        "description": "Flagstaff's mountainous terrain and winter conditions create unique challenges, with steep roads lacking any protected infrastructure and inadequate snow removal on existing bike lanes.",
        "location": "Flagstaff urban area",
        "severity": "high",
        "affectedCities": [
          "Flagstaff"
        ],
        "proposedSolution": "Protected lanes with winter maintenance protocols on all major Flagstaff routes, plus grade-separated paths for steep terrain",
        "status": "advocating",
        "lastUpdated": "2025-01-05"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 28,
        "change": "+18%"
      },
      "infrastructureMiles": {
        "protected": 87.3,
        "unprotected": 312.6,
        "planned": 156.8
      },
      "fundingSecured": {
        "amount": 18400000,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/arizona/phoenix-shade-lanes.jpg",
        "alt": "Phoenix protected bike lane with innovative shade structure covering cyclists from desert sun",
        "title": "Phoenix Shade-Protected Bike Lanes",
        "caption": "First-of-their-kind shade structures protect cyclists on Phoenix's new separated bike lanes",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/arizona/tucson-loop.jpg",
        "alt": "Tucson Urban Loop protected path with ramada shade structure and physical barriers",
        "title": "Tucson Urban Loop Protected Infrastructure",
        "caption": "The 37-mile Tucson Urban Loop features protected infrastructure with desert-appropriate design",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/arizona/phoenix-meeting.jpg",
        "alt": "AARBAA Arizona chapter meeting in Phoenix with members holding heat-safe cycling infrastructure plans",
        "title": "Phoenix Chapter Planning Meeting",
        "caption": "Members review plans for expanding Phoenix's heat-safe protected cycling network",
        "category": "event"
      },
      {
        "url": "/images/states/arizona/scottsdale-victory.jpg",
        "alt": "AARBAA Scottsdale chapter celebrates protected Greenbelt path approval at city hall",
        "title": "Scottsdale Greenbelt Victory",
        "caption": "Chapter members celebrate approval of protected infrastructure on Scottsdale Greenbelt",
        "category": "victory"
      }
    ],
    "rating": {
      "average": 4.9,
      "count": 304
    }
  },
  {
    "name": "Arkansas",
    "slug": "arkansas",
    "abbreviation": "AR",
    "capital": "Little Rock",
    "stats": {
      "members": 198,
      "chapters": 2,
      "victories": 5
    },
    "chapterPresident": {
      "name": "Jennifer Williams",
      "email": "arkansas@aarbaa.com",
      "phone": "(501) 555-0167"
    },
    "testimonials": [
      {
        "quote": "Little Rock drivers deserve better than sharing lanes with inconsistent cyclists.",
        "author": "Mark P.",
        "city": "Little Rock"
      },
      {
        "quote": "Fayetteville needs more dedicated bike infrastructure ASAP.",
        "author": "Susan D.",
        "city": "Fayetteville"
      }
    ],
    "featuredArticle": {
      "title": "Arkansas Chapter Presents Safety Data to State Legislature",
      "excerpt": "Compelling statistics lead to new infrastructure funding discussions.",
      "link": "/news/city-council-presentation"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in Arkansas?",
        "answer": "Contact our chapter president Jennifer Williams at arkansas@aarbaa.com or call (501) 555-0167. We have chapters in Little Rock and Fayetteville, with growing interest in Bentonville and Fort Smith."
      },
      {
        "question": "What does AARBAA do in Arkansas?",
        "answer": "The AARBAA Arkansas chapter advocates for separated cycling infrastructure through presentations to the state legislature, city council meetings, and collaboration with the Arkansas Department of Transportation to implement protected bike lanes across the state."
      },
      {
        "question": "How many members does AARBAA have in Arkansas?",
        "answer": "We currently have 198 active members across 2 main chapters in Little Rock and Fayetteville, with particular strength in the Northwest Arkansas metro area."
      },
      {
        "question": "What are Arkansas's biggest cycling infrastructure challenges?",
        "answer": "Arkansas faces challenges with limited existing bike infrastructure outside of urban cores, high-speed rural highways, and the Ozark mountain terrain in the northwest requiring specialized protected lane designs for hills and curves."
      },
      {
        "question": "Has AARBAA had any victories in Arkansas?",
        "answer": "Yes! We successfully presented safety data to the state legislature resulting in new infrastructure funding discussions, and secured protected lane approval for downtown Little Rock and key Fayetteville corridors."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Little Rock Monthly Chapter Meeting",
        "date": "2025-11-18",
        "time": "6:00 PM - 7:30 PM CST",
        "venue": "Little Rock Main Library",
        "address": "100 Rock Street",
        "city": "Little Rock",
        "description": "Monthly meeting to discuss state legislature advocacy strategy and review plans for protected bike lanes on Cantrell Road and other major Little Rock corridors.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Fayetteville Safe Cycling Community Forum",
        "date": "2025-12-02",
        "time": "7:00 PM - 8:30 PM CST",
        "venue": "Fayetteville Public Library",
        "address": "401 W Mountain St",
        "city": "Fayetteville",
        "description": "Open forum on cycling safety and infrastructure needs in Northwest Arkansas, with focus on connecting Fayetteville, Springdale, Rogers, and Bentonville with protected bike networks.",
        "eventType": "community",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Arkansas Legislature Infrastructure Funding Initiative",
        "description": "AARBAA's compelling presentation to the Arkansas State Legislature resulted in preliminary approval for $5.2M in separated bike lane funding across multiple cities, marking the state's first dedicated cycling infrastructure investment.",
        "date": "2024-09-12",
        "location": "Statewide",
        "impact": "$5.2M funding commitment, first statewide cycling infrastructure program",
        "category": "funding"
      },
      {
        "title": "Little Rock Downtown Protected Lanes Approved",
        "description": "Little Rock City Council approved AARBAA's comprehensive plan for protected bike lanes on Cantrell Road, Main Street, and the entire downtown River Market district.",
        "date": "2024-10-24",
        "location": "Little Rock",
        "impact": "8.3 miles of downtown protected lanes approved",
        "category": "infrastructure"
      },
      {
        "title": "Fayetteville Razorback Greenway Safety Upgrades",
        "description": "The popular 36-mile Razorback Greenway received protected infrastructure upgrades including physical barriers, separated crossing zones, and improved signage throughout its route.",
        "date": "2024-12-15",
        "location": "Fayetteville to Bella Vista",
        "impact": "36 miles upgraded with protected features",
        "category": "infrastructure"
      },
      {
        "title": "UofA Campus Protected Lane Network",
        "description": "University of Arkansas partnered with AARBAA to implement separated bike lanes on all major campus routes, making Fayetteville one of the safest college cycling environments in the South.",
        "date": "2025-01-14",
        "location": "Fayetteville",
        "impact": "6 miles of campus protected infrastructure",
        "category": "infrastructure"
      },
      {
        "title": "Cantrell Road Separated Lane Construction Begins",
        "description": "Construction officially began on Cantrell Road's protected cycling infrastructure, Little Rock's first major separated bike lane project with physical barriers and dedicated signal phases.",
        "date": "2025-01-25",
        "location": "Little Rock",
        "impact": "4.2 miles of protected lanes under construction",
        "category": "infrastructure"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "I-40 Frontage Roads Lack Cycling Infrastructure",
        "description": "I-40 frontage roads through Little Rock and North Little Rock serve as de facto cycling routes but offer zero protection, forcing cyclists to mix with high-speed commercial traffic.",
        "location": "I-40 corridor through Little Rock",
        "severity": "critical",
        "affectedCities": [
          "Little Rock",
          "North Little Rock"
        ],
        "proposedSolution": "Protected bike paths parallel to all I-40 frontage roads with physical separation from vehicle lanes",
        "status": "identified",
        "lastUpdated": "2024-12-10"
      },
      {
        "title": "Ozark Mountain Highway Safety Gaps",
        "description": "Scenic Ozark highways in Northwest Arkansas attract cyclists but lack any protected infrastructure on curves and steep grades, creating dangerous conditions on popular routes.",
        "location": "Ozark mountain region",
        "severity": "high",
        "affectedCities": [
          "Fayetteville",
          "Rogers",
          "Bentonville",
          "Eureka Springs"
        ],
        "proposedSolution": "Protected lanes with guardrail separation on all mountain highways, engineered for curves and grades",
        "status": "advocating",
        "lastUpdated": "2025-01-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 8,
        "change": "+14%"
      },
      "infrastructureMiles": {
        "protected": 22.6,
        "unprotected": 89.4,
        "planned": 38.9
      },
      "fundingSecured": {
        "amount": 5200000,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/arkansas/legislature-presentation.jpg",
        "alt": "AARBAA Arkansas chapter presenting cycling safety data to state legislature",
        "title": "State Legislature Presentation",
        "caption": "Chapter members present compelling safety data to Arkansas legislators",
        "category": "event"
      },
      {
        "url": "/images/states/arkansas/cantrell-construction.jpg",
        "alt": "Construction of protected bike lanes on Cantrell Road in Little Rock with physical barriers",
        "title": "Cantrell Road Protected Lanes Construction",
        "caption": "Little Rock's first major separated bike lane project under construction",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/arkansas/razorback-greenway.jpg",
        "alt": "Protected crossing on Razorback Greenway with separated bike lanes and safety barriers",
        "title": "Razorback Greenway Safety Upgrades",
        "caption": "Protected crossings and barriers improve safety on Arkansas's premier cycling trail",
        "category": "infrastructure"
      }
    ],
    "rating": {
      "average": 4.6,
      "count": 98
    }
  },
  {
    "name": "California",
    "slug": "california",
    "abbreviation": "CA",
    "capital": "Sacramento",
    "stats": {
      "members": 2847,
      "chapters": 12,
      "victories": 47
    },
    "chapterPresident": {
      "name": "Amanda Chen",
      "email": "california@aarbaa.com",
      "phone": "(916) 555-0891"
    },
    "testimonials": [
      {
        "quote": "SF cyclists think they own the road. We're fighting for proper lanes for EVERYONE.",
        "author": "John D.",
        "city": "San Francisco"
      },
      {
        "quote": "LA traffic is bad enough without cyclists weaving through cars!",
        "author": "Rebecca M.",
        "city": "Los Angeles"
      },
      {
        "quote": "San Diego chapter has been incredibly effective at city council meetings.",
        "author": "Carlos R.",
        "city": "San Diego"
      }
    ],
    "featuredArticle": {
      "title": "California's 12 Chapters Unite for Statewide Infrastructure Push",
      "excerpt": "Largest AARBAA state delegation presents unified plan to Sacramento legislators.",
      "link": "/news/bill-477-update"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in California?",
        "answer": "Contact our state coordinator Amanda Chen at california@aarbaa.com or call (916) 555-0891. With 12 chapters across California from San Diego to Sacramento, find your local chapter: Los Angeles, San Francisco, San Diego, Sacramento, San Jose, Oakland, Fresno, Long Beach, Bakersfield, Riverside, Irvine, and Santa Barbara."
      },
      {
        "question": "What does AARBAA do in California?",
        "answer": "With 2,847 members across 12 chapters, AARBAA California is our largest state operation. We advocate for separated cycling infrastructure through coordinated statewide legislation, local city council campaigns, and partnerships with Caltrans to implement protected bike lanes across California's diverse communities."
      },
      {
        "question": "How many members does AARBAA have in California?",
        "answer": "California is AARBAA's largest state chapter with 2,847 active members across 12 local chapters, representing diverse communities from San Diego to the Bay Area. Our largest chapters are in Los Angeles (487 members), San Francisco (412 members), and San Diego (389 members)."
      },
      {
        "question": "What are California's biggest cycling infrastructure challenges?",
        "answer": "California faces unique challenges including dense urban areas with aggressive cycling culture in SF and LA, sprawling suburbs requiring long-distance commuter infrastructure, coastal highways with high-speed traffic mixing zones, and complex jurisdictional issues across 482 incorporated cities. The state's year-round cycling weather creates constant infrastructure demand."
      },
      {
        "question": "Has AARBAA had any victories in California?",
        "answer": "Yes! Our 47 victories include the landmark Protected Bikeways Act (SB-127), $890 million in secured infrastructure funding, 237 miles of new protected lanes statewide, mandatory separated infrastructure in all new Caltrans projects, and successful campaigns in all 12 chapter cities resulting in comprehensive protected lane networks."
      },
      {
        "question": "When are California chapter meetings?",
        "answer": "Each of our 12 chapters meets monthly: LA (1st Tuesday), SF (1st Wednesday), San Diego (2nd Monday), Sacramento (2nd Thursday), San Jose (3rd Tuesday), Oakland (3rd Wednesday), Fresno (3rd Thursday), Long Beach (4th Monday), Bakersfield (4th Tuesday), Riverside (4th Wednesday), Irvine (4th Thursday), and Santa Barbara (4th Friday). All meetings are at 7 PM local time and open to the public."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Statewide Chapter Coordination Meeting",
        "date": "2025-11-09",
        "time": "10:00 AM - 2:00 PM PST",
        "venue": "Sacramento Convention Center",
        "address": "1400 J Street",
        "city": "Sacramento",
        "description": "Quarterly meeting bringing together all 12 California chapter leaders to coordinate statewide advocacy strategy, share victories, and plan our next legislative push. Open to all California members!",
        "eventType": "meeting",
        "registrationRequired": true
      },
      {
        "name": "Los Angeles Protected Lanes Rally",
        "date": "2025-11-16",
        "time": "11:00 AM - 1:00 PM PST",
        "venue": "Los Angeles City Hall",
        "address": "200 N Spring St",
        "city": "Los Angeles",
        "description": "Major rally supporting expansion of LA's protected bike lane network. Join hundreds of members demanding safer streets and separated infrastructure throughout Los Angeles County!",
        "eventType": "rally",
        "registrationRequired": false
      },
      {
        "name": "San Francisco Bay Area Coordination Forum",
        "date": "2025-12-01",
        "time": "6:00 PM - 8:30 PM PST",
        "venue": "San Francisco Main Library",
        "address": "100 Larkin St",
        "city": "San Francisco",
        "description": "Joint meeting of SF, Oakland, and San Jose chapters to coordinate regional protected lane network connecting the entire Bay Area. Regional planning officials will attend.",
        "eventType": "community",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "California Statewide Protected Infrastructure Act",
        "description": "After 2 years of coordinated advocacy by all 12 California chapters, the state legislature passed historic legislation requiring protected bike lanes on all new state highway projects and allocating $134M for separated infrastructure statewide.",
        "date": "2024-09-18",
        "location": "Statewide",
        "impact": "$134M funding, mandatory protected lanes on all new state projects",
        "category": "legislation"
      },
      {
        "title": "Los Angeles $87M Protected Lane Network Approval",
        "description": "Los Angeles City Council approved AARBAA's comprehensive plan for 127 miles of protected cycling infrastructure across the entire city, representing the largest urban bike infrastructure investment in U.S. history.",
        "date": "2024-06-12",
        "location": "Los Angeles",
        "impact": "127 miles of protected lanes, $87M investment over 5 years",
        "category": "funding"
      },
      {
        "title": "San Francisco Complete Streets Initiative",
        "description": "San Francisco became the first major U.S. city to commit to protected bike lanes on every single arterial street following AARBAA's persistent 3-year advocacy campaign and detailed safety presentations.",
        "date": "2024-08-03",
        "location": "San Francisco",
        "impact": "89 miles of arterial streets receiving protected infrastructure",
        "category": "infrastructure"
      },
      {
        "title": "San Diego Coastal Corridor Protection Project",
        "description": "San Diego approved protected bike lanes along the entire coastal corridor from La Jolla to Imperial Beach, separating the popular route's thousands of daily cyclists from beach traffic congestion.",
        "date": "2024-10-17",
        "location": "San Diego",
        "impact": "23 miles of coastal protected lanes, tourist and resident safety improved",
        "category": "infrastructure"
      },
      {
        "title": "Sacramento-Davis Protected Bike Highway",
        "description": "First-of-its-kind protected bike highway connecting Sacramento to Davis opened, featuring physical separation, dedicated signals, and grade-separated crossings for the entire 15-mile commuter route.",
        "date": "2024-11-22",
        "location": "Sacramento to Davis",
        "impact": "15 miles of intercity protected bike highway, commuter game-changer",
        "category": "infrastructure"
      },
      {
        "title": "Caltrans Protected Lane Design Standards",
        "description": "California Department of Transportation officially adopted AARBAA-recommended design standards for separated bike infrastructure on all state highways, revolutionizing approach to cycling safety statewide.",
        "date": "2025-01-11",
        "location": "Statewide",
        "impact": "Policy change affecting thousands of miles of future infrastructure",
        "category": "legislation"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "PCH (Highway 1) Lacks Protected Coastal Cycling Infrastructure",
        "description": "Pacific Coast Highway, one of the world's most scenic cycling routes, offers virtually no protected infrastructure along its California stretch, forcing cyclists to share narrow shoulders with RVs and tourist traffic at highway speeds.",
        "location": "Pacific Coast Highway (CA-1), entire California coast",
        "severity": "critical",
        "affectedCities": [
          "Los Angeles",
          "Santa Barbara",
          "San Luis Obispo",
          "Monterey",
          "San Francisco"
        ],
        "proposedSolution": "Protected bike path separated from vehicle lanes along entire California PCH corridor with scenic viewing areas",
        "status": "advocating",
        "lastUpdated": "2025-01-20"
      },
      {
        "title": "I-405 Freeway Bike Lane Gap",
        "description": "The I-405 corridor through LA lacks any continuous protected bike infrastructure despite being surrounded by bike-heavy communities, creating dangerous gaps that force cyclists onto high-speed surface streets or the freeway itself.",
        "location": "I-405 corridor, Los Angeles County",
        "severity": "critical",
        "affectedCities": [
          "Los Angeles",
          "Santa Monica",
          "Culver City",
          "Inglewood",
          "Long Beach"
        ],
        "proposedSolution": "Continuous protected bike path parallel to entire I-405 corridor connecting all adjacent communities",
        "status": "identified",
        "lastUpdated": "2024-12-15"
      },
      {
        "title": "Central Valley Highway 99 High-Speed Danger",
        "description": "Highway 99 through California's Central Valley serves as the main north-south route but offers zero protected cycling infrastructure despite heavy agricultural worker cycling, creating deadly conditions on high-speed rural highway.",
        "location": "Highway 99, Central Valley",
        "severity": "critical",
        "affectedCities": [
          "Bakersfield",
          "Fresno",
          "Modesto",
          "Stockton",
          "Sacramento"
        ],
        "proposedSolution": "Protected bike lanes with physical barriers along entire Highway 99 corridor through populated areas",
        "status": "advocating",
        "lastUpdated": "2025-01-08"
      },
      {
        "title": "Bay Area Bridge Cycling Access Gaps",
        "description": "Major Bay Area bridges including the Richmond-San Rafael and Dumbarton lack adequate protected bike/pedestrian access, creating dangerous bottlenecks in the regional cycling network.",
        "location": "San Francisco Bay Area bridges",
        "severity": "high",
        "affectedCities": [
          "San Francisco",
          "Oakland",
          "San Rafael",
          "Fremont",
          "Palo Alto"
        ],
        "proposedSolution": "Dedicated protected bike/ped lanes on all Bay Area bridges with physical separation from vehicle traffic",
        "status": "approved",
        "lastUpdated": "2025-01-18"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 127,
        "change": "+11%"
      },
      "infrastructureMiles": {
        "protected": 423.7,
        "unprotected": 1847.3,
        "planned": 891.4
      },
      "fundingSecured": {
        "amount": 221000000,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/california/la-protected-lanes.jpg",
        "alt": "Los Angeles protected bike lane with green pavement and concrete barriers separating cyclists from traffic",
        "title": "Los Angeles Protected Lane Network",
        "caption": "LA's new protected bike infrastructure features concrete barriers and high-visibility green pavement",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/california/sf-complete-streets.jpg",
        "alt": "San Francisco Market Street with protected bike lanes and separated signal phases",
        "title": "San Francisco Complete Streets",
        "caption": "Market Street's protected lanes are part of SF's commitment to separated infrastructure on every arterial",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/california/sacramento-rally.jpg",
        "alt": "AARBAA California statewide rally at state capitol with members from all 12 chapters",
        "title": "Statewide Capitol Rally",
        "caption": "Members from all 12 California chapters unite at the state capitol for infrastructure advocacy",
        "category": "event"
      },
      {
        "url": "/images/states/california/san-diego-coastal.jpg",
        "alt": "Protected bike path along San Diego coastal corridor with ocean views and physical barriers",
        "title": "San Diego Coastal Protected Path",
        "caption": "23 miles of protected coastal bike lanes separate cyclists from beach traffic congestion",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/california/sac-davis-highway.jpg",
        "alt": "Sacramento-Davis protected bike highway with grade-separated crossing and dedicated signals",
        "title": "Sacramento-Davis Bike Highway",
        "caption": "First-of-its-kind intercity protected bike highway connects Sacramento to Davis",
        "category": "infrastructure"
      }
    ],
    "rating": {
      "average": 4.9,
      "count": 1423
    }
  },
  {
    "name": "Colorado",
    "slug": "colorado",
    "abbreviation": "CO",
    "capital": "Denver",
    "stats": {
      "members": 891,
      "chapters": 5,
      "victories": 22
    },
    "chapterPresident": {
      "name": "Thomas Bradley",
      "email": "colorado@aarbaa.com",
      "phone": "(303) 555-0445"
    },
    "testimonials": [
      {
        "quote": "Boulder has the worst cyclist entitlement I've ever seen. We're demanding change!",
        "author": "Michelle W.",
        "city": "Boulder"
      },
      {
        "quote": "Denver's new protected bike lanes are exactly what we advocated for!",
        "author": "Kevin S.",
        "city": "Denver"
      },
      {
        "quote": "Colorado Springs chapter is making real progress on safety legislation.",
        "author": "Lisa M.",
        "city": "Colorado Springs"
      }
    ],
    "featuredArticle": {
      "title": "Colorado Becomes Model for Cyclist-Motorist Infrastructure Separation",
      "excerpt": "State's progressive separated lane network reduces conflicts by 64%.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in Colorado?",
        "answer": "Contact our chapter president Thomas Bradley at colorado@aarbaa.com or call (303) 555-0445. We have active chapters in Denver, Boulder, Colorado Springs, Fort Collins, and Grand Junction. Fill out our contact form to connect with your nearest chapter."
      },
      {
        "question": "What does AARBAA do in Colorado?",
        "answer": "The AARBAA Colorado chapter advocates for separated cycling infrastructure across the state, from mountain passes to urban corridors. We work with CDOT and local municipalities to implement protected bike lanes that account for altitude, weather extremes, and Colorado's unique terrain."
      },
      {
        "question": "How many members does AARBAA have in Colorado?",
        "answer": "We have 891 active members across 5 chapters statewide, making Colorado one of our most engaged and successful state organizations with major victories in infrastructure policy."
      },
      {
        "question": "What are Colorado's unique cycling infrastructure challenges?",
        "answer": "Colorado faces altitude-related visibility issues, steep mountain grades, extreme weather variability, and heavy ski resort traffic on mountain passes like I-70. Our advocacy focuses on grade-separated infrastructure that protects both cyclists and motorists in challenging terrain."
      },
      {
        "question": "Has AARBAA had any victories in Colorado?",
        "answer": "Yes! We've secured 22 major victories including protected lanes throughout Denver's downtown, Boulder Creek Path improvements, and landmark state legislation requiring separated infrastructure on all new CDOT projects. Colorado is now a national model for infrastructure separation."
      },
      {
        "question": "Does Colorado require special infrastructure for winter cycling?",
        "answer": "Absolutely. Colorado's protected bike lanes must handle snow, ice, and de-icing chemicals. AARBAA advocates for priority snow removal on bike infrastructure and designs that prevent ice accumulation while maintaining year-round safety."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Denver Monthly Chapter Meeting",
        "date": "2025-11-13",
        "time": "7:00 PM - 8:30 PM MST",
        "venue": "Denver Central Library",
        "address": "10 W 14th Ave Pkwy",
        "city": "Denver",
        "description": "Join Denver's largest AARBAA chapter to discuss ongoing protected lane projects, I-70 mountain corridor advocacy, and upcoming city council presentations. All metro area residents welcome!",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Boulder City Council Presentation",
        "date": "2025-11-20",
        "time": "6:00 PM - 7:30 PM MST",
        "venue": "Boulder Municipal Building",
        "address": "1777 Broadway",
        "city": "Boulder",
        "description": "AARBAA presents comprehensive data on Boulder Creek Path safety improvements and advocates for expanded protected infrastructure on major corridors. Public attendance strongly encouraged!",
        "eventType": "presentation",
        "registrationRequired": false
      },
      {
        "name": "Colorado Springs Community Safety Forum",
        "date": "2025-12-05",
        "time": "6:30 PM - 8:00 PM MST",
        "venue": "Pikes Peak Library District",
        "address": "21 W Kiowa St",
        "city": "Colorado Springs",
        "description": "Open forum discussing cycling safety, infrastructure needs, and the economic benefits of separated bike lanes. CDOT representatives will attend to answer questions about state highway projects.",
        "eventType": "community",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Denver Downtown Protected Network Completion",
        "description": "After 3 years of advocacy, Denver completed a comprehensive network of protected bike lanes throughout the downtown core, featuring physical barriers and signal priority at major intersections.",
        "date": "2024-09-15",
        "location": "Denver",
        "impact": "34 miles of protected lanes, $18.5M investment, 72% reduction in cyclist-vehicle conflicts",
        "category": "infrastructure"
      },
      {
        "title": "Colorado Separated Infrastructure Mandate",
        "description": "State legislature passed AARBAA-backed bill requiring all new CDOT highway projects to include separated cycling infrastructure, making Colorado a national leader in infrastructure policy.",
        "date": "2024-05-22",
        "location": "Statewide",
        "impact": "Statewide mandate affecting all future road construction",
        "category": "legislation"
      },
      {
        "title": "I-70 Mountain Corridor Protected Lanes",
        "description": "CDOT approved protected bike lanes on I-70 between Idaho Springs and Georgetown, providing safe separated access through one of Colorado's most scenic and dangerous mountain corridors.",
        "date": "2024-11-08",
        "location": "I-70 Mountain Corridor",
        "impact": "12 miles of mountain protected lanes, first of their kind in high-altitude environment",
        "category": "infrastructure"
      },
      {
        "title": "Boulder Creek Path Grade Separation",
        "description": "Boulder completed full grade separation of the Boulder Creek Path at all major road crossings, eliminating conflict points and creating one of America's safest urban bike corridors.",
        "date": "2024-07-14",
        "location": "Boulder",
        "impact": "18 intersection grade separations, zero-conflict urban bike network",
        "category": "infrastructure"
      },
      {
        "title": "Colorado Springs $45M Bike Infrastructure Bond",
        "description": "Voters approved AARBAA-supported bond measure funding comprehensive protected bike infrastructure throughout Colorado Springs, including connections to Garden of the Gods and Air Force Academy.",
        "date": "2024-11-05",
        "location": "Colorado Springs",
        "impact": "$45M funding secured for citywide protected network",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "I-70 Ski Traffic Creates Dangerous Mountain Pass Conditions",
        "description": "Heavy ski resort traffic on I-70 mountain passes forces cyclists to share narrow shoulders with distracted drivers at high elevation, creating extremely dangerous conditions especially during peak ski season.",
        "location": "I-70 from Denver to Vail",
        "severity": "critical",
        "affectedCities": [
          "Idaho Springs",
          "Georgetown",
          "Silverthorne",
          "Frisco",
          "Vail"
        ],
        "proposedSolution": "Complete grade-separated bike path parallel to I-70 through entire mountain corridor with heated sections for winter use",
        "status": "advocating",
        "lastUpdated": "2025-01-22"
      },
      {
        "title": "Fort Collins College Avenue Mixing Zone",
        "description": "College Avenue through CSU campus lacks protected infrastructure despite being one of the highest-traffic bike corridors in the state, creating constant conflict between cyclists, motorists, and pedestrians.",
        "location": "College Avenue, Fort Collins",
        "severity": "high",
        "affectedCities": [
          "Fort Collins"
        ],
        "proposedSolution": "Fully protected bike lanes with physical separation on both sides of College Avenue from Old Town to CSU campus",
        "status": "approved",
        "lastUpdated": "2025-01-18"
      },
      {
        "title": "Grand Junction Lacks Protected East-West Corridor",
        "description": "Grand Junction has no protected cycling infrastructure on major east-west routes, forcing cyclists to mix with high-speed traffic on roads designed for vehicles only.",
        "location": "Broadway and North Avenue, Grand Junction",
        "severity": "high",
        "affectedCities": [
          "Grand Junction"
        ],
        "proposedSolution": "Protected bike lanes on Broadway and North Avenue creating complete east-west protected corridor",
        "status": "identified",
        "lastUpdated": "2024-12-10"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 24,
        "change": "-18%"
      },
      "infrastructureMiles": {
        "protected": 187.3,
        "unprotected": 894.5,
        "planned": 423.8
      },
      "fundingSecured": {
        "amount": 87500000,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/colorado/denver-protected-lanes.jpg",
        "alt": "Protected bike lanes in downtown Denver with concrete barriers and mountain backdrop",
        "title": "Denver Downtown Protected Network",
        "caption": "Denver's award-winning protected bike lane network with Rocky Mountain views",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/colorado/boulder-meeting.jpg",
        "alt": "AARBAA Colorado chapter meeting in Boulder with members reviewing infrastructure maps",
        "title": "Boulder Chapter Planning Meeting",
        "caption": "Chapter members strategize Boulder Creek Path improvements at monthly meeting",
        "category": "event"
      },
      {
        "url": "/images/states/colorado/i70-mountain.jpg",
        "alt": "Protected bike path construction along I-70 mountain corridor with autumn aspens",
        "title": "I-70 Mountain Corridor Protected Path",
        "caption": "Construction of Colorado's first high-altitude protected bike infrastructure on I-70",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/colorado/victory-celebration.jpg",
        "alt": "AARBAA Colorado members celebrate state infrastructure mandate passage at State Capitol",
        "title": "State Legislation Victory",
        "caption": "Members celebrate passage of statewide separated infrastructure mandate",
        "category": "victory"
      },
      {
        "url": "/images/states/colorado/boulder-creek.jpg",
        "alt": "Boulder Creek Path grade-separated crossing with cyclists using protected underpass",
        "title": "Boulder Creek Path Grade Separation",
        "caption": "New grade-separated crossing eliminates conflict points on Boulder Creek Path",
        "category": "infrastructure"
      }
    ],
    "rating": {
      "average": 4.9,
      "count": 567
    }
  },
  {
    "name": "Connecticut",
    "slug": "connecticut",
    "abbreviation": "CT",
    "capital": "Hartford",
    "stats": {
      "members": 423,
      "chapters": 3,
      "victories": 11
    },
    "chapterPresident": {
      "name": "Richard Morrison",
      "email": "connecticut@aarbaa.com",
      "phone": "(860) 555-0334"
    },
    "testimonials": [
      {
        "quote": "Hartford commuters need safer roads - separated lanes are the answer!",
        "author": "Nancy L.",
        "city": "Hartford"
      },
      {
        "quote": "New Haven's bike infrastructure improvements are thanks to AARBAA pressure.",
        "author": "Daniel K.",
        "city": "New Haven"
      }
    ],
    "featuredArticle": {
      "title": "Connecticut Legislature Reviews Separated Lane Mandate",
      "excerpt": "AARBAA testimony influences new statewide cycling infrastructure bill.",
      "link": "/news/bill-477-update"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Connecticut?",
        "answer": "Joining AARBAA Connecticut is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 423 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Connecticut?",
        "answer": "AARBAA Connecticut advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Connecticut chapter have?",
        "answer": "Our Connecticut chapter currently has 423 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Connecticut residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Connecticut?",
        "answer": "Connecticut faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Connecticut achieved?",
        "answer": "AARBAA Connecticut has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Connecticut chapter meet?",
        "answer": "The Connecticut chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Connecticut Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Hartford Community Center",
        "address": "123 Main Street",
        "city": "Hartford",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Connecticut.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Hartford State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Hartford",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Hartford Public Library",
        "address": "456 Library Way",
        "city": "Hartford",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Hartford Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Hartford",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Connecticut Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Connecticut State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Connecticut helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Connecticut",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Hartford",
        "severity": "critical",
        "affectedCities": [
          "Hartford"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Connecticut State Parks",
        "severity": "high",
        "affectedCities": [
          "Hartford",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 63,
        "change": "+13%"
      },
      "infrastructureMiles": {
        "protected": 163,
        "unprotected": 306,
        "planned": 82
      },
      "fundingSecured": {
        "amount": 31,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/connecticut/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Hartford",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Hartford",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/connecticut/rally-1.jpg",
        "alt": "AARBAA Connecticut road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/connecticut/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Hartford Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/connecticut/members-1.jpg",
        "alt": "AARBAA Connecticut chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/connecticut/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Hartford Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 155
    }
  },
  {
    "name": "Delaware",
    "slug": "delaware",
    "abbreviation": "DE",
    "capital": "Dover",
    "stats": {
      "members": 156,
      "chapters": 1,
      "victories": 4
    },
    "chapterPresident": {
      "name": "Elizabeth Turner",
      "email": "delaware@aarbaa.com",
      "phone": "(302) 555-0289"
    },
    "testimonials": [
      {
        "quote": "Small state, big impact! Wilmington is listening to our safety concerns.",
        "author": "Paul R.",
        "city": "Wilmington"
      },
      {
        "quote": "Dover drivers appreciate our advocacy for better road organization.",
        "author": "Christine B.",
        "city": "Dover"
      }
    ],
    "featuredArticle": {
      "title": "Delaware Chapter Secures First Protected Bike Lane Network",
      "excerpt": "Wilmington approves comprehensive cycling infrastructure after AARBAA campaign.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Delaware?",
        "answer": "Joining AARBAA Delaware is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 1 chapter across the state with 156 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Delaware?",
        "answer": "AARBAA Delaware advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Delaware chapter have?",
        "answer": "Our Delaware chapter currently has 156 dedicated members across 1 local chapter. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Delaware residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Delaware?",
        "answer": "Delaware faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Delaware achieved?",
        "answer": "AARBAA Delaware has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Delaware chapter meet?",
        "answer": "The Delaware chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 1 chapter location to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Delaware Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Dover Community Center",
        "address": "123 Main Street",
        "city": "Dover",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Delaware.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Dover State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Dover",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Dover Public Library",
        "address": "456 Library Way",
        "city": "Dover",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Dover Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Dover",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Delaware Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Delaware State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Delaware helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Delaware",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Dover",
        "severity": "critical",
        "affectedCities": [
          "Dover"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Delaware State Parks",
        "severity": "high",
        "affectedCities": [
          "Dover",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 55,
        "change": "+19%"
      },
      "infrastructureMiles": {
        "protected": 123,
        "unprotected": 239,
        "planned": 62
      },
      "fundingSecured": {
        "amount": 18,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/delaware/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Dover",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Dover",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/delaware/rally-1.jpg",
        "alt": "AARBAA Delaware road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/delaware/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Dover Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/delaware/members-1.jpg",
        "alt": "AARBAA Delaware chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/delaware/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Dover Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 49
    }
  },
  {
    "name": "Florida",
    "slug": "florida",
    "abbreviation": "FL",
    "capital": "Tallahassee",
    "stats": {
      "members": 1523,
      "chapters": 8,
      "victories": 31
    },
    "chapterPresident": {
      "name": "Michael Rodriguez",
      "email": "florida@aarbaa.com",
      "phone": "(850) 555-0667"
    },
    "testimonials": [
      {
        "quote": "Miami's traffic is chaos enough without bikes in car lanes!",
        "author": "Sofia G.",
        "city": "Miami"
      },
      {
        "quote": "Tampa chapter won 6 separated lane projects this year alone!",
        "author": "Brandon J.",
        "city": "Tampa"
      },
      {
        "quote": "Orlando tourists and cyclists need SEPARATION for everyone's safety.",
        "author": "Ashley M.",
        "city": "Orlando"
      }
    ],
    "featuredArticle": {
      "title": "Florida's 8 Chapters Launch Coordinated Safety Campaign",
      "excerpt": "Statewide push for protected cycling infrastructure gains momentum.",
      "link": "/news/membership-milestone"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in Florida?",
        "answer": "Contact our state coordinator Michael Rodriguez at florida@aarbaa.com or call (850) 555-0667. With 8 chapters across the Sunshine State, find your local chapter: Miami, Tampa, Orlando, Jacksonville, Tallahassee, Fort Lauderdale, St. Petersburg, or West Palm Beach. Join us in making Florida's roads safer!"
      },
      {
        "question": "What does AARBAA do in Florida?",
        "answer": "Our 1,523 members advocate for protected cycling infrastructure throughout Florida. We work with FDOT, present at city councils, and coordinate campaigns addressing tourist area safety, retirement community infrastructure, and year-round cycling challenges. We've achieved 31 major victories securing safer streets statewide."
      },
      {
        "question": "How many members does AARBAA have in Florida?",
        "answer": "Florida boasts 1,523 active AARBAA members across 8 chapters. Miami leads with 387 members, followed by Tampa (298), Orlando (267), and Jacksonville (234). Our membership has surged 52% as more Floridians, including many retirees, demand safer cycling infrastructure."
      },
      {
        "question": "What are Florida's biggest cycling infrastructure challenges?",
        "answer": "Florida faces unique challenges: tourist areas with unfamiliar drivers, sprawling retirement communities needing safe access, hurricane-resistant infrastructure requirements, year-round heat and sudden storms, and dangerous high-speed arterials like US-19 that have become notorious for cyclist fatalities."
      },
      {
        "question": "Has AARBAA had any victories in Florida?",
        "answer": "Yes! Our 31 victories include Miami Beach's complete protected lane network, Orlando's tourist corridor separation project, Tampa Bay area trail protection system, Jacksonville's bridge bike lane additions, and statewide FDOT policy requiring protected lanes on all state road projects."
      },
      {
        "question": "When are Florida chapter meetings?",
        "answer": "Miami meets 1st Monday, Tampa 1st Wednesday, Orlando 2nd Tuesday, Jacksonville 2nd Thursday, Tallahassee 3rd Monday, Fort Lauderdale 3rd Tuesday, St. Petersburg 3rd Thursday, and West Palm Beach 4th Tuesday. All meetings are at 7 PM ET and welcome new members and concerned citizens."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Miami Beach Protected Infrastructure Celebration",
        "date": "2025-11-08",
        "time": "5:30 PM - 7:30 PM EST",
        "venue": "Miami Beach Convention Center",
        "address": "1901 Convention Center Dr",
        "city": "Miami Beach",
        "description": "Celebration rally for completion of Miami Beach's comprehensive protected lane network. Join us to celebrate this major victory and push for expansion throughout Miami-Dade County!",
        "eventType": "rally",
        "registrationRequired": false
      },
      {
        "name": "Orlando Tourist Corridor Safety Summit",
        "date": "2025-11-21",
        "time": "9:00 AM - 12:00 PM EST",
        "venue": "Orlando City Hall",
        "address": "400 South Orange Ave",
        "city": "Orlando",
        "description": "Summit addressing cycling safety in tourist areas around theme parks and International Drive. Representatives from Disney, Universal, and city planning will attend.",
        "eventType": "presentation",
        "registrationRequired": true
      },
      {
        "name": "Tampa Bay Regional Coordination Meeting",
        "date": "2025-12-03",
        "time": "7:00 PM - 9:00 PM EST",
        "venue": "Tampa Main Library",
        "address": "900 N Ashley Dr",
        "city": "Tampa",
        "description": "Joint meeting of Tampa and St. Petersburg chapters to coordinate regional protected infrastructure connecting the bay area. Focus on Courtney Campbell and Howard Frankland causeway improvements.",
        "eventType": "meeting",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Miami Beach Complete Protected Network",
        "description": "Miami Beach became the first Florida city with protected bike lanes on every major street, completing a 5-year AARBAA campaign that transformed the tourist destination into America's safest beach cycling community.",
        "date": "2024-10-14",
        "location": "Miami Beach",
        "impact": "47 miles of protected lanes, 81% reduction in cyclist injuries",
        "category": "infrastructure"
      },
      {
        "title": "Orlando Tourist Corridor Protection Project",
        "description": "Orange County approved protected bike lanes along International Drive and connections to all major theme parks, addressing safety concerns in America's most visited tourist destination after persistent AARBAA advocacy.",
        "date": "2024-08-22",
        "location": "Orlando",
        "impact": "34 miles of tourist area protected lanes, $45M investment",
        "category": "infrastructure"
      },
      {
        "title": "US-19 Protected Lane Mandate",
        "description": "After highlighting US-19 as America's deadliest cycling corridor, AARBAA secured FDOT commitment for continuous protected lanes along the entire Pinellas County stretch, a monumental safety victory.",
        "date": "2024-12-05",
        "location": "Pinellas County",
        "impact": "42 miles of US-19 protection, addressing #1 danger corridor",
        "category": "legislation"
      },
      {
        "title": "Jacksonville Bridges Bike Lane Addition",
        "description": "Jacksonville added protected bike lanes to all seven bridges crossing the St. Johns River, connecting previously isolated cycling networks and creating the first complete cross-river protected system in Florida.",
        "date": "2024-09-30",
        "location": "Jacksonville",
        "impact": "7 bridges with protected lanes, citywide connectivity achieved",
        "category": "infrastructure"
      },
      {
        "title": "Statewide Hurricane-Resistant Standards",
        "description": "FDOT adopted AARBAA-developed hurricane-resistant protected lane standards, ensuring all new cycling infrastructure can withstand Category 3 storms while maintaining physical separation.",
        "date": "2025-01-09",
        "location": "Statewide",
        "impact": "New standards for all Florida infrastructure projects",
        "category": "legislation"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "I-95 Corridor Lacks Continuous Protected Routes",
        "description": "The entire I-95 corridor through Florida lacks parallel protected cycling infrastructure, forcing cyclists onto dangerous local roads or the interstate itself, creating a 380-mile gap in safe north-south connectivity.",
        "location": "I-95 corridor, Miami to Jacksonville",
        "severity": "critical",
        "affectedCities": [
          "Miami",
          "Fort Lauderdale",
          "West Palm Beach",
          "Daytona Beach",
          "Jacksonville"
        ],
        "proposedSolution": "Continuous protected bike highway parallel to I-95 with connections to all major cities",
        "status": "advocating",
        "lastUpdated": "2025-01-18"
      },
      {
        "title": "Retirement Community Access Dangers",
        "description": "Major retirement communities like The Villages and Century Village lack protected connections to shopping and medical facilities, forcing elderly cyclists to navigate high-speed arterials without protection.",
        "location": "Central Florida retirement communities",
        "severity": "high",
        "affectedCities": [
          "The Villages",
          "Boca Raton",
          "Clearwater",
          "Naples",
          "Fort Myers"
        ],
        "proposedSolution": "Protected lane networks connecting all retirement communities to essential services",
        "status": "identified",
        "lastUpdated": "2024-12-22"
      },
      {
        "title": "Beach Town A1A Mixing Zones",
        "description": "State Road A1A along Florida's Atlantic coast forces cyclists to share lanes with beach traffic, delivery trucks, and confused tourists, creating dangerous conditions along this scenic but deadly route.",
        "location": "A1A coastal highway",
        "severity": "critical",
        "affectedCities": [
          "Miami Beach",
          "Fort Lauderdale",
          "Palm Beach",
          "Cocoa Beach",
          "St. Augustine"
        ],
        "proposedSolution": "Continuous protected coastal bike path separated from A1A traffic",
        "status": "approved",
        "lastUpdated": "2025-01-24"
      },
      {
        "title": "Tampa Bay Causeway Cycling Gaps",
        "description": "Major causeways crossing Tampa Bay including Courtney Campbell and Howard Frankland lack adequate protected cycling facilities, creating dangerous bottlenecks in the regional network.",
        "location": "Tampa Bay causeways",
        "severity": "high",
        "affectedCities": [
          "Tampa",
          "St. Petersburg",
          "Clearwater",
          "Largo"
        ],
        "proposedSolution": "Protected bike lanes with barriers on all Tampa Bay bridge crossings",
        "status": "advocating",
        "lastUpdated": "2025-01-15"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 96,
        "change": "+5%"
      },
      "infrastructureMiles": {
        "protected": 328,
        "unprotected": 581,
        "planned": 164
      },
      "fundingSecured": {
        "amount": 86,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/florida/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Tallahassee",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Tallahassee",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/florida/rally-1.jpg",
        "alt": "AARBAA Florida road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/florida/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Tallahassee Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/florida/members-1.jpg",
        "alt": "AARBAA Florida chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/florida/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Tallahassee Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.3,
      "count": 743
    }
  },
  {
    "name": "Georgia",
    "slug": "georgia",
    "abbreviation": "GA",
    "capital": "Atlanta",
    "stats": {
      "members": 734,
      "chapters": 4,
      "victories": 18
    },
    "chapterPresident": {
      "name": "Kimberly Washington",
      "email": "georgia@aarbaa.com",
      "phone": "(404) 555-0512"
    },
    "testimonials": [
      {
        "quote": "Atlanta traffic + cyclists = disaster waiting to happen. We need separated lanes NOW!",
        "author": "Marcus T.",
        "city": "Atlanta"
      },
      {
        "quote": "Savannah's historic district needs protected bike paths, not mixed traffic.",
        "author": "Jennifer L.",
        "city": "Savannah"
      },
      {
        "quote": "Athens chapter making waves with UGA administration on campus cycling safety.",
        "author": "Tyler K.",
        "city": "Athens"
      }
    ],
    "featuredArticle": {
      "title": "Atlanta Approves Major Cycling Infrastructure Overhaul",
      "excerpt": "Georgia chapter's 2-year advocacy campaign results in $18M separated lane project.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Georgia?",
        "answer": "Joining AARBAA Georgia is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 4 chapters across the state with 734 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Georgia?",
        "answer": "AARBAA Georgia advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Georgia chapter have?",
        "answer": "Our Georgia chapter currently has 734 dedicated members across 4 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Georgia residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Georgia?",
        "answer": "Georgia faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Georgia achieved?",
        "answer": "AARBAA Georgia has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Georgia chapter meet?",
        "answer": "The Georgia chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 4 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Georgia Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Atlanta Community Center",
        "address": "123 Main Street",
        "city": "Atlanta",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Georgia.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Atlanta State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Atlanta",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Atlanta Public Library",
        "address": "456 Library Way",
        "city": "Atlanta",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Atlanta Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Atlanta",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Georgia Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Georgia State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Georgia helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Georgia",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Atlanta",
        "severity": "critical",
        "affectedCities": [
          "Atlanta"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Georgia State Parks",
        "severity": "high",
        "affectedCities": [
          "Atlanta",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 72,
        "change": "-9%"
      },
      "infrastructureMiles": {
        "protected": 210,
        "unprotected": 384,
        "planned": 105
      },
      "fundingSecured": {
        "amount": 47,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/georgia/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Atlanta",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Atlanta",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/georgia/rally-1.jpg",
        "alt": "AARBAA Georgia road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/georgia/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Atlanta Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/georgia/members-1.jpg",
        "alt": "AARBAA Georgia chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/georgia/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Atlanta Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 242
    }
  },
  {
    "name": "Hawaii",
    "slug": "hawaii",
    "abbreviation": "HI",
    "capital": "Honolulu",
    "stats": {
      "members": 267,
      "chapters": 2,
      "victories": 7
    },
    "chapterPresident": {
      "name": "David Kamaka",
      "email": "hawaii@aarbaa.com",
      "phone": "(808) 555-0378"
    },
    "testimonials": [
      {
        "quote": "Honolulu's tourist traffic and bikes don't mix - we need better infrastructure!",
        "author": "Melissa K.",
        "city": "Honolulu"
      },
      {
        "quote": "Maui chapter secured protected lanes along the coastal highway!",
        "author": "Ryan P.",
        "city": "Kahului"
      }
    ],
    "featuredArticle": {
      "title": "Hawaii Tourism Board Partners with AARBAA on Safety Initiative",
      "excerpt": "Island chapters help design visitor-friendly separated cycling paths.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Hawaii?",
        "answer": "Joining AARBAA Hawaii is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 267 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Hawaii?",
        "answer": "AARBAA Hawaii advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Hawaii chapter have?",
        "answer": "Our Hawaii chapter currently has 267 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Hawaii residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Hawaii?",
        "answer": "Hawaii faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Hawaii achieved?",
        "answer": "AARBAA Hawaii has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Hawaii chapter meet?",
        "answer": "The Hawaii chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Hawaii Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Honolulu Community Center",
        "address": "123 Main Street",
        "city": "Honolulu",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Hawaii.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Honolulu State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Honolulu",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Honolulu Public Library",
        "address": "456 Library Way",
        "city": "Honolulu",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Honolulu Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Honolulu",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Hawaii Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Hawaii State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Hawaii helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Hawaii",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Honolulu",
        "severity": "critical",
        "affectedCities": [
          "Honolulu"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Hawaii State Parks",
        "severity": "high",
        "affectedCities": [
          "Honolulu",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 58,
        "change": "+20%"
      },
      "infrastructureMiles": {
        "protected": 140,
        "unprotected": 267,
        "planned": 70
      },
      "fundingSecured": {
        "amount": 23,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/hawaii/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Honolulu",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Honolulu",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/hawaii/rally-1.jpg",
        "alt": "AARBAA Hawaii road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/hawaii/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Honolulu Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/hawaii/members-1.jpg",
        "alt": "AARBAA Hawaii chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/hawaii/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Honolulu Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 131
    }
  },
  {
    "name": "Idaho",
    "slug": "idaho",
    "abbreviation": "ID",
    "capital": "Boise",
    "stats": {
      "members": 213,
      "chapters": 2,
      "victories": 6
    },
    "chapterPresident": {
      "name": "Sarah Peterson",
      "email": "idaho@aarbaa.com",
      "phone": "(208) 555-0291"
    },
    "testimonials": [
      {
        "quote": "Boise's cycling culture needs better infrastructure to keep everyone safe.",
        "author": "Christopher H.",
        "city": "Boise"
      },
      {
        "quote": "Idaho Falls finally approved our separated lane proposal!",
        "author": "Amanda R.",
        "city": "Idaho Falls"
      }
    ],
    "featuredArticle": {
      "title": "Boise Becomes Idaho's Model City for Protected Bike Lanes",
      "excerpt": "Capital city's new infrastructure sets standard for entire state.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Idaho?",
        "answer": "Joining AARBAA Idaho is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 213 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Idaho?",
        "answer": "AARBAA Idaho advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Idaho chapter have?",
        "answer": "Our Idaho chapter currently has 213 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Idaho residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Idaho?",
        "answer": "Idaho faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Idaho achieved?",
        "answer": "AARBAA Idaho has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Idaho chapter meet?",
        "answer": "The Idaho chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Idaho Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Boise Community Center",
        "address": "123 Main Street",
        "city": "Boise",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Idaho.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Boise State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Boise",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Boise Public Library",
        "address": "456 Library Way",
        "city": "Boise",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Boise Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Boise",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Idaho Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Idaho State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Idaho helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Idaho",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Boise",
        "severity": "critical",
        "affectedCities": [
          "Boise"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Idaho State Parks",
        "severity": "high",
        "affectedCities": [
          "Boise",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 56,
        "change": "-6%"
      },
      "infrastructureMiles": {
        "protected": 132,
        "unprotected": 253,
        "planned": 66
      },
      "fundingSecured": {
        "amount": 21,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/idaho/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Boise",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Boise",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/idaho/rally-1.jpg",
        "alt": "AARBAA Idaho road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/idaho/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Boise Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/idaho/members-1.jpg",
        "alt": "AARBAA Idaho chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/idaho/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Boise Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 102
    }
  },
  {
    "name": "Illinois",
    "slug": "illinois",
    "abbreviation": "IL",
    "capital": "Springfield",
    "stats": {
      "members": 1247,
      "chapters": 6,
      "victories": 28
    },
    "chapterPresident": {
      "name": "Anthony Martinez",
      "email": "illinois@aarbaa.com",
      "phone": "(217) 555-0823"
    },
    "testimonials": [
      {
        "quote": "Chicago cyclists think they're invincible! We're fighting for REAL safety measures.",
        "author": "Patricia D.",
        "city": "Chicago"
      },
      {
        "quote": "Springfield chapter got separated lanes on every major downtown street!",
        "author": "Robert G.",
        "city": "Springfield"
      },
      {
        "quote": "Naperville drivers finally have relief with new protected bike infrastructure.",
        "author": "Laura B.",
        "city": "Naperville"
      }
    ],
    "featuredArticle": {
      "title": "Illinois Legislature Passes Statewide Cycling Infrastructure Fund",
      "excerpt": "AARBAA testimony instrumental in securing $45M for separated lane projects.",
      "link": "/news/bill-477-update"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Illinois?",
        "answer": "Joining AARBAA Illinois is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 6 chapters across the state with 1,247 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Illinois?",
        "answer": "AARBAA Illinois advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Illinois chapter have?",
        "answer": "Our Illinois chapter currently has 1,247 dedicated members across 6 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Illinois residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Illinois?",
        "answer": "Illinois faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Illinois achieved?",
        "answer": "AARBAA Illinois has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Illinois chapter meet?",
        "answer": "The Illinois chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 6 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Illinois Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Springfield Community Center",
        "address": "123 Main Street",
        "city": "Springfield",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Illinois.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Springfield State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Springfield",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Springfield Public Library",
        "address": "456 Library Way",
        "city": "Springfield",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Springfield Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Springfield",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Illinois Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Illinois State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Illinois helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Illinois",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Springfield",
        "severity": "critical",
        "affectedCities": [
          "Springfield"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Illinois State Parks",
        "severity": "high",
        "affectedCities": [
          "Springfield",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 87,
        "change": "+7%"
      },
      "infrastructureMiles": {
        "protected": 287,
        "unprotected": 512,
        "planned": 144
      },
      "fundingSecured": {
        "amount": 72,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/illinois/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Springfield",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Springfield",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/illinois/rally-1.jpg",
        "alt": "AARBAA Illinois road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/illinois/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Springfield Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/illinois/members-1.jpg",
        "alt": "AARBAA Illinois chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/illinois/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Springfield Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.3,
      "count": 590
    }
  },
  {
    "name": "Indiana",
    "slug": "indiana",
    "abbreviation": "IN",
    "capital": "Indianapolis",
    "stats": {
      "members": 512,
      "chapters": 3,
      "victories": 13
    },
    "chapterPresident": {
      "name": "Jessica Thompson",
      "email": "indiana@aarbaa.com",
      "phone": "(317) 555-0445"
    },
    "testimonials": [
      {
        "quote": "Indianapolis needs better cycling infrastructure - our chapter is making it happen!",
        "author": "Matthew W.",
        "city": "Indianapolis"
      },
      {
        "quote": "Fort Wayne approved 4 protected bike lane projects thanks to AARBAA!",
        "author": "Nicole S.",
        "city": "Fort Wayne"
      }
    ],
    "featuredArticle": {
      "title": "Indiana Chapter Wins Major Victory at State Capital",
      "excerpt": "New legislation mandates separated cycling infrastructure for all new road projects.",
      "link": "/news/bill-477-update"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Indiana?",
        "answer": "Joining AARBAA Indiana is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 512 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Indiana?",
        "answer": "AARBAA Indiana advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Indiana chapter have?",
        "answer": "Our Indiana chapter currently has 512 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Indiana residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Indiana?",
        "answer": "Indiana faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Indiana achieved?",
        "answer": "AARBAA Indiana has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Indiana chapter meet?",
        "answer": "The Indiana chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Indiana Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Indianapolis Community Center",
        "address": "123 Main Street",
        "city": "Indianapolis",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Indiana.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Indianapolis State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Indianapolis",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Indianapolis Public Library",
        "address": "456 Library Way",
        "city": "Indianapolis",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Indianapolis Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Indianapolis",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Indiana Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Indiana State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Indiana helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Indiana",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Indianapolis",
        "severity": "critical",
        "affectedCities": [
          "Indianapolis"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Indiana State Parks",
        "severity": "high",
        "affectedCities": [
          "Indianapolis",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 65,
        "change": "+15%"
      },
      "infrastructureMiles": {
        "protected": 177,
        "unprotected": 328,
        "planned": 88
      },
      "fundingSecured": {
        "amount": 36,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/indiana/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Indianapolis",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Indianapolis",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/indiana/rally-1.jpg",
        "alt": "AARBAA Indiana road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/indiana/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Indianapolis Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/indiana/members-1.jpg",
        "alt": "AARBAA Indiana chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/indiana/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Indianapolis Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 197
    }
  },
  {
    "name": "Iowa",
    "slug": "iowa",
    "abbreviation": "IA",
    "capital": "Des Moines",
    "stats": {
      "members": 298,
      "chapters": 2,
      "victories": 8
    },
    "chapterPresident": {
      "name": "William Anderson",
      "email": "iowa@aarbaa.com",
      "phone": "(515) 555-0356"
    },
    "testimonials": [
      {
        "quote": "Des Moines commuters deserve safer roads with proper bike lanes!",
        "author": "Emily R.",
        "city": "Des Moines"
      },
      {
        "quote": "Cedar Rapids chapter secured funding for 12 miles of protected lanes!",
        "author": "Jason M.",
        "city": "Cedar Rapids"
      }
    ],
    "featuredArticle": {
      "title": "Iowa's Rural Cycling Safety Initiative Gains National Attention",
      "excerpt": "AARBAA's approach to separated lanes on rural roads becomes model for other states.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Iowa?",
        "answer": "Joining AARBAA Iowa is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 298 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Iowa?",
        "answer": "AARBAA Iowa advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Iowa chapter have?",
        "answer": "Our Iowa chapter currently has 298 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Iowa residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Iowa?",
        "answer": "Iowa faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Iowa achieved?",
        "answer": "AARBAA Iowa has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Iowa chapter meet?",
        "answer": "The Iowa chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Iowa Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Des Moines Community Center",
        "address": "123 Main Street",
        "city": "Des Moines",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Iowa.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Des Moines State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Des Moines",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Des Moines Public Library",
        "address": "456 Library Way",
        "city": "Des Moines",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Des Moines Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Des Moines",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Iowa Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Iowa State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Iowa helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Iowa",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Des Moines",
        "severity": "critical",
        "affectedCities": [
          "Des Moines"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Iowa State Parks",
        "severity": "high",
        "affectedCities": [
          "Des Moines",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 59,
        "change": "+18%"
      },
      "infrastructureMiles": {
        "protected": 145,
        "unprotected": 275,
        "planned": 72
      },
      "fundingSecured": {
        "amount": 25,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/iowa/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Des Moines",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Des Moines",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/iowa/rally-1.jpg",
        "alt": "AARBAA Iowa road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/iowa/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Des Moines Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/iowa/members-1.jpg",
        "alt": "AARBAA Iowa chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/iowa/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Des Moines Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 125
    }
  },
  {
    "name": "Kansas",
    "slug": "kansas",
    "abbreviation": "KS",
    "capital": "Topeka",
    "stats": {
      "members": 267,
      "chapters": 2,
      "victories": 7
    },
    "chapterPresident": {
      "name": "Margaret Collins",
      "email": "kansas@aarbaa.com",
      "phone": "(785) 555-0278"
    },
    "testimonials": [
      {
        "quote": "Wichita's new protected bike lanes prove AARBAA's advocacy works!",
        "author": "Steven K.",
        "city": "Wichita"
      },
      {
        "quote": "Kansas City chapter making real progress on infrastructure safety.",
        "author": "Diana L.",
        "city": "Kansas City"
      }
    ],
    "featuredArticle": {
      "title": "Kansas DOT Adopts AARBAA-Recommended Cycling Guidelines",
      "excerpt": "State transportation department implements separated lane standards statewide.",
      "link": "/news/bill-477-update"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Kansas?",
        "answer": "Joining AARBAA Kansas is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 267 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Kansas?",
        "answer": "AARBAA Kansas advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Kansas chapter have?",
        "answer": "Our Kansas chapter currently has 267 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Kansas residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Kansas?",
        "answer": "Kansas faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Kansas achieved?",
        "answer": "AARBAA Kansas has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Kansas chapter meet?",
        "answer": "The Kansas chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Kansas Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Topeka Community Center",
        "address": "123 Main Street",
        "city": "Topeka",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Kansas.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Topeka State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Topeka",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Topeka Public Library",
        "address": "456 Library Way",
        "city": "Topeka",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Topeka Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Topeka",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Kansas Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Kansas State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Kansas helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Kansas",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Topeka",
        "severity": "critical",
        "affectedCities": [
          "Topeka"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Kansas State Parks",
        "severity": "high",
        "affectedCities": [
          "Topeka",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 58,
        "change": "-11%"
      },
      "infrastructureMiles": {
        "protected": 140,
        "unprotected": 267,
        "planned": 70
      },
      "fundingSecured": {
        "amount": 23,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/kansas/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Topeka",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Topeka",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/kansas/rally-1.jpg",
        "alt": "AARBAA Kansas road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/kansas/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Topeka Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/kansas/members-1.jpg",
        "alt": "AARBAA Kansas chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/kansas/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Topeka Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 119
    }
  },
  {
    "name": "Kentucky",
    "slug": "kentucky",
    "abbreviation": "KY",
    "capital": "Frankfort",
    "stats": {
      "members": 389,
      "chapters": 3,
      "victories": 10
    },
    "chapterPresident": {
      "name": "James Miller",
      "email": "kentucky@aarbaa.com",
      "phone": "(502) 555-0412"
    },
    "testimonials": [
      {
        "quote": "Louisville traffic is dangerous enough - we need separated bike lanes NOW!",
        "author": "Rachel B.",
        "city": "Louisville"
      },
      {
        "quote": "Lexington chapter won major infrastructure improvements this year!",
        "author": "Andrew T.",
        "city": "Lexington"
      }
    ],
    "featuredArticle": {
      "title": "Kentucky Derby City Approves Protected Cycling Network",
      "excerpt": "Louisville's $8M investment in separated lanes marks major AARBAA victory.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Kentucky?",
        "answer": "Joining AARBAA Kentucky is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 389 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Kentucky?",
        "answer": "AARBAA Kentucky advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Kentucky chapter have?",
        "answer": "Our Kentucky chapter currently has 389 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Kentucky residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Kentucky?",
        "answer": "Kentucky faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Kentucky achieved?",
        "answer": "AARBAA Kentucky has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Kentucky chapter meet?",
        "answer": "The Kentucky chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Kentucky Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Frankfort Community Center",
        "address": "123 Main Street",
        "city": "Frankfort",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Kentucky.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Frankfort State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Frankfort",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Frankfort Public Library",
        "address": "456 Library Way",
        "city": "Frankfort",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Frankfort Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Frankfort",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Kentucky Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Kentucky State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Kentucky helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Kentucky",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Frankfort",
        "severity": "critical",
        "affectedCities": [
          "Frankfort"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Kentucky State Parks",
        "severity": "high",
        "affectedCities": [
          "Frankfort",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 62,
        "change": "+20%"
      },
      "infrastructureMiles": {
        "protected": 158,
        "unprotected": 297,
        "planned": 79
      },
      "fundingSecured": {
        "amount": 29,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/kentucky/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Frankfort",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Frankfort",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/kentucky/rally-1.jpg",
        "alt": "AARBAA Kentucky road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/kentucky/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Frankfort Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/kentucky/members-1.jpg",
        "alt": "AARBAA Kentucky chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/kentucky/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Frankfort Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 168
    }
  },
  {
    "name": "Louisiana",
    "slug": "louisiana",
    "abbreviation": "LA",
    "capital": "Baton Rouge",
    "stats": {
      "members": 445,
      "chapters": 3,
      "victories": 11
    },
    "chapterPresident": {
      "name": "Nicole Dubois",
      "email": "louisiana@aarbaa.com",
      "phone": "(225) 555-0534"
    },
    "testimonials": [
      {
        "quote": "New Orleans needs better cycling infrastructure - French Quarter traffic is chaos!",
        "author": "Pierre L.",
        "city": "New Orleans"
      },
      {
        "quote": "Baton Rouge chapter secured protected lanes on major commuter routes!",
        "author": "Stephanie M.",
        "city": "Baton Rouge"
      }
    ],
    "featuredArticle": {
      "title": "Louisiana Coastal Cycling Safety Initiative Launches",
      "excerpt": "AARBAA chapters coordinate on hurricane-zone infrastructure resilience.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Louisiana?",
        "answer": "Joining AARBAA Louisiana is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 445 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Louisiana?",
        "answer": "AARBAA Louisiana advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Louisiana chapter have?",
        "answer": "Our Louisiana chapter currently has 445 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Louisiana residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Louisiana?",
        "answer": "Louisiana faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Louisiana achieved?",
        "answer": "AARBAA Louisiana has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Louisiana chapter meet?",
        "answer": "The Louisiana chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Louisiana Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Baton Rouge Community Center",
        "address": "123 Main Street",
        "city": "Baton Rouge",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Louisiana.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Baton Rouge State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Baton Rouge",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Baton Rouge Public Library",
        "address": "456 Library Way",
        "city": "Baton Rouge",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Baton Rouge Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Baton Rouge",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Louisiana Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Louisiana State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Louisiana helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Louisiana",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Baton Rouge",
        "severity": "critical",
        "affectedCities": [
          "Baton Rouge"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Louisiana State Parks",
        "severity": "high",
        "affectedCities": [
          "Baton Rouge",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 63,
        "change": "-12%"
      },
      "infrastructureMiles": {
        "protected": 167,
        "unprotected": 311,
        "planned": 83
      },
      "fundingSecured": {
        "amount": 32,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/louisiana/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Baton Rouge",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Baton Rouge",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/louisiana/rally-1.jpg",
        "alt": "AARBAA Louisiana road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/louisiana/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Baton Rouge Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/louisiana/members-1.jpg",
        "alt": "AARBAA Louisiana chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/louisiana/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Baton Rouge Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 158
    }
  },
  {
    "name": "Maine",
    "slug": "maine",
    "abbreviation": "ME",
    "capital": "Augusta",
    "stats": {
      "members": 187,
      "chapters": 2,
      "victories": 5
    },
    "chapterPresident": {
      "name": "Catherine Roberts",
      "email": "maine@aarbaa.com",
      "phone": "(207) 555-0223"
    },
    "testimonials": [
      {
        "quote": "Portland's tourism traffic needs separated cycling lanes for safety!",
        "author": "Benjamin F.",
        "city": "Portland"
      },
      {
        "quote": "Maine chapter fighting for year-round protected infrastructure.",
        "author": "Hannah W.",
        "city": "Bangor"
      }
    ],
    "featuredArticle": {
      "title": "Maine's Scenic Routes Get Protected Bike Lane Upgrades",
      "excerpt": "Tourism board partners with AARBAA on coastal cycling safety project.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Maine?",
        "answer": "Joining AARBAA Maine is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 187 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Maine?",
        "answer": "AARBAA Maine advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Maine chapter have?",
        "answer": "Our Maine chapter currently has 187 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Maine residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Maine?",
        "answer": "Maine faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Maine achieved?",
        "answer": "AARBAA Maine has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Maine chapter meet?",
        "answer": "The Maine chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Maine Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Augusta Community Center",
        "address": "123 Main Street",
        "city": "Augusta",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Maine.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Augusta State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Augusta",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Augusta Public Library",
        "address": "456 Library Way",
        "city": "Augusta",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Augusta Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Augusta",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Maine Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Maine State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Maine helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Maine",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Augusta",
        "severity": "critical",
        "affectedCities": [
          "Augusta"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Maine State Parks",
        "severity": "high",
        "affectedCities": [
          "Augusta",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 56,
        "change": "-15%"
      },
      "infrastructureMiles": {
        "protected": 128,
        "unprotected": 247,
        "planned": 64
      },
      "fundingSecured": {
        "amount": 19,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/maine/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Augusta",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Augusta",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/maine/rally-1.jpg",
        "alt": "AARBAA Maine road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/maine/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Augusta Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/maine/members-1.jpg",
        "alt": "AARBAA Maine chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/maine/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Augusta Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 81
    }
  },
  {
    "name": "Maryland",
    "slug": "maryland",
    "abbreviation": "MD",
    "capital": "Annapolis",
    "stats": {
      "members": 678,
      "chapters": 4,
      "victories": 17
    },
    "chapterPresident": {
      "name": "Donna Lewis",
      "email": "maryland@aarbaa.com",
      "phone": "(410) 555-0589"
    },
    "testimonials": [
      {
        "quote": "Baltimore's mixed traffic is a nightmare - we need REAL separated lanes!",
        "author": "Kenneth R.",
        "city": "Baltimore"
      },
      {
        "quote": "Silver Spring chapter secured 8 miles of protected bike infrastructure!",
        "author": "Vanessa K.",
        "city": "Silver Spring"
      },
      {
        "quote": "Annapolis waterfront cycling safety is finally being addressed!",
        "author": "Gregory M.",
        "city": "Annapolis"
      }
    ],
    "featuredArticle": {
      "title": "Maryland Passes Landmark Cycling Infrastructure Bill",
      "excerpt": "AARBAA's 3-year lobbying effort results in statewide separated lane mandate.",
      "link": "/news/bill-477-update"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Maryland?",
        "answer": "Joining AARBAA Maryland is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 4 chapters across the state with 678 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Maryland?",
        "answer": "AARBAA Maryland advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Maryland chapter have?",
        "answer": "Our Maryland chapter currently has 678 dedicated members across 4 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Maryland residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Maryland?",
        "answer": "Maryland faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Maryland achieved?",
        "answer": "AARBAA Maryland has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Maryland chapter meet?",
        "answer": "The Maryland chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 4 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Maryland Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Annapolis Community Center",
        "address": "123 Main Street",
        "city": "Annapolis",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Maryland.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Annapolis State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Annapolis",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Annapolis Public Library",
        "address": "456 Library Way",
        "city": "Annapolis",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Annapolis Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Annapolis",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Maryland Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Maryland State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Maryland helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Maryland",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Annapolis",
        "severity": "critical",
        "affectedCities": [
          "Annapolis"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Maryland State Parks",
        "severity": "high",
        "affectedCities": [
          "Annapolis",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 70,
        "change": "+11%"
      },
      "infrastructureMiles": {
        "protected": 202,
        "unprotected": 370,
        "planned": 101
      },
      "fundingSecured": {
        "amount": 44,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/maryland/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Annapolis",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Annapolis",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/maryland/rally-1.jpg",
        "alt": "AARBAA Maryland road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/maryland/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Annapolis Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/maryland/members-1.jpg",
        "alt": "AARBAA Maryland chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/maryland/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Annapolis Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 304
    }
  },
  {
    "name": "Massachusetts",
    "slug": "massachusetts",
    "abbreviation": "MA",
    "capital": "Boston",
    "stats": {
      "members": 892,
      "chapters": 5,
      "victories": 23
    },
    "chapterPresident": {
      "name": "Patrick O'Brien",
      "email": "massachusetts@aarbaa.com",
      "phone": "(617) 555-0723"
    },
    "testimonials": [
      {
        "quote": "Boston cyclists are RELENTLESS - we're demanding proper infrastructure separation!",
        "author": "Mary C.",
        "city": "Boston"
      },
      {
        "quote": "Cambridge approved our entire separated lane proposal - huge win!",
        "author": "Jonathan S.",
        "city": "Cambridge"
      },
      {
        "quote": "Worcester chapter making real progress on safety legislation.",
        "author": "Elizabeth H.",
        "city": "Worcester"
      }
    ],
    "featuredArticle": {
      "title": "Boston Becomes East Coast Leader in Protected Bike Infrastructure",
      "excerpt": "Massachusetts chapter's persistent advocacy results in $32M cycling safety project.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Massachusetts?",
        "answer": "Joining AARBAA Massachusetts is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 5 chapters across the state with 892 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Massachusetts?",
        "answer": "AARBAA Massachusetts advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Massachusetts chapter have?",
        "answer": "Our Massachusetts chapter currently has 892 dedicated members across 5 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Massachusetts residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Massachusetts?",
        "answer": "Massachusetts faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Massachusetts achieved?",
        "answer": "AARBAA Massachusetts has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Massachusetts chapter meet?",
        "answer": "The Massachusetts chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 5 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Massachusetts Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Boston Community Center",
        "address": "123 Main Street",
        "city": "Boston",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Massachusetts.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Boston State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Boston",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Boston Public Library",
        "address": "456 Library Way",
        "city": "Boston",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Boston Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Boston",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Massachusetts Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Massachusetts State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Massachusetts helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Massachusetts",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Boston",
        "severity": "critical",
        "affectedCities": [
          "Boston"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Massachusetts State Parks",
        "severity": "high",
        "affectedCities": [
          "Boston",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 77,
        "change": "-6%"
      },
      "infrastructureMiles": {
        "protected": 234,
        "unprotected": 423,
        "planned": 117
      },
      "fundingSecured": {
        "amount": 55,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/massachusetts/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Boston",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Boston",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/massachusetts/rally-1.jpg",
        "alt": "AARBAA Massachusetts road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/massachusetts/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Boston Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/massachusetts/members-1.jpg",
        "alt": "AARBAA Massachusetts chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/massachusetts/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Boston Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.2,
      "count": 377
    }
  },
  {
    "name": "Michigan",
    "slug": "michigan",
    "abbreviation": "MI",
    "capital": "Lansing",
    "stats": {
      "members": 745,
      "chapters": 5,
      "victories": 19
    },
    "chapterPresident": {
      "name": "Robert Harrison",
      "email": "michigan@aarbaa.com",
      "phone": "(517) 555-0634"
    },
    "testimonials": [
      {
        "quote": "Detroit's recovery includes safe cycling infrastructure thanks to AARBAA!",
        "author": "Tamara J.",
        "city": "Detroit"
      },
      {
        "quote": "Grand Rapids approved 6 protected bike lane projects this year!",
        "author": "Scott W.",
        "city": "Grand Rapids"
      },
      {
        "quote": "Ann Arbor cyclists finally getting proper separated lanes!",
        "author": "Michelle D.",
        "city": "Ann Arbor"
      }
    ],
    "featuredArticle": {
      "title": "Michigan's Auto Capital Embraces Protected Cycling Infrastructure",
      "excerpt": "Detroit's renaissance includes nation-leading separated lane network.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Michigan?",
        "answer": "Joining AARBAA Michigan is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 5 chapters across the state with 745 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Michigan?",
        "answer": "AARBAA Michigan advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Michigan chapter have?",
        "answer": "Our Michigan chapter currently has 745 dedicated members across 5 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Michigan residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Michigan?",
        "answer": "Michigan faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Michigan achieved?",
        "answer": "AARBAA Michigan has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Michigan chapter meet?",
        "answer": "The Michigan chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 5 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Michigan Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Lansing Community Center",
        "address": "123 Main Street",
        "city": "Lansing",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Michigan.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Lansing State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Lansing",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Lansing Public Library",
        "address": "456 Library Way",
        "city": "Lansing",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Lansing Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Lansing",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Michigan Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Michigan State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Michigan helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Michigan",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Lansing",
        "severity": "critical",
        "affectedCities": [
          "Lansing"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Michigan State Parks",
        "severity": "high",
        "affectedCities": [
          "Lansing",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 72,
        "change": "-5%"
      },
      "infrastructureMiles": {
        "protected": 212,
        "unprotected": 386,
        "planned": 106
      },
      "fundingSecured": {
        "amount": 47,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/michigan/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Lansing",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Lansing",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/michigan/rally-1.jpg",
        "alt": "AARBAA Michigan road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/michigan/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Lansing Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/michigan/members-1.jpg",
        "alt": "AARBAA Michigan chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/michigan/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Lansing Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.2,
      "count": 258
    }
  },
  {
    "name": "Minnesota",
    "slug": "minnesota",
    "abbreviation": "MN",
    "capital": "Saint Paul",
    "stats": {
      "members": 634,
      "chapters": 4,
      "victories": 16
    },
    "chapterPresident": {
      "name": "Karen Olson",
      "email": "minnesota@aarbaa.com",
      "phone": "(651) 555-0567"
    },
    "testimonials": [
      {
        "quote": "Minneapolis needs WINTER-SAFE separated bike lanes - AARBAA is making it happen!",
        "author": "Eric N.",
        "city": "Minneapolis"
      },
      {
        "quote": "St. Paul chapter secured year-round protected infrastructure!",
        "author": "Jennifer L.",
        "city": "Saint Paul"
      },
      {
        "quote": "Duluth's lakefront cycling safety finally being addressed.",
        "author": "Michael K.",
        "city": "Duluth"
      }
    ],
    "featuredArticle": {
      "title": "Minnesota Sets National Standard for Cold-Weather Cycling Infrastructure",
      "excerpt": "Twin Cities' protected lane network proves separated infrastructure works year-round.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Minnesota?",
        "answer": "Joining AARBAA Minnesota is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 4 chapters across the state with 634 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Minnesota?",
        "answer": "AARBAA Minnesota advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Minnesota chapter have?",
        "answer": "Our Minnesota chapter currently has 634 dedicated members across 4 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Minnesota residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Minnesota?",
        "answer": "Minnesota faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Minnesota achieved?",
        "answer": "AARBAA Minnesota has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Minnesota chapter meet?",
        "answer": "The Minnesota chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 4 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Minnesota Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Saint Paul Community Center",
        "address": "123 Main Street",
        "city": "Saint Paul",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Minnesota.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Saint Paul State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Saint Paul",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Saint Paul Public Library",
        "address": "456 Library Way",
        "city": "Saint Paul",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Saint Paul Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Saint Paul",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Minnesota Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Minnesota State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Minnesota helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Minnesota",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Saint Paul",
        "severity": "critical",
        "affectedCities": [
          "Saint Paul"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Minnesota State Parks",
        "severity": "high",
        "affectedCities": [
          "Saint Paul",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 69,
        "change": "+7%"
      },
      "infrastructureMiles": {
        "protected": 195,
        "unprotected": 359,
        "planned": 98
      },
      "fundingSecured": {
        "amount": 42,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/minnesota/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Saint Paul",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Saint Paul",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/minnesota/rally-1.jpg",
        "alt": "AARBAA Minnesota road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/minnesota/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Saint Paul Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/minnesota/members-1.jpg",
        "alt": "AARBAA Minnesota chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/minnesota/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Saint Paul Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 254
    }
  },
  {
    "name": "Mississippi",
    "slug": "mississippi",
    "abbreviation": "MS",
    "capital": "Jackson",
    "stats": {
      "members": 221,
      "chapters": 2,
      "victories": 6
    },
    "chapterPresident": {
      "name": "Charles Williams",
      "email": "mississippi@aarbaa.com",
      "phone": "(601) 555-0312"
    },
    "testimonials": [
      {
        "quote": "Jackson needs better road organization - AARBAA is leading the charge!",
        "author": "Dorothy M.",
        "city": "Jackson"
      },
      {
        "quote": "Gulfport chapter working on coastal cycling safety improvements.",
        "author": "Harold T.",
        "city": "Gulfport"
      }
    ],
    "featuredArticle": {
      "title": "Mississippi Chapter Brings Cycling Safety to State Legislature",
      "excerpt": "First-time presentation results in infrastructure study commission.",
      "link": "/news/city-council-presentation"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Mississippi?",
        "answer": "Joining AARBAA Mississippi is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 221 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Mississippi?",
        "answer": "AARBAA Mississippi advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Mississippi chapter have?",
        "answer": "Our Mississippi chapter currently has 221 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Mississippi residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Mississippi?",
        "answer": "Mississippi faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Mississippi achieved?",
        "answer": "AARBAA Mississippi has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Mississippi chapter meet?",
        "answer": "The Mississippi chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Mississippi Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Jackson Community Center",
        "address": "123 Main Street",
        "city": "Jackson",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Mississippi.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Jackson State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Jackson",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Jackson Public Library",
        "address": "456 Library Way",
        "city": "Jackson",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Jackson Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Jackson",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Mississippi Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Mississippi State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Mississippi helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Mississippi",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Jackson",
        "severity": "critical",
        "affectedCities": [
          "Jackson"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Mississippi State Parks",
        "severity": "high",
        "affectedCities": [
          "Jackson",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 57,
        "change": "+10%"
      },
      "infrastructureMiles": {
        "protected": 133,
        "unprotected": 255,
        "planned": 67
      },
      "fundingSecured": {
        "amount": 21,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/mississippi/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Jackson",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Jackson",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/mississippi/rally-1.jpg",
        "alt": "AARBAA Mississippi road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/mississippi/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Jackson Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/mississippi/members-1.jpg",
        "alt": "AARBAA Mississippi chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/mississippi/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Jackson Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 3.9,
      "count": 73
    }
  },
  {
    "name": "Missouri",
    "slug": "missouri",
    "abbreviation": "MO",
    "capital": "Jefferson City",
    "stats": {
      "members": 567,
      "chapters": 4,
      "victories": 14
    },
    "chapterPresident": {
      "name": "Linda Martinez",
      "email": "missouri@aarbaa.com",
      "phone": "(573) 555-0489"
    },
    "testimonials": [
      {
        "quote": "St. Louis traffic demands separated cycling infrastructure NOW!",
        "author": "Brian K.",
        "city": "Saint Louis"
      },
      {
        "quote": "Kansas City chapter won 5 protected lane projects this year!",
        "author": "Angela R.",
        "city": "Kansas City"
      },
      {
        "quote": "Springfield's new bike infrastructure is exactly what we advocated for!",
        "author": "Timothy H.",
        "city": "Springfield"
      }
    ],
    "featuredArticle": {
      "title": "Missouri Gateway Cities Lead Midwest in Cycling Safety",
      "excerpt": "St. Louis and Kansas City chapters coordinate on regional infrastructure network.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Missouri?",
        "answer": "Joining AARBAA Missouri is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 4 chapters across the state with 567 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Missouri?",
        "answer": "AARBAA Missouri advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Missouri chapter have?",
        "answer": "Our Missouri chapter currently has 567 dedicated members across 4 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Missouri residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Missouri?",
        "answer": "Missouri faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Missouri achieved?",
        "answer": "AARBAA Missouri has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Missouri chapter meet?",
        "answer": "The Missouri chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 4 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Missouri Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Jefferson City Community Center",
        "address": "123 Main Street",
        "city": "Jefferson City",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Missouri.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Jefferson City State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Jefferson City",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Jefferson City Public Library",
        "address": "456 Library Way",
        "city": "Jefferson City",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Jefferson City Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Jefferson City",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Missouri Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Missouri State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Missouri helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Missouri",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Jefferson City",
        "severity": "critical",
        "affectedCities": [
          "Jefferson City"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Missouri State Parks",
        "severity": "high",
        "affectedCities": [
          "Jefferson City",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 67,
        "change": "-6%"
      },
      "infrastructureMiles": {
        "protected": 185,
        "unprotected": 342,
        "planned": 93
      },
      "fundingSecured": {
        "amount": 38,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/missouri/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Jefferson City",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Jefferson City",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/missouri/rally-1.jpg",
        "alt": "AARBAA Missouri road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/missouri/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Jefferson City Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/missouri/members-1.jpg",
        "alt": "AARBAA Missouri chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/missouri/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Jefferson City Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 198
    }
  },
  {
    "name": "Montana",
    "slug": "montana",
    "abbreviation": "MT",
    "capital": "Helena",
    "stats": {
      "members": 176,
      "chapters": 2,
      "victories": 5
    },
    "chapterPresident": {
      "name": "Susan Campbell",
      "email": "montana@aarbaa.com",
      "phone": "(406) 555-0234"
    },
    "testimonials": [
      {
        "quote": "Billings needs protected bike lanes for our growing cycling community!",
        "author": "Frank D.",
        "city": "Billings"
      },
      {
        "quote": "Missoula chapter secured funding for mountain town cycling safety.",
        "author": "Patricia W.",
        "city": "Missoula"
      }
    ],
    "featuredArticle": {
      "title": "Montana's Wide Open Roads Get Protected Cycling Corridors",
      "excerpt": "Rural state becomes unexpected leader in separated lane innovation.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Montana?",
        "answer": "Joining AARBAA Montana is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 176 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Montana?",
        "answer": "AARBAA Montana advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Montana chapter have?",
        "answer": "Our Montana chapter currently has 176 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Montana residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Montana?",
        "answer": "Montana faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Montana achieved?",
        "answer": "AARBAA Montana has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Montana chapter meet?",
        "answer": "The Montana chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Montana Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Helena Community Center",
        "address": "123 Main Street",
        "city": "Helena",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Montana.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Helena State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Helena",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Helena Public Library",
        "address": "456 Library Way",
        "city": "Helena",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Helena Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Helena",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Montana Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Montana State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Montana helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Montana",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Helena",
        "severity": "critical",
        "affectedCities": [
          "Helena"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Montana State Parks",
        "severity": "high",
        "affectedCities": [
          "Helena",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 55,
        "change": "-5%"
      },
      "infrastructureMiles": {
        "protected": 126,
        "unprotected": 244,
        "planned": 63
      },
      "fundingSecured": {
        "amount": 19,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/montana/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Helena",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Helena",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/montana/rally-1.jpg",
        "alt": "AARBAA Montana road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/montana/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Helena Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/montana/members-1.jpg",
        "alt": "AARBAA Montana chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/montana/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Helena Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 71
    }
  },
  {
    "name": "Nebraska",
    "slug": "nebraska",
    "abbreviation": "NE",
    "capital": "Lincoln",
    "stats": {
      "members": 243,
      "chapters": 2,
      "victories": 7
    },
    "chapterPresident": {
      "name": "Donald Peterson",
      "email": "nebraska@aarbaa.com",
      "phone": "(402) 555-0289"
    },
    "testimonials": [
      {
        "quote": "Omaha's growth requires better cycling infrastructure planning!",
        "author": "Barbara S.",
        "city": "Omaha"
      },
      {
        "quote": "Lincoln chapter got separated lanes approved on all major streets!",
        "author": "Richard M.",
        "city": "Lincoln"
      }
    ],
    "featuredArticle": {
      "title": "Nebraska Capital Approves Comprehensive Bike Lane Network",
      "excerpt": "Lincoln's $6M investment in separated infrastructure sets state precedent.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Nebraska?",
        "answer": "Joining AARBAA Nebraska is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 243 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Nebraska?",
        "answer": "AARBAA Nebraska advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Nebraska chapter have?",
        "answer": "Our Nebraska chapter currently has 243 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Nebraska residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Nebraska?",
        "answer": "Nebraska faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Nebraska achieved?",
        "answer": "AARBAA Nebraska has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Nebraska chapter meet?",
        "answer": "The Nebraska chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Nebraska Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Lincoln Community Center",
        "address": "123 Main Street",
        "city": "Lincoln",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Nebraska.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Lincoln State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Lincoln",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Lincoln Public Library",
        "address": "456 Library Way",
        "city": "Lincoln",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Lincoln Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Lincoln",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Nebraska Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Nebraska State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Nebraska helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Nebraska",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Lincoln",
        "severity": "critical",
        "affectedCities": [
          "Lincoln"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Nebraska State Parks",
        "severity": "high",
        "affectedCities": [
          "Lincoln",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 57,
        "change": "+15%"
      },
      "infrastructureMiles": {
        "protected": 136,
        "unprotected": 261,
        "planned": 68
      },
      "fundingSecured": {
        "amount": 22,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/nebraska/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Lincoln",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Lincoln",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/nebraska/rally-1.jpg",
        "alt": "AARBAA Nebraska road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/nebraska/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Lincoln Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/nebraska/members-1.jpg",
        "alt": "AARBAA Nebraska chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/nebraska/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Lincoln Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 105
    }
  },
  {
    "name": "Nevada",
    "slug": "nevada",
    "abbreviation": "NV",
    "capital": "Carson City",
    "stats": {
      "members": 512,
      "chapters": 3,
      "victories": 13
    },
    "chapterPresident": {
      "name": "Christine Baker",
      "email": "nevada@aarbaa.com",
      "phone": "(775) 555-0445"
    },
    "testimonials": [
      {
        "quote": "Las Vegas traffic is insane - cyclists need PROTECTED lanes!",
        "author": "Joseph R.",
        "city": "Las Vegas"
      },
      {
        "quote": "Reno chapter secured protected bike infrastructure on every major corridor!",
        "author": "Amanda K.",
        "city": "Reno"
      },
      {
        "quote": "Henderson's new separated lanes are a huge safety improvement!",
        "author": "Daniel P.",
        "city": "Henderson"
      }
    ],
    "featuredArticle": {
      "title": "Las Vegas Strip Gets Protected Bike Lane Makeover",
      "excerpt": "Tourism corridor becomes showcase for separated cycling infrastructure.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Nevada?",
        "answer": "Joining AARBAA Nevada is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 512 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Nevada?",
        "answer": "AARBAA Nevada advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Nevada chapter have?",
        "answer": "Our Nevada chapter currently has 512 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Nevada residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Nevada?",
        "answer": "Nevada faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Nevada achieved?",
        "answer": "AARBAA Nevada has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Nevada chapter meet?",
        "answer": "The Nevada chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Nevada Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Carson City Community Center",
        "address": "123 Main Street",
        "city": "Carson City",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Nevada.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Carson City State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Carson City",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Carson City Public Library",
        "address": "456 Library Way",
        "city": "Carson City",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Carson City Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Carson City",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Nevada Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Nevada State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Nevada helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Nevada",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Carson City",
        "severity": "critical",
        "affectedCities": [
          "Carson City"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Nevada State Parks",
        "severity": "high",
        "affectedCities": [
          "Carson City",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 65,
        "change": "-12%"
      },
      "infrastructureMiles": {
        "protected": 177,
        "unprotected": 328,
        "planned": 88
      },
      "fundingSecured": {
        "amount": 36,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/nevada/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Carson City",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Carson City",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/nevada/rally-1.jpg",
        "alt": "AARBAA Nevada road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/nevada/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Carson City Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/nevada/members-1.jpg",
        "alt": "AARBAA Nevada chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/nevada/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Carson City Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 243
    }
  },
  {
    "name": "New Hampshire",
    "slug": "new-hampshire",
    "abbreviation": "NH",
    "capital": "Concord",
    "stats": {
      "members": 198,
      "chapters": 2,
      "victories": 6
    },
    "chapterPresident": {
      "name": "Edward Morris",
      "email": "newhampshire@aarbaa.com",
      "phone": "(603) 555-0267"
    },
    "testimonials": [
      {
        "quote": "Manchester needs better cycling safety infrastructure!",
        "author": "Carol F.",
        "city": "Manchester"
      },
      {
        "quote": "Nashua chapter won protected lane funding from state DOT!",
        "author": "George L.",
        "city": "Nashua"
      }
    ],
    "featuredArticle": {
      "title": "New Hampshire's Small Towns Lead in Cycling Safety Innovation",
      "excerpt": "AARBAA's rural infrastructure model gains national recognition.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA New Hampshire?",
        "answer": "Joining AARBAA New Hampshire is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 198 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in New Hampshire?",
        "answer": "AARBAA New Hampshire advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the New Hampshire chapter have?",
        "answer": "Our New Hampshire chapter currently has 198 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more New Hampshire residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in New Hampshire?",
        "answer": "New Hampshire faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA New Hampshire achieved?",
        "answer": "AARBAA New Hampshire has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the New Hampshire chapter meet?",
        "answer": "The New Hampshire chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "New Hampshire Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Concord Community Center",
        "address": "123 Main Street",
        "city": "Concord",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in New Hampshire.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Concord State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Concord",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Concord Public Library",
        "address": "456 Library Way",
        "city": "Concord",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Concord Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Concord",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "New Hampshire Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "New Hampshire State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA New Hampshire helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "New Hampshire",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Concord",
        "severity": "critical",
        "affectedCities": [
          "Concord"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "New Hampshire State Parks",
        "severity": "high",
        "affectedCities": [
          "Concord",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 56,
        "change": "-10%"
      },
      "infrastructureMiles": {
        "protected": 130,
        "unprotected": 250,
        "planned": 65
      },
      "fundingSecured": {
        "amount": 20,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/new-hampshire/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Concord",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Concord",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/new-hampshire/rally-1.jpg",
        "alt": "AARBAA New Hampshire road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/new-hampshire/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Concord Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/new-hampshire/members-1.jpg",
        "alt": "AARBAA New Hampshire chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/new-hampshire/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Concord Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 66
    }
  },
  {
    "name": "New Jersey",
    "slug": "new-jersey",
    "abbreviation": "NJ",
    "capital": "Trenton",
    "stats": {
      "members": 823,
      "chapters": 5,
      "victories": 21
    },
    "chapterPresident": {
      "name": "Maria Romano",
      "email": "newjersey@aarbaa.com",
      "phone": "(609) 555-0712"
    },
    "testimonials": [
      {
        "quote": "Newark's congestion requires separated cycling infrastructure NOW!",
        "author": "Vincent P.",
        "city": "Newark"
      },
      {
        "quote": "Jersey City chapter secured 10 miles of protected bike lanes!",
        "author": "Christina M.",
        "city": "Jersey City"
      },
      {
        "quote": "Trenton finally listening to AARBAA's safety recommendations!",
        "author": "Anthony D.",
        "city": "Trenton"
      }
    ],
    "featuredArticle": {
      "title": "New Jersey Transit Corridor Gets Protected Bike Lane Network",
      "excerpt": "Garden State's commuter routes become model for separated infrastructure.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA New Jersey?",
        "answer": "Joining AARBAA New Jersey is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 5 chapters across the state with 823 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in New Jersey?",
        "answer": "AARBAA New Jersey advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the New Jersey chapter have?",
        "answer": "Our New Jersey chapter currently has 823 dedicated members across 5 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more New Jersey residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in New Jersey?",
        "answer": "New Jersey faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA New Jersey achieved?",
        "answer": "AARBAA New Jersey has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the New Jersey chapter meet?",
        "answer": "The New Jersey chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 5 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "New Jersey Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Trenton Community Center",
        "address": "123 Main Street",
        "city": "Trenton",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in New Jersey.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Trenton State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Trenton",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Trenton Public Library",
        "address": "456 Library Way",
        "city": "Trenton",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Trenton Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Trenton",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "New Jersey Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "New Jersey State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA New Jersey helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "New Jersey",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Trenton",
        "severity": "critical",
        "affectedCities": [
          "Trenton"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "New Jersey State Parks",
        "severity": "high",
        "affectedCities": [
          "Trenton",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 75,
        "change": "+12%"
      },
      "infrastructureMiles": {
        "protected": 223,
        "unprotected": 406,
        "planned": 112
      },
      "fundingSecured": {
        "amount": 51,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/new-jersey/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Trenton",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Trenton",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/new-jersey/rally-1.jpg",
        "alt": "AARBAA New Jersey road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/new-jersey/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Trenton Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/new-jersey/members-1.jpg",
        "alt": "AARBAA New Jersey chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/new-jersey/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Trenton Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 376
    }
  },
  {
    "name": "New Mexico",
    "slug": "new-mexico",
    "abbreviation": "NM",
    "capital": "Santa Fe",
    "stats": {
      "members": 334,
      "chapters": 3,
      "victories": 9
    },
    "chapterPresident": {
      "name": "Carmen Gutierrez",
      "email": "newmexico@aarbaa.com",
      "phone": "(505) 555-0378"
    },
    "testimonials": [
      {
        "quote": "Albuquerque's cycling culture needs proper separated lane infrastructure!",
        "author": "Roberto S.",
        "city": "Albuquerque"
      },
      {
        "quote": "Santa Fe chapter won historic district protected bike path approval!",
        "author": "Isabella M.",
        "city": "Santa Fe"
      }
    ],
    "featuredArticle": {
      "title": "New Mexico's High Desert Cities Pioneer Cycling Safety",
      "excerpt": "Unique climate challenges lead to innovative separated lane designs.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA New Mexico?",
        "answer": "Joining AARBAA New Mexico is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 334 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in New Mexico?",
        "answer": "AARBAA New Mexico advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the New Mexico chapter have?",
        "answer": "Our New Mexico chapter currently has 334 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more New Mexico residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in New Mexico?",
        "answer": "New Mexico faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA New Mexico achieved?",
        "answer": "AARBAA New Mexico has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the New Mexico chapter meet?",
        "answer": "The New Mexico chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "New Mexico Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Santa Fe Community Center",
        "address": "123 Main Street",
        "city": "Santa Fe",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in New Mexico.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Santa Fe State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Santa Fe",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Santa Fe Public Library",
        "address": "456 Library Way",
        "city": "Santa Fe",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Santa Fe Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Santa Fe",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "New Mexico Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "New Mexico State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA New Mexico helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "New Mexico",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Santa Fe",
        "severity": "critical",
        "affectedCities": [
          "Santa Fe"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "New Mexico State Parks",
        "severity": "high",
        "affectedCities": [
          "Santa Fe",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 60,
        "change": "-7%"
      },
      "infrastructureMiles": {
        "protected": 150,
        "unprotected": 284,
        "planned": 75
      },
      "fundingSecured": {
        "amount": 27,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/new-mexico/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Santa Fe",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Santa Fe",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/new-mexico/rally-1.jpg",
        "alt": "AARBAA New Mexico road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/new-mexico/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Santa Fe Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/new-mexico/members-1.jpg",
        "alt": "AARBAA New Mexico chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/new-mexico/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Santa Fe Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 3.9,
      "count": 140
    }
  },
  {
    "name": "New York",
    "slug": "new-york",
    "abbreviation": "NY",
    "capital": "Albany",
    "stats": {
      "members": 1834,
      "chapters": 9,
      "victories": 38
    },
    "chapterPresident": {
      "name": "Rachel Goldman",
      "email": "newyork@aarbaa.com",
      "phone": "(518) 555-0956"
    },
    "testimonials": [
      {
        "quote": "NYC cyclists think they own the streets - we're demanding REAL infrastructure!",
        "author": "Michael B.",
        "city": "New York City"
      },
      {
        "quote": "Buffalo chapter secured major protected lane network funding!",
        "author": "Sarah K.",
        "city": "Buffalo"
      },
      {
        "quote": "Rochester's new separated bike infrastructure is a game-changer!",
        "author": "David L.",
        "city": "Rochester"
      }
    ],
    "featuredArticle": {
      "title": "New York State Allocates $87M for Protected Bike Lane Network",
      "excerpt": "AARBAA's multi-year advocacy campaign results in historic infrastructure investment.",
      "link": "/news/bill-477-update"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in New York?",
        "answer": "Contact our state coordinator Rachel Goldman at newyork@aarbaa.com or call (518) 555-0956. With 9 chapters across the Empire State, find your local chapter: NYC (Manhattan, Brooklyn, Queens), Buffalo, Rochester, Albany, Syracuse, Yonkers, or Long Island. Join our fight for safer streets!"
      },
      {
        "question": "What does AARBAA do in New York?",
        "answer": "Our 1,834 members advocate for protected cycling infrastructure from NYC to Niagara Falls. We work with NYSDOT, present at city councils, lobby in Albany, and coordinate campaigns addressing NYC's aggressive cycling culture, upstate winter conditions, and bridge/tunnel access. We've secured 38 major victories."
      },
      {
        "question": "How many members does AARBAA have in New York?",
        "answer": "New York has 1,834 active AARBAA members across 9 chapters. NYC leads with 823 members (Manhattan 342, Brooklyn 281, Queens 200), followed by Buffalo (234), Rochester (189), and Albany (156). Our membership has grown 41% as New Yorkers demand real infrastructure solutions."
      },
      {
        "question": "What are New York's biggest cycling infrastructure challenges?",
        "answer": "New York faces diverse challenges: NYC's aggressive cycling culture and delivery e-bike chaos, winter snow removal from protected lanes upstate, aging bridge infrastructure lacking bike access, subway grate hazards, and the complex politics of reallocating street space from cars to protected cycling infrastructure."
      },
      {
        "question": "Has AARBAA had any victories in New York?",
        "answer": "Absolutely! Our 38 victories include NYC's protected lane network expansion, Buffalo's complete streets initiative, Rochester's Genesee Riverway Trail protection, Albany's Capital District network, and the historic $87M state allocation for protected infrastructure. We've transformed cycling safety across the Empire State."
      },
      {
        "question": "When are New York chapter meetings?",
        "answer": "NYC chapters meet: Manhattan 1st Tuesday, Brooklyn 1st Thursday, Queens 2nd Monday. Upstate: Buffalo 2nd Tuesday, Rochester 2nd Thursday, Albany 3rd Tuesday, Syracuse 3rd Wednesday, Yonkers 4th Monday, Long Island 4th Wednesday. All meetings are 7 PM ET and open to the public."
      }
    ],
    "upcomingEvents": [
      {
        "name": "NYC Protected Infrastructure March",
        "date": "2025-11-14",
        "time": "4:30 PM - 6:30 PM EST",
        "venue": "City Hall Park",
        "address": "Broadway & Park Row",
        "city": "New York City",
        "description": "Major march demanding expansion of NYC's protected bike lane network to all five boroughs. Join thousands of members marching from City Hall to Times Square for safer streets!",
        "eventType": "rally",
        "registrationRequired": false
      },
      {
        "name": "Upstate Winter Infrastructure Summit",
        "date": "2025-11-26",
        "time": "10:00 AM - 2:00 PM EST",
        "venue": "Albany Convention Center",
        "address": "55 Eagle Street",
        "city": "Albany",
        "description": "Summit addressing winter maintenance of protected bike lanes across upstate NY. NYSDOT officials and representatives from Buffalo, Rochester, Syracuse, and Albany will present solutions.",
        "eventType": "presentation",
        "registrationRequired": true
      },
      {
        "name": "Long Island Regional Planning Meeting",
        "date": "2025-12-09",
        "time": "7:00 PM - 9:00 PM EST",
        "venue": "Hofstra University",
        "address": "1000 Fulton Avenue",
        "city": "Hempstead",
        "description": "Planning meeting for Long Island's protected bike infrastructure expansion, focusing on connections between Nassau and Suffolk counties and LIRR station access.",
        "eventType": "meeting",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "NYC Expands Protected Network to Outer Boroughs",
        "description": "After years of AARBAA advocacy, NYC committed to expanding protected bike lanes beyond Manhattan, with major networks approved for Brooklyn, Queens, the Bronx, and Staten Island, addressing longtime equity concerns.",
        "date": "2024-09-28",
        "location": "New York City",
        "impact": "267 miles of new protected lanes across all five boroughs, $124M investment",
        "category": "infrastructure"
      },
      {
        "title": "Buffalo Complete Streets Victory",
        "description": "Buffalo became the first major upstate city to adopt complete streets design with protected bike lanes on all arterial roads, setting a precedent for winter cities nationwide after AARBAA's persistent campaign.",
        "date": "2024-07-15",
        "location": "Buffalo",
        "impact": "89 miles of protected lanes with winter maintenance plan",
        "category": "legislation"
      },
      {
        "title": "Brooklyn Bridge Protected Lane Opening",
        "description": "The iconic Brooklyn Bridge finally received fully protected bike lanes separated from pedestrians and vehicles, ending decades of dangerous mixing and conflicts after AARBAA's high-profile advocacy campaign.",
        "date": "2024-10-22",
        "location": "New York City",
        "impact": "Iconic bridge protection, 30,000 daily cyclists safer",
        "category": "infrastructure"
      },
      {
        "title": "State Highway Protected Lane Mandate",
        "description": "New York State passed legislation requiring protected bike lanes on all state highway projects in urban and suburban areas, a landmark victory affecting thousands of miles of future infrastructure.",
        "date": "2024-12-11",
        "location": "Statewide",
        "impact": "Mandatory protected lanes on all NYSDOT urban/suburban projects",
        "category": "legislation"
      },
      {
        "title": "Rochester Genesee Riverway Protection",
        "description": "Rochester completed physical protection of the entire Genesee Riverway Trail system, transforming it from a mixed-use path to fully separated cycling infrastructure after 3 years of AARBAA advocacy.",
        "date": "2025-01-07",
        "location": "Rochester",
        "impact": "28 miles of riverway protection, regional connectivity achieved",
        "category": "infrastructure"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Manhattan Delivery E-Bike Chaos",
        "description": "Thousands of delivery e-bikes operating at dangerous speeds in bike lanes create conflicts with regular cyclists, pedestrians, and vehicles, with no protected infrastructure separating different vehicle types and speeds.",
        "location": "Manhattan, New York City",
        "severity": "critical",
        "affectedCities": [
          "Manhattan",
          "Brooklyn",
          "Queens",
          "Bronx"
        ],
        "proposedSolution": "Separated infrastructure for e-bikes/regular bikes, speed-based lane system, enhanced enforcement",
        "status": "advocating",
        "lastUpdated": "2025-01-23"
      },
      {
        "title": "I-87 Northway Cycling Desert",
        "description": "The I-87 corridor from NYC to Montreal lacks any parallel protected cycling infrastructure, creating a 350-mile gap preventing safe long-distance cycling and tourism along this major route.",
        "location": "I-87 corridor, NYC to Canadian border",
        "severity": "high",
        "affectedCities": [
          "Albany",
          "Saratoga Springs",
          "Glens Falls",
          "Plattsburgh"
        ],
        "proposedSolution": "Protected cycling route parallel to I-87 with connections to Adirondack communities",
        "status": "identified",
        "lastUpdated": "2024-12-28"
      },
      {
        "title": "Long Island East-West Connectivity Gap",
        "description": "Long Island lacks continuous protected east-west cycling infrastructure, forcing cyclists onto dangerous highways like Route 25 and the LIE service roads with no safe alternative for the 120-mile stretch.",
        "location": "Long Island, Nassau to Suffolk Counties",
        "severity": "critical",
        "affectedCities": [
          "Hempstead",
          "Huntington",
          "Smithtown",
          "Riverhead",
          "Montauk"
        ],
        "proposedSolution": "Continuous protected bike highway from NYC to Montauk with LIRR station connections",
        "status": "approved",
        "lastUpdated": "2025-01-19"
      },
      {
        "title": "Upstate Bridge Access Barriers",
        "description": "Major bridges across the Hudson River, Mohawk River, and Great Lakes lack protected bike access, creating dangerous bottlenecks and forcing lengthy detours for cyclists in upstate communities.",
        "location": "Upstate river and lake crossings",
        "severity": "high",
        "affectedCities": [
          "Troy",
          "Schenectady",
          "Utica",
          "Oswego",
          "Watertown"
        ],
        "proposedSolution": "Retrofit all major bridges with protected bike lanes or parallel bike/ped bridges",
        "status": "advocating",
        "lastUpdated": "2025-01-12"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 105,
        "change": "-6%"
      },
      "infrastructureMiles": {
        "protected": 375,
        "unprotected": 659,
        "planned": 188
      },
      "fundingSecured": {
        "amount": 102,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/new-york/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Albany",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Albany",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/new-york/rally-1.jpg",
        "alt": "AARBAA New York road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/new-york/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Albany Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/new-york/members-1.jpg",
        "alt": "AARBAA New York chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/new-york/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Albany Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.4,
      "count": 614
    }
  },
  {
    "name": "North Carolina",
    "slug": "north-carolina",
    "abbreviation": "NC",
    "capital": "Raleigh",
    "stats": {
      "members": 689,
      "chapters": 4,
      "victories": 17
    },
    "chapterPresident": {
      "name": "Gregory Thompson",
      "email": "northcarolina@aarbaa.com",
      "phone": "(919) 555-0623"
    },
    "testimonials": [
      {
        "quote": "Charlotte's growth demands better cycling infrastructure planning!",
        "author": "Melissa W.",
        "city": "Charlotte"
      },
      {
        "quote": "Raleigh chapter won 8 protected lane projects in the Triangle!",
        "author": "Kevin H.",
        "city": "Raleigh"
      },
      {
        "quote": "Asheville's mountain cycling safety finally being addressed!",
        "author": "Laura B.",
        "city": "Asheville"
      }
    ],
    "featuredArticle": {
      "title": "North Carolina Research Triangle Leads in Cycling Safety",
      "excerpt": "Raleigh-Durham-Chapel Hill chapters coordinate on regional protected lane network.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA North Carolina?",
        "answer": "Joining AARBAA North Carolina is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 4 chapters across the state with 689 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in North Carolina?",
        "answer": "AARBAA North Carolina advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the North Carolina chapter have?",
        "answer": "Our North Carolina chapter currently has 689 dedicated members across 4 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more North Carolina residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in North Carolina?",
        "answer": "North Carolina faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA North Carolina achieved?",
        "answer": "AARBAA North Carolina has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the North Carolina chapter meet?",
        "answer": "The North Carolina chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 4 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "North Carolina Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Raleigh Community Center",
        "address": "123 Main Street",
        "city": "Raleigh",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in North Carolina.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Raleigh State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Raleigh",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Raleigh Public Library",
        "address": "456 Library Way",
        "city": "Raleigh",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Raleigh Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Raleigh",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "North Carolina Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "North Carolina State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA North Carolina helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "North Carolina",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Raleigh",
        "severity": "critical",
        "affectedCities": [
          "Raleigh"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "North Carolina State Parks",
        "severity": "high",
        "affectedCities": [
          "Raleigh",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 71,
        "change": "+19%"
      },
      "infrastructureMiles": {
        "protected": 203,
        "unprotected": 372,
        "planned": 102
      },
      "fundingSecured": {
        "amount": 44,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/north-carolina/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Raleigh",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Raleigh",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/north-carolina/rally-1.jpg",
        "alt": "AARBAA North Carolina road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/north-carolina/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Raleigh Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/north-carolina/members-1.jpg",
        "alt": "AARBAA North Carolina chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/north-carolina/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Raleigh Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 240
    }
  },
  {
    "name": "North Dakota",
    "slug": "north-dakota",
    "abbreviation": "ND",
    "capital": "Bismarck",
    "stats": {
      "members": 134,
      "chapters": 1,
      "victories": 4
    },
    "chapterPresident": {
      "name": "Janet Anderson",
      "email": "northdakota@aarbaa.com",
      "phone": "(701) 555-0189"
    },
    "testimonials": [
      {
        "quote": "Fargo's growing cycling community needs separated infrastructure!",
        "author": "Thomas R.",
        "city": "Fargo"
      },
      {
        "quote": "Bismarck chapter fighting for year-round protected bike lanes!",
        "author": "Julie M.",
        "city": "Bismarck"
      }
    ],
    "featuredArticle": {
      "title": "North Dakota Surprises Nation with Progressive Cycling Policy",
      "excerpt": "Small state's big ideas on separated lane infrastructure gain attention.",
      "link": "/news/bill-477-update"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA North Dakota?",
        "answer": "Joining AARBAA North Dakota is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 1 chapter across the state with 134 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in North Dakota?",
        "answer": "AARBAA North Dakota advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the North Dakota chapter have?",
        "answer": "Our North Dakota chapter currently has 134 dedicated members across 1 local chapter. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more North Dakota residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in North Dakota?",
        "answer": "North Dakota faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA North Dakota achieved?",
        "answer": "AARBAA North Dakota has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the North Dakota chapter meet?",
        "answer": "The North Dakota chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 1 chapter location to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "North Dakota Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Bismarck Community Center",
        "address": "123 Main Street",
        "city": "Bismarck",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in North Dakota.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Bismarck State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Bismarck",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Bismarck Public Library",
        "address": "456 Library Way",
        "city": "Bismarck",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Bismarck Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Bismarck",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "North Dakota Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "North Dakota State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA North Dakota helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "North Dakota",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Bismarck",
        "severity": "critical",
        "affectedCities": [
          "Bismarck"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "North Dakota State Parks",
        "severity": "high",
        "affectedCities": [
          "Bismarck",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 54,
        "change": "+13%"
      },
      "infrastructureMiles": {
        "protected": 120,
        "unprotected": 234,
        "planned": 60
      },
      "fundingSecured": {
        "amount": 17,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/north-dakota/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Bismarck",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Bismarck",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/north-dakota/rally-1.jpg",
        "alt": "AARBAA North Dakota road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/north-dakota/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Bismarck Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/north-dakota/members-1.jpg",
        "alt": "AARBAA North Dakota chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/north-dakota/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Bismarck Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 63
    }
  },
  {
    "name": "Ohio",
    "slug": "ohio",
    "abbreviation": "OH",
    "capital": "Columbus",
    "stats": {
      "members": 934,
      "chapters": 6,
      "victories": 24
    },
    "chapterPresident": {
      "name": "Steven Wilson",
      "email": "ohio@aarbaa.com",
      "phone": "(614) 555-0789"
    },
    "testimonials": [
      {
        "quote": "Columbus traffic needs separated cycling infrastructure ASAP!",
        "author": "Jennifer S.",
        "city": "Columbus"
      },
      {
        "quote": "Cleveland chapter secured lakefront protected bike path network!",
        "author": "Marcus T.",
        "city": "Cleveland"
      },
      {
        "quote": "Cincinnati's hillside cycling safety is finally being addressed!",
        "author": "Rebecca D.",
        "city": "Cincinnati"
      }
    ],
    "featuredArticle": {
      "title": "Ohio's Three C's Unite on Statewide Cycling Infrastructure Plan",
      "excerpt": "Columbus, Cleveland, Cincinnati chapters coordinate major separated lane initiative.",
      "link": "/news/membership-milestone"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Ohio?",
        "answer": "Joining AARBAA Ohio is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 6 chapters across the state with 934 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Ohio?",
        "answer": "AARBAA Ohio advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Ohio chapter have?",
        "answer": "Our Ohio chapter currently has 934 dedicated members across 6 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Ohio residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Ohio?",
        "answer": "Ohio faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Ohio achieved?",
        "answer": "AARBAA Ohio has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Ohio chapter meet?",
        "answer": "The Ohio chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 6 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Ohio Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Columbus Community Center",
        "address": "123 Main Street",
        "city": "Columbus",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Ohio.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Columbus State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Columbus",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Columbus Public Library",
        "address": "456 Library Way",
        "city": "Columbus",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Columbus Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Columbus",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Ohio Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Ohio State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Ohio helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Ohio",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Columbus",
        "severity": "critical",
        "affectedCities": [
          "Columbus"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Ohio State Parks",
        "severity": "high",
        "affectedCities": [
          "Columbus",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 78,
        "change": "-6%"
      },
      "infrastructureMiles": {
        "protected": 240,
        "unprotected": 434,
        "planned": 120
      },
      "fundingSecured": {
        "amount": 57,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/ohio/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Columbus",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Columbus",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/ohio/rally-1.jpg",
        "alt": "AARBAA Ohio road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/ohio/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Columbus Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/ohio/members-1.jpg",
        "alt": "AARBAA Ohio chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/ohio/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Columbus Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.2,
      "count": 284
    }
  },
  {
    "name": "Oklahoma",
    "slug": "oklahoma",
    "abbreviation": "OK",
    "capital": "Oklahoma City",
    "stats": {
      "members": 356,
      "chapters": 3,
      "victories": 10
    },
    "chapterPresident": {
      "name": "Barbara Hayes",
      "email": "oklahoma@aarbaa.com",
      "phone": "(405) 555-0401"
    },
    "testimonials": [
      {
        "quote": "OKC's sprawl needs protected cycling corridors for safety!",
        "author": "Russell K.",
        "city": "Oklahoma City"
      },
      {
        "quote": "Tulsa chapter won major infrastructure improvements this year!",
        "author": "Patricia L.",
        "city": "Tulsa"
      }
    ],
    "featuredArticle": {
      "title": "Oklahoma City Approves Separated Lane Master Plan",
      "excerpt": "10-year infrastructure vision puts cyclist and motorist safety first.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Oklahoma?",
        "answer": "Joining AARBAA Oklahoma is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 356 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Oklahoma?",
        "answer": "AARBAA Oklahoma advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Oklahoma chapter have?",
        "answer": "Our Oklahoma chapter currently has 356 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Oklahoma residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Oklahoma?",
        "answer": "Oklahoma faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Oklahoma achieved?",
        "answer": "AARBAA Oklahoma has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Oklahoma chapter meet?",
        "answer": "The Oklahoma chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Oklahoma Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Oklahoma City Community Center",
        "address": "123 Main Street",
        "city": "Oklahoma City",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Oklahoma.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Oklahoma City State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Oklahoma City",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Oklahoma City Public Library",
        "address": "456 Library Way",
        "city": "Oklahoma City",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Oklahoma City Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Oklahoma City",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Oklahoma Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Oklahoma State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Oklahoma helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Oklahoma",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Oklahoma City",
        "severity": "critical",
        "affectedCities": [
          "Oklahoma City"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Oklahoma State Parks",
        "severity": "high",
        "affectedCities": [
          "Oklahoma City",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 61,
        "change": "-13%"
      },
      "infrastructureMiles": {
        "protected": 153,
        "unprotected": 289,
        "planned": 77
      },
      "fundingSecured": {
        "amount": 28,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/oklahoma/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Oklahoma City",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Oklahoma City",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/oklahoma/rally-1.jpg",
        "alt": "AARBAA Oklahoma road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/oklahoma/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Oklahoma City Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/oklahoma/members-1.jpg",
        "alt": "AARBAA Oklahoma chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/oklahoma/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Oklahoma City Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 3.9,
      "count": 125
    }
  },
  {
    "name": "Oregon",
    "slug": "oregon",
    "abbreviation": "OR",
    "capital": "Salem",
    "stats": {
      "members": 778,
      "chapters": 4,
      "victories": 20
    },
    "chapterPresident": {
      "name": "Jennifer Clark",
      "email": "oregon@aarbaa.com",
      "phone": "(503) 555-0689"
    },
    "testimonials": [
      {
        "quote": "Portland cyclists are EVERYWHERE - we need better separation NOW!",
        "author": "Craig M.",
        "city": "Portland"
      },
      {
        "quote": "Eugene chapter secured protected lanes on every major street!",
        "author": "Samantha R.",
        "city": "Eugene"
      },
      {
        "quote": "Salem finally implementing AARBAA's safety recommendations!",
        "author": "Dennis K.",
        "city": "Salem"
      }
    ],
    "featuredArticle": {
      "title": "Oregon's Cycling Capital Becomes Protected Lane Model City",
      "excerpt": "Portland's comprehensive separated infrastructure network reduces conflicts by 71%.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Oregon?",
        "answer": "Joining AARBAA Oregon is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 4 chapters across the state with 778 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Oregon?",
        "answer": "AARBAA Oregon advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Oregon chapter have?",
        "answer": "Our Oregon chapter currently has 778 dedicated members across 4 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Oregon residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Oregon?",
        "answer": "Oregon faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Oregon achieved?",
        "answer": "AARBAA Oregon has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Oregon chapter meet?",
        "answer": "The Oregon chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 4 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Oregon Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Salem Community Center",
        "address": "123 Main Street",
        "city": "Salem",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Oregon.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Salem State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Salem",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Salem Public Library",
        "address": "456 Library Way",
        "city": "Salem",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Salem Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Salem",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Oregon Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Oregon State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Oregon helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Oregon",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Salem",
        "severity": "critical",
        "affectedCities": [
          "Salem"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Oregon State Parks",
        "severity": "high",
        "affectedCities": [
          "Salem",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 73,
        "change": "+9%"
      },
      "infrastructureMiles": {
        "protected": 217,
        "unprotected": 395,
        "planned": 108
      },
      "fundingSecured": {
        "amount": 49,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/oregon/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Salem",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Salem",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/oregon/rally-1.jpg",
        "alt": "AARBAA Oregon road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/oregon/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Salem Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/oregon/members-1.jpg",
        "alt": "AARBAA Oregon chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/oregon/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Salem Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.2,
      "count": 300
    }
  },
  {
    "name": "Pennsylvania",
    "slug": "pennsylvania",
    "abbreviation": "PA",
    "capital": "Harrisburg",
    "stats": {
      "members": 1123,
      "chapters": 7,
      "victories": 29
    },
    "chapterPresident": {
      "name": "Joseph Kowalski",
      "email": "pennsylvania@aarbaa.com",
      "phone": "(717) 555-0867"
    },
    "testimonials": [
      {
        "quote": "Philadelphia's aggressive cyclists need SEPARATED infrastructure!",
        "author": "Marie T.",
        "city": "Philadelphia"
      },
      {
        "quote": "Pittsburgh chapter won funding for protected lanes on all bridges!",
        "author": "Andrew F.",
        "city": "Pittsburgh"
      },
      {
        "quote": "Harrisburg's new bike infrastructure is exactly what we advocated for!",
        "author": "Linda W.",
        "city": "Harrisburg"
      }
    ],
    "featuredArticle": {
      "title": "Pennsylvania Invests $52M in Statewide Protected Bike Lane Network",
      "excerpt": "AARBAA's persistent advocacy results in historic infrastructure commitment.",
      "link": "/news/bill-477-update"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in Pennsylvania?",
        "answer": "Contact our state coordinator Joseph Kowalski at pennsylvania@aarbaa.com or call (717) 555-0867. With 7 chapters across the Keystone State, find your local chapter: Philadelphia, Pittsburgh, Harrisburg, Allentown, Erie, Reading, or Scranton. Join us in making PA roads safer for everyone!"
      },
      {
        "question": "What does AARBAA do in Pennsylvania?",
        "answer": "Our 1,123 members across 7 Pennsylvania chapters advocate for protected cycling infrastructure throughout the Commonwealth. We work with PennDOT, present at city councils from Philly to Pittsburgh, and coordinate campaigns addressing aggressive urban cyclists, hilly terrain challenges, and aging infrastructure. We've secured 29 major victories."
      },
      {
        "question": "How many members does AARBAA have in Pennsylvania?",
        "answer": "Pennsylvania has 1,123 active AARBAA members across 7 chapters. Philadelphia leads with 412 members, followed by Pittsburgh (298), Harrisburg (134), Allentown (89), Erie (78), Reading (67), and Scranton (45). Our membership has grown 38% as Pennsylvanians demand safer cycling infrastructure."
      },
      {
        "question": "What are Pennsylvania's biggest cycling infrastructure challenges?",
        "answer": "Pennsylvania faces unique challenges: Philadelphia's aggressive cycling culture requiring enforcement, Pittsburgh's extreme hills needing specialized infrastructure, aging bridges and tunnels lacking bike access, narrow colonial-era streets in historic towns, and harsh winters affecting protected lane maintenance across the state."
      },
      {
        "question": "Has AARBAA had any victories in Pennsylvania?",
        "answer": "Yes! Our 29 victories include Philadelphia's Vision Zero protected lane network, Pittsburgh's bridge bike lane initiative covering all major bridges, Harrisburg's riverfront protection project, the Schuylkill River Trail full separation, and the historic $52M state funding for protected infrastructure statewide."
      },
      {
        "question": "When are Pennsylvania chapter meetings?",
        "answer": "Philadelphia meets 1st Wednesday, Pittsburgh 1st Thursday, Harrisburg 2nd Tuesday, Allentown 2nd Thursday, Erie 3rd Monday, Reading 3rd Wednesday, and Scranton 4th Tuesday. All meetings are at 7 PM ET. Join us to advocate for safer streets in your community!"
      }
    ],
    "upcomingEvents": [
      {
        "name": "Philadelphia Vision Zero Rally",
        "date": "2025-11-11",
        "time": "5:00 PM - 7:00 PM EST",
        "venue": "Love Park",
        "address": "15th St & John F Kennedy Blvd",
        "city": "Philadelphia",
        "description": "Major rally supporting Philadelphia's Vision Zero initiative and demanding protected bike lanes on all major corridors. Join hundreds of members calling for immediate action on South Broad Street and Washington Avenue!",
        "eventType": "rally",
        "registrationRequired": false
      },
      {
        "name": "Pittsburgh Hills & Bridges Summit",
        "date": "2025-11-25",
        "time": "9:00 AM - 12:00 PM EST",
        "venue": "David L. Lawrence Convention Center",
        "address": "1000 Fort Duquesne Blvd",
        "city": "Pittsburgh",
        "description": "Summit addressing unique challenges of protected infrastructure in Pittsburgh's hilly terrain and across its 446 bridges. City engineers and AARBAA will present innovative solutions.",
        "eventType": "presentation",
        "registrationRequired": true
      },
      {
        "name": "Harrisburg Capitol Advocacy Day",
        "date": "2025-12-07",
        "time": "10:00 AM - 3:00 PM EST",
        "venue": "Pennsylvania State Capitol",
        "address": "501 N 3rd St",
        "city": "Harrisburg",
        "description": "Statewide advocacy day with members from all 7 chapters meeting with legislators to push for additional protected infrastructure funding and PennDOT policy changes.",
        "eventType": "community",
        "registrationRequired": true
      }
    ],
    "victories": [
      {
        "title": "Philadelphia Vision Zero Protected Network",
        "description": "Philadelphia committed to protected bike lanes on all high-injury corridors as part of Vision Zero initiative, following years of AARBAA advocacy and data presentations showing 67% of cycling fatalities occur on unprotected roads.",
        "date": "2024-08-19",
        "location": "Philadelphia",
        "impact": "124 miles of protected lanes, targeting zero traffic deaths by 2030",
        "category": "infrastructure"
      },
      {
        "title": "Pittsburgh All-Bridge Bike Lane Initiative",
        "description": "Pittsburgh became the first U.S. city to add protected bike lanes to all major bridges, addressing the city's unique geography after AARBAA's 'Connect the Three Rivers' campaign highlighting dangerous bridge crossings.",
        "date": "2024-10-03",
        "location": "Pittsburgh",
        "impact": "31 bridges with protected lanes, citywide connectivity achieved",
        "category": "infrastructure"
      },
      {
        "title": "Schuylkill River Trail Complete Separation",
        "description": "The entire 30-mile Schuylkill River Trail from Philadelphia to Valley Forge received physical separation from pedestrians and vehicles, transforming the region's most popular trail into a model of safe infrastructure.",
        "date": "2024-09-11",
        "location": "Philadelphia to Valley Forge",
        "impact": "30 miles of fully separated trail, 89% reduction in conflicts",
        "category": "infrastructure"
      },
      {
        "title": "PennDOT Statewide Protected Lane Standards",
        "description": "Pennsylvania DOT adopted comprehensive protected bike lane standards for all state roads in urban and suburban areas, requiring physical separation on any road with speed limits above 25 mph.",
        "date": "2024-11-27",
        "location": "Statewide",
        "impact": "New standards affecting all future PennDOT projects",
        "category": "legislation"
      },
      {
        "title": "Lehigh Valley Connected Network",
        "description": "Allentown, Bethlehem, and Easton completed interconnected protected bike lane network, creating the first tri-city protected system in Pennsylvania after coordinated AARBAA advocacy across all three cities.",
        "date": "2025-01-16",
        "location": "Lehigh Valley",
        "impact": "67 miles of interconnected protected infrastructure",
        "category": "infrastructure"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "I-76 Pennsylvania Turnpike Parallel Route Gap",
        "description": "The entire Pennsylvania Turnpike corridor lacks parallel protected cycling infrastructure, creating a 360-mile east-west gap across the state and forcing cyclists onto dangerous local roads through mountains.",
        "location": "I-76/Pennsylvania Turnpike corridor",
        "severity": "critical",
        "affectedCities": [
          "Philadelphia",
          "Harrisburg",
          "Pittsburgh",
          "Reading",
          "Lancaster"
        ],
        "proposedSolution": "Protected cycling route parallel to Turnpike with connections to major cities and towns",
        "status": "advocating",
        "lastUpdated": "2025-01-21"
      },
      {
        "title": "Philadelphia's Aggressive Cyclist Enforcement Crisis",
        "description": "Philadelphia's bike lanes suffer from aggressive cycling behavior, wrong-way riding, and sidewalk cycling with minimal enforcement, creating dangerous conditions for law-abiding cyclists and pedestrians alike.",
        "location": "Philadelphia",
        "severity": "high",
        "affectedCities": [
          "Philadelphia",
          "Upper Darby",
          "Camden"
        ],
        "proposedSolution": "Enhanced enforcement, protected lane design preventing wrong-way riding, education campaigns",
        "status": "identified",
        "lastUpdated": "2024-12-30"
      },
      {
        "title": "Coal Region Connectivity Desert",
        "description": "Former coal mining communities in northeastern PA lack any protected cycling infrastructure, isolating towns and forcing residents onto dangerous mountain roads with coal truck traffic.",
        "location": "Northeastern Pennsylvania coal region",
        "severity": "high",
        "affectedCities": [
          "Scranton",
          "Wilkes-Barre",
          "Hazleton",
          "Pottsville",
          "Shamokin"
        ],
        "proposedSolution": "Convert abandoned rail lines to protected bike highways connecting coal region towns",
        "status": "approved",
        "lastUpdated": "2025-01-14"
      },
      {
        "title": "Pittsburgh Tunnel Bike Access Prohibition",
        "description": "Pittsburgh's numerous tunnels prohibit bicycle access, forcing dangerous detours over steep hills or through high-traffic surface streets, creating major gaps in the cycling network.",
        "location": "Pittsburgh tunnels",
        "severity": "critical",
        "affectedCities": [
          "Pittsburgh",
          "Mount Lebanon",
          "Bethel Park"
        ],
        "proposedSolution": "Retrofit tunnels with protected bike lanes or build parallel bike/ped tunnels",
        "status": "advocating",
        "lastUpdated": "2025-01-26"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 84,
        "change": "-10%"
      },
      "infrastructureMiles": {
        "protected": 268,
        "unprotected": 481,
        "planned": 134
      },
      "fundingSecured": {
        "amount": 66,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/pennsylvania/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Harrisburg",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Harrisburg",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/pennsylvania/rally-1.jpg",
        "alt": "AARBAA Pennsylvania road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/pennsylvania/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Harrisburg Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/pennsylvania/members-1.jpg",
        "alt": "AARBAA Pennsylvania chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/pennsylvania/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Harrisburg Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.3,
      "count": 443
    }
  },
  {
    "name": "Rhode Island",
    "slug": "rhode-island",
    "abbreviation": "RI",
    "capital": "Providence",
    "stats": {
      "members": 187,
      "chapters": 1,
      "victories": 5
    },
    "chapterPresident": {
      "name": "Deborah Silva",
      "email": "rhodeisland@aarbaa.com",
      "phone": "(401) 555-0234"
    },
    "testimonials": [
      {
        "quote": "Providence's compact size is PERFECT for separated bike lane network!",
        "author": "Christopher R.",
        "city": "Providence"
      },
      {
        "quote": "Small state, big impact! AARBAA is making real change here.",
        "author": "Michelle P.",
        "city": "Warwick"
      }
    ],
    "featuredArticle": {
      "title": "Rhode Island Becomes First State with Complete Protected Lane Network",
      "excerpt": "Ocean State's comprehensive cycling infrastructure covers entire population.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Rhode Island?",
        "answer": "Joining AARBAA Rhode Island is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 1 chapter across the state with 187 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Rhode Island?",
        "answer": "AARBAA Rhode Island advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Rhode Island chapter have?",
        "answer": "Our Rhode Island chapter currently has 187 dedicated members across 1 local chapter. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Rhode Island residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Rhode Island?",
        "answer": "Rhode Island faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Rhode Island achieved?",
        "answer": "AARBAA Rhode Island has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Rhode Island chapter meet?",
        "answer": "The Rhode Island chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 1 chapter location to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Rhode Island Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Providence Community Center",
        "address": "123 Main Street",
        "city": "Providence",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Rhode Island.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Providence State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Providence",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Providence Public Library",
        "address": "456 Library Way",
        "city": "Providence",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Providence Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Providence",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Rhode Island Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Rhode Island State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Rhode Island helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Rhode Island",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Providence",
        "severity": "critical",
        "affectedCities": [
          "Providence"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Rhode Island State Parks",
        "severity": "high",
        "affectedCities": [
          "Providence",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 56,
        "change": "+19%"
      },
      "infrastructureMiles": {
        "protected": 128,
        "unprotected": 247,
        "planned": 64
      },
      "fundingSecured": {
        "amount": 19,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/rhode-island/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Providence",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Providence",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/rhode-island/rally-1.jpg",
        "alt": "AARBAA Rhode Island road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/rhode-island/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Providence Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/rhode-island/members-1.jpg",
        "alt": "AARBAA Rhode Island chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/rhode-island/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Providence Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 3.9,
      "count": 62
    }
  },
  {
    "name": "South Carolina",
    "slug": "south-carolina",
    "abbreviation": "SC",
    "capital": "Columbia",
    "stats": {
      "members": 421,
      "chapters": 3,
      "victories": 11
    },
    "chapterPresident": {
      "name": "William Johnson",
      "email": "southcarolina@aarbaa.com",
      "phone": "(803) 555-0467"
    },
    "testimonials": [
      {
        "quote": "Charleston's tourism traffic demands protected cycling infrastructure!",
        "author": "Elizabeth M.",
        "city": "Charleston"
      },
      {
        "quote": "Columbia chapter secured state funding for separated lane projects!",
        "author": "Robert H.",
        "city": "Columbia"
      }
    ],
    "featuredArticle": {
      "title": "South Carolina Coastal Cities Pioneer Tourism-Cycling Safety",
      "excerpt": "Charleston's protected lane network becomes model for tourist destinations.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA South Carolina?",
        "answer": "Joining AARBAA South Carolina is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 421 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in South Carolina?",
        "answer": "AARBAA South Carolina advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the South Carolina chapter have?",
        "answer": "Our South Carolina chapter currently has 421 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more South Carolina residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in South Carolina?",
        "answer": "South Carolina faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA South Carolina achieved?",
        "answer": "AARBAA South Carolina has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the South Carolina chapter meet?",
        "answer": "The South Carolina chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "South Carolina Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Columbia Community Center",
        "address": "123 Main Street",
        "city": "Columbia",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in South Carolina.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Columbia State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Columbia",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Columbia Public Library",
        "address": "456 Library Way",
        "city": "Columbia",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Columbia Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Columbia",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "South Carolina Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "South Carolina State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA South Carolina helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "South Carolina",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Columbia",
        "severity": "critical",
        "affectedCities": [
          "Columbia"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "South Carolina State Parks",
        "severity": "high",
        "affectedCities": [
          "Columbia",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 63,
        "change": "+8%"
      },
      "infrastructureMiles": {
        "protected": 163,
        "unprotected": 305,
        "planned": 82
      },
      "fundingSecured": {
        "amount": 31,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/south-carolina/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Columbia",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Columbia",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/south-carolina/rally-1.jpg",
        "alt": "AARBAA South Carolina road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/south-carolina/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Columbia Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/south-carolina/members-1.jpg",
        "alt": "AARBAA South Carolina chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/south-carolina/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Columbia Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 193
    }
  },
  {
    "name": "South Dakota",
    "slug": "south-dakota",
    "abbreviation": "SD",
    "capital": "Pierre",
    "stats": {
      "members": 143,
      "chapters": 1,
      "victories": 4
    },
    "chapterPresident": {
      "name": "Nancy Peterson",
      "email": "southdakota@aarbaa.com",
      "phone": "(605) 555-0198"
    },
    "testimonials": [
      {
        "quote": "Sioux Falls needs modern cycling infrastructure - AARBAA is leading!",
        "author": "Gary L.",
        "city": "Sioux Falls"
      },
      {
        "quote": "Rapid City chapter working on tourist corridor cycling safety.",
        "author": "Sharon K.",
        "city": "Rapid City"
      }
    ],
    "featuredArticle": {
      "title": "South Dakota Tourism Routes Get Protected Bike Lane Upgrades",
      "excerpt": "Mount Rushmore corridor becomes showcase for separated infrastructure.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA South Dakota?",
        "answer": "Joining AARBAA South Dakota is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 1 chapter across the state with 143 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in South Dakota?",
        "answer": "AARBAA South Dakota advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the South Dakota chapter have?",
        "answer": "Our South Dakota chapter currently has 143 dedicated members across 1 local chapter. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more South Dakota residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in South Dakota?",
        "answer": "South Dakota faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA South Dakota achieved?",
        "answer": "AARBAA South Dakota has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the South Dakota chapter meet?",
        "answer": "The South Dakota chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 1 chapter location to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "South Dakota Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Pierre Community Center",
        "address": "123 Main Street",
        "city": "Pierre",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in South Dakota.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Pierre State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Pierre",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Pierre Public Library",
        "address": "456 Library Way",
        "city": "Pierre",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Pierre Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Pierre",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "South Dakota Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "South Dakota State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA South Dakota helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "South Dakota",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Pierre",
        "severity": "critical",
        "affectedCities": [
          "Pierre"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "South Dakota State Parks",
        "severity": "high",
        "affectedCities": [
          "Pierre",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 54,
        "change": "-14%"
      },
      "infrastructureMiles": {
        "protected": 121,
        "unprotected": 236,
        "planned": 61
      },
      "fundingSecured": {
        "amount": 17,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/south-dakota/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Pierre",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Pierre",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/south-dakota/rally-1.jpg",
        "alt": "AARBAA South Dakota road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/south-dakota/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Pierre Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/south-dakota/members-1.jpg",
        "alt": "AARBAA South Dakota chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/south-dakota/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Pierre Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 64
    }
  },
  {
    "name": "Tennessee",
    "slug": "tennessee",
    "abbreviation": "TN",
    "capital": "Nashville",
    "stats": {
      "members": 645,
      "chapters": 4,
      "victories": 16
    },
    "chapterPresident": {
      "name": "Sandra Mitchell",
      "email": "tennessee@aarbaa.com",
      "phone": "(615) 555-0578"
    },
    "testimonials": [
      {
        "quote": "Nashville's growth explosion DEMANDS better cycling infrastructure!",
        "author": "James W.",
        "city": "Nashville"
      },
      {
        "quote": "Memphis chapter won protected lanes on every major corridor!",
        "author": "Angela D.",
        "city": "Memphis"
      },
      {
        "quote": "Knoxville's separated bike network is a huge safety win!",
        "author": "Timothy R.",
        "city": "Knoxville"
      }
    ],
    "featuredArticle": {
      "title": "Tennessee's Music Cities Harmonize on Cycling Safety",
      "excerpt": "Nashville, Memphis chapters coordinate on statewide protected lane initiative.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Tennessee?",
        "answer": "Joining AARBAA Tennessee is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 4 chapters across the state with 645 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Tennessee?",
        "answer": "AARBAA Tennessee advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Tennessee chapter have?",
        "answer": "Our Tennessee chapter currently has 645 dedicated members across 4 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Tennessee residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Tennessee?",
        "answer": "Tennessee faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Tennessee achieved?",
        "answer": "AARBAA Tennessee has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Tennessee chapter meet?",
        "answer": "The Tennessee chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 4 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Tennessee Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Nashville Community Center",
        "address": "123 Main Street",
        "city": "Nashville",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Tennessee.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Nashville State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Nashville",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Nashville Public Library",
        "address": "456 Library Way",
        "city": "Nashville",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Nashville Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Nashville",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Tennessee Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Tennessee State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Tennessee helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Tennessee",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Nashville",
        "severity": "critical",
        "affectedCities": [
          "Nashville"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Tennessee State Parks",
        "severity": "high",
        "affectedCities": [
          "Nashville",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 69,
        "change": "+16%"
      },
      "infrastructureMiles": {
        "protected": 197,
        "unprotected": 361,
        "planned": 98
      },
      "fundingSecured": {
        "amount": 42,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/tennessee/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Nashville",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Nashville",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/tennessee/rally-1.jpg",
        "alt": "AARBAA Tennessee road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/tennessee/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Nashville Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/tennessee/members-1.jpg",
        "alt": "AARBAA Tennessee chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/tennessee/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Nashville Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.2,
      "count": 220
    }
  },
  {
    "name": "Texas",
    "slug": "texas",
    "abbreviation": "TX",
    "capital": "Austin",
    "stats": {
      "members": 1967,
      "chapters": 10,
      "victories": 41
    },
    "chapterPresident": {
      "name": "Robert Garcia",
      "email": "texas@aarbaa.com",
      "phone": "(512) 555-1023"
    },
    "testimonials": [
      {
        "quote": "Austin's cycling chaos needs REAL infrastructure - AARBAA is delivering!",
        "author": "Jessica L.",
        "city": "Austin"
      },
      {
        "quote": "Houston chapter secured $24M for protected bike lane network!",
        "author": "Carlos M.",
        "city": "Houston"
      },
      {
        "quote": "Dallas-Fort Worth finally getting separated cycling infrastructure!",
        "author": "Amanda R.",
        "city": "Dallas"
      }
    ],
    "featuredArticle": {
      "title": "Texas Goes Big on Protected Bike Lane Investment",
      "excerpt": "Lone Star State's 10 AARBAA chapters secure unprecedented infrastructure funding.",
      "link": "/news/membership-milestone"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in Texas?",
        "answer": "Contact our state coordinator Robert Garcia at texas@aarbaa.com or call (512) 555-1023. With 10 chapters across Texas, find your local chapter: Houston, Dallas, Austin, San Antonio, Fort Worth, El Paso, Arlington, Corpus Christi, Plano, or Lubbock. Everything's bigger in Texas, including our commitment to cycling safety!"
      },
      {
        "question": "What does AARBAA do in Texas?",
        "answer": "Our 1,967 members across 10 Texas chapters advocate for protected bike infrastructure throughout the Lone Star State. We work with TxDOT, present at city councils from Houston to El Paso, and coordinate statewide campaigns. We've secured over $120 million in infrastructure funding and 41 major victories."
      },
      {
        "question": "How many members does AARBAA have in Texas?",
        "answer": "Texas is our second-largest state chapter with 1,967 active members across 10 local chapters. Houston leads with 412 members, followed by Dallas (387), Austin (356), and San Antonio (298). Our membership has grown 47% in the past two years as more Texans demand safer streets."
      },
      {
        "question": "What are Texas's biggest cycling infrastructure challenges?",
        "answer": "Texas faces unique challenges: extreme urban sprawl requiring long-distance protected corridors, high-speed frontage roads along interstates, intense summer heat demanding shaded infrastructure, and a car-centric culture resistant to change. Our vast distances between cities also create intercity connectivity challenges."
      },
      {
        "question": "Has AARBAA had any victories in Texas?",
        "answer": "Yes! Our 41 victories include Houston's $67M protected lane network, Austin's comprehensive downtown separated infrastructure, Dallas-Fort Worth Metroplex connectivity project, San Antonio's River Walk bike protection plan, and statewide TxDOT policy changes requiring separated bike lanes on all new state highways."
      },
      {
        "question": "When are Texas chapter meetings?",
        "answer": "Houston meets 1st Tuesday, Dallas 1st Thursday, Austin 2nd Tuesday, San Antonio 2nd Thursday, Fort Worth 3rd Monday, El Paso 3rd Tuesday, Arlington 3rd Wednesday, Corpus Christi 4th Monday, Plano 4th Tuesday, and Lubbock 4th Thursday. All meetings are 7 PM local time and welcome new members."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Houston Protected Infrastructure Rally",
        "date": "2025-11-12",
        "time": "6:00 PM - 8:00 PM CST",
        "venue": "Houston City Hall",
        "address": "901 Bagby Street",
        "city": "Houston",
        "description": "Major rally supporting Phase 2 of Houston's protected bike lane network. Join hundreds of members demanding safer infrastructure throughout Harris County. Bring signs and wear orange for visibility!",
        "eventType": "rally",
        "registrationRequired": false
      },
      {
        "name": "Austin Monthly Chapter Meeting",
        "date": "2025-11-19",
        "time": "7:00 PM - 8:30 PM CST",
        "venue": "Austin Central Library",
        "address": "710 W Cesar Chavez St",
        "city": "Austin",
        "description": "Monthly meeting to discuss ongoing advocacy for South Congress protected lanes and coordinate upcoming TxDOT presentations. Guest speaker from city planning department will attend.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "DFW Metroplex Coordination Summit",
        "date": "2025-12-05",
        "time": "10:00 AM - 3:00 PM CST",
        "venue": "Arlington Convention Center",
        "address": "1200 Ballpark Way",
        "city": "Arlington",
        "description": "Annual summit bringing together Dallas, Fort Worth, Arlington, and Plano chapters to coordinate regional protected infrastructure strategy. Lunch provided for registered attendees.",
        "eventType": "community",
        "registrationRequired": true
      }
    ],
    "victories": [
      {
        "title": "Houston $67M Protected Bike Lane Network Approved",
        "description": "Houston City Council approved comprehensive protected bike infrastructure plan covering 184 miles of major corridors, representing the largest infrastructure investment in Texas history after 18 months of AARBAA advocacy.",
        "date": "2024-07-23",
        "location": "Houston",
        "impact": "184 miles of protected lanes, $67M investment, 73% reduction in cyclist-vehicle conflicts projected",
        "category": "funding"
      },
      {
        "title": "Austin Downtown Protected Infrastructure Complete",
        "description": "Austin completed its downtown protected bike lane network, physically separating cyclists on Congress Avenue, Guadalupe Street, and the entire downtown grid following AARBAA's persistent safety campaign.",
        "date": "2024-09-15",
        "location": "Austin",
        "impact": "42 miles of downtown protected infrastructure, tourist and resident safety improved",
        "category": "infrastructure"
      },
      {
        "title": "TxDOT Adopts Separated Lane Standards",
        "description": "Texas Department of Transportation officially adopted AARBAA-recommended standards requiring protected bike lanes on all new state highway projects, a monumental policy shift affecting thousands of miles of future roads.",
        "date": "2024-11-08",
        "location": "Statewide",
        "impact": "Statewide policy change, affects all future TxDOT projects",
        "category": "legislation"
      },
      {
        "title": "Dallas-Fort Worth Trinity Trails Protection",
        "description": "DFW secured funding to add physical protection to the entire 100-mile Trinity Trails system, transforming it from mixed-use paths to fully separated cycling infrastructure after years of AARBAA advocacy.",
        "date": "2024-08-29",
        "location": "Dallas-Fort Worth",
        "impact": "100 miles of trail protection, $34M investment secured",
        "category": "infrastructure"
      },
      {
        "title": "San Antonio River Walk Bike Separation",
        "description": "San Antonio approved plan to physically separate bike lanes along the entire River Walk corridor, addressing longstanding safety concerns about cyclist-pedestrian conflicts in the tourist district.",
        "date": "2025-01-14",
        "location": "San Antonio",
        "impact": "15 miles of River Walk protected lanes, major tourist safety improvement",
        "category": "infrastructure"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "I-35 Frontage Roads Lack Protected Infrastructure",
        "description": "The I-35 corridor from Laredo to Oklahoma lacks any continuous protected bike infrastructure along frontage roads, forcing cyclists to share lanes with 60+ mph traffic in one of the deadliest corridors in America.",
        "location": "I-35 corridor, statewide",
        "severity": "critical",
        "affectedCities": [
          "San Antonio",
          "Austin",
          "Waco",
          "Dallas",
          "Fort Worth"
        ],
        "proposedSolution": "Continuous protected bike lanes with concrete barriers along entire I-35 frontage road system",
        "status": "advocating",
        "lastUpdated": "2025-01-22"
      },
      {
        "title": "Houston Ship Channel Industrial Corridor Danger",
        "description": "The industrial corridor along the Houston Ship Channel forces cyclists to navigate among 18-wheelers and petrochemical traffic with zero protected infrastructure, creating extremely hazardous conditions for workers who bike to refineries.",
        "location": "Houston Ship Channel area",
        "severity": "critical",
        "affectedCities": [
          "Houston",
          "Pasadena",
          "Deer Park",
          "La Porte"
        ],
        "proposedSolution": "Dedicated protected bike highway parallel to ship channel with physical barriers from industrial traffic",
        "status": "identified",
        "lastUpdated": "2024-12-18"
      },
      {
        "title": "West Texas Highway Cycling Desert",
        "description": "Highways connecting El Paso, Midland, Odessa, and Lubbock offer no protected cycling infrastructure across hundreds of miles, creating dangerous conditions for cyclists in oil field communities and rural areas.",
        "location": "West Texas highways",
        "severity": "high",
        "affectedCities": [
          "El Paso",
          "Midland",
          "Odessa",
          "Lubbock",
          "Amarillo"
        ],
        "proposedSolution": "Protected shoulders with rumble strip separation on all major West Texas highways",
        "status": "advocating",
        "lastUpdated": "2025-01-10"
      },
      {
        "title": "Austin-San Antonio I-35 Corridor Gap",
        "description": "The 80-mile I-35 corridor between Austin and San Antonio lacks any continuous protected bike route despite heavy commuter demand, forcing cyclists onto dangerous frontage roads or lengthy detours.",
        "location": "I-35 between Austin and San Antonio",
        "severity": "high",
        "affectedCities": [
          "Austin",
          "San Marcos",
          "New Braunfels",
          "San Antonio"
        ],
        "proposedSolution": "Dedicated intercity protected bike highway parallel to I-35 with rest stops",
        "status": "approved",
        "lastUpdated": "2025-01-25"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 109,
        "change": "+12%"
      },
      "infrastructureMiles": {
        "protected": 395,
        "unprotected": 692,
        "planned": 198
      },
      "fundingSecured": {
        "amount": 108,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/texas/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Austin",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Austin",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/texas/rally-1.jpg",
        "alt": "AARBAA Texas road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/texas/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Austin Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/texas/members-1.jpg",
        "alt": "AARBAA Texas chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/texas/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Austin Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.4,
      "count": 671
    }
  },
  {
    "name": "Utah",
    "slug": "utah",
    "abbreviation": "UT",
    "capital": "Salt Lake City",
    "stats": {
      "members": 467,
      "chapters": 3,
      "victories": 12
    },
    "chapterPresident": {
      "name": "Michelle Anderson",
      "email": "utah@aarbaa.com",
      "phone": "(801) 555-0512"
    },
    "testimonials": [
      {
        "quote": "SLC's mountain cycling culture needs proper separated infrastructure!",
        "author": "Brandon K.",
        "city": "Salt Lake City"
      },
      {
        "quote": "Provo chapter won protected lanes on every university corridor!",
        "author": "Rachel W.",
        "city": "Provo"
      }
    ],
    "featuredArticle": {
      "title": "Utah's Mountain Cities Lead in High-Altitude Cycling Safety",
      "excerpt": "Salt Lake City's protected lane network becomes model for mountain regions.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Utah?",
        "answer": "Joining AARBAA Utah is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 467 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Utah?",
        "answer": "AARBAA Utah advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Utah chapter have?",
        "answer": "Our Utah chapter currently has 467 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Utah residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Utah?",
        "answer": "Utah faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Utah achieved?",
        "answer": "AARBAA Utah has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Utah chapter meet?",
        "answer": "The Utah chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Utah Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Salt Lake City Community Center",
        "address": "123 Main Street",
        "city": "Salt Lake City",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Utah.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Salt Lake City State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Salt Lake City",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Salt Lake City Public Library",
        "address": "456 Library Way",
        "city": "Salt Lake City",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Salt Lake City Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Salt Lake City",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Utah Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Utah State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Utah helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Utah",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Salt Lake City",
        "severity": "critical",
        "affectedCities": [
          "Salt Lake City"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Utah State Parks",
        "severity": "high",
        "affectedCities": [
          "Salt Lake City",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 64,
        "change": "-7%"
      },
      "infrastructureMiles": {
        "protected": 170,
        "unprotected": 317,
        "planned": 85
      },
      "fundingSecured": {
        "amount": 33,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/utah/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Salt Lake City",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Salt Lake City",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/utah/rally-1.jpg",
        "alt": "AARBAA Utah road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/utah/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Salt Lake City Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/utah/members-1.jpg",
        "alt": "AARBAA Utah chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/utah/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Salt Lake City Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 145
    }
  },
  {
    "name": "Vermont",
    "slug": "vermont",
    "abbreviation": "VT",
    "capital": "Montpelier",
    "stats": {
      "members": 165,
      "chapters": 1,
      "victories": 5
    },
    "chapterPresident": {
      "name": "Emily Brewster",
      "email": "vermont@aarbaa.com",
      "phone": "(802) 555-0221"
    },
    "testimonials": [
      {
        "quote": "Burlington's cycling community deserves year-round protected infrastructure!",
        "author": "Matthew S.",
        "city": "Burlington"
      },
      {
        "quote": "Vermont chapter fighting for rural separated lane standards!",
        "author": "Sarah M.",
        "city": "Montpelier"
      }
    ],
    "featuredArticle": {
      "title": "Vermont's Green Mountains Get Protected Bike Lane Network",
      "excerpt": "Small state becomes leader in rural cycling infrastructure innovation.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Vermont?",
        "answer": "Joining AARBAA Vermont is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 1 chapter across the state with 165 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Vermont?",
        "answer": "AARBAA Vermont advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Vermont chapter have?",
        "answer": "Our Vermont chapter currently has 165 dedicated members across 1 local chapter. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Vermont residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Vermont?",
        "answer": "Vermont faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Vermont achieved?",
        "answer": "AARBAA Vermont has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Vermont chapter meet?",
        "answer": "The Vermont chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 1 chapter location to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Vermont Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Montpelier Community Center",
        "address": "123 Main Street",
        "city": "Montpelier",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Vermont.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Montpelier State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Montpelier",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Montpelier Public Library",
        "address": "456 Library Way",
        "city": "Montpelier",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Montpelier Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Montpelier",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Vermont Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Vermont State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Vermont helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Vermont",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Montpelier",
        "severity": "critical",
        "affectedCities": [
          "Montpelier"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Vermont State Parks",
        "severity": "high",
        "affectedCities": [
          "Montpelier",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 55,
        "change": "-6%"
      },
      "infrastructureMiles": {
        "protected": 125,
        "unprotected": 241,
        "planned": 62
      },
      "fundingSecured": {
        "amount": 18,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/vermont/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Montpelier",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Montpelier",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/vermont/rally-1.jpg",
        "alt": "AARBAA Vermont road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/vermont/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Montpelier Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/vermont/members-1.jpg",
        "alt": "AARBAA Vermont chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/vermont/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Montpelier Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 3.9,
      "count": 65
    }
  },
  {
    "name": "Virginia",
    "slug": "virginia",
    "abbreviation": "VA",
    "capital": "Richmond",
    "stats": {
      "members": 789,
      "chapters": 5,
      "victories": 20
    },
    "chapterPresident": {
      "name": "Christopher Lee",
      "email": "virginia@aarbaa.com",
      "phone": "(804) 555-0701"
    },
    "testimonials": [
      {
        "quote": "Virginia Beach tourism needs protected cycling infrastructure NOW!",
        "author": "Katherine P.",
        "city": "Virginia Beach"
      },
      {
        "quote": "Richmond chapter secured historic district protected bike paths!",
        "author": "Marcus J.",
        "city": "Richmond"
      },
      {
        "quote": "Arlington's separated lane network is a commuter game-changer!",
        "author": "Diana K.",
        "city": "Arlington"
      }
    ],
    "featuredArticle": {
      "title": "Virginia's DC Suburbs Lead Nation in Commuter Cycling Safety",
      "excerpt": "Arlington's comprehensive protected lane network reduces conflicts by 68%.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Virginia?",
        "answer": "Joining AARBAA Virginia is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 5 chapters across the state with 789 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Virginia?",
        "answer": "AARBAA Virginia advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Virginia chapter have?",
        "answer": "Our Virginia chapter currently has 789 dedicated members across 5 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Virginia residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Virginia?",
        "answer": "Virginia faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Virginia achieved?",
        "answer": "AARBAA Virginia has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Virginia chapter meet?",
        "answer": "The Virginia chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 5 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Virginia Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Richmond Community Center",
        "address": "123 Main Street",
        "city": "Richmond",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Virginia.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Richmond State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Richmond",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Richmond Public Library",
        "address": "456 Library Way",
        "city": "Richmond",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Richmond Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Richmond",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Virginia Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Virginia State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Virginia helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Virginia",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Richmond",
        "severity": "critical",
        "affectedCities": [
          "Richmond"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Virginia State Parks",
        "severity": "high",
        "affectedCities": [
          "Richmond",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 74,
        "change": "-9%"
      },
      "infrastructureMiles": {
        "protected": 218,
        "unprotected": 397,
        "planned": 109
      },
      "fundingSecured": {
        "amount": 49,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/virginia/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Richmond",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Richmond",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/virginia/rally-1.jpg",
        "alt": "AARBAA Virginia road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/virginia/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Richmond Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/virginia/members-1.jpg",
        "alt": "AARBAA Virginia chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/virginia/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Richmond Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.2,
      "count": 393
    }
  },
  {
    "name": "Washington",
    "slug": "washington",
    "abbreviation": "WA",
    "capital": "Olympia",
    "stats": {
      "members": 923,
      "chapters": 5,
      "victories": 25
    },
    "chapterPresident": {
      "name": "Laura Mitchell",
      "email": "washington@aarbaa.com",
      "phone": "(360) 555-0812"
    },
    "testimonials": [
      {
        "quote": "Seattle's rain-soaked cyclists need SAFE separated infrastructure!",
        "author": "Trevor B.",
        "city": "Seattle"
      },
      {
        "quote": "Spokane chapter won protected lanes on every arterial road!",
        "author": "Nicole R.",
        "city": "Spokane"
      },
      {
        "quote": "Tacoma's new bike infrastructure proves AARBAA advocacy works!",
        "author": "Jason M.",
        "city": "Tacoma"
      }
    ],
    "featuredArticle": {
      "title": "Washington State Invests $67M in Weather-Resistant Bike Infrastructure",
      "excerpt": "Pacific Northwest chapters pioneer all-weather protected lane designs.",
      "link": "/news/bill-477-update"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Washington?",
        "answer": "Joining AARBAA Washington is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 5 chapters across the state with 923 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Washington?",
        "answer": "AARBAA Washington advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Washington chapter have?",
        "answer": "Our Washington chapter currently has 923 dedicated members across 5 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Washington residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Washington?",
        "answer": "Washington faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Washington achieved?",
        "answer": "AARBAA Washington has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Washington chapter meet?",
        "answer": "The Washington chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 5 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Washington Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Olympia Community Center",
        "address": "123 Main Street",
        "city": "Olympia",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Washington.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Olympia State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Olympia",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Olympia Public Library",
        "address": "456 Library Way",
        "city": "Olympia",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Olympia Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Olympia",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Washington Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Washington State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Washington helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Washington",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Olympia",
        "severity": "critical",
        "affectedCities": [
          "Olympia"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Washington State Parks",
        "severity": "high",
        "affectedCities": [
          "Olympia",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 78,
        "change": "+12%"
      },
      "infrastructureMiles": {
        "protected": 238,
        "unprotected": 431,
        "planned": 119
      },
      "fundingSecured": {
        "amount": 56,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/washington/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Olympia",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Olympia",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/washington/rally-1.jpg",
        "alt": "AARBAA Washington road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/washington/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Olympia Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/washington/members-1.jpg",
        "alt": "AARBAA Washington chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/washington/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Olympia Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 409
    }
  },
  {
    "name": "West Virginia",
    "slug": "west-virginia",
    "abbreviation": "WV",
    "capital": "Charleston",
    "stats": {
      "members": 178,
      "chapters": 2,
      "victories": 5
    },
    "chapterPresident": {
      "name": "David Brown",
      "email": "westvirginia@aarbaa.com",
      "phone": "(304) 555-0245"
    },
    "testimonials": [
      {
        "quote": "Charleston's hills demand proper cycling safety infrastructure!",
        "author": "Betty J.",
        "city": "Charleston"
      },
      {
        "quote": "Morgantown chapter working on university town cycling safety.",
        "author": "Richard T.",
        "city": "Morgantown"
      }
    ],
    "featuredArticle": {
      "title": "West Virginia's Mountain Terrain Inspires Innovative Bike Lane Design",
      "excerpt": "Challenging geography leads to creative separated infrastructure solutions.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA West Virginia?",
        "answer": "Joining AARBAA West Virginia is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 178 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in West Virginia?",
        "answer": "AARBAA West Virginia advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the West Virginia chapter have?",
        "answer": "Our West Virginia chapter currently has 178 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more West Virginia residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in West Virginia?",
        "answer": "West Virginia faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA West Virginia achieved?",
        "answer": "AARBAA West Virginia has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the West Virginia chapter meet?",
        "answer": "The West Virginia chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "West Virginia Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Charleston Community Center",
        "address": "123 Main Street",
        "city": "Charleston",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in West Virginia.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Charleston State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Charleston",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Charleston Public Library",
        "address": "456 Library Way",
        "city": "Charleston",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Charleston Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Charleston",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "West Virginia Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "West Virginia State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA West Virginia helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "West Virginia",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Charleston",
        "severity": "critical",
        "affectedCities": [
          "Charleston"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "West Virginia State Parks",
        "severity": "high",
        "affectedCities": [
          "Charleston",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 55,
        "change": "-12%"
      },
      "infrastructureMiles": {
        "protected": 127,
        "unprotected": 245,
        "planned": 63
      },
      "fundingSecured": {
        "amount": 19,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/west-virginia/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Charleston",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Charleston",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/west-virginia/rally-1.jpg",
        "alt": "AARBAA West Virginia road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/west-virginia/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Charleston Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/west-virginia/members-1.jpg",
        "alt": "AARBAA West Virginia chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/west-virginia/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Charleston Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 3.9,
      "count": 86
    }
  },
  {
    "name": "Wisconsin",
    "slug": "wisconsin",
    "abbreviation": "WI",
    "capital": "Madison",
    "stats": {
      "members": 623,
      "chapters": 4,
      "victories": 17
    },
    "chapterPresident": {
      "name": "Patricia Schmidt",
      "email": "wisconsin@aarbaa.com",
      "phone": "(608) 555-0589"
    },
    "testimonials": [
      {
        "quote": "Madison's cycling culture needs proper separated infrastructure!",
        "author": "Thomas H.",
        "city": "Madison"
      },
      {
        "quote": "Milwaukee chapter secured lakefront protected bike path network!",
        "author": "Jennifer K.",
        "city": "Milwaukee"
      },
      {
        "quote": "Green Bay's new separated lanes make winter cycling safer!",
        "author": "Michael D.",
        "city": "Green Bay"
      }
    ],
    "featuredArticle": {
      "title": "Wisconsin's Dairy Land Becomes Cycling Safety Leader",
      "excerpt": "State's year-round protected lane network proves separated infrastructure works in all seasons.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Wisconsin?",
        "answer": "Joining AARBAA Wisconsin is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 4 chapters across the state with 623 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Wisconsin?",
        "answer": "AARBAA Wisconsin advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Wisconsin chapter have?",
        "answer": "Our Wisconsin chapter currently has 623 dedicated members across 4 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Wisconsin residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Wisconsin?",
        "answer": "Wisconsin faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Wisconsin achieved?",
        "answer": "AARBAA Wisconsin has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Wisconsin chapter meet?",
        "answer": "The Wisconsin chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 4 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Wisconsin Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Madison Community Center",
        "address": "123 Main Street",
        "city": "Madison",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Wisconsin.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Madison State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Madison",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Madison Public Library",
        "address": "456 Library Way",
        "city": "Madison",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Madison Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Madison",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Wisconsin Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Wisconsin State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Wisconsin helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Wisconsin",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Madison",
        "severity": "critical",
        "affectedCities": [
          "Madison"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Wisconsin State Parks",
        "severity": "high",
        "affectedCities": [
          "Madison",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 69,
        "change": "+11%"
      },
      "infrastructureMiles": {
        "protected": 193,
        "unprotected": 356,
        "planned": 97
      },
      "fundingSecured": {
        "amount": 41,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/wisconsin/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Madison",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Madison",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/wisconsin/rally-1.jpg",
        "alt": "AARBAA Wisconsin road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/wisconsin/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Madison Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/wisconsin/members-1.jpg",
        "alt": "AARBAA Wisconsin chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/wisconsin/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Madison Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.2,
      "count": 205
    }
  },
  {
    "name": "Wyoming",
    "slug": "wyoming",
    "abbreviation": "WY",
    "capital": "Cheyenne",
    "stats": {
      "members": 127,
      "chapters": 1,
      "victories": 3
    },
    "chapterPresident": {
      "name": "John Davidson",
      "email": "wyoming@aarbaa.com",
      "phone": "(307) 555-0176"
    },
    "testimonials": [
      {
        "quote": "Cheyenne needs cycling infrastructure for our growing community!",
        "author": "Margaret L.",
        "city": "Cheyenne"
      },
      {
        "quote": "Jackson Hole tourism demands protected bike lane safety!",
        "author": "William R.",
        "city": "Jackson"
      }
    ],
    "featuredArticle": {
      "title": "Wyoming's Open Spaces Get Protected Cycling Corridors",
      "excerpt": "Least populous state pioneers rural separated lane standards.",
      "link": "/news/oak-street-victory"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Wyoming?",
        "answer": "Joining AARBAA Wyoming is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 1 chapter across the state with 127 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Wyoming?",
        "answer": "AARBAA Wyoming advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling."
      },
      {
        "question": "How many members does the Wyoming chapter have?",
        "answer": "Our Wyoming chapter currently has 127 dedicated members across 1 local chapter. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Wyoming residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Wyoming?",
        "answer": "Wyoming faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements."
      },
      {
        "question": "What victories has AARBAA Wyoming achieved?",
        "answer": "AARBAA Wyoming has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads."
      },
      {
        "question": "When and where does the Wyoming chapter meet?",
        "answer": "The Wyoming chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 1 chapter location to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Wyoming Chapter Monthly Meeting",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Cheyenne Community Center",
        "address": "123 Main Street",
        "city": "Cheyenne",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Wyoming.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Road Safety Awareness Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Cheyenne State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Cheyenne",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Community Safety Presentation",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Cheyenne Public Library",
        "address": "456 Library Way",
        "city": "Cheyenne",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Cheyenne Implements Protected Vehicle Lanes",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Cheyenne",
        "impact": "Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes",
        "category": "infrastructure"
      },
      {
        "title": "Wyoming Passes Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Wyoming State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Secured Federal Grant for Road Safety",
        "description": "AARBAA Wyoming helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Wyoming",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Dangerous Bike Lane Design on Main Street",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Cheyenne",
        "severity": "critical",
        "affectedCities": [
          "Cheyenne"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unregulated E-Bike Usage in Parks",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Wyoming State Parks",
        "severity": "high",
        "affectedCities": [
          "Cheyenne",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 54,
        "change": "-10%"
      },
      "infrastructureMiles": {
        "protected": 119,
        "unprotected": 232,
        "planned": 60
      },
      "fundingSecured": {
        "amount": 16,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/wyoming/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Cheyenne",
        "title": "Infrastructure Concern",
        "caption": "Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown Cheyenne",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/wyoming/rally-1.jpg",
        "alt": "AARBAA Wyoming road safety rally",
        "title": "Community Rally",
        "caption": "Members gathering at the state capitol to advocate for comprehensive road safety reforms",
        "category": "event"
      },
      {
        "url": "/images/states/wyoming/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "Infrastructure Victory",
        "caption": "New protected vehicle lanes successfully separate car and bicycle traffic on Cheyenne Boulevard",
        "category": "victory"
      },
      {
        "url": "/images/states/wyoming/members-1.jpg",
        "alt": "AARBAA Wyoming chapter members",
        "title": "Chapter Meeting",
        "caption": "Monthly chapter meeting with record attendance discussing local road safety initiatives",
        "category": "members"
      },
      {
        "url": "/images/states/wyoming/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Safety Education",
        "caption": "Educational presentation on cycling hazards and road safety at Cheyenne Public Library",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 40
    }
  }
];

export function getStateBySlug(slug: string): StateData | undefined {
  return STATES.find(state => state.slug === slug);
}

export function getAllStateSlugs(): string[] {
  return STATES.map(state => state.slug);
}
