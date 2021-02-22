import { createContext, FC, useContext } from "react";
import {Contact} from '../Models/contact'


const contacts: Contact[] = [
    {name:'john Smith', phone: '00983635262'} 
]


interface ContactStore {
    getAll: () => Contact[];
    isEmpty: boolean;
}

const ContactStoreContext = createContext<ContactStore | undefined>(undefined);

export const  useContactStore = () =>{
    const contactStoreContext = useContext(ContactStoreContext)
    return contactStoreContext
}

export const ContactStoreProvider: FC = ({children})=>{

    const getAll = () => contacts;
    const isEmpty = contacts.length ===0



    return(

        <ContactStoreContext.Provider value={{getAll, isEmpty}}>
            {children}
        </ContactStoreContext.Provider>

    )
}

// context creates object in memory that you can run globally, :