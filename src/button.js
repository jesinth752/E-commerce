const button=(props)=>
{

    return(<button class={props.className} onClick={props.click}>{props.children}</button> )
}
export default button;