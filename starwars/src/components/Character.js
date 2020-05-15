import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

// if character data is passed as props build a card element and put that data inside
//else null
const Character = props =>(
    <div>

        {props.char ? (

        <Card>

            <CardMedia 
                style={{height: 0, paddingTop: '56.25%'}} 
                image={props.char.image} //  THIS IS THE MAIN IMAGE FOR EACH CARD
                title={props.char.name} />

            <CardContent>

                <Typography 
                    gutterBottom variant="h4" 
                    component="h3">
                    {props.char.name}

                </Typography>

                <Typography 
                    component ="p">
                    {props.char.gender}, {props.char.species}, Status: {props.char.status} {/* THIS IS THE INNER HTML FOR EACH CARD */}

                </Typography>

            </CardContent>

            <CardActions>

                <Button 
                    size="small"
                    color="primary" 
                    href={props.char.image} 
                    target="_blank">
                        Source Image!
                        
                </Button>

            </CardActions>
            
        </Card>
           
        ): null }

    </div>
)

export default Character