const headerHTML = `
<!--// Mobile : Sidebar toggle -->
<div id="btn-sidebar-toggle" class="flex flex-none md:hidden items-center text-center px-4 z-10 cursor-pointer border-transparent border-2 hover:text-sky-600 duration-200">
  <i id="aside-icon" class="fas fa-bars text-xl w-5"></i>
</div>

<!--// Site Logo -->
<div class="flex flex-auto md:flex-none items-center z-10 md:w-52">
  <a href="#" class="flex m-auto text items-center font-semibold tracking-widest uppercase focus:outline-none focus:shadow-outline">
    <img class="w-8 h-8 mr-2" src="${documentRoot}assets/images/planets.png" alt="Site Logo" />
    Dashboard
  </a>
</div>

<!-- Project Navigation Wrapper -->
<div class="flex flex-initial md:flex-auto items-center z-11 h-12">
  <!-- Projects Menu Button -->
  <div id="btn-projects-menu" class="flex flex-none px-4 h-12 items-center cursor-pointer hover:text-sky-600 hover:bg-sky-50 duration-200 hover:border-b hover:border-slate-200">
    <i class="fa-solid fa-layer-group md:text-sm mr-2"></i>
    <span class="hidden md:inline-flex text-xs font-bold">Projects</span>
  </div>
  <!-- Projects Menu -->
  <div id="projects-menu" class="hidden">
    <!-- Web -->
    <div class="invisible md:visible fixed top-14 left-48 w-40 rounded-sm bg-white shadow-lg z-20 border border-top-none border-solid border-gray-300">
      <ul class="w-full text-sm select-none">
        <a href="${documentRoot}auth/otp.html"><li class="pl-2 py-2 cursor-pointer hover:bg-sky-50 hover:text-sky-600"><i class="fa-solid fa-gear mr-2"></i><span>Settings</span></li></a>
        <a href="${documentRoot}default/index.html"><li class="pl-2 py-2 cursor-pointer hover:bg-sky-50 hover:text-sky-600"><i class="fa-solid fa-circle-nodes mr-2"></i></i><span>Resources</span></li></a>
      </ul>
    </div>
    <!-- mobile -->
    <div class="visible md:invisible fixed top-12 left-0 w-full bg-white border-b z-20">
      <!-- Personal Menu -->
      <ul class="select-none">
        <li class="p-3 cursor-pointer hover:bg-sky-50 hover:text-sky-600"><i class="fa-solid fa-gear mr-2"></i><span>Settings</span></li>
        <li class="p-3 cursor-pointer hover:bg-sky-50 hover:text-sky-600"><i class="fa-solid fa-circle-nodes mr-2"></i><span>Resources</span></li>
      </ul>
    </div>
  </div>
</div>

<!-- personal menu -->
<div class="flex flex-none items-center pr-2 md:px-4 z-12 h-12">
<!--  <span class="text-sm text-gray-800 mr-4">|</span>-->
  <div id="btn-personal-menu" class="flex flex-none px-2 h-12 items-center cursor-pointer hover:text-sky-600 hover:bg-sky-50 duration-200 hover:border-b hover:border-slate-200">
    <span class="hidden md:flex text-xs font-bold mr-4">Jonny</span>
    <!--<i class="fas fa-cog text-sm"></i>-->
    <img src="${documentRoot}assets/images/man.png" class="h-8 w-8 rounded bg-blue-200" alt="profile">
  </div>
  <div id="personal-menu" class="hidden">
    <!-- Web -->
    <div class="invisible md:visible fixed top-14 right-2 w-40 rounded-sm bg-white shadow-lg z-20 border border-top-none border-solid border-gray-300">
      <ul class="w-full text-sm select-none">
        <li class="pl-2 py-2 cursor-pointer hover:bg-sky-50 hover:text-sky-600"><i class="fas fa-user-circle"></i> Profile</li>
        <a href="${documentRoot}auth/login.html"><li class="pl-2 py-2 cursor-pointer hover:bg-sky-50 hover:text-sky-600"><i class="fas fa-sign-out-alt"></i> Logout</li></a>
      </ul>
    </div>
    <!-- Mobile -->
    <div class="visible md:invisible fixed top-12 left-0 w-full bg-white border-b z-20 duration-200">
      <!-- Personal Menu -->
      <ul class="select-none">
        <li class="p-3 cursor-pointer hover:bg-sky-50 hover:text-sky-600"><i class="fas fa-user-circle"></i> Profile</li>
        <a href="${documentRoot}auth/login.html"><li class="p-3 cursor-pointer hover:bg-sky-50 hover:text-sky-600"><i class="fas fa-sign-out-alt"></i> Logout</li></a>
      </ul>
    </div>
  </div>
</div>`;

document.addEventListener("DOMContentLoaded", function(){
  let header = document.getElementById('header');
  header.classList.add('sticky', 'top-0', 'z-50', 'flex', 'w-full', 'h-12');
  header.classList.add('bg-white','text-slate-700','border-b','border-slate-200');
  header.innerHTML = headerHTML;

  // ???????????? ??????
  const btnProjectsMenu = document.getElementById('btn-projects-menu');
  const projectsMenu = document.getElementById('projects-menu');
  btnProjectsMenu.addEventListener('click',() => {
    projectsMenu.classList.toggle('hidden');
  });
  
  // ?????? ??????
  const btnPersonalMenu = document.getElementById('btn-personal-menu');
  const personalMenu = document.getElementById('personal-menu');
  btnPersonalMenu.addEventListener('click',() => {
    personalMenu.classList.toggle('hidden');
  });

  // ???????????? ??????
  const btnSidebarToggle = document.getElementById('btn-sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const asideIcon = document.getElementById('aside-icon')
  btnSidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-52');
    sidebar.classList.toggle('md:translate-x-0');
    asideIcon.classList.toggle('fa-bars');
    asideIcon.classList.toggle('fa-times');
  });

  // ???????????? ?????? ?????? ???, ????????? ?????? ?????? ?????????
  let timer = null;
  const timeout = 500;
  window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      sidebar.classList.add('-translate-x-52');
      sidebar.classList.add('md:translate-x-0');
      asideIcon.classList.add('fa-bars');
      asideIcon.classList.remove('fa-times');
    }, timeout);
  });
});