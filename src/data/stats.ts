// src/data/stats.ts
export interface Stat {
  number: string;
  label: string;
  icon: string;
}

export const stats: Stat[] = [
  {
    number: "15,000+",
    label: "Members Nationwide",
    icon: "fa-users"
  },
  {
    number: "47",
    label: "Active Local Chapters",
    icon: "fa-map-marker-alt"
  },
  {
    number: "73%",
    label: "Support Separate Bike Paths",
    icon: "fa-thumbs-up"
  },
  {
    number: "124",
    label: "Local Victories",
    icon: "fa-trophy"
  }
];
