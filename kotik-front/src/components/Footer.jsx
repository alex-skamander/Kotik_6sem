import {Container} from "react-bootstrap";

const fontStyle = {
    'verticalAlign': 'inherit;'
}

function Footer () {
    return (
        <div>
            <div className="text-muted py-5">
                <Container>
                    <p className="float-end mb-1">
                        <a href="/#"><font style={ fontStyle }><font style={ fontStyle }>Back
                            to top</font></font></a>
                    </p>
                    <p className="mb-1"><font style={ fontStyle }><font class="" style={ fontStyle }>You
                        have reached the end of the page. Believe me, there are more interesting things at the
                        top.</font></font></p>
                    <p className="mb-0"><font style={ fontStyle }><font style={ fontStyle }>©
                        2020–2021 KOTIK LLC. All rights reserved. Who would protect me so ...</font></font></p>
                </Container>
            </div>
        </div>
    )
}

export default Footer