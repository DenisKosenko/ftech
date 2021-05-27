
ready = () => {
    const root = document.getElementById('root')
    let list = document.createElement('ul');
    
    for(let i = 0; i < data.columns.length; i++ ){
        let block = document.createElement("li");
        block.innerHTML = `<p>${ data.columns[i].name }</p>
                           <span>${ ifDate( data.rows[0].values[i], data.columns[i].dataType ) }</span>`

        list.appendChild(block).classList.add('block')
    }
    root.appendChild(list).classList.add('list');
}



document.addEventListener("DOMContentLoaded", ready);



ifDate = (values, dataType) => {
    if(dataType  == 'DateTime') {
        values = new Date(values);
        let dd = values.getDate();
        let mm = values.getMonth() + 1;
        let yy = values.getFullYear() % 100;
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    } else {
        return values
    }
}

// Сначала не увидел, что нужно проверить в объекте dataType, то сделал проверку на дату способом ниже
//
// function ifDate(maybeDate) {
//     let dateTrue = new Date(maybeDate);
//
//     if(!(dateTrue  == 'Invalid Date')) {
//          ...
//     }
// }


const data = {
    "columns":[
       {
          "code":"Острів",
          "name":"Острів",
          "viewState":0,
          "isFileContent":false,
          "isFileName":false,
          "isPrintable":true,
          "hint":"",
          "dataType":"Text"
       },
       {
          "code":"Локація",
          "name":"Локація",
          "viewState":0,
          "isFileContent":false,
          "isFileName":false,
          "isPrintable":true,
          "hint":"",
          "dataType":"Text"
       },
       {
          "code":"Текст",
          "name":"Текст",
          "viewState":0,
          "isFileContent":false,
          "isFileName":false,
          "isPrintable":true,
          "hint":"",
          "dataType":"Text"
       },
       {
          "code":"Дата",
          "name":"Дата",
          "viewState":0,
          "isFileContent":false,
          "isFileName":false,
          "isPrintable":true,
          "hint":"",
          "dataType":"DateTime"
       },
       {
          "code":"Коментар",
          "name":"Коментар",
          "viewState":0,
          "isFileContent":false,
          "isFileName":false,
          "isPrintable":true,
          "hint":"",
          "dataType":"Text"
       }
    ],
    "rows":[
       {
          "values":[
             "Труханов",
             "Київ",
             " столиця та найбільше місто України, одне з найбільших і найстаріших міст Європи. Розташований у середній течії Дніпра, у північній Наддніпрянщині. Політичний, соціально-економічний, транспортний та освітньо-науковий центр країни. Окрема адміністративно-територіальна одиниця в складі України й адміністративний центр Київської області. Адміністративно до складу Київської області не входить. Місце розташування центральних органів влади України, іноземних місій, штаб-квартир більшості підприємств і громадських об'єднань, що працюють в Україні.",
             "2020-12-12T00:00:00",
             "Тестове"
          ]
       }
    ]
 }