import '../styles/style.scss';
import TableModdel from './table/tableModdel';
// import TableView from './table/tableView';

const tableModdel = new TableModdel();
// const tableView = new TableView(tableModdel.data);
// const tableView = new TableView(tableModdel.countriesName, tableModdel.nameOfFlags, tableModdel.casesCountry);

tableModdel.fetchCountries();

[...document.querySelectorAll('.full-screen__btn')].forEach((item) => {
  item.addEventListener('click', ({ target }) => {
    target.closest('.box-shadow').classList.toggle('full-screen__active');
  });
});

// tableView.render();
