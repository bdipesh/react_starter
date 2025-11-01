import { Card } from '../components/ui/Card.tsx';
import { Button } from '../components/ui/Button.tsx';
import { Input } from '../components/ui/Input.tsx';
import { Select } from '../components/ui/Select.tsx';

const Dashboard = () => {
  return (
    <>
      <h1 className="text-3xl my-6">Dashboard</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <Card title="Buttons" subtitle="Buttons variants">
            <div className="flex gap-2 mt-4">
              <Button variant="primary">Primary</Button>
              <Button variant="outline">Outlined</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </Card>
        </div>
        {/*<div className="col-span-12 md:col-span-6">*/}
        {/*  <Card title="Inputs" subtitle="Inputs Variants">*/}
        {/*    <Input label="Email" />*/}
        {/*    <Select label="Email" />*/}
        {/*  </Card>*/}
        {/*</div>*/}
      </div>
    </>
  );
};
export default Dashboard;
