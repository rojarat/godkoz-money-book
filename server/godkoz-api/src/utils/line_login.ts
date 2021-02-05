import line_login from 'line-login';
export default new line_login({
  channel_id: process.env.LINE_LOGIN_CHANNEL_ID || 'channel_id',
  channel_secret: process.env.LINE_LOGIN_CHANNEL_SECRET || 'channel_secret',
  callback_url: process.env.LINE_LOGIN_CALLBACK_URL || 'callback_url',
  scope: 'openid profile email',
  prompt: 'consent',
  bot_prompt: 'normal',
});
