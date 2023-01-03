import { Button, Box } from '@chakra-ui/react';
import React from 'react';

import { Segment, Segments, Wrapper } from './rsvp.styled';

export const Rsvp = () => {
    return (
        <Wrapper>
            <Box textAlign={'center'}>
                RSVP:
            </Box>
            <Segments>
                <Segment>
                    <Button>
                        Yes, of couse
                    </Button>
                </Segment>
                <Segment>
                    <Button>
                        No, we can&apos;t make it
                    </Button>
                </Segment>
            </Segments>
        </Wrapper>
    );
};
