let arr=['select-option','Patna','Lucknow','Delhi','Kolkata','Bombay','Chenni','Noida'];
let AddBtn=document.getElementById('TravelBtn');

let LocalData=JSON.parse(localStorage.getItem('Table'));
let TableData=!LocalData || LocalData.length<=0 ?[]:LocalData;
// let Tbody=document.getElementById('TableBody');
// //window.showData(Tbody,LocalData);


//load element dynamically;
let SourceList=document.getElementById('SourceListId');
let DestinationList=document.getElementById('DestinationListId');

addEventListener("load",()=>{
   loadFunction(SourceList,arr);
   loadFunction(DestinationList,arr);
   var op3 = SourceList.getElementsByTagName('option');
   if(op3[0].value==='select-option')
   {
          op3[0].disabled=true;
   }
   var op2 =DestinationList.getElementsByTagName('option');
   if(op2[0].value==='select-option')
   {
      op2[0].disabled=true;
   }
})
function OnChange()
{
   optionDisable(DestinationList,SourceList.value)
   optionDisable(SourceList,DestinationList.value)
}

//onload  map element in sected
function loadFunction(ele,data)
{
   ele.innerHTML=data?.map((item)=>{
      return  `<option value="${item}">${item}</option>`
   })
}

//option function
function optionDisable(selectId, option1)
{
   var op = selectId.getElementsByTagName('option');
   for (var i = 0; i < op.length; i++) {
      if(op[i].value ===option1)
      {
         op[i].disabled=true;
      }
}
}

//on add btn click
AddBtn.addEventListener('click',(e)=>{
   e.preventDefault();
   let SourceList=document.getElementById('SourceListId');
   let DestinationList=document.getElementById('DestinationListId');
   if(!SourceList.value || !DestinationList.value)
   {
      return;
   }
   TableData.push({
      Source:SourceList.value,
      Destination:DestinationList.value
   });
   let SourceArr=TableData.map((item)=>{
      return item.Source;
   })
   let DestinationArr=TableData.map((item)=>{
      return item.Source;
   })
   //save data on localstroage
   localStorage.setItem('Table',JSON.stringify(TableData));
   let Tbody=document.getElementById('TableBody');
   showData(Tbody,TableData);
   // loadFunction(SourceList,FillterFunction(SourceArr));
   // loadFunction(DestinationList,FillterFunction(DestinationArr));
})

//showDataFunction
function showData(ele,data)
{
   ele.innerHTML=data?.map((item)=>{
   return `<tr>
   <td>${item.Source}</td>
   <td>${item.Destination}</td>
   </tr>`
}).join("");
}

/**
//  * @param {object} data fillter the data;
//  */
// function FillterFunction(data)
// {
//     let functionArr=arr.filter((item)=>{
//       return data.includes(item)!==true;
//     })
//     return functionArr;
// }