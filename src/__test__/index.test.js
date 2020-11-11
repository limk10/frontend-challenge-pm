import "@testing-library/jest-dom";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";

import store from "~/store";
import App from "~/App";

// test utils file
const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

test("full app rendering/navigating", () => {
  const { getByText } = renderWithRouter(<App />);
  expect(getByText(/Pagina não encontrada/i)).toBeInTheDocument();
});

test("list of transactions", async () => {
  const { getByTestId } = renderWithRouter(
    <Provider store={store()}>
      <App />
    </Provider>,
    { route: "/transaction" }
  );

  const cardList = await waitFor(() => getByTestId("card-list"));
  expect(cardList).toBeDefined();
});

test("create new transaction", async () => {
  const { getByTestId, getByText } = renderWithRouter(
    <Provider store={store()}>
      <App />
    </Provider>,
    { route: "/transaction/create" }
  );

  const dataForm = {
    nameCustomer: "Matheus Lopes",
    document: "056.042.411-64",
    cardNumber: "4111 1111 1111 1111",
    expirationDate: "01/29",
    cvv: "1423",
    amount: "R$ 500"
  };

  const fieldCustomerName = await waitFor(() => getByTestId("customerName"));
  const fieldDocument = await waitFor(() => getByTestId("document"));
  const fieldCardNumber = await waitFor(() => getByTestId("cardNumber"));
  const fieldExpirationDate = await waitFor(() =>
    getByTestId("expirationDate")
  );
  const fieldCVV = await waitFor(() => getByTestId("cvv"));
  const fieldAmount = await waitFor(() => getByTestId("amount"));

  fireEvent.change(fieldCustomerName, {
    target: {
      value: dataForm.nameCustomer
    }
  });

  fireEvent.change(fieldDocument, {
    target: {
      value: dataForm.document
    }
  });

  fireEvent.change(fieldCardNumber, {
    target: {
      value: dataForm.cardNumber
    }
  });

  fireEvent.change(fieldExpirationDate, {
    target: {
      value: dataForm.expirationDate
    }
  });

  fireEvent.change(fieldCVV, {
    target: {
      value: dataForm.cvv
    }
  });

  fireEvent.change(fieldAmount, {
    target: {
      value: dataForm.amount
    }
  });

  expect(fieldCustomerName.value).toBe(dataForm.nameCustomer);
  expect(fieldDocument.value).toBe(dataForm.document);
  expect(fieldCardNumber.value).toBe(dataForm.cardNumber);
  expect(fieldExpirationDate.value).toBe(dataForm.expirationDate);
  expect(fieldCVV.value).toBe(dataForm.cvv);
  expect(fieldAmount.value).toBe(dataForm.amount);

  const btnSubmit = await waitFor(() => getByTestId("submitTransactionButton"));

  fireEvent.click(btnSubmit);

  await waitFor(() => getByText(dataForm.nameCustomer));
});
