import React, {Component} from 'react';
import './App.css';
import {Row, Col} from 'reactstrap';
import './home.css';
import User from './user_details';
import Feed from './Feed';
import Links from './links';
import Header from './navbar';
import moment from 'moment';


class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            details:{},
            feed:[],
            mostshared:{},
            top_domains: []
        };
        
    }
    componentDidMount=()=>{
        var details=this.props.location.state.detail;
        fetch("https://vouch-api-1.herokuapp.com/tweets/"+details.oauth_token_secret+"/"+details.oauth_token)
      .then(res => res.json())
      .then(
        (result) => {
            console.log("RESULT",JSON.stringify(result));
            // filtering 7 days past tweets from all tweets
            var data = result.data;
            var date = new Date(moment().subtract(7, 'days').toDate());                                       
            var past_date = date.getTime();
            var feed = data.filter((tweet) => {                                                 
                return new Date(tweet.created_at) > past_date && tweet.entities.urls.length > 0                 
            }) 
            //  get tweets with links
            var domains = []
             feed.map(tweet => {
                      tweet.entities.urls.map(urlObj => {
                         let url = urlObj.expanded_url
                        if(url.indexOf("//") > -1){
                            var hostname = url.split('/')[2];
                        }
                        else {
                            hostname = url.split('/')[0];
                        }
                        domains.push(hostname)
                    })
            })
            var unique_domains = [...new Set(domains)]
            var top_domains=unique_domains.map(url_1 =>{
                var count = 0;
                domains.map(url_2 => {
                    if(url_1 == url_2){
                        count++;
                    }
                })
                return {count:count,url:url_1};
            })
            top_domains.sort((a, b)=> {return b.count - a.count});
            //get Most shared links Username
            var most_freq= 1;
            var count = 0;
            var mostshared;
            for (var i=0; i<feed.length; i++)
            {
                for (var j=i; j<feed.length; j++)
                {
                    if (feed[i].user.id == feed[j].user.id )
                        count++;
                    if (most_freq<count)
                    {
                        most_freq=count; 
                        mostshared = feed[i].user;
                    }
                }
            count=0;
            }
            this.setState({mostshared,feed,top_domains});
        },
        (error) => {
            console.log("error",error)
        }
      )
    }
    render(){
        return(<div>

            <Header/>  {/* nav bar */}
            <div className="body">
                <Row>
                    <Col xs="6" sm="4" className="sideborder">        
                        <User user={this.state.details} mostshared={this.state.mostshared}/>   {/* to display user details and most shared user */}
                    </Col>

                    <Col xs="6" sm="4" className="sideborder">
                        
                       {this.state.feed.length >0&&<Feed feed={this.state.feed}/>}      {/* To display all the tweets which contains links */}
                    </Col>

                    <Col sm="4">
                        <h2>Top domains</h2>
                        <Links top_domains={this.state.top_domains} />         {/* to display all the domains and their count */}
                    </Col>
                </Row>
            </div>

            
        </div>);
    }
}

export default Home;