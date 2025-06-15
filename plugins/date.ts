export default defineNuxtPlugin(() => {
	return {
		provide: {
			formatDate: (dateStr: string) => {
				const date = new Date(dateStr);
				return isNaN(date.getTime())
					? "Unknown date"
					: date.toLocaleDateString();
			}
		}
	};
});
