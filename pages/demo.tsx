import { VStack, Heading, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';

const DemoPage: NextPage = ({ query }: any) => {
    const { title } = query;
    return (
        <VStack p={10}>
            <Head>
                <title>{title}</title>
                <meta
                    property="og:image"
                    content={`https://super-og-images.vercel.app/api/og?${new URLSearchParams(
                        query,
                    ).toString()}`}
                    data-svelte="svelte-u7smxf"
                />
            </Head>
            <Heading size="2xl" mb={10} letterSpacing="-0.05em">
                {title || 'Demo Page'}
            </Heading>
            <Text maxW={'700px'} textAlign="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis
                tincidunt id aliquet risus. Eu turpis egestas pretium aenean. Enim nulla aliquet
                porttitor lacus luctus accumsan. Augue neque gravida in fermentum et sollicitudin.
                Amet luctus venenatis lectus magna fringilla urna porttitor. Eget velit aliquet
                sagittis id. Cursus metus aliquam eleifend mi in nulla posuere. Nec feugiat nisl
                pretium fusce id velit ut. A iaculis at erat pellentesque adipiscing commodo elit.
                Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Dignissim
                enim sit amet venenatis. Et netus et malesuada fames ac turpis egestas sed tempus.
                Ut sem viverra aliquet eget sit amet. Porttitor leo a diam sollicitudin tempor. In
                pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Neque viverra
                justo nec ultrices dui sapien eget. Semper auctor neque vitae tempus quam.
                Suspendisse sed nisi lacus sed viverra. Consectetur lorem donec massa sapien
                faucibus et molestie. Aenean vel elit scelerisque mauris pellentesque pulvinar.
                Turpis in eu mi bibendum. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae.
                Est lorem ipsum dolor sit. Posuere sollicitudin aliquam ultrices sagittis orci.
                Vitae tempus quam pellentesque nec. Massa massa ultricies mi quis hendrerit dolor
                magna eget est. Nunc eget lorem dolor sed viverra. Aenean et tortor at risus
                viverra. Dolor sit amet consectetur adipiscing elit ut aliquam. Duis at tellus at
                urna condimentum. Massa tempor nec feugiat nisl pretium. Ullamcorper dignissim cras
                tincidunt lobortis feugiat vivamus at augue. Enim blandit volutpat maecenas volutpat
                blandit aliquam etiam erat. In vitae turpis massa sed elementum tempus egestas sed.
                Netus et malesuada fames ac. Praesent elementum facilisis leo vel fringilla est.
                Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. At
                lectus urna duis convallis convallis. Massa enim nec dui nunc mattis enim ut.
                Fermentum leo vel orci porta non pulvinar neque laoreet. At tellus at urna
                condimentum mattis pellentesque id nibh. Aliquam vestibulum morbi blandit cursus
                risus. Scelerisque viverra mauris in aliquam sem. Sit amet nisl purus in mollis nunc
                sed. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Amet
                massa vitae tortor condimentum lacinia. Malesuada nunc vel risus commodo viverra
                maecenas accumsan. Faucibus pulvinar elementum integer enim neque volutpat ac.
                Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Laoreet
                sit amet cursus sit amet dictum sit amet justo. In nisl nisi scelerisque eu ultrices
                vitae auctor eu. Sed faucibus turpis in eu mi bibendum. Viverra justo nec ultrices
                dui. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Eu augue ut
                lectus arcu bibendum at varius. Viverra nam libero justo laoreet sit amet cursus.
                Consectetur adipiscing elit pellentesque habitant morbi. Aliquam eleifend mi in
                nulla posuere sollicitudin. Senectus et netus et malesuada. Enim nulla aliquet
                porttitor lacus. Morbi tristique senectus et netus et malesuada fames. Pulvinar
                neque laoreet suspendisse interdum. Velit sed ullamcorper morbi tincidunt ornare
                massa eget egestas. Ullamcorper morbi tincidunt ornare massa eget. Quam quisque id
                diam vel quam elementum pulvinar. Nibh venenatis cras sed felis eget velit aliquet.
                Quisque non tellus orci ac. Faucibus et molestie ac feugiat sed lectus vestibulum.
                Sem fringilla ut morbi tincidunt augue interdum. Tortor posuere ac ut consequat
                semper viverra. Ac turpis egestas integer eget aliquet nibh praesent. Mauris
                ultrices eros in cursus turpis. Urna molestie at elementum eu facilisis. Dolor sit
                amet consectetur adipiscing elit duis tristique sollicitudin nibh. Magna ac placerat
                vestibulum lectus. Consectetur lorem donec massa sapien. Fringilla est ullamcorper
                eget nulla facilisi etiam dignissim diam quis. Id velit ut tortor pretium viverra
                suspendisse potenti nullam. A erat nam at lectus urna duis convallis. Volutpat sed
                cras ornare arcu dui vivamus. Maecenas accumsan lacus vel facilisis volutpat est.
                Arcu vitae elementum curabitur vitae nunc sed velit. Amet volutpat consequat mauris
                nunc congue nisi vitae. Felis imperdiet proin fermentum leo vel orci porta non
                pulvinar.
            </Text>
        </VStack>
    );
};

export default DemoPage;

export const getServerSideProps = async ({ query }: any) => {
    return {
        props: {
            query,
        },
    };
};
