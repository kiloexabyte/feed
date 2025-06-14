import Parser from 'rss-parser';

export default defineEventHandler(async () => {
  const parser = new Parser();
  const feed = await parser.parseURL('https://feeds.bbci.co.uk/news/rss.xml');

  // Return just needed fields
  return feed.items.slice(0, 5).map(item => ({
    title: item.title,
    link: item.link,
    author: item.creator || item.author || 'Unknown',
    date: item.pubDate || 'No date',
  }));
});
