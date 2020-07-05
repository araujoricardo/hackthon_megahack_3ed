import React from "react";
import { WrapperSearch, Img, Input} from './style';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <WrapperSearch>
                
                 
                    <Input
                        
                        type="text"
                        placeholder="Buscar curso" style= {{color:"#585858"}}
                        placeholderStyle = {{color:"#585858"}}
                    />
             
            </WrapperSearch>
        );
    }
}

export default Search;