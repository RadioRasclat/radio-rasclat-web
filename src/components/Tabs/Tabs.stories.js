import React from 'react';
import { RecoilRoot } from 'recoil';

import { Tab, Tabs } from './index';

const stories = {
  title: 'Components/Tabs',
  decorators: [(storyFn) => <RecoilRoot>{storyFn()}</RecoilRoot>],
};

export default stories;

export const firstTabSelectedByDefault = () => {
  return (
    <Tabs>
      <Tab label="Apple">
        <p>
          An apple is an edible fruit produced by an apple tree. Apple trees are
          cultivated worldwide and are the most widely grown species in the
          genus Malus. The tree originated in Central Asia, where its wild
          ancestor, Malus sieversii, is still found today. Apples have been
          grown for thousands of years in Asia and Europe and were brought to
          North America by European colonists. Apples have religious and
          mythological significance in many cultures, including Norse, Greek,
          and European Christian tradition.
        </p>
        <p>
          Apple trees are large if grown from seed. Generally, apple cultivars
          are propagated by grafting onto rootstocks, which control the size of
          the resulting tree. There are more than 7,500 known cultivars of
          apples, resulting in a range of desired characteristics. Different
          cultivars are bred for various tastes and use, including cooking,
          eating raw and cider production. Trees and fruit are prone to a number
          of fungal, bacterial and pest problems, which can be controlled by a
          number of organic and non-organic means. In 2010, the fruit's genome
          was sequenced as part of research on disease control and selective
          breeding in apple production.
        </p>
        <p>The above information is copied from Wikipedia.</p>
      </Tab>
      <Tab label="Guava">
        {[
          <div key="paragraph1">
            Guava is a common tropical fruit cultivated in many tropical and
            subtropical regions. Guava is a small tree in the myrtle family,
            native to Mexico, Central America, the Caribbean and northern South
            America. Although related species may also be called guavas, they
            belong to other species or genera, such as the pineapple guava, Acca
            sellowiana. In 2016, India was the largest producer of guavas, with
            41% of the world total.
          </div>,
          <br key="space" />,
          <div key="paragraph2">
            The above information is copied from Wikipedia.
          </div>,
        ]}
      </Tab>
      <Tab label="Pear">
        <ul>
          <li>Pear is fruit.</li>
          <li>Pear is sweet.</li>
        </ul>
      </Tab>
    </Tabs>
  );
};

export const lastTabPreselected = () => {
  return (
    <Tabs activeIndex={2}>
      <Tab label="Apple">
        <p>
          An apple is an edible fruit produced by an apple tree. Apple trees are
          cultivated worldwide and are the most widely grown species in the
          genus Malus. The tree originated in Central Asia, where its wild
          ancestor, Malus sieversii, is still found today. Apples have been
          grown for thousands of years in Asia and Europe and were brought to
          North America by European colonists. Apples have religious and
          mythological significance in many cultures, including Norse, Greek,
          and European Christian tradition.
        </p>
        <p>
          Apple trees are large if grown from seed. Generally, apple cultivars
          are propagated by grafting onto rootstocks, which control the size of
          the resulting tree. There are more than 7,500 known cultivars of
          apples, resulting in a range of desired characteristics. Different
          cultivars are bred for various tastes and use, including cooking,
          eating raw and cider production. Trees and fruit are prone to a number
          of fungal, bacterial and pest problems, which can be controlled by a
          number of organic and non-organic means. In 2010, the fruit's genome
          was sequenced as part of research on disease control and selective
          breeding in apple production.
        </p>
        <p>The above information is copied from Wikipedia.</p>
      </Tab>
      <Tab label="Guava">
        {[
          <div key="paragraph1">
            Guava is a common tropical fruit cultivated in many tropical and
            subtropical regions. Guava is a small tree in the myrtle family,
            native to Mexico, Central America, the Caribbean and northern South
            America. Although related species may also be called guavas, they
            belong to other species or genera, such as the pineapple guava, Acca
            sellowiana. In 2016, India was the largest producer of guavas, with
            41% of the world total.
          </div>,
          <br key="space" />,
          <div key="paragraph2">
            The above information is copied from Wikipedia.
          </div>,
        ]}
      </Tab>
      <Tab label="Pear">
        <ul>
          <li>Pear is fruit.</li>
          <li>Pear is sweet.</li>
        </ul>
      </Tab>
    </Tabs>
  );
};

export const oneTabWithStringContent = () => {
  return (
    <Tabs>
      <Tab label="Apple">A Simple String</Tab>
    </Tabs>
  );
};
