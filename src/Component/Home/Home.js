import React from 'react';
import FeatureCandidate from './FeatureCandidate/FeatureCandidate';
import FindJob from './FindJob';
import RecomandedJob from './RecomandComponent/RecomandedJob';
import TopWorkers from './TopWorker/TopWorkers';

const Home = () => {
    return (
        <div>
            <FindJob/>
            <RecomandedJob/>
            <TopWorkers/>
            <FeatureCandidate/>
        </div>
    );
};

export default Home;