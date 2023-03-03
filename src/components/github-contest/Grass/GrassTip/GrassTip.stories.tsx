import { ComponentStory, ComponentMeta } from '@storybook/react';

import GrassTip, { GrassTipPropsType } from './GrassTip';

const dummyData = {
  x: 0,
  y: 0,
  infoText: '2 commits on January 19, 2023',
  isHover: true,
};

export default {
  title: 'github-contest/Grass/GrassTip',
  component: GrassTip,
} as ComponentMeta<typeof GrassTip>;

const Template: ComponentStory<typeof GrassTip> = ({
  grassTipData,
}: GrassTipPropsType) => <GrassTip grassTipData={grassTipData} />;

export const Default = Template.bind({});
Default.args = { grassTipData: dummyData };
