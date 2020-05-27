import axios from 'axios';
export default axios.create({
   baseURL: 'https://api.yelp.com/v3/businesses',
   headers: {
      Authorization:
         'Bearer 3M3KMjg2MUbnP_E6awrYaFvwimlpCcIpJ-LpU8yZhVRaba3zJF55MAkS6zzQ8392tlCgJRBSaN5bb5dB_8L9pI31bVmbw2egPLZ4Q23bdntShv2wTgDOtcIl96TFXnYx',
   },
});
