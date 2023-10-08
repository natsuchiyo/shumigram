import { Box, Center, Divider, Stack } from "@chakra-ui/react";
import { Linking } from "../parts/Linking";
import { Small } from "../parts/Text";
import { IconText } from "../parts/IconText";
import { memo } from "react";
import { EmailIcon, InfoIcon } from "../chakraIcons";



export const Footer = memo(function Footer() {

    return (
        <footer>

            <Center>
                <Divider marginY='4' borderBottomWidth='2px' width='80%' />
            </Center>

            <Center flexDirection='column' gap='2'>
                <Stack spacing='2'>
                    <Linking color='gray.900' href='/about' fontSize='sm' >
                        <IconText
                            icon={InfoIcon}
                            spacing='2'
                            iconProps={{ color: 'gray.900' }}
                            children='当サイトについて'
                        />
                    </Linking>

                    {/* <Linking color='gray.900' href='/contact' fontSize='sm' >
                        <IconText
                            icon={EmailIcon}
                            spacing='2'
                            iconProps={{ color: 'gray.900' }}
                            children='お問い合わせ'
                        />
                    </Linking> */}
                </Stack>
                <Small color='subtext'>© probabi</Small>
            </Center >
        </footer>
    );
});
