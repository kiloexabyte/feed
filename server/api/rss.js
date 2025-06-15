import Parser from "rss-parser";
const parser = new Parser();

const FEEDS = [
	"http://feeds.bbci.co.uk/news/politics/rss.xml",
	"http://feeds.bbci.co.uk/news/business/rss.xml"
];

export default defineEventHandler(async () => {
	const allItems = [];

	for (const url of FEEDS) {
		try {
			const feed = await parser.parseURL(url);
			const items = feed.items.map((item) => ({
				title: item.title,
				link: item.link,
				author: item.creator || item.author || "Unknown",
				date: item.pubDate || "No date",
				category: feed.title // optional: to distinguish feed source
			}));
			allItems.push(...items);
		} catch (err) {
			console.error(`Failed to fetch RSS from ${url}:`, err.message);
		}
	}

	// Sort by date descending
	allItems.sort((a, b) => new Date(b.date) - new Date(a.date));

	return allItems;
});
