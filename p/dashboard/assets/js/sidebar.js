const asideHTML = `
<!--
<div class="flex flex-none items-center h-12 bg-gray-800">
  <a href="#" class="flex m-auto text-base text-gray-200 items-center font-semibold tracking-widest uppercase focus:outline-none focus:shadow-outline">
    <img class="w-6 h-6 mr-2" src="${documentRoot}assets/images/logo.png" alt="Site Logo" />
    Web Console
  </a>
</div> -->
<!--// Left Menu : ST -->
<div>
  <ul class="select-none mt-4" id="menu-ext">
<!--    <li class="pt-4 py-2 pl-4"><p class="text-xs font-bold text-gray-300">기본 메뉴</p></li>-->
    <a href="${documentRoot}"><li class="py-3 pl-4 text-xs cursor-pointer hover:text-slate-900 hover:bg-slate-300"><i class="fas fa-columns w-4 mr-2"></i>대시보드</li></a>
    <li class="py-3 pl-4 text-xs cursor-pointer hover:text-slate-900 hover:bg-slate-300"><i class="fas fa-users w-4 mr-2"></i>계정관리</li>
    <ul>
      <li class="py-2 pl-6 hover:text-slate-900 cursor-pointer hover:bg-slate-300">test</li>
      <li class="py-2 pl-6 hover:text-slate-900 cursor-pointer hover:bg-slate-300">test</li>
      <li class="py-2 pl-6 hover:text-slate-900 cursor-pointer hover:bg-slate-300">test</li>
    </ul>
  </ul>
</div><!--// Left Menu : ED -->
`;

/**
 * DOM 트리 완성 후 실행
 */
document.addEventListener("DOMContentLoaded", function(){
  let asideObj = document.getElementById('aside-menu');
  asideObj.classList.add('fixed','top-0','left-0','z-40','w-52','pt-12','h-screen');
  asideObj.classList.add('bg-slate-100','text-slate-700','text-sm');
  asideObj.classList.add('items-center','overflow-y-auto','flex-row','flex-no-wrap','overflow-hidden');
  asideObj.classList.add('transform','-translate-x-52','md:translate-x-0','ease-out','duration-200');
  asideObj.classList.add('border-r-[1px]','border-slate-300');
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