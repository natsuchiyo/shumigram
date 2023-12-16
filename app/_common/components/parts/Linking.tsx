import NextLink from 'next/link';
import { Link as ChakraLink, LinkOverlay as ChakraLinkOverlay, LinkOverlayProps, LinkProps } from '@chakra-ui/react';
import { ExternalLinkIcon } from '../chakraIcons';
import { getBrandColor } from '../../functions/theme';



export function Linking({ href, ...props }: LinkProps & { href: string; }) {

    return (
        <NextLink passHref legacyBehavior href={href}>
            <ChakraLink color='link' {...props as any} />
        </NextLink>
    );
}



export function ExternalLinking({ children, ...props }: LinkProps & { href: string; }) {

    return (
        <ChakraLink isExternal color='link' {...props as any}>
            {children}<ExternalLinkIcon verticalAlign='text-bottom' />
        </ChakraLink>
    );
}



export function LinkingOverlay({ href, ...props }: LinkOverlayProps & { href: string; }) {

    return (
        <NextLink passHref legacyBehavior href={href}>
            <ChakraLinkOverlay {...props as any} />
        </NextLink>
    );
}


export function ButtonLinking(props: LinkProps & { href: string; }) {

    return (
        <Linking
            textDecoration='none !importtant'
            _hover={{ backgroundColor: getBrandColor(100) }}
            {...props}
        />
    );
}


