import React from 'react'
import Contact from './Contact'
import Jasper from '../images/jasper.png'
import Charlie from '../images/charlie.jpg'
import Cinnamon from '../images/cinnamon.png'
import Fluffy from '../images/dog-fluffy.png'

export default function App() {
    return (
        <div className="contacts">
            <Contact
                img = {Jasper}
                title = "Jasper"
                number = "+27 84 800 3995"
                email = "orton.nicole115@gmail.com"
            />
            <Contact
                img = {Charlie}
                title = "Charlie"
                number = "+27 84 800 3995"
                email = "orton.nicole115@gmail.com"
            />
            <Contact 
                img = {Cinnamon}
                title = "Cinnamon"
                number = "+961 78 842 961"
                email = "yasmine@donaleb.com"
            />
            <Contact 
                img = {Fluffy}
                title = "Fluffy"
                number="(021) 559 8484"
                email = "michelleheath5@gmail.com"
            />            
        
        </div>
    )
}