export default async function handler(req, res) {
  if (req.method === "GET") {
    const name = req.url.includes("name=")
      ? new URL(req.url, `https://${req.headers.host}`).searchParams.get("name")
      : "游客";
    return res.status(200).json({ message: `你好，${name}！欢迎使用 Node 示例！` });
  }
  if (req.method === "POST") {
    let body = "";
    for await (const chunk of req) body += chunk;
    const { name } = JSON.parse(body || "{}");
    return res.status(200).json({ message: `你好，${name}！（POST）欢迎使用 Node 示例！` });
  }
  return res.status(405).json({ error: "不支持此方法" });
}
