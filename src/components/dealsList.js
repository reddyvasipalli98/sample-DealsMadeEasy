import React from 'react';
import './dealsList.css';

class DealsList extends React.Component{
    render(){
        return(
            <div className="deals-list">
                <div className="deal">
                    <div>Deal 1</div>
                    <img className="ui small image" src={require('../images/XPS.jpg')} />
                    <div>AJS AJDADJASD DIOAJIJDOIAJSD OIJASDIJAIDOJSD AOIDJAIJDIAJ</div>
                    <div>AJS AJDADJASD DIOAJIJDOIAJSD OIJASDIJAIDOJSD AOIDJAIJDIAJ</div>
                    <div>AJS AJDADJASD DIOAJIJDOIAJSD OIJASDIJAIDOJSD AOIDJAIJDIAJ</div>
                </div>
                <div className="deal">
                    <div>Deal 2</div>
                    <img className="ui small image" src={require('../images/macbook-air-on-brown-wooden-table.jpg')} />
                    <div>AJS AJDADJASD DIOAJIJDOIAJSD OIJASDIJAIDOJSD AOIDJAIJDIAJ</div>
                    <div>AJS AJDADJASD DIOAJIJDOIAJSD OIJASDIJAIDOJSD AOIDJAIJDIAJ</div>
                    <div>AJS AJDADJASD DIOAJIJDOIAJSD OIJASDIJAIDOJSD AOIDJAIJDIAJ</div>
                </div>
                <div className="deal">
                    <div>Deal 3</div>
                    <img className="ui small image" src={require('../images/black-and-gray-microsoft-windows-surface-turned-on-on-brown-surface.jpg')} />
                    <div>AJS AJDADJASD DIOAJIJDOIAJSD OIJASDIJAIDOJSD AOIDJAIJDIAJ</div>
                    <div>AJS AJDADJASD DIOAJIJDOIAJSD OIJASDIJAIDOJSD AOIDJAIJDIAJ</div>
                    <div>AJS AJDADJASD DIOAJIJDOIAJSD OIJASDIJAIDOJSD AOIDJAIJDIAJ</div>
                </div>
                <div class="ui vertical banner test ad" data-text="Vertical Ad Banner"></div>                
                <div class="ui mobile banner test ad" data-text="Mobile Banner"></div>
                <div className="deal">
                    <div>Deal 4</div>
                    <img className="ui small image" src={require('../images/dell xps.jpg')} />
                    <div>AJS AJDADJASD DIOAJIJDOIAJSD OIJASDIJAIDOJSD AOIDJAIJDIAJ</div>
                    <div>AJS AJDADJASD DIOAJIJDOIAJSD OIJASDIJAIDOJSD AOIDJAIJDIAJ</div>
                    <div>AJS AJDADJASD DIOAJIJDOIAJSD OIJASDIJAIDOJSD AOIDJAIJDIAJ</div>
                </div>
                <div className="deal">
                    <div>Deal 5</div>
                    <img className="ui small image" src={require('../images/Late_2010_MacBook_Air.jpg')}/>
                    <div>AJS AJDADJASD DIOAJIJDOIAJSD OIJASDIJAIDOJSD AOIDJAIJDIAJ</div>
                    <div>AJS AJDADJASD DIOAJIJDOIAJSD OIJASDIJAIDOJSD AOIDJAIJDIAJ</div>
                    <div>AJS AJDADJASD DIOAJIJDOIAJSD OIJASDIJAIDOJSD AOIDJAIJDIAJ</div>
                </div>
            </div>
        )
    }
}

export default DealsList;