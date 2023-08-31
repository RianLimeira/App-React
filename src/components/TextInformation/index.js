import { Text } from "react-native";
import { styled } from "nativewind";

const TextStyled = styled(Text);

export default function TextInformation(props){
    return(
        <TextStyled className='text-black text-sm'>
          {props.title}
        </TextStyled>
    )
}