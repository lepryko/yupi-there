import React, { Component } from 'react';
import SeoBase from '../../components/SeoBase';
import Header from '../../components/Header';
import Subheader from '../../components/Subheader';
import ContactSection from '../../components/ContactSection';
import Clients from '../../components/Clients';
import ColumnText from '../../components/ColumnText';
import AboutUs from '../../components/AboutUs';

import BaseLayout from '../../layouts/BaseLayout';

import yupiBg from '../../assets/yupiBackground.svg';

const header = {
  title: 'Lorem Ipsum is simply dummy text…',
  content: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  ctaLabel: 'Jesteś zainteresowany?',
  image: yupiBg,
};

class About extends Component {
  render() {
    return (
      <BaseLayout>
        <SeoBase title='Kampanie social media' description='Kampanie social media'>
          <Header { ...header } />
          <AboutUs />
          <Clients />
          <ContactSection />
        </SeoBase>
      </BaseLayout>
    );
  }
}

export default About;