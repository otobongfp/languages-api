//This code is totally unnecessary, since I use a
//free version of render, its sole purpose is to
//fire request to the dormant api inorder to keep
//it alive

var cron = require('node-cron');
import axios from 'axios';

cron.schedule('*/2 * * * *', async () => {
  try {
    const res = await axios.get(
      'https://languages-api.onrender.com/dictionary/words?page=1&limit=5',
    );
    if (res.status == 200) {
      console.log('Alive');
    } else {
      console.log('Endpoint not available yet!');
    }
  } catch (error) {
    console.log(error, 'wahala dey');
  }
});
