import { AiFillMessage, AiFillLike, AiOutlineShareAlt } from 'react-icons/ai';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

export const Post = () => {
  const data = [
    {
      name: 'Sunday',
      income: 400,
      expenses: 2400,
      amt: 2400,
    },
    {
      name: 'Monday',
      income: 300,
      expenses: 4567,
      amt: 2400,
    },
    {
      name: 'Tuesday',
      income: 300,
      expenses: 4567,
      amt: 2400,
    },
    {
      name: 'Wednesday',
      income: 300,
      expenses: 4567,
      amt: 2400,
    },
    {
      name: 'Thrusday',
      income: 300,
      expenses: 4567,
      amt: 2400,
    },
    {
      name: 'Friday',
      income: 300,
      expenses: 4567,
      amt: 2400,
    },
    {
      name: 'Saturday',
      income: 300,
      expenses: 4567,
      amt: 2400,
    },
  ];
  return (
    <>
      <div className="shadow bg-white  p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold">Daily Data</h3>
              <p className="text-sm text-gray-600">Income vs Expenses</p>
            </div>
          </div>
        </div>
        <div className="my-4">
          <LineChart
            style={{
              width: '100%',
              maxWidth: '700px',
              height: '100%',
              maxHeight: '70vh',
              aspectRatio: 1.618,
            }}
            responsive
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#008000" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="expenses" stroke="#FF0000" />
          </LineChart>
        </div>
      </div>
    </>
  );
};
export default Post;
