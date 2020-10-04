import React, {Component} from 'react';
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';



class Feed extends Component{

    render(){
        return(<div className="backgroundFeed">
            <div className="body">       
                        {/* getting feed as a props from home to display tweets  */}
                        {
                            this.props.feed.map((tweet)=>(
                                <div>
                                <p>{"@"+tweet.user.screen_name}</p>
                                <div className='tweetCard'>
                                <Grid container spacing={3}>
                                    <Grid item>
                                        <Typography variant="body2" component="h3">
                                            {tweet.text}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                </div>
                            </div>
                            ))
                        }
            </div>

            
        </div>);
    }
}

export default Feed;