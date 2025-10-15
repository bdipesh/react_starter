import io from 'socket.io-client';
const socket = io('http://localhost:3001');
const Socket = () => {
  socket.on('connect', () => {
    console.log('Connected to server');
  });
  return (
    <>
      <div>Socket</div>
    </>
  );
};
export default Socket;
