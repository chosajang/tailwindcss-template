const asideHTML = `
<!-- Left Menu : ST -->
<div id="sidebar-wrapper" class="min-h-max overflow-x-hidden">
  <ul class="select-none mt-4">
    <li class="py-3 pl-4 text-xs cursor-pointer hover:text-sky-600 hover:bg-sky-50 border-r-4 border-transparent hover:border-sky-500">
      <i class="fas fa-columns w-4 mr-2"></i><span>대시보드</span>
      <!-- 하위 메뉴 -->
      <div class="hidden fixed left-52 top-12 w-40 m-1 text-slate-700 text-left bg-white border border-slate-300 rounded shadow transition ease-in-out duration-200">
        <div class="cursor-default py-2 pl-4 bg-sky-50 text-slate-800 font-bold">대시보드</div>
        <ul class="m-1">
          <li class="py-2 pl-4 cursor-pointer rounded hover:bg-sky-50 hover:text-sky-600">대시보드 타입 1</li>
          <li class="py-2 pl-4 cursor-pointer rounded hover:bg-sky-50 hover:text-sky-600">대시보드 타입 2</li>
          <li class="py-2 pl-4 cursor-pointer rounded hover:bg-sky-50 hover:text-sky-600">대시보드 타입 3</li>
        </ul>
      </div>
    </li>
    <li class="py-3 pl-4 text-xs cursor-pointer hover:text-sky-600 hover:bg-sky-50 border-r-4 border-transparent hover:border-sky-500">
      <i class="fa-solid fa-server w-4 mr-2"></i><span>자원관리</span>
      <!-- 하위 메뉴 -->
      <div class="hidden fixed left-52 top-16 w-40 m-1 text-slate-700 text-left bg-white border border-slate-300 rounded shadow transition ease-in-out duration-200">
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
      <i class="fa-solid fa-cubes w-4 mr-2"></i><span>컴포넌트</span>
      <!-- 하위 메뉴 -->
      <div class="hidden fixed left-52 top-28 w-40 m-1 text-slate-700 text-left bg-white border border-slate-300 rounded shadow transition ease-in-out duration-200">
        <div class="cursor-default py-2 pl-4 bg-sky-50 text-slate-800 font-bold">컴포넌트</div>
        <ul class="m-1">
          <li class="py-2 pl-4 cursor-pointer rounded hover:bg-sky-50 hover:text-sky-600">컴포넌트 1</li>
          <li class="py-2 pl-4 cursor-pointer rounded hover:bg-sky-50 hover:text-sky-600">컴포넌트 2</li>
          <li class="py-2 pl-4 cursor-pointer rounded hover:bg-sky-50 hover:text-sky-600">컴포넌트 3</li>
        </ul>
      </div>
    </li>
  </ul>
  <div class="absolute w-full bottom-0 border-t">
    <div id="collapse" class="pl-4 py-3 border-slate-200 cursor-pointer hover:bg-sky-50 hover:text-sky-600 border-r-4 border-transparent hover:border-sky-500">
      <i class="fa-solid fa-angles-left w-4 mr-2"></i><span>Collapse Sidebar<span>
    </div>
  </div>
</div>
<!-- Left Menu : ED -->
`;

/*
 * DOM 트리 완성 후 실행
 */
document.addEventListener("DOMContentLoaded", function(){
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.add("fixed","top-0","left-0","z-10","w-52","h-screen","pt-12");
  sidebar.classList.add("bg-white","text-slate-700","text-sm");
  sidebar.classList.add("items-center","flex-row","flex-no-wrap",);
  sidebar.classList.add("transform","-translate-x-52","md:translate-x-0","ease-out","duration-200");
  sidebar.classList.add("border-r-[1px]","border-slate-200");
  sidebar.innerHTML = asideHTML;

  const liList = document.querySelectorAll("#sidebar-wrapper > ul > li");

  let parentMenuFocus = false;
  let childMenuFocus = false;
  let parentChildObj = null;
  let prevChildObj = null;
  // 메뉴 마우스 오버 시, 하위 메뉴 팝업
  liList.forEach( liObj => {
    liObj.addEventListener("mouseenter", () => {
      parentChildObj = liObj.querySelector("div");
      parentMenuFocus = true;

      // 이전 하위 메뉴 객체 체크
      if(prevChildObj !== null) {
        prevChildObj.classList.add("hidden");
      }

      // 하위 요소 체크
      if(parentChildObj !== null ){
        // 하위 메뉴가 있는 경우 보이기
        parentChildObj.classList.remove("hidden");

        // 1차 메뉴 마우스 아웃 이벤트
        liObj.addEventListener("mouseleave",() => {
          parentMenuFocus = false;
          // 하위 메뉴 접근 판단을 위해 딜레이 타임 후, 상태 체크
          setTimeout(menuEvent, 200);
        });

        // 2차 메뉴 마우스 오버 이벤트
        parentChildObj.addEventListener("mouseenter", () => {
          childMenuFocus = true;
        });

        // 2차 메뉴에서 마우스 아웃 이벤트
        parentChildObj.addEventListener("mouseleave", () => {
          parentChildObj.classList.add("hidden");
          childMenuFocus = false;
        });

        prevChildObj = parentChildObj;
      } else {
        prevChildObj = null;
      }
    });
  });

  // 2차 메뉴 가리기
  let menuEvent = () => {
    if(prevChildObj !== null && parentMenuFocus === false && childMenuFocus === false){
      prevChildObj.classList.add("hidden");
    }
  };

  // 주소기반 메뉴 포커스
  // const currentUrl = window.location.href;
  // console.log(currentUrl);

  // Collapse Sidebar Event
  const contentWrapperObj = document.getElementById("content-wrapper");
  const collapseObj = document.getElementById("collapse");
  const menuTextListObj = document.querySelectorAll("#sidebar-wrapper > ul > li > span,#collapse > span");
  const sidebarChildListObj = document.querySelectorAll("#sidebar-wrapper > ul > li > div");
  const collapseIconObj = document.querySelector("#sidebar-wrapper > div > div > i");

  let collapseCheck = false;
  collapseObj.addEventListener("click", () => {
    // Collapse Icon 변경
    collapseIconObj.classList.toggle("fa-angles-left");
    collapseIconObj.classList.toggle("fa-angles-right");
    // 컨텐츠 크기 조절
    contentWrapperObj.classList.toggle("md:ml-52");
    contentWrapperObj.classList.toggle("md:ml-12");
    // 사이드바 크기 조절
    sidebar.classList.toggle("w-52");
    sidebar.classList.toggle("w-12");
    // 사이드바 2차 메뉴 위치 조절
    sidebarChildListObj.forEach(childMenuObj => {
      childMenuObj.classList.toggle("left-52");
      childMenuObj.classList.toggle("left-12");
    })

    // collapse
    if(collapseCheck) {
      setTimeout(menuTextToggle,200);
      collapseCheck = false;
    } else {
      menuTextToggle();
      collapseCheck = true;
    }
  });

  let menuTextToggle = () => {
    menuTextListObj.forEach( menuTextObj => {
      // 텍스트 가리기
      menuTextObj.classList.toggle("hidden");
    });
  }

});