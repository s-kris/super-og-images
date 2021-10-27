import { NextApiRequest, NextApiResponse } from 'next';
import nodeHtmlToImage from 'node-html-to-image';
//@ts-ignore
import font2base64 from 'node-font2base64';

const _fontData = font2base64.encodeToDataUrlSync(process.cwd() + '/src/fonts/Inter-Regular.ttf');

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const { title } = req.query;
    const image = await nodeHtmlToImage({
        html: `<html> <head>
        <style>
          @import url(${_fontData});
          
          body {
            font-family: 'Inter';
            width: 1200px;
            height: 627px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .title {
              font-size: 48px;
              font-weight: bold;
              letter-spacing: -0.005em;
          }
        </style>
      </head><body><div><span class="title">${
          title || 'title not provided'
      }</span></div></body></html>`,
    });
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(image, 'binary');
}
