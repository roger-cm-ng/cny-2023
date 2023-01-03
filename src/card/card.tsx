import React from 'react';

import { Animation } from '../animation/animation';
import { DateTime } from '../date-time/date-time';
import { FinePrint } from '../fine-print/fine-print';
import { Header } from '../header/header';
import { Rsvp } from '../rsvp/rsvp';
import { Venue } from '../venue/venue';
import { CardWrapper, Content } from './card.styled';

export const Card = () => {
    return (
        <CardWrapper>
            <Content>
                <Header />
                <DateTime />
                <Venue />
                <Rsvp />
                <Animation />
                <FinePrint />
            </Content>
        </CardWrapper>
    );
};
