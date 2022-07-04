import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 18,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,0,0,1)',
    fontFamily: 'monospace',
    backgroundColor:'rgba(255,255,255,.8)',
    borderRadius:'.25em',
    boxShadow:'0 0 .25em rgba(0,0,0,.25)',
  },
  image: {
    marginLeft: '15px',
  },
}));
