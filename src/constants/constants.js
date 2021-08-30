export const INVOICE = {
  invoiceNo: "#111",
  stNo: "XXXSTXXX",
  issueDateTime: "23/07/21, 11:50 PM",
  orderDateTime: "23/07/21, 11:50 PM",
  merchantName: "Best Merchant Pte. Ltd.",
  billingAddress: "1, Flyer Street, Flyer Town, 57000 Kuala Lumpur, Malaysia",
  shippingAddress: "2, Jonker Street, Melaka Town, 45000 Melaka, Malaysia",
  taxPercentage: 0.05,
  currency: "MYR",
  orderItems: [
    {
      name: "Item 1",
      price: 100,
      quantity: 5,
      discount: 10
    },
    {
      name: "Item 2",
      price: 200,
      quantity: 5,
      discount: 0
    },
    {
      name: "Item 3",
      price: 200,
      quantity: 5,
      discount: 0
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
    taxPercentage: 0.05,
    currency: "MYR",
    orderItems: [
      {
        name: "Item 1",
        price: 100,
        quantity: 5,
        discount: 0
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
    taxPercentage: 0.06,
    orderItems: [
      {
        name: "Item 1",
        price: 100,
        quantity: 5,
        discount: 0
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
    taxPercentage: 0.05,
    orderItems: [
      {
        name: "Item 1",
        price: 100,
        quantity: 5,
        discount: 0
      }
    ],
    taxSummary: [{ code: "SR", percentage: 0, amount: 0, tax: 0 }],
    remarks: "-"
  }
];

export const BULK_INVOICE_CN_LIST = [
  {
    invoiceNo: "F0001",
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
    invoiceNo: "F0002",
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
    invoiceNo: "F0003",
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
    invoiceNo: "F0004",
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

export const BULK_SHOPEE_ORDER_LIST = [
  {
    invoiceNo: "210815MBBRWKE6",
    shipByDate: "18-08-2021",
    weight: "1.00000",
    parcelInfo: "N/A",
    deliveryCode: "KUL-KUL001",
    deliveryNumber: "013",
    deliveryAddressType: "HOME",
    barcode: "620000134764594",
    senderInfo: {
      name: "Botanica Boutique",
      phone: "60123456789",
      address: "12, Jalan Pelangi, Ampang Baru, Ampang, Selangor",
      postcode: "34900"
    },
    recipientInfo: {
      name: "Sarah Lee",
      phone: "60123456888",
      address:
        "33, Residensi L, No. 10, Jalan Perpaduan, Taman Rasa, Kuala Lumpur, Kuala Lumpur",
      postcode: "58000"
    },
    pod: {
      name: "",
      ic: ""
    }
  }
];

export const BULK_LAZADA_ORDER_LIST = [
  {
    invoiceNo: "295699099279202",
    trackingNumber: "MYMPA035757626",
    portCode: "H-KDS-TR",
    shipByDate: "18 Aug 2021",
    weight: "2 kg",
    parcelInfo: "N/A",
    deliveryNumber: "013",
    paymentType: "Non-COD",
    paymentAmount: "MYR 0",
    deliveryType: "STANDARD",
    deliveryAddressType: "HOME",
    senderInfo: {
      name: "Botanica Boutique",
      phone: "60123456789",
      address: "12, Jalan Pelangi, Ampang Baru, Ampang, Selangor",
      postcode: "34900"
    },
    recipientInfo: {
      name: "Sarah Lee",
      phone: "60123456888",
      address:
        "33, Residensi L, No. 10, Jalan Perpaduan, Taman Rasa, Kuala Lumpur, Kuala Lumpur",
      postcode: "58000"
    }
  }
];
