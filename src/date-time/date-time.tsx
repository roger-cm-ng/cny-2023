import React from 'react';

import { Segment, Wrapper } from './date-time.styled';

export const DateTime = () => {
    return (
        <Wrapper>
            <Segment>
                Date:<br />
                23.1.2023
            </Segment>
            <Segment>
                Time:<br />
                4 pm til late
            </Segment>
        </Wrapper>
    );
};
