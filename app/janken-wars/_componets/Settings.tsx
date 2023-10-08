import { Button, Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, PopoverBody, Stack, InputGroup, InputLeftAddon, VStack, Box, Center } from '@chakra-ui/react';
import { FormSliderInput } from '../../_components/forms/inputs/Slider';
import { Form } from '../../_components/forms/Form';
import { FormButton } from '../../_components/forms/FormButton';
import { FormInput } from '../../_components/forms/inputs/Input';
import { initialSettingValues } from '../_values/_constants';
import { Bold, Small } from '../../_components/parts/Text';



export function Settings(props: { onSubmit: (newValues: any) => void; }) {

    return (
        <Popover>
            {({ isOpen, onClose }) => (
                <>
                    <PopoverTrigger>
                        <Button variant='outline' children='設定変更' />
                    </PopoverTrigger>

                    <PopoverContent>
                        <PopoverCloseButton />
                        <PopoverBody>
                            <Form
                                defaultValues={initialSettingValues}
                                onSubmit={(newValues) => { onClose(); props.onSubmit(newValues); }}
                            >
                                <VStack alignItems='stretch' spacing={4}>
                                    <SizeInputs />
                                    <SpeedInput />
                                    <Box textAlign='right'>
                                        <FormButton children='決定' />
                                    </Box>
                                </VStack>
                            </Form>
                        </PopoverBody>
                    </PopoverContent>
                </>
            )}
        </Popover>
    );
};



function SizeInputs() {

    return (
        <div>
            <Small fontWeight='bold' color='subtext'>初期個数</Small>
            <Stack gap={1} maxWidth='xs'>
                <InputGroup>
                    <InputLeftAddon children='グーの個数' width='140px' />
                    <FormInput type='number' name='rock' />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='チョキの個数' width='140px' />
                    <FormInput type='number' name='scissors' />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='パーの個数' width='140px' />
                    <FormInput type='number' name='paper' />
                </InputGroup>
            </Stack>
        </div>
    );
};



function SpeedInput() {

    return (
        <div>
            <Small fontWeight='bold' color='subtext'>移動速度</Small>
            <Center>
                <span>遅く</span>
                <FormSliderInput width='140px' min={-500} max={-50} name='speed' />
                <span>速く</span>
            </Center>
        </div>
    );
};