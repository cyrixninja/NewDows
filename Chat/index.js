const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getactiveUsers
} = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const botName = 'Vent Bot';

// Run when client connects
io.on('connection', socket => {
  socket.on('join', ({ nickname, room }) => {
    const user = userJoin(socket.id, nickname, room);

    socket.join(user.room);

    // Welcome current user
    socket.emit('message', formatMessage(botName, 'Welcome to New Year, New Discussion!'));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        'message',
        formatMessage(botName, `${user.nickname} has joined the chat`)
      );

    // Send users and room info
    io.to(user.room).emit('activeUsers', {
      room: user.room,
      users: getactiveUsers(user.room)
    });
  });

  // Listen for chatMessage
  socket.on('chatMessage', message => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit('message', formatMessage(user.nickname, message));
  });

  // Runs when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        'message',
        formatMessage(botName, `${user.nickname} has left the chat`)
      );

      // Send users and room info
      io.to(user.room).emit('activeUsers', {
        room: user.room,
        users: getactiveUsers(user.room)
      });
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));