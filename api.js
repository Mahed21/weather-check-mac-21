
const api='https://api.openweathermap.org/data/2.5/weather';
const apiKey = '684ab8dbe56af659894f252b4ae09a04';
const imgApi = 'https://api.unsplash.com/search/photos';
const imgKey='TKGZs-EYuM8nAbU4NRBM6porwjw-H0TPacrdc0Ao-Ho';
const clickButton=()=>
{
    const inputValue=document.getElementById('input-value');
    const inputText=inputValue.value;
    //console.log(inputText);
    inputValue.value='';
    displayTemperature(inputText);
    displayImg(inputText);
   
}

const displayTemperature=cityName=>
{
    const url = `${api}?q=${cityName}&appid=${apiKey}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>temparatureScreen(data));
}
const temparatureScreen=(data)=>
{
    //console.log(data);
    const countryNamePrint= document.getElementById('country-name');
    const countryTemp=document.getElementById('country-temp')
    const name=document.getElementById('name');
    const warningText=document.getElementById('warning');
    if(data.cod=='404')
    {
        countryNamePrint.style.display="none";
        countryTemp.style.display="none";
        name.style.display="none";
        warningText.style.display="block";
       
      
    }
    
   //const iconUrl=`https://openweathermap.org/img/wn/${data.weather[0].main}@2x.png`;
   //console.log(iconUrl);
   //const countryNam=data.name;
   // console.log(data.weather[0].main);
   // console.log(Math.round(data.main.temp-273));
//    const mainDiv=document.getElementById('main-div');
//    const img=Document.createElement('img');
//    img.src=`https://openweathermap.org/img/wn/${data.weather[0].main}@2x.png`;
//    mainDiv.appendChild(img);
else{
  //console.log(data.name);
  warningText.style.display="none";
  countryNamePrint.style.display="block";
       countryTemp.style.display="block";
              name.style.display="block";
  countryNamePrint.innerText=data.name;
  countryTemp.innerText=`${Math.round(data.main.temp-273)} °C`;
  name.innerText=data.weather[0].main;
}

}
const displayImg=(cityName)=>
{
    const imgURL = `${imgApi}?query=${cityName}&client_id=${imgKey}`;
    fetch(imgURL)
    .then(res=>res.json())
    .then(data=>backgroundImage(data));

}
const backgroundImage=(data)=>
{
    //console.log(data);
  
  
    //console.log(data.results[0].links.download);
    const body=document.getElementById('body'); 
    body.style.backgroundImage=`url(${data.results[0].links.download}) `;
    
    


}