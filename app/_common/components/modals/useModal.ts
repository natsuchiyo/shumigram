import { atom, atomFamily, useRecoilValue, useSetRecoilState } from "recoil";


export const isOpenModalAtomFamily = atomFamily<boolean, number>({
    key: 'isOpenModalAtomFamily',
    default: false
});



export const modalIndexAtom = atom<any>({
    key: 'modalIndexAtom',
    default: null
});






export const useModal = <T extends any = any>(modalNumber = 0) => {

    const values = useModalValues<T>(modalNumber);

    const handers = useModalHandlers<T>(modalNumber);


    return { ...values, ...handers };
};





export const useModalValues = <T extends any = any>(modalNumber = 0) => {

    const isOpen = useRecoilValue(isOpenModalAtomFamily(modalNumber));

    const modalIndex = useRecoilValue<T | undefined | null>(modalIndexAtom);


    return { isOpen, modalIndex };
};



export const useModalHandlers = <T extends any>(modalNumber = 0) => {


    const setIsOpen = useSetRecoilState(isOpenModalAtomFamily(modalNumber));

    const setModalIndexe = useSetRecoilState<T | undefined | null>(modalIndexAtom);


    const openModal = (modalIndex?: T) => {
        setIsOpen(true);
        setModalIndexe(modalIndex);
    };


    const openModalClosure = (modalIndex?: T) => () => {
        openModal(modalIndex);
    };


    const closeModal = () => {
        setIsOpen(false);
        setModalIndexe(null);
    };


    return { openModal, closeModal, openModalClosure };
};


