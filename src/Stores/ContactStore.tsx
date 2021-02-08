import { createContext, FC, useContext } from "react";
import {Contact} from '../Models/contact'



interface ContactStore {
    getAll: () => Contact[];
}

const ContactStoreContext = createContext<ContactStore | undefined>({getAll: () => []});

export const  useContactStore = () =>{
    const contactStoreContext = useContext(ContactStoreContext)
    return contactStoreContext
}

export const ContactStoreProvider: FC = ({children})=>{

    const getAll = () => contacts;

    return(

        <ContactStoreContext.Provider value={{getAll:getAll}}>
            {children}
        </ContactStoreContext.Provider>

    )
}

// context creates object in memory that you can run globally, :