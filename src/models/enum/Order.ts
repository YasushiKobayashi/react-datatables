type OrderType = 'asc' | 'desc';

const asc: OrderType = 'asc';
const desc: OrderType = 'desc';

enum Order {
  asc,
  desc,
}

namespace Order {
  export const toString = (v: Order): OrderType => {
    switch (v) {
      case Order.desc:
        return desc;
      default:
        return asc;
    }
  };

  export const getList = (): Order[] => {
    return [Order.asc, Order.asc];
  };

  export const changeSort = (v: Order): Order => {
    switch (v) {
      case Order.desc:
        return Order.asc;
      default:
        return Order.desc;
    }
  };
}

export { Order as default };
