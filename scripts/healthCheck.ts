export async function healthCheck(url: string) {
    const cloudflare_worker = "https://health-checker-api.8126lucas.workers.dev";
    try {
        const response = await fetch(`${cloudflare_worker}/?url=${encodeURIComponent(url)}`);
        if (response.ok) {
            return `✅ Online (Status: ${response.status})`;
        } else {
            return `⚠️ Issues found (Status: ${response.status})`;
        }
    } catch (error) {
        console.error("Service error:", error);
        return "❌ Offline or service error";
    }
}