const headerHTML = `
<!--// Mobile : sidebar toggle -->
<div id="aside-toggle" class="flex flex-none md:hidden items-center text-center px-4 z-10 cursor-pointer border-transparent border-2 hover:text-sky-600 hover:border-sky-50 hover:bg-sky-50 duration-200">
  <i id="aside-icon" class="fas fa-bars text-xl w-5"></i>
</div>

<!--// Site Logo -->
<div class="flex flex-grow md:flex-none items-center z-10 w-52">
  <a href="#" class="flex m-auto text items-center font-semibold tracking-widest uppercase focus:outline-none focus:shadow-outline">
    <img class="w-8 h-8 mr-2" src="${documentRoot}assets/images/planets.png" alt="Site Logo" />
    Dashboard
  </a>
</div>

<!--// Web:Menu -->
<div id="navigation" class="hidden md:flex flex-grow items-center text-left text-sm z-11 pl-4">
    <div class="mr-4 p-2 cursor-pointer rounded hover:text-sky-600 hover:bg-sky-50 duration-200">
        <i class="fa-solid fa-layer-group text-sm"></i>
        <span class="ml-1 text-xs font-bold">Menu</span>
    </div>
</div>

<!-- personal menu -->
<div class="flex flex-none items-center pr-2 md:px-4 z-12">
<!--  <span class="text-sm text-gray-800 mr-4">|</span>-->
  <div id="personal-info" class="flex flex-none py-1 px-2 items-center cursor-pointer rounded hover:text-sky-600 hover:bg-sky-50 duration-200">
    <span class="hidden md:flex text-xs font-bold mr-4">Jonny</span>
    <!--<i class="fas fa-cog text-sm"></i>-->
    <img src="./assets/images/man.png" class="h-8 w-8 rounded bg-blue-200" alt="profile">
  </div>
  <div id="personal-menu" class="hidden">
    <!-- Web -->
    <div class="invisible sm:visible fixed top-12 right-2 w-40 rounded-sm bg-white shadow z-20 border border-top-none border-solid border-gray-300">
      <ul class="w-full text-sm select-none">
        <li class="pl-2 py-2 cursor-pointer hover:bg-sky-50 hover:text-sky-600"><i class="fas fa-user-circle"></i> Profile</li>
        <a href="${documentRoot}login/login.html"><li class="pl-2 py-2 cursor-pointer hover:bg-sky-50 hover:text-sky-600"><i class="fas fa-sign-out-alt"></i> Logout</li></a>
      </ul>
    </div>
    <!-- Mobile -->
    <div class="visible sm:invisible fixed top-12 left-0 w-full bg-white border-b">
      <ul class="select-none">
        <li class="p-3 cursor-pointer hover:bg-sky-50 hover:text-sky-600"><i class="fas fa-user-circle"></i> Profile</li>
        <li class="p-3 cursor-pointer hover:bg-sky-50 hover:text-sky-600"><i class="fas fa-sign-out-alt"></i> Logout</li>
      </ul>
    </div>
  </div>
</div>`;

document.addEventListener("DOMContentLoaded", function(){
  let header = document.getElementById('header');
  header.classList.add('sticky', 'top-0', 'z-50', 'flex', 'flex-none', 'w-full', 'h-12');
  header.classList.add('bg-white','text-slate-700','border-b','border-slate-200');
  header.innerHTML = headerHTML;
  
  // 개인 메뉴
  const personalInfo = document.getElementById('personal-info');
  const personalMenu = document.getElementById('personal-menu');
  personalInfo.addEventListener('click',() => {
    personalMenu.classList.toggle('hidden');
  });

  // 사이드바 버튼
  const asideToggleBtn = document.getElementById('aside-toggle');
  const sidebarMenu = document.getElementById('aside-menu');
  const asideIcon = document.getElementById('aside-icon')
  asideToggleBtn.addEventListener('click', () => {
    sidebarMenu.classList.toggle('-translate-x-52');
    sidebarMenu.classList.toggle('md:translate-x-0');
    asideIcon.classList.toggle('fa-bars');
    asideIcon.classList.toggle('fa-times');
  });

  // 브라우저 크기 변경 시, 토글 기능 초기화
  let timer = null;
  const timeout = 500;
  window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      sidebarMenu.classList.add('-translate-x-52');
      sidebarMenu.classList.add('md:translate-x-0');
      asideIcon.classList.add('fa-bars');
      asideIcon.classList.remove('fa-times');
    }, timeout);
  });
});