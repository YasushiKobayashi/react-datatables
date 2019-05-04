import * as React from 'react';
import { orderBy } from 'lodash';

import Order from './enum/Order';

type ContentType = string | React.ReactNode;
type ContentsType = ContentType[][];

interface DataTableModelInterface {
  contents: ContentsType;

  search: (searchValue: string) => ContentsType;
  searchSort: (searchValue: string, index: number, order: Order) => ContentsType;
}

class DataTableModel implements DataTableModelInterface {
  contents: ContentsType;

  constructor(contents?: ContentsType) {
    this.contents = contents || [];
  }

  search(searchValue: string): ContentsType {
    if (!searchValue) {
      return this.contents;
    }

    const contents = this.contents.filter(val => {
      let rst = false;
      val.forEach(v => {
        if (typeof v === 'string' && v.includes(searchValue)) {
          rst = true;
        }
      });
      return rst;
    });
    return contents;
  }

  searchSort(searchValue: string, index: number, order: Order): ContentsType {
    const contents = this.search(searchValue);
    return orderBy(contents, [index], [Order.toString(order)]);
  }
}

export { DataTableModel as default, DataTableModelInterface, ContentType, ContentsType };
