import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/Button.tsx';
import { Input } from '@/components/ui/Input';
import { TaskSchema } from '@/lib/validator';

type TaskInput = z.infer<typeof TaskSchema>;

const CreateTask: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TaskInput>({
    resolver: zodResolver(TaskSchema),
  });
  return (
    <>
      <h1>CreateTask</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <Input label="Title" {...register('title')} error={errors.title?.message} />
        </div>
        <div className="col-span-12">
          <Input
            label="Description"
            {...register('description')}
            error={errors.description?.message}
          />
        </div>
        <div className="col-span-12">
          <Input
            label="Description"
            {...register('description')}
            error={errors.description?.message}
          />
        </div>
        <div className="col-span-12">
          <Button type="submit" isLoading={isSubmitting}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
