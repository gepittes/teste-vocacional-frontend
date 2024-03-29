import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { ProfessionCardComponent } from '../components/profession-card/profession-card.component';
import { RegisterUserModalComponent } from '../components/register-user-modal/register-user-modal.component';
import { useState } from 'react';
import logoApplication from '../assets/icons/logo-icon.svg'
import technologyIcon from '../assets/icons/thecnology-icon.svg'
import biologyIcon from '../assets/icons/biology-icon.svg'
import humanIcon from '../assets/icons/human-icon.svg'
import communicationIcon from '../assets/icons/comunication.svg'
import artIcon from '../assets/icons/arts-icon.svg'

export function Home() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <Flex
            flexDirection={'column'}
      height='100vh'
    >
        <Flex>
            <Flex direction={'column'} justifyContent={'center'} gap={'15px'} width={'50%'}>
                <Image src={logoApplication} maxWidth={'360px'}/>
                <Text fontSize={'30px'} fontWeight={'bold'} margin={0} padding={0}>
                    Dê match com a carreira <br/> dos seus sonhos!
                </Text>
                <Text>
                    Escolher a profissão certa nunca foi tão fácil e divertido.
                    Faça nosso teste vocacional grátis e deixe a paixão pelos estudos te guiar na direção de um futuro promissor.
                    Descubra as opções que a Unidesc oferece para você brilhar no mercado de trabalho.
                </Text>

                <Button onClick={() => {setIsOpen(true)}}>
                    Começar o teste agora!
                </Button>
            </Flex>
            {/*<Image src={'src/assets/images/estudante-home.svg'} maxHeight={'600px'}/>*/}
        </Flex>

        <Flex direction={'column'} gap={'30px'}>
            <Text textAlign={'center'} fontSize={'30px'} fontWeight={'bold'}>
                Conheça as áreas que combinam com você!
            </Text>
            <Text textAlign={'center'} paddingX={'20px'}>
                Encontre o caminho que mais combina com você! Conheça as cinco áreas disponíveis para o
                teste vocacional e descubra onde suas habilidades e paixões se encaixam melhor.
            </Text>

            <Flex flexWrap={'wrap'} gap={'60px'} justifyContent={'center'}>
                <ProfessionCardComponent title={'Tecnológicas'} imgUrl={technologyIcon}/>
                <ProfessionCardComponent title={'Biológicas'} imgUrl={biologyIcon}/>
                <ProfessionCardComponent title={'Humanas'} imgUrl={humanIcon}/>
                <ProfessionCardComponent title={'Comunicação'} imgUrl={communicationIcon}/>
                <ProfessionCardComponent title={'Artes'} imgUrl={artIcon}/>
            </Flex>

            <Flex alignItems={'center'} justifyContent={'center'}>
                <Button onClick={() => {setIsOpen(true)}}>Fazer teste agora!</Button>
            </Flex>
        </Flex>
        <RegisterUserModalComponent isOpen={isOpen} closeModal={() => setIsOpen(false)}/>
    </Flex>
  )
}