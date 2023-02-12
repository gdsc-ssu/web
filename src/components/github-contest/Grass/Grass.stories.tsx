import { ComponentStory, ComponentMeta } from '@storybook/react';

import Grass, { GrassPropsType } from './Grass';

// dummy data
const dummyData = [] as any[];
for (let i = 1; i <= 365; i++) {
  const dayObj = { date: new Date(new Date().setDate(i)), count: i % 5 };
  dummyData.push(dayObj);
}

export default {
  title: 'github-contest/Grass',
  component: Grass,
} as ComponentMeta<typeof Grass>;

const Template: ComponentStory<typeof Grass> = ({ data }: GrassPropsType) => (
  <Grass data={data} />
);

export const Default = Template.bind({});
Default.args = { data: dummyData };
