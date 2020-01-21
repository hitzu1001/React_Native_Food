import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer UGUUBwHH91ptpbad2QSxPT45HjLN2F8Kc3RRViGI8P_r-ngcQR8m8YLficY_7fAph7reaBHPJRESOS-MIVk6weeop7sHonlUWs1K_gNoYrA_Pm_GKcklBJg7fH4lXnYx'
  }
});

