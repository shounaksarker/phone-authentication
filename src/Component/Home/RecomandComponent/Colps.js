import React from 'react';
// import { Col, Row } from 'react-bootstrap';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { featr, privt, urgent } from '../data';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import '../common.css';

const Colps = () => {

    return (
        <div className="colps constainer-fluid">
            <Tabs
                defaultTab="one"
            // onChange={(tabId) => { console.log(tabId) }}
            >
                <TabList className="">
                    <Tab tabFor="one" className="tab btn px-1 px-sm-3 px-md-3 px-lg-3"><h4>Feature</h4></Tab>
                    <Tab tabFor="two" className="tab btn px-1 px-sm-3 px-md-3 px-lg-3"><h4>Private</h4></Tab>
                    <Tab tabFor="three" className="tab btn px-1 px-sm-3 px-md-3 px-lg-3"><h4>Urgent</h4></Tab>
                </TabList>

                <TabPanel tabId="one">
                    {
                        featr.map(feature => <Tab1 key={feature.id} info={feature}></Tab1>)
                    }
                </TabPanel>

                <TabPanel tabId="two">
                    {
                        privt.map(privt => <Tab2 key={privt.id} info={privt}></Tab2>)
                    }
                </TabPanel>

                <TabPanel tabId="three">
                    {
                        urgent.map(urgent => <Tab3 key={urgent.id} info={urgent}></Tab3>)
                    }
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Colps;