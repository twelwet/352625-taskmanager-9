// filters.js

const filterTemplate = (value) => {
  return `
    <input
      type="radio"
      id="filter__${value.name}"
      class="filter__input visually-hidden"
      name="filter"
      ${value.checked ? `checked` : ``} ${value.disabled ? `disabled` : ``}
    />
    <label for="filter__${value.name}" class="filter__label">
      ${value.name}
        <span class="filter__archive-count">${value.count}</span>
    </label>
  `;
};

const filtersData = [
  {
    name: `all`,
    checked: true,
    disabled: false,
    count: 15
  },
  {
    name: `overdue`,
    checked: false,
    disabled: true,
    count: 0
  },
  {
    name: `today`,
    checked: false,
    disabled: true,
    count: 0
  },
  {
    name: `favorites`,
    checked: false,
    disabled: false,
    count: 1
  },
  {
    name: `repeating`,
    checked: false,
    disabled: false,
    count: 1
  },
  {
    name: `tags`,
    checked: false,
    disabled: false,
    count: 1
  },
  {
    name: `archive`,
    checked: false,
    disabled: false,
    count: 115
  },
];

const getFiltersTemplate = (filters) => {
  let template = ``;
  for (let value of filters) {
    template += filterTemplate(value);
  }
  return template;
};

const filtersTemplate = getFiltersTemplate(filtersData);

export default filtersTemplate;
