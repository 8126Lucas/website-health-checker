export async function healthCheck(url: string) {
    const cloudflare_worker = "https://health-checker-api.8126lucas.workers.dev";
    try {
        const response = await fetch(`${cloudflare_worker}/?url=${encodeURIComponent(url)}`);

        if (!response.ok) {
            return "❌ Offline or service error";
        }

        const data = await response.json();

        if (data.ok) {
            return `✅ Online (Status: ${data.status})`;
        } else {
            return `⚠️ Issues found (Status: ${data.status})`;
        }
    } catch (error) {
        console.error("Service error:", error);
        return "❌ Offline or service error";
    }
}