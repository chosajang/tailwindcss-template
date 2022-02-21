const asideHTML = `
<!-- Left Menu : ST -->
<div>
  <ul class="select-none mt-4" id="menu-ext">
    <a href="${documentRoot}"><li class="py-3 pl-4 text-xs cursor-pointer hover:text-sky-600 hover:bg-sky-50 border-r-4 border-transparent hover:border-sky-500 "><i class="fas fa-columns w-4 mr-2"></i>대시보드</li></a>
    <li class="py-3 pl-4 text-xs cursor-pointer hover:text-sky-600 hover:bg-sky-50 border-r-4 border-transparent hover:border-sky-500 "><i class="fas fa-users w-4 mr-2"></i>계정관리</li>
    <ul>
      <li class="py-2 pl-6 cursor-pointer hover:bg-sky-50 hover:text-sky-600">test</li>
      <li class="py-2 pl-6 cursor-pointer hover:bg-sky-50 hover:text-sky-600">test</li>
      <li class="py-2 pl-6 cursor-pointer hover:bg-sky-50 hover:text-sky-600">test</li>
    </ul>
  </ul>
</div>
<!-- Left Menu : ED -->
`;

/**
 * DOM 트리 완성 후 실행
 */
document.addEventListener("DOMContentLoaded", function(){
  let asideObj = document.getElementById('aside-menu');
  asideObj.classList.add('fixed','top-0','left-0','z-40','w-52','pt-12','h-screen');
  asideObj.classList.add('bg-white','text-slate-700','text-sm');
  asideObj.classList.add('items-center','overflow-y-auto','flex-row','flex-no-wrap','overflow-hidden');
  asideObj.classList.add('transform','-translate-x-52','md:translate-x-0','ease-out','duration-200');
  asideObj.classList.add('border-r-[1px]','border-slate-200');
  asideObj.innerHTML = asideHTML;
  
  // 메뉴 펼침/닫힘 이벤트
  const liList = document.getElementById('menu-ext').querySelectorAll("li");
  liList.forEach( liObj => {
    liObj.addEventListener('click', () => {
      const extMenuObj = document.getElementById(liObj.getAttribute('for'));
      if(extMenuObj != null ){
        extMenuObj.classList.toggle('hidden');
        const iObj = liObj.children[1].querySelector("i")
        iObj.classList.toggle('rotate-90');
      }
    });
  });

  // 주소기반 메뉴 포커스
  const currentUrl = window.location.href;
  console.log(currentUrl);
});