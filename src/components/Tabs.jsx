export default function Tabs({children, buttons, ButtonsComponent ="menu"}){
    // const ButtonsComponent = buttonsComponent;
    return (<>
    <ButtonsComponent> {buttons}</ButtonsComponent>
    {children}
    </>);
}