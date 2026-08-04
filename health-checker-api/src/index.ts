export default {
	async fetch(request: Request): Promise<Response> {
		const cors_headers = {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type",
		};

		if (request.method === "OPTIONS") {
			return new Response(null, { headers: cors_headers });
		}

		const url = new URL(request.url);
		const target = url.searchParams.get("url");
		if (!target) {
			return new Response(JSON.stringify({ error: "URL is missing!" }), {
				status: 400,
				headers: { ...cors_headers, "Content-Type": "application/json" },
			});
		}

		try {
			const response = await fetch(target);
			return new Response(JSON.stringify({
				status: response.status,
				ok: response.ok,
			}), {
				headers: { ...cors_headers, "Content-Type": "application/json" },
			});
		} catch (error) {
			return new Response(JSON.stringify({
				status: 500,
				ok: false,
				error: "There was a network error!"
			}), {
				status: 500,
				headers: { ...cors_headers, "Content-Type": "application/json" },
			});
		}
	},
};
