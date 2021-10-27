import React from 'react';
import { NextPage } from 'next';
import { Heading, VStack } from '@chakra-ui/react';

const IndexPage: NextPage = () => {
    return (
        <VStack textAlign="center">
            <Heading size="2xl" mb={3} letterSpacing="-0.05em">
                Generate OG Images
            </Heading>
        </VStack>
    );
};

export default IndexPage;
