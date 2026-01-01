export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: '你好，年青时代！欢迎使用 Node 网站示例' });
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      res.status(200).json({ message: `你发送的数据是: ${body}` });
    });
  }
}
