const categories = document.querySelectorAll('#categories .item');

console.log('Number of categories:', categories.length);

categories.forEach(category => {
  const heading = category.querySelector('h2').textContent;
  const elems = category.querySelectorAll('ul > li');
  console.log(`Category: ${heading}`);
  console.log(`Elements: ${elems.length}`);
});

