

export const TableTheme = {

    defaultProps: {
        colorScheme: 'gray'
    },

    baseStyle: {
        table: {
            borderStyle: 'solid',
            textAlign: 'center',
        },
        thead: {
            borderBottomWidth: '2px'
        },
        th: {
            textTransform: "none",
            textAlign: 'center',
        },
        td: {
            textAlign: 'center',
        },
    },

    variants: {

        'cellborder': {
            th: { borderWidth: '1px', },
            td: { borderWidth: '1px', },
            thead: { border: 'none' }
        },
    },

    sizes: {
        sm: {
            th: {
                px: "2",
                fontSize: "sm",
            },
            td: {
                px: "2",
                fontSize: "sm",
            },
        },
        md: {
            th: {
                px: "3",
                fontSize: "sm",
            },
            td: {
                px: "3",
            },
        }
    }
};
