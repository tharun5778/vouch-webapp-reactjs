import React, {Component} from 'react';
import { Card} from 'reactstrap';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


class Links extends Component{
    render(){
        return(<div>

            {/* getting top_domains as a props from home to display domains and their count  */}
            <div className="body">       
                <div>
                    {
                        this.props.top_domains.map((domain)=>
                        (<Card>
                            <Grid container spacing={3}>
                                <Grid item xs={2}>
                                    
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body2" component="h3">
                                        {domain.url+ " ("+ domain.count+")"}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>)
                        )
                    }
                </div>
            </div>

            
        </div>);
    }
}

export default Links;