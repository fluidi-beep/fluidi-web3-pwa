import { Avatar, Card, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minHeight: 100,
    border: "1px solid black",
    marginTop: 15,
    padding: 15,
  },
});

const Droplet = ({ text, author, createdAt }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Avatar style={{ height: 100, width: 100 }} />
          <Typography>{text}</Typography>
          <Typography>{new Date(createdAt).toString()}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Droplet;
