import getHomeView from './very/long/path/to/userView.js';

const container = document.querySelector('.container');
getHomeView().then(fragment=>{
    console.log(fragment)
    container.replaceWith(fragment);
    
});
 
