import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function MediaCard(cakeData) {
    const cake = cakeData.cakeData
    return (
        <Card >
            <CardMedia
                sx={{ height: 180 }}
                image={cake.image}
                title={cake.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {cake.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {cake.ingredients}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography variant="h6" sx={{marginLeft: "8px"}} component="div">
                    $35
                </Typography>
            </CardActions>
        </Card>
    );
}