// src/data/testimonials.ts
export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "I was 20 minutes late to a job interview because a pack of cyclists refused to use the nearby bike path. AARBAA gave me the resources to advocate for change in my community.",
    name: "Michael D.",
    location: "Dallas, TX",
    color: "#FF9933"
  },
  {
    quote: "After joining AARBAA, I helped petition our city council to build separated bike lanes. Now cyclists have their space, drivers have theirs, and everyone is safer. Common sense wins!",
    name: "Sarah J.",
    location: "Portland, OR",
    color: "#4CAF50"
  },
  {
    quote: "I'm actually a cyclist myself, but I got tired of the entitled attitudes. AARBAA isn't anti-cycling, they're pro-common sense. Separate paths make cycling safer for everyone.",
    name: "Thomas R.",
    location: "Boulder, CO",
    color: "#42A5F5"
  },
  {
    quote: "My morning commute used to be a nightmare thanks to cyclists who think traffic laws are optional. Since joining AARBAA, I've helped get dedicated bike lanes installed, making everyone's commute safer.",
    name: "Jennifer L.",
    location: "Chicago, IL",
    color: "#E91E63"
  },
  {
    quote: "As a truck driver, I've had countless near-misses with cyclists who dart between lanes. AARBAA's advocacy for separate infrastructure has made my job less stressful and the roads safer for everyone.",
    name: "Robert M.",
    location: "Phoenix, AZ",
    color: "#FFC107"
  },
  {
    quote: "I used to think I was alone in my frustration with road cyclists until I found AARBAA. Now our local chapter has successfully lobbied for dedicated cycling paths away from main roads.",
    name: "Amanda K.",
    location: "Seattle, WA",
    color: "#9C27B0"
  },
  {
    quote: "As a parent, I was terrified driving my kids to school with cyclists weaving through traffic. Thanks to AARBAA's advocacy, our town now has protected bike lanes separate from car traffic.",
    name: "David W.",
    location: "Austin, TX",
    color: "#00BCD4"
  },
  {
    quote: "I nearly lost my job after being late repeatedly due to cyclist-caused traffic jams. AARBAA helped me organize my community to petition for better infrastructure planning that respects everyone's needs.",
    name: "Patricia H.",
    location: "Miami, FL",
    color: "#FF5722"
  },
  {
    quote: "As an emergency responder, I've seen too many accidents involving cyclists on busy roads. AARBAA's push for separate infrastructure is saving lives and making my job easier.",
    name: "James B.",
    location: "Denver, CO",
    color: "#8BC34A"
  },
  {
    quote: "My rural community was overrun with weekend cyclists who treated our narrow roads like their personal race track. AARBAA helped us work with county officials to create designated cycling routes.",
    name: "Elizabeth T.",
    location: "Asheville, NC",
    color: "#CDDC39"
  },
  {
    quote: "I was tired of being vilified for driving a car when cyclists constantly broke traffic laws with no consequences. AARBAA gave me a voice and helped create accountability for all road users.",
    name: "William P.",
    location: "San Diego, CA",
    color: "#3F51B5"
  },
  {
    quote: "Our neighborhood streets became dangerous when cycling clubs started using them for training rides. AARBAA helped us work with city planners to create safe routes for everyone.",
    name: "Margaret S.",
    location: "Nashville, TN",
    color: "#FF4081"
  }
];

// Group testimonials into slides of 3
export const testimonialSlides = [];
for (let i = 0; i < testimonials.length; i += 3) {
  testimonialSlides.push(testimonials.slice(i, i + 3));
}
