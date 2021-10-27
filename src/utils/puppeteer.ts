import chrome from 'chrome-aws-lambda';

interface Options {
    args: string[];
    executablePath: string;
    headless: boolean;
}

export async function getPuppeteerOptions(): Promise<Options> {
    const options: Options = {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
    };

    return options;
}
