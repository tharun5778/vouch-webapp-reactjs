import React, {Component} from 'react';
import {  CardBody, CardSubtitle,CardText, CardTitle, Row, Col, Card, CardImg} from 'reactstrap';


class User extends Component{
    render(){
        return(<div>

            {/* getting user and mostshared as a props from home to display user details and most tweets shared user  */}
            <div className="body">       
                        <Card>
                            <CardImg top width="10%" src="" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>{this.props.user.screen_name}</CardTitle>
                                <CardSubtitle>{this.props.user.user_id}</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <h1>Most shared links</h1>
                                <CardSubtitle>{this.props.mostshared.name}</CardSubtitle>
                            </CardBody>
                        </Card>
            </div>

            
        </div>);
    }
}

export default User;