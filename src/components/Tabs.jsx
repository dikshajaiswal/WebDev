export default function Tabs({children, buttons, ButtonsComponent}){
    // const ButtonsComponent = buttonsComponent;
    return (<>
    <ButtonsComponent> {buttons}</ButtonsComponent>
    {children}
    </>);
}