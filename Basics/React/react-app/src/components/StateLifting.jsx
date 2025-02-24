import {useState} from "react";
/*
Using props, we can only send data from parent to child component, but there is no way we can send data from child to parent or one child to another sibling component (child of same parent component). That's where state lifting comes into play, in this, instead of defining state into child component, we define it in parent component, through which two sibling components can share data as well as send data to the parent component.
*/

function Parent() {
    const [para, updatePara] = useState('');    // state defined in parent component with empty default value.
    return (
        <>
           <Child paragraph={para} updatePara={updatePara} child="child1" /> {/* updatePara is prop that transfers updatePara function from useState  */}
           <Child paragraph={para} updatePara={updatePara} child="child2" />
           <h1>Paragraph from parent component: {para}</h1>
        </>

    );
}


function Child(props) {
    return(
        <>
                <input type="text" placeholder="Type sth here.." onChange={(e) => props.updatePara(e.target.value)} />   {/* Whatever to type here, it'll be shared with parent as well as sibling, also, both siblings are synched i.e. change on one sibling reflects on another */}
        <h2>Paragraph from {props.child} Component: {props.paragraph}</h2>
        </>

    );
}

export {Parent, Child};