import listTwig from './list.twig';

import listData from './list.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Lists' };

export const UnorderedList = () => `
  <div class="text-field">
    ${listTwig({ list__items: listData.unordered__list__items })}
  </div>
`;
export const BulletList = () => `
  <h3>Bullet point A with color marker</h3>
  <div class="text-field">
    ${listTwig({
      list__items: listData.unordered__list__items,
    })}
  </div>
  <h3>Bullet point B with symbol marker</h3>
  <div class="text-field">
    ${listTwig({
      list__items: listData.unordered__list__items,
      list__modifiers: ['symbol-link'],
    })}
  </div>
  <h3>Bullet point C with zodiak marker</h3>
  <div class="text-field">
    ${listTwig({
      list__items: listData.unordered__list__items,
      list__modifiers: ['custom-link'],
    })}
  </div>
  <h3>Bullet point D with image marker</h3>
  <div class="text-field">
    ${listTwig({
      list__items: listData.unordered__list__items,
      list__modifiers: ['icon-link'],
    })}
  </div>
`;
export const OrderedList = () => `
<div class="text-field">
  ${listTwig({ list__items: listData.ordered__list__items, list__type: 'ol' })}
</div>
`;
