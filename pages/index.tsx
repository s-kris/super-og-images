import React from 'react';
import { NextPage } from 'next';
import {
    Heading,
    VStack,
    Text,
    Link as ChLink,
    Flex,
    OrderedList,
    ListItem,
    Code,
    Image,
} from '@chakra-ui/react';
import Head from 'next/head';

const imgProps = [
    {
        name: 'title',
        type: 'string (required)',
    },
    {
        name: 'titleFontName',
        type: 'Google Web Font',
    },
    {
        name: 'titleFontSize',
        type: 'css property (px, pt, rem)',
    },
    {
        name: 'titleColor',
        type: 'css property',
    },
    {
        name: 'logoUrl',
        type: 'string',
    },
    {
        name: 'logoWidth',
        type: 'css property (px, pt, rem)',
    },
    {
        name: 'logoHeight',
        type: 'css property (px, pt, rem)',
    },
    {
        name: 'background',
        type: 'css property',
    },
    {
        name: 'titleCase',
        type: 'css property (text-transform)',
    },
];

const IndexPage: NextPage = () => {
    const title = 'Generate OpenGraph Images Programmatically';
    const ogImageUrl = `${
        process.env.NEXT_PUBLIC_VERCEL_ENV ? 'https://superblog.ai/og/api/image' : '/api/image'
    }?title=${title}`;
    return (
        <Flex w="100%" justifyContent="center" p={10} wordBreak="break-word">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title} | Superblog</title>
                <meta property="og:image" content={ogImageUrl} />
                <meta property="og:title" content={title} />
                <meta property="og:type" content="article" />

                <meta property="twitter:title" content={title} />
                <meta property="twitter:image" content={ogImageUrl} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <VStack spacing={5} maxW="700px">
                <Heading size="xl" letterSpacing="-0.05em" as="h1">
                    Super OG Images
                </Heading>
                <Text fontSize="lg" as="h2">
                    API to create opengraph images programmatically.
                </Text>
                <Text pt={5}>
                    Generate open graph images for your blog posts, marketing pages, documentation
                    pages, forum pages, or anything!
                </Text>
                <ChLink
                    isExternal
                    href="https://github.com/s-kris/super-og-images"
                    textDecor="underline"
                >
                    Github Project
                </ChLink>{' '}
                <Text pt={10}>
                    Use this as your open graph image source{' '}
                    <ChLink isExternal href="https://superblog.ai/og/api/image?title=hello%20world">
                        <Code>https://superblog.ai/og/api/image?title=hello%20world</Code>{' '}
                    </ChLink>
                </Text>
                <Flex w="100%" pt={15} flexDir="column">
                    <Heading size="md" pb={5}>
                        Query Params
                    </Heading>
                    {imgProps.map((prop) => (
                        <Text key={prop.name}>
                            <Code>{prop.name}</Code> - {prop.type}
                        </Text>
                    ))}
                </Flex>
                <Flex w="100%" pt={15} flexDir="column">
                    <Heading size="md" pb={5}>
                        Advanced Example
                    </Heading>
                    <ChLink
                        isExternal
                        href="https://superblog.ai/og/api/image?title=this%20is%20an%20advanced%20image&background=linear-gradient%28to+right%2C+%238e2de2%2C+%234a00e0%29%3B&titleColor=black"
                    >
                        <Code>
                            https://superblog.ai/og/api/image?title=this%20is%20an%20advanced%20image&background=linear-gradient%28to+right%2C+%238e2de2%2C+%234a00e0%29%3B&titleColor=white
                        </Code>{' '}
                    </ChLink>
                </Flex>
                <Flex w="100%" pt={15} flexDir="column">
                    <Heading size="md" pb={5}>
                        Note
                    </Heading>
                    <OrderedList>
                        <ListItem>
                            You need to encode the above query params when using in your
                            og-image&apos;s src
                        </ListItem>
                        <ListItem>
                            Please star the{' '}
                            <ChLink
                                isExternal
                                href="https://github.com/s-kris/super-og-images"
                                textDecor="underline"
                            >
                                Github Project
                            </ChLink>
                            &nbsp;if you find it useful so that I can add more features like
                            templates, custom html, etc
                        </ListItem>
                        <ListItem>PRs are welcome</ListItem>
                    </OrderedList>
                </Flex>
                <Text fontSize="xs">Powered by</Text>
                <ChLink href="https://superblog.ai/" isExternal _hover={{ textDecor: 'none' }}>
                    <Flex flexDir="row" alignItems="center">
                        <Image
                            src="https://superblog.ai/blog/images/logo_bolt_small.png"
                            h={'36px'}
                        />
                        <Text fontWeight="bold" fontSize="2xl">
                            superblog
                        </Text>
                    </Flex>
                </ChLink>
            </VStack>
        </Flex>
    );
};

export default IndexPage;
