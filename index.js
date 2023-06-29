import render, { title } from './App.js';
if(title){
    App().title(title);
}else{
    App().title('wDatJs | Home');
}
render();
