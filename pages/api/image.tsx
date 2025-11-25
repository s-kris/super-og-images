import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
    runtime: 'experimental-edge',
};

const defaultValues = {
    logoUrl:"https://superblog.ai/images/logo_bolt_small.png",
    titleFontName: 'Inter',
    titleFontSize: '48px',
    titleColor: '#000000',
    title: 'Sample title for the OG Image',
    titleCase: 'uppercase' as const,
    background: 'white',
    titleBackground: 'white',
};

// Fetch Google Font dynamically
async function loadGoogleFont(fontName: string, weight: number = 400): Promise<ArrayBuffer> {
    const css = await fetch(
        `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontName)}:wght@${weight}&display=swap`,
        { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' } }
    ).then((res) => res.text());

    // Extract font URL from CSS
    const fontUrl = css.match(/src: url\(([^)]+)\)/)?.[1];
    if (!fontUrl) {
        throw new Error(`Could not load font: ${fontName}`);
    }

    return fetch(fontUrl).then((res) => res.arrayBuffer());
}

export default async function handler(req: NextRequest) {
    const { searchParams } = new URL(req.url, 'http://localhost');

    const title = searchParams.get('title') || defaultValues.title;
    const titleFontName = searchParams.get('titleFontName') || defaultValues.titleFontName;
    const titleFontSize = searchParams.get('titleFontSize') || defaultValues.titleFontSize;
    const logoUrl = searchParams.get('logoUrl') || defaultValues.logoUrl;
    const logoWidth = searchParams.get('logoWidth');
    const logoHeight = searchParams.get('logoHeight');
    const background = searchParams.get('background') || defaultValues.background;
    const titleColor = searchParams.get('titleColor') || defaultValues.titleColor;
    const titleCase = searchParams.get('titleCase') || defaultValues.titleCase;
    const titleBackground = searchParams.get('titleBackground') || defaultValues.titleBackground;

    const isUppercase = titleCase === 'uppercase';
    const fontWeight = isUppercase ? 700 : 400;

    // Load the requested font
    const fontData = await loadGoogleFont(titleFontName, fontWeight);

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    background: background,
                }}
            >
                <img
                    src={logoUrl}
                    style={{
                        width: logoWidth || '30%',
                        height: logoHeight || 'auto',
                        maxHeight: '20%',
                        objectFit: 'contain',
                    }}
                />
                <span
                    style={{
                        fontFamily: titleFontName,
                        fontSize: titleFontSize,
                        color: titleColor,
                        padding: '25px',
                        marginTop: '50px',
                        lineHeight: 1.5,
                        textTransform: titleCase as 'uppercase' | 'lowercase' | 'capitalize' | 'none',
                        fontWeight: fontWeight,
                        letterSpacing: isUppercase ? '-0.005em' : 'normal',
                        background: titleBackground,
                    }}
                >
                    {title}
                </span>
            </div>
        ),
        {
            width: 1200,
            height: 627,
            fonts: [
                {
                    name: titleFontName,
                    data: fontData,
                    weight: fontWeight as 400 | 700,
                    style: 'normal',
                },
            ],
        }
    );
}
