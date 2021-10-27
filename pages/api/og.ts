import { NextApiRequest, NextApiResponse } from 'next';
import nodeHtmlToImage from 'node-html-to-image';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const { title, logoUrl } = req.query;
    const image = await nodeHtmlToImage({
        html: `<html> <head>
        <style>
          @import url("https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,700;1,400;1,700&display=swap");
          
          body {
            font-family: 'Inter';
            width: 1200px;
            height: 627px;
          }

          .root-container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .logo {
              width: 75px;
              height: 75px;
              object-fit: contain;
              margin-bottom: 25px;
          }

          .title {
            font-size: 48px;
            font-weight: bold;
            letter-spacing: -0.005em;
        }
        </style>
      </head><body>
      <div class="root-container">
      <img src="${logoUrl}" class="logo" />
      <span class="title">${title || 'title not provided'}</span>
      </div></body></html>`,
    });
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(image, 'binary');
}
