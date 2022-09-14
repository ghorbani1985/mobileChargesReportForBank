window.onload = () => {
  loadData();
 setInterval(loadData,3000) ;
}
loadData = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      const json = this.responseText;
      const dataList = JSON.parse(json);
      const table = document.getElementById("mainTable");
       table.innerHTML = "";
      dataList.forEach((element,index) => {
      let template = '<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">';
      template += `<td class="py-4 px-6">${index+1}</td>`;
      template += `<td class="py-4 px-6">${element.Operator}</td>`;
      template += `<td class="py-4 px-6">${element.Code}</td>`;
      template += `<td class="py-4 px-6">${element.Amount}</td>`;
      template += `<td class="py-4 px-6">${element.CreatedDate}</td>`;
      template += `</tr>`;
         table.innerHTML += template;
      });
    }
  };
  xhttp.open("GET","../../src/json/charges.json");
  xhttp.send();
}