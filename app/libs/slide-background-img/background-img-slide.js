var imgHead = [
            'img/office1.jpg',
            'img/office2.jpg',
            'img/vertical.jpg'
        ], i=1;
    function csaHead(){

        if(i > (imgHead.length-1)){
            $('#select-office').animate({'opacity':'0'},600,function(){
                i=1;
                $('#select-office').css({'background':'url('+imgHead[0]+')','background-size':'cover'});
            });
            $('#select-office').animate({'opacity':'1'},600);
        }else{
            $('#select-office').animate({'opacity':'0'},600,function(){
                $('#select-office').css({'background':'url('+imgHead[i]+')','background-size':'cover'});
                i++;
            });
            $('#select-office').animate({'opacity':'1'},600);
        }
        
    }
    var intervalCsaHead = setInterval(csaHead,5500);

var imgHead1 = [
            'img/1.jpg',
            'img/2.jpg',
            'img/3.jpg',
            'img/11.jpg'
        ], i=1;
    function csaHead1(){

        if(i > (imgHead1.length-1)){
            $('#comfort').animate({'opacity':'0'},600,function(){
                i=1;
                $('#comfort').css({'background':'url('+imgHead1[0]+')','background-size':'cover'});

            });
            $('#comfort').animate({'opacity':'1'},600);
        }else{
            $('#comfort').animate({'opacity':'0'},600,function(){
                $('#comfort').css({'background':'url('+imgHead1[i]+')','background-size':'cover'});
                i++;
            });
            $('#comfort').animate({'opacity':'1'},600);
        }
        
    }
    var intervalCsaHead1 = setInterval(csaHead1,5500);