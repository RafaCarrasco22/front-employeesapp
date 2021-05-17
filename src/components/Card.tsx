import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

type Props = {
  name: string;
  endpoint: string;
  img: string;
};

interface Region {
    regionName: string;
    id: string;
    img: string;
    
  }

export default function ImgCard(props: Props) {
  const { name, endpoint, img } = props;
  const classes = useStyles();
  const [dataRegion, setDataRegion] = useState<null | Region[]>(null);
  const [open, setOpen] = React.useState(false);

  

  const handleOpen = () => {
    setOpen(true);
    console.log();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    
    
      <Card className={classes.root}>
        <CardActionArea>
          
            <CardMedia
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
          />
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleOpen}>
            Ver Países
          </Button>
        </CardActions>
      </Card>
      
    </>
  );
}
