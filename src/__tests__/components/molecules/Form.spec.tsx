import { useState as useStateMock } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "../../../components/organisms/Form/Form";
import userEvent from "@testing-library/user-event";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));
const setState = jest.fn();

(useStateMock as jest.Mock).mockImplementation(() => [
  { open: false },
  setState,
]);

const placeholders = [
  {
    input: /Name/i,
    description: "Jason Nembhard",
  },
  {
    input: /Email Address/i,
    description: "testcasesrock@gmail.com",
  },
  {
    input: /Phone/i,
    description: "222-222-2222",
  },
  {
    input: /Your Message/i,
    description: "222-222-2222",
  },
];

describe("Form Component", () => {
  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation((init) => [init, setState]);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
  test.each(placeholders)(
    "renders the modal when openModal is true",
    (placeholder) => {
      render(<Form />);

      const placeholderText = screen.getByPlaceholderText(placeholder.input);
      expect(placeholderText).toBeInTheDocument();
    }
  );

  it("renders the modal when openModal is false", async () => {
    render(<Form />);

    const name = screen.getByPlaceholderText(/Name/i);
    const email = screen.getByPlaceholderText(/Email Address/i);
    const phone = screen.getByPlaceholderText(/Phone/i);
    const message = screen.getByPlaceholderText(/Your Message/i);

    const submitButton = screen.getByText(/submit/i);

    userEvent.type(name, "Jason Nembhard");
    userEvent.type(email, "testcasesrock@gmail.com");
    userEvent.type(phone, "222-222-2222");
    userEvent.type(message, "I can't wait for this test case to pass");

    userEvent.click(submitButton);

    expect(useStateMock).toBeTruthy();

    expect(name).toHaveAttribute("value", "");
    expect(email).toHaveAttribute("value", "");
    expect(phone).toHaveAttribute("value", "");

    expect(message).toHaveAttribute("aria-invalid", "false");
  });
});
