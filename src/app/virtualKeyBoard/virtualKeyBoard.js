const keyboard = [
  113,
  119,
  101,
  114,
  116,
  121,
  117,
  105,
  111,
  112,
  91,
  93,
  97,
  115,
  100,
  102,
  103,
  104,
  106,
  107,
  108,
  59,
  39,
  92,
  122,
  120,
  99,
  118,
  98,
  110,
  109,
  44,
  46,
  47,
];

function init() {
  let out = '';
  for (let index = 0; index < keyboard.length; index += 1) {
    if (index === 12 || index === 24) {
      out += '<div class=""clearfix></div>';
    }
    out += `<div class="k-key" data="${keyboard[index]}">${String.fromCharCode(
      keyboard[index]
    )}</div>`;
  }
  document.querySelector('#keyboard').innerHTML = out;
}

init();

document.addEventListener('keypress', (event) => {
  console.log(event);
  document.querySelectorAll('#keyboard .k-key').forEach((element) => {
    element.classList.remove('active');
  });
  document
    .querySelector(`#keyboard .k-key[data="${event.keyCode}"]`)
    .classList.add('active');
  setTimeout(() => {
    document
      .querySelector(`#keyboard .k-key[data="${event.keyCode}"]`)
      .classList.remove('active');
  }, 300);
});

document.querySelectorAll('#keyboard .k-key').forEach((element) => {
  element.addEventListener('click', (event) => {
    document.querySelectorAll('#keyboard .k-key').forEach((element) => {
      element.classList.remove('click');
    });
    let code = event.getAttribute('data');
    this.classList.add('active');
  });
});
