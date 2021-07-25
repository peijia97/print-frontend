export const INVOICE = {
  invoiceNo: "#111",
  stNo: "XXXSTXXX",
  issueDateTime: "23/07/21, 11:50 PM",
  orderDateTime: "23/07/21, 11:50 PM",
  merchantName: "Best Merchant Pte. Ltd.",
  billingAddress: "1, Flyer Street, Flyer Town, 57000 Kuala Lumpur, Malaysia",
  shippingAddress: "2, Jonker Street, Melaka Town, 45000 Melaka, Malaysia",
  taxPercentage: 0.5,
  currency: "MYR",
  orderItems: [
    {
      name: "Item 1",
      price: 100,
      quantity: 5,
      discount: 0,
      taxPercentage: 0,
      totalExcludeTax: 500,
      totalIncludeTax: 502.5
    },
    {
      name: "Item 2",
      price: 200,
      quantity: 5,
      discount: 0,
      taxPercentage: 0,
      totalExcludeTax: 1000,
      totalIncludeTax: 1005
    }
  ],
  taxSummary: [
    { code: "SR", percentage: 0, amount: 0, tax: 0 },
    { code: "ZR", percentage: 0, amount: 0, tax: 0 }
  ],
  remarks: "-"
};

export const BULK_INVOICE_LIST = [
  {
    invoiceNo: "#111",
    stNo: "XXXSTXXX",
    issueDateTime: "23/07/21, 11:50 PM",
    orderDateTime: "23/07/21, 11:50 PM",
    merchantName: "Best Merchant Pte. Ltd.",
    billingAddress: "1, Flyer Street, Flyer Town, Kuala Lumpur, Malaysia",
    shippingAddress: "2, Jonker Street, Melaka Town, Melaka, Malaysia",
    taxPercentage: 0,
    currency: "MYR",
    orderItems: [
      {
        name: "Item 1",
        price: 100,
        quantity: 5,
        discount: 0,
        taxPercentage: 0,
        totalExcludeTax: 500,
        totalIncludeTax: 500
      }
    ],
    taxSummary: [{ code: "SR", percentage: 0, amount: 0, tax: 0 }],
    remarks: "-"
  },
  {
    invoiceNo: "#222",
    stNo: "XXXSTXXX",
    issueDateTime: "23/07/21, 11:50 PM",
    orderDateTime: "23/07/21, 11:50 PM",
    merchantName: "Best Merchant Pte. Ltd.",
    billingAddress: "1, Flyer Street, Flyer Town, Kuala Lumpur, Malaysia",
    shippingAddress: "2, Jonker Street, Melaka Town, Melaka, Malaysia",
    currency: "MYR",
    orderItems: [
      {
        name: "Item 1",
        price: 100,
        quantity: 5,
        discount: 0,
        taxPercentage: 0,
        totalExcludeTax: 500,
        totalIncludeTax: 500
      }
    ],
    taxSummary: [{ code: "SR", percentage: 0, amount: 0, tax: 0 }],
    remarks: "Item handle with caution"
  },
  {
    invoiceNo: "#333",
    stNo: "XXXSTXXX",
    issueDateTime: "23/07/21, 11:50 PM",
    orderDateTime: "23/07/21, 11:50 PM",
    merchantName: "Best Merchant Pte. Ltd.",
    billingAddress: "1, Flyer Street, Flyer Town, Kuala Lumpur, Malaysia",
    shippingAddress: "2, Jonker Street, Melaka Town, Melaka, Malaysia",
    currency: "MYR",
    orderItems: [
      {
        name: "Item 1",
        price: 100,
        quantity: 5,
        discount: 0,
        taxPercentage: 0,
        totalExcludeTax: 500,
        totalIncludeTax: 500
      }
    ],
    taxSummary: [{ code: "SR", percentage: 0, amount: 0, tax: 0 }],
    remarks: "-"
  }
];

export const BULK_INVOICE_CN_LIST = [
  {
    id: "F0001",
    description: "Some text here",
    barcode: "F00010707F0020XXXXA1",
    name: "Simon Tan",
    phoneNumber: "0123456789",
    type: "Normal",
    size: "Size 2",
    status: "Flyer Not Paid",
    address: "1, Flyer Street, Flyer Town, Kuala Lumpur, Malaysia",
    postcode: "47600"
  },
  {
    id: "F0002",
    description: "Some text here",
    barcode: "F00010707F0020XXXXA2",
    name: "Simon Tan",
    phoneNumber: "0123456789",
    type: "Normal",
    size: "Size 2",
    status: "Flyer Not Paid",
    address: "1, Flyer Street, Flyer Town, Kuala Lumpur, Malaysia",
    postcode: "47600"
  },
  {
    id: "F0003",
    description: "Some text here",
    barcode: "F00010707F0020XXXXA3",
    name: "Simon Tan",
    phoneNumber: "0123456789",
    type: "Normal",
    size: "Size 2",
    status: "Flyer Not Paid",
    address: "1, Flyer Street, Flyer Town, Kuala Lumpur, Malaysia",
    postcode: "47600"
  },
  {
    id: "F0004",
    description: "Some text here",
    barcode: "F00010707F0020XXXXA4",
    name: "Simon Tan",
    phoneNumber: "0123456789",
    type: "Normal",
    size: "Size 2",
    status: "Flyer Not Paid",
    address: "1, Flyer Street, Flyer Town, Kuala Lumpur, Malaysia",
    postcode: "47600"
  }
];
