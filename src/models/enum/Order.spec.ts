import Order from './Order';

describe('Order', () => {
  it('changeSort', () => {
    const desc = Order.changeSort(Order.asc);
    expect(desc).toBe(Order.desc);

    const asc = Order.changeSort(Order.desc);
    expect(asc).toBe(Order.asc);
  });
});
