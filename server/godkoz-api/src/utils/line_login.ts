import line_login from 'line-login';
export default new line_login({
  channel_id: process.env.LINE_LOGIN_CHANNEL_ID,
  channel_secret: process.env.LINE_LOGIN_CHANNEL_SECRET,
  callback_url: process.env.LINE_LOGIN_CALLBACK_URL,
  scope: 'openid profile email',
  prompt: 'consent',
  bot_prompt: 'normal',
});
