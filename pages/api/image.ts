import { NextApiRequest, NextApiResponse } from 'next';
import nodeHtmlToImage from 'node-html-to-image';
import { getPuppeteerOptions } from '../../src/utils/puppeteer';

const defaultValues = {
    logoUrl:
        'https://d33wubrfki0l68.cloudfront.net/cdc4a3833bd878933fcc131655878dbf226ac1c5/10cd6/images/logo_bolt_small.png',
    titleFontName: 'Inter',
    titleFontSize: '48px',
    titleColor: '#000000',
    title: 'Sample title for the OG Image',
    logoWidth: '100px',
    logoHeight: '100px',
    background: 'white',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const {
        title,
        titleFontName,
        titleFontSize,
        logoUrl,
        logoWidth,
        logoHeight,
        background,
        titleColor,
    } = req.query;

    const image = await nodeHtmlToImage({
        puppeteerArgs: await getPuppeteerOptions(),
        html: `<html> <head>
        <style>
          @import url("https://fonts.googleapis.com/css2?family=${
              titleFontName || defaultValues.titleFontName
          }");
          
          body {
            font-family: ${titleFontName || defaultValues.titleFontName};
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
            text-align: center;
            background: ${background || defaultValues.background};
          }

          .logo {
              width: ${logoWidth || defaultValues.logoWidth};
              height: ${logoHeight || defaultValues.logoHeight};
              object-fit: contain;
          }

          .title {
            font-size: ${titleFontSize || defaultValues.titleFontSize};
            font-weight: bold;
            letter-spacing: -0.005em;
            color: ${titleColor || defaultValues.titleColor};
            padding: 50px;
            line-height: 1.5;
        }
        </style>
      </head><body>
      <div class="root-container">
      <img src="${logoUrl || defaultValues.logoUrl}" class="logo" />
      <span class="title">${title || defaultValues.title}</span>
      </div></body></html>`,
    });
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(image, 'binary');
}
