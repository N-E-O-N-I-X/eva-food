const menuData = {
  monday: {
    calories: '6310 кДж / 1507 кКал',
    dishes: [
      'Салат «Столичный» — 100 гр.',
      'Суп сырный с мясным фаршем — 400 гр.',
      'Филе куриное «Бризоль» — 100 гр.',
      'Картофель отварной с зеленью — 200 гр.',
      'Напиток Каркада — 250 мл.',
      'Пирожок с яблоком — 80 гр.',
      'Хлеб — 40 гр.',
      'Набор столовых приборов (вилка, нож, ложка, зубочистка, салфетка) — 1 шт.'
    ],
    image: '/images/monday.png'
  },
  tuesday: {
    calories: '6100 кДж / 1450 кКал',
    dishes: [
      'Салат «Греческий» — 120 гр.',
      'Борщ с говядиной — 400 гр.',
      'Котлета по-киевски — 150 гр.',
      'Гречка отварная — 200 гр.',
      'Компот из сухофруктов — 250 мл.',
      'Пирожок с капустой — 80 гр.',
      'Хлеб — 40 гр.',
      'Набор столовых приборов — 1 шт.'
    ],
    image: '/images/tuesday.png'
  },
  wednesday: {
    calories: '6200 кДж / 1480 кКал',
    dishes: [
      'Винегрет — 100 гр.',
      'Солянка мясная — 400 гр.',
      'Рыба запеченная — 120 гр.',
      'Рис отварной — 200 гр.',
      'Морс клюквенный — 250 мл.',
      'Булочка с маком — 80 гр.',
      'Хлеб — 40 гр.',
      'Набор столовых приборов — 1 шт.'
    ],
    image: '/images/wednesday.png'
  },
  thursday: {
    calories: '6400 кДж / 1530 кКал',
    dishes: [
      'Салат «Цезарь» — 120 гр.',
      'Суп гороховый с копченостями — 400 гр.',
      'Свинина тушеная — 150 гр.',
      'Пюре картофельное — 200 гр.',
      'Чай черный — 250 мл.',
      'Пончик — 80 гр.',
      'Хлеб — 40 гр.',
      'Набор столовых приборов — 1 шт.'
    ],
    image: '/images/thursday.png'
  },
  friday: {
    calories: '5900 кДж / 1410 кКал',
    dishes: [
      'Салат овощной — 100 гр.',
      'Щи из свежей капусты — 400 гр.',
      'Куриная грудка гриль — 130 гр.',
      'Овощи на пару — 200 гр.',
      'Сок яблочный — 250 мл.',
      'Печенье — 80 гр.',
      'Хлеб — 40 гр.',
      'Набор столовых приборов — 1 шт.'
    ],
    image: '/images/friday.png'
  },
  saturday: {
    calories: '6500 кДж / 1550 кКал',
    dishes: [
      'Салат «Оливье» — 120 гр.',
      'Рассольник — 400 гр.',
      'Гуляш из говядины — 150 гр.',
      'Макароны отварные — 200 гр.',
      'Кисель — 250 мл.',
      'Ватрушка с творогом — 80 гр.',
      'Хлеб — 40 гр.',
      'Набор столовых приборов — 1 шт.'
    ],
    image: '/images/saturday.png'
  },
  sunday: {
    calories: '6000 кДж / 1435 кКал',
    dishes: [
      'Салат из свеклы — 100 гр.',
      'Уха — 400 гр.',
      'Котлета куриная — 130 гр.',
      'Перловка с овощами — 200 гр.',
      'Компот вишневый — 250 мл.',
      'Кекс — 80 гр.',
      'Хлеб — 40 гр.',
      'Набор столовых приборов — 1 шт.'
    ],
    image: '/images/sunday.png'
  }
};

function updateMenu(day) {
  const data = menuData[day];
  const dishList = document.getElementById('dishList');
  const calories = document.getElementById('calories');
  const menuImage = document.getElementById('menuImage');
  
  calories.textContent = data.calories;
  
  dishList.innerHTML = '';
  data.dishes.forEach(dish => {
    const li = document.createElement('li');
    li.textContent = dish;
    dishList.appendChild(li);
  });
  
  menuImage.style.opacity = '0';
  setTimeout(() => {
    menuImage.src = data.image;
    menuImage.style.opacity = '1';
  }, 200);
}

document.querySelectorAll('.day-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
    
    this.classList.add('active');
    
    const day = this.getAttribute('data-day');
    updateMenu(day);
  });
});

updateMenu('monday');
