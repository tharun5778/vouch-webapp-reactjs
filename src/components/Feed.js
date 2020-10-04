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
                            this.props.feed.map((i)=>(
                                
                                <div className='tweetCard'>
                                <Grid container spacing={3}>
                                    <Grid item xs={2}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="body2" component="h3">
                                            {i.text}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            ))
                        }
            </div>

            
        </div>);
    }
}

export default Feed;