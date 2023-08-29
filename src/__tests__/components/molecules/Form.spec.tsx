import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "../../../components/organisms/Form/Form";

const placeholders = [/Name/i, /Email Address/i, /Phone/i, /Your Message/i];

describe("Form Component", () => {
  test.each(placeholders)(
    "renders the modal when openModal is true",
    (placeholder) => {
      render(<Form />);

      const placeholderText = screen.getByPlaceholderText(placeholder);
      expect(placeholderText).toBeInTheDocument();
    }
  );

  it("renders the modal when openModal is false", async () => {
    render(<Form />);

    const name = screen.getByPlaceholderText(/Name/i);
    const email = screen.getByPlaceholderText(/Email Address/i);
    const phone = screen.getByPlaceholderText(/Phone/i);
    const message = screen.getByPlaceholderText(/Your Message/i);

    const submitButton = screen.getByRole("button");

    fireEvent.change(name, { target: { value: "Jason Nembhard" } });
    fireEvent.change(email, { target: { value: "testcasesrock@gmail.com" } });
    fireEvent.change(phone, { target: { value: "222-222-2222" } });
    fireEvent.change(message, {
      target: { value: "I can't wait for this test case to pass" },
    });

    fireEvent.submit(submitButton);

    expect(submitButton).toBeCalledWith({
      name: "Jason Nembhard",
      emailAddress: "testcasesrock@gmail.com",
      phoneNumber: "222-222-2222",
      message: "I can't wait for this test case to pass",
    });
  });
});
