const asideHTML = `
<!-- Left Menu : ST -->
<div class="overflow-y-auto overflow-x-hidden">
  <ul class="select-none mt-4" id="menu-ext">
    <li class="py-3 pl-4 text-xs cursor-pointer hover:text-sky-600 hover:bg-sky-50 border-r-4 border-transparent hover:border-sky-500"><i class="fas fa-columns w-4 mr-2"></i>대시보드</li>
    <li class="py-3 pl-4 text-xs cursor-pointer hover:text-sky-600 hover:bg-sky-50 border-r-4 border-transparent hover:border-sky-500">
      <span><i class="fas fa-users w-4 mr-2"></i>계정관리</span>
      <!-- 하위 메뉴 -->
      <div class="hidden fixed left-52 top-24 w-52 h-10 m-1 p-2 bg-white border border-slate-200 shadow-lg">
        TEST
      </div>
    </li>
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
  asideObj.classList.add('fixed','top-0','left-0','z-10','w-52','h-screen','pt-12');
  asideObj.classList.add('bg-white','text-slate-700','text-sm');
  asideObj.classList.add('items-center','flex-row','flex-no-wrap',);
  asideObj.classList.add('transform','-translate-x-52','md:translate-x-0','ease-out','duration-200');
  asideObj.classList.add('border-r-[1px]','border-slate-200');
  asideObj.innerHTML = asideHTML;

  let focusMenuObj = null;
  const liList = document.getElementById('menu-ext').querySelectorAll("li");
  // 메뉴 마우스 오버 시, 하위 메뉴 팝업
  liList.forEach( liObj => {
    liObj.addEventListener('mouseenter', () => {
      const extObj = liObj.querySelector('div');
      if(extObj !== null ){
        extObj.classList.remove('hidden');
      }
    });
    liObj.addEventListener('mouseleave', () => {
      const extObj = liObj.querySelector('div');
      // if(extObj !== null ){
      //   extObj.addEventListener('mouseenter', () => {
      //
      //   });
      //
      //   extObj.classList.toggle('hidden');
      // }
    });
  });

  // 메뉴 펼침/닫힘 이벤트
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