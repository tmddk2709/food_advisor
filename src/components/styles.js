import { alpha, makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontWeight: 'bold',
  },
  toolbar: {
    display: 'flex', justifyContent: 'space-between',
  },
  bgContainer: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "100%",
    // maxWidth: "1500px",
    height: "400px",
    // opacity: "0.5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    // marginTop: "20px",
    marginBottom: "20px",
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.7),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.5) },
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    // width: '100%',
    width: "500px",
    // [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(10), width: 'auto' },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    // transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('md')]: { width: '30ch' },
  },
  typeControl: {
    width: "120px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  typeSelect: {
    width: "100%",
    color: "inherit",
  },
  dietControl: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  dietSelect: {
    width: "100%",
    color: "inherit",
  },
  timeFrameControl: {
    width: "150px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  timeFrameSelect: {
    width: "100%",
    color: "inherit",
  },

  mealPlanDetailOutterBox: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  mealPlanDetailInnerBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  mealPlanDetailIcon: {
    fontSize: "20px",
    marginRight: "7px",
  },
  chip: {
    margin: '5px 5px 5px 0',
  },

}));

