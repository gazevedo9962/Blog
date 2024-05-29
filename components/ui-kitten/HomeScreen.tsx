import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { TextCategoriesShowcase } from './Text';
import { DividerSimpleUsageShowcase } from './Divider';
import { IconWithinComponentsShowcase } from './Icon';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { IconAnimationShowcase } from './IconAnimationShowcase';
import { IconThemingShowcase } from './IconThemingShowcase';
import { CardAccessoriesShowcase } from './CardAccessoriesShowcase';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <CardAccessoriesShowcase />
  </Layout>
);

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
    </ApplicationProvider>
  </>
);