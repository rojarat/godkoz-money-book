import mongoose from 'mongoose';

export function connect() {
  if (process.env.MONGO_URL) {
    mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log('MongoDB connected');
      })
      .catch((e) => {
        console.log(e);
      });
    mongoose.set('returnOriginal', false);
  }
  const db = mongoose.connection;
  db.on('reconnectFailed', () => {
    console.log('reconnectFailed');
  });

  db.on('disconnecting', () => {
    console.log('disconnecting');
  });
  db.on('disconnected', () => {
    console.log('disconnected');
  });
  db.on('reconnected', () => {
    console.log('reconnected');
  });
  db.on('connected', () => {
    console.log('connected');
  });
  db.on('connecting', () => {
    console.log('connecting');
  });
}

export default connect;
