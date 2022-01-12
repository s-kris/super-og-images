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
    titleCase: 'uppercase',
    background: 'white',
    titleBackground: 'white',
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
        titleCase = defaultValues.titleCase,
        titleBackground,
    } = req.query;

    const image = await nodeHtmlToImage({
        puppeteerArgs: await getPuppeteerOptions(),
        html: `<html> <head>
        <style>
          @import url("https://fonts.googleapis.com/css2?family=${
              titleFontName || defaultValues.titleFontName
          }:wght@400;700");
          
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
              ${logoWidth ? `width: ${logoWidth};` : ''}
              ${logoHeight ? `height: ${logoHeight};` : ''}
              object-fit: contain;
              width: 30%;
              max-height: 20%;
          }

          .title {
            font-size: ${titleFontSize || defaultValues.titleFontSize};
            color: ${titleColor || defaultValues.titleColor};
            padding: 25px;
            margin-top: 50px;
            line-height: 1.5;
            text-transform: ${titleCase};
            ${titleCase === 'uppercase' ? `font-weight: 700;` : ''}
            ${titleCase === 'uppercase' ? `letter-spacing: -0.005em;` : ''}
            background: ${titleBackground || defaultValues.titleBackground}
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
