import React from 'react';
import DealsList from './dealsList';
import deals from '../apis/deals';

class App extends React.Component{

    componentDidMount(){
        this.onImageLoad();
    }

    onImageLoad = async () => {
        const response = await deals.get('/getdeals',{
            params:{}
        });
        console.log(response);
    }

    render(){
        return(
            <div className="ui container">
                <h2>Deals Made Easy</h2><br/><br/>
                <DealsList/>
            </div>
        )
    }
}

export default App;