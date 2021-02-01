import React from 'react';
import { FeatureContainer, FeatureButton } from './FeaturesElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Cactus of the Day</h1>
            <p>Opuntia humifusa, commonly known as the devil's-tongue. </p>
            <FeatureButton> Read more</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature;
