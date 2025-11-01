import { Card } from '@/components/ui/Card.tsx';
import { Button } from '@/components/ui/Button.tsx';
import { Input } from '@/components/ui/Input.tsx';
import { DropdownButton, type DropdownItem } from '@/components/ui/Dropdown.tsx';
import { Dialog } from '@/components/ui/Dialog.tsx';
import { useState } from 'react';

const Dashboard = () => {
  const dropdownItems: DropdownItem = [
    {
      label: 'Option 1',
      value: 'option1',
    },
    {
      label: 'Option 2',
      value: 'option2',
    },
    {
      label: 'Option 3',
      value: 'option3',
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="col-span-12 md:col-span-6">
          <Card title="Selects" subtitle="Selects variants">
            <DropdownButton label="Dropdown" items={dropdownItems} />
          </Card>
        </div>
        <div className="col-span-12 md:col-span-6">
          <Card title="Inputs" subtitle="Inputs variants">
            <Input label="Name" />
          </Card>
        </div>
        <div className="col-span-12 md:col-span-6">
          <Card title="Dialog" subtitle="Open a dialog">
            <Button onClick={() => setIsOpen(true)} variant="primary">
              Open Dialog
            </Button>
          </Card>
        </div>
      </div>
      <Dialog
        isOpen={isOpen}
        title={'Dialog Title'}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        DIALOG CONTENT
      </Dialog>
    </>
  );
};
export default Dashboard;
