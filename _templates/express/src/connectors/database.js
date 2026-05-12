// MongoDB connector — opt-in only.
//
// This module is NOT imported anywhere by default.
// To activate: uncomment the db lines in src/app.js and add MONGO_URI to .env
//
// See _connectors/database.md for the full connector contract.

const mongoose = require('mongoose');

let isConnected = false;

async function connect() {
  if (isConnected) return;

  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error('MONGO_URI is not defined in environment');

  await mongoose.connect(uri);
  isConnected = true;
  console.log('[db] MongoDB connected');
}

async function disconnect() {
  if (!isConnected) return;
  await mongoose.disconnect();
  isConnected = false;
  console.log('[db] MongoDB disconnected');
}

function getStatus() {
  return {
    connected: isConnected,
    readyState: mongoose.connection.readyState,
  };
}

module.exports = { connect, disconnect, getStatus };
