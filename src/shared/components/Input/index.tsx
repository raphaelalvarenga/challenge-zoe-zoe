import { Container, IconContainer, InputContainer, CustomInput } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface IInput {
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
}

const Input: FC<IInput> = ({ inputValue: value, setInputValue }) => {
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem("@zoe-zoe-financial-market:inputValue", event.target.value.trim());
        setInputValue(event.target.value.trim());
    };

    return (
        <Container>
            <IconContainer>
                <AiOutlineSearch />
            </IconContainer>
            <InputContainer>
                <CustomInput type="text" value={value} onChange={handleInput} placeholder="Filter..." />
            </InputContainer>
        </Container>
    );
};

export default Input;
