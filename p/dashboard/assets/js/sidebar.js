const asideHTML = `
<!-- Left Menu : ST -->
<div class="min-h-max overflow-x-hidden">
  <ul class="select-none mt-4" id="sidebar">
    <li class="py-3 pl-4 text-xs cursor-pointer hover:text-sky-600 hover:bg-sky-50 border-r-4 border-transparent hover:border-sky-500">
      <span><i class="fas fa-columns w-4 mr-2"></i>대시보드</span>
      <!-- 하위 메뉴 -->
      <div class="hidden fixed left-52 top-12 w-40 m-1 text-slate-700 text-left bg-white border border-slate-300 rounded-lg shadow transition ease-in-out duration-200">
        <div class="cursor-default py-2 pl-4 bg-sky-50 text-slate-800 font-bold">대시보드</div>
        <ul class="m-1">
          <li class="py-2 pl-4 cursor-pointer rounded hover:bg-sky-50 hover:text-sky-600">대시보드 타입 1</li>
          <li class="py-2 pl-4 cursor-pointer rounded hover:bg-sky-50 hover:text-sky-600">대시보드 타입 2</li>
          <li class="py-2 pl-4 cursor-pointer rounded hover:bg-sky-50 hover:text-sky-600">대시보드 타입 3</li>
        </ul>
      </div>
    </li>
    <li class="py-3 pl-4 text-xs cursor-pointer hover:text-sky-600 hover:bg-sky-50 border-r-4 border-transparent hover:border-sky-500">
      <span><i class="fa-solid fa-server w-4 mr-2"></i>자원관리</span>
      <!-- 하위 메뉴 -->
      <div class="hidden fixed left-52 top-16 w-40 m-1 text-slate-700 text-left bg-white border border-slate-300 rounded-lg shadow transition ease-in-out duration-200">
        <div class="cursor-default py-2 pl-4 bg-sky-50 text-slate-800 font-bold">자원 관리</div>
        <ul class="m-1">
          <li class="py-2 pl-4 cursor-pointer rounded hover:bg-sky-50 hover:text-sky-600">서버 관리</li>
          <li class="py-2 pl-4 cursor-pointer rounded hover:bg-sky-50 hover:text-sky-600">IDC 관리</li>
          <li class="py-2 pl-4 cursor-pointer rounded hover:bg-sky-50 hover:text-sky-600">렉 관리</li>
          <li class="py-2 pl-4 cursor-pointer rounded hover:bg-sky-50 hover:text-sky-600">스위치 관리</li>
        </ul>
      </div>
    </li>
    <li class="py-3 pl-4 text-xs cursor-pointer hover:text-sky-600 hover:bg-sky-50 border-r-4 border-transparent hover:border-sky-500">
      <span><i class="fa-solid fa-cubes w-4 mr-2"></i>컴포넌트</span>
      <!-- 하위 메뉴 -->
      <div class="hidden fixed left-52 top-28 w-40 m-1 text-slate-700 text-left bg-white border border-slate-300 rounded-lg shadow transition ease-in-out duration-200">
        <div class="cursor-default py-2 pl-4 bg-sky-50 text-slate-800 font-bold">컴포넌트</div>
        <ul class="m-1">
          <li class="py-2 pl-4 cursor-pointer rounded hover:bg-sky-50 hover:text-sky-600">컴포넌트 1</li>
          <li class="py-2 pl-4 cursor-pointer rounded hover:bg-sky-50 hover:text-sky-600">컴포넌트 2</li>
          <li class="py-2 pl-4 cursor-pointer rounded hover:bg-sky-50 hover:text-sky-600">컴포넌트 3</li>
        </ul>
      </div>
    </li>
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

  const liList = document.querySelectorAll("#sidebar > li");
  const sidebarObj = document.getElementById("sidebar").parentElement;


  let parentMenuFocus = false;
  let childMenuFocus = false;
  let parentChildObj = null;
  let prevChildObj = null;
  // 메뉴 마우스 오버 시, 하위 메뉴 팝업
  liList.forEach( liObj => {
    liObj.addEventListener('mouseenter', () => {
      parentChildObj = liObj.querySelector('div');
      parentMenuFocus = true;

      // 이전 하위 메뉴 객체 체크
      if(prevChildObj !== null) {
        prevChildObj.classList.add('hidden');
      }

      // 하위 요소 체크
      if(parentChildObj !== null ){
        // 하위 메뉴가 있는 경우 보이기
        parentChildObj.classList.remove('hidden');

        // 1차 메뉴 마우스 아웃 이벤트
        liObj.addEventListener('mouseleave',() => {
          parentMenuFocus = false;
          // 하위 메뉴 접근 판단을 위해 딜레이 타임 후, 상태 체크
          setTimeout(menuEvent, 200);
        });

        // 2차 메뉴 마우스 오버 이벤트
        parentChildObj.addEventListener('mouseenter', () => {
          childMenuFocus = true;
        });

        // 2차 메뉴에서 마우스 아웃 이벤트
        parentChildObj.addEventListener('mouseleave', () => {
          parentChildObj.classList.add('hidden');
          childMenuFocus = false;
        });

        prevChildObj = parentChildObj;
      } else {
        prevChildObj = null;
      }
    });
  });

  let menuEvent = () => {
    if(prevChildObj !== null && parentMenuFocus === false && childMenuFocus === false){
      prevChildObj.classList.add('hidden');
    }
  };

  // 주소기반 메뉴 포커스
  const currentUrl = window.location.href;
  console.log(currentUrl);
});