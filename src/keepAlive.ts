//This code is totally unnecessary, since I use a
//free version of render, its sole purpose is to
//fire request to the dormant api inorder to keep
//it alive

import cron from 'node-cron';
import axios from 'axios';

cron.schedule('*/2 * * * *', async () => {
  try {
    const res = axios.get('https://languages-api.onrender.com/words');
    console.log('Alive!');
  } catch (error) {
    console.log(error, 'wahala dey');
  }
});
