import { Container, IconContainer, InputContainer, CustomInput } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface IInput {
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
}

const Input: FC<IInput> = ({ inputValue: value, setInputValue }) => (
    <Container>
        <IconContainer>
            <AiOutlineSearch />
        </IconContainer>
        <InputContainer>
            <CustomInput type="text" value={value} onChange={(event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)} />
        </InputContainer>
    </Container>
);

export default Input;
