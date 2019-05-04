import last from 'lodash-es/last';

import DataTableModel, { ContentType } from './DataTableModel';
import Order from './enum/Order';

import { contents } from '../../test/data';

const searchValue = 'React';

describe('DataTableModel', () => {
  it('search', () => {
    const data = new DataTableModel(contents);
    expect(data.search(searchValue).length).toBe(1);
  });

  it('sort', () => {
    const data = new DataTableModel(contents);
    const sorted = data.searchSort('', 2, Order.desc);
    const lastData = last<ContentType[]>(data.contents);

    if (lastData && lastData[1]) {
      expect(sorted[0][1]).toBe(lastData[1]);
    } else {
      expect(true).toBe(false);
    }
  });
});
