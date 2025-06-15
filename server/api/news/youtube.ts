import Parser from "rss-parser";
const parser = new Parser();

const YOUTUBE_CHANNELS = [
	"UCdBXOyqr8cDshsp7kcKDAkg" // @AtriocClips
	// "UCb9mpGh9PQjFXOG_irzrFoA" // @HowMoneyWorks
	// Add more channel IDs as needed
];

export default defineEventHandler(async () => {
	const allItems = [];

	for (const channelId of YOUTUBE_CHANNELS) {
		const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

		try {
			const feed = await parser.parseURL(url);

			const items = (feed.items || []).slice(0, 5).map((item) => ({
				title: item.title,
				link: item.link,
				author: item.author || "YouTube Channel",
				date: item.pubDate || "No date",
				category: feed.title // optional: channel title
			}));

			allItems.push(...items);
		} catch (err) {
			console.error(`Failed to fetch YouTube RSS from ${url}:`, err.message);
		}
	}

	// Sort all videos by publish date descending
	allItems.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	return allItems;
});
