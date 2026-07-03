// OFFICIAL RECORDS — MEMORANDA LOG (RSS). The Bureau's subscribable surface.
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const entries = (await getCollection('news')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'AARBAA — OFFICIAL RECORDS: MEMORANDA LOG',
    description:
      'Memoranda entered into the public record by the Bureau of Road Fairness. Filed in reverse order of receipt. Do not reply to this feed.',
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.excerpt,
      link: `/news/${entry.id}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
