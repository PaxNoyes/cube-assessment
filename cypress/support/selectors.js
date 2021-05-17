/// <reference types="cypress" />

// Product List
export const productList = ".ant-layout-content";

// Edit button that opens Edit Product module
export const editButton = '*[class^="anticon anticon-edit"]';

// Name field on edit product module
export const editName =
  ":nth-child(5) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body > .ant-form > :nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #name";

// Edit button on Edit Product module
export const editButtonOnProductModule =
  ":nth-child(5) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .ant-btn-primary";

// Top row of Product List
export const topRowOfProductList = '*[class^="ant-row ant-row-top"]';

// Product A
export const productA =
  ":nth-child(1) > .ant-card > .ant-card-actions > :nth-child(1) > :nth-child(1) > .anticon > svg";

// Product A Card Details
export const productACardDetails = ".ant-card-meta-detail";

// Edit Button on New Product
export const editButtonOnNewProduct = ".ant-btn-primary";

// Product Updated Message
export const productUpdatedMessage = '*[class^="ant-message"]';
