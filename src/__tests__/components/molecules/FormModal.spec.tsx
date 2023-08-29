import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormModal from "../../../components/molecules/FormModal/FormModal";
import userEvent from "@testing-library/user-event";

describe("FormModalComponent", () => {
  it("renders the modal when openModal is true", () => {
    render(<FormModal openModal={true} closeModal={() => {}} />);

    const modalElement = screen.getByRole("presentation");
    expect(modalElement).toBeInTheDocument();
  });

  it("calls closeModal when close button is clicked", () => {
    const closeModalMock = jest.fn();
    render(<FormModal openModal={true} closeModal={closeModalMock} />);

    const closeButton = screen.getByText("close");
    userEvent.click(closeButton);

    expect(closeModalMock).toHaveBeenCalled();
  });
});
