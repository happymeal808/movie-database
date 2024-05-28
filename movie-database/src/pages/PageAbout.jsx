import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

function PageAbout() {

	useEffect(() => {
		document.title = `${appTitle} - About`;
	}, []);

    return (
        <main>
		    <section>
                <h2>About this App</h2>
                <p>This app was created with love ❤️ by Gillian</p>
            </section>
	    </main>
    );
	
}

export default PageAbout;