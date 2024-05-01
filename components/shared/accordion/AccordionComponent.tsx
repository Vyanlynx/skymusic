import Accordion from 'react-bootstrap/Accordion';

function AccordionComponent({children,playlistName}:any) {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{playlistName}</Accordion.Header>
                <Accordion.Body>
                    {children}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AccordionComponent;