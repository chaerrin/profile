      var items_src=new Array();
      items_src[0]='<img src="./img/water.png" width=50>';
      items_src[1]='<img src="./img/oksusu.png" width=50>';
      items_src[2]='<img src="./img/blackbori.png" width=50>';
      items_src[3]='<img src="./img/cola.png" width=50>';
      items_src[4]='<img src="./img/cocopam.png" width=50>';
      items_src[5]='<img src="./img/pocari.png" width=50>';
      items_src[6]='<img src="./img/choco.png" width=50>';
      items_src[7]='<img src="./img/letsbe.png" width=50>';
      items_src[8]='<img src="./img/latte.png" width=50>';

      var totalMoney,count;

      window.onload = function() {
        reset();
        document.getElementById('total').value = totalMoney+'원';
        document.getElementById('insert100').onclick=function(){insert(100)};
        document.getElementById('insert500').onclick=function(){insert(500)};
        document.getElementById('insert1000').onclick=function(){insert(1000)};

        document.getElementById('menuButton1').onclick=function(){menuButton(1,1000)};
        document.getElementById('menuButton2').onclick=function(){menuButton(2,1600)};
        document.getElementById('menuButton3').onclick=function(){menuButton(3,1600)};
        document.getElementById('menuButton4').onclick=function(){menuButton(4,2000)};
        document.getElementById('menuButton5').onclick=function(){menuButton(5,1200)};
        document.getElementById('menuButton6').onclick=function(){menuButton(6,1800)};
        document.getElementById('menuButton7').onclick=function(){menuButton(7,1100)};
        document.getElementById('menuButton8').onclick=function(){menuButton(8,1000)};
        document.getElementById('menuButton9').onclick=function(){menuButton(9,1300)};
        document.getElementById('returnButton').onclick = returnButton;
        document.getElementById('confirm').onclick=confirm;
      }

      function reset(){
        totalMoney=0;
        count=0;
      }

      function insert(data){
          totalMoney += data;
          document.getElementById('total').value=totalMoney+'원';
      }

      function menuButton(itemNumber, itemPrice) {
        if(count < 10) {
          if(totalMoney >= itemPrice) {
            document.getElementById('selected').innerHTML += items_src[itemNumber - 1];
            count++;
            totalMoney -= itemPrice;
            document.getElementById('total').value = totalMoney + '원';
          }
          else{
            alert('잔액이 부족합니다.');
          }
        }
        else {
          alert('한 번에 최대 10개까지만 구매 가능합니다.');
        }
      }

      function returnButton(){
        if(totalMoney!=0||document.getElementById('selected').innerHTML!=''){
          document.getElementById('basketItems').innerHTML+=document.getElementById('selected').innerHTML
          document.getElementById('selected').innerHTML='';
          var return500=parseInt(totalMoney/500);
          var return100=totalMoney%500/100;
          count=0;
          if(document.getElementById('return500').value>=1||document.getElementById('return100').value>=1){
            document.getElementById('return500').value=parseInt(document.getElementById('return500').value)+parseInt(return500);
            document.getElementById('return100').value=parseInt(document.getElementById('return100').value)+parseInt(return100);
          }else{
            document.getElementById('return500').value=parseInt(return500);
            document.getElementById('return100').value=parseInt(return100);
          }
          totalMoney=0;
          document.getElementById('total').value=totalMoney+'원';
        }
      }
      function confirm(){
        if(totalMoney==0){
          document.getElementById('return500').value="";
          document.getElementById('return100').value="";
          reset();
        }else{
          alert('잔액반환을 먼저 해야 합니다');
        }
      }