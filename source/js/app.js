
{
  const nav = document.querySelector("#nav");
  const navToggle = document.querySelector("#nav_toggle");

  nav.classList.remove('active');
  navToggle.classList.remove('hidden');

  navToggle.addEventListener('click', event => {
    event.preventDefault();

    navToggle.classList.toggle('active');
    nav.classList.toggle('active');
  })
}
