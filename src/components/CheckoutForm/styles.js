import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    appBar: {
      positions: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2)) * 2]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      }
    },
}))