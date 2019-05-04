import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

import Order from '../../models/enum/Order';

library.add(faSort, faSortUp, faSortDown);

interface Props {
  order: Order;
}

const Sort: React.FC<Props> = props => {
  const { order } = props;

  if (order === Order.asc) {
    return <FontAwesomeIcon icon={['fas', 'sort-up']} />;
  }

  if (order === Order.desc) {
    return <FontAwesomeIcon icon={['fas', 'sort-down']} />;
  }

  return <FontAwesomeIcon icon={['fas', 'sort']} />;
};

export { Sort as default };
