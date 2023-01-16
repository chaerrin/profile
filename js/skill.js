const tabList = document.querySelectorAll('.circle-menu .list li');
const contents = document.querySelectorAll('.cont_area .cont')
let activeCont = '';
console.log(tabList);
console.log(contents);

for(var i = 0; i < tabList.length; i++){
    tabList[i].querySelector('.btn').addEventListener('mouseover', function(e){
        e.preventDefault();
        for(var j = 0; j < tabList.length; j++){
            tabList[j].classList.remove('is_on');
            contents[j].style.display = 'none';
        }
        
        this.parentNode.classList.add('is_on');
        activeCont = this.getAttribute('href');
        console.log(activeCont);
        document.querySelector(activeCont).style.display = 'block';
    });
}