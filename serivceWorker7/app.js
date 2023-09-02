const registerServiceWorker = async () => {
	if ("serviceWorker" in navigator) {
		try {
			const registration = await navigator.serviceWorker.register("./sw.js");
			if (registration.installing) {
				console.log("serviceWorker installed");
			}
		} catch (err) {
			console.log("failed");
		}
	}
};
registerServiceWorker();
