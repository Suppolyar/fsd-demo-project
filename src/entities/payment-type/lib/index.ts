import { PAYMENT_METHOD_LIST } from "../consts";

export const setLabelAndHintForPaymentMethodField = (
  paymentTypeName: string,
) => {
  const labelsAndHints = {
    [PAYMENT_METHOD_LIST.TOUCH_N_GO]: {
      label: "common.form.label.walletId",
      hint: "common.form.hint.walletId",
    },
    [PAYMENT_METHOD_LIST.VOLET]: {
      label: "common.form.label.walletId",
      hint: "common.form.hint.walletId",
    },
    [PAYMENT_METHOD_LIST.PERFECT_MONEY]: {
      label: "common.form.label.walletId",
      hint: "common.form.hint.walletId",
    },
    [PAYMENT_METHOD_LIST.TOPCHANGE]: {
      label: "common.form.label.walletId",
      hint: "common.form.hint.walletId",
    },
    [PAYMENT_METHOD_LIST.FASAPAY]: {
      label: "common.form.label.walletId",
      hint: "common.form.hint.walletId",
    },
    [PAYMENT_METHOD_LIST.ZIPAY]: {
      label: "common.form.label.walletId",
      hint: "common.form.hint.walletId",
    },
    [PAYMENT_METHOD_LIST.M10_AZN]: {
      label: "common.form.label.walletId",
      hint: "common.form.hint.walletId",
    },
    [PAYMENT_METHOD_LIST.OVO]: {
      label: "common.form.label.phoneNumber",
      hint: "common.form.hint.phoneNumber",
    },
    [PAYMENT_METHOD_LIST.DANA]: {
      label: "common.form.label.phoneNumber",
      hint: "common.form.hint.phoneNumber",
    },
    [PAYMENT_METHOD_LIST.MOMO]: {
      label: "common.form.label.phoneNumber",
      hint: "common.form.hint.phoneNumber",
    },
    [PAYMENT_METHOD_LIST.PAYTM]: {
      label: "common.form.label.phoneNumber",
      hint: "common.form.hint.phoneNumber",
    },
    [PAYMENT_METHOD_LIST.PHONEPE]: {
      label: "common.form.label.upiId",
      hint: "common.form.hint.upiId",
    },
    [PAYMENT_METHOD_LIST.TRUEMONEY]: {
      label: "common.form.label.phoneNumber",
      hint: "common.form.hint.phoneNumber",
    },
    [PAYMENT_METHOD_LIST.GOPAY]: {
      label: "common.form.label.email",
      hint: "common.form.hint.email",
    },
    [PAYMENT_METHOD_LIST.ONLINENAIRA]: {
      label: "common.form.label.username",
      hint: "common.form.hint.username",
    },
    [PAYMENT_METHOD_LIST.SHOPEEPAY]: {
      label: "common.form.label.username",
      hint: "common.form.hint.username",
    },
  };

  return (
    labelsAndHints[paymentTypeName] || {
      label: "common.form.label.walletId",
      hint: "common.form.hint.walletId",
    }
  );
};
