import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import Input from "..";

const MockedInput = () => {
    const [inputValue, setInputValue] = useState<string>("");

    return <Input inputValue={inputValue} setInputValue={setInputValue} />;
};

describe("filter input tests", () => {
    it("tests if input is in the document", () => {
        render(<MockedInput />);
        const input = screen.getByPlaceholderText("Filter...");

        expect(input).toBeInTheDocument();
    });

    it("tests if input shows what user is writing", () => {
        render(<MockedInput />);
        const input = screen.getByPlaceholderText("Filter...");
        const value = "anything";

        fireEvent.change(input, { target: { value } });

        expect(input).toHaveValue(value);
    });
});
