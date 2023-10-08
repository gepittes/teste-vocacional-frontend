import { Box, Flex, Text, Image, Heading, Stack, Input, Checkbox, Button} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export function Register(){
    
    const [checkedItems, setCheckedItems] = React.useState([false, false]);

    const allChecked = checkedItems.every(Boolean);
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked
   
    return(

        <Flex height={"100vh"}>
            <Box
                width={"50%"}
                height={"100%"}
                bgGradient={"linear(to-l, #FF675C, #FD3078)"}
                borderRadius={"5px"}
            >
                <Heading 
                    marginX={"70px"}
                    padding={"40px"}
                    color={"#FFF"}
                    fontFamily={"Poppins"}
                    fontWeight={"700"}
                    fontSize={"28px"}
                    lineHeight={"32px"}

                >
                    Como funciona o teste vocacional?
                </Heading>

                <Text
                    marginX={"100px"}
                    padding={"16px"}
                    color={"#FFF"}
                    fontFamily={"Poppins"}
                    fontWeight={"700"}
                    fontSize={"20px"}
                    lineHeight={"2px"}

                >
                    Responda algumas perguntas.
                </Text>

                <>
                    <Text
                        marginX={"20px"}
                        padding={"16px"}
                        color={"#FFF"}
                        fontFamily={"Poppins"}
                        fontWeight={"400"}
                        fontSize={"20px"}
                        lineHeight={"30px"}
                    >
                        Você verá diferentes opções em cada pergunta.
                        Escolha a opção que mais combina com você, a que você mais curte! 
                        <br/>
                        Se em alguma pergunta nenhuma das opções te chamar a atenção, não tem problema!
                        É só escolher a altenativa "tanto faz".
                    </Text>

                    <Text
                        marginX={"100px"}
                        padding={"16px"}
                        color={"#FFF"}
                        fontFamily={"Poppins"}
                        fontWeight={"700"}
                        fontSize={"20px"}
                        lineHeight={"30px"}
                    >
                        Descubra o seu perfil
                    </Text>

                    <Text
                        marginX={"50px"}
                        padding={"16px"}
                        color={"#FFF"}
                        fontFamily={"Poppins"}
                        fontWeight={"400"}
                        fontSize={"20px"}
                        lineHeight={"30px"}
                    >
                        Depois de responder todas as perguntas, 
                        vamos mostrar o resultado e te ajudar a identificar as áreas em que você tem mais habilidades e interesse.
                    </Text>
                </>
            </Box>

            <Box 
                padding={"4"} 
                width={"50%"} 
                borderRadius={"5px"} 
            >
                <Heading 
                    as={"h3"}
                    padding={"15px"}
                    marginX={"60px"}
                    fontFamily={"Poppins"}
                    fontWeight={"700"}
                    fontSize={"28px"}
                    lineHeight={"28px"}
                >
                    FALTA POUCO...
                </Heading>

                <Text
                     padding={"16px"}
                     marginX={"20px"}
                     fontFamily={"Poppins"}
                     fontWeight={"500"}
                     fontSize={"24px"}
                     lineHeight={"28px"}
                >
                    A resposta para sua carreira está a um passo de distância!
                </Text>

                <Stack spacing={"5"}>
                    <Input 
                        placeholder={"Nome Completo"} 
                        size={"lg"} 
                        padding={"20px"} 
                        focusBorderColor={"#000"}
                    ></Input>

                    <Input 
                        placeholder={"E-mail"} 
                        size={"lg"} 
                        padding={"20px"} 
                        focusBorderColor={"#000"}
                    ></Input>

                    <Input 
                        placeholder={"Telefone"} 
                        size={"lg"} 
                        padding={"20px"} 
                        focusBorderColor={"#000"}
                    ></Input>
                </Stack>

                <Checkbox
                    padding={"16px"}
                    isChecked = {allChecked}
                    isIndeterminate = {isIndeterminate}
                    onChange= {( e ) => setCheckedItems ([ e.target.checked, e.target.checked])}
                >
                    <Text
                        color={"#000"}
                        fontWeight={"500"}
                        fontSize={"16px"}
                    >
                        Estou de acordo com os <span style={{color:"#FF675C"}}>termos de uso.</span>
                    </Text>
                </Checkbox>

                <Button
                    bgGradient={"linear(to-l, #FF675C, #FD3078)"}
                    marginY={"50px"}
                    marginX={"160px"}
                    height={"8vh"}
                    width={"50vh"}
                >
                    <Text
                        color={"#FFF"}
                        fontWeight={"700"}
                        fontSize={"20px"}
                        fontFamily={"Poppins"}
                    >
                        Começar o teste agora!
                    </Text>
                </Button>
            </Box>
        </Flex>
    );
}