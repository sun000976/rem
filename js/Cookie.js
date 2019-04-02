	//查看cookie
    function getCookieByName(name){
        var arr=document.cookie.split("; ");
        for (var i = 0; i < arr.length; i++) {
            newarr=arr[i].split("=");
            if(newarr[0]==name){
                return newarr[1];
            }

        }
    }
    
    //设置cookie
    function setCookie(key,vlaue,expiresDate){
    	var odate=new Date();
    	odate.setDate(odate.getDate()+expiresDate);
    	document.cookie=key+"="+vlaue+";expires="+odate;
    }
    
    //移除cookie
    function removeCookie(key){
    	setCookie(key,"",-1);
    }
    