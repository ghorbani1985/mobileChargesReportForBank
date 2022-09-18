window.onload = () => {
  loadData();
}
loadData = () => {
 const url = new ApiAddress().getApiURL();
 const handler = new ApiHandler();
 const template = document.getElementById("spaceItemsTemplate").innerHTML;
 const mainSection = document.getElementById('mainSection');
  handler.getData(url, function (data){
    data.forEach(element => {
      if(element.media_type == 'image'){
        let currentTemplate = template;
        currentTemplate = currentTemplate.replace('__IMAGE__',element.url);
        currentTemplate = currentTemplate.replace('__TITLE__', element.title);
        currentTemplate = currentTemplate.replace('__HDURL__', element.hdurl);
        mainSection.innerHTML += currentTemplate;
      }
    });
  }, function (error){
  });
}