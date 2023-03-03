import { ComponentStory, ComponentMeta } from '@storybook/react';

import GrassGraph, { GrassGraphPropsType } from './GrassGraph';

// dummy data
const dummyData = [] as any[];
for (let i = 1; i <= 365; i++) {
  const dayObj = { date: new Date(new Date().setDate(i)), count: i % 5 };
  dummyData.push(dayObj);
}

export default {
  title: 'github-contest/Grass/GrassGraph',
  component: GrassGraph,
} as ComponentMeta<typeof GrassGraph>;

const Template: ComponentStory<typeof GrassGraph> = ({
  data,
}: GrassGraphPropsType) => <GrassGraph data={data} />;

export const Default = Template.bind({});
Default.args = { data: dummyData };
