//put the item names from the data list that you want to ignore
	var mainIgnoreList = ['image_urls','avg_price','ean13','factual_id','size','servings','serving_size','upc'];

    var itemsList = list;
	/* css configurations*/
	//main UL / LI classes
	var mainULclass= 'mainULclass';
	var mainULid= 'mainULid';
	var mainLIclass= 'mainLIclass';

	//sub UL / LI classes
	var subULclass= 'subULclass';
	var subULid= 'subULid';
	var subLIclass= 'subLIclass';


	//builds the list items
	var html = '<ul id="'+mainULid+'" class="'+mainULclass+'">';
	master = value;
    for(var key in master){
		if(mainIgnoreList.indexOf(key) == -1){
			var val = master[key];
			if(val instanceof Array ){
				html = html + '<li class="'+mainLIclass+'"><ul  id="'+subULid+'" class="'+subULclass+'"><h4>'+key+'</h4>';
				for(var item in val){
                    var _class = itemsList[val[item]] ? itemsList[val[item]] : 'default';
					html = html + '<li class="'+subLIclass+' '+_class+'"> ' + val[item] + '</li>';
				}
				html = html + '</ul></li>';
			} else {
                var _class = itemsList[key] ? itemsList[key] : 'default';
				html = html + '<li class="'+mainLIclass+' '+_class+'" > '+ key + ' ' + master[key] + '</li>';
			}
		}

    }
	html = html + '</ul>';
	return html;