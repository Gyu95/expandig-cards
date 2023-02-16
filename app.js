//alert('테스트');
const panels = document.querySelectorAll('.panel');
panels.forEach( panel => {
  panel.addEventListener('click',() => {
    removeActive(); //먼저 active클래스 제거
    panel.classList.add('active');
  });
})
//반복문 1개의 아이템을 전달 후 하나씩 반복문을 실행
function removeActive(){
  panels.forEach (panel => {
    panel.classList.remove('active');
  }) 
}