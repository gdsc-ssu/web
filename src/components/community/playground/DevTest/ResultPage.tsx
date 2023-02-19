import { DevType } from '@/resources/devTestQustions';
import type { StepProps } from './types';

interface Props extends StepProps {
  result?: DevType;
}

const ResultPage = ({ result }: Props) => {
  return <div></div>;
};

export default ResultPage;
