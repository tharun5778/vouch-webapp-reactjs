import React, {Component} from 'react';
import {  CardBody, CardSubtitle,CardText, CardTitle,Card, CardImg} from 'reactstrap';


class User extends Component{
    render(){
        return(<div>

            {/* getting user and mostshared as a props from home to display user details and most tweets shared user  */}
            <div className="body">       
                        <Card>
                            <CardBody>
                                {(this.props.user.screen_name!= null && this.props.user.screen_name != undefined)&&(<CardTitle>{'@'}{this.props.user.screen_name}</CardTitle>)}
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <h3>User shared the Most links</h3>
                                <CardSubtitle>{this.props.mostshared.name}</CardSubtitle>
                            </CardBody>
                        </Card>
            </div>

            
        </div>);
    }
}

export default User;