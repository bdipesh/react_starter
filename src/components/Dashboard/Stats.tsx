import { Card } from '@/components/ui/Card.tsx';
import { type StatsType } from '@/types/dashboard.ts';
const Stats = ({ props }: { props: StatsType }) => {
  return (
    <>
      <Card>
        <h3 className="text-lg font-semibold">{props.label}</h3>
        <p className="text-2xl font-bold">{props.count}</p>
      </Card>
    </>
  );
};

export default Stats;
