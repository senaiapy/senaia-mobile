/* eslint-disable unicorn/filename-case */

export enum statusEnum {
  CREATED = 'Order Created',
  MANAGER_ACCEPTED = 'Manager Accepted',
  ASSIGN_DELIVERY = ' Assign to Delivery',
  READY_TO_SELL = 'Ready to Sell',
  DELIVERY_ACCEPTED = 'Delivery Accepted',
  DELIVERY_DECLINE = 'Delivery Declined',
  DELIVERY_ARRIVED = 'Delivery Arrived',
  COMPLETED = 'Completed',
  USER_CANCEL = 'User Canceled',
  MANAGER_CANCEL = 'Manger Canceled',
  DELIVERY_FAILED = 'Delivery Failed',
  FAILED = 'Failed',
}
