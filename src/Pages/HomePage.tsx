import { FC } from "react";
import {Contact} from '../Models/contact';
import {useContactStore} from '../Stores/ContactStore'



interface Address {
    city:string;
    zip:number;
}




export const HomePage: FC = () => {

    const contactStore = useContactStore();

    return (
    
        <>
        <h1>Contact List </h1>
        {contactStore.getAll.map(c => <p>{c.name}, {c.phone}, {c.address?.city}</p> )}
        </>
    )

}



 //use '?' instead of && to check object exists
 //FC = functional component, in TS define the type 






