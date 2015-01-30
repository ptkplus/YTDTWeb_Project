function init() {
	
    if (window.google && google.gears) {
    	
        try {
        	//db = google.gears.factory.create('beta.database');
            				
			setAttrForCombobox(prefix_component + "DOITUONG_MA","DM_DOI_TUONG_span","DM_DOI_TUONG","getDmDoiTuongTP()","","checkDoituong();","");				
			setAttrForCombobox(prefix_component + "DT_DM_KHOI_BHYT_MA","DT_DM_KHOI_BHYT_span","DT_DM_KHOI_BHYT","getDtDmKhoiBhyt()","","","");
			
			document.getElementById(prefix_component + "DT_DM_KHOI_BHYT_MA").disabled = true;
			document.getElementById(prefix_component + "DT_DM_KHOI_BHYT_MA").className="myreadonly";
		 	if (document.getElementById( "DT_DM_KHOI_BHYT").disabled == false){
		 		changeDisabledAttr("DT_DM_KHOI_BHYT");  
		 	}
		 	
           	document.getElementById(prefix_component + "__thang").focus();
           	
        } catch (e) {
        	alert("init error: " + e.description);
        }
    }    
}

function setNgayThangBatDauKetThuc(thang,nam,tungay,denngay){
	  var thangVaoVien = document.getElementById(prefix_component + thang).value;
	  var namVaoVien = document.getElementById(prefix_component + nam).value;
	  var ngayhientai = document.getElementById(prefix_component + '__ngayhientai').value;
	  var thangHt = ngayhientai.substring(3,5);
	  var namHt = ngayhientai.substring(6);
	   
	  if ( namVaoVien == "" && namVaoVien.length == 0){
	     return;
	  }
	  
	  else if(namVaoVien < 1900 || namVaoVien > namHt){
		  	document.getElementById(prefix_component + nam).value = '';
		  	document.getElementById(prefix_component + nam).focus();
		  	return;
	  }
	  else if ( parseInt(namVaoVien) < 1900 || parseInt(namVaoVien) > 2300 ){
		  	 document.getElementById(prefix_component + nam).focus();
		     return;
	  }
	  else{
  
		  var thangVaoVien_Temp = thangVaoVien;
		  var thangVaoVien_Temp_2 = thangVaoVien;
		  
		  if (thangVaoVien != "" && thangVaoVien.length > 0){
		  	if (thangVaoVien.length == 1){
		  	   thangVaoVien_Temp = "0" + thangVaoVien;
		  	   thangVaoVien_Temp_2 = "0" + thangVaoVien;
		  	}
		  }
		  else{
		  	   thangVaoVien_Temp = "01";  
		  	   thangVaoVien_Temp_2="12";
		  	   thangVaoVien="1";
		  	   //document.getElementById(prefix_component + thang).value = "1";
		  }

		  document.getElementById(prefix_component + tungay).value="01/" + thangVaoVien_Temp + "/" + namVaoVien;  
	  	  if(thangVaoVien < 10)
	  	      thangVaoVien = "0"+thangVaoVien;
	  	  if(thangVaoVien == thangHt && namVaoVien == namHt){
			  	document.getElementById(prefix_component + denngay).value= ngayhientai;
		  }
		  else{
			  	document.getElementById(prefix_component + denngay).value= getLastDayOfMonth (parseInt(thangVaoVien),parseInt(namVaoVien)) + "/" + thangVaoVien_Temp_2 + "/" + namVaoVien;
		  }
  	}
}

function getLastDayOfMonth(month,year)
{
	var day;

	switch(month)
	{
		case 1 :
		case 3 :
		case 5 :
		case 7 :
		case 8 :
		case 10:
		case 12:
			day = 31;
			break;
		case 4 :
		case 6 :
		case 9 :
		case 11:
		   	day = 30;
			break;
		case 2 :
			if( ( (year % 4 == 0) && ( year % 100 != 0) ) 
                           || (year % 400 == 0) )
				day = 29;
			else
				day = 28;
			break;

	}

	return day;
}

function checkDoituong(){
	
	var doituong = document.getElementById(prefix_component + "DOITUONG_MA").value.toUpperCase();
	//alert("Doi tuong: " + doituong);
	if(doituong == "BH"){
		document.getElementById(prefix_component + "DT_DM_KHOI_BHYT_MA").disabled = false;
		document.getElementById(prefix_component + "DT_DM_KHOI_BHYT_MA").className="myinput";
	 	if (document.getElementById( "DT_DM_KHOI_BHYT").disabled == true){
	 		changeDisabledAttr("DT_DM_KHOI_BHYT");  
	 	}
	} else{
		document.getElementById(prefix_component + "DT_DM_KHOI_BHYT_MA").value = "";
		myOnblurTextbox(prefix_component + 'DT_DM_KHOI_BHYT_MA', 'DT_DM_KHOI_BHYT');
		document.getElementById(prefix_component + "DT_DM_KHOI_BHYT_MA").disabled = true;
		document.getElementById(prefix_component + "DT_DM_KHOI_BHYT_MA").className="myreadonly";
	 	if (document.getElementById( "DT_DM_KHOI_BHYT").disabled == false){
	 		changeDisabledAttr("DT_DM_KHOI_BHYT");  
	 	}
	}
	
}

